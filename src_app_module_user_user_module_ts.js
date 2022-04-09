"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["src_app_module_user_user_module_ts"],{

/***/ 8600:
/*!************************************************************!*\
  !*** ./src/app/module/user/add-user/add-user.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserComponent": () => (/* binding */ AddUserComponent)
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
/* harmony import */ var _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/form-validation/directive/form-submit.directive */ 9855);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/form-validation/directive/control-errors.directive */ 6242);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 8133);























function AddUserComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r7 == null ? null : item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r7 == null ? null : item_r7.name, " ");
  }
}

function AddUserComponent_div_29_ng_container_6_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r12.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r12.name, " ");
  }
}

function AddUserComponent_div_29_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function AddUserComponent_div_29_ng_container_6_Template_mat_select_selectionChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return ctx_r13.onBUChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, AddUserComponent_div_29_ng_container_6_mat_option_3_Template, 2, 2, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx_r8.addForm.controls["businessUnitIds"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r8.buListArray);
  }
}

function AddUserComponent_div_29_ng_template_7_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r16.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r16.name, " ");
  }
}

function AddUserComponent_div_29_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function AddUserComponent_div_29_ng_template_7_Template_mat_select_selectionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return ctx_r17.onBUChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddUserComponent_div_29_ng_template_7_mat_option_2_Template, 2, 2, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx_r10.addForm.controls["businessUnitIds"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.buListArray);
  }
}

function AddUserComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Business Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AddUserComponent_div_29_ng_container_6_Template, 4, 2, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, AddUserComponent_div_29_ng_template_7_Template, 3, 2, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](8);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isMultipleBU)("ngIfElse", _r9);
  }
}

function AddUserComponent_div_58_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Email address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function AddUserComponent_div_58_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Email address is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function AddUserComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddUserComponent_div_58_small_1_Template, 2, 0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddUserComponent_div_58_small_2_Template, 2, 0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.addForm.get("emailId").errors == null ? null : ctx_r2.addForm.get("emailId").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.addForm.get("emailId").errors == null ? null : ctx_r2.addForm.get("emailId").errors.pattern);
  }
}

function AddUserComponent_mat_error_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.formErrors == null ? null : ctx_r3.formErrors.emailId);
  }
}

function AddUserComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Dynamic BU fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function AddUserComponent_ng_container_94_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddUserComponent_ng_container_94_ng_container_2_Template_mat_form_field_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28);

      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);

      return _r26.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "input", 34, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AddUserComponent_ng_container_94_ng_container_2_Template_input_change_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28);
      const i_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r29.fileChangeEvent($event, i_r22);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const i_r22 = ctx_r31.index;
    const item_r21 = ctx_r31.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r23.attributeDisplayFieldsName[i_r22]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("placeholder", "Upload ", (tmp_1_0 = ctx_r23.attributeFieldsName[i_r22].replace("{", "")) == null ? null : tmp_1_0.replace("}", ""), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", item_r21["controls"][ctx_r23.attributeFieldsName[i_r22] + "_img"]);
  }
}

function AddUserComponent_ng_container_94_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const i_r22 = ctx_r32.index;
    const item_r21 = ctx_r32.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r25.attributeDisplayFieldsName[i_r22], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", item_r21["controls"][ctx_r25.attributeFieldsName[i_r22]])("placeholder", (tmp_2_0 = ctx_r25.attributeFieldsName[i_r22].replace("{", "")) == null ? null : tmp_2_0.replace("}", ""));
  }
}

function AddUserComponent_ng_container_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddUserComponent_ng_container_94_ng_container_2_Template, 10, 3, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, AddUserComponent_ng_container_94_ng_template_3_Template, 6, 3, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const i_r22 = ctx.index;

    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);

    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", item_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r6.attributeList[i_r22] == null ? null : ctx_r6.attributeList[i_r22].attributeType == null ? null : ctx_r6.attributeList[i_r22].attributeType.toLowerCase()) == "image")("ngIfElse", _r24);
  }
}

