import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, PageHeader } from "@/components/layout";
import { articles } from "@/content/articles";

type Props = { params: Promise<{slug:string}> };
function getArticle(slug:string) { return articles.find(a=>a.slug===slug); }
export function generateStaticParams() { return articles.map(a=>({slug:a.slug})); }
export async function generateMetadata({params}:Props):Promise<Metadata> {
 const article=getArticle((await params).slug);
 if(!article) return {title:"Article not found"};
 return {title:`${article.title} | Idris Junaid`,description:article.summary,keywords:article.keywords,
  openGraph:{title:article.title,description:article.summary,type:"article",...(article.publishedOn?{publishedTime:article.publishedOn}: {})}};
}
export default async function ArticleDetailPage({params}:Props) {
 const article=getArticle((await params).slug);
 if(!article) notFound();
 const isNewsletter=Boolean(article.subtitle || article.visual);
 return <main className="min-h-screen bg-white pb-24 text-zinc-950">
 <div className="border-b border-zinc-200 bg-gradient-to-br from-teal-950 via-slate-900 to-zinc-950 py-16 text-white sm:py-24">
 <Container>
 <Link href="/articles" className="text-sm font-semibold text-teal-200 hover:text-white">← All articles</Link>
 <div className="mt-9 max-w-4xl">
 <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-300">{isNewsletter?"Pharma AI and Robotics • Newsletter Series":article.category}</p>
 <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">{article.title}</h1>
 {article.subtitle&&<p className="mt-5 text-xl leading-relaxed text-teal-100 sm:text-2xl">{article.subtitle}</p>}
 <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300">{article.summary}</p>
 <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-300"><span>By Idris Junaid</span><span>{article.estimatedReadTime} read</span>{article.publishedOn&&<time dateTime={article.publishedOn}>{new Date(article.publishedOn+"T12:00:00Z").toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"})}</time>}</div>
 </div></Container></div>
 <Container>
 <div className="mx-auto max-w-3xl">
 {article.visual&&<figure className="my-12 rounded-2xl border border-teal-100 bg-teal-50/60 p-5 sm:p-8">
 <figcaption className="mb-6 text-sm font-bold uppercase tracking-wider text-teal-900">{article.visual.title}</figcaption>
 <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{article.visual.steps.map((step,i)=><div key={step} className="rounded-xl border border-teal-100 bg-white px-4 py-5 shadow-sm"><span className="text-xs font-bold text-teal-700">0{i+1}</span><p className="mt-2 font-semibold leading-snug text-slate-900">{step}</p></div>)}</div>
 <p className="mt-4 text-xs text-zinc-600">Original conceptual illustration. The sequence is illustrative, not a validated technical protocol.</p>
 </figure>}
 {article.takeaway&&<blockquote className="my-10 border-l-4 border-teal-700 pl-6 text-xl font-semibold leading-relaxed text-slate-800 sm:text-2xl">“{article.takeaway}”</blockquote>}
 <div className="space-y-11 pt-2">{article.sections?.map((section,i)=><section key={section.heading} className="scroll-mt-10">
 <h2 className="mb-5 text-2xl font-bold leading-snug tracking-tight text-zinc-950 sm:text-3xl">{section.heading}</h2>
 <div className="space-y-5">{section.paragraphs.map((paragraph,j)=><p key={j} className="text-[1.075rem] leading-[1.95] text-zinc-700">{paragraph}</p>)}</div>
 </section>)}</div>
 {article.references&&article.references.length>0&&<section className="mt-14 border-t border-zinc-200 pt-8"><h2 className="text-xl font-bold">Sources and further reading</h2><ul className="mt-4 space-y-3">{article.references.map(ref=><li key={ref.url}><a href={ref.url} target="_blank" rel="noopener noreferrer" className="font-medium leading-7 text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">{ref.label} ↗</a></li>)}</ul><p className="mt-4 text-sm leading-6 text-zinc-600">Technical commentary is the author's analysis. Company statements and future targets are distinguished from established clinical or regulatory outcomes.</p></section>}
 {isNewsletter&&<aside className="mt-12 rounded-xl bg-slate-50 p-6 sm:p-8"><h2 className="text-lg font-bold">About the author</h2><p className="mt-3 leading-8 text-zinc-700">Idris Junaid is a pharmaceutical manufacturing and Quality Assurance professional developing expertise in Artificial Intelligence, robotics and autonomous systems. His interests include pharmaceutical AI, intelligent Quality systems, biotechnology, healthcare technology and responsible deployment in regulated environments.</p></aside>}
 <nav className="mt-12 border-t border-zinc-200 pt-7"><Link className="font-semibold text-teal-800 hover:text-teal-950" href="/articles">← Explore all articles</Link></nav>
 </div>
 </Container></main>;
}
