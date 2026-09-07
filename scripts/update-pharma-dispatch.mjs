import fs from "node:fs/promises";

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) throw new Error("OPENAI_API_KEY is required");

const feeds = [
  "https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds",
  "https://www.nih.gov/news-events/news-releases/feed",
  "https://www.ema.europa.eu/en/news-events/news/rss.xml",
];
const sourceText = (await Promise.all(feeds.map(async (url) => {
  try {
    const result = await fetch(url);
    return result.ok ? await result.text() : "";
  } catch { return ""; }
}))).join("\n").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").slice(0, 18000);
const prompt = `Write three original, concise technical-writing briefs for Junaid Ris's AI Pharma Dispatch using only the source headlines and summaries below. Focus on verified developments in AI, biopharma operations, pharma quality, robotics, or technical writing. Do not invent facts, claims, companies, dates, or citations. Return JSON only as an array of objects with id, date, label, title, summary, readTime. The voice is clear, rigorous, human, and practical. These are editorial briefs, not medical advice.\n\nSOURCE FEEDS:\n${sourceText}`;
const response = await fetch("https://api.openai.com/v1/responses", {
  method: "POST",
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
  body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-5-mini", input: prompt }),
});
if (!response.ok) throw new Error(`OpenAI request failed: ${response.status}`);
const data = await response.json();
const text = data.output?.flatMap((item) => item.content || []).find((item) => item.type === "output_text")?.text;
if (!text) throw new Error("No editorial output returned");
const entries = JSON.parse(text.replace(/^```json\s*|\s*```$/g, ""));
const source = `export const pharmaDispatch = ${JSON.stringify(entries, null, 2)} as const;\n`;
await fs.writeFile("src/content/pharma-dispatch.ts", `export type PharmaDispatch = (typeof pharmaDispatch)[number];\n\n${source}`);
