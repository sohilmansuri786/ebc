"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["src_app_auth_verify-opt_verify-opt_module_ts"],{

/***/ 6537:
/*!*********************************************************!*\
  !*** ./src/app/auth/verify-opt/verify-opt.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyOptComponent": () => (/* binding */ VerifyOptComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _shared_directive_router_back_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directive/router-back.directive */ 4239);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/form-validation/directive/form-submit.directive */ 9855);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-otp-input */ 8487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 7514);











const _c0 = function () { return { length: 5 }; };
class VerifyOptComponent {
    constructor(router, fBuilder, dataService, toastrService) {
        this.router = router;
        this.fBuilder = fBuilder;
        this.dataService = dataService;
        this.toastrService = toastrService;
        this.forgatAuth = null;
        this.otpForm = this.fBuilder.group({
            otp: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)])],
        });
        this.dataService.forgatAuth.subscribe((response) => {
            if (response) {
                this.forgatAuth = response;
            }
            else {
                this.router.navigateByUrl('/forgot-password');
            }
        });
    }
    ngOnInit() { }
    onOtpChange(data) {
        this.otpForm.patchValue({ otp: data });
    }
    submitForm() {
        if (this.otpForm.valid) {
            if (Number(this.forgatAuth.data) == Number(this.otpForm.value['otp'])) {
                this.router.navigateByUrl('/reset-password');
            }
            else {
                this.toastrService.error('Invalid OTP');
            }
        }
    }
}
VerifyOptComponent.ɵfac = function VerifyOptComponent_Factory(t) { return new (t || VerifyOptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
VerifyOptComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VerifyOptComponent, selectors: [["app-verify-opt"]], decls: 37, vars: 18, consts: [[1, "wrapper"], [1, "main_container"], [1, "container"], [1, "row", "main_row"], [1, "col-lg-6", "col-md-12"], [1, "form_container"], [1, "header"], [1, "logo"], ["src", "assets/images/logo.svg", 1, "img-fluid"], [1, "btn_back"], ["routerBack", ""], [1, "heading"], [1, "title"], [1, "subtitle"], [3, "formGroup", "ngSubmit"], [1, "text_field"], ["for", ""], [1, "form-group", "paddingLabel", "required"], [3, "config", "onInputChange"], [1, "button_submit"], ["type", "submit", 1, "loginbutton"], [1, "right_bg"], ["src", "../../../assets/images/login/authmodule_login_charimage.svg", 1, "img-fluid", "img1"]], template: function VerifyOptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function VerifyOptComponent_Template_form_ngSubmit_22_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "ng-otp-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onInputChange", function VerifyOptComponent_Template_ng_otp_input_onInputChange_28_listener($event) { return ctx.onOtpChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 7, "BUTTON.BACK"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 9, "VERIFYOTP.VERIFICATION"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 11, "VERIFYOTP.MESSAGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.otpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 13, "VERIFYOTP.OTP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 15, "VERIFYOTP.VERIFY_OTP"), " ");
    } }, directives: [_shared_directive_router_back_directive__WEBPACK_IMPORTED_MODULE_1__.RouterBackDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_2__.FormSubmitDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, ng_otp_input__WEBPACK_IMPORTED_MODULE_8__.NgOtpInputComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.main_container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.main_container[_ngcontent-%COMP%]   .main_row[_ngcontent-%COMP%] {\n  height: 100vh;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .main_container[_ngcontent-%COMP%]   .main_row[_ngcontent-%COMP%] {\n    height: 100%;\n    flex-direction: column-reverse;\n    flex-wrap: unset;\n  }\n}\n\n@media (max-width: 575px) {\n  .main_container[_ngcontent-%COMP%]   .main_row[_ngcontent-%COMP%] {\n    height: 100vh;\n    flex-direction: column-reverse;\n    flex-wrap: unset;\n    justify-content: flex-end;\n    position: relative;\n  }\n}\n\n.form_container[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .form_container[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 50px auto 50px auto;\n  }\n}\n\n@media (max-width: 575px) {\n  .form_container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n.form_container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  text-align: left;\n}\n\n.form_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 59px;\n}\n\n@media (max-width: 575px) {\n  .form_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n\n.form_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text_field[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.form_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text_field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 27px;\n  margin-bottom: 16px;\n}\n\n.btn_back[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 35px;\n}\n\n.btn_back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-size: 14px;\n  line-height: 21px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n}\n\n.btn_back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  color: var(--color-secondary);\n}\n\n.heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 45px;\n  color: var(--color-secondary);\n  margin-bottom: 0;\n}\n\n.heading[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin-top: 13px;\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--color-gray);\n  margin-bottom: 0;\n}\n\n.button_submit[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n@media (max-width: 575px) {\n  .button_submit[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    position: absolute;\n    width: calc(100% - 24px);\n    bottom: 40px;\n  }\n}\n\n.button_submit[_ngcontent-%COMP%]   .loginbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px 0;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--white);\n  background-color: var(--color-primary);\n  border: none;\n  border-radius: 5px;\n}\n\n.right_bg[_ngcontent-%COMP%] {\n  background-image: url('authmodule_bg_frame.svg');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  width: 475px;\n  padding: 40px;\n}\n\n@media (max-width: 768px) {\n  .right_bg[_ngcontent-%COMP%] {\n    margin: 50px auto 0 auto;\n  }\n}\n\n@media (max-width: 576px) {\n  .right_bg[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n.right_bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 19px;\n}\n\n@media (max-width: 768px) {\n  .right_bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 576px) {\n  .right_bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.text_field[_ngcontent-%COMP%]     .otp-input {\n  font-size: 18px;\n  color: var(--color-primary);\n}\n\n.remember_me[_ngcontent-%COMP%] {\n  padding-top: 0;\n  width: 350px;\n  left: 10%;\n  padding-bottom: 5%;\n}\n\n.rememberLabel[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.remember_me[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  top: 10%;\n  bottom: 10%;\n}\n\n.remember_me[_ngcontent-%COMP%]   .form-check-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 0;\n}\n\n.remember_me[_ngcontent-%COMP%]   .form-check-inline[_ngcontent-%COMP%]   .checkbox-set[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1vcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFFRjs7QUFERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUZJO0VBSEY7SUFJSSxZQUFBO0lBQ0EsOEJBQUE7SUFDQSxnQkFBQTtFQUtKO0FBQ0Y7O0FBSkk7RUFSRjtJQVNJLGFBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtFQU9KO0FBQ0Y7O0FBSkE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU9GOztBQU5FO0VBSkY7SUFLSSxnQkFBQTtJQUNBLDJCQUFBO0VBU0Y7QUFDRjs7QUFSRTtFQVJGO0lBU0ksZUFBQTtFQVdGO0FBQ0Y7O0FBVkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBWUo7O0FBVkU7RUFDRSxnQkFBQTtBQVlKOztBQVhJO0VBRkY7SUFHSSxnQkFBQTtFQWNKO0FBQ0Y7O0FBYkk7RUFDRSxnQkFBQTtBQWVOOztBQWRNO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBZ0JSOztBQVhBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQWNGOztBQWJFO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWVKOztBQWRJO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQWdCTjs7QUFYRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFjSjs7QUFaRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQWNKOztBQVhBO0VBQ0UsZ0JBQUE7QUFjRjs7QUFiRTtFQUZGO0lBR0ksZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLHdCQUFBO0lBQ0EsWUFBQTtFQWdCRjtBQUNGOztBQWZFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFpQko7O0FBYkE7RUFDRSxnREFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQWdCRjs7QUFmRTtFQU5GO0lBT0ksd0JBQUE7RUFrQkY7QUFDRjs7QUFqQkU7RUFURjtJQVVJLGVBQUE7RUFvQkY7QUFDRjs7QUFuQkU7RUFDRSxtQkFBQTtBQXFCSjs7QUFwQkk7RUFGRjtJQUdJLFdBQUE7RUF1Qko7QUFDRjs7QUF0Qkk7RUFMRjtJQU1JLFdBQUE7RUF5Qko7QUFDRjs7QUFyQkU7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUF3Qko7O0FBbkJBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFzQkY7O0FBbkJBO0VBQ0UsZUFBQTtBQXNCRjs7QUFwQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBdUJGOztBQXJCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQXdCRjs7QUF0QkE7RUFDRSxnQkFBQTtBQXlCRiIsImZpbGUiOiJ2ZXJpZnktb3B0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubWFpbl9jb250YWluZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLm1haW5fcm93IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgZmxleC13cmFwOiB1bnNldDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgIGZsZXgtd3JhcDogdW5zZXQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmZvcm1fY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gNTBweCBhdXRvO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmhlYWRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIGZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogNTlweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHRfZmllbGQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYnRuX2JhY2sge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5oZWFkaW5nIHtcclxuICAudGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4uYnV0dG9uX3N1Ym1pdCB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTtcclxuICAgIGJvdHRvbTogNDBweDtcclxuICB9XHJcbiAgLmxvZ2luYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTNweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6dmFyKC0td2hpdGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmlnaHRfYmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4vYXV0aG1vZHVsZV9iZ19mcmFtZS5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICB3aWR0aDogNDc1cHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0byAwIGF1dG87XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udGV4dF9maWVsZHtcclxuICA6Om5nLWRlZXAgLm90cC1pbnB1dHtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5yZW1lbWJlcl9tZXtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuLnJlbWVtYmVyTGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ucmVtZW1iZXJfbWUgLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdG9wOiAxMCU7XHJcbiAgYm90dG9tOiAxMCU7XHJcbn1cclxuLnJlbWVtYmVyX21lIC5mb3JtLWNoZWNrLWlubGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLnJlbWVtYmVyX21lIC5mb3JtLWNoZWNrLWlubGluZSAuY2hlY2tib3gtc2V0IHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 1879:
/*!******************************************************!*\
  !*** ./src/app/auth/verify-opt/verify-opt.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyOptModule": () => (/* binding */ VerifyOptModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _verify_opt_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-opt.component */ 6537);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ 3153);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-otp-input */ 8487);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/i18n/i18n.module */ 2820);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);












