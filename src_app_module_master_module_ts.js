"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["src_app_module_master_module_ts"],{

/***/ 1905:
/*!************************************************************!*\
  !*** ./src/app/core/aside-nav/aside-nav-routing-module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsideNavRoutingModule": () => (/* binding */ AsideNavRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AsideNavRoutingModule {
}
AsideNavRoutingModule.ɵfac = function AsideNavRoutingModule_Factory(t) { return new (t || AsideNavRoutingModule)(); };
AsideNavRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AsideNavRoutingModule });
AsideNavRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AsideNavRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 56:
/*!*******************************************************!*\
  !*** ./src/app/core/aside-nav/aside-nav.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsideNavComponent": () => (/* binding */ AsideNavComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_app_module_side_nav_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/module/side-nav-links */ 3056);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-auto-unsubscribe */ 3970);
/* harmony import */ var src_app_shared_permission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/permission */ 9206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 7514);












function AsideNavComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 10);
} }
function AsideNavComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 11);
} }
function AsideNavComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("none", !ctx_r2.sidenavshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, "SIDEBAR.DASHBOARD"));
} }
function AsideNavComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AsideNavComponent_div_15_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.toggleShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("none", !ctx_r3.sidenavshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, "SIDEBAR.ADMIN"));
} }
function AsideNavComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("none", !ctx_r4.sidenavshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "SIDEBAR.USER"));
} }
function AsideNavComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("none", !ctx_r5.sidenavshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "SIDEBAR.ROLE"));
} }
function AsideNavComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("none", !ctx_r6.sidenavshow);
} }
function AsideNavComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " local_mall");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("none", !ctx_r7.sidenavshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, "SIDEBAR.TENANT"));
} }
function AsideNavComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "business_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("none", !ctx_r8.sidenavshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, "SIDEBAR.BUSINESSUNIT"));
} }
function AsideNavComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " tab ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("none", !ctx_r9.sidenavshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, "SIDEBAR.CARDS"));
} }
function AsideNavComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " layers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("none", !ctx_r10.sidenavshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, "SIDEBAR.MYCARDS"));
} }
let AsideNavComponent = class AsideNavComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.asideNav = src_app_module_side_nav_links__WEBPACK_IMPORTED_MODULE_0__.NavLink.asideNav;
        this.permissionObject = null;
        this.permissionCode = src_app_shared_permission__WEBPACK_IMPORTED_MODULE_3__.permission;
        this.dataService.currentUser.subscribe((response) => {
            this.currentUser = response;
        });
        this.dataService.permission.subscribe((response) => {
            this.permissionObject = response;
        });
    }
    ngOnInit() {
        this.isShown = true;
        this.sidenavshow = true;
    }
    toggleShow() {
        this.isShown = !this.isShown;
    }
    toggleShowsidebar() {
        this.sidenavshow = !this.sidenavshow;
        if (!this.sidenavshow) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.sideNav').css('width', '82px');
            // $('.side-container').css('margin-left', '82px').slideLeft();
            jquery__WEBPACK_IMPORTED_MODULE_1__('.side-container').addClass('wl_82');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.sideNav').css('width', '210px');
            // $('.side-container').css('margin-left', '210px');
            jquery__WEBPACK_IMPORTED_MODULE_1__('.side-container').removeClass('wl_82');
        }
    }
    ShowsidebarMob() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.sideNav').css('width', '0');
        jquery__WEBPACK_IMPORTED_MODULE_1__('.side-container').css('margin-left', '0');
        jquery__WEBPACK_IMPORTED_MODULE_1__('.overlay').css('display', 'none');
    }
    ngOnDestroy() {
    }
};
AsideNavComponent.ɵfac = function AsideNavComponent_Factory(t) { return new (t || AsideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService)); };
AsideNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AsideNavComponent, selectors: [["app-aside-nav"]], inputs: { asideNav: "asideNav" }, decls: 23, vars: 21, consts: [["id", "sidebar", 1, "side-navbar", "active-nav"], [1, "nav-logo"], ["src", "../../../assets/images/login/nec.logo.png", "routerLink", "/dashboard", 4, "ngIf"], ["src", "../../../assets/images/login/nec.logo.png", 4, "ngIf"], [1, "float-right"], [1, "btn_toggle", "mob", 3, "click"], [1, "btn_toggle", 3, "click"], [1, ""], ["class", "nav-link", 4, "ngIf"], ["class", "nav-link sublink", 4, "ngIf"], ["src", "../../../assets/images/login/nec.logo.png", "routerLink", "/dashboard"], ["src", "../../../assets/images/login/nec.logo.png"], [1, "nav-link"], ["routerLink", "/dashboard", "routerLinkActive", "active"], [1, "mx-2"], ["routerLinkActive", "active", 3, "click"], [1, "nav-link", "sublink"], ["routerLink", "/user", "routerLinkActive", "active", 1, "subnav_link"], [1, "dot"], ["routerLink", "/role", "routerLinkActive", "active", 1, "subnav_link"], ["routerLink", "/address", "routerLinkActive", "active", 1, "subnav_link"], ["routerLink", "/tenant", "routerLinkActive", "active"], ["routerLink", "/business-unit", "routerLinkActive", "active"], ["routerLink", "/cards", "routerLinkActive", "active"], ["routerLink", "/my-cards", "routerLinkActive", "active"]], template: function AsideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AsideNavComponent_img_2_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AsideNavComponent_img_3_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AsideNavComponent_Template_button_click_5_listener() { return ctx.ShowsidebarMob(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "keyboard_double_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AsideNavComponent_Template_button_click_8_listener() { return ctx.toggleShowsidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "keyboard_double_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AsideNavComponent_div_14_Template, 7, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AsideNavComponent_div_15_Template, 7, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AsideNavComponent_div_16_Template, 6, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AsideNavComponent_div_17_Template, 6, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AsideNavComponent_div_18_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AsideNavComponent_div_19_Template, 7, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AsideNavComponent_div_20_Template, 7, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AsideNavComponent_div_21_Template, 7, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AsideNavComponent_div_22_Template, 7, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("full", ctx.sidenavshow)("half", !ctx.sidenavshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("w-0", !ctx.sidenavshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.dashboard));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.dashboard)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("icon_rotate", !ctx.sidenavshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("icon_rotate", !ctx.sidenavshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.dashboard));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.user)) || (ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.role)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShown && (ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.user)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShown && (ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.role)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShown && (ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.address)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.tenant));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.businessUnit));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.cards));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.myCards));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".expand[_ngcontent-%COMP%] {\n  padding: 1rem 0 !important;\n  justify-content: center;\n}\n\n.float-right[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  line-height: 34px;\n  border: none;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n  align-content: flex-end;\n  text-align: right;\n}\n\n.logo_short[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  background: #fff;\n  margin: 0 auto;\n  border-radius: 50%;\n  margin-bottom: 20px;\n  display: none;\n}\n\n.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 10px 10px 10px 22px;\n  font-size: 15px;\n  transition: all 0.2s ease;\n  font-weight: 500;\n  position: relative;\n}\n\n.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  background-color: rgba(99, 94, 190, 0.1);\n  width: 50%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: -1;\n  \n  opacity: 0;\n  transition: all 0.2s ease-in;\n}\n\n.w-0[_ngcontent-%COMP%] {\n  width: 0;\n  visibility: hidden;\n}\n\n\n\n.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  width: 100%;\n}\n\n.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: rgba(99, 94, 190, 0.1);\n  color: #fff;\n  border-left: 3px solid #635ebe;\n}\n\n.nav-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px;\n  cursor: pointer;\n}\n\n.nav-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 89px;\n  margin-bottom: 10px;\n}\n\n.btn_toggle[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media (max-width: 768px) {\n  .btn_toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.btn_toggle[_ngcontent-%COMP%]   .icon_rotate[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.btn_toggle.mob[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 768px) {\n  .btn_toggle.mob[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n\n\n.side-navbar[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.side-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.side-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-bottom: 15px;\n}\n\n.side-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  height: 5px;\n  width: 5px;\n  margin: 0 8px;\n  border-radius: 50%;\n  background-color: var(--color-gray);\n}\n\n.side-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--color-light-blue);\n  display: flex;\n  align-items: center;\n  padding: 12px 14px;\n  cursor: pointer;\n}\n\n.side-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-gray);\n}\n\n.side-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .dot[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n}\n\n.side-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n\n.side-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: var(--color-primary);\n  border-radius: 10px;\n  box-shadow: var(--button-dropdown-shadow);\n}\n\n.side-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .mx-2[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  color: var(--white);\n}\n\n.side-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active.subnav_link[_ngcontent-%COMP%] {\n  background-color: transparent;\n  box-shadow: none;\n}\n\n.side-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active.subnav_link[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  height: 9px;\n  width: 9px;\n}\n\n.side-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active.subnav_link[_ngcontent-%COMP%]   .mx-2[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n\n.my-container[_ngcontent-%COMP%] {\n  transition: 0.4s;\n}\n\n.active-nav[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n\n\n.active-cont[_ngcontent-%COMP%] {\n  margin-left: 180px;\n}\n\n#menu-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: -19px;\n  margin-top: 0;\n  position: absolute;\n  z-index: 999;\n  top: 50px;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 24px;\n  width: 24px;\n  color: var(--color-primary);\n}\n\n.none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n\n.nav-link[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 24px;\n  width: 24px;\n  color: var(--white);\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  color: black;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  color: #1a58f6;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  color: #1a58f6;\n  font-size: 18px;\n}\n\n\n\na[_ngcontent-%COMP%]:active {\n  color: #89e2f1;\n}\n\n.mat-card[_ngcontent-%COMP%]:not {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUFBO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREEsb0NBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUlGOztBQURBO0VBQ0Usd0NBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFLRjs7QUFKRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUhBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFNRjs7QUFMRTtFQU5GO0lBT0ksYUFBQTtFQVFGO0FBQ0Y7O0FBUEU7RUFDRSx5QkFBQTtBQVNKOztBQVBFO0VBQ0UsYUFBQTtBQVNKOztBQVJJO0VBRkY7SUFHSSxjQUFBO0VBV0o7QUFDRjs7QUFSQSxlQUFBOztBQUNBO0VBQ0UsWUFBQTtBQVdGOztBQVZFO0VBQ0UsZ0JBQUE7QUFZSjs7QUFYSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQWFOOztBQVpNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQWNSOztBQVhJO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFhTjs7QUFaTTtFQUNFLHdCQUFBO0FBY1I7O0FBWFE7RUFDRSxzQ0FBQTtBQWFWOztBQVhRO0VBQ0UsMkJBQUE7QUFhVjs7QUFWTTtFQUNFLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBWVI7O0FBWFE7RUFDRSx5QkFBQTtFQUVBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFhVjs7QUFYUTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUFhVjs7QUFaVTtFQUNFLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFjWjs7QUFaVTtFQUNFLDJCQUFBO0FBY1o7O0FBTkE7RUFDRSxnQkFBQTtBQVNGOztBQU5BO0VBQ0UsY0FBQTtBQVNGOztBQU5BLHFCQUFBOztBQUNBO0VBQ0Usa0JBQUE7QUFTRjs7QUFOQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBU0Y7O0FBTkE7RUFDRSx5QkFBQTtFQUVBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQVNGOztBQVBBO0VBQ0Usd0JBQUE7QUFVRjs7QUFSQTtFQUNFLDZCQUFBO0FBV0Y7O0FBVEE7RUFDRSx5QkFBQTtFQUVBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVlGOztBQVZBLG1CQUFBOztBQUNBO0VBQ0UsWUFBQTtBQWFGOztBQVZBLGlCQUFBOztBQUNBO0VBQ0UsY0FBQTtBQWFGOztBQVZBLG9CQUFBOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFhRjs7QUFWQSxrQkFBQTs7QUFDQTtFQUNFLGNBQUE7QUFhRjs7QUFYQTtFQUNFLGdCQUFBO0FBY0YiLCJmaWxlIjoiYXNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZCB7XHJcbiAgcGFkZGluZzogMXJlbSAwICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbG9hdC1yaWdodCAubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZmxvYXQtcmlnaHQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ubG9nb19zaG9ydCB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNpZGUtbmF2YmFyIGxpIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIycHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaWRlLW5hdmJhciBsaSBhOjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OSwgOTQsIDE5MCwgMC4xKTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICAvKiBib3JkZXItcmFkaXVzOiA3cHg7ICovXHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xyXG59XHJcbi53LTAge1xyXG4gIHdpZHRoOiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4vKiAuc2lkZS1uYXZiYXIgbGkgYTpmb2N1czo6YWZ0ZXIsICovXHJcbi5zaWRlLW5hdmJhciBsaSBhOmhvdmVyOjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpZGUtbmF2YmFyIGxpIGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk5LCA5NCwgMTkwLCAwLjEpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzYzNWViZTtcclxufVxyXG4ubmF2LWxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogODlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcbi5idG5fdG9nZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmljb25fcm90YXRlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG4gICYubW9iIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8qIFNpZGVCYXJOYXYgKi9cclxuLnNpZGUtbmF2YmFyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdWwge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIC5kb3Qge1xyXG4gICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWJsdWUpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5kb3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLWRyb3Bkb3duLXNoYWRvdyk7XHJcbiAgICAgICAgLm14LTIge1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnN1Ym5hdl9saW5rIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIC5kb3Qge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubXgtMiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5teS1jb250YWluZXIge1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hY3RpdmUtbmF2IHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLyogZm9yIG1haW4gc2VjdGlvbiAqL1xyXG4uYWN0aXZlLWNvbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxODBweDtcclxufVxyXG5cclxuI21lbnUtYnRuIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tbGVmdDogLTE5cHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHRvcDogNTBweDtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLm5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG4ubmF2LWxpbmsgLmFjdGl2ZSAubWF0LWljb24ge1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuLyogdW52aXNpdGVkIGxpbmsgKi9cclxuYTpsaW5rIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIHZpc2l0ZWQgbGluayAqL1xyXG5hOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiAjMWE1OGY2O1xyXG59XHJcblxyXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxYTU4ZjY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4vKiBzZWxlY3RlZCBsaW5rICovXHJcbmE6YWN0aXZlIHtcclxuICBjb2xvcjogcmdiKDEzNywgMjI2LCAyNDEpO1xyXG59XHJcbi5tYXQtY2FyZDpub3Qge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuIl19 */"] });
AsideNavComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_2__.AutoUnsubscribe)()
], AsideNavComponent);



