"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["src_app_module_profile_profile_module_ts"],{

/***/ 1166:
/*!*****************************************************************************!*\
  !*** ./src/app/module/profile/change-password/change-password.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_shared_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/common */ 3118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/form-validation/directive/form-submit.directive */ 9855);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/form-validation/directive/control-errors.directive */ 6242);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);













const _c0 = function () { return ["../"]; };
// import { ToastrService } from 'ngx-toastr';
class ChangePasswordComponent {
    constructor(router, userService, fb, toastr) {
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.toastr = toastr;
        this.PageTitle = "Change Password";
        this.hide = true;
        this.hide1 = true;
        this.hide2 = true;
        this.loadingState = true;
        this.formErrors = {
            old_password: '',
            new_password: '',
            confirm_password: '',
            apierror: '',
        };
        this.submitAttempt = false;
        this.showLoader = false;
        this.addForm = fb.group({
            old_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
            new_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
            confirm_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])]
        }, {
            validator: src_app_shared_common__WEBPACK_IMPORTED_MODULE_0__.PasswordValidation.passwordValidation()
        });
    }
    ngOnInit() { }
    submitForm() {
        this.submitAttempt = true;
        if (this.addForm.valid) {
            this.showLoader = true;
            const formData = {
                oldPassword: this.addForm.value.old_password,
                newPassword: this.addForm.value.new_password,
            };
            this.userService.updatePassword(formData).subscribe((response) => {
                this.showLoader = false;
                this.submitAttempt = false;
                if (response && response.status == "Ok") {
                    this.toastr.success(response.message);
                    this.formErrors.old_password = null;
                    this.router.navigateByUrl('/profile');
                }
                else {
                    this.toastr.error(response.message);
                    // response.error.map(obj => {
                    //   if (obj.hasOwnProperty('old_password')) {
                    //     this.formErrors.old_password = obj.old_password;
                    //   }
                    //   if (obj.hasOwnProperty('confirm_password')) {
                    //     this.formErrors.confirm_password = obj.confirm_password;
                    //   }
                    //   if (!obj.hasOwnProperty('old_password') && !obj.hasOwnProperty('confirm_password')) {
                    //     this.formErrors.apierror = `* ${response.error}`;
                    //   }
                    // });
                }
            }, (error) => {
                this.showLoader = false;
                this.submitAttempt = false;
                this.formErrors.apierror = `* Server Error`;
            });
        }
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService)); };
ChangePasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 41, vars: 12, consts: [[1, "side_container"], [1, "card"], [1, "card_details"], [1, "d-flex", "justify-content-between"], [1, "form-hadding"], [1, "form_container"], [3, "formGroup", "ngSubmit"], [1, "form-group", "paddingLabel", "required"], [1, "text_field"], ["for", "old password"], ["appearance", "outline", 1, "w-100", "h-60"], ["matInput", "", "placeholder", "Old Password", 3, "formControl", "type"], ["matSuffix", "", 1, "eye-icon1", 3, "click"], ["for", "new password"], ["matInput", "", "placeholder", "New Password", 3, "formControl", "type"], ["matSuffix", "", 1, "eye-icon2", 3, "click"], ["for", "Confirm password"], ["matInput", "", "placeholder", "Confirm Password", 3, "formControl", "type"], ["matSuffix", "", 1, "eye-icon3", 3, "click"], [1, "d-flex", "justify-content-center", "margin-y", "buttons"], ["type", "submit", "mat-raised-button", "", 1, "blue-btn"], ["mat-raised-button", "", 1, "blue-line-btn", 3, "routerLink"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_7_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Old Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_16_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " New Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_25_listener() { return ctx.hide1 = !ctx.hide1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Confirm Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_34_listener() { return ctx.hide2 = !ctx.hide2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.addForm.controls["old_password"])("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.addForm.controls["new_password"])("type", ctx.hide1 ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.hide1 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.addForm.controls["confirm_password"])("type", ctx.hide2 ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.hide2 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_2__.FormSubmitDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_3__.ControlErrorsDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink], styles: [".card[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n@media (max-width: 576px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 0;\n    box-shadow: none;\n  }\n}\n.card_details[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n@media (max-width: 576px) {\n  .card_details[_ngcontent-%COMP%] {\n    padding: 0;\n    box-shadow: none;\n  }\n}\n.card_details[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 600;\n  font-size: 22px;\n  padding: 20px 20px 20px 20px;\n  margin-bottom: 0;\n}\n@media (max-width: 576px) {\n  .card_details[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n    padding: 20px 20px 20px 10px;\n  }\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%] {\n  padding: 20px 20px 20px 20px;\n  max-width: 500px;\n}\n@media (max-width: 576px) {\n  .card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%] {\n    padding: 20px 20px 20px 10px;\n    max-width: 100%;\n  }\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 10px 10px 1px;\n  color: var(--color-secondary);\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 27px;\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n@media (max-width: 576px) {\n  .card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    padding: 20px 0px 20px 0px;\n  }\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n  text-decoration: none;\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  background-color: var(--white);\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-line-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 35px;\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-line-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n}\n.eye-icon1[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -2px;\n  top: -22px;\n  cursor: pointer;\n}\n.eye-icon2[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -2px;\n  top: -22px;\n  cursor: pointer;\n}\n.eye-icon3[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -2px;\n  top: -22px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFKRjtJQUtJLFVBQUE7SUFDQSxnQkFBQTtFQUdGO0FBQ0Y7QUFBQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUFHRjtBQUZFO0VBTEY7SUFNSSxVQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGO0FBSkU7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFNSjtBQUxJO0VBTkY7SUFPSSw0QkFBQTtFQVFKO0FBQ0Y7QUFMRTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUFPSjtBQU5JO0VBSEY7SUFJSSw0QkFBQTtJQUNBLGVBQUE7RUFTSjtBQUNGO0FBUkk7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVVOO0FBUEk7RUFDRSxhQUFBO0FBU047QUFSTTtFQUZGO0lBR0ksMEJBQUE7RUFXTjtBQUNGO0FBVk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFFQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQkFBQTtBQVdSO0FBVFE7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FBV1Y7QUFQTTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBU1I7QUFQUTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQVNWO0FBRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUtGO0FBRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUtGO0FBRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUtGIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ibHVlKTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KXtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmRfZGV0YWlscyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiKDI2IDg4IDI0NiAvIDE3JSk7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb3JtLWhhZGRpbmcge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybV9jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDEwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGxhYmVsIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxcHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIHtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5ibHVlLWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiYSgyNiwgODgsIDI0NiwgMC40OSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAvLyAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJsdWUtbGluZS1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5leWUtaWNvbjEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTJweDtcclxuICB0b3A6IC0yMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmV5ZS1pY29uMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMnB4O1xyXG4gIHRvcDogLTIycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZXllLWljb24zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0ycHg7XHJcbiAgdG9wOiAtMjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8027:
/*!***********************************************************************!*\
  !*** ./src/app/module/profile/edit-profile/edit-profile.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileComponent": () => (/* binding */ EditProfileComponent)
/* harmony export */ });
/* harmony import */ var D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-auto-unsubscribe */ 3970);
/* harmony import */ var src_app_shared_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/common */ 3118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var src_app_service_business_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/business-unit.service */ 669);
/* harmony import */ var src_app_service_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/role.service */ 7749);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/common.service */ 5842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/form-validation/directive/form-submit.directive */ 9855);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/form-validation/directive/control-errors.directive */ 6242);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 8133);