const routes = [
    {
        path: '',
        component: _verify_opt_component__WEBPACK_IMPORTED_MODULE_0__.VerifyOptComponent,
        data: { title: 'verify-opt' }
    }
];
class VerifyOptModule {
}
VerifyOptModule.ɵfac = function VerifyOptModule_Factory(t) { return new (t || VerifyOptModule)(); };
VerifyOptModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: VerifyOptModule });
VerifyOptModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_2__.FormValidationModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_9__.NgOtpInputModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialExModule,
            src_app_shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__.I18nModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](VerifyOptModule, { declarations: [_verify_opt_component__WEBPACK_IMPORTED_MODULE_0__.VerifyOptComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_2__.FormValidationModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_9__.NgOtpInputModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialExModule,
        src_app_shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__.I18nModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 8487:
/*!*************************************************************************!*\
  !*** ./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgOtpInputComponent": () => (/* binding */ NgOtpInputComponent),
/* harmony export */   "NgOtpInputModule": () => (/* binding */ NgOtpInputModule),
/* harmony export */   "ɵa": () => (/* binding */ KeysPipe),
/* harmony export */   "ɵb": () => (/* binding */ NumberOnlyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);








function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onKeyDown($event); })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onKeyUp($event, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("disabledNumberOnly", !ctx_r1.config.allowNumbersOnly)("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
} }
function NgOtpInputComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 1, 11, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrapper ", ctx_r0.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
} }
class KeysPipe {
    transform(value) {
        return Object.keys(value);
    }
}
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keys", type: KeysPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'keys'
            }]
    }], null, null); })();