/***/ }),

/***/ 7572:
/*!****************************************************!*\
  !*** ./src/app/core/aside-nav/aside-nav.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsideNavModule": () => (/* binding */ AsideNavModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _aside_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aside-nav.component */ 56);
/* harmony import */ var _aside_nav_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside-nav-routing-module */ 1905);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var src_app_shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/i18n/i18n.module */ 2820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







class AsideNavModule {
}
AsideNavModule.ɵfac = function AsideNavModule_Factory(t) { return new (t || AsideNavModule)(); };
AsideNavModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AsideNavModule });
AsideNavModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _aside_nav_routing_module__WEBPACK_IMPORTED_MODULE_1__.AsideNavRoutingModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            src_app_shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__.I18nModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AsideNavModule, { declarations: [_aside_nav_component__WEBPACK_IMPORTED_MODULE_0__.AsideNavComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _aside_nav_routing_module__WEBPACK_IMPORTED_MODULE_1__.AsideNavRoutingModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        src_app_shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__.I18nModule], exports: [_aside_nav_component__WEBPACK_IMPORTED_MODULE_0__.AsideNavComponent] }); })();


/***/ }),

/***/ 2927:
/*!****************************************************************!*\
  !*** ./src/app/core/layout/sidebar/master-layout.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterLayoutComponent": () => (/* binding */ MasterLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-auto-unsubscribe */ 3970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../aside-nav/aside-nav.component */ 56);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _profile_drop_profile_drop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../profile-drop/profile-drop.component */ 9425);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);












