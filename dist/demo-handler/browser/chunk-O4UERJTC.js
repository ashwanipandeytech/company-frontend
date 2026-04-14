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
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DXTZCRAZ.js";

// src/app/features/faq/faq.ts
var _forTrack0 = ($index, $item) => $item.id;
function Faq_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21)(1, "h2", 22)(2, "button", 23)(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(7, "div", 26)(8, "div", 27)(9, "p", 28);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-bs-toggle", "collapse")("data-bs-target", "#faq-" + faq_r1.id)("aria-controls", "faq-" + faq_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("0", faq_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r1.question);
    \u0275\u0275advance();
    \u0275\u0275domProperty("id", "faq-" + faq_r1.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r1.answer);
  }
}
var Faq = class _Faq {
  faqs = inject(DemoService).allFaqs;
  static \u0275fac = function Faq_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Faq)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Faq, selectors: [["dh-faq"]], decls: 37, vars: 0, consts: [[1, "page-header", "text-white", "position-relative", "bg-pure"], [1, "header-glow", "position-absolute", "w-100", "h-100", "top-0", "start-0", "opacity-25"], [1, "container", "position-relative", "py-5", "text-center"], [1, "display-3", "fw-800", "mb-3", "animate-fade"], [1, "text-orange"], [1, "lead", "text-light-gray", "fs-4", "mx-auto", "animate-fade", 2, "max-width", "700px"], [1, "faq-showcase", "bg-subtle"], [1, "container"], [1, "row", "g-4", "align-items-stretch", "mb-5", "faq-intro-row"], [1, "col-lg-4"], [1, "faq-side-card", "h-100"], [1, "dh-section-label"], [1, "faq-side-title"], [1, "faq-side-copy"], [1, "faq-trust-list"], [1, "faq-trust-item"], [1, "bi", "bi-shield-check"], [1, "bi", "bi-diagram-3"], [1, "bi", "bi-lightning-charge"], [1, "col-lg-8"], ["id", "faqAcc", 1, "accordion", "faq-accordion"], [1, "accordion-item", "faq-card"], [1, "accordion-header"], ["type", "button", 1, "accordion-button", "collapsed", "faq-card-trigger"], [1, "faq-card-index"], [1, "faq-card-question"], ["data-bs-parent", "#faqAcc", 1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body", "faq-card-body"], [1, "mb-0"]], template: function Faq_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "div", 1);
      \u0275\u0275domElementStart(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "FAQ");
      \u0275\u0275domElementStart(5, "span", 4);
      \u0275\u0275text(6, ".");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "p", 5);
      \u0275\u0275text(8, " Quick insights into our technical process and partnership model. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(9, "section", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "aside", 10)(14, "span", 11);
      \u0275\u0275text(15, "Support Model");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "h2", 12);
      \u0275\u0275text(17, "Answers built for confident decision-making.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "p", 13);
      \u0275\u0275text(19, "We keep the process transparent from discovery through delivery, so stakeholders know what to expect, what we recommend, and how we de-risk execution.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "div", 14)(21, "div", 15);
      \u0275\u0275domElement(22, "i", 16);
      \u0275\u0275domElementStart(23, "span");
      \u0275\u0275text(24, "Security-minded delivery");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(25, "div", 15);
      \u0275\u0275domElement(26, "i", 17);
      \u0275\u0275domElementStart(27, "span");
      \u0275\u0275text(28, "Cross-functional collaboration");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(29, "div", 15);
      \u0275\u0275domElement(30, "i", 18);
      \u0275\u0275domElementStart(31, "span");
      \u0275\u0275text(32, "Fast, structured execution");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(33, "div", 19)(34, "div", 20);
      \u0275\u0275repeaterCreate(35, Faq_For_36_Template, 11, 7, "div", 21, _forTrack0);
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275repeater(ctx.faqs());
    }
  }, styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-top: -88px;\n  padding-top: 150px !important;\n}\n.header-glow[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      var(--dh-orange) 0%,\n      transparent 70%);\n}\n.faq-showcase[_ngcontent-%COMP%] {\n  position: relative;\n}\n.faq-intro-row[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n.faq-side-card[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 2rem;\n  border: 1px solid rgba(255, 106, 0, 0.12);\n  border-radius: 28px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #fff7f0 100%);\n  box-shadow: 0 20px 50px -34px rgba(15, 23, 42, 0.22);\n}\n.faq-side-card[_ngcontent-%COMP%]   .dh-section-label[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.faq-side-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: var(--dh-text-head);\n  font-size: 1.8rem;\n  font-weight: 800;\n  letter-spacing: -0.035em;\n}\n.faq-side-copy[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: var(--dh-text-body);\n  line-height: 1.75;\n}\n.faq-trust-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.9rem;\n}\n.faq-trust-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.9rem 1rem;\n  border-radius: 18px;\n  background: #fff;\n  border: 1px solid rgba(226, 232, 240, 0.95);\n  color: var(--dh-text-head);\n  font-weight: 600;\n  box-shadow: 0 12px 30px -26px rgba(15, 23, 42, 0.2);\n}\n.faq-trust-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--dh-orange);\n  font-size: 1.05rem;\n}\n.faq-accordion[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.faq-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid rgba(226, 232, 240, 0.95) !important;\n  border-radius: 24px !important;\n  background: #fff;\n  box-shadow: 0 20px 50px -34px rgba(15, 23, 42, 0.18);\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease,\n    border-color 0.3s ease;\n}\n.faq-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(255, 106, 0, 0.18) !important;\n  box-shadow: 0 24px 55px -30px rgba(15, 23, 42, 0.22);\n}\n.faq-card-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem 1.5rem 1.5rem 1.4rem !important;\n  background: #fff !important;\n  color: var(--dh-text-head) !important;\n  font-size: 1.05rem;\n  font-weight: 700;\n  box-shadow: none !important;\n  transition: background-color 0.25s ease, color 0.25s ease;\n}\n.faq-card-trigger[_ngcontent-%COMP%]::after {\n  margin-left: auto;\n  filter: brightness(0);\n  transition: transform 0.25s ease;\n}\n.faq-card-trigger[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.faq-card-trigger[_ngcontent-%COMP%]:not(.collapsed) {\n  background:\n    linear-gradient(\n      180deg,\n      #fff9f5 0%,\n      #fff2e8 100%) !important;\n  color: var(--dh-text-head) !important;\n}\n.faq-card-index[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 3rem;\n  height: 3rem;\n  padding: 0 0.85rem;\n  border-radius: 999px;\n  background: var(--dh-orange-light);\n  color: var(--dh-orange);\n  font-size: 0.8rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n.faq-card-question[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.45;\n}\n.faq-card-body[_ngcontent-%COMP%] {\n  padding: 0 1.5rem 1.5rem 5.4rem;\n  color: var(--dh-text-body);\n  line-height: 1.8;\n  border-top: 1px solid rgba(226, 232, 240, 0.85);\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fffdfb 100%);\n}\n.text-head[_ngcontent-%COMP%] {\n  color: var(--dh-text-head);\n}\n.text-body[_ngcontent-%COMP%] {\n  color: var(--dh-text-body);\n}\n.fw-800[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n@media (max-width: 991.98px) {\n  .faq-side-card[_ngcontent-%COMP%] {\n    padding: 1.75rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .faq-card-trigger[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    padding: 1.2rem 1.1rem 1.2rem 1.1rem !important;\n  }\n  .faq-card-index[_ngcontent-%COMP%] {\n    min-width: 2.55rem;\n    height: 2.55rem;\n  }\n  .faq-card-body[_ngcontent-%COMP%] {\n    padding: 0 1.1rem 1.2rem 1.1rem;\n  }\n}\n/*# sourceMappingURL=faq.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Faq, [{
    type: Component,
    args: [{ selector: "dh-faq", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page-header text-white position-relative bg-pure">
  <div class="header-glow position-absolute w-100 h-100 top-0 start-0 opacity-25"></div>
  <div class="container position-relative py-5 text-center">
    <h1 class="display-3 fw-800 mb-3 animate-fade">FAQ<span class="text-orange">.</span></h1>
    <p class="lead text-light-gray fs-4 mx-auto animate-fade" style="max-width: 700px;">
      Quick insights into our technical process and partnership model.
    </p>
  </div>
</div>

<section class="faq-showcase bg-subtle">
  <div class="container">
    <div class="row g-4 align-items-stretch mb-5 faq-intro-row">
      <div class="col-lg-4">
        <aside class="faq-side-card h-100">
          <span class="dh-section-label">Support Model</span>
          <h2 class="faq-side-title">Answers built for confident decision-making.</h2>
          <p class="faq-side-copy">We keep the process transparent from discovery through delivery, so stakeholders know what to expect, what we recommend, and how we de-risk execution.</p>
          <div class="faq-trust-list">
            <div class="faq-trust-item">
              <i class="bi bi-shield-check"></i>
              <span>Security-minded delivery</span>
            </div>
            <div class="faq-trust-item">
              <i class="bi bi-diagram-3"></i>
              <span>Cross-functional collaboration</span>
            </div>
            <div class="faq-trust-item">
              <i class="bi bi-lightning-charge"></i>
              <span>Fast, structured execution</span>
            </div>
          </div>
        </aside>
      </div>

      <div class="col-lg-8">
        <div class="accordion faq-accordion" id="faqAcc">
          @for (faq of faqs(); track faq.id) {
            <div class="accordion-item faq-card">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed faq-card-trigger"
                  type="button"
                  [attr.data-bs-toggle]="'collapse'"
                  [attr.data-bs-target]="'#faq-' + faq.id"
                  [attr.aria-controls]="'faq-' + faq.id"
                >
                  <span class="faq-card-index">0{{ faq.id }}</span>
                  <span class="faq-card-question">{{ faq.question }}</span>
                </button>
              </h2>
              <div [id]="'faq-' + faq.id" class="accordion-collapse collapse" data-bs-parent="#faqAcc">
                <div class="accordion-body faq-card-body">
                  <p class="mb-0">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  </div>
</section>\r
`, styles: ["/* src/app/features/faq/faq.scss */\n.page-header {\n  margin-top: -88px;\n  padding-top: 150px !important;\n}\n.header-glow {\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      var(--dh-orange) 0%,\n      transparent 70%);\n}\n.faq-showcase {\n  position: relative;\n}\n.faq-intro-row {\n  margin-bottom: 0 !important;\n}\n.faq-side-card {\n  height: 100%;\n  padding: 2rem;\n  border: 1px solid rgba(255, 106, 0, 0.12);\n  border-radius: 28px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #fff7f0 100%);\n  box-shadow: 0 20px 50px -34px rgba(15, 23, 42, 0.22);\n}\n.faq-side-card .dh-section-label {\n  margin-bottom: 1rem;\n}\n.faq-side-title {\n  margin-bottom: 1rem;\n  color: var(--dh-text-head);\n  font-size: 1.8rem;\n  font-weight: 800;\n  letter-spacing: -0.035em;\n}\n.faq-side-copy {\n  margin-bottom: 1.5rem;\n  color: var(--dh-text-body);\n  line-height: 1.75;\n}\n.faq-trust-list {\n  display: grid;\n  gap: 0.9rem;\n}\n.faq-trust-item {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.9rem 1rem;\n  border-radius: 18px;\n  background: #fff;\n  border: 1px solid rgba(226, 232, 240, 0.95);\n  color: var(--dh-text-head);\n  font-weight: 600;\n  box-shadow: 0 12px 30px -26px rgba(15, 23, 42, 0.2);\n}\n.faq-trust-item i {\n  color: var(--dh-orange);\n  font-size: 1.05rem;\n}\n.faq-accordion {\n  display: grid;\n  gap: 1rem;\n}\n.faq-card {\n  overflow: hidden;\n  border: 1px solid rgba(226, 232, 240, 0.95) !important;\n  border-radius: 24px !important;\n  background: #fff;\n  box-shadow: 0 20px 50px -34px rgba(15, 23, 42, 0.18);\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease,\n    border-color 0.3s ease;\n}\n.faq-card:hover {\n  transform: translateY(-4px);\n  border-color: rgba(255, 106, 0, 0.18) !important;\n  box-shadow: 0 24px 55px -30px rgba(15, 23, 42, 0.22);\n}\n.faq-card-trigger {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem 1.5rem 1.5rem 1.4rem !important;\n  background: #fff !important;\n  color: var(--dh-text-head) !important;\n  font-size: 1.05rem;\n  font-weight: 700;\n  box-shadow: none !important;\n  transition: background-color 0.25s ease, color 0.25s ease;\n}\n.faq-card-trigger::after {\n  margin-left: auto;\n  filter: brightness(0);\n  transition: transform 0.25s ease;\n}\n.faq-card-trigger:focus {\n  box-shadow: none;\n}\n.faq-card-trigger:not(.collapsed) {\n  background:\n    linear-gradient(\n      180deg,\n      #fff9f5 0%,\n      #fff2e8 100%) !important;\n  color: var(--dh-text-head) !important;\n}\n.faq-card-index {\n  flex: 0 0 auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 3rem;\n  height: 3rem;\n  padding: 0 0.85rem;\n  border-radius: 999px;\n  background: var(--dh-orange-light);\n  color: var(--dh-orange);\n  font-size: 0.8rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n.faq-card-question {\n  flex: 1;\n  line-height: 1.45;\n}\n.faq-card-body {\n  padding: 0 1.5rem 1.5rem 5.4rem;\n  color: var(--dh-text-body);\n  line-height: 1.8;\n  border-top: 1px solid rgba(226, 232, 240, 0.85);\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fffdfb 100%);\n}\n.text-head {\n  color: var(--dh-text-head);\n}\n.text-body {\n  color: var(--dh-text-body);\n}\n.fw-800 {\n  font-weight: 800;\n}\n@media (max-width: 991.98px) {\n  .faq-side-card {\n    padding: 1.75rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .faq-card-trigger {\n    align-items: flex-start;\n    padding: 1.2rem 1.1rem 1.2rem 1.1rem !important;\n  }\n  .faq-card-index {\n    min-width: 2.55rem;\n    height: 2.55rem;\n  }\n  .faq-card-body {\n    padding: 0 1.1rem 1.2rem 1.1rem;\n  }\n}\n/*# sourceMappingURL=faq.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Faq, { className: "Faq", filePath: "src/app/features/faq/faq.ts", lineNumber: 11 });
})();
export {
  Faq
};
//# sourceMappingURL=chunk-O4UERJTC.js.map
