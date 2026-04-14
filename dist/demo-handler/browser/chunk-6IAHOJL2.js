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

// src/app/features/services/services.ts
var _forTrack0 = ($index, $item) => $item.id;
function Services_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 15)(2, "div", 16);
    \u0275\u0275element(3, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20)(9, "a", 21);
    \u0275\u0275text(10, " Explore More ");
    \u0275\u0275element(11, "i", 22);
    \u0275\u0275elementEnd()()()();
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
var Services = class _Services {
  services = inject(DemoService).allServices;
  static \u0275fac = function Services_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Services)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Services, selectors: [["dh-services"]], decls: 25, vars: 0, consts: [[1, "page-header", "text-white", "position-relative", "bg-pure"], [1, "header-glow", "position-absolute", "w-100", "h-100", "top-0", "start-0", "opacity-25"], [1, "container", "position-relative", "py-5", "text-center"], [1, "display-3", "fw-800", "mb-3", "animate-fade"], [1, "text-orange"], [1, "lead", "text-light-gray", "fs-4", "mx-auto", "animate-fade", 2, "max-width", "700px"], [1, "bg-surface"], [1, "container"], [1, "row", "g-4"], [1, "col-md-6", "col-lg-3"], [1, "py-5", "bg-pure", "text-white", "text-center", "position-relative", "overflow-hidden", "border-top", "border-orange-10"], [1, "container", "py-5"], [1, "display-5", "fw-800", "mb-4"], [1, "lead", "mb-5", "text-light-gray"], ["routerLink", "/contact", 1, "dh-btn-orange", "px-5", "py-3", "fs-5", "shadow-orange"], [1, "dh-card-premium", "p-5", "h-100", "d-flex", "flex-column", "border-0", "shadow-lg"], [1, "icon-wrap", "bg-orange-soft", "text-orange", "rounded-3", "mb-4", "d-flex", "align-items-center", "justify-content-center", 2, "width", "64px", "height", "64px"], [1, "bi", "fs-2"], [1, "h4", "fw-bold", "text-white", "mb-3"], [1, "text-light-gray", "small", "mb-4", "flex-grow-1", "lh-lg"], [1, "mt-auto", "pt-4", "border-top", "border-orange-10"], ["href", "#", 1, "text-orange", "text-decoration-none", "fw-bold", "small"], [1, "bi", "bi-chevron-right", "ms-1"]], template: function Services_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Our ");
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Solutions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Enterprise-grade IT services engineered for performance, security, and scale. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "section", 6)(10, "div", 7)(11, "div", 8);
      \u0275\u0275repeaterCreate(12, Services_For_13_Template, 12, 4, "div", 9, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "section", 10)(15, "div", 11)(16, "h2", 12);
      \u0275\u0275text(17, "Ready to ");
      \u0275\u0275elementStart(18, "span", 4);
      \u0275\u0275text(19, "Modernize");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Your Stack?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p", 13);
      \u0275\u0275text(22, "Consult with our lead architects today and get a custom transformation roadmap.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 14);
      \u0275\u0275text(24, " Request Architectural Audit ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.services());
    }
  }, dependencies: [RouterLink], styles: ["\n\n.header-glow[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      var(--dh-orange) 0%,\n      transparent 70%);\n}\n.bg-orange-soft[_ngcontent-%COMP%] {\n  background: rgba(255, 107, 0, 0.1);\n}\n.border-orange-10[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 107, 0, 0.1) !important;\n}\n.fw-800[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-top: -88px;\n  padding-top: 150px !important;\n}\n/*# sourceMappingURL=services.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Services, [{
    type: Component,
    args: [{ selector: "dh-services", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="page-header text-white position-relative bg-pure">\r\n  <div class="header-glow position-absolute w-100 h-100 top-0 start-0 opacity-25"></div>\r\n  <div class="container position-relative py-5 text-center">\r\n    <h1 class="display-3 fw-800 mb-3 animate-fade">Our <span class="text-orange">Solutions</span></h1>\r\n    <p class="lead text-light-gray fs-4 mx-auto animate-fade" style="max-width: 700px;">\r\n      Enterprise-grade IT services engineered for performance, security, and scale.\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<section class="bg-surface">\r\n  <div class="container">\r\n    <div class="row g-4">\r\n      @for (service of services(); track service.id) {\r\n        <div class="col-md-6 col-lg-3">\r\n          <div class="dh-card-premium p-5 h-100 d-flex flex-column border-0 shadow-lg">\r\n            <div class="icon-wrap bg-orange-soft text-orange rounded-3 mb-4 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">\r\n              <i class="bi fs-2" [class]="service.icon"></i>\r\n            </div>\r\n            <h3 class="h4 fw-bold text-white mb-3">{{ service.title }}</h3>\r\n            <p class="text-light-gray small mb-4 flex-grow-1 lh-lg">{{ service.description }}</p>\r\n            <div class="mt-auto pt-4 border-top border-orange-10">\r\n              <a href="#" class="text-orange text-decoration-none fw-bold small">\r\n                Explore More <i class="bi bi-chevron-right ms-1"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      }\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class="py-5 bg-pure text-white text-center position-relative overflow-hidden border-top border-orange-10">\r\n   <div class="container py-5">\r\n      <h2 class="display-5 fw-800 mb-4">Ready to <span class="text-orange">Modernize</span> Your Stack?</h2>\r\n      <p class="lead mb-5 text-light-gray">Consult with our lead architects today and get a custom transformation roadmap.</p>\r\n      <a routerLink="/contact" class="dh-btn-orange px-5 py-3 fs-5 shadow-orange">\r\n        Request Architectural Audit\r\n      </a>\r\n   </div>\r\n</section>\r\n', styles: ["/* src/app/features/services/services.scss */\n.header-glow {\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      var(--dh-orange) 0%,\n      transparent 70%);\n}\n.bg-orange-soft {\n  background: rgba(255, 107, 0, 0.1);\n}\n.border-orange-10 {\n  border-top: 1px solid rgba(255, 107, 0, 0.1) !important;\n}\n.fw-800 {\n  font-weight: 800;\n}\n.page-header {\n  margin-top: -88px;\n  padding-top: 150px !important;\n}\n/*# sourceMappingURL=services.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Services, { className: "Services", filePath: "src/app/features/services/services.ts", lineNumber: 13 });
})();
export {
  Services
};
//# sourceMappingURL=chunk-6IAHOJL2.js.map
