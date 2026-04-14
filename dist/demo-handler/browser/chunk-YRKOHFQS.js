import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-PTV7SIMG.js";
import "./chunk-VHM3N2UM.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-DXTZCRAZ.js";

// src/app/shared/components/header/header.ts
var _c0 = () => ({ exact: true });
var Header = class _Header {
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["dh-header"]], decls: 31, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "dh-navbar", "dh-glass-white", "border-bottom", "shadow-xs"], [1, "container"], ["routerLink", "/", 1, "navbar-brand", "d-flex", "align-items-center"], [1, "brand-wrap", "me-2", "bg-orange-light", "d-flex", "align-items-center", "justify-content-center", "rounded-3", 2, "width", "40px", "height", "40px"], [1, "bi", "bi-rocket-takeoff-fill", "text-orange"], [1, "fw-800", "text-head", "fs-4"], [1, "text-orange"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", 1, "navbar-toggler", "border-0", "shadow-none"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "align-items-center"], [1, "nav-item", "px-1"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/services", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/team", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-item", "pe-lg-4", "px-1"], ["routerLink", "/faq", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-item", "mt-3", "mt-lg-0"], ["routerLink", "/contact", 1, "dh-btn-orange", "text-decoration-none", "shadow-sm", "px-4"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 5)(6, "span", 6);
      \u0275\u0275text(7, "demo");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, "Handler");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275element(10, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "ul", 10)(13, "li", 11)(14, "a", 12);
      \u0275\u0275text(15, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li", 11)(17, "a", 13);
      \u0275\u0275text(18, "About");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li", 11)(20, "a", 14);
      \u0275\u0275text(21, "Services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li", 11)(23, "a", 15);
      \u0275\u0275text(24, "Team");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li", 16)(26, "a", 17);
      \u0275\u0275text(27, "FAQ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li", 18)(29, "a", 19);
      \u0275\u0275text(30, "Get Started");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(1, _c0));
    }
  }, dependencies: [RouterLink, RouterLinkActive], styles: ['\n\n.dh-navbar[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 1.25rem 0;\n  border-bottom: 1px solid transparent !important;\n  transition: var(--dh-transition);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n}\n.dh-logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n.dh-logo-mark[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff1e8 0%,\n      #ffd8bf 100%);\n  box-shadow: 0 12px 24px rgba(249, 115, 22, 0.18);\n}\n.dh-logo-chip[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 7px;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      145deg,\n      var(--dh-orange) 0%,\n      #ff9a3d 100%);\n}\n.dh-logo-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  right: 14px;\n  height: 3px;\n  border-radius: 999px;\n  background: #fff8f3;\n  z-index: 1;\n}\n.dh-logo-bar-top[_ngcontent-%COMP%] {\n  top: 14px;\n}\n.dh-logo-bar-mid[_ngcontent-%COMP%] {\n  top: 20px;\n  right: 10px;\n}\n.dh-logo-bar-bottom[_ngcontent-%COMP%] {\n  top: 26px;\n}\n.dh-logo-text[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: baseline;\n  font-size: 1.6rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  line-height: 1;\n}\n.dh-logo-demo[_ngcontent-%COMP%] {\n  color: var(--dh-orange);\n}\n.dh-logo-handler[_ngcontent-%COMP%] {\n  color: var(--dh-text-head);\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: var(--dh-text-body) !important;\n  font-weight: 600;\n  font-size: 0.95rem;\n  transition: var(--dh-transition);\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--dh-orange) !important;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  color: var(--dh-orange) !important;\n  position: relative;\n}\n.nav-link.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 0.5rem;\n  right: 0.5rem;\n  height: 2px;\n  background: var(--dh-orange);\n  border-radius: 2px;\n}\n.text-head[_ngcontent-%COMP%] {\n  color: var(--dh-text-head);\n}\n.fw-800[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n@media (max-width: 575.98px) {\n  .dh-logo[_ngcontent-%COMP%] {\n    gap: 0.65rem;\n  }\n  .dh-logo-mark[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    border-radius: 12px;\n  }\n  .dh-logo-chip[_ngcontent-%COMP%] {\n    inset: 6px;\n    border-radius: 9px;\n  }\n  .dh-logo-bar[_ngcontent-%COMP%] {\n    left: 12px;\n    right: 12px;\n  }\n  .dh-logo-bar-top[_ngcontent-%COMP%] {\n    top: 12px;\n  }\n  .dh-logo-bar-mid[_ngcontent-%COMP%] {\n    top: 18px;\n    right: 9px;\n  }\n  .dh-logo-bar-bottom[_ngcontent-%COMP%] {\n    top: 24px;\n  }\n  .dh-logo-text[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n}\n/*# sourceMappingURL=header.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "dh-header", standalone: true, imports: [RouterLink, RouterLinkActive], changeDetection: ChangeDetectionStrategy.OnPush, template: '<nav class="navbar navbar-expand-lg fixed-top dh-navbar dh-glass-white border-bottom shadow-xs">\n  <div class="container">\n    <a class="navbar-brand d-flex align-items-center" routerLink="/">\n      \n      <div class="brand-wrap me-2 bg-orange-light d-flex align-items-center justify-content-center rounded-3" style="width: 40px; height: 40px;">\n        <i class="bi bi-rocket-takeoff-fill text-orange"></i>\n      </div>\n      <span class="fw-800 text-head fs-4"><span class="text-orange">demo</span>Handler</span>\n     \n      <!-- <span class="dh-logo me-2" aria-hidden="true">\n        <span class="dh-logo-mark">\n          <span class="dh-logo-chip"></span>\n          <span class="dh-logo-bar dh-logo-bar-top"></span>\n          <span class="dh-logo-bar dh-logo-bar-mid"></span>\n          <span class="dh-logo-bar dh-logo-bar-bottom"></span>\n        </span>\n        <span class="dh-logo-text">\n          <span class="dh-logo-demo">demo</span>\n          <span class="dh-logo-handler">Handler</span>\n        </span>\n      </span> -->\n    </a>\n    \n    <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">\n      <span class="navbar-toggler-icon"></span>\n    </button>\n    \n    <div class="collapse navbar-collapse" id="navbarNav">\n      <ul class="navbar-nav ms-auto align-items-center">\n        <li class="nav-item px-1"><a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>\n        <li class="nav-item px-1"><a class="nav-link" routerLink="/about" routerLinkActive="active">About</a></li>\n        <li class="nav-item px-1"><a class="nav-link" routerLink="/services" routerLinkActive="active">Services</a></li>\n        <li class="nav-item px-1"><a class="nav-link" routerLink="/team" routerLinkActive="active">Team</a></li>\n        <li class="nav-item pe-lg-4 px-1"><a class="nav-link" routerLink="/faq" routerLinkActive="active">FAQ</a></li>\n        <li class="nav-item mt-3 mt-lg-0">\n          <a class="dh-btn-orange text-decoration-none shadow-sm px-4" routerLink="/contact">Get Started</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n', styles: ['/* src/app/shared/components/header/header.scss */\n.dh-navbar {\n  background: transparent;\n  padding: 1.25rem 0;\n  border-bottom: 1px solid transparent !important;\n  transition: var(--dh-transition);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n}\n.dh-logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n.dh-logo-mark {\n  position: relative;\n  width: 44px;\n  height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff1e8 0%,\n      #ffd8bf 100%);\n  box-shadow: 0 12px 24px rgba(249, 115, 22, 0.18);\n}\n.dh-logo-chip {\n  position: absolute;\n  inset: 7px;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      145deg,\n      var(--dh-orange) 0%,\n      #ff9a3d 100%);\n}\n.dh-logo-bar {\n  position: absolute;\n  left: 14px;\n  right: 14px;\n  height: 3px;\n  border-radius: 999px;\n  background: #fff8f3;\n  z-index: 1;\n}\n.dh-logo-bar-top {\n  top: 14px;\n}\n.dh-logo-bar-mid {\n  top: 20px;\n  right: 10px;\n}\n.dh-logo-bar-bottom {\n  top: 26px;\n}\n.dh-logo-text {\n  display: inline-flex;\n  align-items: baseline;\n  font-size: 1.6rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  line-height: 1;\n}\n.dh-logo-demo {\n  color: var(--dh-orange);\n}\n.dh-logo-handler {\n  color: var(--dh-text-head);\n}\n.nav-link {\n  color: var(--dh-text-body) !important;\n  font-weight: 600;\n  font-size: 0.95rem;\n  transition: var(--dh-transition);\n}\n.nav-link:hover {\n  color: var(--dh-orange) !important;\n}\n.nav-link.active {\n  color: var(--dh-orange) !important;\n  position: relative;\n}\n.nav-link.active::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 0.5rem;\n  right: 0.5rem;\n  height: 2px;\n  background: var(--dh-orange);\n  border-radius: 2px;\n}\n.text-head {\n  color: var(--dh-text-head);\n}\n.fw-800 {\n  font-weight: 800;\n}\n@media (max-width: 575.98px) {\n  .dh-logo {\n    gap: 0.65rem;\n  }\n  .dh-logo-mark {\n    width: 38px;\n    height: 38px;\n    border-radius: 12px;\n  }\n  .dh-logo-chip {\n    inset: 6px;\n    border-radius: 9px;\n  }\n  .dh-logo-bar {\n    left: 12px;\n    right: 12px;\n  }\n  .dh-logo-bar-top {\n    top: 12px;\n  }\n  .dh-logo-bar-mid {\n    top: 18px;\n    right: 9px;\n  }\n  .dh-logo-bar-bottom {\n    top: 24px;\n  }\n  .dh-logo-text {\n    font-size: 1.35rem;\n  }\n}\n/*# sourceMappingURL=header.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/shared/components/header/header.ts", lineNumber: 12 });
})();