let MasterLayoutComponent = class MasterLayoutComponent {
    constructor(translate, dataService) {
        this.translate = translate;
        this.dataService = dataService;
        this.subNavShow = false;
        this.brandTitle = "NEC";
        this.navLink = [];
        this.languageList = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.language;
        this.isCompanySelected = false;
        if (localStorage.getItem('currentLanguage')) {
            (translate.getLangs().includes(localStorage.getItem('currentLanguage')) ?
                this.activeLang = localStorage.getItem('currentLanguage') :
                this.activeLang = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === null || src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === void 0 ? void 0 : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultLangCode);
        }
        else
            this.activeLang = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultLangCode;
        this.dataService.currentUser.subscribe((res) => {
            if (res) {
                this.currentUser = res;
            }
        });
    }
    ngOnInit() {
        this.activeLang = this.translate.currentLang;
        this.sidenavshow = true;
    }
    searchObject(a) {
    }
    onLanguageChange() {
        localStorage.setItem('currentLanguage', this.activeLang);
        window.location.reload();
    }
    ShowsidebarMob() {
        // this.sidenavshow = !this.sidenavshow;
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.sideNav').css('width') == '0px') {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.sideNav').css('width', '210px');
            jquery__WEBPACK_IMPORTED_MODULE_1__('.overlay').css('display', 'block');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.sideNav').css('width', '0px');
            jquery__WEBPACK_IMPORTED_MODULE_1__('.overlay').css('display', 'none');
        }
    }
    ngOnDestroy() { }
};
MasterLayoutComponent.ɵfac = function MasterLayoutComponent_Factory(t) { return new (t || MasterLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService)); };
MasterLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MasterLayoutComponent, selectors: [["app-master-layout"]], decls: 16, vars: 1, consts: [[1, "overlay"], [1, "sideNav"], [1, "side-container"], [1, "navbar", "navbar-expand-md", "navbar-dark"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 1, "hamburger_menu", 3, "click"], ["aria-label", "Side nav toggle icon"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "d-flex", "nav-right1"], [1, "nav-item", "dropdown", "user-prof-box"], ["role", "button", "type", "button", "id", "profileDrop", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "profile_drop"], [1, "rounded-circle"], ["alt", "", 3, "src"], ["aria-labelledby", "profileDrop", 1, "dropdown-menu", "drop-menu-right"]], template: function MasterLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-aside-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MasterLayoutComponent_Template_button_click_5_listener() { return ctx.ShowsidebarMob(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "app-profile-drop", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", (ctx.currentUser == null ? null : ctx.currentUser.profilePicture) ? ctx.currentUser == null ? null : ctx.currentUser.profilePicture : "https://ebcstorage2022.blob.core.windows.net/ebc/DefaultUser.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    } }, directives: [_aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_4__.AsideNavComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _profile_drop_profile_drop_component__WEBPACK_IMPORTED_MODULE_5__.ProfileDropComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet], styles: [".mat-select {\n  white-space: inherit;\n  display: inline !important;\n}\n\n  .mat-form-field {\n  margin: 0rem 0rem;\n}\n\n  .mat-form-field-wrapper {\n  padding-bottom: 0em;\n}\n\n.navbar-dark[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background-color: #fff;\n  box-shadow: 0px 1px 1px #8080801c;\n  z-index: 9;\n}\n\n@media (max-width: 768px) {\n  .navbar-dark[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 100%;\n    z-index: 2;\n    background-color: #fff;\n    left: 0;\n    top: 0;\n    box-shadow: 0px 2px 4px #80808012;\n  }\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .hamburger_menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 768px) {\n  .navbar-dark[_ngcontent-%COMP%]   .hamburger_menu[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-left: 10px;\n  }\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .hamburger_menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 33px;\n  color: var(--color-secondary);\n}\n\n.notif-bell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 42px;\n  position: relative;\n}\n\n.navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-basis: auto;\n}\n\n.navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 25px;\n}\n\n@media (max-width: 768px) {\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: row;\n    margin-right: 0;\n  }\n}\n\n.navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0rem 0.5rem !important;\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 100px;\n    display: none;\n  }\n}\n\n.navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile_drop[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n}\n\n.navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile_drop[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 37px;\n  width: 37px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notif-bell[_ngcontent-%COMP%] {\n  padding: 0 15px !important;\n}\n\n.navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 10px;\n  font-size: 15px;\n  transition: all 0.2s ease;\n  font-weight: 500;\n  position: relative;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  --bs-text-opacity: 1;\n  color: var(--black) !important;\n}\n\n.notif-bell[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  top: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  right: 26px;\n  font-size: 11px;\n  padding: 0;\n  border-radius: 50%;\n  background: #ed5b75;\n}\n\n.notif-bell[_ngcontent-%COMP%]:hover {\n  color: #000 !important;\n  background-color: transparent !important;\n}\n\n\n\n.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background-color: #e5e5e5;\n  border-radius: 8px;\n  border: 0;\n  width: 180px;\n  box-shadow: var(--sidenav-shadow);\n}\n\n.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  height: 30px !important;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  color: #000;\n  padding-left: 10px;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened)    > .ng-select-container[_ngcontent-%COMP%] {\n  border-color: #635ebe;\n  box-shadow: none;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: auto;\n  margin-top: 12px;\n  margin-right: 10px;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.mat-icon[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  color: var(--black);\n}\n\n.sideNav[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n  position: fixed;\n  background-color: var(--white);\n  transition: 0.5s;\n  box-shadow: var(--sidenav-shadow);\n  width: 210px;\n  z-index: 999;\n  top: 0;\n}\n\n@media (max-width: 768px) {\n  .sideNav[_ngcontent-%COMP%] {\n    width: 0px;\n  }\n}\n\n.side-container[_ngcontent-%COMP%] {\n  margin-left: 210px;\n  padding: 0;\n  height: calc(100% - 56px);\n  transition: all linear 0.3s;\n  -webkit-transition: all linear 0.3s;\n  -moz-transition: all linear 0.3s;\n  -ms-transition: all linear 0.3s;\n}\n\n@media (max-width: 768px) {\n  .side-container[_ngcontent-%COMP%] {\n    padding: 0 15px;\n    height: 100%;\n    margin-left: 0;\n    margin-top: 100px;\n  }\n}\n\nli[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: rgba(99, 94, 190, 0.1);\n  color: #fff;\n  border-left: 3px solid #635ebe;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  display: none;\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(12, 24, 56, 0.32);\n  z-index: 9;\n}\n\n.wl_82[_ngcontent-%COMP%] {\n  margin-left: 82px;\n  transition: all linear 0.3s;\n  -webkit-transition: all linear 0.3s;\n  -moz-transition: all linear 0.3s;\n  -ms-transition: all linear 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQUU7RUFORjtJQU9JLGVBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxpQ0FBQTtFQUdGO0FBQ0Y7O0FBRkU7RUFDRSxhQUFBO0FBSUo7O0FBSEk7RUFGRjtJQUdJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsaUJBQUE7RUFNSjtBQUNGOztBQUxJO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0FBT047O0FBRkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBRkE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBTEk7RUFIRjtJQUlJLG1CQUFBO0lBQ0EsZUFBQTtFQVFKO0FBQ0Y7O0FBUEk7RUFDRSwrQkFBQTtFQUNBLGVBQUE7QUFTTjs7QUFMUTtFQURGO0lBRUksWUFBQTtJQUNBLGFBQUE7RUFRUjtBQUNGOztBQU5NO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBUVI7O0FBTlU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFRWjs7QUFKTTtFQUNFLDBCQUFBO0FBTVI7O0FBSk07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFNUjs7QUFEQTtFQUNFLG9CQUFBO0VBQ0EsOEJBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBRkE7RUFDRSxzQkFBQTtFQUNBLHdDQUFBO0FBS0Y7O0FBRkEsY0FBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBS0Y7O0FBRkE7RUFDRSx1QkFBQTtBQUtGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0FBS0Y7O0FBRkE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUhBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7QUFPRjs7QUFKQTtFQUNFLG1CQUFBO0FBT0Y7O0FBSkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0FBT0Y7O0FBTkU7RUFWRjtJQVdJLFVBQUE7RUFTRjtBQUNGOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQVVGOztBQVRFO0VBUkY7SUFTSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQVlGO0FBQ0Y7O0FBVkE7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQWFGOztBQVhBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBY0Y7O0FBWkE7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FBZUYiLCJmaWxlIjoibWFzdGVyLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXNlbGVjdCB7XHJcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMHJlbSAwcmVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwZW07XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDFweCAjODA4MDgwMWM7XHJcbiAgei1pbmRleDogOTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggIzgwODA4MDEyO1xyXG4gIH1cclxuICAuaGFtYnVyZ2VyX21lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5vdGlmLWJlbGwgaSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgdWwge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDByZW0gMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIH1cclxuICAgICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnByb2ZpbGVfZHJvcCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDozN3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzdweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm5vdGlmLWJlbGwge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRleHQtcHJpbWFyeSB7XHJcbiAgLS1icy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xyXG59XHJcbi5ub3RpZi1iZWxsIC5iYWRnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICB0b3A6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcmlnaHQ6IDI2cHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNlZDViNzU7XHJcbn1cclxuXHJcbi5ub3RpZi1iZWxsOmhvdmVyIHtcclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIE5nIFNlbGVjdCAqL1xyXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2lkZW5hdi1zaGFkb3cpO1xyXG59XHJcblxyXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXIge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1mb2N1c2VkOm5vdCgubmctc2VsZWN0LW9wZW5lZCkgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjM1ZWJlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLm1hdC1pY29uIC5tYXQtYmFkZ2UtY29udGVudCB7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG5cclxuLnNpZGVOYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaWRlbmF2LXNoYWRvdyk7XHJcbiAgd2lkdGg6IDIxMHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB0b3A6IDA7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gIH1cclxufVxyXG4uc2lkZS1jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjNzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjNzO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuM3M7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5saSBhLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OSwgOTQsIDE5MCwgMC4xKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM2MzVlYmU7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMiwgMjQsIDU2LCAwLjMyKTtcclxuICB6LWluZGV4OiA5O1xyXG59XHJcbi53bF84MntcclxuICBtYXJnaW4tbGVmdDogODJweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuM3M7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuM3M7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4zcztcclxufSJdfQ== */"] });
MasterLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_2__.AutoUnsubscribe)()
], MasterLayoutComponent);