function EditProfileComponent_div_17_ng_container_6_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r8.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
  }
}

function EditProfileComponent_div_17_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, EditProfileComponent_div_17_ng_container_6_mat_option_3_Template, 2, 2, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx_r4.addForm.controls["businessUnitIds"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.buListArray);
  }
}

function EditProfileComponent_div_17_ng_template_7_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r10.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
  }
}

function EditProfileComponent_div_17_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, EditProfileComponent_div_17_ng_template_7_mat_option_2_Template, 2, 2, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx_r6.addForm.controls["businessUnitIds"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r6.buListArray);
  }
}

function EditProfileComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Business Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditProfileComponent_div_17_ng_container_6_Template, 4, 2, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, EditProfileComponent_div_17_ng_template_7_Template, 3, 2, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](8);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isMultipleBU)("ngIfElse", _r5);
  }
}

function EditProfileComponent_ng_container_85_ng_container_6_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditProfileComponent_ng_container_85_ng_container_6_ng_container_5_Template_mat_form_field_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);

      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);

      return _r19.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 32, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditProfileComponent_ng_container_85_ng_container_6_ng_container_5_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).index;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r22.fileChangeEvent($event, i_r12);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    const i_r12 = ctx_r24.index;
    const item_r11 = ctx_r24.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("placeholder", "Upload ", (tmp_0_0 = ctx_r16.attributeFieldsName[i_r12].replace("{", "")) == null ? null : tmp_0_0.replace("}", ""), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", item_r11["controls"][ctx_r16.attributeFieldsName[i_r12] + "_img"]);
  }
}

function EditProfileComponent_ng_container_85_ng_container_6_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    const i_r12 = ctx_r25.index;
    const item_r11 = ctx_r25.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("placeholder", "Upload ", (tmp_0_0 = ctx_r18.attributeFieldsName[i_r12].replace("{", "")) == null ? null : tmp_0_0.replace("}", ""), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", item_r11["controls"][ctx_r18.attributeFieldsName[i_r12] + "_img"]);
  }
}

function EditProfileComponent_ng_container_85_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, EditProfileComponent_ng_container_85_ng_container_6_ng_container_5_Template, 6, 2, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditProfileComponent_ng_container_85_ng_container_6_ng_template_6_Template, 3, 2, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);

    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((tmp_0_0 = ctx_r13.attributeFieldsName[i_r12].replace("{", "")) == null ? null : tmp_0_0.replace("}", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r13.attributeList[i_r12] == null ? null : ctx_r13.attributeList[i_r12].isEditable)("ngIfElse", _r17);
  }
}

function EditProfileComponent_ng_container_85_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const i_r12 = ctx_r27.index;
    const item_r11 = ctx_r27.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((tmp_0_0 = ctx_r15.attributeFieldsName[i_r12].replace("{", "")) == null ? null : tmp_0_0.replace("}", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonly", !(ctx_r15.attributeList[i_r12] == null ? null : ctx_r15.attributeList[i_r12].isEditable))("formControl", item_r11["controls"][ctx_r15.attributeFieldsName[i_r12]])("placeholder", (tmp_3_0 = ctx_r15.attributeFieldsName[i_r12].replace("{", "")) == null ? null : tmp_3_0.replace("}", ""));
  }
}

function EditProfileComponent_ng_container_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Dynamic BU fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditProfileComponent_ng_container_85_ng_container_6_Template, 8, 3, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, EditProfileComponent_ng_container_85_ng_template_7_Template, 6, 4, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;

    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](8);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", item_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.attributeList[i_r12] == null ? null : ctx_r2.attributeList[i_r12].attributeType == null ? null : ctx_r2.attributeList[i_r12].attributeType.toLowerCase()) == "image")("ngIfElse", _r14);
  }
}

function EditProfileComponent_ng_container_86_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r29.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r29.name, " ");
  }
}

function EditProfileComponent_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "My Business Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Business Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "mat-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, EditProfileComponent_ng_container_86_mat_option_11_Template, 2, 2, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx_r3.addForm.controls["myBuCode"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.buListArray);
  }
}

