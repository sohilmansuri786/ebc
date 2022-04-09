"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["src_app_auth_forgot-password_forgot-password_module_ts"],{

/***/ 3866:
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_shared_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/common */ 3118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _shared_directive_router_back_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directive/router-back.directive */ 4239);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/form-validation/directive/form-submit.directive */ 9855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/form-validation/directive/control-errors.directive */ 6242);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
















function ForgotPasswordComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "LOGIN.TALENTCODE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r0.forgotForm.controls["tenantCode"]);
} }
class ForgotPasswordComponent {
    constructor(router, authService, fBuilder, dataService, toastr, activatedRoute) {
        this.router = router;
        this.authService = authService;
        this.fBuilder = fBuilder;
        this.dataService = dataService;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.formErrors = {
            error: null,
            success: null
        };
        this.showLoader = false;
        this.currentCompany = null;
        this.loginType = 'email';
        this.isAdmin = false;
        this.forgotForm = this.fBuilder.group({
            emailId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, src_app_shared_common__WEBPACK_IMPORTED_MODULE_0__.validateEmailFormControl])],
            tenantCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])],
        });
        if (this.activatedRoute.snapshot.queryParams && this.activatedRoute.snapshot.queryParams['isAdmin']) {
            this.isAdmin = this.activatedRoute.snapshot.queryParams['isAdmin'];
            this.forgotForm.patchValue({ tenantCode: 'EBC' });
        }
        else {
            this.isAdmin = false;
        }
    }
    ngOnInit() { }
    submitForm() {
        if (this.forgotForm.valid) {
            this.showLoader = true;
            this.authService.forgotPassword(this.forgotForm.value).subscribe((response) => {
                this.showLoader = false;
                // if (response) {
                this.dataService.forgatAuthSubject.next(Object.assign(Object.assign({}, response), this.forgotForm.value));
                this.formErrors.success = `* ${response.message}`;
                this.router.navigateByUrl('/verification');
                setTimeout(() => { src_app_shared_common__WEBPACK_IMPORTED_MODULE_0__.CommonFunction.resetForm(this.forgotForm); }, 3000);
                // } else {
                // this.formErrors.error = `* ${response.error}`;
                // }
            }, (error) => {
                this.toastr.error(error.error.message);
                this.formErrors.error = `* ${error.error.message}`;
                this.showLoader = false;
            });
        }
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 40, vars: 22, consts: [[1, "wrapper"], [1, "main_container"], [1, "container"], [1, "row", "main_row"], [1, "col-lg-6", "col-md-12"], [1, "form_container"], [1, "header"], [1, "logo"], ["src", "assets/images/logo.svg", 1, "img-fluid"], [1, "btn_back"], ["routerBack", ""], [1, "heading"], [1, "title"], [1, "subtitle"], [3, "formGroup", "ngSubmit"], [1, "form-group", "paddingLabel", "required"], ["class", "text_field", 4, "ngIf"], [1, "text_field"], ["for", "email_id"], ["appearance", "outline", 1, "w-100", "h-60"], ["matInput", "", 3, "formControl", "placeholder"], [1, "button_submit"], ["type", "submit", 1, "loginbutton", 3, "disabled"], [1, "right_bg"], ["src", "assets/images/login/authmodule_login_charimage.svg", 1, "img-fluid", "img1"], ["for", "password"], ["type", "text", "matInput", "", 3, "formControl"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_22_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ForgotPasswordComponent_div_24_Template, 6, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 10, "BUTTON.BACK"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 12, "FORGOT_PASSWORD.FORGOTPASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 14, "FORGOT_PASSWORD.EMAILTAG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.forgotForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 16, "FORGOT_PASSWORD.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](31, 18, "FORGOT_PASSWORD.EMAILPLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.forgotForm.controls["emailId"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 20, "FORGOT_PASSWORD.OTP"), " ");
    } }, directives: [_shared_directive_router_back_directive__WEBPACK_IMPORTED_MODULE_3__.RouterBackDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_4__.FormSubmitDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_5__.ControlErrorsDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: [".wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.main_container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.main_container[_ngcontent-%COMP%]   .main_row[_ngcontent-%COMP%] {\n  height: 100vh;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .main_container[_ngcontent-%COMP%]   .main_row[_ngcontent-%COMP%] {\n    height: 100%;\n    flex-direction: column-reverse;\n    flex-wrap: unset;\n  }\n}\n\n@media (max-width: 575px) {\n  .main_container[_ngcontent-%COMP%]   .main_row[_ngcontent-%COMP%] {\n    height: 100vh;\n    flex-direction: column-reverse;\n    flex-wrap: unset;\n    justify-content: flex-end;\n    position: relative;\n  }\n}\n\n.form_container[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .form_container[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 50px auto 50px auto;\n  }\n}\n\n@media (max-width: 575px) {\n  .form_container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n.form_container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: left;\n}\n\n.form_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 59px;\n}\n\n@media (max-width: 575px) {\n  .form_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n\n.form_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text_field[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.form_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text_field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 27px;\n}\n\n.btn_back[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 35px;\n}\n\n.btn_back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-size: 14px;\n  line-height: 21px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n}\n\n.btn_back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  color: var(--color-secondary);\n}\n\n.heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 45px;\n  color: var(--color-secondary);\n  margin-bottom: 0;\n}\n\n.heading[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin-top: 13px;\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--color-gray);\n  margin-bottom: 0;\n}\n\n.button_submit[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n@media (max-width: 575px) {\n  .button_submit[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    position: absolute;\n    width: calc(100% - 24px);\n    bottom: 40px;\n  }\n}\n\n.button_submit[_ngcontent-%COMP%]   .loginbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px 0;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--white);\n  background-color: var(--color-primary);\n  border: none;\n  border-radius: 5px;\n}\n\n.right_bg[_ngcontent-%COMP%] {\n  background-image: url('authmodule_bg_frame.svg');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  width: 475px;\n  padding: 40px;\n}\n\n@media (max-width: 768px) {\n  .right_bg[_ngcontent-%COMP%] {\n    margin: 50px auto 0 auto;\n  }\n}\n\n@media (max-width: 576px) {\n  .right_bg[_ngcontent-%COMP%] {\n    max-width: 100%;\n    display: none;\n  }\n}\n\n.right_bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 19px;\n}\n\n@media (max-width: 768px) {\n  .right_bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 576px) {\n  .right_bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.rememberLabel[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.remember_me[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  top: 10%;\n  bottom: 10%;\n}\n\n.remember_me[_ngcontent-%COMP%]   .form-check-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 0;\n}\n\n.remember_me[_ngcontent-%COMP%]   .form-check-inline[_ngcontent-%COMP%]   .checkbox-set[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQUVGOztBQURFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBRkk7RUFIRjtJQUlJLFlBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0VBS0o7QUFDRjs7QUFKSTtFQVJGO0lBU0ksYUFBQTtJQUNBLDhCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0VBT0o7QUFDRjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBT0Y7O0FBTkU7RUFKRjtJQUtJLGdCQUFBO0lBQ0EsMkJBQUE7RUFTRjtBQUNGOztBQVJFO0VBUkY7SUFTSSxlQUFBO0VBV0Y7QUFDRjs7QUFWRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFWRTtFQUNFLGdCQUFBO0FBWUo7O0FBWEk7RUFGRjtJQUdJLGdCQUFBO0VBY0o7QUFDRjs7QUFiSTtFQUNFLGdCQUFBO0FBZU47O0FBZE07RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBZ0JSOztBQVhBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQWNGOztBQWJFO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWVKOztBQWRJO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQWdCTjs7QUFYRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFjSjs7QUFaRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQWNKOztBQVhBO0VBQ0UsZ0JBQUE7QUFjRjs7QUFiRTtFQUZGO0lBR0ksZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLHdCQUFBO0lBQ0EsWUFBQTtFQWdCRjtBQUNGOztBQWZFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFpQko7O0FBYkE7RUFDRSxnREFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQWdCRjs7QUFmRTtFQU5GO0lBT0ksd0JBQUE7RUFrQkY7QUFDRjs7QUFqQkU7RUFURjtJQVVJLGVBQUE7SUFDQSxhQUFBO0VBb0JGO0FBQ0Y7O0FBbkJFO0VBQ0UsbUJBQUE7QUFxQko7O0FBcEJJO0VBRkY7SUFHSSxXQUFBO0VBdUJKO0FBQ0Y7O0FBdEJJO0VBTEY7SUFNSSxXQUFBO0VBeUJKO0FBQ0Y7O0FBdEJBO0VBQ0UsZUFBQTtBQXlCRjs7QUF2QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBMEJGOztBQXhCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQTJCRjs7QUF6QkE7RUFDRSxnQkFBQTtBQTRCRiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tYWluX2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAubWFpbl9yb3cge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICBmbGV4LXdyYXA6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgZmxleC13cmFwOiB1bnNldDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZm9ybV9jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0byA1MHB4IGF1dG87XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuaGVhZGluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1OXB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dF9maWVsZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYnRuX2JhY2sge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5oZWFkaW5nIHtcclxuICAudGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4uYnV0dG9uX3N1Ym1pdCB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTtcclxuICAgIGJvdHRvbTogNDBweDtcclxuICB9XHJcbiAgLmxvZ2luYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTNweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6dmFyKC0td2hpdGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmlnaHRfYmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4vYXV0aG1vZHVsZV9iZ19mcmFtZS5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICB3aWR0aDogNDc1cHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0byAwIGF1dG87XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTlweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDo1NzZweCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnJlbWVtYmVyTGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ucmVtZW1iZXJfbWUgLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdG9wOiAxMCU7XHJcbiAgYm90dG9tOiAxMCU7XHJcbn1cclxuLnJlbWVtYmVyX21lIC5mb3JtLWNoZWNrLWlubGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLnJlbWVtYmVyX21lIC5mb3JtLWNoZWNrLWlubGluZSAuY2hlY2tib3gtc2V0IHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 6377:
/*!****************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordModule": () => (/* binding */ ForgotPasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.component */ 3866);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ 3153);
/* harmony import */ var src_app_shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/i18n/i18n.module */ 2820);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    {
        path: '',
        component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordComponent,
        data: { title: 'forgot_password' }
    }
];
class ForgotPasswordModule {
}
ForgotPasswordModule.ɵfac = function ForgotPasswordModule_Factory(t) { return new (t || ForgotPasswordModule)(); };
ForgotPasswordModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ForgotPasswordModule });
ForgotPasswordModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_2__.FormValidationModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            src_app_shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__.I18nModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ForgotPasswordModule, { declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_2__.FormValidationModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        src_app_shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__.I18nModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_auth_forgot-password_forgot-password_module_ts.js.map