/***/ }),

/***/ 3661:
/*!***************************************************************!*\
  !*** ./src/app/core/notifications/notifications.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NotificationsComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(); };
NotificationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 45, vars: 0, consts: [[1, "notification-dropdown"], [1, "card-title", "px-3", "pt-2", "mb-0"], [1, "p-3"], [1, "timeline", "timeline-border"], [1, "timeline-list"], [1, "timeline-info"], ["title", "Profile", 1, "text-muted"], [1, "timeline-list", "timeline-border", "timeline-primary"], [1, "text-muted"], [1, "timeline-list", "timeline-border", "timeline-accent"], [1, "timeline-list", "timeline-border", "timeline-success"], [1, "timeline-list", "timeline-border", "timeline-warning"], ["href", "#"], [1, "timeline-list", "timeline-border", "timeline-info"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Skype call with development team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "07/07/18, 1:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Programming control system");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "07/09/18, 10:00 AM - 6:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lunch with Peter Higgs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "07/10/18, 12:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Approve Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " for new training material by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "07/11/18, 9:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "RSVP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " for this year's hackathon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "07/11/18, 1:30 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".notification-dropdown[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n}\n\n.timeline[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%]   .timeline-list[_ngcontent-%COMP%] {\n  position: relative;\n  border-color: #e5ebf8;\n}\n\n.timeline-border[_ngcontent-%COMP%] {\n  border-left: 1px solid #e5ebf8;\n}\n\n.timeline[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%]   .timeline-list[_ngcontent-%COMP%] {\n  position: relative;\n  border-color: #e5ebf8;\n}\n\n.timeline[_ngcontent-%COMP%]   .timeline-list[_ngcontent-%COMP%] {\n  padding-bottom: 1px;\n}\n\n.timeline[_ngcontent-%COMP%]   .timeline-list[_ngcontent-%COMP%]:after {\n  display: table;\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  margin-left: -6px;\n  content: \"\";\n  border-width: 1px;\n  border-style: solid;\n  border-color: inherit;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0 0 0 3px #e5ebf8 inset;\n}\n\n.timeline[_ngcontent-%COMP%]   .timeline-list[_ngcontent-%COMP%]   .timeline-info[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-bottom: 15px;\n  margin-left: 20px;\n  font-size: 0.9rem;\n}\n\n.timeline-primary[_ngcontent-%COMP%] {\n  border-color: #635ebe !important;\n}\n\n.timeline-info[_ngcontent-%COMP%] {\n  border-color: #399AF2 !important;\n}\n\n.timeline-success[_ngcontent-%COMP%] {\n  border-color: #2fbfa0 !important;\n}\n\n.timeline-warning[_ngcontent-%COMP%] {\n  border-color: #FFCE67 !important;\n}\n\n.timeline-accent[_ngcontent-%COMP%] {\n  border-color: #F64A91 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUE7RUFDSSw4QkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7QUFNSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLGdDQUFBO0FBT0o7O0FBTEE7RUFDSSxnQ0FBQTtBQVFKOztBQU5BO0VBQ0ksZ0NBQUE7QUFTSjs7QUFQQTtFQUNJLGdDQUFBO0FBVUo7O0FBUkE7RUFDSSxnQ0FBQTtBQVdKIiwiZmlsZSI6Im5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uLWRyb3Bkb3due1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi50aW1lbGluZSwgLnRpbWVsaW5lIC50aW1lbGluZS1saXN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2U1ZWJmODtcclxufVxyXG4udGltZWxpbmUtYm9yZGVyIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U1ZWJmODtcclxufVxyXG4udGltZWxpbmUsIC50aW1lbGluZSAudGltZWxpbmUtbGlzdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNlNWViZjg7XHJcbn1cclxuLnRpbWVsaW5lIC50aW1lbGluZS1saXN0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbn1cclxuLnRpbWVsaW5lIC50aW1lbGluZS1saXN0OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggI2U1ZWJmOCBpbnNldDtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZS1saXN0IC50aW1lbGluZS1pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbi50aW1lbGluZS1wcmltYXJ5IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzYzNWViZSFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpbWVsaW5lLWluZm8ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMzk5QUYyIWltcG9ydGFudDtcclxufVxyXG4udGltZWxpbmUtc3VjY2VzcyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyZmJmYTAhaW1wb3J0YW50O1xyXG59XHJcbi50aW1lbGluZS13YXJuaW5nIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGQ0U2NyFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpbWVsaW5lLWFjY2VudCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNGNjRBOTEhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ 6956:
/*!************************************************************!*\
  !*** ./src/app/core/notifications/notifications.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsModule": () => (/* binding */ NotificationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.component */ 3661);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class NotificationsModule {
}
NotificationsModule.ɵfac = function NotificationsModule_Factory(t) { return new (t || NotificationsModule)(); };
NotificationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NotificationsModule });
NotificationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotificationsModule, { declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_0__.NotificationsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExModule], exports: [_notifications_component__WEBPACK_IMPORTED_MODULE_0__.NotificationsComponent] }); })();