let EditProfileComponent = class EditProfileComponent {
  constructor(router, fb, userService, businessUnitService, roleService, toastService, dataService, commonService, location) {
    this.router = router;
    this.fb = fb;
    this.userService = userService;
    this.businessUnitService = businessUnitService;
    this.roleService = roleService;
    this.toastService = toastService;
    this.dataService = dataService;
    this.commonService = commonService;
    this.location = location;
    this.loadingState = false;
    this.showLoader = false;
    this.formErrors = {
      emailId: null,
      apierror: null
    };
    this.roleListArray = [];
    this.isEditing = false;
    this.editId = null;
    this.pageTitle = 'Update Profile';
    this.buListArray = [];
    this.attributeFieldsName = [];
    this.attributeDisplayFieldsName = [];
    this.attributeList = [];
    this.notDynamicAttributeArray = [];
    this.staticField = ['emailid', 'firstname', 'nativename', 'lastname', 'designation', 'primarycontact', 'profilepicture', 'secondarycontact'];
    this.dynamicToStaticFields = [];
    this.isProfileEditable = false;
    this.isMultipleBU = false;
    this.selectedIndex = 0;
    this.addForm = this.fb.group({
      emailId: [{
        value: null,
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.email])],
      firstName: [{
        value: "",
        disabled: true
      }],
      lastName: [{
        value: null,
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required])],
      nativeName: [{
        value: "",
        disabled: true
      }],
      roleId: [null],
      password: [""],
      designation: [{
        value: null,
        disabled: true
      }],
      primaryContact: [{
        value: null,
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(20)])],
      profilePicture: [{
        value: null,
        disabled: true
      }],
      // address: fb.group({
      //   building: [null, Validators.compose([Validators.required])],
      //   street: [null, Validators.compose([Validators.required])],
      //   locality: [null, Validators.compose([Validators.required])],
      //   postalcode: [null, Validators.compose([Validators.required])],
      //   city: [null, Validators.compose([Validators.required])],
      //   state: [null, Validators.compose([Validators.required])],
      //   country: [null, Validators.compose([Validators.required])]
      // }),
      businessUnitIds: [],
      secondaryContact: [{
        value: null,
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(20)])],
      attributes: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArray([]),
      myBuCode: ['']
    });
    this.dataService.currentUser.subscribe(data => {
      if (data) {
        this.currentUser = data;
        this.isEditing = true;
        this.editId = this.currentUser.id;
      }
    });
  }

  ngOnInit() {
    this.getMasterData();
  }

  getMasterData() {
    let param = {
      "searchFilter": null,
      "page": 1,
      "pageSize": 0,
      "fields": null
    };
    this.businessUnitService.getBusinessUnitList(param).subscribe(res => {
      if (res) {
        this.buListArray = res.data; // if (this.buListArray.length > 0) {

        this.getEditObject(); // }
      }
    });

    if (this.currentUser) {
      let filters = [];
      this.currentUser.roleList.map(type => {
        filters.push({
          "propertyName": "RoleType",
          "value": type,
          "caseSensitive": true
        });
      });
      this.roleService.getRoleList({
        "page": 1,
        "pageSize": 0,
        "fields": null,
        "searchFilter": {
          "conditionOperator": 1,
          "filters": filters
        }
      }).subscribe(res => {
        if (res) {
          this.roleListArray = res.data;
          this.setRoleById();
        }
      });
    }
  }

  setRoleById() {
    if (this.editObject && this.editObject.roleId) for (let index = 0; index < this.roleListArray.length; index++) {
      const element = this.roleListArray[index];

      if (element.id == this.editObject.roleId) {
        this.addForm.patchValue({
          roleId: element.name
        });
        break;
      } else continue;
    }
  }

  checkIsEditable() {
    if (this.currentUser.userType == "End User") {
      this.staticField.map(field => {
        if (this.dynamicToStaticFields && this.dynamicToStaticFields.length > 0) {
          this.dynamicToStaticFields.forEach(element => {
            var _a;

            if (field == ((_a = String(element.displayName)) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '').toLowerCase())) {
              if (element.isEditable) {
                switch (field) {
                  case 'firstname':
                    this.addForm.get('firstName').enable();
                    break;

                  case 'lastname':
                    this.addForm.get('lastName').enable();
                    break;

                  case 'nativename':
                    this.addForm.get('nativeName').enable();
                    break;

                  case 'emailid':
                    this.addForm.get('emailId').enable();
                    break;

                  case 'designation':
                    this.addForm.get('designation').enable();
                    break;

                  case 'primarycontact':
                    this.addForm.get('primaryContact').enable();
                    break;

                  case 'secondarycontact':
                    this.addForm.get('secondaryContact').enable();
                    break;

                  case 'profilepicture':
                    this.addForm.get('profilePicture').enable();
                    this.isProfileEditable = true;
                    break;
                }
              }
            }
          });
        }
      });
    } else {
      this.addForm.get('firstName').enable();
      this.addForm.get('lastName').enable();
      this.addForm.get('nativeName').enable(); // this.addForm.get('emailId').enable();

      this.addForm.get('designation').enable();
      this.addForm.get('primaryContact').enable();
      this.addForm.get('secondaryContact').enable();
      this.addForm.get('profilePicture').enable();
      this.isProfileEditable = true;
    }
  }

  getEditObject() {
    this.userService.getUserById({
      id: this.editId
    }).subscribe(response => {
      if (response && response.data) {
        this.editObject = response.data;
        this.addForm.patchValue(Object.assign({}, response.data));

        if (response.data.businessUnitIds && response.data.role != 'BU Admin') {
          if (response.data.hasOwnProperty('businessUnitIds') && response.data.businessUnitIds[0]) {
            this.addForm.patchValue({
              businessUnitIds: response.data.businessUnitIds[0]
            });
          } else {// this.addForm.patchValue({ businessUnitIds: [] });
          }
        } else if (response.data.businessUnitIds && response.data.role == 'BU Admin') {
          this.isMultipleBU = true;
          this.addForm.patchValue({
            businessUnitIds: response.data.businessUnitIds
          });
        } // response.data.businessUnitIds ? this.addForm.patchValue({ businessUnitIds: response.data.businessUnitIds[0] }) : '';


        this.attributeArray = this.addForm.get('attributes');
        this.attributeArray.clear();
        this.attributeFieldsName = [];
        this.attributeList = [];
        this.setRoleById();

        if (response.data && response.data.buSpecificAttributes && this.buListArray.length > 0 && response.data.buSpecificAttributes.length > 0) {
          this.buListArray[0].template.attributes.map(data => {
            var _a;

            if (!this.staticField.includes((_a = String(data.displayName)) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '').toLowerCase())) {
              if (data.isDynamic) {
                this.attributeList.push(data);
                this.attributeFieldsName.push(data.attributeName);

                if (String(data.attributeType).toLowerCase() == 'image') {
                  this.attributeArray.push(this.fb.group({
                    [data.attributeName]: [data.value, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
                    [`${data.attributeName}_img`]: [data.value]
                  }));
                } else {
                  this.attributeArray.push(this.fb.group({
                    [data.attributeName]: [data.value, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
                  }));
                }
              } else {
                this.notDynamicAttributeArray.push(data);
              }
            } else {
              if (data.isDynamic) {
                this.dynamicToStaticFields.push(data);
              } else {
                this.notDynamicAttributeArray.push(data);
              }
            }
          });
        }

        this.checkIsEditable();
      } else {
        this.router.navigateByUrl('/my-cards');
      }
    });
  }

  submitForm() {
    var _this = this;

    return (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      if (_this.addForm.valid) {
        if (_this.attributeArray && _this.attributeArray.length > 0) {
          _this.attributeArray.controls.forEach((control, i) => {
            (0,src_app_shared_common__WEBPACK_IMPORTED_MODULE_2__.validateAllFormFields)(control);
          });
        }

        (0,src_app_shared_common__WEBPACK_IMPORTED_MODULE_2__.enableAllFormFields)(_this.addForm);
        _this.showLoader = true; // if (this.selectedProfileFile) {
        //   const data = new FormData(); data.append('file', this.selectedProfileFile);
        //   await this.commonService.fileUpload(data).then((res: any) => { this.addForm.get('profilePicture').setValue(res.data); })
        // }

        let BuAttributes = [];

        if (_this.attributeArray && _this.attributeArray.length > 0) {
          _this.attributeArray.controls.forEach((control, i) => {
            (0,src_app_shared_common__WEBPACK_IMPORTED_MODULE_2__.validateAllFormFields)(control);
          });

          _this.addForm.value.attributes.map((data, i) => {
            Object.keys(data).forEach(key => {
              if (!key.includes('_img')) BuAttributes.push(Object.assign(Object.assign({}, _this.attributeList[i]), {
                "attributeName": key,
                "value": data[key]
              }));
            });
          });
        }

        _this.dynamicToStaticFields.map(data => {
          var _a;

          switch ((_a = String(data.displayName)) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '').toLowerCase()) {
            case 'firstname':
              BuAttributes.push(Object.assign(Object.assign({}, data), {
                value: _this.addForm.value.firstName
              }));
              break;

            case 'emailid':
              BuAttributes.push(Object.assign(Object.assign({}, data), {
                value: _this.addForm.value.emailId
              }));
              break;

            case 'lastname':
              BuAttributes.push(Object.assign(Object.assign({}, data), {
                value: _this.addForm.value.lastName
              }));
              break;

            case 'nativename':
              BuAttributes.push(Object.assign(Object.assign({}, data), {
                value: _this.addForm.value.nativeName
              }));
              break;

            case 'designation':
              BuAttributes.push(Object.assign(Object.assign({}, data), {
                value: _this.addForm.value.designation
              }));
              break;

            case 'primarycontact':
              BuAttributes.push(Object.assign(Object.assign({}, data), {
                value: _this.addForm.value.primaryContact
              }));
              break;

            case 'secondarycontact':
              BuAttributes.push(Object.assign(Object.assign({}, data), {
                value: _this.addForm.value.secondaryContact
              }));
              break;

            case 'profilepicture':
              BuAttributes.push(Object.assign(Object.assign({}, data), {
                value: _this.addForm.value.profilePicture
              }));
              break;
          }
        });

        BuAttributes = [...BuAttributes, ..._this.notDynamicAttributeArray];
        let data = Object.assign(Object.assign({}, _this.addForm.value), {
          buSpecificAttributes: BuAttributes
        }); // if (this.currentUser.userType == 'BU Admin' || this.currentUser.userType == 'End User') {
        //   if (this.addForm.value.businessUnitIds) { data = { ...data, businessUnitIds: [this.addForm.value.businessUnitIds] } }
        //   else { data = { ...data, businessUnitIds: [] } }
        // }

        if (_this.addForm.value.businessUnitIds && ((_a = _this.currentUser) === null || _a === void 0 ? void 0 : _a.userType) != 'Super Admin') {
          let temp = _this.isMultipleBU ? _this.addForm.value.businessUnitIds : _this.addForm.value.businessUnitIds.length > 0 ? [_this.addForm.value.businessUnitIds] : [];
          data = Object.assign(Object.assign({}, data), {
            businessUnitIds: temp
          });
        } else {
          data = Object.assign(Object.assign({}, data), {
            businessUnitIds: []
          });
        }

        delete data.attributes;
        data['fullName'] = data.firstName + ' ' + data.lastName;

        if (_this.isEditing) {
          _this.userService.saveUser(Object.assign(Object.assign({}, data), {
            id: _this.editId,
            isActive: true
          })).subscribe(response => {
            _this.showLoader = false;

            if (response.status == 'Ok') {
              _this.dataService.updateAuth(Object.assign(Object.assign({}, _this.currentUser), response.data));

              if (_this.currentUser.userType == 'End User') {
                _this.router.navigateByUrl('/my-cards');
              } else {
                _this.location.back();
              }
            } else {
              _this.toastService.error(response.message);

              response.error.map(obj => {
                if (obj.hasOwnProperty('emailId')) {
                  _this.formErrors['emailId'] = obj['emailId'];
                } else {
                  _this.formErrors['apierror'] = `* ${response.error}`;
                }
              });
            }
          }, error => {
            _this.showLoader = false;
          });
        }
      }
    })();
  }

  profileChangeEvent(fileInputFile) {
    var _this2 = this;

    return (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;

      if (!fileInputFile.target.files[0].name.match(reg)) {
        _this2.toastService.error('Please select valid file');

        _this2.selectedProfileFile = null;
        return false;
      } else {
        _this2.selectedProfileFile = null;
        _this2.selectedProfileFile = fileInputFile.target.files[0];

        if (_this2.selectedProfileFile) {
          const data = new FormData();
          data.append('file', _this2.selectedProfileFile);
          yield _this2.commonService.fileUpload(data).then(res => {
            _this2.addForm.get('profilePicture').setValue(res.data);
          });
        } // this.addForm.get('profilePicture').setValue(this.selectedProfileFile.name);

      }
    })();
  }

  fileChangeEvent(fileInputFile, i) {
    var _this3 = this;

    return (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.selectedIndex = i;
      const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;

      if (!fileInputFile.target.files[0].name.match(reg)) {
        _this3.toastService.error('Please select valid file');

        _this3.RemoveFile();

        return false;
      } else {
        _this3.RemoveFile();

        _this3.SelectedFile = fileInputFile.target.files[0];

        _this3.addForm.controls['attributes']['controls'][i].patchValue({
          [`${_this3.attributeFieldsName[i]}_img`]: _this3.SelectedFile.name
        });

        const data = new FormData();
        data.append('file', _this3.SelectedFile);
        yield _this3.commonService.fileUpload(data).then(res => {
          _this3.addForm.controls['attributes']['controls'][_this3.selectedIndex].patchValue({
            [`${_this3.attributeFieldsName[_this3.selectedIndex]}`]: res.data
          });
        }); // var reader = new FileReader();
        // reader.onload = this.HandleReaderLoadedFile.bind(this);
        // reader.readAsBinaryString(this.SelectedFile);
      }
    })();
  }

  RemoveFile() {
    this.SelectedFile = null;
  }

  verifyEmail() {
    this.userService.checkLoginIdExists({
      emailId: this.addForm.value.emailId
    }).subscribe(res => {
      if (res.message == 'Exist') {
        this.addForm.controls['emailId'].setErrors({
          isExit: true
        });
        this.formErrors['emailId'] = 'Email already exit';
      } else {
        this.addForm.controls['emailId'].setErrors(null);
        this.formErrors['emailId'] = false;
      }
    });
  }

  keyPressAlphaNumerics(event) {
    var inp = String.fromCharCode(event.keyCode);

    if (/[0-9+]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  ngOnDestroy() {}

};

EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) {
  return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_business_unit_service__WEBPACK_IMPORTED_MODULE_4__.BusinessUnitService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_role_service__WEBPACK_IMPORTED_MODULE_5__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location));
};

EditProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: EditProfileComponent,
  selectors: [["app-edit-profile"]],
  decls: 90,
  vars: 17,
  consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "0"], [1, "col", "add-brdcmb"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/profile"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "main-div", "padding-x"], [1, "d-flex", "justify-content-between"], [1, "form-hadding"], [1, "pt-5", "row", "justify-content-between", 3, "formGroup", "ngSubmit"], ["class", "form-group w-45 input-fildcl", 4, "ngIf"], [1, "form-group", "w-45", "input-fildcl"], ["for", "lname", 1, "control-label"], [1, "inpu-t"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "placeholder", "Ex : Jack", 3, "formControl"], [1, ""], ["type", "text", "matInput", "", "placeholder", "Ex : Rider", 3, "formControl"], [1, "disabled"], ["type", "email", "matInput", "", "placeholder", "Ex : abc@gmail.com", 3, "formControl", "change"], [1, "disabled1"], ["type", "text", "disabled", "", "matInput", "", 3, "value"], ["type", "text", "matInput", "", "placeholder", "Ex : Engineer", 3, "formControl"], ["matInput", "", "placeholder", "Ex : 098645322", 3, "formControl", "keypress"], [1, "imageoverlap"], ["appearance", "outline", 1, "w-100", 3, "click"], ["matInput", "", "readonly", "", "placeholder", "Upload", 3, "formControl"], ["src", "assets/images/Upload.svg", 1, "upload-icon"], ["hidden", "", "accept", "image/x-png,image/jpeg", "type", "file", "file-model", "myFile", 3, "change"], ["fileInputProfile", ""], [1, "form-group", "w-45", "input-fildcl", "flex_control"], [1, "profile_img"], [3, "src"], ["formArray", "attributeArray", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "d-flex", "justify-content-end", "margin-y"], ["type", "submit", "mat-raised-button", "", "color", "primary"], [4, "ngIf", "ngIfElse"], ["BUIDTemplate", ""], ["disabled", "", "multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["disabled", "", 3, "formControl"], ["formArray", "attributeArray"], [1, "division"], [1, "form-group", "w-45", 3, "formGroup"], ["elseTemplate", ""], [1, "input-fildcl"], ["notEditTemplate", ""], ["matInput", "", "readonly", "", 3, "formControl", "placeholder"], ["fileInput", ""], ["type", "text", "matInput", "", 3, "readonly", "formControl", "placeholder"], [3, "formControl"]],
  template: function EditProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "nav", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ol", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "form", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function EditProfileComponent_Template_form_ngSubmit_16_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, EditProfileComponent_div_17_Template, 9, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Last Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Native Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, " Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditProfileComponent_Template_input_change_45_listener() {
        return ctx.verifyEmail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Role ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Designation");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](59, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "Primary Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keypress", function EditProfileComponent_Template_input_keypress_65_listener($event) {
        return ctx.keyPressAlphaNumerics($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "Secondary Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keypress", function EditProfileComponent_Template_input_keypress_71_listener($event) {
        return ctx.keyPressAlphaNumerics($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, "Profile Picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "mat-form-field", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditProfileComponent_Template_mat_form_field_click_77_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r30);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](81);

        return _r1.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](78, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](79, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "input", 32, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditProfileComponent_Template_input_change_80_listener($event) {
        return ctx.profileChangeEvent($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](84, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](85, EditProfileComponent_ng_container_85_Template, 9, 3, "ng-container", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](86, EditProfileComponent_ng_container_86_Template, 12, 2, "ng-container", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.addForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.userType) == "End User");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["firstName"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["lastName"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["nativeName"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["emailId"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.currentUser == null ? null : ctx.currentUser.userType);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["designation"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["primaryContact"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["secondaryContact"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["profilePicture"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.addForm.controls["profilePicture"] == null ? null : ctx.addForm.controls["profilePicture"].value, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.attributeArray == null ? null : ctx.attributeArray.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.userType) == "Tenant Admin" || (ctx.currentUser == null ? null : ctx.currentUser.userType) == "BU Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, " ");
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_8__.FormSubmitDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlDirective, _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_9__.ControlErrorsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption],
  styles: [".mat-option:before,   .mat-select:before {\n  position: absolute;\n  width: 20px;\n  height: 10px;\n  left: 120px;\n  content: \"\";\n}\n\n.main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    background-color: transparent;\n    border-radius: 0;\n  }\n}\n\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    box-shadow: none;\n    background-color: transparent;\n    border-radius: 0;\n  }\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    background-color: var(--white);\n    border-radius: 1rem;\n    padding: 20px;\n    box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n  }\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 600;\n  font-size: 22px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .imageoverlap[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  padding-right: 40px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .dashed-line[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #ccc;\n  width: 35%;\n  margin-right: 15px;\n  margin-left: 15px;\n  height: 26px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .margin-y[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .image-icon[_ngcontent-%COMP%] {\n  margin-top: -4px;\n  width: 25px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -25px;\n  top: 11px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  top: 11px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  color: var(--color-secondary);\n  font-size: 14px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]     .mat-form-field-outline {\n  background-color: var(--color-light-gray);\n  border-radius: 4px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .disabled1[_ngcontent-%COMP%]     .mat-form-field-outline {\n  background-color: var(--color-light-gray);\n  border-radius: 4px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n  padding-left: 8rem;\n  padding-right: 8rem;\n  padding-top: 4rem;\n}\n\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n  width: 45%;\n  margin-bottom: 5px;\n}\n\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n}\n\n@media (max-width: 1199.98px) {\n  .side_container[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0px;\n    padding-left: 0px;\n  }\n\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n\n.division[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.division[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.division[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 8px;\n}\n\n.mat-input-element[_ngcontent-%COMP%]:disabled {\n  color: rgba(0, 0, 0, 0.38) !important;\n}\n\n.flex_control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.flex_control[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  border-radius: 50%;\n  overflow: hidden;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFRQTtFQUNFLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUxGOztBQU1FO0VBSkY7SUFLSSxlQUFBO0lBQ0EsNkJBQUE7SUFDQSxnQkFBQTtFQUhGO0FBQ0Y7O0FBS0k7O0VBRUUsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSE47O0FBT0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0FBTEo7O0FBTUk7RUFMRjtJQVlJLGdCQUFBO0lBQ0EsNkJBQUE7SUFDQSxnQkFBQTtFQVRKO0VBQ0k7SUFDRSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGdEQUFBO0VBQ047QUFDRjs7QUFJSTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRk47O0FBS0k7RUFDRSxtQkFBQTtBQUhOOztBQUtJO0VBQ0UsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFITjs7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFITjs7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUhOOztBQUtJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUhOOztBQUtJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUhOOztBQU1JO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FBSk47O0FBUU07RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0FBTlI7O0FBVU07RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0FBUlI7O0FBYUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFYSjs7QUFZSTtFQUpGO0lBS0kscUJBQUE7RUFUSjtBQUNGOztBQVdNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBVFI7O0FBVVE7RUFIRjtJQUlJLFdBQUE7RUFQUjtBQUNGOztBQVVNO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFSUjs7QUFXTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7QUFUUjs7QUE4QkE7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUE1Qko7O0VBZ0NFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQTdCSjtBQUNGOztBQWdDQTtFQUNFLGdCQUFBO0FBOUJGOztBQStCRTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBN0JKOztBQStCRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQTdCSjs7QUFnQ0E7RUFDRSxxQ0FBQTtBQTdCRjs7QUErQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQTVCRjs7QUE2QkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBM0JKIiwiZmlsZSI6ImVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LW9wdGlvbjpiZWZvcmUsXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdDpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbGVmdDogMTIwcHg7XHJcbiAgY29udGVudDogXCJcIjtcclxufVxyXG4vLyBtaXhpbiBzdGFydFxyXG5AbWl4aW4gYWxsLWlucHV0LXN0eWxlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubWFpbi1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ibHVlKTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC5icmVhZGNydW1iIHtcclxuICAgICYgYSxcclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1haW4tZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYigyNiA4OCAyNDYgLyAxNyUpO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuICAgICAgLm1haW4tZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2IoMjYgODggMjQ2IC8gMTclKTtcclxuICAgICAgfVxyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICAgIC5mb3JtLWhhZGRpbmcge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZW92ZXJsYXAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmRhc2hlZC1saW5lIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjY2NjO1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luLXkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG4gICAgLmltYWdlLWljb24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgIH1cclxuICAgIC5leWUtaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IC0yNXB4O1xyXG4gICAgICB0b3A6IDExcHg7XHJcbiAgICB9XHJcbiAgICAudXBsb2FkLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtMjhweDtcclxuICAgICAgdG9wOiAxMXB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAgLmRpc2FibGVke1xyXG4gICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWdyYXkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG4gICAgIH1cclxuICAgICAuZGlzYWJsZWQxIHtcclxuICAgICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ncmF5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIH1cclxuICAgICB9XHJcbiAgfVxyXG5cclxuICAucGFkZGluZy14IHtcclxuICAgIHBhZGRpbmctbGVmdDogOHJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICYgZm9ybSB7XHJcbiAgICAgIC53LTQ1IHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyByZXNwb25zaXZlIGNvZGUgc3RhcnRcclxuXHJcbi8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxufVxyXG5cclxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgbGVzcyB0aGFuIDc2OHB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIGxlc3MgdGhhbiA5OTJweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBsZXNzIHRoYW4gMTIwMHB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcbiAgLnNpZGVfY29udGFpbmVyIHtcclxuICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWFpbi1wYWdlIHtcclxuICAgIC5wYWRkaW5nLXgge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5kaXZpc2lvbntcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHNwYW57XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIGhye1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxufVxyXG4ubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWR7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCkgIWltcG9ydGFudDtcclxufVxyXG4uZmxleF9jb250cm9se1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGltZ3tcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn0iXX0= */"]
});
EditProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__.AutoUnsubscribe)()], EditProfileComponent);


/***/ }),

/***/ 3674:
/*!*****************************************************!*\
  !*** ./src/app/module/profile/profile.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-auto-unsubscribe */ 3970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);







function ProfileComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.currentUser == null ? null : ctx_r0.currentUser.firstName);
} }
function ProfileComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.currentUser == null ? null : ctx_r1.currentUser.lastName);
} }
function ProfileComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.currentUser == null ? null : ctx_r2.currentUser.primaryContact, "");
} }
function ProfileComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.currentUser == null ? null : ctx_r3.currentUser.emailId, "");
} }
const _c0 = function () { return ["./edit"]; };
let ProfileComponent = class ProfileComponent {
    constructor(dataservice) {
        this.dataservice = dataservice;
        this.PageTitle = "Profile";
    }
    ngOnInit() {
        this.dataservice.currentUser.subscribe((responce) => {
            if (responce) {
                this.currentUser = responce;
            }
        });
    }
    ngOnDestroy() { }
};
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 18, vars: 7, consts: [[1, "side_container"], [1, "card"], [1, "card_details"], [1, "buttons"], ["mat-button", "", 1, "profile"], ["type", "submit", "mat-raised-button", "", 1, "edit-profile", 3, "routerLink"], [1, "row", "imaged"], [1, "col-2", "text-center"], ["alt", "", "width", "150px", 1, "rounded-circle", "border", 3, "src"], [1, "col-10"], [1, "row"], ["class", "col-md-6", 4, "ngIf"], [1, "row", "mt-4"], [1, "col-md-6"], [1, "control-label", "mb-1"], [1, "bg-light", "p-2"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Edit Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProfileComponent_div_13_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProfileComponent_div_14_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProfileComponent_div_16_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProfileComponent_div_17_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (ctx.currentUser == null ? null : ctx.currentUser.profilePicture) ? ctx.currentUser == null ? null : ctx.currentUser.profilePicture : "https://ebcstorage2022.blob.core.windows.net/ebc/DefaultUser.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser == null ? null : ctx.currentUser.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser == null ? null : ctx.currentUser.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser == null ? null : ctx.currentUser.primaryContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser == null ? null : ctx.currentUser.emailId);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".card[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n\n.card_details[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n\n.card_details[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 10px;\n  justify-content: space-between;\n}\n\n@media (max-width: 320px) {\n  .card_details[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto;\n  }\n}\n\n.card_details[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 550;\n  font-size: 20px;\n  padding: 15px 15px 15px 15px;\n}\n\n.card_details[_ngcontent-%COMP%]   .edit-profile[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n  text-decoration: none;\n}\n\n@media (max-width: 320px) {\n  .card_details[_ngcontent-%COMP%]   .edit-profile[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.card_details[_ngcontent-%COMP%]   .edit-profile[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  background-color: var(--white);\n}\n\n.card_details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n\n.card_details[_ngcontent-%COMP%]   .imaged[_ngcontent-%COMP%] {\n  margin-left: 15px !important;\n  margin-top: 20px !important;\n  margin-right: 15px !important;\n  margin-bottom: 50px !important;\n}\n\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%] {\n  padding: 20px 20px 20px 20px;\n  justify-content: center;\n  display: flex;\n}\n\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 10px 10px 1px;\n  font-size: 18px;\n  color: var(--color-primary);\n}\n\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 50px;\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n  text-decoration: none;\n}\n\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  background-color: var(--white);\n}\n\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-line-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 5px;\n  color: var(--color-primary);\n  text-decoration: none;\n}\n\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-line-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n}\n\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n@media (max-width: 576px) {\n  .card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    padding: 20px 0px 20px 0px;\n  }\n}\n\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n  text-decoration: none;\n}\n\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  background-color: var(--white);\n}\n\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-line-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 35px;\n  color: var(--color-primary);\n  text-decoration: none;\n}\n\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-line-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n}\n\n@media (max-width: 576px) {\n  .text-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n    margin: 10px;\n    margin-bottom: 25px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n\n  .col-10[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 99.333333%;\n    margin-top: 15px;\n  }\n\n  .card_details[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n    color: var(--color-secondary);\n    font-weight: 550;\n    font-size: 20px;\n    padding: 15px 15px 15px 15px;\n  }\n  .card_details[_ngcontent-%COMP%]   .edit-profile[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 48px;\n    box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n    border-radius: 10px;\n    background-color: var(--color-primary);\n    color: var(--white);\n    border: 2px solid var(--color-primary);\n    text-decoration: none;\n  }\n  .card_details[_ngcontent-%COMP%]   .edit-profile[_ngcontent-%COMP%]:hover {\n    color: var(--color-primary);\n    background-color: var(--white);\n  }\n}\n\n@media (max-width: 786px) {\n  img[_ngcontent-%COMP%] {\n    margin-left: -15px;\n  }\n}\n\n@media (max-width: 786px) {\n  .col-2[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 20.666667%;\n    margin-bottom: 10px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 100px;\n    margin-right: 20px;\n  }\n}\n\n@media (max-width: 1024px) {\n  .col-2[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 22.666667%;\n    margin-bottom: 10px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUFDRjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBQ0k7RUFKRjtJQUtJLGFBQUE7SUFDQSwyQkFBQTtFQUVKO0FBQ0Y7O0FBQ0E7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQkFBQTtBQUFBOztBQUNBO0VBVEE7SUFVRSxXQUFBO0VBRUE7QUFDRjs7QUFBQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUFFRjs7QUFFQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQUE7O0FBSUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUZBOztBQU1BO0VBQ0UsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFKRjs7QUFNRTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFKTjs7QUFPRTtFQUNJLGFBQUE7QUFMTjs7QUFPRTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7QUFMTjs7QUFPTTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUFMUjs7QUFTSTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBUE47O0FBU007RUFDRSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFQUjs7QUFXSTtFQUNFLGFBQUE7QUFUTjs7QUFVTTtFQUZGO0lBR0ksMEJBQUE7RUFQTjtBQUNGOztBQVFNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBRUEsc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7QUFQUjs7QUFTUTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUFQVjs7QUFVTTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBUlI7O0FBVVE7RUFDRSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFSVjs7QUFrQkE7RUFDQTtJQUNFLDZCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VBZkE7O0VBaUJGO0lBQ0EsWUFBQTtFQWRFOztFQWdCRjtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBYkU7O0VBa0JGO0lBQ0UsNkJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSw0QkFBQTtFQWZBO0VBa0JGO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxnREFBQTtJQUNBLG1CQUFBO0lBQ0Esc0NBQUE7SUFDQSxtQkFBQTtJQUNBLHNDQUFBO0lBQ0EscUJBQUE7RUFoQkE7RUFrQkE7SUFDRSwyQkFBQTtJQUNBLDhCQUFBO0VBaEJGO0FBQ0Y7O0FBNEJBO0VBQ0E7SUFDRSxrQkFBQTtFQTFCQTtBQUNGOztBQTRCQTtFQUNBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUExQkE7O0VBNEJGO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQXpCRTtBQUNGOztBQWdDQTtFQUNBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUE5QkE7O0VBZ0NGO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUE3QkU7QUFDRiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWJsdWUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbn1cclxuXHJcbi5jYXJkX2RldGFpbHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYigyNiA4OCAyNDYgLyAxNyUpO1xyXG5cclxuIFxyXG4gIC5idXR0b25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDozMjBweCl7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBmb250LXdlaWdodDogNTUwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG59XHJcblxyXG4uZWRpdC1wcm9maWxlIHtcclxud2lkdGg6IDIwMHB4O1xyXG5oZWlnaHQ6IDQ4cHg7XHJcbmJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuYm9yZGVyLXJhZGl1czogMTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjMyMHB4KSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiY6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxufSAgXHJcblxyXG5pbWcge1xyXG53aWR0aDogMTAwcHg7XHJcbmhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW1hZ2Vke1xyXG5tYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG5tYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG5tYXJnaW4tYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uZm9ybV9jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDFweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9ucyB7XHJcbiAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgXHJcbiAgLmJsdWUtYnRuIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYmx1ZS1saW5lLWJ0biB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIHtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5ibHVlLWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiYSgyNiwgODgsIDI0NiwgMC40OSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAvLyAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYmx1ZS1saW5lLWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn0gICAgXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbmltZyB7XHJcbndpZHRoOiAxMDBweDtcclxufVxyXG4uY29sLTEwIHtcclxuZmxleDogMCAwIGF1dG87XHJcbndpZHRoOiA5OS4zMzMzMzMlO1xyXG5tYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZF9kZXRhaWxzIHtcclxuXHJcbi5wcm9maWxlIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBmb250LXdlaWdodDogNTUwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG59XHJcblxyXG4uZWRpdC1wcm9maWxlIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICB9XHJcbn1cclxuLy8gLmVkaXQtcHJvZmlsZSB7XHJcbi8vICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuLy8gICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggMTVweDtcclxuLy8gICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuLy8gfVxyXG59XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODZweCl7XHJcbmltZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG59XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4NnB4KXtcclxuLmNvbC0yIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICB3aWR0aDogMjAuNjY2NjY3JTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbmltZyB7XHJcbndpZHRoOiA4MHB4O1xyXG5oZWlnaHQ6IDEwMHB4O1xyXG5tYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLy8gLmNvbC0xMCB7XHJcbi8vICAgZmxleDogMCAwIGF1dG87XHJcbi8vICAgd2lkdGg6IDc4LjMzMzMzMyU7XHJcbi8vIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbi5jb2wtMiB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgd2lkdGg6IDIyLjY2NjY2NyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5pbWcge1xyXG53aWR0aDogMTAwcHg7XHJcbmhlaWdodDogMTAwcHg7XHJcbi8vIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4vLyAuY29sLTEwIHtcclxuLy8gICBmbGV4OiAwIDAgYXV0bztcclxuLy8gICB3aWR0aDogNzclO1xyXG4vLyB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_0__.AutoUnsubscribe)()
], ProfileComponent);



/***/ }),

/***/ 8815:
/*!**************************************************!*\
  !*** ./src/app/module/profile/profile.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ 3674);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password/change-password.component */ 1166);
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ 8027);
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ 3153);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/permission */ 9206);
/* harmony import */ var src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/loader/loader.module */ 1098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
















const routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent,
        data: { title: 'Profile', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.myProfile }
    },
    {
        path: 'change-password',
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent,
        data: { title: 'Change Password', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.changePassword }
    },
    {
        path: 'edit',
        component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__.EditProfileComponent,
        data: { title: 'Update Profile', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.myProfile }
    }
];
class ProfileModule {
}
ProfileModule.ɵfac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_3__.FormValidationModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes),
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialExModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__.LoaderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent, _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent, _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__.EditProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_3__.FormValidationModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialExModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__.LoaderModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_module_profile_profile_module_ts.js.map