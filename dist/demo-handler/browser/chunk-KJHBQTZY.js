import {
  RouterLink
} from "./chunk-PTV7SIMG.js";
import {
  DemoService
} from "./chunk-LMGZC5UY.js";
import "./chunk-VHM3N2UM.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-DXTZCRAZ.js";

// src/app/features/home/home.ts
var _forTrack0 = ($index, $item) => $item.id;
function Home_For_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 99)(2, "div", 100);
    \u0275\u0275element(3, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 102);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 103);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275classMap(service_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.description);
  }
}
function Home_For_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 104)(2, "div", 105);
    \u0275\u0275element(3, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 107)(5, "h5", 108);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 109);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 103);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(member_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.bio);
  }
}
var Home = class _Home {
  demoService = inject(DemoService);
  services = this.demoService.allServices;
  team = this.demoService.allTeam;
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["dh-home"]], decls: 251, vars: 0, consts: [[1, "hero-section", "position-relative", "overflow-hidden", "d-flex", "align-items-center"], [1, "hero-pattern", "position-absolute", "w-100", "h-100", "top-0", "start-0", "opacity-5"], [1, "container", "position-relative", "py-5"], [1, "row", "align-items-center", "g-5"], [1, "col-lg-6", "text-center", "text-lg-start", "animate-up"], [1, "dh-section-label"], [1, "display-2", "fw-800", "text-head", "mb-4", "lh-tight"], [1, "text-orange"], [1, "lead", "mb-5", "fs-4", "text-body", "pe-lg-5"], [1, "d-flex", "flex-column", "flex-sm-row", "justify-content-center", "justify-content-lg-start", "gap-4"], ["routerLink", "/services", 1, "dh-btn-orange", "fs-5", "px-5", "py-3", "shadow-lg"], ["routerLink", "/contact", 1, "btn", "btn-outline-dark", "fs-5", "px-5", "py-3", "border-2", "fw-bold", "rounded-3"], [1, "col-lg-6", "d-none", "d-lg-block", "animate-float"], [1, "hero-img-wrap", "p-4", "bg-orange-light", "rounded-4", "shadow-sm", "border", "border-white", "border-4"], [1, "bg-white", "rounded-3", "p-5", "shadow-lg", "border", "border-light"], [1, "d-flex", "align-items-center", "mb-4"], [1, "dot", "bg-success", "me-2"], [1, "small", "fw-bold", "text-success"], [1, "v-row", "bg-subtle", "mb-3", "rounded-pill", 2, "width", "100%", "height", "12px"], [1, "v-row", "bg-subtle", "mb-3", "rounded-pill", 2, "width", "80%", "height", "12px"], [1, "v-row", "bg-orange-light", "mb-0", "rounded-pill", 2, "width", "60%", "height", "12px"], [1, "mt-5", "text-center"], [1, "bi", "bi-cpu", "display-1", "text-orange", "opacity-25"], [1, "bg-subtle", "border-top", "border-bottom"], [1, "container"], [1, "col-lg-6", "order-2", "order-lg-1"], [1, "p-5", "bg-white", "rounded-4", "shadow-sm", "border"], [1, "fw-800", "mb-4"], [1, "text-body", "fs-5", "mb-4"], ["routerLink", "/about", 1, "text-orange", "fw-bold", "text-decoration-none"], [1, "col-lg-6", "order-1", "order-lg-2"], [1, "display-5", "fw-800", "mb-4"], [1, "text-body", "mb-0"], [1, "bg-white"], [1, "row", "justify-content-center", "text-center", "mb-5"], [1, "col-lg-8"], [1, "display-4", "fw-800"], [1, "text-body", "lead"], [1, "row", "g-4"], [1, "col-md-6"], [1, "project-insight-card", "d-flex", "align-items-center", "gap-4", "shadow-sm"], [1, "icon-circle", "shadow-sm"], [1, "bi", "bi-check-all", "fs-1"], [1, "fw-800", "text-head", "display-4", "mb-0"], [1, "text-muted", "fw-bold", "text-uppercase", "small", "mb-0", "tracking-wider"], [1, "bi", "bi-gear-wide-connected", "fs-1"], [1, "text-center", "mb-5", "pb-lg-4"], [1, "col-md-6", "col-lg-3"], [1, "bg-orange-light", "position-relative", "overflow-hidden"], [1, "container", "py-5", "text-center", "position-relative", "z-1"], [1, "dh-section-label", "bg-white"], [1, "display-4", "fw-800", "mb-4"], [1, "lead", "text-body", "mx-auto", "mb-5", 2, "max-width", "700px"], [1, "row", "g-4", "justify-content-center"], [1, "col-md-4"], [1, "p-4", "bg-white", "rounded-3", "shadow-sm", "border", "fw-bold", "text-head"], [1, "bi", "bi-brain", "me-2", "text-orange"], [1, "bi", "bi-robot", "me-2", "text-orange"], [1, "bi", "bi-gpu-card", "position-absolute", "bottom-0", "end-0", "display-1", "text-orange", "opacity-5", "mb-n4", "me-n4"], [1, "bg-subtle"], [1, "col-md-6", "col-lg-4"], [1, "py-5", "bg-white", "border-top", "border-bottom"], [1, "container", "py-4"], [1, "row", "g-4", "text-center"], [1, "col-6", "col-md-3"], [1, "fw-800", "text-head", "display-5"], [1, "text-muted", "small", "text-uppercase", "fw-bold"], [1, "col-lg-6"], [1, "text-body", "fs-5", "mb-5"], [1, "d-flex", "align-items-center", "p-4", "bg-white", "rounded-4", "border", "shadow-sm"], ["role", "status", 1, "spinner-grow", "text-success", "me-3"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], [1, "row", "g-3"], [1, "col-6"], [1, "p-4", "bg-white", "rounded-3", "border", "text-center"], [1, "bi", "bi-clock-history", "text-orange", "fs-2", "d-block", "mb-2"], [1, "small", "fw-bold"], [1, "bi", "bi-globe-americas", "text-orange", "fs-2", "d-block", "mb-2"], [1, "dh-card-white"], [1, "d-flex", "gap-1", "text-orange", "mb-3"], [1, "bi", "bi-star-fill"], [1, "text-body", "italic", "mb-4"], [1, "fw-bold", "text-head"], [1, "small", "text-muted"], [1, "bg-orange-light", "border-top", "border-bottom"], [1, "container", "text-center", "py-4"], [1, "fw-800", "mb-3"], [1, "text-body", "mb-5", "mx-auto", 2, "max-width", "500px"], [1, "row", "justify-content-center"], [1, "input-group", "shadow-sm"], ["type", "email", "placeholder", "Enter your email", 1, "form-control", "border-0", "py-3", "px-4"], [1, "btn", "dh-btn-orange", "px-4", "py-0", "rounded-start-0"], [1, "p-5", "bg-dark", "rounded-4", "shadow-2xl", "text-center", "position-relative", "overflow-hidden", "border", "border-white", "border-opacity-10"], [1, "position-relative", "z-1", "py-4"], [1, "display-4", "fw-800", "text-white", "mb-4"], [1, "lead", "text-white", "mb-5"], ["routerLink", "/contact", 1, "dh-btn-orange", "fs-5", "px-5", "py-3", "shadow-lg"], [1, "circle-decoration", "position-absolute", "top-0", "end-0", "opacity-10"], [1, "dh-card-white", "h-100"], [1, "bg-orange-light", "text-orange", "rounded-3", "d-flex", "align-items-center", "justify-content-center", "mb-4", 2, "width", "56px", "height", "56px"], [1, "bi", "fs-2"], [1, "fw-bold", "mb-3"], [1, "text-body", "small", "mb-0"], [1, "dh-card-white", "p-0", "overflow-hidden", "border-0", "shadow-sm"], [1, "bg-orange-light", "py-5", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-person-bounding-box", "display-1", "text-orange", "opacity-25"], [1, "p-4", "text-center"], [1, "fw-bold", "mb-1"], [1, "text-orange", "small", "fw-bold", "text-uppercase", "mb-3"]], template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "Smart IT Partnerships");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 6);
      \u0275\u0275text(8, " Accelerate Your ");
      \u0275\u0275element(9, "br");
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11, "Digital Evolution");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p", 8);
      \u0275\u0275text(13, " We deliver premium software engineering and cloud strategies designed for high-growth enterprises. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "a", 10);
      \u0275\u0275text(16, "Our Solutions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 11);
      \u0275\u0275text(18, "Get a Quote");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15);
      \u0275\u0275element(23, "div", 16);
      \u0275\u0275elementStart(24, "span", 17);
      \u0275\u0275text(25, "Systems Fully Operational");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "div", 18)(27, "div", 19)(28, "div", 20);
      \u0275\u0275elementStart(29, "div", 21);
      \u0275\u0275element(30, "i", 22);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(31, "section", 23)(32, "div", 24)(33, "div", 3)(34, "div", 25)(35, "div", 26)(36, "h2", 27);
      \u0275\u0275text(37, "Since 2016, we've built the tools that ");
      \u0275\u0275elementStart(38, "span", 7);
      \u0275\u0275text(39, "power industry leaders.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "p", 28);
      \u0275\u0275text(41, "demoHandler is more than a service provider\u2014we are your technical architects. We bridge the gap between complex requirements and user-centric results.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 29);
      \u0275\u0275text(43, "Learn more about our values \u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 30)(45, "span", 5);
      \u0275\u0275text(46, "Who We Are");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "h2", 31);
      \u0275\u0275text(48, "Global Reach. ");
      \u0275\u0275element(49, "br");
      \u0275\u0275text(50, "Local Impact.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p", 32);
      \u0275\u0275text(52, "Our mission is to democratize high-end software architecture for businesses of all sizes.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(53, "section", 33)(54, "div", 24)(55, "div", 34)(56, "div", 35)(57, "span", 5);
      \u0275\u0275text(58, "Our Impact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h2", 36);
      \u0275\u0275text(60, "Scaling Through Experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p", 37);
      \u0275\u0275text(62, "A glance at our delivery velocity and current engineering commitments.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 38)(64, "div", 39)(65, "div", 40)(66, "div", 41);
      \u0275\u0275element(67, "i", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div")(69, "h2", 43);
      \u0275\u0275text(70, "150+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p", 44);
      \u0275\u0275text(72, "Total Projects Completed");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "div", 39)(74, "div", 40)(75, "div", 41);
      \u0275\u0275element(76, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div")(78, "h2", 43);
      \u0275\u0275text(79, "20+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "p", 44);
      \u0275\u0275text(81, "Active Pipeline Engagements");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(82, "section")(83, "div", 24)(84, "div", 46)(85, "span", 5);
      \u0275\u0275text(86, "Our Expertise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "h2", 36);
      \u0275\u0275text(88, "Elite IT Solutions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 38);
      \u0275\u0275repeaterCreate(90, Home_For_91_Template, 8, 4, "div", 47, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "section", 48)(93, "div", 49)(94, "span", 50);
      \u0275\u0275text(95, "Future Ready");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "h2", 51);
      \u0275\u0275text(97, "Committed to ");
      \u0275\u0275elementStart(98, "span", 7);
      \u0275\u0275text(99, "AI Innovation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "p", 52);
      \u0275\u0275text(101, "We are integrating Generative AI and Machine Learning into our core workflows to deliver smarter, faster, and more efficient solutions for our clients.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 53)(103, "div", 54)(104, "div", 55);
      \u0275\u0275element(105, "i", 56);
      \u0275\u0275text(106, " Neural Architecture");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 54)(108, "div", 55);
      \u0275\u0275element(109, "i", 57);
      \u0275\u0275text(110, " Automated QA");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(111, "i", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "section", 59)(113, "div", 24)(114, "div", 46)(115, "span", 5);
      \u0275\u0275text(116, "Engineering Leaders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "h2", 36);
      \u0275\u0275text(118, "Meet the Team");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "div", 53);
      \u0275\u0275repeaterCreate(120, Home_For_121_Template, 11, 3, "div", 60, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(122, "section", 61)(123, "div", 62)(124, "div", 63)(125, "div", 64)(126, "h2", 65);
      \u0275\u0275text(127, "150+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "p", 66);
      \u0275\u0275text(129, "Projects Done");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 64)(131, "h2", 65);
      \u0275\u0275text(132, "50+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "p", 66);
      \u0275\u0275text(134, "Expert Staff");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div", 64)(136, "h2", 65);
      \u0275\u0275text(137, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "p", 66);
      \u0275\u0275text(139, "Global Offices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 64)(141, "h2", 65);
      \u0275\u0275text(142, "99.9%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "p", 66);
      \u0275\u0275text(144, "Uptime Rate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(145, "section", 59)(146, "div", 24)(147, "div", 3)(148, "div", 67)(149, "span", 5);
      \u0275\u0275text(150, "Reliability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "h2", 31);
      \u0275\u0275text(152, "We're Always ");
      \u0275\u0275elementStart(153, "span", 7);
      \u0275\u0275text(154, "Online");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "p", 68);
      \u0275\u0275text(156, "Our global monitoring center and support teams operate 24/7 to ensure your mission-critical systems never sleep.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 69);
      \u0275\u0275element(158, "div", 70);
      \u0275\u0275elementStart(159, "div")(160, "h6", 71);
      \u0275\u0275text(161, "Global Network Status: Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "p", 72);
      \u0275\u0275text(163, "All regional nodes responding within 15ms.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(164, "div", 67)(165, "div", 73)(166, "div", 74)(167, "div", 75);
      \u0275\u0275element(168, "i", 76);
      \u0275\u0275elementStart(169, "span", 77);
      \u0275\u0275text(170, "Round the clock");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "div", 74)(172, "div", 75);
      \u0275\u0275element(173, "i", 78);
      \u0275\u0275elementStart(174, "span", 77);
      \u0275\u0275text(175, "Global Support");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(176, "section")(177, "div", 24)(178, "div", 46)(179, "span", 5);
      \u0275\u0275text(180, "Client Feedback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "h2", 36);
      \u0275\u0275text(182, "Trusted by Global Brands");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 38)(184, "div", 54)(185, "div", 79)(186, "div", 80);
      \u0275\u0275element(187, "i", 81)(188, "i", 81)(189, "i", 81)(190, "i", 81)(191, "i", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "p", 82);
      \u0275\u0275text(193, '"The technical expertise of demoHandler transformed our legacy infrastructure into a high-speed cloud solution."');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 83);
      \u0275\u0275text(195, "Marcus Thorne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div", 84);
      \u0275\u0275text(197, "CTO, NexaCorp");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(198, "div", 54)(199, "div", 79)(200, "div", 80);
      \u0275\u0275element(201, "i", 81)(202, "i", 81)(203, "i", 81)(204, "i", 81)(205, "i", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "p", 82);
      \u0275\u0275text(207, '"Exceptional delivery speed and code quality. Their AI integration approach is truly industry-leading."');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "div", 83);
      \u0275\u0275text(209, "Sarah Jenkins");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 84);
      \u0275\u0275text(211, "Lead Developer, FinStream");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(212, "div", 54)(213, "div", 79)(214, "div", 80);
      \u0275\u0275element(215, "i", 81)(216, "i", 81)(217, "i", 81)(218, "i", 81)(219, "i", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "p", 82);
      \u0275\u0275text(221, '"Professional, responsive, and innovative. They feel like an extension of our own internal engineering team."');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "div", 83);
      \u0275\u0275text(223, "David Lee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "div", 84);
      \u0275\u0275text(225, "CEO, SparkLogistics");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(226, "section", 85)(227, "div", 86)(228, "h3", 87);
      \u0275\u0275text(229, "Join Our Technical Hub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "p", 88);
      \u0275\u0275text(231, "Get monthly insights on cloud architecture, AI trends, and modern software engineering.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "div", 89)(233, "div", 60)(234, "div", 90);
      \u0275\u0275element(235, "input", 91);
      \u0275\u0275elementStart(236, "button", 92);
      \u0275\u0275text(237, "Subscribe");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(238, "section", 33)(239, "div", 24)(240, "div", 93)(241, "div", 94)(242, "h2", 95);
      \u0275\u0275text(243, "Ready to start your ");
      \u0275\u0275elementStart(244, "span", 7);
      \u0275\u0275text(245, "next project?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "p", 96);
      \u0275\u0275text(247, "Connect with our lead architects today for a free technical consultation.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "a", 97);
      \u0275\u0275text(249, "Start Building Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(250, "div", 98);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(90);
      \u0275\u0275repeater(ctx.services().slice(0, 4));
      \u0275\u0275advance(30);
      \u0275\u0275repeater(ctx.team());
    }
  }, dependencies: [RouterLink], styles: ["\n\n.hero-section[_ngcontent-%COMP%] {\n  min-height: 95vh;\n}\n.project-insight-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--dh-border);\n  border-radius: 20px;\n  padding: 3rem;\n  transition: var(--dh-transition);\n}\n.project-insight-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--dh-orange);\n  transform: translateY(-5px);\n  box-shadow: var(--dh-shadow-lg);\n}\n.icon-circle[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: var(--dh-orange-light);\n  color: var(--dh-orange);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.circle-decoration[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background: var(--dh-orange);\n  filter: blur(100px);\n  border-radius: 50%;\n  margin-right: -200px;\n  margin-top: -200px;\n}\n.shadow-2xl[_ngcontent-%COMP%] {\n  box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.4);\n}\n.italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.fw-800[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n/*# sourceMappingURL=home.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "dh-home", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- 1. Hero Section -->\r
<section class="hero-section position-relative overflow-hidden d-flex align-items-center">\r
  <div class="hero-pattern position-absolute w-100 h-100 top-0 start-0 opacity-5"></div>\r
  <div class="container position-relative py-5">\r
    <div class="row align-items-center g-5">\r
      <div class="col-lg-6 text-center text-lg-start animate-up">\r
        <span class="dh-section-label">Smart IT Partnerships</span>\r
        <h1 class="display-2 fw-800 text-head mb-4 lh-tight">\r
          Accelerate Your <br> <span class="text-orange">Digital Evolution</span>\r
        </h1>\r
        <p class="lead mb-5 fs-4 text-body pe-lg-5">\r
          We deliver premium software engineering and cloud strategies designed for high-growth enterprises.\r
        </p>\r
        <div class="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-4">\r
          <a routerLink="/services" class="dh-btn-orange fs-5 px-5 py-3 shadow-lg">Our Solutions</a>\r
          <a routerLink="/contact" class="btn btn-outline-dark fs-5 px-5 py-3 border-2 fw-bold rounded-3">Get a Quote</a>\r
        </div>\r
      </div>\r
      <div class="col-lg-6 d-none d-lg-block animate-float">\r
        <div class="hero-img-wrap p-4 bg-orange-light rounded-4 shadow-sm border border-white border-4">\r
           <div class="bg-white rounded-3 p-5 shadow-lg border border-light">\r
              <div class="d-flex align-items-center mb-4">\r
                 <div class="dot bg-success me-2"></div>\r
                 <span class="small fw-bold text-success">Systems Fully Operational</span>\r
              </div>\r
              <div class="v-row bg-subtle mb-3 rounded-pill" style="width: 100%; height: 12px;"></div>\r
              <div class="v-row bg-subtle mb-3 rounded-pill" style="width: 80%; height: 12px;"></div>\r
              <div class="v-row bg-orange-light mb-0 rounded-pill" style="width: 60%; height: 12px;"></div>\r
              <div class="mt-5 text-center"><i class="bi bi-cpu display-1 text-orange opacity-25"></i></div>\r
           </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- 2. About Preview -->\r
<section class="bg-subtle border-top border-bottom">\r
  <div class="container">\r
    <div class="row align-items-center g-5">\r
      <div class="col-lg-6 order-2 order-lg-1">\r
        <div class="p-5 bg-white rounded-4 shadow-sm border">\r
           <h2 class="fw-800 mb-4">Since 2016, we've built the tools that <span class="text-orange">power industry leaders.</span></h2>\r
           <p class="text-body fs-5 mb-4">demoHandler is more than a service provider\u2014we are your technical architects. We bridge the gap between complex requirements and user-centric results.</p>\r
           <a routerLink="/about" class="text-orange fw-bold text-decoration-none">Learn more about our values &rarr;</a>\r
        </div>\r
      </div>\r
      <div class="col-lg-6 order-1 order-lg-2">\r
        <span class="dh-section-label">Who We Are</span>\r
        <h2 class="display-5 fw-800 mb-4">Global Reach. <br>Local Impact.</h2>\r
        <p class="text-body mb-0">Our mission is to democratize high-end software architecture for businesses of all sizes.</p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Projects Insight Section -->\r
<section class="bg-white">\r
  <div class="container">\r
    <div class="row justify-content-center text-center mb-5">\r
      <div class="col-lg-8">\r
        <span class="dh-section-label">Our Impact</span>\r
        <h2 class="display-4 fw-800">Scaling Through Experience</h2>\r
        <p class="text-body lead">A glance at our delivery velocity and current engineering commitments.</p>\r
      </div>\r
    </div>\r
    \r
    <div class="row g-4">\r
      <div class="col-md-6">\r
        <div class="project-insight-card d-flex align-items-center gap-4 shadow-sm">\r
          <div class="icon-circle shadow-sm">\r
            <i class="bi bi-check-all fs-1"></i>\r
          </div>\r
          <div>\r
            <h2 class="fw-800 text-head display-4 mb-0">150+</h2>\r
            <p class="text-muted fw-bold text-uppercase small mb-0 tracking-wider">Total Projects Completed</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-md-6">\r
        <div class="project-insight-card d-flex align-items-center gap-4 shadow-sm">\r
          <div class="icon-circle shadow-sm">\r
            <i class="bi bi-gear-wide-connected fs-1"></i>\r
          </div>\r
          <div>\r
            <h2 class="fw-800 text-head display-4 mb-0">20+</h2>\r
            <p class="text-muted fw-bold text-uppercase small mb-0 tracking-wider">Active Pipeline Engagements</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- 3. Services Overview -->\r
<section>\r
  <div class="container">\r
    <div class="text-center mb-5 pb-lg-4">\r
      <span class="dh-section-label">Our Expertise</span>\r
      <h2 class="display-4 fw-800">Elite IT Solutions</h2>\r
    </div>\r
    <div class="row g-4">\r
      @for (service of services().slice(0, 4); track service.id) {\r
        <div class="col-md-6 col-lg-3">\r
          <div class="dh-card-white h-100">\r
            <div class="bg-orange-light text-orange rounded-3 d-flex align-items-center justify-content-center mb-4" style="width: 56px; height: 56px;">\r
              <i class="bi fs-2" [class]="service.icon"></i>\r
            </div>\r
            <h4 class="fw-bold mb-3">{{ service.title }}</h4>\r
            <p class="text-body small mb-0">{{ service.description }}</p>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- 4. AI Commitment Section -->\r
<section class="bg-orange-light position-relative overflow-hidden">\r
  <div class="container py-5 text-center position-relative z-1">\r
    <span class="dh-section-label bg-white">Future Ready</span>\r
    <h2 class="display-4 fw-800 mb-4">Committed to <span class="text-orange">AI Innovation</span></h2>\r
    <p class="lead text-body mx-auto mb-5" style="max-width: 700px;">We are integrating Generative AI and Machine Learning into our core workflows to deliver smarter, faster, and more efficient solutions for our clients.</p>\r
    <div class="row g-4 justify-content-center">\r
       <div class="col-md-4"><div class="p-4 bg-white rounded-3 shadow-sm border fw-bold text-head"><i class="bi bi-brain me-2 text-orange"></i> Neural Architecture</div></div>\r
       <div class="col-md-4"><div class="p-4 bg-white rounded-3 shadow-sm border fw-bold text-head"><i class="bi bi-robot me-2 text-orange"></i> Automated QA</div></div>\r
    </div>\r
  </div>\r
  <i class="bi bi-gpu-card position-absolute bottom-0 end-0 display-1 text-orange opacity-5 mb-n4 me-n4"></i>\r
</section>\r
\r
<!-- 5. Team Members -->\r
<section class="bg-subtle">\r
  <div class="container">\r
    <div class="text-center mb-5 pb-lg-4">\r
      <span class="dh-section-label">Engineering Leaders</span>\r
      <h2 class="display-4 fw-800">Meet the Team</h2>\r
    </div>\r
    <div class="row g-4 justify-content-center">\r
      @for (member of team(); track member.id) {\r
        <div class="col-md-6 col-lg-4">\r
          <div class="dh-card-white p-0 overflow-hidden border-0 shadow-sm">\r
            <div class="bg-orange-light py-5 d-flex align-items-center justify-content-center">\r
              <i class="bi bi-person-bounding-box display-1 text-orange opacity-25"></i>\r
            </div>\r
            <div class="p-4 text-center">\r
              <h5 class="fw-bold mb-1">{{ member.name }}</h5>\r
              <p class="text-orange small fw-bold text-uppercase mb-3">{{ member.role }}</p>\r
              <p class="text-body small mb-0">{{ member.bio }}</p>\r
            </div>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- 6. Projects/Stats Section -->\r
<section class="py-5 bg-white border-top border-bottom">\r
  <div class="container py-4">\r
    <div class="row g-4 text-center">\r
      <div class="col-6 col-md-3">\r
        <h2 class="fw-800 text-head display-5">150+</h2>\r
        <p class="text-muted small text-uppercase fw-bold">Projects Done</p>\r
      </div>\r
      <div class="col-6 col-md-3">\r
        <h2 class="fw-800 text-head display-5">50+</h2>\r
        <p class="text-muted small text-uppercase fw-bold">Expert Staff</p>\r
      </div>\r
      <div class="col-6 col-md-3">\r
        <h2 class="fw-800 text-head display-5">12</h2>\r
        <p class="text-muted small text-uppercase fw-bold">Global Offices</p>\r
      </div>\r
      <div class="col-6 col-md-3">\r
        <h2 class="fw-800 text-head display-5">99.9%</h2>\r
        <p class="text-muted small text-uppercase fw-bold">Uptime Rate</p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- 7. 24/7 Availability Section -->\r
<section class="bg-subtle">\r
  <div class="container">\r
    <div class="row align-items-center g-5">\r
      <div class="col-lg-6">\r
        <span class="dh-section-label">Reliability</span>\r
        <h2 class="display-5 fw-800 mb-4">We're Always <span class="text-orange">Online</span></h2>\r
        <p class="text-body fs-5 mb-5">Our global monitoring center and support teams operate 24/7 to ensure your mission-critical systems never sleep.</p>\r
        <div class="d-flex align-items-center p-4 bg-white rounded-4 border shadow-sm">\r
           <div class="spinner-grow text-success me-3" role="status"></div>\r
           <div><h6 class="fw-bold mb-0">Global Network Status: Active</h6><p class="text-muted small mb-0">All regional nodes responding within 15ms.</p></div>\r
        </div>\r
      </div>\r
      <div class="col-lg-6">\r
        <div class="row g-3">\r
           <div class="col-6"><div class="p-4 bg-white rounded-3 border text-center"><i class="bi bi-clock-history text-orange fs-2 d-block mb-2"></i><span class="small fw-bold">Round the clock</span></div></div>\r
           <div class="col-6"><div class="p-4 bg-white rounded-3 border text-center"><i class="bi bi-globe-americas text-orange fs-2 d-block mb-2"></i><span class="small fw-bold">Global Support</span></div></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- 8. Testimonials -->\r
<section>\r
  <div class="container">\r
    <div class="text-center mb-5 pb-lg-4">\r
      <span class="dh-section-label">Client Feedback</span>\r
      <h2 class="display-4 fw-800">Trusted by Global Brands</h2>\r
    </div>\r
    <div class="row g-4">\r
      <div class="col-md-4">\r
        <div class="dh-card-white">\r
          <div class="d-flex gap-1 text-orange mb-3"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>\r
          <p class="text-body italic mb-4">"The technical expertise of demoHandler transformed our legacy infrastructure into a high-speed cloud solution."</p>\r
          <div class="fw-bold text-head">Marcus Thorne</div>\r
          <div class="small text-muted">CTO, NexaCorp</div>\r
        </div>\r
      </div>\r
      <div class="col-md-4">\r
        <div class="dh-card-white">\r
          <div class="d-flex gap-1 text-orange mb-3"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>\r
          <p class="text-body italic mb-4">"Exceptional delivery speed and code quality. Their AI integration approach is truly industry-leading."</p>\r
          <div class="fw-bold text-head">Sarah Jenkins</div>\r
          <div class="small text-muted">Lead Developer, FinStream</div>\r
        </div>\r
      </div>\r
      <div class="col-md-4">\r
        <div class="dh-card-white">\r
          <div class="d-flex gap-1 text-orange mb-3"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>\r
          <p class="text-body italic mb-4">"Professional, responsive, and innovative. They feel like an extension of our own internal engineering team."</p>\r
          <div class="fw-bold text-head">David Lee</div>\r
          <div class="small text-muted">CEO, SparkLogistics</div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- 9. Newsletter Section -->\r
<section class="bg-orange-light border-top border-bottom">\r
  <div class="container text-center py-4">\r
    <h3 class="fw-800 mb-3">Join Our Technical Hub</h3>\r
    <p class="text-body mb-5 mx-auto" style="max-width: 500px;">Get monthly insights on cloud architecture, AI trends, and modern software engineering.</p>\r
    <div class="row justify-content-center">\r
      <div class="col-md-6 col-lg-4">\r
        <div class="input-group shadow-sm">\r
          <input type="email" class="form-control border-0 py-3 px-4" placeholder="Enter your email">\r
          <button class="btn dh-btn-orange px-4 py-0 rounded-start-0">Subscribe</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- 10. Contact CTA Section -->\r
<section class="bg-white">\r
  <div class="container">\r
    <div class="p-5 bg-dark rounded-4 shadow-2xl text-center position-relative overflow-hidden border border-white border-opacity-10">\r
       <div class="position-relative z-1 py-4">\r
          <h2 class="display-4 fw-800 text-white mb-4">Ready to start your <span class="text-orange">next project?</span></h2>\r
          <p class="lead text-white mb-5">Connect with our lead architects today for a free technical consultation.</p>\r
          <a routerLink="/contact" class="dh-btn-orange fs-5 px-5 py-3 shadow-lg">Start Building Today</a>\r
       </div>\r
       <div class="circle-decoration position-absolute top-0 end-0 opacity-10"></div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/features/home/home.scss */\n.hero-section {\n  min-height: 95vh;\n}\n.project-insight-card {\n  background: white;\n  border: 1px solid var(--dh-border);\n  border-radius: 20px;\n  padding: 3rem;\n  transition: var(--dh-transition);\n}\n.project-insight-card:hover {\n  border-color: var(--dh-orange);\n  transform: translateY(-5px);\n  box-shadow: var(--dh-shadow-lg);\n}\n.icon-circle {\n  width: 64px;\n  height: 64px;\n  background: var(--dh-orange-light);\n  color: var(--dh-orange);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.circle-decoration {\n  width: 400px;\n  height: 400px;\n  background: var(--dh-orange);\n  filter: blur(100px);\n  border-radius: 50%;\n  margin-right: -200px;\n  margin-top: -200px;\n}\n.shadow-2xl {\n  box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.4);\n}\n.italic {\n  font-style: italic;\n}\n.fw-800 {\n  font-weight: 800;\n}\n/*# sourceMappingURL=home.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/features/home/home.ts", lineNumber: 13 });
})();
export {
  Home
};
//# sourceMappingURL=chunk-KJHBQTZY.js.map