/***/ }),

/***/ 9425:
/*!*************************************************************!*\
  !*** ./src/app/core/profile-drop/profile-drop.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDropComponent": () => (/* binding */ ProfileDropComponent)
/* harmony export */ });
/* harmony import */ var D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-auto-unsubscribe */ 3970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common.service */ 5842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);









function ProfileDropComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Tenant Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ProfileDropComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Bushiness Unit Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

let ProfileDropComponent = class ProfileDropComponent {
  constructor(router, dataService, commonService) {
    this.router = router;
    this.dataService = dataService;
    this.commonService = commonService;
    this.permission = [];
    this.permissionObject = null;
    this.dataService.currentUser.subscribe(response => {
      this.currentUserDetail = response;
    }); // this.dataService.isCompanySelected.subscribe((response) => {
    //   this.isCompanySelected = response;
    // });
  }

  ngOnInit() {} // checkPermission(module, action = "list") {
  //   const perm_module = this.permission[module];
  //   return (perm_module != undefined && (perm_module[action] !== undefined && perm_module[action] === true) || false);
  // }


  onLogOut() {
    var _this = this;

    this.commonService.logout(this.currentUserDetail.refreshToken.token).subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        yield _this.dataService.purgeAuth();
        yield _this.router.navigateByUrl('/login');
        window.location.reload();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref2 = (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        yield _this.dataService.purgeAuth();
        yield _this.router.navigateByUrl('/login');
        window.location.reload();
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  ngOnDestroy() {}

};

ProfileDropComponent.ɵfac = function ProfileDropComponent_Factory(t) {
  return new (t || ProfileDropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
};

ProfileDropComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProfileDropComponent,
  selectors: [["app-profile-drop"]],
  decls: 25,
  vars: 6,
  consts: [[1, "dropdown-header"], [1, "media", "d-user"], [1, "bg-white", "rounded-circle", "p-2", "font-weight-bold", "mr-2", "rounded_circle_profile", 2, "width", "60px", "height", "60px", "background-color", "#e4e3f3 !important"], ["alt", "", 2, "width", "60px", "height", "60px", "border-radius", "50px", 3, "src"], [1, "media-body", 2, "transform", "translate(13px, 0px)"], [1, "mt-0", "mb-0"], [1, "mailid"], ["routerLink", "/profile", "title", "My Profile", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "la", "la-user", "fa-2x", "mr-2"], [1, "gap"], ["class", "dropdown-item d-flex align-items-center", "routerLink", "/tenant-profile", "title", "My Profile", 4, "ngIf"], ["class", "dropdown-item d-flex align-items-center", "routerLink", "/bu-profile", "title", "My Profile", 4, "ngIf"], [1, "dropdown-divider"], ["routerLink", "/profile/change-password", "title", "Change Password", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "la", "la-lock", "fa-2x", "mr-2"], ["title", "Sign Out", 1, "dropdown-item", "d-flex", "align-items-center", 3, "click"], [1, "la", "la-sign-out", "fa-2x", "mr-2"], ["routerLink", "/tenant-profile", "title", "My Profile", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "la", "la-cog", "fa-2x", "mr-2"], ["routerLink", "/bu-profile", "title", "My Profile", 1, "dropdown-item", "d-flex", "align-items-center"]],
  template: function ProfileDropComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " My Profile ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ProfileDropComponent_a_14_Template, 4, 0, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ProfileDropComponent_a_15_Template, 4, 0, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Change Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileDropComponent_Template_a_click_21_listener() {
        return ctx.onLogOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Sign Out ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", (ctx.currentUserDetail == null ? null : ctx.currentUserDetail.profilePicture) ? ctx.currentUserDetail == null ? null : ctx.currentUserDetail.profilePicture : "https://ebcblob.blob.core.windows.net/ebc/DefaultUser.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.currentUserDetail == null ? null : ctx.currentUserDetail.firstName, " ", ctx.currentUserDetail == null ? null : ctx.currentUserDetail.lastName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.currentUserDetail == null ? null : ctx.currentUserDetail.emailId);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.currentUserDetail == null ? null : ctx.currentUserDetail.userType) == "Tenant Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.currentUserDetail == null ? null : ctx.currentUserDetail.userType) == "BU Admin");
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
  styles: [".gap[_ngcontent-%COMP%] {\n  margin: 2px 8px 0px;\n}\n\n.mailid[_ngcontent-%COMP%] {\n  word-break: break-all;\n  display: inline-block;\n  white-space: break-spaces;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtZHJvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FBQUo7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJwcm9maWxlLWRyb3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FwIFxyXG57XHJcbiAgICBtYXJnaW46IDJweCA4cHggMHB4O1xyXG59XHJcbi5tYWlsaWR7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG59Il19 */"]
});
ProfileDropComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__.AutoUnsubscribe)()], ProfileDropComponent);


