import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-DXTZCRAZ.js";

// src/app/core/services/demo.service.ts
var DemoService = class _DemoService {
  services = signal([
    { id: 1, title: "Web Development", description: "Modern and responsive web applications using Angular and Node.js.", icon: "bi-code-slash" },
    { id: 2, title: "Mobile Solutions", description: "Cross-platform mobile apps built with Capacitor and Flutter.", icon: "bi-phone" },
    { id: 3, title: "Cloud Infrastructure", description: "Scalable cloud architecture on AWS and Azure.", icon: "bi-cloud" },
    { id: 4, title: "UI/UX Design", description: "User-centric designs that enhance engagement and satisfaction.", icon: "bi-palette" }
  ], ...ngDevMode ? [{ debugName: "services" }] : []);
  team = signal([
    {
      id: 1,
      name: "Aarav Mehta",
      role: "Chief Executive Officer",
      bio: "Shapes product strategy and long-term partnerships with a strong focus on enterprise trust and measurable growth.",
      imageUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 360"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%23FFF0E6"/><stop offset="1" stop-color="%23FFD6B8"/></linearGradient></defs><rect width="320" height="360" rx="36" fill="url(%23g)"/><circle cx="160" cy="134" r="66" fill="%23FF6A00" opacity=".18"/><circle cx="160" cy="130" r="58" fill="%23ffffff"/><path d="M96 292c14-44 50-70 64-70s50 26 64 70" fill="%23ffffff"/><text x="160" y="152" text-anchor="middle" font-size="56" font-family="Arial, sans-serif" font-weight="700" fill="%23FF6A00">AM</text></svg>',
      skills: ["Leadership", "Growth Strategy", "Client Advisory"]
    },
    {
      id: 2,
      name: "Nisha Rao",
      role: "Chief Technology Officer",
      bio: "Leads cloud architecture, platform engineering, and resilient delivery systems for high-availability products.",
      imageUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 360"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%23FFF5EF"/><stop offset="1" stop-color="%23FFE2CC"/></linearGradient></defs><rect width="320" height="360" rx="36" fill="url(%23g)"/><circle cx="160" cy="134" r="66" fill="%23FF6A00" opacity=".18"/><circle cx="160" cy="130" r="58" fill="%23ffffff"/><path d="M96 292c14-44 50-70 64-70s50 26 64 70" fill="%23ffffff"/><text x="160" y="152" text-anchor="middle" font-size="56" font-family="Arial, sans-serif" font-weight="700" fill="%23FF6A00">NR</text></svg>',
      skills: ["Cloud Architecture", "Platform Engineering", "Security"]
    },
    {
      id: 3,
      name: "Daniel Brooks",
      role: "Head of Product Design",
      bio: "Turns complex workflows into clear user journeys, aligning product decisions with business outcomes and usability.",
      imageUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 360"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%23FFF0E6"/><stop offset="1" stop-color="%23FFDCC2"/></linearGradient></defs><rect width="320" height="360" rx="36" fill="url(%23g)"/><circle cx="160" cy="134" r="66" fill="%23FF6A00" opacity=".18"/><circle cx="160" cy="130" r="58" fill="%23ffffff"/><path d="M96 292c14-44 50-70 64-70s50 26 64 70" fill="%23ffffff"/><text x="160" y="152" text-anchor="middle" font-size="56" font-family="Arial, sans-serif" font-weight="700" fill="%23FF6A00">DB</text></svg>',
      skills: ["UX Strategy", "Design Systems", "Research"]
    },
    {
      id: 4,
      name: "Priya Kapoor",
      role: "Engineering Director",
      bio: "Owns multi-team execution, delivery governance, and engineering quality across web, mobile, and API programs.",
      imageUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 360"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%23FFF3EA"/><stop offset="1" stop-color="%23FFE7D5"/></linearGradient></defs><rect width="320" height="360" rx="36" fill="url(%23g)"/><circle cx="160" cy="134" r="66" fill="%23FF6A00" opacity=".18"/><circle cx="160" cy="130" r="58" fill="%23ffffff"/><path d="M96 292c14-44 50-70 64-70s50 26 64 70" fill="%23ffffff"/><text x="160" y="152" text-anchor="middle" font-size="56" font-family="Arial, sans-serif" font-weight="700" fill="%23FF6A00">PK</text></svg>',
      skills: ["Delivery Ops", "Agile Leadership", "Mentorship"]
    },
    {
      id: 5,
      name: "Ethan Clarke",
      role: "Head of AI Solutions",
      bio: "Connects generative AI with production systems, creating credible automation that improves speed without sacrificing quality.",
      imageUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 360"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%23FFF1E7"/><stop offset="1" stop-color="%23FFDABF"/></linearGradient></defs><rect width="320" height="360" rx="36" fill="url(%23g)"/><circle cx="160" cy="134" r="66" fill="%23FF6A00" opacity=".18"/><circle cx="160" cy="130" r="58" fill="%23ffffff"/><path d="M96 292c14-44 50-70 64-70s50 26 64 70" fill="%23ffffff"/><text x="160" y="152" text-anchor="middle" font-size="56" font-family="Arial, sans-serif" font-weight="700" fill="%23FF6A00">EC</text></svg>',
      skills: ["Applied AI", "Automation", "Solution Design"]
    }
  ], ...ngDevMode ? [{ debugName: "team" }] : []);
  faqs = signal([
    { id: 1, question: "What services do you provide?", answer: "We specialize in IT services including web and mobile development, cloud solutions, AI enablement, and UI/UX design for growth-stage and enterprise teams." },
    { id: 2, question: "How can I get a quote?", answer: "You can contact us through the consultation form, and our team will review your scope, goals, and timeline before sharing a tailored proposal." },
    { id: 3, question: "Do you work with existing in-house teams?", answer: "Yes. We often partner with internal product, engineering, and design teams to accelerate delivery, fill skill gaps, and support complex initiatives." },
    { id: 4, question: "Can you handle cloud modernization or AI integration?", answer: "Absolutely. We support cloud migrations, platform modernization, and practical AI adoption with a focus on security, scalability, and measurable business value." },
    { id: 5, question: "What does a typical engagement look like?", answer: "Most engagements start with a discovery phase, followed by a clear delivery roadmap, milestone-based execution, and regular stakeholder communication." }
  ], ...ngDevMode ? [{ debugName: "faqs" }] : []);
  allServices = this.services.asReadonly();
  allTeam = this.team.asReadonly();
  allFaqs = this.faqs.asReadonly();
  static \u0275fac = function DemoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DemoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DemoService, factory: _DemoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DemoService
};
//# sourceMappingURL=chunk-LMGZC5UY.js.map
