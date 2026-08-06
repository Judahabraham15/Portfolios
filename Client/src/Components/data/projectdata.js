const projects = [
  {
    slug: "medicx",
    img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763632234/Screenshot_2025-11-20_104944_uxotyh.png",
    title: "MedicX",
    desc: "Built a healthcare platform with React and Tailwind CSS, featuring HubSpot waitlist integration and Framer Motion animations for doorstep medical services.",
    para1:
      "MedicX  is a healthcare platform that brings medical services directly to users' doorsteps. Built with React, and Tailwind CSS, featuring a modern interface. HubSpot integration captures early sign-ups before the official launch.",
    para2:
      "Many people struggle with fragmented healthcare systems where appointments, records, labs, and consultations are spread across different platforms. This lack of centralization often leads to wasted time, repeated processes, and poor user experience, discouraging people from actively managing their health.",
    para3:
      "MedicX eliminates these barriers by bringing qualified healthcare professionals directly to patients' locations. The platform removes the need for commuting and waiting rooms, making healthcare fit seamlessly into users' lives. The waitlist captures early adopters who will receive priority access to this innovative doorstep healthcare service when it launches.",
    technologies: [
      "React",
      "Tailwind CSS",
      "HubSpot",
      "Javascript",
      "Framer Motion",
      "GitHub",
    ],
    link: "https://medicx.app",
  },
  {
    slug: "myright",
    img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1782674208/Screenshot_2026-06-28_201430_pcnvi3.png",
    title: "MyRight (Hackathon winning project)",
    desc: "A legal access platform connecting everyday Nigerians to ADR services and their rights.",
    para1:
      "MyRight is a legal-access platform that connects everyday Nigerians — tenants, landlords, small business owners — to certified ADR mediators through a guided digital flow instead of a courtroom. A user submits their dispute through an intake form, an AI layer (Gemini) classifies the dispute and recommends a resolution pathway in plain language, and the platform then matches them to a mediator for a live, structured session. When both sides agree on terms, a downloadable settlement document is generated to close it out.",
    para2:
      "Nigeria's courts are drowning — commercial and civil cases can take 2-7 years to resolve — and the ADR system built to relieve that pressure (mediation, arbitration, conciliation) is legally valid but practically invisible. It's physically concentrated in a handful of urban centres, requires in-person attendance, and most Nigerians don't even know it exists as a faster, cheaper alternative to a lawyer. So people just eat the loss: unpaid rent, broken contracts, withheld deposits go unresolved because the proper channel is either a multi-year court case or an unaffordable retainer.",
    para3:
      "A working end-to-end ADR platform — users submit a dispute through a guided intake form, Gemini AI classifies it and recommends mediation or arbitration, the platform matches them to a certified mediator, both parties meet in a live structured chatroom to resolve it, and once agreed, a downloadable settlement document is auto-generated. Built with React, TypeScript, Tailwind, and Shadcn UI — the full intake-to-settlement loop works in one flow, from phone to resolution, no lawyer or courtroom needed.",
    technologies: [
      "Node.Js",
      "Typescript",
      "Gemini AI",
      "React PWA",
      "Schdan UI",
      "Tailwind",
    ],
    link: "https://my-right-one.vercel.app/",
    githubLink: "https://github.com/tech-monarch/MyRight",
  },
  {
    slug: "shift-web",
    img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1785102092/Screenshot_2026-07-26_223846_korses.png",
    title: "Shift Web",

    para1:
      "Shift is a behavior-enforcement mechanism, not a to-do list or organizer. It's built around a Commitment Gap model: a Morning Trigger forces the user to declare their single most important task before they can even start their day, and a Visible Streak publicly tracks consecutive days completed — making consistency something the user is genuinely afraid to break. It's aimed at founders, students, and high-achievers who want unavoidable daily execution, not another passive planner.",
    para2:
      "Productivity tools fail not because people can't plan — they fail because there's no real accountability behind the plan. Existing habit trackers are toothless: breaking a 100-day streak costs nothing, so users just quit with no consequence. On top of that, builders face a direct conflict between doing the work (deep, uninterrupted execution) and marketing the work (constant build in public documentation) and the documentation time eats into the execution time. The result is low-stakes software that lets people abandon their goals without friction.",
    para3:
      "Two mechanics power the system. The Morning Trigger is a high-priority alarm that forces the user to declare their one Lock-In Task before they can dismiss it and start their day — no vague to-do list, just one committed task each morning. The Visible Streak sits on the home screen tracking consecutive days completed, turning consistency into something the user is genuinely afraid to break rather than a number they can ignore. On top of this free core loop, Shift Pro lets users convert that private streak into shareable, external proof of their discipline — accountability and light marketing built right into the habit itself.",
    technologies: ["Node.Js", "Typescript", "React", "Tailwind Css"],
    link: "https://shift-web-ochre.vercel.app",
    githubLink: "https://github.com/Pantheon-launchpad/Shift-Web",
  },
  {
    slug: "shift-mobile",
    img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1786022639/shift_login_aujfme.jpg",
    title: "Shift Mobile",
    desc: "Shift Mobile App, a platform that turns your goal into today's one task — and proof you did it.",
    link: "",
  },
  {
    slug: "haven",
    img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1782674606/Screenshot_2026-06-28_202240_j9raa1.png",
    desc: "A marketplace connecting Nigerians with vetted local service providers — with secure escrow payments and verified listings.",
    para1:
      "Haven is a community-backed trust and verified-service platform that digitizes the informal trust networks Nigerians already rely on — churches, mosques, savings cooperatives — instead of trying to build trust from scratch. Artisans get verified by a community leader who actually knows them, not just an uploaded ID. Users interact through a lightweight WhatsApp conversational interface and a low-bandwidth PWA (built for 2G/3G realities), book services, pay into escrow, and release funds via a PIN once the job's done. Disputes get resolved by community leaders acting as mediators rather than courts.",
    para2:
      "Nigeria's informal service economy (90%+ of the workforce, $5.17B in gig activity) runs entirely on word-of-mouth trust because formal infrastructure — address databases, credit histories, court systems — barely exists. That means every transaction is a gamble: homeowners can't verify artisans before letting them in, deposits get lost to fraud, so people insist on paying cash only after work is done, or avoid hiring altogether. Meanwhile skilled local talent (plumbers, electricians) stays invisible in their own neighborhoods, and money leaks out to expensive outside contractors. Western marketplace models (TaskRabbit, Upwork) fail here because they assume the underlying trust infrastructure (credit scores, legal recourse) already exists — it doesn't.",
    para3:
      "A functional demo combining a simulated WhatsApp conversational booking flow with a client-facing PWA for browsing verified local artisans and tracking jobs, backed by a real Paystack sandbox escrow integration — client pays in, funds are held, and a PIN release triggers payout with automatic commission splits. Identity checks, voice transcription, and live GPS tracking were mocked for the demo, with the full production architecture (FastAPI microservices, PostGIS matching, fraud detection models) scoped as the next build phase rather than shipped in the hackathon version.",
    title: "Haven",
    technologies: ["Node.Js", "Typescript", "Next.js", "Tailwind Css"],
    link: "https://shift-web-ochre.vercel.app",
    githubLink: "https://github.com/tech-monarch/rccg-hackathon",
  },

  {
    slug: "jshare",
    img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763633342/Screenshot_2025-11-20_105948_vnxvlg.png",
    title: "JShare",
    desc: "A streamlined file-sharing solution designed for fast, effortless collaboration.",
    technologies: [
      "Typescript",
      "Javascript",
      "React",
      "Tailwind CSS",
      "Express Js",
      "Render",
      "Github",
      "ImageKit",
    ],
    para1:
      "Jshare is a modern file upload platform built with React, Typescript, Express and ImageKit. It features drap-and-drop functionality, secure cloud storage with a clean, responsive interface.",
    para2:
      "Many people struggle with slow, complicated file sharing tools that create unnecessary delays in their work and communication. Whether it's a cumbersome upload processes, confusing interfaces, or unreliable transfers, these friction points waste time and hinder productivity. There was a clear need for a streamlined solution that makes file sharing genuinely fast and effortless-so I built Jshare using React, Typescript, Express.js, and ImageKit to solve exactly that!",
    para3:
      "Jshare eliminates file sharing friction with a fast, intuitive platform built for seamless uploads. Powered by React, Typescript, Express.js, and ImageKit's robust CDN infrastructure, it delivers drag and drop simplicity, and reliable cloud storage. Users can share files instantly without the hassle-no complicated steps, no delays, just effortless uploading that keeps workflows moving.",
    link: "https://j-upload.vercel.app/",
    githubLink: "https://github.com/Judahabraham15/J-Uploads",
  },
  {
    slug: "pantheon",
    img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1768955091/Screenshot_2026-01-21_011811_ftbytq.png",
    title: "Pantheon",
    desc: "A startup portfolio that shows its aim at marketing buisness and other startup ideas",
    para1:
      "A sleek portfolio platform for Pantheon, built to present its marketing services and startup ideas to clients and investors with a strong, credible brand identity.",
    para2:
      "Most startups and marketing ventures struggle to present their ideas, services, and portfolio in a way that feels credible, cohesive, and compelling to potential clients or investors. Without a strong digital presence, even great ideas get overlooked — and early-stage ventures rarely have the resources to commission expensive agency-built sites that do them justice.",
    para3:
      "Pantheon — a startup portfolio platform designed to showcase marketing businesses and startup ideas with clarity and confidence. It gives the venture a professional home to present its mission, highlight its projects, and communicate its value to the right audience, whether that's clients, collaborators, or early backers.",
    technologies: [
      "React",
      "Typescript",
      "Tailwind Css",
      "Aceternity UI",
      "Proforms",
    ],
    link: "https://launchbase.one",
  },
  {
    slug: "lagos-cricket",
    img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1770849340/Screenshot_2026-02-11_233226_m7wjmg.png",
    title: "Lagos-Cricket Stakeholder",
    desc: "A stakeholder management platform for the Lagos Cricket Club.",
    para1:
      "A content-managed platform built for the Lagos Cricket Club, enabling admins to publish news and broadcast live match updates to members, sponsors, and fans in one place.",
    para2:
      "The Lagos Cricket Club had no central platform for keeping members, sponsors, and supporters informed. News updates were scattered across social media, live match information was hard to follow in real time, and there was no structured way for leadership to communicate officially with stakeholders. This created confusion, disengagement, and a lack of professionalism around the club's growing brand.",
    para3:
      "A dedicated stakeholder management platform where club admins can publish news articles, post live match updates, and keep all stakeholders — members, sponsors, and fans — informed through one clean, organized hub. The platform gives the club a professional digital presence while giving admins full control over content without needing technical skills.",
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwind Css",
      "Shadcn UI",
      "Laravel",
    ],
  },
  {
    slug: "blinkist",
    img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763627842/Blink_zspbte.png",
    title: "Blinkist-Landing Page",
    desc: "A Blinkist-Landing Page with more features and a modern Login Page",
    para1:
      "A modern Blinkist landing page clone focused on enhanced UI structure, improved feature presentation, and a redesigned login experience — built purely for frontend design exploration.",
    para2:
      "While analyzing the landing experience of Blinkist, I noticed that although the platform clearly communicates its value, the landing page could feel more immersive and feature-driven. The structure is minimal, but there’s room to better highlight user benefits, social proof, engagement elements, and a more visually modern authentication experience. The login and onboarding flow, in particular, felt functional but not visually compelling enough to elevate the overall first impression.",
    para3:
      "I built a redesigned Blinkist landing page clone focused purely on frontend design and UI exploration. I enhanced the layout with clearer content sections, improved visual hierarchy, stronger call-to-action placement, and more engaging feature highlights. Alongside the landing page, I designed a modern, cleaner login page to create a more polished and cohesive user experience. The goal was to reimagine the brand’s presentation while maintaining simplicity and clarity.",
    technologies: ["JavaScript", "Html", "Css"],
    link: "https://blinkist-landing-page-seven.vercel.app/",
  },
  {
    slug: "ikechukwu",
    img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763627962/port_ckjluh.png",
    title: "Ikechukwu Portfolio",
    desc: "A website that displays the skills of a pharmacist who transitioned to tech",
    para1:
      "A portfolio website that showcases a pharmacist's transition into tech, presenting their technical skills alongside the unique edge their healthcare background provides.",
    para2:
      "Professionals who transition from non-tech fields into tech often struggle to present themselves convincingly online. A pharmacist moving into tech carries a unique and valuable blend of analytical thinking, attention to detail, and domain expertise — but traditional developer portfolios don't make room for that story, leaving a genuinely standout background looking generic or mismatched.",
    para3:
      "A personal portfolio website that bridges both worlds — presenting the pharmacist-turned-tech professional's technical skills while weaving in the credibility and precision their healthcare background brings. It tells a compelling career transition story that makes them memorable, not just qualified.",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://ikechwukwu-portfolio.vercel.app/",
  },
];
export default projects;