/***/ }),

/***/ 111:
/*!**********************************************************!*\
  !*** ./src/app/core/profile-drop/profile-drop.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDropModule": () => (/* binding */ ProfileDropModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _profile_drop_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-drop.component */ 9425);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class ProfileDropModule {
}
ProfileDropModule.ɵfac = function ProfileDropModule_Factory(t) { return new (t || ProfileDropModule)(); };
ProfileDropModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfileDropModule });
ProfileDropModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileDropModule, { declarations: [_profile_drop_component__WEBPACK_IMPORTED_MODULE_0__.ProfileDropComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExModule], exports: [_profile_drop_component__WEBPACK_IMPORTED_MODULE_0__.ProfileDropComponent] }); })();


/***/ }),

/***/ 2448:
/*!*************************************************!*\
  !*** ./src/app/core/search/search.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 4770);




class SearchComponent {
    constructor() {
        this.text = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.placeholder = 'Search';
    }
    ngOnInit() {
    }
    searchAction(text) {
        this.text.emit(text);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["search-box"]], inputs: { placeholder: "placeholder" }, outputs: { text: "text" }, decls: 6, vars: 1, consts: [[1, "adbtn", "search-b"], [1, "input-group"], ["type", "search", "aria-label", "Search", "aria-describedby", "search-addon", 1, "form-control", 3, "placeholder", "search"], ["search", ""], ["matSuffix", "", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function SearchComponent_Template_input_search_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.searchAction(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.searchAction(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatSuffix], styles: [".search-b[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 48px;\n    padding: 15px 15px 15px 40px;\n    background: var(--white);\n    box-shadow: var(--button-primary-shadow);\n    border-radius: 10px !important;\n  }\n\n  .search-b[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 8px;\n    \n    top: 13px;\n  }"] });


/***/ }),