// src/app/shared/components/footer/footer.ts
var Footer = class _Footer {
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["dh-footer"]], decls: 72, vars: 0, consts: [[1, "bg-subtle", "pt-5", "pb-4", "border-top"], [1, "container", "pt-4"], [1, "row", "g-5"], [1, "col-lg-4"], ["routerLink", "/", 1, "d-flex", "align-items-center", "text-decoration-none", "mb-4"], [1, "bg-orange-light", "p-2", "rounded-3", "me-2"], [1, "bi", "bi-rocket-takeoff-fill", "text-orange", "fs-5"], [1, "fw-800", "text-head", "fs-4"], [1, "text-body", "small", "mb-4", "pe-lg-5", "lh-lg"], [1, "d-flex", "gap-3"], ["href", "#", 1, "social-btn"], [1, "bi", "bi-linkedin"], [1, "bi", "bi-twitter-x"], [1, "bi", "bi-github"], [1, "col-6", "col-lg-2", "ms-lg-auto"], [1, "footer-title"], [1, "list-unstyled", "footer-links"], ["routerLink", "/about"], ["routerLink", "/services"], ["routerLink", "/team"], ["routerLink", "/contact"], [1, "col-6", "col-lg-3"], [1, "col-lg-3"], [1, "text-body", "small", "mb-4"], [1, "input-group"], ["type", "email", "placeholder", "Your email", 1, "form-control", "border-0", "bg-white", "py-3", "shadow-none", "small"], [1, "btn", "dh-btn-orange", "px-3", "py-0", "rounded-start-0"], [1, "bi", "bi-arrow-right"], [1, "my-5", "border-slate"], [1, "row", "align-items-center"], [1, "col-md-6", "text-center", "text-md-start", "mb-3", "mb-md-0"], [1, "text-muted", "small", "mb-0"], [1, "col-md-6", "text-center", "text-md-end"], [1, "list-inline", "mb-0", "small"], [1, "list-inline-item", "me-4"], ["href", "#", 1, "text-muted", "text-decoration-none"], [1, "list-inline-item"]], template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "div", 5);
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8, "demoHandler");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10, " Helping businesses scale through modern IT solutions, cloud-native infrastructure, and user-centric digital experiences. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "a", 10);
      \u0275\u0275element(13, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 10);
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 10);
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 14)(19, "h6", 15);
      \u0275\u0275text(20, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "ul", 16)(22, "li")(23, "a", 17);
      \u0275\u0275text(24, "About Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li")(26, "a", 18);
      \u0275\u0275text(27, "Solutions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li")(29, "a", 19);
      \u0275\u0275text(30, "The Team");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "li")(32, "a", 20);
      \u0275\u0275text(33, "Contact");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "div", 21)(35, "h6", 15);
      \u0275\u0275text(36, "Expertise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "ul", 16)(38, "li")(39, "a", 18);
      \u0275\u0275text(40, "Web Apps");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 18);
      \u0275\u0275text(43, "AI Integration");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 18);
      \u0275\u0275text(46, "Cloud Strategy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li")(48, "a", 18);
      \u0275\u0275text(49, "UI/UX Design");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 22)(51, "h6", 15);
      \u0275\u0275text(52, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 23);
      \u0275\u0275text(54, "Stay updated with the latest in IT and AI.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 24);
      \u0275\u0275element(56, "input", 25);
      \u0275\u0275elementStart(57, "button", 26);
      \u0275\u0275element(58, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(59, "hr", 28);
      \u0275\u0275elementStart(60, "div", 29)(61, "div", 30)(62, "p", 31);
      \u0275\u0275text(63, "\xA9 2026 demoHandler Inc. All rights reserved.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 32)(65, "ul", 33)(66, "li", 34)(67, "a", 35);
      \u0275\u0275text(68, "Privacy Policy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "li", 36)(70, "a", 35);
      \u0275\u0275text(71, "Legal");
      \u0275\u0275elementEnd()()()()()()();
    }
  }, dependencies: [RouterLink], styles: ["\n\n.footer-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  color: var(--dh-text-head);\n  margin-bottom: 1.5rem;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--dh-text-body);\n  text-decoration: none;\n  font-size: 0.9rem;\n  margin-bottom: 0.75rem;\n  display: block;\n  transition: var(--dh-transition);\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--dh-orange);\n  transform: translateX(5px);\n}\n.social-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: white;\n  border: 1px solid var(--dh-border);\n  color: var(--dh-text-body);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: var(--dh-transition);\n}\n.social-btn[_ngcontent-%COMP%]:hover {\n  background: var(--dh-orange-light);\n  color: var(--dh-orange);\n  border-color: var(--dh-orange);\n}\n.border-slate[_ngcontent-%COMP%] {\n  border-color: #E2E8F0 !important;\n}\n.text-head[_ngcontent-%COMP%] {\n  color: var(--dh-text-head);\n}\n.text-body[_ngcontent-%COMP%] {\n  color: var(--dh-text-body);\n}\n.fw-800[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n/*# sourceMappingURL=footer.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "dh-footer", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<footer class="bg-subtle pt-5 pb-4 border-top">\r\n  <div class="container pt-4">\r\n    <div class="row g-5">\r\n      <div class="col-lg-4">\r\n        <a class="d-flex align-items-center text-decoration-none mb-4" routerLink="/">\r\n          <div class="bg-orange-light p-2 rounded-3 me-2">\r\n            <i class="bi bi-rocket-takeoff-fill text-orange fs-5"></i>\r\n          </div>\r\n          <span class="fw-800 text-head fs-4">demoHandler</span>\r\n        </a>\r\n        <p class="text-body small mb-4 pe-lg-5 lh-lg">\r\n          Helping businesses scale through modern IT solutions, cloud-native infrastructure, and user-centric digital experiences.\r\n        </p>\r\n        <div class="d-flex gap-3">\r\n          <a href="#" class="social-btn"><i class="bi bi-linkedin"></i></a>\r\n          <a href="#" class="social-btn"><i class="bi bi-twitter-x"></i></a>\r\n          <a href="#" class="social-btn"><i class="bi bi-github"></i></a>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class="col-6 col-lg-2 ms-lg-auto">\r\n        <h6 class="footer-title">Company</h6>\r\n        <ul class="list-unstyled footer-links">\r\n          <li><a routerLink="/about">About Us</a></li>\r\n          <li><a routerLink="/services">Solutions</a></li>\r\n          <li><a routerLink="/team">The Team</a></li>\r\n          <li><a routerLink="/contact">Contact</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class="col-6 col-lg-3">\r\n        <h6 class="footer-title">Expertise</h6>\r\n        <ul class="list-unstyled footer-links">\r\n          <li><a routerLink="/services">Web Apps</a></li>\r\n          <li><a routerLink="/services">AI Integration</a></li>\r\n          <li><a routerLink="/services">Cloud Strategy</a></li>\r\n          <li><a routerLink="/services">UI/UX Design</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class="col-lg-3">\r\n        <h6 class="footer-title">Newsletter</h6>\r\n        <p class="text-body small mb-4">Stay updated with the latest in IT and AI.</p>\r\n        <div class="input-group">\r\n          <input type="email" class="form-control border-0 bg-white py-3 shadow-none small" placeholder="Your email">\r\n          <button class="btn dh-btn-orange px-3 py-0 rounded-start-0"><i class="bi bi-arrow-right"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <hr class="my-5 border-slate">\r\n    \r\n    <div class="row align-items-center">\r\n      <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">\r\n        <p class="text-muted small mb-0">&copy; 2026 demoHandler Inc. All rights reserved.</p>\r\n      </div>\r\n      <div class="col-md-6 text-center text-md-end">\r\n         <ul class="list-inline mb-0 small">\r\n            <li class="list-inline-item me-4"><a href="#" class="text-muted text-decoration-none">Privacy Policy</a></li>\r\n            <li class="list-inline-item"><a href="#" class="text-muted text-decoration-none">Legal</a></li>\r\n         </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n', styles: ["/* src/app/shared/components/footer/footer.scss */\n.footer-title {\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  color: var(--dh-text-head);\n  margin-bottom: 1.5rem;\n}\n.footer-links a {\n  color: var(--dh-text-body);\n  text-decoration: none;\n  font-size: 0.9rem;\n  margin-bottom: 0.75rem;\n  display: block;\n  transition: var(--dh-transition);\n}\n.footer-links a:hover {\n  color: var(--dh-orange);\n  transform: translateX(5px);\n}\n.social-btn {\n  width: 36px;\n  height: 36px;\n  background: white;\n  border: 1px solid var(--dh-border);\n  color: var(--dh-text-body);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: var(--dh-transition);\n}\n.social-btn:hover {\n  background: var(--dh-orange-light);\n  color: var(--dh-orange);\n  border-color: var(--dh-orange);\n}\n.border-slate {\n  border-color: #E2E8F0 !important;\n}\n.text-head {\n  color: var(--dh-text-head);\n}\n.text-body {\n  color: var(--dh-text-body);\n}\n.fw-800 {\n  font-weight: 800;\n}\n/*# sourceMappingURL=footer.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/shared/components/footer/footer.ts", lineNumber: 12 });
})();

// src/app/shared/components/layout/layout.ts
var Layout = class _Layout {
  static \u0275fac = function Layout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Layout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Layout, selectors: [["dh-layout"]], decls: 5, vars: 0, consts: [[1, "d-flex", "flex-column", "min-vh-100"], [1, "flex-shrink-0"]], template: function Layout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "dh-header");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "dh-footer");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet, Header, Footer], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Layout, [{
    type: Component,
    args: [{ selector: "dh-layout", standalone: true, imports: [RouterOutlet, Header, Footer], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="d-flex flex-column min-vh-100">\r\n  <dh-header></dh-header>\r\n  <main class="flex-shrink-0">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n  <dh-footer></dh-footer>\r\n</div>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Layout, { className: "Layout", filePath: "src/app/shared/components/layout/layout.ts", lineNumber: 13 });
})();
export {
  Layout
};
//# sourceMappingURL=chunk-YRKOHFQS.js.map
