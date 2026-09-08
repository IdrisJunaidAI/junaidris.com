"use client";

export function PrintButton() {
  return <button className="button-dark print-hide" onClick={() => window.print()} type="button">Print / Save PDF ↗</button>;
}