/***/ 4778:
/*!**********************************************!*\
  !*** ./src/app/core/search/search.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ 2448);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class SearchModule {
}
SearchModule.ɵfac = function SearchModule_Factory(t) { return new (t || SearchModule)(); };
SearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExModule], exports: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent] }); })();


/***/ }),

/***/ 8130:
/*!*************************************************!*\
  !*** ./src/app/module/master-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterRoutingModule": () => (/* binding */ MasterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_layout_sidebar_master_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/layout/sidebar/master-layout.component */ 2927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _core_layout_sidebar_master_layout_component__WEBPACK_IMPORTED_MODULE_0__.MasterLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 6302)).then(m => m.DashboardModule),
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_module_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 8815)).then(m => m.ProfileModule),
            },
            {
                path: 'tenant-profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_tenant-profile_tenant-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tenant-profile/tenant-profile.module */ 6885)).then(m => m.TenantProfileModule),
            },
            {
                path: 'bu-profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_module_business-unit-profile_business-unit-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./business-unit-profile/business-unit-profile.module */ 6790)).then(m => m.BusinessUnitProfileModule),
            },
            // Module
            {
                path: 'user',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_pagination_pagination_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_module_user_user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user/user.module */ 7340)).then(m => m.UserModule),
            },
            {
                path: 'role',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_pagination_pagination_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_module_role_role_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./role/role.module */ 2308)).then(m => m.RoleModule),
            },
            {
                path: 'tenant',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_pagination_pagination_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_module_tenant_tenant_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tenant/tenant.module */ 2118)).then(m => m.TenantModule),
            },
            {
                path: 'business-unit',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_pagination_pagination_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_module_business-unit_business-unit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./business-unit/business-unit.module */ 8182)).then(m => m.BusinessUnitModule),
            },
            {
                path: 'cards',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_pagination_pagination_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_module_cards_cards_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cards/cards.module */ 2352)).then(m => m.CardsModule),
            },
            {
                path: 'my-cards',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-ngx-vcard_fesm2015_ngx-vcard_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_module_mycards_mycards_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mycards/mycards.module */ 5617)).then(m => m.MycardsModule),
            },
            {
                path: 'address',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_pagination_pagination_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_module_address_address_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./address/address.module */ 7025)).then(m => m.AddressModule),
            }
            // {
            //   path: 'employees',
            //   loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
            // },
            // {
            //   path: 'connects',
            //   loadChildren: () => import('./connects/connects.module').then(m => m.ConnectsModule),
            // },
        ]
    }
];
class MasterRoutingModule {
}
MasterRoutingModule.ɵfac = function MasterRoutingModule_Factory(t) { return new (t || MasterRoutingModule)(); };
MasterRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MasterRoutingModule });
MasterRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9932:
/*!*****************************************!*\
  !*** ./src/app/module/master.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterModule": () => (/* binding */ MasterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _master_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master-routing.module */ 8130);