class Config {
}

class NgOtpInputComponent {
    constructor(keysPipe) {
        this.keysPipe = keysPipe;
        this.config = { length: 4 };
        // tslint:disable-next-line: no-output-on-prefix
        this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.inputControls = new Array(this.config.length);
        this.componentKey = Math.random()
            .toString(36)
            .substring(2) + new Date().getTime().toString(36);
    }
    ngOnInit() {
        this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
        for (let index = 0; index < this.config.length; index++) {
            this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl());
        }
        this.otpForm.valueChanges.subscribe((v) => {
            this.keysPipe.transform(this.otpForm.controls).forEach((k) => {
                var val = this.otpForm.controls[k].value;
                if (val && val.length > 1) {
                    if (val.length >= this.config.length) {
                        this.setValue(val);
                    }
                    else {
                        this.rebuildValue();
                    }
                }
            });
        });
        this.inputType = this.getInputType();
    }
    ngAfterViewInit() {
        if (!this.config.disableAutoFocus) {
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            if (containerItem) {
                containerItem.addEventListener('paste', (evt) => this.handlePaste(evt));
                const ele = containerItem.getElementsByClassName('otp-input')[0];
                if (ele && ele.focus) {
                    ele.focus();
                }
            }
        }
    }
    getControlName(idx) {
        return `ctrl_${idx}`;
    }
    ifLeftArrow(event) {
        return this.ifKeyCode(event, 37);
    }
    ifRightArrow(event) {
        return this.ifKeyCode(event, 39);
    }
    ifBackspaceOrDelete(event) {
        return (event.key === 'Backspace' ||
            event.key === 'Delete' ||
            this.ifKeyCode(event, 8) ||
            this.ifKeyCode(event, 46));
    }
    ifKeyCode(event, targetCode) {
        const key = event.keyCode || event.charCode;
        // tslint:disable-next-line: triple-equals
        return key == targetCode ? true : false;
    }
    onKeyDown($event) {
        var isSpace = this.ifKeyCode($event, 32);
        if (isSpace) { // prevent space
            return false;
        }
    }
    onKeyUp($event, inputIdx) {
        const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
        const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
        if (this.ifRightArrow($event)) {
            this.setSelected(nextInputId);
            return;
        }
        if (this.ifLeftArrow($event)) {
            this.setSelected(prevInputId);
            return;
        }
        const isBackspace = this.ifBackspaceOrDelete($event);
        if (isBackspace && !$event.target.value) {
            this.setSelected(prevInputId);
            this.rebuildValue();
            return;
        }
        if (!$event.target.value) {
            return;
        }
        if (this.ifValidEntry($event)) {
            this.setSelected(nextInputId);
        }
        this.rebuildValue();
    }
    appendKey(id) {
        return `${id}_${this.componentKey}`;
    }
    setSelected(eleId) {
        this.focusTo(eleId);
        const ele = document.getElementById(eleId);
        if (ele && ele.setSelectionRange) {
            setTimeout(() => {
                ele.setSelectionRange(0, 1);
            }, 0);
        }
    }
    ifValidEntry(event) {
        const inp = String.fromCharCode(event.keyCode);
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        return (isMobile ||
            /[a-zA-Z0-9-_]/.test(inp) ||
            (this.config.allowKeyCodes &&
                this.config.allowKeyCodes.includes(event.keyCode)) ||
            (event.keyCode >= 96 && event.keyCode <= 105));
    }
    focusTo(eleId) {
        const ele = document.getElementById(eleId);
        if (ele) {
            ele.focus();
        }
    }
    // method to set component value
    setValue(value) {
        if (this.config.allowNumbersOnly && isNaN(value)) {
            return;
        }
        this.otpForm.reset();
        if (!value) {
            this.rebuildValue();
            return;
        }
        value = value.toString().replace(/\s/g, ''); // remove whitespace
        Array.from(value).forEach((c, idx) => {
            if (this.otpForm.get(this.getControlName(idx))) {
                this.otpForm.get(this.getControlName(idx)).setValue(c);
            }
        });
        if (!this.config.disableAutoFocus) {
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            var indexOfElementToFocus = value.length < this.config.length ? value.length : (this.config.length - 1);
            let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
            if (ele && ele.focus) {
                ele.focus();
            }
        }
        this.rebuildValue();
    }
    rebuildValue() {
        let val = '';
        this.keysPipe.transform(this.otpForm.controls).forEach(k => {
            if (this.otpForm.controls[k].value) {
                let ctrlVal = this.otpForm.controls[k].value;
                let isLengthExceed = ctrlVal.length > 1;
                let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == 'upper' || this.config.letterCase.toLocaleLowerCase() == 'lower');
                ctrlVal = ctrlVal[0];
                let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == 'upper' ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;
                if (isCaseTransformEnabled && transformedVal == ctrlVal) {
                    isCaseTransformEnabled = false;
                }
                else {
                    ctrlVal = transformedVal;
                }
                val += ctrlVal;
                if (isLengthExceed || isCaseTransformEnabled) {
                    this.otpForm.controls[k].setValue(ctrlVal);
                }
            }
        });
        this.onInputChange.emit(val);
    }
    getInputType() {
        return this.config.isPasswordInput
            ? 'password'
            : this.config.allowNumbersOnly
                ? 'tel'
                : 'text';
    }
    handlePaste(e) {
        // Get pasted data via clipboard API
        let clipboardData = e.clipboardData || window['clipboardData'];
        if (clipboardData) {
            var pastedData = clipboardData.getData('Text');
        }
        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();
        if (!pastedData) {
            return;
        }
        this.setValue(pastedData);
    }
}
NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) { return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe)); };
NgOtpInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgOtpInputComponent, selectors: [["ng-otp-input"]], inputs: { config: "config" }, outputs: { onInputChange: "onInputChange" }, decls: 1, vars: 1, consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["numberOnly", "", "autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "class", "formControl", "id", "keydown", "keyup", 4, "ngFor", "ngForOf"], ["numberOnly", "", "autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "formControl", "id", "keydown", "keyup"]], template: function NgOtpInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, NumberOnlyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective]; }, pipes: function () { return [KeysPipe]; }, styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"] });
/**
 * @type {function(): !Array<(null|{
 *   type: ?,
 *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
 * })>}
 * @nocollapse
 */
