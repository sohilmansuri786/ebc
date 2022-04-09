"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["default-src_app_core_pagination_pagination_module_ts"],{

/***/ 4852:
/*!*********************************************************!*\
  !*** ./src/app/core/pagination/pagination.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function PaginationComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", p_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r2);
} }
const _c0 = function (a0) { return { active: a0 }; };
function PaginationComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_li_13_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const page_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.getPage(page_r3, ctx_r4.selectedPageLimit); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.currentPage === page_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r3);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
class PaginationComponent {
    constructor() {
        this.selectedPageLimit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultPageLimit;
        this.PageLimit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pageLimit;
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    getPage(page, limit) {
        // if (this.currentPage != page || this.selectedPageLimit != limit) {
        this.currentPage = page;
        this.selectedPageLimit = limit;
        this.onPageChange.emit({
            page: this.currentPage,
            limit: this.selectedPageLimit
        });
        // }
    }
    ngOnInit() { }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["pagination"]], inputs: { paginationList: "paginationList", selectedPageLimit: "selectedPageLimit", currentPage: "currentPage", PageLimit: "PageLimit" }, outputs: { onPageChange: "onPageChange" }, decls: 19, vars: 9, consts: [[1, "pagination-foo", "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "pagin-sel"], ["for", "inlineFormSelectPref", 1, ""], [1, "select", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["aria-label", "Page"], [1, "pagination", "mb-0"], [1, "page-item", 3, "ngClass"], [1, "page-link", "border-0", "d-flex", "align-items-center", 3, "click"], [1, "material-icons"], ["class", "page-item", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "page-item"], [1, "page-link", "border-0", 3, "ngClass", "click"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PaginationComponent_Template_select_ngModelChange_4_listener($event) { return ctx.selectedPageLimit = $event; })("change", function PaginationComponent_Template_select_change_4_listener() { return ctx.getPage(1, ctx.selectedPageLimit); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PaginationComponent_option_5_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_9_listener() { return ctx.getPage(ctx.currentPage - 1, ctx.selectedPageLimit); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "navigate_before");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PaginationComponent_li_13_Template, 3, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_15_listener() { return ctx.getPage(ctx.currentPage + 1, ctx.selectedPageLimit); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "navigate_next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedPageLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.PageLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx.currentPage === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.paginationList == null ? null : ctx.paginationList.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx.currentPage === (ctx.paginationList == null ? null : ctx.paginationList.totalPages)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"]], styles: [".pagination-foo[_ngcontent-%COMP%] {\n  border-top: 1.94444px solid var(--color-border);\n  padding-top: 20px;\n}\n.pagination-foo[_ngcontent-%COMP%]   .pagin-sel[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--black);\n}\n.pagination-foo[_ngcontent-%COMP%]   .pagin-sel[_ngcontent-%COMP%]     .select {\n  border: none;\n  background: var(--color-light-gray);\n  border-radius: 5px;\n  padding: 5px;\n  margin-left: 5px;\n}\n.pagination-foo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.pagination-foo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 31px;\n  background-color: var(--color-primary);\n  color: var(--white);\n  border-radius: 50px;\n  margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDUTtFQUNJLG1CQUFBO0FBQ1o7QUFDVTtFQUNFLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFJUTtFQUNFLG1CQUFBO0FBRlY7QUFJWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGZCIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24tZm9ve1xyXG4gICAgYm9yZGVyLXRvcDogMS45NDQ0NHB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC5wYWdpbi1zZWx7XHJcbiAgICAgICAgJiBsYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA6Om5nLWRlZXAgLnNlbGVjdCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtZ3JheSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgbmF2IHtcclxuICAgICAgICAmIHVsIHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAmIGxpIHtcclxuICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMxcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIC5wYWdpbmF0aW9uLWZvbyB7XHJcbi8vICAgICBib3JkZXItdG9wOiAxLjk0NDQ0cHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4vLyAgICAgOjpuZy1kZWVwIHBhZ2luYXRpb24ge1xyXG4vLyAgICAgICAmIGxhYmVsIHtcclxuLy8gICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIDo6bmctZGVlcCAuc2VsZWN0IHtcclxuLy8gICAgICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtZ3JheSk7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICAmIG5hdiB7XHJcbi8vICAgICAgICAgJiB1bCB7XHJcbi8vICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgICAgJiBsaSB7XHJcbi8vICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4vLyAgICAgICAgICAgICAgIHdpZHRoOiAzMXB4O1xyXG4vLyAgICAgICAgICAgICAgIGhlaWdodDogMzFweDtcclxuLy8gICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4vLyAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbi8vICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9Il19 */"] });


/***/ }),

/***/ 9304:
/*!******************************************************!*\
  !*** ./src/app/core/pagination/pagination.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationModule": () => (/* binding */ PaginationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.component */ 4852);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class PaginationModule {
}
PaginationModule.ɵfac = function PaginationModule_Factory(t) { return new (t || PaginationModule)(); };
PaginationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PaginationModule });
PaginationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaginationModule, { declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_0__.PaginationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule], exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_0__.PaginationComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_core_pagination_pagination_module_ts.js.map