/* harmony import */ var src_app_core_aside_nav_aside_nav_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/aside-nav/aside-nav.module */ 7572);
/* harmony import */ var src_app_core_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/notifications/notifications.module */ 6956);
/* harmony import */ var src_app_core_profile_drop_profile_drop_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/profile-drop/profile-drop.module */ 111);
/* harmony import */ var src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/search/search.module */ 4778);
/* harmony import */ var _core_layout_sidebar_master_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/layout/sidebar/master-layout.component */ 2927);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/material.module */ 4872);
/* harmony import */ var _shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/i18n/i18n.module */ 2820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











class MasterModule {
}
MasterModule.ɵfac = function MasterModule_Factory(t) { return new (t || MasterModule)(); };
MasterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: MasterModule });
MasterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _master_routing_module__WEBPACK_IMPORTED_MODULE_0__.MasterRoutingModule,
            src_app_core_aside_nav_aside_nav_module__WEBPACK_IMPORTED_MODULE_1__.AsideNavModule,
            src_app_core_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_2__.NotificationsModule,
            src_app_core_profile_drop_profile_drop_module__WEBPACK_IMPORTED_MODULE_3__.ProfileDropModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_4__.SearchModule,
            _shared_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialExModule,
            _shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_7__.I18nModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MasterModule, { declarations: [_core_layout_sidebar_master_layout_component__WEBPACK_IMPORTED_MODULE_5__.MasterLayoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _master_routing_module__WEBPACK_IMPORTED_MODULE_0__.MasterRoutingModule,
        src_app_core_aside_nav_aside_nav_module__WEBPACK_IMPORTED_MODULE_1__.AsideNavModule,
        src_app_core_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_2__.NotificationsModule,
        src_app_core_profile_drop_profile_drop_module__WEBPACK_IMPORTED_MODULE_3__.ProfileDropModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_4__.SearchModule,
        _shared_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialExModule,
        _shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_7__.I18nModule] }); })();


/***/ }),

/***/ 3056:
/*!******************************************!*\
  !*** ./src/app/module/side-nav-links.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavLink": () => (/* binding */ NavLink)
/* harmony export */ });
class NavLink {
}
NavLink.asideNav = [
    {
        asidText: 'Dashboard',
        asidUrl: '/dashboard'
    },
    {
        asidText: 'Admin',
        asidUrl: '/admin'
    }
];


/***/ }),

/***/ 9206:
/*!**************************************!*\
  !*** ./src/app/shared/permission.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "permission": () => (/* binding */ permission)
/* harmony export */ });
const permission = {
    addUser: 'Add_Users',
    userList: 'View_Users',
    updateUser: 'Edit_Users',
    deleteUser: 'Delete_Users',
    bulkAddUser: 'Bulk_Add_Users',
    addRole: 'Add_Roles',
    editRole: 'Edit_Roles',
    deleteRole: 'Delete_Roles',
    roleList: 'View_Roles',
    tenantList: 'View_Tenants',
    addTenant: 'Add_Tenants',
    deleteTenant: 'Delete_Tenants',
    updateTenant: 'Edit_Tenants',
    addBusiness: 'Add_BU',
    businessList: 'View_BU',
    updateBusiness: 'Edit_BU',
    deleteBusiness: 'Delete_BU',
    addCard: 'Add_Cards',
    cardList: 'View_Cards',
    updateCard: 'Edit_Cards',
    deleteCard: 'Delete_Cards',
    addAddress: 'Add_Address',
    addressList: 'View_Address',
    updateAddress: 'Edit_Address',
    deleteAddress: 'Delete_Address',
    dashboard: 'View_Menu_Dashboard',
    role: 'View_Menu_Admin_Roles',
    user: 'View_Menu_Admin_Users',
    tenant: 'View_Menu_Tenants',
    cards: 'View_Menu_Cards',
    myCards: 'View_Menu_MyCards',
    businessUnit: 'View_Menu_BU',
    myProfile: 'My_Profile',
    changePassword: 'Change_Password',
    address: 'View_Menu_Address',
};


/***/ })

}]);
//# sourceMappingURL=src_app_module_master_module_ts.js.map