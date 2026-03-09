"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiNotion,
  SiHubspot,
  SiExpo,
} from "react-icons/si";
import { FaJs, FaHtml5 } from "react-icons/fa";

import { TracingBeam } from "./UI/TracingBeam";

const experiences = [
  {
    company: "Pantheon",
    role: "Frontend Engineer",
    period: "2025 — Present",
    type: "Full-time",

    highlights: [
      "Led the frontend development of Pantheon’s new startup portfolio feature, contributing to higher deal acquisition.",
      "Developed the frontend for Lagos Cricket Club as a partner project, working in collaboration with Pantheon’s engineering team.",
    ],
    tags: [
      { label: "React.js", icon: FaReact, color: "#2B7FA0" },
      { label: "Next.js", icon: SiNextdotjs, color: "black" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#2B7FA0" },
      { label: "Notion", icon: SiNotion, color: "#27272A" },
      { label: "Expo Go", icon: SiExpo, color: "#000020" },
    ],
  },
  {
    company: "MedicX",
    role: "Junior Frontend Engineer",
    period: "2025 — Present",

    highlights: [
      "Built and shipped the MedicX landing page in collaboration with the MedicX team, working closely with designers, developers, and stakeholders to bring the product's vision to life.",
      "Developed and shipped the MedicX Waitlist Form as part of the MedicX team, building out the full functionality to capture and onboard early users ahead of launch.",
    ],
    tags: [
      { label: "React.js", icon: FaReact, color: "#2B7FA0" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#2B7FA0" },
      { label: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
    ],
  },
  // {
  //   company: "Figma",
  //   role: "Frontend Engineer",
  //   period: "2018 — 2020",
  //   type: "Full-time",
  //   location: "San Francisco, CA",
  //   highlights: [
  //     "Worked on Figma's core canvas rendering pipeline, improving frame-rate stability on complex documents by 25%.",
  //     "Shipped the Prototype Preview feature from 0 to GA, collaborating across 4 engineering teams.",
  //     "Introduced accessibility auditing into CI/CD pipeline, increasing WCAG AA compliance from 61% to 94%.",
  //   ],
  //   tags: [
  //     { label: "WebGL", icon: SiWebgl, color: "#990000" },
  //     { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  //     { label: "C++", icon: TbBrandCpp, color: "#00599C" },
  //     { label: "WebAssembly", icon: SiWebassembly, color: "#654FF0" },
  //   ],
  // },
  // {
  //   company: "Shopify",
  //   role: "Junior Frontend Developer",
  //   period: "2016 — 2018",
  //   type: "Full-time",
  //   location: "Ottawa, Canada",
  //   highlights: [
  //     "Developed merchant-facing storefront customization tools as part of the Online Store 2.0 team.",
  //     "Built reusable Liquid + React hybrid components, adopted across 200+ internal theme templates.",
  //     "Reduced storefront page load time by 18% through asset optimization and lazy-loading strategies.",
  //   ],
  //   tags: [
  //     { label: "React", icon: FaReact, color: "#61DAFB" },
  //     { label: "Ruby on Rails", icon: SiRubyonrails, color: "#CC0000" },
  //     { label: "SCSS", icon: FaCss3Alt, color: "#CC6699" },
  //   ],
  // },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2024 — Present",
    // type: "Contract",
    location: "Remote",
    highlights: [
      "Developed various client websites across Blog sites and portfolio.",
      "Developed hands-on expertise and expanded my technical skill set through practical experience.",
    ],
    tags: [
      { label: "React.js", icon: FaReact, color: "#2B7FA0" },
      { label: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#2B7FA0" },
      { label: "Express.js", icon: SiExpress, color: "#000000" },
    ],
  },
];

function TechTag({ tags }) {
  return (
    <div className="flex items-center mt-2">
      {tags.map((tag, i) => {
        const Icon = tag.icon;

        return (
          <motion.div
            key={tag.label}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={`relative flex items-center ${i !== 0 ? "-ml-2.5" : ""}`}
          >
            <motion.div
              variants={{
                rest: { width: 28 },
                hover: { width: 90 },
              }}
              transition={{ type: "spring", damping: 10 }}
              className="h-6.5 rounded-full bg-[#abd6b7] border border-[#4c524d] flex items-center overflow-hidden shadow-sm"
            >
              <div className="w-6.5 h-6.5 flex items-center justify-center flex-shrink-0">
                <Icon style={{ color: tag.color }} className="w-3.5 h-3.5" />
              </div>

              <motion.span
                variants={{
                  rest: { opacity: 0, x: -6 },
                  hover: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.18 }}
                className="text-[11px] text-black whitespace-nowrap pr-2 font-medium"
              >
                {tag.label}
              </motion.span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-14 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center bg-emerald-100 text-emerald-700 border border-emerald-400 text-xs font-outfit tracking-widest uppercase px-3 py-1 rounded-full">
          {exp.period}
        </span>
        {/* <span
          className={twMerge(
            "text-xs font-medium px-2.5 py-0.5 rounded-full",
            typeColor[exp.type],
          )}
        >
          {exp.type}
        </span> */}
      </div>

      <div className="relative bg-[#e6f4ea] shadow-md border border-zinc-200 rounded-2xl p-6  overflow-hidden">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
          <div>
            <h1 className=" text-2xl md:text-3xl font-bold text-brand-text tracking-tight leading-none mb-2 md:mb-3">
              {exp.company}
            </h1>
            <p className="text-[13px] md:text-[14px] font-semibold text-zinc-500 tracking-wide uppercase">
              {exp.role}
            </p>
          </div>
        </div>

        <ul className="space-y-2.5 mb-5">
          {exp.highlights.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-zinc-600 leading-relaxed"
            >
              {/* <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black" /> */}
              {point}
            </li>
          ))}
        </ul>

        <TechTag tags={exp.tags} />
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <div className="min-h-screen py-30 px-4 font-outfit">
      <div className="max-w-2xl mx-auto mb-16 pl-5 md:pl-0">
        <h1 className="mb-1 text-3xl md:text-5xl font-semibold text-gray-900 font-outfit tracking-tight">
          Work Experience
        </h1>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-xl text-left">
          Early in my journey, but already shipping products that solve real
          problems for real users.
        </p>
      </div>

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto pt-2 relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}