let AddUserComponent = class AddUserComponent {
  constructor(router, activatedRoute, fb, userService, businessUnitService, roleService, toastService, dataService, commonService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.fb = fb;
    this.userService = userService;
    this.businessUnitService = businessUnitService;
    this.roleService = roleService;
    this.toastService = toastService;
    this.dataService = dataService;
    this.commonService = commonService;
    this.sataticFillds = [];
    this.loadingState = false;
    this.showLoader = false;
    this.hide = true;
    this.formErrors = {
      emailId: null,
      apierror: null
    };
    this.roleListArray = [];
    this.isEditing = false;
    this.editId = null; // isPasswordType: string = 'password';
    // isShowPassword: boolean = false;

    this.pageTitle = 'Add User';
    this.buListArray = [];
    this.attributeFieldsName = [];
    this.attributeDisplayFieldsName = [];
    this.attributeList = [];
    this.notDynamicAttributeArray = [];
    this.staticField = ['emailid', 'firstname', 'nativename', 'lastname', 'designation', 'primarycontact', 'profilepicture', 'secondarycontact'];
    this.dynamicToStaticFields = []; // password: any;

    this.isMultipleBU = false;
    this.emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    this.searchFilterBU = null;
    this.selectedIndex = 0;
    this.addForm = this.fb.group({
      emailId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.emailRegEx)]],
      firstName: [""],
      lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required])],
      nativeName: [""],
      roleId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required])],
      designation: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required])],
      primaryContact: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(20)])],
      profilePicture: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required])],
      // password: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      // address: fb.group({
      //   building: [null, Validators.compose([Validators.required])],
      //   street: [null, Validators.compose([Validators.required])],
      //   locality: [null, Validators.compose([Validators.required])],
      //   postalcode: [null, Validators.compose([Validators.required])],
      //   city: [null, Validators.compose([Validators.required])],
      //   state: [null, Validators.compose([Validators.required])],
      //   country: [null, Validators.compose([Validators.required])]
      // }),
      businessUnitIds: [null],
      secondaryContact: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(20)])],
      attributes: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArray([])
    });

    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.isEditing = true;
      this.editId = this.activatedRoute.snapshot.paramMap.get('id');
      this.isEditing ? this.pageTitle = 'Update User' : this.pageTitle = 'Add User'; // this.addForm.get('password').clearValidators();
      // this.addForm.get('password').updateValueAndValidity();
    }

    this.dataService.currentUser.subscribe(data => {
      var _a;

      if (data) {
        this.currentUser = data;
        this.getMasterData();

        if (((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.userType) != 'Super Admin') {
          this.addForm.get('businessUnitIds').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]));
          this.addForm.get('businessUnitIds').updateValueAndValidity();
        } else {
          this.addForm.get('businessUnitIds').clearValidators();
          this.addForm.get('businessUnitIds').updateValueAndValidity();
        }
      }
    });
  }

  ngOnInit() {
    if (this.isEditing) {
      this.getEditObject();
    }
  }

  getMasterData() {
    let filters = [];

    if (this.currentUser && this.currentUser.businessUnitIds && this.currentUser.businessUnitIds[0]) {
      this.currentUser.businessUnitIds.map(data => {
        filters.push({
          "propertyName": "Code",
          "value": data,
          "caseSensitive": true
        });
      });
      this.searchFilterBU = {
        "conditionOperator": 1,
        "filters": filters
      };
    }

    this.businessUnitService.getBusinessUnitList({
      "searchFilter": this.searchFilterBU,
      "page": 1,
      "pageSize": 0,
      "fields": null
    }).subscribe(res => {
      if (res) {
        this.loadingState = false;
        this.buListArray = res.data;

        if (this.buListArray.length > 0) {// this.addForm.patchValue({ businessUnitIds: this.buListArray[0].code })
          // this.onBUChange();
        }
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

  getEditObject() {
    this.userService.getUserById({
      id: this.editId
    }).subscribe(response => {
      if (response) {
        this.editObject = response.data; // this.password = response.data.password;

        this.addForm.patchValue(Object.assign(Object.assign({}, response.data), {
          password: ''
        }));

        if (response.data.businessUnitIds && response.data.role != 'BU Admin') {
          this.addForm.patchValue({
            businessUnitIds: response.data.businessUnitIds[0]
          });
        } else if (response.data.businessUnitIds && response.data.role == 'BU Admin') {
          this.isMultipleBU = true;
          this.addForm.patchValue({
            businessUnitIds: response.data.businessUnitIds
          });
        }

        this.attributeArray = this.addForm.get('attributes');
        this.attributeArray.clear();
        this.attributeFieldsName = [];
        this.attributeDisplayFieldsName = [];
        this.attributeList = [];
        this.setRoleById();

        if (response.data && response.data.buSpecificAttributes) {
          response.data.buSpecificAttributes.map(data => {
            var _a;

            if (!this.staticField.includes((_a = String(data.displayName)) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '').toLowerCase())) {
              if (data.isDynamic) {
                this.attributeList.push(data);
                this.attributeDisplayFieldsName.push(data.displayName);
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
      } else {
        this.router.navigateByUrl('/user');
      }
    });
  }

  submitForm() {
    var _this = this;

    return (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      console.log(_this.addForm);

      if (_this.attributeArray && _this.attributeArray.length > 0) {
        _this.attributeArray.controls.forEach((control, i) => {
          (0,src_app_shared_common__WEBPACK_IMPORTED_MODULE_2__.validateAllFormFields)(control);
        });
      }

      if (_this.addForm.valid) {
        _this.showLoader = true;

        if (_this.selectedProfileFile) {
          const data = new FormData();
          data.append('file', _this.selectedProfileFile);
          yield _this.commonService.fileUpload(data).then(res => {
            _this.addForm.get('profilePicture').setValue(res.data);
          });
        }

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
        });

        if (_this.addForm.value.businessUnitIds && ((_a = _this.currentUser) === null || _a === void 0 ? void 0 : _a.userType) != 'Super Admin') {
          let temp = _this.isMultipleBU ? _this.addForm.value.businessUnitIds : [_this.addForm.value.businessUnitIds];
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
          delete data.password; // if (this.addForm.value.password) {
          //   data.password = this.addForm.value.password;
          // } else {
          //   data.password = this.password;
          // }

          _this.userService.saveUser(Object.assign(Object.assign({}, data), {
            id: _this.editId,
            isActive: true
          })).subscribe(response => {
            _this.showLoader = false;

            if (response) {
              if (_this.addForm.value.emailId == _this.currentUser.emailId) {
                _this.dataService.currentUserSubject.next(Object.assign(Object.assign({}, _this.currentUser), response.data));
              }

              _this.router.navigateByUrl('/user');
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
        } else {
          _this.userService.saveUser(Object.assign(Object.assign({}, data), {
            isActive: true
          })).subscribe(response => {
            _this.showLoader = false;

            if (response.status == 'Ok') {
              _this.router.navigateByUrl('/user');
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
  } // showPassword() {
  //   this.isShowPassword = !this.isShowPassword;
  //   this.isShowPassword ? this.isPasswordType = 'text' : this.isPasswordType = 'password';
  // }


  onBUChange() {
    this.buListArray.map(data => {
      if (data.code == this.addForm.value.businessUnitIds) {
        this.attributeArray = this.addForm.get('attributes');
        this.attributeArray.clear();
        this.attributeFieldsName = [];
        this.attributeDisplayFieldsName = [];
        this.attributeList = [];
        data.template.attributes.map(data => {
          var _a;

          if (!this.staticField.includes((_a = String(data.displayName)) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '').toLowerCase())) {
            if (data.isDynamic) {
              this.attributeList.push(data);
              this.attributeFieldsName.push(data.attributeName);
              this.attributeDisplayFieldsName.push();

              if (String(data.attributeType).toLowerCase() == 'image') {
                this.attributeArray.push(this.fb.group({
                  [data.attributeName]: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
                  [`${data.attributeName}_img`]: ['']
                }));
              } else {
                this.attributeArray.push(this.fb.group({
                  [data.attributeName]: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
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
      } // }

    });
  }

  profileChangeEvent(fileInputFile) {
    const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;

    if (!fileInputFile.target.files[0].name.match(reg)) {
      this.toastService.error('Please select valid file');
      this.selectedProfileFile = null;
      return false;
    } else {
      this.selectedProfileFile = null;
      this.selectedProfileFile = fileInputFile.target.files[0];
      this.addForm.get('profilePicture').setValue(this.selectedProfileFile.name);
    }
  }

  fileChangeEvent(fileInputFile, i) {
    var _this2 = this;

    return (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.selectedIndex = i;
      const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;

      if (!fileInputFile.target.files[0].name.match(reg)) {
        _this2.toastService.error('Please select valid file');

        _this2.RemoveFile();

        return false;
      } else {
        _this2.RemoveFile();

        _this2.SelectedFile = fileInputFile.target.files[0];

        _this2.addForm.controls['attributes']['controls'][i].patchValue({
          [`${_this2.attributeFieldsName[i]}_img`]: _this2.SelectedFile.name
        });

        const data = new FormData();
        data.append('file', _this2.SelectedFile);
        yield _this2.commonService.fileUpload(data).then(res => {
          _this2.addForm.controls['attributes']['controls'][_this2.selectedIndex].patchValue({
            [`${_this2.attributeFieldsName[_this2.selectedIndex]}`]: res.data
          });
        });
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

  onRoleChange() {
    this.addForm.patchValue({
      businessUnitIds: []
    });

    if (this.addForm.value.roleId == 'BUAdmin') {
      this.isMultipleBU = true;
    } else this.isMultipleBU = false;
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

AddUserComponent.ɵfac = function AddUserComponent_Factory(t) {
  return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_business_unit_service__WEBPACK_IMPORTED_MODULE_4__.BusinessUnitService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_role_service__WEBPACK_IMPORTED_MODULE_5__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService));
};

AddUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: AddUserComponent,
  selectors: [["app-add-user"]],
  decls: 98,
  vars: 20,
  consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "0"], [1, "col", "add-brdcmb"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["routerLink", "/user"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "main-div", "padding-x"], [1, "d-flex", "justify-content-between"], [1, "form-hadding"], [1, "form_field", "row", "justify-content-between", 3, "formGroup", "ngSubmit"], [1, "form-group", "w-45", "input-fildcl"], ["for", "lname", 1, "control-label"], [1, ""], ["appearance", "outline", 1, "w-100"], [3, "formControl", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group w-45 input-fildcl", 4, "ngIf"], [1, "inpu-t"], ["maxlength", "50", "matInput", "", "placeholder", "Ex : Jack", 3, "formControl"], ["maxlength", "50", "type", "text", "matInput", "", "placeholder", "Ex : Rider", 3, "formControl"], ["matInput", "", "placeholder", "Ex : Jack", 3, "formControl"], ["type", "email", "matInput", "", "placeholder", "Ex : abc@gmail.com", 3, "formControl", "change"], [4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Ex : Engineer", 3, "formControl"], ["matInput", "", "placeholder", "Ex : 098645322", 3, "formControl", "keypress"], [1, "imageoverlap"], ["appearance", "outline", 1, "w-100", 3, "click"], ["matInput", "", "readonly", "", "placeholder", "Upload", 3, "formControl"], ["src", "assets/images/Upload.svg", 1, "upload-icon"], ["hidden", "", "accept", "image/x-png,image/jpeg", "type", "file", "file-model", "myFile", 3, "change"], ["fileInputProfile", ""], ["class", "division", 4, "ngIf"], ["formArray", "attributeArray", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "margin-y"], ["type", "submit", "mat-raised-button", "", "color", "primary"], [3, "value"], [4, "ngIf", "ngIfElse"], ["BUIDTemplate", ""], ["multiple", "", 3, "formControl", "selectionChange"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "division"], ["formArray", "attributeArray"], [1, "form-group", "w-45", 3, "formGroup"], ["elseTemplate", ""], [1, "input-fildcl"], ["matInput", "", "readonly", "", 3, "formControl", "placeholder"], ["fileInput", ""], ["type", "text", "matInput", "", 3, "formControl", "placeholder"]],
  template: function AddUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

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
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "User");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "form", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function AddUserComponent_Template_form_ngSubmit_19_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Role ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "mat-select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function AddUserComponent_Template_mat_select_selectionChange_27_listener() {
        return ctx.onRoleChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, AddUserComponent_mat_option_28_Template, 2, 2, "mat-option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, AddUserComponent_div_29_Template, 9, 2, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "First Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Last Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Native Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, " Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AddUserComponent_Template_input_change_57_listener() {
        return ctx.verifyEmail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, AddUserComponent_div_58_Template, 3, 2, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](59, AddUserComponent_mat_error_59_Template, 2, 1, "mat-error", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "Designation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "Primary Contact ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keypress", function AddUserComponent_Template_input_keypress_75_listener($event) {
        return ctx.keyPressAlphaNumerics($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "Secondary Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keypress", function AddUserComponent_Template_input_keypress_81_listener($event) {
        return ctx.keyPressAlphaNumerics($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "Profile Picture ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](86, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "mat-form-field", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddUserComponent_Template_mat_form_field_click_88_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r33);

        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](92);

        return _r4.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](89, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](90, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "input", 34, 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AddUserComponent_Template_input_change_91_listener($event) {
        return ctx.profileChangeEvent($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](93, AddUserComponent_div_93_Template, 4, 0, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](94, AddUserComponent_ng_container_94_Template, 5, 3, "ng-container", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.addForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["roleId"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.roleListArray);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.userType) != "Super Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["firstName"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["lastName"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["nativeName"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("is-invalid", ctx.addForm.get("emailId").invalid && ctx.addForm.get("emailId").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["emailId"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.addForm.get("emailId").invalid && ctx.addForm.get("emailId").touched || ctx.addForm.get("emailId").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formErrors == null ? null : ctx.formErrors.emailId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["designation"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["primaryContact"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["secondaryContact"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.addForm.controls["profilePicture"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.attributeArray && (ctx.attributeArray == null ? null : ctx.attributeArray.value == null ? null : ctx.attributeArray.value.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.attributeArray == null ? null : ctx.attributeArray.controls);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_8__.FormSubmitDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlDirective, _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_9__.ControlErrorsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError],
  styles: [".mat-option:before,   .mat-select:before {\n  position: absolute;\n  width: 20px;\n  height: 10px;\n  left: 120px;\n  content: \"\";\n}\n\n.main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n\n@media (max-width: 575px) {\n  .main-page[_ngcontent-%COMP%] {\n    padding: 5px;\n    box-shadow: none;\n    background-color: transparent;\n  }\n}\n\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 600;\n  font-size: 22px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .imageoverlap[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  padding-right: 40px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .dashed-line[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #ccc;\n  width: 35%;\n  margin-right: 15px;\n  margin-left: 15px;\n  height: 26px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .margin-y[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  margin-left: -1.3rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .image-icon[_ngcontent-%COMP%] {\n  margin-top: -4px;\n  width: 25px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: -22px;\n  cursor: pointer;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  top: 11px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  color: var(--color-secondary);\n  font-size: 14px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n  padding-left: 8rem;\n  padding-right: 8rem;\n  padding-top: 4rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n  width: 45%;\n  margin-bottom: 5px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n}\n\n@media (max-width: 1199.98px) {\n  .side_container[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0px;\n    padding-left: 0px;\n  }\n\n  .main-page[_ngcontent-%COMP%]   form.pt-5.row.justify-content-between.ng-untouched.ng-pristine.ng-invalid[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n    padding-right: 2rem;\n    padding-top: 30px !important;\n  }\n}\n\n.division[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.division[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.division[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 8px;\n}\n\n@media (max-width: 530px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    padding: 0 10px !important;\n    background-color: transparent;\n    border-radius: 0;\n    box-shadow: none;\n  }\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   form.pt-5.row.justify-content-between.ng-untouched.ng-pristine.ng-invalid[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n  }\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n    color: var(--color-secondary);\n    font-weight: 500;\n    font-size: 20px;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: inherit;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: var(--color-secondary);\n    font-weight: 500;\n    font-size: 16px;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 240px;\n    height: 48px;\n    box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n    border-radius: 10px;\n    margin-left: 5px;\n    background-color: var(--color-primary);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQVFBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBTUU7RUFKRjtJQUtJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQUFBO0VBSEY7QUFDRjs7QUFLSTs7RUFFRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFITjs7QUFPRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUFMSjs7QUFPSTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTE47O0FBUUk7RUFDRSxtQkFBQTtBQU5OOztBQVNJO0VBQ0UsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFQTjs7QUFTSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQVBOOztBQVNJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBUE47O0FBU0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQVBOOztBQVNJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQVBOOztBQVNJO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FBUE47O0FBV0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFUSjs7QUFZTTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQVZSOztBQWFNO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFYUjs7QUFjTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7QUFaUjs7QUFpQ0E7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUEvQko7O0VBb0NFO0lBQ0UsNEJBQUE7RUFqQ0o7RUFtQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsNEJBQUE7RUFqQ0o7QUFDRjs7QUFvQ0E7RUFDRSxnQkFBQTtBQWxDRjs7QUFtQ0U7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWpDSjs7QUFtQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFqQ0o7O0FBcUNBO0VBRUk7SUFDRSwwQkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQW5DSjtFQXFDSTtJQUNFLDRCQUFBO0VBbkNOO0VBc0NFO0lBQ0UsNkJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUFwQ0o7RUF3Q0U7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0VBdENGO0VBeUNJO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBdkNOO0VBMENJO0lBQ0UsNkJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUF4Q047RUEyQ0k7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGdEQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNDQUFBO0VBekNOO0FBQ0YiLCJmaWxlIjoiYWRkLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1vcHRpb246YmVmb3JlLFxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3Q6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGxlZnQ6IDEyMHB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLy8gbWl4aW4gc3RhcnRcclxuQG1peGluIGFsbC1pbnB1dC1zdHlsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm1haW4tcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtYmx1ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmJyZWFkY3J1bWIge1xyXG4gICAgJiBhLFxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi1kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiKDI2IDg4IDI0NiAvIDE3JSk7XHJcblxyXG4gICAgLmZvcm0taGFkZGluZyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlb3ZlcmxhcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhc2hlZC1saW5lIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjY2NjO1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luLXkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEuM3JlbTtcclxuICAgIH1cclxuICAgIC5pbWFnZS1pY29uIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuZXllLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgIHRvcDogLTIycHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC51cGxvYWQtaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IC0yOHB4O1xyXG4gICAgICB0b3A6IDExcHg7XHJcbiAgICB9XHJcbiAgICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhZGRpbmcteCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDRyZW07XHJcblxyXG4gICAgJiBmb3JtIHtcclxuICAgICAgLnctNDUge1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyByZXNwb25zaXZlIGNvZGUgc3RhcnRcclxuXHJcbi8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxufVxyXG5cclxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgbGVzcyB0aGFuIDc2OHB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIGxlc3MgdGhhbiA5OTJweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBsZXNzIHRoYW4gMTIwMHB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcbiAgLnNpZGVfY29udGFpbmVyIHtcclxuICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWFpbi1wYWdlIHtcclxuXHJcbiAgICBmb3JtLnB0LTUucm93Lmp1c3RpZnktY29udGVudC1iZXR3ZWVuLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy1pbnZhbGlke1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBhZGRpbmcteCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmRpdmlzaW9ue1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgc3BhbntcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgaHJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTMwcHgpIHtcclxuICAubWFpbi1wYWdlIHtcclxuICAgIC5tYWluLWRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgIGZvcm0ucHQtNS5yb3cuanVzdGlmeS1jb250ZW50LWJldHdlZW4ubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLWludmFsaWR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIC5mb3JtLWhhZGRpbmcge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAvLyBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgICAucGFkZGluZy14IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IGluaGVyaXQ7XHJcblxyXG4gICAgJiBmb3JtIHtcclxuICAgICAgLnctNDUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYmEoMjYsIDg4LCAyNDYsIDAuNDkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxufVxyXG4iXX0= */"]
});
AddUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__.AutoUnsubscribe)()], AddUserComponent);


/***/ }),

/***/ 555:
/*!****************************************************************************!*\
  !*** ./src/app/module/user/bulk-upload-user/bulk-upload-user.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulkUploadUserComponent": () => (/* binding */ BulkUploadUserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-auto-unsubscribe */ 3970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var src_app_service_business_unit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/business-unit.service */ 669);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/form-validation/directive/form-submit.directive */ 9855);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/form-validation/directive/control-errors.directive */ 6242);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 5590);



















function BulkUploadUserComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bu_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", bu_r3 == null ? null : bu_r3.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", bu_r3 == null ? null : bu_r3.name, " ");
} }
function BulkUploadUserComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " (Download Template) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Bulk upload is only for End-Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx_r2.downloadTemplateLink, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
let BulkUploadUserComponent = class BulkUploadUserComponent {
    constructor(router, fb, toastService, businessUnitService, userService, dataService) {
        this.router = router;
        this.fb = fb;
        this.toastService = toastService;
        this.businessUnitService = businessUnitService;
        this.userService = userService;
        this.dataService = dataService;
        this.downloadTemplateLink = '';
        this.searchFilterBU = null;
        this.addForm = this.fb.group({
            code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])],
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])],
            file_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])],
        });
        this.dataService.currentUser.subscribe((data) => {
            if (data) {
                this.currentUser = data;
            }
        });
    }
    ngOnInit() {
        if (this.currentUser && this.currentUser.businessUnitIds && this.currentUser.businessUnitIds[0]) {
            this.getSingleObjects();
        }
        else {
            this.getBUData();
        }
    }
    getSingleObjects() {
        // this.businessUnitService.getBusinessUnitByCode({ code: this.currentUser.businessUnitIds[0] }).subscribe((res) => {
        //   if (res.data) {
        //     this.buListArray = [res.data];
        //     if (this.buListArray.length > 0) {
        //       this.addForm.get('code').setValue(this.buListArray[0].code);
        //       this.onBUChange();
        //     }
        //   }
        // }, (error) => {
        //   this.buListArray = [];
        // })
        let filters = [];
        this.currentUser.businessUnitIds.map((data) => {
            filters.push({ "propertyName": "Code", "value": data, "caseSensitive": true });
        });
        this.searchFilterBU = { "conditionOperator": 1, "filters": filters };
        this.getBUData();
    }
    getBUData() {
        this.businessUnitService.getBusinessUnitList({
            "searchFilter": this.searchFilterBU,
            "page": 1,
            "pageSize": 0,
            "fields": null
        }).subscribe((res) => {
            if (res) {
                this.buListArray = res.data;
                if (this.buListArray.length > 0) {
                    this.addForm.get('code').setValue(this.buListArray[0].code);
                    this.onBUChange();
                }
            }
        });
    }
    fileChangeEvent(fileInputFile) {
        const reg = /(.*?)\.(csv|CSV)$/;
        if (!fileInputFile.target.files[0].name.match(reg)) {
            this.toastService.warning('Please select valid file');
            this.removeFile();
            return false;
        }
        else {
            this.removeFile();
            this.selectedFile = fileInputFile.target.files[0];
            this.addForm.get('file_name').setValue(this.selectedFile.name);
            this.addForm.get('file').setValue(this.selectedFile);
        }
    }
    removeFile() { this.selectedFile = null; }
    onBUChange() {
        this.buListArray.map((data) => {
            if (data.code == this.addForm.value.code) {
                this.downloadTemplateLink = 'https://ebcblob.blob.core.windows.net/devebc/User-bulkupload.csv';
                // data.csvTemplate;
            }
        });
    }
    submitForm() {
        if (this.addForm.valid) {
            const data = new FormData();
            data.append('file', this.selectedFile);
            // data.append('code', this.addForm.value.code);
            this.userService.fileUpload(data, { 'code': this.addForm.value.code }).subscribe((res) => {
                this.router.navigateByUrl('/user');
            });
        }
    }
    ngOnDestroy() {
    }
};
BulkUploadUserComponent.ɵfac = function BulkUploadUserComponent_Factory(t) { return new (t || BulkUploadUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_business_unit_service__WEBPACK_IMPORTED_MODULE_1__.BusinessUnitService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService)); };
BulkUploadUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BulkUploadUserComponent, selectors: [["app-bulk-upload-user"]], decls: 44, vars: 6, consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "0"], [1, "col", "add-brdcmb"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["routerLink", "/user"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "main-div", "padding-x"], [1, "d-flex", "justify-content-between"], [1, "form-hadding"], [1, "pt-5", "row", "justify-content-between", "form_upload", 3, "formGroup", "ngSubmit"], [1, "form-group", "w-45", "input-fildcl"], ["for", "lname", 1, "control-label"], [1, "inpu-t"], ["appearance", "outline", 1, "w-100"], ["placeholder", "Select Business Unit", 3, "disabled", "formControl", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "imageoverlap"], ["appearance", "outline", 1, "w-100", 3, "click"], ["src", "assets/images/image.svg", 1, "image-icon"], ["matInput", "", "readonly", "", "placeholder", "Upload", 3, "formControl"], ["src", "assets/images/Upload.svg", 1, "upload-icon"], ["hidden", "", "accept", ".csv", "type", "file", "file-model", "myFile", 3, "change"], ["fileInput", ""], ["class", "class", 4, "ngIf"], [1, "d-flex", "justify-content-end", "margin-y"], ["type", "submit", "mat-raised-button", "", "color", "primary"], [3, "value"], [1, "class"], ["mat-icon-button", "", 3, "href"], [1, "note"]], template: function BulkUploadUserComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function BulkUploadUserComponent_Template_form_ngSubmit_19_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Select Business Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function BulkUploadUserComponent_Template_mat_select_selectionChange_25_listener() { return ctx.onBUChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, BulkUploadUserComponent_mat_option_26_Template, 2, 2, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Select File");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BulkUploadUserComponent_Template_mat_form_field_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](38); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BulkUploadUserComponent_Template_input_change_37_listener($event) { return ctx.fileChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, BulkUploadUserComponent_div_39_Template, 8, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.currentUser.userType == "BU Admin")("formControl", ctx.addForm.controls["code"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.buListArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.addForm.controls["file_name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.addForm.controls["code"].valid && ctx.downloadTemplateLink);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_4__.FormSubmitDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_5__.ControlErrorsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon], styles: [".mat-option:before,   .mat-select:before {\n  position: absolute;\n  width: 20px;\n  height: 10px;\n  left: 120px;\n  content: \"\";\n}\n\n.image-icon[_ngcontent-%COMP%] {\n  margin-top: -4px;\n  width: 25px;\n}\n\n.imageoverlap[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  padding-right: 40px;\n}\n\n.upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -24px;\n  top: 11px;\n}\n\na[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n}\n\n.main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n\n@media (max-width: 575px) {\n  .main-page[_ngcontent-%COMP%] {\n    padding: 1rem 5px;\n    background-color: transparent;\n  }\n}\n\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n\n@media (max-width: 575px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border-radius: 0rem;\n    padding: 0 !important;\n    box-shadow: none;\n  }\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-weight: 500;\n  font-size: 15px;\n  background-color: var(--color-orange);\n  color: var(--color-orange-light);\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .orange-light[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-weight: 500;\n  font-size: 15px;\n  background-color: var(--color-orange-light);\n  color: var(--color-orange);\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 600;\n  font-size: 24px;\n  padding: 25px 0px 0px 0px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .dashed-line[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #ccc;\n  width: 35%;\n  margin-right: 15px;\n  margin-left: 15px;\n  height: 26px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .margin-y[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  top: 11px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  color: var(--color-secondary);\n  font-size: 14px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n  padding-left: 8rem;\n  padding-right: 8rem;\n}\n\n@media (max-width: 575px) {\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding-left: 0rem;\n    padding-right: 0rem;\n  }\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n  width: 45%;\n  margin-bottom: 25px;\n}\n\n@media (max-width: 575px) {\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n  color: var(--white);\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  background-color: var(--white);\n  color: var(--color-primary);\n  border: 2px solid var(--color-primary);\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n\n@media (max-width: 575.98px) {\n  .form_upload[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .side_container[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0px;\n    padding-left: 0px;\n  }\n\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n\na[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\n.note[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bGstdXBsb2FkLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBUUE7RUFDRSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsMkJBQUE7QUFMRjs7QUFRQTtFQUNFLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUxGOztBQU1FO0VBSkY7SUFLSSxpQkFBQTtJQUNBLDZCQUFBO0VBSEY7QUFDRjs7QUFLSTs7RUFFRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFITjs7QUFPRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUFMSjs7QUFNSTtFQUxGO0lBTUksNkJBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7RUFISjtBQUNGOztBQUlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0FBRk47O0FBS0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0EsMEJBQUE7QUFITjs7QUFLSTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFITjs7QUFNSTtFQUNFLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBSk47O0FBT0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBTE47O0FBUUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBTk47O0FBU0k7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QUFQTjs7QUFXRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFVSTtFQUhGO0lBSUksa0JBQUE7SUFDQSxtQkFBQTtFQVBKO0FBQ0Y7O0FBU007RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFQUjs7QUFRUTtFQUhGO0lBSUksV0FBQTtFQUxSO0FBQ0Y7O0FBUU07RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQU5SOztBQVNNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0FBUFI7O0FBVU07RUFDRSxnREFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtBQVJSOztBQVdNO0VBQ0UsMkJBQUE7QUFUUjs7QUFvQkE7RUFDRTtJQUNFLHNCQUFBO0VBakJGO0FBQ0Y7O0FBNkJBO0VBRUk7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VBNUJKOztFQWdDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUE3Qko7QUFDRjs7QUFpQ0E7RUFDRSx1QkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxVQUFBO0FBL0JGIiwiZmlsZSI6ImJ1bGstdXBsb2FkLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1vcHRpb246YmVmb3JlLFxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3Q6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGxlZnQ6IDEyMHB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5pbWFnZS1pY29uIHtcclxuICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4uaW1hZ2VvdmVybGFwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4udXBsb2FkLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTI0cHg7XHJcbiAgdG9wOiAxMXB4O1xyXG59XHJcbi8vIG1peGluIHN0YXJ0XHJcbkBtaXhpbiBhbGwtaW5wdXQtc3R5bGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLm1haW4tcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtYmx1ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gNXB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiB7XHJcbiAgICAmIGEsXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWluLWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2IoMjYgODggMjQ2IC8gMTclKTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHJlbTtcclxuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm9yYW5nZSB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3JhbmdlKTtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW9yYW5nZS1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLm9yYW5nZS1saWdodCB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3JhbmdlLWxpZ2h0KTtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW9yYW5nZSk7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1oYWRkaW5nIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgcGFkZGluZzogMjVweCAwcHggMHB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGFzaGVkLWxpbmUge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICNjY2M7XHJcbiAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGhlaWdodDogMjZweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFyZ2luLXkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51cGxvYWQtaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IC0yOHB4O1xyXG4gICAgICB0b3A6IDExcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWRkaW5nLXgge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogOHJlbTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDByZW07XHJcbiAgICB9XHJcbiAgICAmIGZvcm0ge1xyXG4gICAgICAudy00NSB7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYmEoMjYsIDg4LCAyNDYsIDAuNDkpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlciBhIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gcmVzcG9uc2l2ZSBjb2RlIHN0YXJ0XHJcblxyXG4vLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIGxlc3MgdGhhbiA1NzZweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgLmZvcm1fdXBsb2Fke1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIGxlc3MgdGhhbiA3NjhweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbn1cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCBsZXNzIHRoYW4gOTkycHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG59XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgbGVzcyB0aGFuIDEyMDBweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG4gIC5zaWRlX2NvbnRhaW5lciB7XHJcbiAgICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1haW4tcGFnZSB7XHJcbiAgICAucGFkZGluZy14IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub3Rle1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"] });
BulkUploadUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_0__.AutoUnsubscribe)()
], BulkUploadUserComponent);



