import {
  DemoService
} from "./chunk-LMGZC5UY.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-DXTZCRAZ.js";

// src/app/features/team/team.ts
var _forTrack0 = ($index, $item) => $item.id;
function Team_For_32_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r1);
  }
}
function Team_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15)(1, "article", 16)(2, "div", 17);
    \u0275\u0275domElement(3, "img", 18);
    \u0275\u0275domElementStart(4, "div", 19)(5, "div", 20)(6, "a", 21);
    \u0275\u0275domElement(7, "i", 22);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "a", 23);
    \u0275\u0275domElement(9, "i", 24);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "a", 25);
    \u0275\u0275domElement(11, "i", 26);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "p", 27);
    \u0275\u0275text(13, "Available for architecture reviews, delivery consultations, and discovery workshops.");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(14, "div", 28)(15, "div", 29)(16, "p", 30);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "h3", 31);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "p", 32);
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "div", 33);
    \u0275\u0275repeaterCreate(23, Team_For_32_For_24_Template, 2, 1, "span", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("src", member_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", member_r2.name);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(member_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.bio);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(member_r2.skills);
  }
}
var Team = class _Team {
  team = inject(DemoService).allTeam;
  static \u0275fac = function Team_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Team)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Team, selectors: [["dh-team"]], decls: 33, vars: 0, consts: [[1, "page-header", "text-white", "position-relative", "bg-pure"], [1, "header-glow", "position-absolute", "w-100", "h-100", "top-0", "start-0", "opacity-25"], [1, "container", "position-relative", "py-5", "text-center"], [1, "display-3", "fw-800", "mb-3", "animate-fade"], [1, "text-orange"], [1, "lead", "text-light-gray", "fs-4", "mx-auto", "animate-fade", 2, "max-width", "700px"], [1, "team-showcase", "bg-subtle"], [1, "container"], [1, "row", "g-4", "align-items-stretch", "mb-5", "team-proof-row"], [1, "col-lg-4", "col-md-6"], [1, "team-proof-card", "h-100"], [1, "team-proof-value"], [1, "team-proof-label", "mb-0"], [1, "col-lg-4", "col-md-12"], [1, "row", "g-4", "align-items-stretch"], [1, "col-md-6", "col-xl-4", "d-flex"], [1, "team-member-card", "w-100", "d-flex", "flex-column"], [1, "team-member-media", "position-relative", "overflow-hidden"], [1, "team-member-image", 3, "src", "alt"], [1, "team-member-overlay"], [1, "team-member-socials"], ["href", "#", "aria-label", "LinkedIn profile", 1, "team-social-link"], [1, "bi", "bi-linkedin"], ["href", "#", "aria-label", "Email contact", 1, "team-social-link"], [1, "bi", "bi-envelope"], ["href", "#", "aria-label", "Professional profile", 1, "team-social-link"], [1, "bi", "bi-globe2"], [1, "team-overlay-note", "mb-0"], [1, "team-member-body", "d-flex", "flex-column", "flex-grow-1"], [1, "team-member-meta", "mb-3"], [1, "team-member-role", "mb-2"], [1, "team-member-name", "mb-0"], [1, "team-member-bio", "flex-grow-1"], [1, "team-skill-list", "mt-3"], [1, "team-skill-badge"]], template: function Team_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "div", 1);
      \u0275\u0275domElementStart(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Core ");
      \u0275\u0275domElementStart(5, "span", 4);
      \u0275\u0275text(6, "Team");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "p", 5);
      \u0275\u0275text(8, " The technical force driving innovation at demoHandler. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(9, "section", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "span", 11);
      \u0275\u0275text(15, "15+ yrs");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "p", 12);
      \u0275\u0275text(17, "Average leadership experience across core delivery functions");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(18, "div", 9)(19, "div", 10)(20, "span", 11);
      \u0275\u0275text(21, "Enterprise-ready");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "p", 12);
      \u0275\u0275text(23, "Cross-functional ownership from strategy and UX through cloud and AI implementation");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(24, "div", 13)(25, "div", 10)(26, "span", 11);
      \u0275\u0275text(27, "Trusted delivery");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "p", 12);
      \u0275\u0275text(29, "Transparent communication, quality controls, and scalable execution built into every engagement");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(30, "div", 14);
      \u0275\u0275repeaterCreate(31, Team_For_32_Template, 25, 5, "div", 15, _forTrack0);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(31);
      \u0275\u0275repeater(ctx.team());
    }
  }, styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-top: -88px;\n  padding-top: 150px !important;\n}\n.header-glow[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      var(--dh-orange) 0%,\n      transparent 70%);\n}\n.team-showcase[_ngcontent-%COMP%] {\n  position: relative;\n}\n.team-proof-row[_ngcontent-%COMP%] {\n  margin-bottom: 3.5rem !important;\n}\n.team-proof-card[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 1.75rem;\n  border: 1px solid rgba(255, 106, 0, 0.12);\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #fff8f2 100%);\n  box-shadow: 0 18px 45px -28px rgba(15, 23, 42, 0.24);\n}\n.team-proof-value[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.75rem;\n  color: var(--dh-text-head);\n  font-size: 1.15rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}\n.team-proof-label[_ngcontent-%COMP%] {\n  color: var(--dh-text-body);\n  line-height: 1.7;\n}\n.team-member-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid rgba(226, 232, 240, 0.95);\n  border-radius: 28px;\n  background: #ffffff;\n  box-shadow: 0 20px 50px -32px rgba(15, 23, 42, 0.24);\n  transition:\n    transform 0.35s ease,\n    box-shadow 0.35s ease,\n    border-color 0.35s ease;\n}\n.team-member-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  border-color: rgba(255, 106, 0, 0.2);\n  box-shadow: 0 28px 60px -28px rgba(15, 23, 42, 0.28);\n}\n.team-member-media[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 4/4.5;\n  background:\n    linear-gradient(\n      180deg,\n      #fff5ee 0%,\n      #ffe0c8 100%);\n}\n.team-member-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.45s ease;\n}\n.team-member-card[_ngcontent-%COMP%]:hover   .team-member-image[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.team-member-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: auto 0 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n  padding: 1.1rem 1.25rem 1.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(15, 23, 42, 0) 0%,\n      rgba(15, 23, 42, 0.82) 62%,\n      rgba(15, 23, 42, 0.94) 100%);\n  transform: translateY(34%);\n  transition: transform 0.35s ease;\n}\n.team-member-card[_ngcontent-%COMP%]:hover   .team-member-overlay[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.team-member-socials[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.65rem;\n}\n.team-social-link[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.16);\n  color: #ffffff;\n  text-decoration: none;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: background-color 0.25s ease, transform 0.25s ease;\n}\n.team-social-link[_ngcontent-%COMP%]:hover {\n  background: var(--dh-orange);\n  color: #ffffff;\n  transform: translateY(-2px);\n}\n.team-overlay-note[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.82);\n  font-size: 0.9rem;\n  line-height: 1.55;\n}\n.team-member-body[_ngcontent-%COMP%] {\n  padding: 1.6rem 1.55rem 1.5rem;\n}\n.team-member-role[_ngcontent-%COMP%] {\n  color: var(--dh-orange);\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.team-member-name[_ngcontent-%COMP%] {\n  color: var(--dh-text-head);\n  font-size: 1.45rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}\n.team-member-bio[_ngcontent-%COMP%] {\n  color: var(--dh-text-body);\n  margin-bottom: 0;\n  line-height: 1.72;\n}\n.team-skill-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.team-skill-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.55rem 0.85rem;\n  border-radius: 999px;\n  background: var(--dh-orange-light);\n  color: var(--dh-orange);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n}\n.fw-800[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n@media (max-width: 1199.98px) {\n  .team-member-name[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .team-proof-row[_ngcontent-%COMP%] {\n    margin-bottom: 2.5rem !important;\n  }\n  .team-member-body[_ngcontent-%COMP%] {\n    padding: 1.4rem 1.25rem 1.3rem;\n  }\n  .team-member-overlay[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=team.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Team, [{
    type: Component,
    args: [{ selector: "dh-team", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="page-header text-white position-relative bg-pure">\n  <div class="header-glow position-absolute w-100 h-100 top-0 start-0 opacity-25"></div>\n  <div class="container position-relative py-5 text-center">\n    <h1 class="display-3 fw-800 mb-3 animate-fade">Core <span class="text-orange">Team</span></h1>\n    <p class="lead text-light-gray fs-4 mx-auto animate-fade" style="max-width: 700px;">\n      The technical force driving innovation at demoHandler.\n    </p>\n  </div>\n</div>\n\n<section class="team-showcase bg-subtle">\n  <div class="container">\n    <div class="row g-4 align-items-stretch mb-5 team-proof-row">\n      <div class="col-lg-4 col-md-6">\n        <div class="team-proof-card h-100">\n          <span class="team-proof-value">15+ yrs</span>\n          <p class="team-proof-label mb-0">Average leadership experience across core delivery functions</p>\n        </div>\n      </div>\n      <div class="col-lg-4 col-md-6">\n        <div class="team-proof-card h-100">\n          <span class="team-proof-value">Enterprise-ready</span>\n          <p class="team-proof-label mb-0">Cross-functional ownership from strategy and UX through cloud and AI implementation</p>\n        </div>\n      </div>\n      <div class="col-lg-4 col-md-12">\n        <div class="team-proof-card h-100">\n          <span class="team-proof-value">Trusted delivery</span>\n          <p class="team-proof-label mb-0">Transparent communication, quality controls, and scalable execution built into every engagement</p>\n        </div>\n      </div>\n    </div>\n\n    <div class="row g-4 align-items-stretch">\n      @for (member of team(); track member.id) {\n        <div class="col-md-6 col-xl-4 d-flex">\n          <article class="team-member-card w-100 d-flex flex-column">\n            <div class="team-member-media position-relative overflow-hidden">\n              <img class="team-member-image" [src]="member.imageUrl" [alt]="member.name">\n              <div class="team-member-overlay">\n                <div class="team-member-socials">\n                  <a href="#" aria-label="LinkedIn profile" class="team-social-link"><i class="bi bi-linkedin"></i></a>\n                  <a href="#" aria-label="Email contact" class="team-social-link"><i class="bi bi-envelope"></i></a>\n                  <a href="#" aria-label="Professional profile" class="team-social-link"><i class="bi bi-globe2"></i></a>\n                </div>\n                <p class="team-overlay-note mb-0">Available for architecture reviews, delivery consultations, and discovery workshops.</p>\n              </div>\n            </div>\n\n            <div class="team-member-body d-flex flex-column flex-grow-1">\n              <div class="team-member-meta mb-3">\n                <p class="team-member-role mb-2">{{ member.role }}</p>\n                <h3 class="team-member-name mb-0">{{ member.name }}</h3>\n              </div>\n\n              <p class="team-member-bio flex-grow-1">{{ member.bio }}</p>\n\n              <div class="team-skill-list mt-3">\n                @for (skill of member.skills; track skill) {\n                  <span class="team-skill-badge">{{ skill }}</span>\n                }\n              </div>\n            </div>\n          </article>\n        </div>\n      }\n    </div>\n  </div>\n</section>\n', styles: ["/* src/app/features/team/team.scss */\n.page-header {\n  margin-top: -88px;\n  padding-top: 150px !important;\n}\n.header-glow {\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      var(--dh-orange) 0%,\n      transparent 70%);\n}\n.team-showcase {\n  position: relative;\n}\n.team-proof-row {\n  margin-bottom: 3.5rem !important;\n}\n.team-proof-card {\n  height: 100%;\n  padding: 1.75rem;\n  border: 1px solid rgba(255, 106, 0, 0.12);\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #fff8f2 100%);\n  box-shadow: 0 18px 45px -28px rgba(15, 23, 42, 0.24);\n}\n.team-proof-value {\n  display: inline-block;\n  margin-bottom: 0.75rem;\n  color: var(--dh-text-head);\n  font-size: 1.15rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}\n.team-proof-label {\n  color: var(--dh-text-body);\n  line-height: 1.7;\n}\n.team-member-card {\n  overflow: hidden;\n  border: 1px solid rgba(226, 232, 240, 0.95);\n  border-radius: 28px;\n  background: #ffffff;\n  box-shadow: 0 20px 50px -32px rgba(15, 23, 42, 0.24);\n  transition:\n    transform 0.35s ease,\n    box-shadow 0.35s ease,\n    border-color 0.35s ease;\n}\n.team-member-card:hover {\n  transform: translateY(-10px);\n  border-color: rgba(255, 106, 0, 0.2);\n  box-shadow: 0 28px 60px -28px rgba(15, 23, 42, 0.28);\n}\n.team-member-media {\n  position: relative;\n  aspect-ratio: 4/4.5;\n  background:\n    linear-gradient(\n      180deg,\n      #fff5ee 0%,\n      #ffe0c8 100%);\n}\n.team-member-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.45s ease;\n}\n.team-member-card:hover .team-member-image {\n  transform: scale(1.04);\n}\n.team-member-overlay {\n  position: absolute;\n  inset: auto 0 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n  padding: 1.1rem 1.25rem 1.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(15, 23, 42, 0) 0%,\n      rgba(15, 23, 42, 0.82) 62%,\n      rgba(15, 23, 42, 0.94) 100%);\n  transform: translateY(34%);\n  transition: transform 0.35s ease;\n}\n.team-member-card:hover .team-member-overlay {\n  transform: translateY(0);\n}\n.team-member-socials {\n  display: flex;\n  gap: 0.65rem;\n}\n.team-social-link {\n  width: 42px;\n  height: 42px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.16);\n  color: #ffffff;\n  text-decoration: none;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: background-color 0.25s ease, transform 0.25s ease;\n}\n.team-social-link:hover {\n  background: var(--dh-orange);\n  color: #ffffff;\n  transform: translateY(-2px);\n}\n.team-overlay-note {\n  color: rgba(255, 255, 255, 0.82);\n  font-size: 0.9rem;\n  line-height: 1.55;\n}\n.team-member-body {\n  padding: 1.6rem 1.55rem 1.5rem;\n}\n.team-member-role {\n  color: var(--dh-orange);\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.team-member-name {\n  color: var(--dh-text-head);\n  font-size: 1.45rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}\n.team-member-bio {\n  color: var(--dh-text-body);\n  margin-bottom: 0;\n  line-height: 1.72;\n}\n.team-skill-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.team-skill-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.55rem 0.85rem;\n  border-radius: 999px;\n  background: var(--dh-orange-light);\n  color: var(--dh-orange);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n}\n.fw-800 {\n  font-weight: 800;\n}\n@media (max-width: 1199.98px) {\n  .team-member-name {\n    font-size: 1.35rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .team-proof-row {\n    margin-bottom: 2.5rem !important;\n  }\n  .team-member-body {\n    padding: 1.4rem 1.25rem 1.3rem;\n  }\n  .team-member-overlay {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=team.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Team, { className: "Team", filePath: "src/app/features/team/team.ts", lineNumber: 11 });
})();
export {
  Team
};
//# sourceMappingURL=chunk-2RB4VQ33.js.map
