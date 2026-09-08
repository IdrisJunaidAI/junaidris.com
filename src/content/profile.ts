export type CareerEntry = {
  title: string;
  organization: string;
  period: string;
  description: string;
  bullets: string[];
};

export const profile = {
  brandName: "Junaidris",
  fullName: "Idris Junaid",
  credential: "M.S., Analytical Chemistry",
  role: "Senior Quality Assurance Specialist · Biopharma Technical Writer · AI Builder",
  location: "United States · Open to relocation",
  phone: "(640) 204-6940",
  email: "junaid.idris2@gmail.com",
  summary: "Biopharmaceutical quality and manufacturing professional with experience across cGMP operations, downstream purification, mRNA production, quality systems, technical training, and continuous improvement. Building a parallel practice in AI, robotics, automation, product design, and technical writing for complex scientific work.",
  specialties: ["cGMP quality assurance", "Downstream purification", "mRNA manufacturing", "Deviation and CAPA investigations", "SOP and technical writing", "Lean Six Sigma and root cause analysis", "MES, eBR, SAP, DeltaV, LIMS", "AI, robotics, and automation"],
  experience: [
    { title: "Senior Quality Assurance Specialist — QA On The Floor", organization: "Catalent Pharma Solutions · Harmans, Maryland", period: "June 2025 – Present", description: "Provides quality oversight for GMP gene therapy operations and partners with manufacturing and EHS leadership to support compliant, disciplined execution.", bullets: ["Owns and supports deviation and CAPA workflows.", "Applies quality systems thinking to floor operations, documentation, and cross-functional decisions.", "Supports FDA and EMA-aligned quality expectations in a regulated manufacturing environment."] },
    { title: "Consultant II — Downstream Purification", organization: "BeiGene / BeOne Medicines · Hopewell, New Jersey", period: "November 2024 – Present (CV version supplied)", description: "Supports downstream purification, buffer preparation, validation, technical training, and continuous improvement in a cGMP environment.", bullets: ["Delivered more than 250 PPQ buffer preparation and hold recipe runs and supported OQ validation for 14 vessels.", "Trained new hires on RIP, CIP, SIP, and buffer transfer using DeltaV DCS.", "Authored and executed test protocols, supported equipment debugging, freezer validation, EM activities, and MAXIMO asset registration.", "Partnered with cross-functional teams on design reviews, troubleshooting, and process improvement."] },
    { title: "Manufacturing Operations Specialist", organization: "Pfizer · Andover, Massachusetts", period: "April 2024 – November 2024", description: "Supported manufacturing operations, electronic and paper batch records, deviations, walkthroughs, safety audits, and downstream process improvement.", bullets: ["Managed batch records, eBRs, and deviations using AMPS and QRM to support timely lot release.", "Led GMP walkthroughs and cross-functional safety audits.", "Trained personnel on equipment operation and cGMP documentation.", "Partnered with CI and MS&T teams on design reviews and process optimization."] },
    { title: "Manufacturing Associate — Drug Substance", organization: "Moderna Therapeutics · Norwood, Massachusetts", period: "February 2023 – July 2024", description: "Executed downstream drug substance operations and supported scale-up, investigations, CAPA, eBR review, and manufacturing systems work.", bullets: ["Performed TFF and dT chromatography operations with a focus on process reproducibility.", "Supported deviation investigations and CAPAs.", "Contributed to SAP S/4HANA to GSAP migration, MES performance, FAT/SAT testing, and scale-up activities."] },
    { title: "Graduate Teaching Assistant", organization: "Stevens Institute of Technology · Hoboken, New Jersey", period: "May 2022 – July 2022", description: "Supported GLP laboratory teaching, chemical safety, analytical testing, documentation, and laboratory operations.", bullets: ["Worked with GC-MS, LC-MS/MS, UV-Vis, polarimetry, and atomic absorption spectroscopy.", "Trained students in SOP-compliant equipment handling and chemical safety.", "Supported hazardous-waste practices, materials coordination, and laboratory documentation."] },
  ] satisfies CareerEntry[],
  mentorship: { title: "Lead Mentor Volunteer", organization: "New York Academy of Sciences STEM Mentorship Program", period: "Graduate-study period", description: "Mentored high-school students in STEM learning, academic readiness, college pathways, and purpose-driven project work in a community setting." },
  education: [
    { title: "Master of Science, Analytical Chemistry", organization: "Stevens Institute of Technology · Hoboken, New Jersey", detail: "2022" },
    { title: "Bachelor of Science, Chemistry", organization: "University of Lagos · Lagos, Nigeria", detail: "2015" },
    { title: "Radiology for Dental Auxiliaries", organization: "Boston University Henry M. Goldman School of Dental Medicine", detail: "Certification" },
  ],
  certifications: ["Lean Six Sigma Green Belt", "Root Cause Analysis and CAPA Methodology", "SAP MM, PP, and SD modules", "Dental Assistant License", "Basic Life Support (BLS)", "Pfizer GMP compliance and documentation training", "Moderna manufacturing systems training"],
  systems: ["MES", "Electronic batch records (eBR)", "SAP S/4HANA", "Syncade", "DeltaV", "AMPS", "LIMS", "PI Historian", "MAXIMO", "MET 1", "MAS"],
  publications: ["Unveiling KRAS G12D Inhibition: From Molecular Dynamics to Therapeutic Strategies — Journal of Biomolecular Structure and Dynamics (2025)", "Acetylcholinesterase Inhibitory Potential of Plant-Based Phenolics in the Treatment of Alzheimer’s Disease — Brazilian Journal of Science (2024)", "Advances in 3D Printing of Poly(ε-Caprolactone) Scaffolds for Bone Tissue Engineering — Journal of Chemistry and Allied Sciences (2023)", "Organic Chemistry Made Easy for Senior High School — Author and publisher of the Organic Chemistry Bulletin for Africa (2024)"],
  memberships: ["American Chemical Society (ACS)", "International Society for Pharmaceutical Engineering (ISPE)", "American Society for Quality (ASQ)"],
  links: { github: "https://github.com/IdrisJunaidAI/junaidris.com", linkedin: "https://www.linkedin.com/in/idris-junaid-45b1b1bb/", googleScholar: "https://scholar.google.com/citations?user=CDwBbuQAAAAJ&hl=en", orcid: "https://orcid.org/0009-0005-8726-1709" },
} as const;