/***/ }),

/***/ 8307:
/*!**************************************************************!*\
  !*** ./src/app/module/user/user-list/user-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListComponent": () => (/* binding */ UserListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_app_core_action_popup_action_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/action-popup/action-popup.component */ 5597);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_shared_permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/permission */ 9206);
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-auto-unsubscribe */ 3970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/pagination.service */ 762);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/common.service */ 5842);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var src_app_service_role_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/role.service */ 7749);
/* harmony import */ var _core_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/search/search.component */ 2448);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _core_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/pagination/pagination.component */ 4852);



















function UserListComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "+ File Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserListComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "+ Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserListComponent_div_19_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserListComponent_div_19_th_4_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r16.sortData("FullName"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserListComponent_div_19_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", (element_r18 == null ? null : element_r18.profilePicture) ? element_r18 == null ? null : element_r18.profilePicture : "https://ebcstorage2022.blob.core.windows.net/ebc/DefaultUser.png", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", element_r18 == null ? null : element_r18.name, " ");
} }
function UserListComponent_div_19_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserListComponent_div_19_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", element_r19 == null ? null : element_r19.emailId, " ");
} }
function UserListComponent_div_19_th_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserListComponent_div_19_th_10_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r20.sortData("Role"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserListComponent_div_19_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", element_r22 == null ? null : element_r22.roleId, " ");
} }
function UserListComponent_div_19_ng_container_12_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " BusinessUnitCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserListComponent_div_19_ng_container_12_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", element_r25 == null ? null : element_r25.businessUnitIds, " ");
} }
function UserListComponent_div_19_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UserListComponent_div_19_ng_container_12_th_1_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, UserListComponent_div_19_ng_container_12_td_2_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} }
function UserListComponent_div_19_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["edit", a1]; };
function UserListComponent_div_19_td_15_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](1, _c0, element_r26 == null ? null : element_r26.id));
} }
function UserListComponent_div_19_td_15_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserListComponent_div_19_td_15_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r32); const element_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r30.onDelete(element_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserListComponent_div_19_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UserListComponent_div_19_td_15_button_1_Template, 3, 3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, UserListComponent_div_19_td_15_button_2_Template, 3, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r11.permissionObject == null ? null : ctx_r11.permissionObject.includes(ctx_r11.permissionCode == null ? null : ctx_r11.permissionCode.updateUser));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r11.permissionObject == null ? null : ctx_r11.permissionObject.includes(ctx_r11.permissionCode == null ? null : ctx_r11.permissionCode.deleteUser));
} }
function UserListComponent_div_19_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 43);
} }
function UserListComponent_div_19_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 44);
} }
function UserListComponent_div_19_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " No data found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserListComponent_div_19_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "pagination", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onPageChange", function UserListComponent_div_19_div_19_Template_pagination_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r34.getPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("paginationList", ctx_r15.pagination)("selectedPageLimit", ctx_r15.currentPageLimit)("currentPage", ctx_r15.currentPage);
} }
function UserListComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](3, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, UserListComponent_div_19_th_4_Template, 3, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, UserListComponent_div_19_td_5_Template, 3, 2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](6, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, UserListComponent_div_19_th_7_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, UserListComponent_div_19_td_8_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](9, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, UserListComponent_div_19_th_10_Template, 3, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, UserListComponent_div_19_td_11_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, UserListComponent_div_19_ng_container_12_Template, 3, 0, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](13, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, UserListComponent_div_19_th_14_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, UserListComponent_div_19_td_15_Template, 3, 2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, UserListComponent_div_19_tr_16_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, UserListComponent_div_19_tr_17_Template, 1, 0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, UserListComponent_div_19_tr_18_Template, 3, 0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, UserListComponent_div_19_div_19_Template, 2, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r2.objectArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.userType) == "Tenant Admin" || (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.userType) == "BU Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r2.objectArray == null ? null : ctx_r2.objectArray.length) > 0);
} }
let UserListComponent = class UserListComponent {
    constructor(paginationService, userService, commonService, dialog, router, dataService, roleService) {
        this.paginationService = paginationService;
        this.userService = userService;
        this.commonService = commonService;
        this.dialog = dialog;
        this.router = router;
        this.dataService = dataService;
        this.roleService = roleService;
        this.filterColumns = ['FirstName', 'EmailId', 'Role', 'LastName', 'FullName', 'businessUnitIds'];
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.currentPageLimit = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultPageLimit;
        this.permissionObject = null;
        this.showPagination = false;
        this.permissionCode = src_app_shared_permission__WEBPACK_IMPORTED_MODULE_2__.permission;
        this.searchFilter = {};
        this.isShort = false;
        this.dataService.permission.subscribe((response) => {
            this.permissionObject = response;
        });
        this.dataService.currentUser.subscribe((res) => {
            var _a, _b;
            if (res) {
                this.currentUser = res;
                if (((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.userType) == 'Tenant Admin' || ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.userType) == 'BU Admin') {
                    this.displayedColumns = ['name', 'emailID', 'role', 'businessUnitIds', 'action'];
                }
                else {
                    this.displayedColumns = ['name', 'emailID', 'role', 'action'];
                }
            }
        });
    }
    ngOnInit() {
        // this.roleList();
        this.getObjects();
    }
    // roleList() {
    // }
    getObjects() {
        const params = {
            page: this.currentPage,
            pageSize: this.currentPageLimit
        };
        if (this.sortFieldName) {
            params.sortElement = {
                "propertyName": this.sortFieldName,
                "sortOrder": this.isShort ? 1 : -1
            };
        }
        if (this.searchText) {
            params.searchFilter = this.searchFilter;
        }
        this.userService.getUserList(params).subscribe((response) => {
            this.loadingState = false;
            if (response) {
                let temp = [];
                let data = response.data;
                let flag = 0;
                data.map((res) => {
                    var _a;
                    if ((res === null || res === void 0 ? void 0 : res.emailId) != ((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.emailId))
                        temp.push(res);
                    else
                        flag = 1;
                });
                this.objectArray = temp;
                this.showPagination = true;
                this.pagination = this.paginationService.getPager(response['recordCount'] + flag, this.currentPage, this.currentPageLimit);
            }
            else {
                this.objectArray = [];
                this.pagination = null;
            }
        }, (error) => {
            this.loadingState = false;
            this.objectArray = [];
            this.pagination = null;
        });
    }
    getPage(data) {
        this.currentPage = data.page;
        this.currentPageLimit = data.limit;
        this.getObjects();
    }
    searchObject(text) {
        this.searchText = text;
        this.currentPage = 1;
        let filters = [];
        for (let index = 0; index < this.filterColumns.length; index++) {
            const element = this.filterColumns[index];
            filters.push({
                "propertyName": element,
                "value": this.searchText,
                "caseSensitive": true,
                "operator": 5,
            });
        }
        this.searchFilter = { "conditionOperator": 1, filters: filters };
        this.getObjects();
    }
    onDelete(data) {
        const dialogRef = this.dialog.open(src_app_core_action_popup_action_popup_component__WEBPACK_IMPORTED_MODULE_0__.ActionPopupComponent, {
            width: '683px',
            height: '554px',
            data: Object.assign(Object.assign({}, data), { isDelete: true }),
            panelClass: 'delete-popup'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result && result.is_delete) {
                this.userService.deleteUser(result.id).subscribe((res) => {
                    this.getObjects();
                });
            }
        });
    }
    sortData(name) {
        // Frontend Short
        // this.commonService.isShort = !this.commonService.isShort
        // this.objectArray = this.commonService.sortData(name, this.objectArray);
        // Backend Short
        this.isShort = !this.isShort;
        this.sortFieldName = name;
        this.getObjects();
    }
    ngOnDestroy() { }
};
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_role_service__WEBPACK_IMPORTED_MODULE_8__.RoleService)); };
UserListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 20, vars: 4, consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "m-0", "mt-3"], [1, "col-md-3", "admin-brdcmb", "mt-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-0"], [1, "w-30"], [3, "placeholder", "text"], [1, "adbtn", "col"], ["mat-stroked-button", "", "routerLink", "add-bulk", "color", "primary", 4, "ngIf"], ["mat-raised-button", "", "routerLink", "add", "color", "primary", "class", "mr-5", 4, "ngIf"], [1, "col-lg-12", "mt-3"], ["class", "main-div", 4, "ngIf"], ["mat-stroked-button", "", "routerLink", "add-bulk", "color", "primary"], ["mat-raised-button", "", "routerLink", "add", "color", "primary", 1, "mr-5"], [1, "main-div"], [1, "admin-table"], ["mat-table", "", 1, "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "emailID"], ["matColumnDef", "role"], ["matColumnDef", "businessUnitIds", 4, "ngIf"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["class", "mt-3", 4, "ngIf"], ["mat-header-cell", ""], ["src", "assets/images/filter.svg", 3, "click"], ["mat-cell", ""], ["alt", "...", 1, "rounded-circle", 3, "src"], ["matColumnDef", "businessUnitIds"], ["type", "button", "class", "btn btn-green text-success", 3, "routerLink", 4, "ngIf"], ["type", "button", "class", "btn btn-red text-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-green", "text-success", 3, "routerLink"], ["type", "button", 1, "btn", "btn-red", "text-danger", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "9999", 1, "mat-cell"], [1, "mt-3"], [3, "paginationList", "selectedPageLimit", "currentPage", "onPageChange"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "search-box", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("text", function UserListComponent_Template_search_box_text_14_listener($event) { return ctx.searchObject($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, UserListComponent_button_16_Template, 3, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, UserListComponent_button_17_Template, 3, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, UserListComponent_div_19_Template, 20, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("placeholder", "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.bulkAddUser));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.addUser));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.userList));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _core_search_search_component__WEBPACK_IMPORTED_MODULE_9__.SearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatNoDataRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _core_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__.PaginationComponent], styles: [".main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%] {\n    padding: 1rem 0rem;\n  }\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%] {\n    padding: 0;\n    background-color: transparent;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    box-shadow: none;\n    background-color: transparent;\n    padding: 0px;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .admin-table[_ngcontent-%COMP%] {\n    overflow: auto;\n    margin-top: 20px;\n  }\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .admin-table[_ngcontent-%COMP%] {\n    overflow: auto;\n    margin-top: 20px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 70px;\n  border-radius: 1rem;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #edf0ff;\n  font-size: 18px;\n  font-weight: 600;\n  text-align: left;\n  color: #1a58f6;\n  border: none;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: sub;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 55px;\n  border-radius: 0.8rem 0rem 0rem 0.8rem;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 40px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 0;\n    text-align: center;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 50px;\n    text-align: justify;\n  }\n}\n@media (max-width: 320px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 50px;\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 55px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 5px;\n    text-align: justify;\n  }\n}\n@media (max-width: 320px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 5px;\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n  padding-left: 52px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding: 0;\n    text-align: justify;\n  }\n}\n@media (max-width: 575px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    min-width: 120px;\n    padding-left: 15px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 24px;\n  border-radius: 0 0.8rem 0.8rem 0;\n  text-align: center;\n  width: 15rem;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: none;\n  color: var(--color-secondary);\n  font-size: 16px;\n  line-height: 24px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 1px 6px 10px #969696;\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  margin-right: 16px;\n  margin-bottom: 10px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 55px;\n  border-radius: 0.8rem 0rem 0rem 0.8rem;\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding: 7px 0px 0px 15px;\n  }\n}\n@media (max-width: 1440px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding-left: 20px;\n  }\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding: 5px 20px;\n    text-align: center;\n  }\n}\n@media (max-width: 578px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 320px;\n    text-align: justify;\n    padding-left: 50px;\n  }\n}\n@media (max-width: 425px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 350px;\n  }\n}\n@media (max-width: 325px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 202px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 10px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding: 11px 0px 0px 0px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  padding-left: 55px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    padding: 11px 0px 0px 0px;\n    text-align: justify;\n  }\n}\n@media (max-width: 575px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    min-width: 120px;\n    padding-left: 15px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-radius: 0;\n  text-align: center;\n  padding: 5px 0px 0px;\n  min-width: 124px;\n}\n@media (max-width: 578px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    min-width: 120px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   button[_ngcontent-%COMP%] {\n  margin: 0px 5px;\n  border-radius: 10px;\n  line-height: 0;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn-green[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-green);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn-red[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-red);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn-yellow[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-yellow);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: var(--color-light-gray);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .pagin-sel[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--black);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .pagin-sel[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--color-light-gray);\n  border-radius: 5px;\n  padding: 5px;\n  margin-left: 5px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border: none !important;\n  background-color: orange;\n}\n.main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n  width: 18rem;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 20px;\n  }\n}\n@media (max-width: 991.98px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 15px 5px 15px 15px;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 40%;\n    padding: 15px 5px 15px 15px;\n  }\n}\n@media (max-width: 425px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 0px 15px 0px;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 0px 15px 0px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .admin-brdcmb[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.mr-5[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.adbtn[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 575.98px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n}\n@media (max-width: 798px) {\n  .adbtn[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 15px 7px 15px 0px;\n    display: flex;\n  }\n}\n@media (max-width: 1024px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 0px 7px 15px 0px;\n    width: 200px;\n    display: flex;\n  }\n}\n@media (max-width: 991.98px) {\n  .adbtn[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 15px 0px 0px 0px;\n    display: flex;\n  }\n}\n@media (max-width: 425px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 15px 0px 15px 0px;\n  }\n}\n@media (max-width: 375px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 15px 0px 15px 0px;\n    display: block;\n  }\n}\n@media (max-width: 320px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 15px 0px 15px 0px;\n    display: block;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n}\n@media (max-width: 578px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    height: 50px;\n  }\n}\n@media (max-width: 798px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 78%;\n    margin-right: 5px;\n  }\n}\n@media (max-width: 425px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 47%;\n    margin-left: 22px;\n  }\n}\n@media (max-width: 375px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n    margin-left: 0;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--white);\n  text-decoration: none;\n}\n.adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 5px;\n}\n@media (max-width: 578px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    height: 50px;\n  }\n}\n@media (max-width: 798px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 75%;\n    margin-right: 5px;\n  }\n}\n@media (max-width: 425px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n}\n@media (max-width: 375px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%] {\n  position: relative;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: none;\n  position: absolute;\n  z-index: 88888888;\n  top: -9px;\n  left: 15px;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid rgba(0, 0, 0, 0.72);\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:after {\n  content: \"Copy to Clipboard\";\n  display: none;\n  position: absolute;\n  z-index: 9999;\n  top: -45px;\n  left: -37px;\n  width: 114px;\n  height: 36px;\n  color: #fff;\n  font-size: 10px;\n  line-height: 36px;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.72);\n  border-radius: 3px;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:hover:before, .integration-checklist__copy-button[_ngcontent-%COMP%]:hover:after {\n  display: block;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:active, .integration-checklist__copy-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:active:after, .integration-checklist__copy-button[_ngcontent-%COMP%]:focus:after {\n  content: \"Copied!\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFMRjtJQU1JLGtCQUFBO0VBRUY7QUFDRjtBQURFO0VBUkY7SUFTSSxVQUFBO0lBQ0EsNkJBQUE7RUFJRjtBQUNGO0FBRkk7O0VBRUUsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSU47QUFBRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUFFSjtBQURJO0VBTEY7SUFNSSxnQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFQUlKO0FBQ0Y7QUFGTTtFQURGO0lBRUksY0FBQTtJQUNBLGdCQUFBO0VBS047QUFDRjtBQUpNO0VBTEY7SUFNSSxjQUFBO0lBQ0EsZ0JBQUE7RUFPTjtBQUNGO0FBSk07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFNUjtBQUpRO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBTVY7QUFMVTtFQUNFLG1CQUFBO0FBT1o7QUFKUTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7QUFNVjtBQUxVO0VBSEY7SUFJSSxrQkFBQTtJQUNBLG1CQUFBO0VBUVY7QUFDRjtBQVBVO0VBUEY7SUFRSSxrQkFBQTtJQUNBLG1CQUFBO0VBVVY7QUFDRjtBQVRVO0VBWEY7SUFZSSxlQUFBO0lBQ0Esa0JBQUE7RUFZVjtBQUNGO0FBWFU7RUFmRjtJQWdCSSxrQkFBQTtJQUNBLG1CQUFBO0VBY1Y7QUFDRjtBQWJXO0VBbkJIO0lBb0JLLGtCQUFBO0lBQ0EsbUJBQUE7RUFnQlg7QUFDRjtBQWRRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQWdCVjtBQWZVO0VBSEY7SUFJSSxrQkFBQTtJQUNBLG1CQUFBO0VBa0JWO0FBQ0Y7QUFqQlU7RUFQRjtJQVFJLGtCQUFBO0lBQ0EsbUJBQUE7RUFvQlY7QUFDRjtBQW5CVTtFQVhGO0lBWUksa0JBQUE7SUFDQSxtQkFBQTtFQXNCVjtBQUNGO0FBckJVO0VBZkY7SUFnQkksaUJBQUE7SUFDRSxtQkFBQTtFQXdCWjtBQUNGO0FBdkJXO0VBbkJIO0lBb0JLLGlCQUFBO0lBQ0UsbUJBQUE7RUEwQmI7QUFDRjtBQXhCUTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUEwQlY7QUF6QlU7RUFIRjtJQUlJLGtCQUFBO0lBQ0EsbUJBQUE7RUE0QlY7QUFDRjtBQTNCVTtFQVBGO0lBUUksa0JBQUE7SUFDQSxtQkFBQTtFQThCVjtBQUNGO0FBN0JVO0VBWEY7SUFZSSxVQUFBO0lBQ0EsbUJBQUE7RUFnQ1Y7QUFDRjtBQS9CVztFQWZIO0lBZ0JJLGdCQUFBO0lBQ0Esa0JBQUE7RUFrQ1Y7QUFDRjtBQWhDUTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFrQ1Y7QUEvQlE7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFpQ1Y7QUEvQlU7RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBaUNaO0FBN0JRO0VBQ0Usa0JBQUE7RUFDQSxzQ0FBQTtBQStCVjtBQTlCVTtFQUhGO0lBSUkseUJBQUE7RUFpQ1Y7QUFDRjtBQWhDVTtFQU5GO0lBT0ksa0JBQUE7RUFtQ1Y7QUFDRjtBQWxDVTtFQVRGO0lBVUksaUJBQUE7SUFDQSxrQkFBQTtFQXFDVjtBQUNGO0FBcENVO0VBYkY7SUFjSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUF1Q1Y7QUFDRjtBQXRDVTtFQWxCRjtJQW1CSSxnQkFBQTtFQXlDVjtBQUNGO0FBeENVO0VBckJGO0lBc0JJLGdCQUFBO0VBMkNWO0FBQ0Y7QUF6Q1E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBMkNWO0FBMUNVO0VBSEY7SUFJSSxrQkFBQTtJQUNBLG1CQUFBO0VBNkNWO0FBQ0Y7QUE1Q1U7RUFQRjtJQVFJLGtCQUFBO0lBQ0EsbUJBQUE7RUErQ1Y7QUFDRjtBQTlDVTtFQVhGO0lBWUkseUJBQUE7RUFpRFY7QUFDRjtBQTlDUTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFnRFY7QUEvQ1U7RUFIRjtJQUlJLGtCQUFBO0lBQ0EsbUJBQUE7RUFrRFY7QUFDRjtBQWpEVTtFQVBGO0lBUUksa0JBQUE7SUFDQSxtQkFBQTtFQW9EVjtBQUNGO0FBbkRVO0VBWEY7SUFZSSx5QkFBQTtJQUNBLG1CQUFBO0VBc0RWO0FBQ0Y7QUFyRFU7RUFmRjtJQWdCSSxnQkFBQTtJQUNBLGtCQUFBO0VBd0RWO0FBQ0Y7QUFyRFE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQXVEVjtBQXREVTtFQUxGO0lBTUksZ0JBQUE7RUF5RFY7QUFDRjtBQXhEVTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUEwRFo7QUF4RFU7RUFDRSx3Q0FBQTtBQTBEWjtBQXhEVTtFQUNFLHNDQUFBO0FBMERaO0FBeERVO0VBQ0UseUNBQUE7QUEwRFo7QUFyRE07RUFDRSxtQ0FBQTtBQXVEUjtBQWxETTtFQUNFLG1CQUFBO0FBb0RSO0FBbERNO0VBQ0UsWUFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFvRFI7QUE3Q1U7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FBK0NaO0FBeENFO0VBQ0UsWUFBQTtBQTBDSjtBQXpDSTtFQUZGO0lBR0ksV0FBQTtJQUNBLGlCQUFBO0VBNENKO0FBQ0Y7QUEzQ0k7RUFORjtJQU9JLFVBQUE7SUFDQSwyQkFBQTtFQThDSjtBQUNGO0FBN0NJO0VBVkY7SUFXSSxVQUFBO0lBQ0EsMkJBQUE7RUFnREo7QUFDRjtBQS9DSTtFQWRGO0lBZUksV0FBQTtJQUNBLDBCQUFBO0VBa0RKO0FBQ0Y7QUFqREk7RUFsQkY7SUFtQkksV0FBQTtJQUNBLDBCQUFBO0VBb0RKO0FBQ0Y7QUFqREU7RUFDRSxjQUFBO0FBbURKO0FBL0NBO0VBQ0UsaUJBQUE7QUFrREY7QUEvQ0E7RUFDRSxpQkFBQTtBQWtERjtBQWpERTtFQUZGO0lBR0ksaUJBQUE7RUFvREY7QUFDRjtBQW5ERTtFQUxGO0lBTUksZ0JBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7RUFzREY7QUFDRjtBQXJERTtFQVZGO0lBV0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQXdERjtBQUNGO0FBdkRFO0VBZkY7SUFnQkksZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLGFBQUE7RUEwREY7QUFDRjtBQXpERTtFQXBCRjtJQXFCSSwwQkFBQTtFQTRERjtBQUNGO0FBM0RFO0VBdkJGO0lBd0JJLDBCQUFBO0lBQ0EsY0FBQTtFQThERjtBQUNGO0FBN0RFO0VBM0JGO0lBNEJJLDBCQUFBO0lBQ0EsY0FBQTtFQWdFRjtBQUNGO0FBL0RFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtBQWlFSjtBQWhFSTtFQVBGO0lBUUksV0FBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0VBbUVKO0FBQ0Y7QUFsRUk7RUFaRjtJQWFJLFVBQUE7SUFDQSxpQkFBQTtFQXFFSjtBQUNGO0FBcEVJO0VBaEJGO0lBaUJJLFVBQUE7SUFDQSxpQkFBQTtFQXVFSjtBQUNGO0FBdEVJO0VBcEJGO0lBcUJJLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUF5RUo7QUFDRjtBQXhFSTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUEwRU47QUF0RUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXdFSjtBQXZFSTtFQU5GO0lBT0ksV0FBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0VBMEVKO0FBQ0Y7QUF6RUk7RUFYRjtJQVlJLFVBQUE7SUFDQSxpQkFBQTtFQTRFSjtBQUNGO0FBM0VJO0VBZkY7SUFnQkksVUFBQTtFQThFSjtBQUNGO0FBN0VJO0VBbEJGO0lBbUJJLFdBQUE7SUFDQSxtQkFBQTtFQWdGSjtBQUNGO0FBL0VJO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQWlGTjtBQTFEQTtFQUNFLGtCQUFBO0FBNkRGO0FBM0RFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSx5Q0FBQTtBQTRESjtBQXpERTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQkFBQTtFQUNBLGtCQUFBO0FBeURKO0FBdERFO0VBQ0Usc0JBQUE7QUF3REo7QUF0REk7RUFFRSxjQUFBO0FBdUROO0FBbkRFO0VBRUUsYUFBQTtBQW9ESjtBQWxESTtFQUNFLGtCQUFBO0FBb0ROIiwiZmlsZSI6InVzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWJsdWUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCl7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDByZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5icmVhZGNydW1iIHtcclxuICAgICYgYSxcclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1haW4tZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYigyNiA4OCAyNDYgLyAxNyUpO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5hZG1pbi10YWJsZSB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiB0YWJsZSB7XHJcbiAgICAgICYgdHIge1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG5cclxuICAgICAgICAmIHRoIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZGYwZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGNvbG9yOiAjMWE1OGY2O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgJiAubWF0LWljb24ge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNTVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbSAwcmVtIDByZW0gMC44cmVtO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmIHRoOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmIHRoOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgdGg6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjhyZW0gMC44cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gICAgICAgICAgJiBpbWcge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggNnB4IDEwcHggIzk2OTY5NjtcclxuICAgICAgICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtIDByZW0gMHJlbSAwLjhyZW07XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzk4cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDBweCAwcHggMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOjVweCAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc4cHgpIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzI1cHgpIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJiB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiB0ZDpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDBweCAwcHg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEyNHB4O1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3OHB4KSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWdyZWVuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tcmVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yLXJlZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLXllbGxvdyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb2xvci15ZWxsb3cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJiB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxpZ2h0LWdyYXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2luLXNlbCB7XHJcbiAgICAgICYgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICAgIH1cclxuICAgICAgLnNlbGVjdCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxpZ2h0LWdyYXkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgdWwge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIC5wYWdlLWxpbmsge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnctMzAge1xyXG4gICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7IFxyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDVweCAxNXB4IDE1cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzk4cHgpe1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDVweCAxNXB4IDE1cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWRtaW4tYnJkY21iIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1yLTUge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYWRidG4ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCl7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9IFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTVweCA3cHggMTVweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH0gXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICBwYWRkaW5nOiAwcHggN3B4IDE1cHggMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9IFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4IDBweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3OHB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGhlaWdodDogNTBweDs7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzk4cHgpe1xyXG4gICAgICB3aWR0aDogNzglO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCl7XHJcbiAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgJiBhIHtcclxuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3OHB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGhlaWdodDogNTBweDs7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzk4cHgpe1xyXG4gICAgICB3aWR0aDogNzUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCl7XHJcbiAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgICYgYSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gcmVzcG9uc2l2ZSBjb2RlIHN0YXJ0XHJcblxyXG4vLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIGxlc3MgdGhhbiA1NzZweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbn1cclxuXHJcbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIGxlc3MgdGhhbiA3NjhweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbn1cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCBsZXNzIHRoYW4gOTkycHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG59XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgbGVzcyB0aGFuIDEyMDBweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG59XHJcblxyXG4uaW50ZWdyYXRpb24tY2hlY2tsaXN0X19jb3B5LWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDg4ODg4ODg4O1xyXG4gICAgdG9wOiAtOXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG5cclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNzIpO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIkNvcHkgdG8gQ2xpcGJvYXJkXCI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHRvcDogLTQ1cHg7XHJcbiAgICBsZWZ0OiAtMzdweDtcclxuICAgIHdpZHRoOiAxMTRweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43Mik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcblxyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSxcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiQ29waWVkIVwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
UserListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_3__.AutoUnsubscribe)()
], UserListComponent);