NgOtpInputComponent.ctorParameters = () => [
    { type: KeysPipe }
];
/** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
NgOtpInputComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ng-otp-input',
                template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" \r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"one-time-code\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
                styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input{width:30px;font-size:18px;height:30px}}\n"]
            }]
    }], function () { return [{ type: KeysPipe }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

class NumberOnlyDirective {
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    ngOnInit() {
        if (!this.disabledNumberOnly) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
        }
    }
}
NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) { return new (t || NumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
NumberOnlyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumberOnlyDirective, selectors: [["", "numberOnly", ""]], inputs: { disabledNumberOnly: "disabledNumberOnly" } });
/**
 * @type {function(): !Array<(null|{
 *   type: ?,
 *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
 * })>}
 * @nocollapse
 */
NumberOnlyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
/** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
NumberOnlyDirective.propDecorators = {
    disabledNumberOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[numberOnly]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, { disabledNumberOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class NgOtpInputModule {
}
NgOtpInputModule.ɵfac = function NgOtpInputModule_Factory(t) { return new (t || NgOtpInputModule)(); };
NgOtpInputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgOtpInputModule });
NgOtpInputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [KeysPipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule
                ],
                declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
                exports: [NgOtpInputComponent],
                providers: [KeysPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgOtpInputModule, { declarations: function () { return [NgOtpInputComponent, KeysPipe, NumberOnlyDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]; }, exports: function () { return [NgOtpInputComponent]; } }); })();

/*
 * Public API Surface of ng-otp-input
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=src_app_auth_verify-opt_verify-opt_module_ts.js.map