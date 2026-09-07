"use client";

import Link from "next/link";
import { useState } from "react";

const projects = [
  { name: "Quality Atlas", type: "AI Design", tone: "coral", orbit: "orbit-one" },
  { name: "Cell / Signal", type: "Brand Identity", tone: "violet", orbit: "orbit-two" },
  { name: "Orbit OS", type: "Development", tone: "blue", orbit: "orbit-three" },
  { name: "Nova Forms", type: "UI Design", tone: "mint", orbit: "orbit-four" },
];

export function OrbitHero() {
  const [active, setActive] = useState("Quality Atlas");

  return (
    <section className="universe relative isolate overflow-hidden bg-[#08090d] text-white">
      <div className="universe-grid" aria-hidden="true" />
      <div className="nebula nebula-a" aria-hidden="true" />
      <div className="nebula nebula-b" aria-hidden="true" />
      <div className="stars" aria-hidden="true" />
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-24">
        <div className="relative z-10 max-w-xl">
          <p className="eyebrow text-[#b9d7ff]">Junaid Ris · Product designer & technical writer</p>
          <h1 className="mt-6 max-w-2xl text-5xl font-medium tracking-[-0.055em] text-white sm:text-6xl lg:text-[clamp(4rem,6vw,6.8rem)] lg:leading-[0.92]">
            Building experiences beyond screens.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-white/62 sm:text-lg">
            I connect product design, biopharma systems, AI, robotics, and visual storytelling to make complex work feel clear, human, and useful.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#portfolio" className="button-primary">Explore portfolio <span aria-hidden="true">↗</span></Link>
            <Link href="/contact" className="button-ghost">Hire me</Link>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-white/38">Product design · Branding · AI · Motion · Visual systems</p>
        </div>

        <div className="orbit-stage" aria-label="Interactive project constellation">
          <div className="orbit-line line-one" aria-hidden="true" />
          <div className="orbit-line line-two" aria-hidden="true" />
          <div className="orbit-line line-three" aria-hidden="true" />
          {projects.map((project) => (
            <button
              className={`project-orb ${project.orbit} orb-${project.tone} ${active === project.name ? "is-active" : ""}`}
              key={project.name}
              onClick={() => setActive(project.name)}
              type="button"
              aria-label={`View ${project.name}, ${project.type}`}
            >
              <span className="orb-mark" aria-hidden="true">✦</span>
              <span className="block text-sm font-medium text-white">{project.name}</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-white/48">{project.type}</span>
            </button>
          ))}
          <div className="portrait-core">
            <div className="portrait-ring"><span>JR</span></div>
            <p className="mt-3 text-center text-[10px] uppercase tracking-[0.18em] text-white/45">The designer</p>
          </div>
          <div className="active-project">Selected / <span>{active}</span></div>
        </div>
      </div>
    </section>
  );
}