/***/ }),

/***/ 7340:
/*!********************************************!*\
  !*** ./src/app/module/user/user.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ 3153);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/pagination/pagination.module */ 9304);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list/user-list.component */ 8307);
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-user/add-user.component */ 8600);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/search/search.module */ 4778);
/* harmony import */ var src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/permission */ 9206);
/* harmony import */ var _bulk_upload_user_bulk_upload_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bulk-upload-user/bulk-upload-user.component */ 555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);














const routes = [
    {
        path: "",
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__.UserListComponent,
        data: { title: 'User List', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.userList }
    },
    {
        path: "add",
        component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__.AddUserComponent,
        data: { title: 'Add User', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.addUser }
    },
    {
        path: 'add-bulk',
        component: _bulk_upload_user_bulk_upload_user_component__WEBPACK_IMPORTED_MODULE_8__.BulkUploadUserComponent,
        data: { title: 'Add Bulk User', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.addUser },
    },
    {
        path: 'edit/:id',
        component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__.AddUserComponent,
        data: { title: 'Update User', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.updateUser }
    }
];
class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_1__.FormValidationModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialExModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_2__.PaginationModule,
            src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_6__.SearchModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__.UserListComponent, _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__.AddUserComponent, _bulk_upload_user_bulk_upload_user_component__WEBPACK_IMPORTED_MODULE_8__.BulkUploadUserComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_1__.FormValidationModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialExModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_2__.PaginationModule,
        src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_6__.SearchModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_module_user_user_module_ts.js.map