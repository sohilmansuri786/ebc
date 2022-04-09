"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["src_app_module_cards_cards_module_ts"],{

/***/ 7183:
/*!***************************************************************!*\
  !*** ./src/app/module/cards/add-cards/add-cards.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCardsComponent": () => (/* binding */ AddCardsComponent)
/* harmony export */ });
/* harmony import */ var D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-auto-unsubscribe */ 3970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common.service */ 5842);
/* harmony import */ var src_app_service_business_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/business-unit.service */ 669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 3365);



















function AddCardsComponent_div_25_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bu_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", bu_r5 == null ? null : bu_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", bu_r5 == null ? null : bu_r5.name, " ");
  }
}

function AddCardsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Business Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddCardsComponent_div_25_Template_mat_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r6.selectedBUID = $event;
    })("selectionChange", function AddCardsComponent_div_25_Template_mat_select_selectionChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r8.onBUChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddCardsComponent_div_25_mat_option_6_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.currentUser.userType == "BU Admin")("ngModel", ctx_r0.selectedBUID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.buListArray);
  }
}

function AddCardsComponent_div_26_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddCardsComponent_div_26_ng_container_9_div_1_Template_mat_checkbox_change_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const i_r14 = restoredCtx.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return ctx_r15.onSelectTemplate($event, i_r14);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", i_r14 == ctx_r12.selectedTemplatedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r13 == null ? null : item_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "myFrame", i_r14, "");
  }
}

function AddCardsComponent_div_26_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddCardsComponent_div_26_ng_container_9_div_1_Template, 7, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r9.templatesListArray);
  }
}

function AddCardsComponent_div_26_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No Template Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddCardsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Card Templates");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "select card template");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddCardsComponent_div_26_ng_container_9_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AddCardsComponent_div_26_ng_template_10_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCardsComponent_div_26_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r17.submitFirstForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.templatesListArray == null ? null : ctx_r1.templatesListArray.length) > 0)("ngIfElse", _r10);
  }
}

function AddCardsComponent_div_27_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "QR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r21 < 9 ? "0" + (i_r21 + 1) : i_r21 + 1);
  }
}

function AddCardsComponent_div_27_ng_container_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCardsComponent_div_27_ng_container_10_ng_template_2_Template_img_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r27.removeCarouselItems(i_r21);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCardsComponent_div_27_ng_container_10_ng_template_2_Template_mat_form_field_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);

      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);

      return _r26.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddCardsComponent_div_27_ng_container_10_ng_template_2_Template_input_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r31.onCarouselImageUpload($event, i_r21);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r21 = ctx_r33.index;
    const item_r20 = ctx_r33.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r21 < 9 ? "0" + (i_r21 + 1) : i_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r20 == null ? null : item_r20.itemValue, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r20 == null ? null : item_r20.imagePathName);
  }
}

function AddCardsComponent_div_27_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddCardsComponent_div_27_ng_container_10_ng_container_1_Template, 10, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddCardsComponent_div_27_ng_container_10_ng_template_2_Template, 18, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const i_r21 = ctx.index;

    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r21 == 0)("ngIfElse", _r23);
  }
}

function AddCardsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Carousel Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AddCardsComponent_div_27_ng_container_10_Template, 4, 2, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCardsComponent_div_27_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r34.addCarouselItems();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCardsComponent_div_27_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r36.submitSecondForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.carouselItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (ctx_r2.carouselItems == null ? null : ctx_r2.carouselItems.length) > 3);
  }
}

function AddCardsComponent_div_28_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddCardsComponent_div_28_ng_container_14_div_1_Template_mat_checkbox_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43);
      const i_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r41.onCheckAttribute($event, i_r39);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const attribute_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](attribute_r38 == null ? null : attribute_r38.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", attribute_r38 == null ? null : attribute_r38.isEditable);
  }
}

function AddCardsComponent_div_28_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddCardsComponent_div_28_ng_container_14_div_1_Template, 6, 2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const attribute_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", attribute_r38 == null ? null : attribute_r38.isDynamic);
  }
}

function AddCardsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Card Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Attributes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Editable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AddCardsComponent_div_28_ng_container_14_Template, 2, 1, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCardsComponent_div_28_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r45.submitThirdForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.attributesList);
  }
}

const _c0 = function (a0, a1) {
  return {
    "orange": a0,
    "orange-light": a1
  };
};

let AddCardsComponent = class AddCardsComponent {
  constructor(router, activatedRoute, dataService, toastService, dialog, commonService, businessUnitService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.dataService = dataService;
    this.toastService = toastService;
    this.dialog = dialog;
    this.commonService = commonService;
    this.businessUnitService = businessUnitService;
    this.pageTitle = "Add";
    this.loadingState = false;
    this.showLoader = false;
    this.formErrors = {
      email: null,
      apierror: null
    };
    this.buListArray = [];
    this.templatesListArray = [];
    this.isEditing = false;
    this.editId = null;
    this.activeForm = 1;
    this.backgroundImages = [];
    this.carouselItems = [];
    this.attributesList = [];
    this.defaultHTML = '';

    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.isEditing = true;
      this.editId = this.activatedRoute.snapshot.paramMap.get('id');
      this.pageTitle = "Update";
    }

    this.dataService.currentUser.subscribe(data => {
      if (data) this.currentUser = data;
    });
  }

  ngOnInit() {
    this.getBUData();
  }

  getTemplateList() {
    this.businessUnitService.getTemplateList({
      "searchFilter": null,
      "page": 1,
      "pageSize": 0,
      "fields": null
    }).subscribe(res => {
      if (res.data && res.data.length > 0 && res.data[0]) {
        this.templatesListArray = res.data;
        this.setFrame();
        this.setActiveTemplate();
      }
    });
  }

  setActiveTemplate() {
    if (this.selectedBU && this.selectedBU.activeTemplateId) {
      this.templatesListArray.map((data, i) => {
        if (this.selectedBU.activeTemplateId == data.id) {
          this.selectedTemplatedIndex = i;
          this.selectedTemplated = this.templatesListArray[i];
        }
      });
    }
  }

  setFrame() {
    setTimeout(() => {
      this.templatesListArray.map((data, i) => {
        let a = document.getElementById("myFrame" + i);
        a.innerHTML = data.html;
      });
    }, 10);
  }

  getBUData() {
    this.businessUnitService.getBusinessUnitList({
      "searchFilter": null,
      "page": 1,
      "pageSize": 0,
      "fields": null
    }).subscribe(res => {
      if (res) {
        this.buListArray = res.data;
        this.getTemplateList();

        if (this.activatedRoute.snapshot.queryParams['bu']) {
          this.buListArray.map(data => {
            if (this.activatedRoute.snapshot.queryParams['bu'] == data.code) this.selectedBU = data;
          });
        } else this.selectedBU = this.buListArray[0];

        !this.selectedBU ? this.selectedBU = this.buListArray[0] : '';
        this.selectedBUID = this.selectedBU.id;

        if (this.isEditing) {
          this.getEditObject();
        }
      }
    });
  }

  onBUChange() {
    this.buListArray.map(data => {
      if (this.selectedBUID == data.id) {
        this.selectedBU = data;
      }
    });
  }

  getEditObject() {
    let param = {
      "searchFilter": {
        "conditionOperator": 0,
        "filters": [{
          "propertyName": "id",
          "value": this.editId,
          "caseSensitive": true
        }]
      },
      "page": 1,
      "pageSize": 0,
      "fields": null
    };
  }

  onBackgroundChange(fileInputFile, i) {
    var _this = this;

    return (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;

      if (!fileInputFile.target.files[0].name.match(reg)) {
        _this.toastService.error('Please select valid file');

        return false;
      } else {
        const data = new FormData();
        data.append('file', fileInputFile.target.files[0]);
        _this.backgroundImages[i] = Object.assign(Object.assign({}, _this.backgroundImages[i]), {
          imagePathName: fileInputFile.target.files[0].name
        });
        yield _this.commonService.fileUpload(data).then(res => {
          _this.backgroundImages[i] = Object.assign(Object.assign({}, _this.backgroundImages[i]), {
            imagePath: res.data
          });
        });
      }
    })();
  }

  onCarouselImageUpload(fileInputFile, i) {
    var _this2 = this;

    return (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;

      if (!fileInputFile.target.files[0].name.match(reg)) {
        _this2.toastService.error('Please select valid file');

        return false;
      } else {
        const data = new FormData();
        data.append('file', fileInputFile.target.files[0]);
        _this2.carouselItems[i] = Object.assign(Object.assign({}, _this2.carouselItems[i]), {
          imagePathName: fileInputFile.target.files[0].name
        });
        yield _this2.commonService.fileUpload(data).then(res => {
          _this2.carouselItems[i] = Object.assign(Object.assign({}, _this2.carouselItems[i]), {
            itemValue: res.data
          });
        });

        _this2.setHTMLcarouselItems();
      }
    })();
  }

  onCheckAttribute(event, i) {
    this.attributesList[i].isEditable = event.checked;
  }

  submitFirstForm() {
    if (!this.selectedBUID) {
      this.toastService.error('Please select Business Unit');
      return;
    }

    if (!this.selectedTemplated) {
      this.toastService.error('Please select Template');
      return;
    }

    this.activeForm = 2;
    this.attributesList = this.selectedTemplated.attributes;
    this.backgroundImages = [];

    if (this.selectedTemplated.backgroundImages) {
      this.selectedTemplated.backgroundImages.map(data => {
        this.backgroundImages.push(Object.assign(Object.assign({}, data), {
          imagePathName: ''
        }));
      });
    }

    this.carouselItems = [];

    if (this.selectedTemplated.carouselItems) {
      this.selectedTemplated.carouselItems.map(data => {
        this.carouselItems.push(Object.assign(Object.assign({}, data), {
          imagePathName: ''
        }));
      });
    }

    setTimeout(() => {
      let a = document.getElementById("selectedmyFrame2");
      a.innerHTML = this.selectedTemplated.html;
      this.setHTMLcarouselItems();
    }, 10); // test
    // this.test();
  }

  submitSecondForm() {
    this.activeForm = 3;
    setTimeout(() => {
      let b = document.getElementById("selectedmyFrame3");
      b.innerHTML = this.selectedTemplated.html;
      this.setHTMLcarouselItems();
    }, 10);
  }

  submitThirdForm() {
    let data;
    let template = this.selectedTemplated;
    delete template.createdDate;
    delete template.updatedDate;
    delete template.isSelect;
    delete template.isDeleted;
    delete template.attributes;
    delete template.backgroundImages;
    delete template.carouselItems;
    template['html2'] = template.html;
    template.html = '';
    data = Object.assign(Object.assign({}, this.selectedBU), {
      activeTemplateId: template.id,
      template: Object.assign(Object.assign({}, template), {
        attributes: this.attributesList,
        backgroundImages: this.backgroundImages,
        carouselItems: this.carouselItems
      })
    });
    if (template) if (this.isEditing) {
      this.businessUnitService.saveBusinessUnit({
        id: this.editId,
        data
      }).subscribe(response => {
        this.showLoader = false;

        if (response) {
          this.router.navigateByUrl('/cards');
        } else {
          response.error.map(obj => {
            if (obj.hasOwnProperty('email')) {
              this.formErrors['email'] = obj['email'];
            } else {
              this.formErrors['apierror'] = `* ${response.error}`;
            }
          });
        }
      }, error => {
        this.showLoader = false;
      });
    } else {
      this.businessUnitService.saveBusinessUnit(data).subscribe(response => {
        this.showLoader = false; // if (response) {

        this.dataService.pushId(this.selectedBU.code);
        this.router.navigateByUrl('/cards'); // } else {
        //   response.error.map(obj => {
        //     if (obj.hasOwnProperty('email')) {
        //       this.formErrors['email'] = obj['email'];
        //     } else {
        //       this.formErrors['apierror'] = `* ${response.error}`;
        //     }
        //   });
        // }
      }, error => {
        this.showLoader = false;
      });
    }
  }

  onSelectTemplate(event, ii) {
    if (event.checked) {
      this.selectedTemplatedIndex = ii;
      this.selectedTemplated = this.templatesListArray[ii];
    } else {
      this.selectedTemplatedIndex = '';
      this.selectedTemplated = '';
    }
  }

  checkStep(step = 1) {
    switch (step) {
      case 1:
        this.activeForm = 1;
        this.setFrame();
        break;

      case 2:
        this.submitFirstForm();
        break;

      case 3:
        {
          if (!this.selectedTemplated || !this.selectedBUID) {
            this.submitFirstForm();
            break;
          } else {
            this.submitSecondForm();
            break;
          }
        }
    }
  }

  addCarouselItems() {
    this.carouselItems.push({
      "itemName": `{CarouselItem${this.carouselItems.length + 1}}`,
      "itemValue": "https://ebcblob.blob.core.windows.net/ebc/NEC-Logo.png",
      "description": "string",
      "displayName": "Display Name",
      imagePathName: ''
    });
    this.setHTMLcarouselItems();
  }

  removeCarouselItems(i) {
    this.carouselItems.splice(i, 1);
    this.setHTMLcarouselItems();
  }

  ngOnDestroy() {} // test() {
  //   this.selectedTemplated['html'] = `<div class="card-sec" style="height: 700px;background-image: url(https://ebcblob.blob.core.windows.net/ebc/Background_Image.jpg);background-repeat: repeat;background-size: 100% 100%;padding: 20px;box-shadow: rgb(0 0 0 / 40%) 1px 0px 7px 2px;"> <div class="card_firs" style="height: 396px"> <div class="logo-sec d-flex" style="align-items: center;"> <img src="https://ebcblob.blob.core.windows.net/ebc/DefaultUser.png" class="img-fluid width-100" style="width: 80px;cursor: pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal"> <img src="https://ebcblob.blob.core.windows.net/ebc/NEC-Logo.png" class="img-fluid width-100" style="width: 100px;margin-left: 20px;"> </div> <!-- Profile Modal --> <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> <div class="modal-dialog modal-dialog-centered"> <div class="modal-content" style="text-align: center; background-color: transparent; border: none;"> <div class="modal-body"> <img src="https://ebcblob.blob.core.windows.net/ebc/DefaultUser.png" class="img-fluid width-100"> </div> </div> </div> </div> <!-- Profile Modal end --> <!-- QR code Modal start --> <div class="modal fade" id="QRcodeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> <div class="modal-dialog modal-dialog-centered"> <div class="modal-content" style="text-align: center; background-color: transparent; border: none;"> <div class="modal-body"> <img src="{QRCode}" class="img-fluid width-100"> </div> </div> </div> </div> <!-- QR code Modal end --> <div class="ncc-text text-center" style="margin-bottom: 20px;"> <h2 style="font-size: 20px;color: #3a3a3a;line-height: 22px;margin-top: 12px;color: #3a3a3a;margin-bottom: -12px;font-family: 'Poppins';"> John Doe</h2> <p style="margin-bottom: 0px;margin-top: 0px;"> </p> <p style="color: #000;line-height: 10px;font-size: 13px;margin-top: 15px;"> Software Developer </p> <p style="margin-bottom: 0px;color: #000;line-height: 15px;font-size: 13px;margin-bottom: 0;"> IoT BU </p> <h3 style="font-size: 15px;font-weight: bold;color: #000;font-family: 'Poppins';margin-top: 8px;"> Alphabet Inc. </h3> </div> {{test_test_test_test123}} </div> <div class="list-blue" style="margin-top: 25px;"> <ul style="list-style-type: none;padding: 0;"> <li style="display: flex;align-items: flex-start;margin-bottom: 10px;color: #fff;"><a href="https://maps.google.com/?q=1600 Amphitheatre Parkway Mountain View, CA 94043 USA" target="_blank" style="text-decoration: none;color: #fff;display:flex;word-break: break-word;line-height: 16px;align-items: center;"><img src="https://ebcblob.blob.core.windows.net/ebc/Orange-map.png" style="width: 30px;height: 31px;display: inline-block;margin-right: 8px;margin-top: 5px;border: 1px solid #fff;border-radius: 50%;" /> <span style="padding-top:8px;">1600 Amphitheatre Parkway Mountain View, CA 94043 USA</span></a></li> <li style="display: flex;align-items: flex-start;margin-bottom: 10px;color: #fff;"><a href="mailto:johnDoe@gmail.com" style="text-decoration: none;color: #fff;display: flex;word-break: break-word;line-height: 16px;align-items: center;"><img src="https://ebcblob.blob.core.windows.net/ebc/Orange-mail.png" style="width: 30px;height: 31px;display: inline-block;margin-right: 8px;margin-top: 5px;border: 1px solid #fff;border-radius: 50%;" /> <span style="padding-top:5px;">johnDoe@gmail.com</span></a></li> <li style="display: flex;align-items: flex-start;margin-bottom: 10px;color: #fff;"><a href="tel:111-222-3456" style="text-decoration: none;color: #fff;display:flex;word-break: break-word;line-height: 16px;align-items: center;"><img src="https://ebcblob.blob.core.windows.net/ebc/Orange-mobile.png" style="width: 30px;display: inline-block;margin-right: 8px;margin-top: 5px;border: 1px solid #fff;border-radius: 50%;" /> <span style="padding-top:5px;">111-222-3456</span></a></li> <li style="display: flex;align-items: flex-start:margin-bottom: 10px;color: #fff;"><a href="tel:444-555-7890" style="text-decoration: none;color: #fff;"><img src="https://ebcstorage2022.blob.core.windows.net/ebc/Phone.png" style="width: 30px;display: inline-block;margin-right: 8px;margin-top: 5px;border: 1px solid #fff;border-radius: 50%;"/><span>444-555-7890</span></a></li> </ul> </div> <div class="btn-main" style="margin-top: 20px;display: flex;align-items: center;justify-content: space-between;"> <button class="btn share_button" id="save_contact" style="background: #e6650a;border: 2px solid #fff;color: #fff;border-radius: 6px;" id="share_contact"> <img src="https://ebcblob.blob.core.windows.net/ebc/Save.png" style="width: 20px;" /> Save Contact</button> <button class="btn save_button" id="share_contact" style="background: #e6650a;border: 2px solid #fff;color: #fff;border-radius: 6px;" id="save_contact"><img src="https://ebcblob.blob.core.windows.net/ebc/Share.png" style="width: 20px;" /> Share</button> </div> </div>`;
  //   this.defaultHTML = this.selectedTemplated['html'];
  //   setTimeout(() => {
  //     let a: any = document.getElementById("selectedmyFrame2")
  //     a.innerHTML = this.selectedTemplated.html
  //   }, 10);
  // }


  setHTMLcarouselItems() {
    let mainData = "";
    let temp = this.defaultHTML;
    let first = `<div id="carouselExampleIn123" data-bs-interval="true" class="carousel slide slider-main" data-bs-ride="carousel"
style="margin-top: 25px;">
<div class="carousel-indicators" style="bottom: -45px;">`;
    let carousel_btn_DYNAMIC = ``;
    let close_div = `</div>`;
    let carousel_inner = `<div class="carousel-inner">`;
    let carousel_img_DYNAMIC = ``;
    let close_div2 = `</div>`;
    let prev_next_BTN = `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIn123"
    data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span
        class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIn123"
    data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span
        class="visually-hidden">Next</span>
</button>
</div>`; // process

    this.carouselItems.map((data, i) => {
      if (i == 0) {
        carousel_btn_DYNAMIC = `<button type="button" data-bs-target="#carouselExampleIn123" data-bs-slide-to="0" class="active"
      aria-current="true" aria-label="Slide 1" style="width: 10px;height: 10px;border: 1px solid #000;border-radius: 50%;">
      </button>`;
        carousel_img_DYNAMIC = `<div class="carousel-item active" style="text-align: center; "><img
        src="https://ebcblob.blob.core.windows.net/ebc/scan.png " class="img - fluid" alt="..."
        style="height: 105px;cursor:pointer; " data-bs-toggle="modal" data-bs-target="#QRcodeModal" /></div>`;
      } else {
        carousel_btn_DYNAMIC = carousel_btn_DYNAMIC + `<button type="button" data-bs-target="#carouselExampleIn123" data-bs-slide-to="0"
        aria-current="true" aria-label="Slide 1"
        style="width: 10px;height: 10px;border: 1px solid #000;border-radius: 50%;">
        </button>`;
        carousel_img_DYNAMIC = carousel_img_DYNAMIC + `<div class="carousel-item " style="text-align: center; "><img
        src="${data.itemValue}" class="img - fluid" alt="..."
        style="height: 105px;cursor:pointer; " data-bs-toggle="modal" data-bs-target="#QRcodeModal" /></div>`;
      }
    });
    mainData = first + carousel_btn_DYNAMIC + close_div + carousel_inner + carousel_img_DYNAMIC + close_div2 + prev_next_BTN;
    document.getElementById('carouselExampleIndicators').innerHTML = mainData; // let temp2 = temp.replace(`{{test_test_test_test123}}`, mainData);
    // setTimeout(() => {
    //   let a: any = document.getElementById("selectedmyFrame2")
    //   a.innerHTML = temp2;
    // }, 100);
  }

};

AddCardsComponent.ɵfac = function AddCardsComponent_Factory(t) {
  return new (t || AddCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_business_unit_service__WEBPACK_IMPORTED_MODULE_4__.BusinessUnitService));
};

AddCardsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AddCardsComponent,
  selectors: [["app-add-cards"]],
  decls: 29,
  vars: 17,
  consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "0"], [1, "col", "add-brdcmb"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["routerLink", "/cards"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "main-div"], [1, "d-flex", "justify-content-center", "padding-x"], ["mat-mini-fab", "", "aria-label", "", 3, "ngClass", "click"], [1, "dashed-line"], ["class", "card_heading", 4, "ngIf"], ["class", "placepolder", 4, "ngIf"], [1, "card_heading"], [1, "form-heading"], [1, "text_field"], ["appearance", "outline"], ["placeholder", "Select Business Unit", 3, "disabled", "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "placepolder"], [1, "row"], [1, "col-md-12", "heading-plac"], [1, "card_container"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "d-md-flex", "flex-wrap", "mt-5", "justify-content-md-between", "justify-content-center", "align-items-center"], [1, "text-md-right"], [1, "blue-btn", 3, "click"], ["class", "card_item", 4, "ngFor", "ngForOf"], [1, "card_item"], [1, "card_column"], [1, "card_checkbox"], [1, "container"], ["type", "checkbox", 3, "checked", "change"], [3, "id"], [1, "col-md-8"], [1, "form_uploadsection"], [1, "col-md-12"], [1, "heading"], [4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "qr_code"], [1, "code"], [1, "blue-btn", 3, "disabled", "click"], ["id", "selectedmyFrame2"], [1, "btn_card_next"], [1, "cards", "qr_code"], [1, "no"], ["src", "assets/images/cards/Qr_Code.svg"], [1, "cards"], [1, "cross"], ["src", "../../../../assets/images/cards/cross.png", 3, "click"], [1, "logo"], [2, "max-height", "100px", "width", "100%", 3, "src"], [1, "form_field"], [1, "txt_field"], [1, "form-group", "w-45", "input-fildcl"], [1, "imageoverlap"], ["appearance", "outline", 1, "w-100", 3, "click"], ["matInput", "", "readonly", "", "placeholder", "Upload", 3, "value"], ["src", "assets/images/Upload.svg", 1, "upload-icon"], ["hidden", "", "accept", "image/x-png,image/jpeg", "type", "file", "file-model", "myFile", 3, "change"], ["fileInputp", ""], [1, "card_template"], [1, "card_attr"], [1, "attr_container"], [1, "item", "heading"], ["id", "selectedmyFrame3"], ["class", "item", 4, "ngIf"], [1, "item"], [1, "checkbox"]],
  template: function AddCardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nav", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ol", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCardsComponent_Template_button_click_17_listener() {
        return ctx.checkStep(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCardsComponent_Template_button_click_20_listener() {
        return ctx.checkStep(2);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "02");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCardsComponent_Template_button_click_23_listener() {
        return ctx.checkStep(3);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "03");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AddCardsComponent_div_25_Template, 7, 3, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AddCardsComponent_div_26_Template, 17, 2, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, AddCardsComponent_div_27_Template, 24, 2, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AddCardsComponent_div_28_Template, 26, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, " Cards ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c0, ctx.activeForm == 1, ctx.activeForm != 1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](11, _c0, ctx.activeForm == 2, ctx.activeForm != 2));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c0, ctx.activeForm == 3, ctx.activeForm != 3));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeForm == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeForm == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeForm == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeForm == 3);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput],
  styles: [".main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n@media (max-width: 768px) {\n  .main-page[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border-radius: 0;\n    padding: 0;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  padding-bottom: 50px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n@media (max-width: 768px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border-radius: 0;\n    padding: 0;\n    padding-bottom: 30px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-weight: 500;\n  font-size: 15px;\n  background-color: var(--color-orange);\n  color: var(--color-orange-light);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .orange-light[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-weight: 500;\n  font-size: 15px;\n  background-color: var(--color-orange-light);\n  color: var(--color-orange);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .dashed-line[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #ccc;\n  width: 35%;\n  margin-right: 15px;\n  margin-left: 15px;\n  height: 26px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .margin-y[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  top: 11px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  color: var(--color-secondary);\n  font-size: 14px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%]   .form-heading[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 0;\n  margin-right: 50px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%] {\n  margin-top: 5em;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .heading-plac[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 22px;\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .heading-plac[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-secondary);\n  margin-bottom: 15px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  \n  \n  \n  \n  \n  \n  \n  \n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 0px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 14px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 18px;\n  width: 18px;\n  border: 1px solid #bbb;\n  background-color: #fff;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  border-color: #ccc;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n  border-color: #2196f3;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  left: 5px;\n  top: 1px;\n  width: 5.5px;\n  height: 12px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%] {\n  box-shadow: 0px 1px 7px grey;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 2px;\n  width: 2px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: move;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   .card-input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 5px;\n  border: none;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   .card-input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-size: 14px;\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .back-card[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .back-card[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   .card-input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 30px;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 63px;\n  border-radius: 1rem;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--color-table-heading);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n  color: var(--color-primary);\n  border: none;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: sub;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.8rem 0rem 0rem 0.8rem;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 24px;\n  border-radius: 0rem 0.8rem 0.8rem 0rem;\n  text-align: center;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: none;\n  color: var(--color-secondary);\n  font-size: 15px;\n  line-height: 24px;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 1px 6px 10px #969696;\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  margin-right: 16px;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.8rem 0rem 0rem 0.8rem;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-radius: 0rem 0.8rem 0.8rem 0rem;\n  text-align: center;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .max_length_dropdown[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 17px;\n  color: var(--color-secondary);\n  background-color: var(--color-light-gray);\n  border-color: var(--color-light-gray);\n  border-radius: 5px;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--color-light-gray);\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   .max_length_dropdown[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-color: var(--white);\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .card_dropdown[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .card_dropdown[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .card_dropdown[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--color-secondary);\n  margin-right: 30px;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .card_dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 17px;\n  color: var(--color-secondary);\n  background-color: var(--color-light-gray);\n  border-color: var(--color-light-gray);\n  border-radius: 5px;\n  padding: 5px 5px;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%]   .radio_group_label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%]   .radio_group_label[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%]   .radio_group_label[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%]   .radio_group_label[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%]   .radio_group_label[_ngcontent-%COMP%]     .mat-ripple-element {\n  background-color: transparent !important;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: var(--color-secondary);\n  border: 1px solid #efefef;\n  border-radius: 5px;\n  width: 132px;\n  padding: 7px 15px;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%] {\n  background-color: var(--color-cards);\n  border-radius: 10px;\n  position: relative;\n  height: 250px;\n  width: 400px;\n  margin: 0 auto;\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%]   .layout_left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -60px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%]   .layout_left[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  width: 1px;\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%]   .layout_left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 21px;\n  color: var(--color-primary);\n  transform: rotate(-90deg);\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%]   .layout_bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -50px;\n  width: 100%;\n  text-align: center;\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%]   .layout_bottom[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  height: 1px;\n  background-color: blue;\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%]   .layout_bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 21px;\n  color: var(--color-primary);\n  display: inline-block;\n  margin-top: 10px;\n}\n.main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-top: 30px;\n    text-align: left;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--color-secondary);\n  margin-bottom: 0;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .choose_color[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .choose_color[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .upload_image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .upload_image[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-wrapper .mat-form-field-flex {\n  align-items: center;\n}\n.main-page[_ngcontent-%COMP%]   .tabing[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.main-page[_ngcontent-%COMP%]   .tabing[_ngcontent-%COMP%]     .mat-tab-body-wrapper .mat-tab-body-content {\n  overflow: hidden;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .text_field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .text_field[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .text_field[_ngcontent-%COMP%]     .mat-form-field {\n    width: 100%;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n  padding-left: 8rem;\n  padding-right: 8rem;\n}\n@media (max-width: 768px) {\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n  width: 45%;\n  margin-bottom: 25px;\n}\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n}\n.main-page[_ngcontent-%COMP%]   .btn_next[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: end;\n}\n.btn_card_next[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n}\n.orange-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(255, 173, 102, 0.19);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-orange);\n  color: var(--white);\n  border: 2px solid var(--color-orange);\n  text-decoration: none;\n}\n@media (max-width: 576px) {\n  .orange-btn[_ngcontent-%COMP%] {\n    width: 150px;\n    margin-bottom: 20px;\n    margin-left: 0px;\n  }\n}\n.orange-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-orange);\n  background-color: var(--white);\n}\n@media (max-width: 576px) {\n  .text-md-right[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.blue-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n  text-decoration: none;\n}\n@media (max-width: 576px) {\n  .blue-btn[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    width: 150px;\n  }\n}\n.blue-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  background-color: var(--white);\n}\n.blue-line-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 5px;\n  color: var(--color-primary);\n  text-decoration: none;\n}\n@media (max-width: 576px) {\n  .blue-line-btn[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 150px;\n  }\n}\n.blue-line-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n}\n.card_container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-row-gap: 30px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 10px;\n}\n.card_container[_ngcontent-%COMP%]   .card_item[_ngcontent-%COMP%] {\n  flex: 325px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-bottom: 20px;\n}\n.imageoverlap[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  padding-right: 40px;\n}\n.move[_ngcontent-%COMP%] {\n  cursor: move;\n  position: absolute;\n  white-space: nowrap;\n}\n.round[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.is-bold[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n.is-italic[_ngcontent-%COMP%] {\n  font-style: italic !important;\n}\n.is-regular[_ngcontent-%COMP%] {\n  font-style: normal !important;\n}\n.is-underline[_ngcontent-%COMP%] {\n  text-decoration: underline !important;\n  -webkit-text-decoration-line: underline !important;\n          text-decoration-line: underline !important;\n}\n.image_resize[_ngcontent-%COMP%] {\n  resize: both;\n  overflow: hidden;\n  display: inline-block;\n}\n.image_resize[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n}\n.prev_front[_ngcontent-%COMP%]::-webkit-scrollbar, .prev_back[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 2px;\n}\n.select-temp[_ngcontent-%COMP%] {\n  border: red;\n  border-style: ridge;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  color: #102a6c;\n  font-weight: 500;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .btn_changebg[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 26px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .btn_changebg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #eb6d00;\n  box-shadow: 0px 4px 21px rgba(108, 123, 160, 0.27);\n  border-radius: 5px;\n  padding: 8px 12px;\n  font-family: Poppins;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: #ffffff;\n  border: none;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin-top: 44px;\n  margin-bottom: 18px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #102a6c;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 27px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  background: #f3f7ff;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 290px;\n  padding: 30px 13px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .cross[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .cross[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .no[_ngcontent-%COMP%] {\n  margin-bottom: 23px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .no[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: #eb6d00;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 59px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #102a6c;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .form_field[_ngcontent-%COMP%] {\n  margin-top: 39px;\n  width: 100%;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .form_field[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .form_field[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]:last-child {\n  margin-top: 10px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  height: 44.85px;\n  width: 100%;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex {\n  height: 38px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline {\n  height: 38px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline .mat-form-field-outline-start {\n  width: 13px !important;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n  left: 4px;\n  padding: 0;\n  top: 2px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label, .form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-input-element {\n  font-size: 12px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label-wrapper {\n  top: -1.04375em;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label-wrapper .mat-form-field-label {\n  height: 16px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  top: 2px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .btn_save_cancel[_ngcontent-%COMP%] {\n  margin-top: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 45px;\n  gap: 45px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .btn_save_cancel[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  background: #eb6d00;\n  box-shadow: 0px 4px 21px rgba(108, 123, 160, 0.27);\n  border-radius: 5px;\n  padding: 8px 12px;\n  font-family: Poppins;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: #ffffff;\n  border: none;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .btn_save_cancel[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #eb6d00;\n  border-radius: 5px;\n  padding: 8px 12px;\n  font-family: Poppins;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: #eb6d00;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card_template[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 33px;\n  color: #0b315e;\n  margin-bottom: 31px;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  color: #0b315e;\n  margin-bottom: 0;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #102a6c;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  \n  \n  \n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 28px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 14px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 18px;\n  width: 18px;\n  border: 1px solid #bbb;\n  background-color: #fff;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  border-color: #ccc;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #eb6d00;\n  border-color: #eb6d00;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  left: 5px;\n  top: 1px;\n  width: 5.5px;\n  height: 12px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.qr_code[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  height: 290px;\n  display: flex;\n  align-items: center;\n}\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n  opacity: 0.4;\n  cursor: not-allowed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFKRjtJQUtJLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VBR0Y7QUFDRjtBQURJOztFQUVFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUdOO0FBQ0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0RBQUE7QUFDSjtBQUFJO0VBTkY7SUFPSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLG9CQUFBO0VBR0o7QUFDRjtBQUZJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0FBSU47QUFESTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQkFBQTtBQUdOO0FBQUk7RUFDRSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUVOO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ047QUFFSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFBTjtBQUdJO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FBRE47QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUVNO0VBTEY7SUFNSSxzQkFBQTtJQUNBLHVCQUFBO0VBQ047QUFDRjtBQUFNO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFHSTtFQWdCRSxlQUFBO0FBaEJOO0FBRVE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUFWO0FB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QTtFQU9BLG9DQUFBO0VBS0Esa0NBQUE7QUF2R1Y7QUErQ1U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0FBN0NaO0FBaURVO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBL0NaO0FBbURVO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQWpEWjtBQXFEVTtFQUNFLGtCQUFBO0FBbkRaO0FBdURVO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQXJEWjtBQXlEVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUF2RFo7QUEyRFU7RUFDRSxjQUFBO0FBekRaO0FBNkRVO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSx3QkFBQTtBQTNEWjtBQW1FQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWhFRjtBQWtFQTs7RUFFRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQS9ERiIsImZpbGUiOiJhZGQtY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ibHVlKTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLmJyZWFkY3J1bWIge1xyXG4gICAgJiBhLFxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi1kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2IoMjYgODggMjQ2IC8gMTclKTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5vcmFuZ2Uge1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9yYW5nZSk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vcmFuZ2UtbGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcmFuZ2UtbGlnaHQge1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9yYW5nZS1saWdodCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vcmFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXNoZWQtbGluZSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgI2NjYztcclxuICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXJnaW4teSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVwbG9hZC1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogLTI4cHg7XHJcbiAgICAgIHRvcDogMTFweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmRfaGVhZGluZyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLWhlYWRpbmcge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxhY2VIb2xkZXIgc2NyZWVuIGNvZGUgc3RhcnRcclxuICAgIC5wbGFjZXBvbGRlciB7XHJcbiAgICAgIC5oZWFkaW5nLXBsYWMge1xyXG4gICAgICAgICYgaDIge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmIGg2IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIG1hcmdpbi10b3A6IDVlbTtcclxuXHJcbiAgICAgIC5jYXJkX2NvbHVtbiB7XHJcbiAgICAgICAgLmNhcmRfY2hlY2tib3gge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIC8qIFRoZSBjb250YWluZXIgKi9cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuICAgICAgICAgIC5jb250YWluZXIgaW5wdXQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuICAgICAgICAgIC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgICAgICAgIC5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4gICAgICAgICAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzIxOTZmMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xyXG4gICAgICAgICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbiAgICAgICAgICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuICAgICAgICAgIC5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1LjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZF9oZWFkaW5nIHtcclxuICAgICAgICAgICYgaDMge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2ZpbGVfZGV0YWlscyB7XHJcbiAgICAgICAgICAvLyB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLy8gb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCBncmV5O1xyXG4gICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9maWxlX2ltZyB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2FyZF9kZXRhaWxzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAuY2FyZC1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgJiBkaXYge1xyXG4gICAgICAgICAgICAgICAgJiBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmFjay1jYXJkIHtcclxuICAgICAgICAucHJvZmlsZV9kZXRhaWxzIHtcclxuICAgICAgICAgIC5jYXJkX2RldGFpbHMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC5jYXJkLWlucHV0IHtcclxuICAgICAgICAgICAgICAmIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAmIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmRfbWFpbiB7XHJcbiAgICAuY2FyZF9oZWFkaW5nIHtcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmIHRhYmxlIHtcclxuICAgICAgJiB0ciB7XHJcbiAgICAgICAgaGVpZ2h0OiA2M3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgJiB0aCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10YWJsZS1oZWFkaW5nKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAmIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgdGg6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtIDByZW0gMHJlbSAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgdGg6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHJlbSAwLjhyZW0gMC44cmVtIDByZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gICAgICAgICAgJiBpbWcge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggNnB4IDEwcHggIzk2OTY5NjtcclxuICAgICAgICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtIDByZW0gMHJlbSAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcmVtIDAuOHJlbSAwLjhyZW0gMHJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm1heF9sZW5ndGhfZHJvcGRvd24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ncmF5KTtcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWdyYXkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAmIHRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1saWdodC1ncmF5KTtcclxuICAgICAgICAubWF4X2xlbmd0aF9kcm9wZG93biB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmRfc2l6ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgLmNhcmRfZHJvcGRvd24ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtZ3JheSk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ncmF5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmN1c3RvbV9zaXplIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLnJhZGlvX2J1dHRuIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yYWRpb19ncm91cF9sYWJlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA6Om5nLWRlZXAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zaXplIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN1c3RvbV9zaXplIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHdpZHRoOiAxMzJweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDdweCAxNXB4O1xyXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmRfbGF5b3V0IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgLmxheW91dF9jb2xvciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcmRzKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAubGF5b3V0X2xlZnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubGF5b3V0X2JvdHRvbSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNyZF9jb2xvcnBja3Ige1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hvb3NlX2NvbG9yIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudXBsb2FkX2ltYWdlIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG4gICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICAgICAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50YWJpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIDo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gICAgICAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRleHRfZmllbGQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucGFkZGluZy14IHtcclxuICAgIHBhZGRpbmctbGVmdDogOHJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhyZW07XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgICYgZm9ybSB7XHJcbiAgICAgIC53LTQ1IHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYmEoMjYsIDg4LCAyNDYsIDAuNDkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmJ0bl9uZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgfVxyXG59XHJcbi5idG5fY2FyZF9uZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4vLyBidXR0b24gc3R5bGVcclxuLm9yYW5nZS1idG4ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYmEoMjU1LCAxNzMsIDEwMiwgMC4xOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vcmFuZ2UpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itb3JhbmdlKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb3JhbmdlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICB9XHJcbn1cclxuLnRleHQtbWQtcmlnaHQge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuLmJsdWUtYnRuIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIH1cclxufVxyXG5cclxuLmJsdWUtbGluZS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG59XHJcbi5jYXJkX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXJvdy1nYXA6IDMwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIC5jYXJkX2l0ZW0ge1xyXG4gICAgZmxleDogMzI1cHg7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW1hZ2VvdmVybGFwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcbi5tb3ZlIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmlzLWJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlzLWl0YWxpYyB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlzLXJlZ3VsYXIge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcbi5pcy11bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbWFnZV9yZXNpemUge1xyXG4gIHJlc2l6ZTogYm90aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG59XHJcbi5wcmV2X2Zyb250LFxyXG4ucHJldl9iYWNrIHtcclxuICAvLyBvdmVyZmxvdzogYXV0bztcclxuICAvLyBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgfVxyXG59XHJcbi5zZWxlY3QtdGVtcCB7XHJcbiAgYm9yZGVyOiByZWQ7XHJcbiAgYm9yZGVyLXN0eWxlOiByaWRnZTtcclxufVxyXG5cclxuLmZvcm1fdXBsb2Fkc2VjdGlvbiB7XHJcbiAgLnR4dF9maWVsZCB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjMTAyYTZjO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnRuX2NoYW5nZWJnIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWI2ZDAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiYSgxMDgsIDEyMywgMTYwLCAwLjI3KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oZWFkaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDQ0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogIzEwMmE2YztcclxuICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmRzIHtcclxuICAgIGJhY2tncm91bmQ6ICNmM2Y3ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgcGFkZGluZzogMzBweCAxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5jcm9zcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIC8vIEBtZWRpYSAobWF4LXdpZHRoOjc5OHB4KSB7XHJcbiAgICAgIC8vICAgbGVmdDogNTBweDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBAbWVkaWEgKG1heC13aWR0aDo1NzhweCkge1xyXG4gICAgICAvLyAgIGxlZnQ6IDE0OHB4O1xyXG4gICAgICAvLyB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubm8ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgY29sb3I6ICNlYjZkMDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb2RlIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTlweDtcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6ICMxMDJhNmM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvcm1fZmllbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzOXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLnR4dF9maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudHh0X2ZpZWxkIHtcclxuICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAmIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgICAgICAgIGhlaWdodDogNDQuODVweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgJiAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuXHJcbiAgICAgICAgICAgICYgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuXHJcbiAgICAgICAgICAgICAgJiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTNweCAhaW1wb3J0YW50OyAvLyBPdmVycmlkZSBNYXRlcmlhbCBpbi1saW5lIHN0eWxlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgdG9wOiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICYgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG4gICAgICAgICAgICAgICYgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICYgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMS4wNDM3NWVtO1xyXG5cclxuICAgICAgICAgICAgICAgICYgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudXBsb2FkLWljb24ge1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG5fc2F2ZV9jYW5jZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMzRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDQ1cHg7XHJcbiAgICAuYnRuX3NhdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWI2ZDAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiYSgxMDgsIDEyMywgMTYwLCAwLjI3KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnRuX2NhbmNlbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYjZkMDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICBjb2xvcjogI2ViNmQwMDtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJkX3RlbXBsYXRlIHtcclxuICAuaGVhZGluZyB7XHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgIGNvbG9yOiAjMGIzMTVlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZF9hdHRyIHtcclxuICAgIC5hdHRyX2NvbnRhaW5lciB7XHJcbiAgICAgIC5pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwYjMxNWU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgIGNvbG9yOiAjMTAyYTZjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hlY2tib3gge1xyXG4gICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuICAgICAgICAgIC5jb250YWluZXIgaW5wdXQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuICAgICAgICAgIC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgICAgICAgIC5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4gICAgICAgICAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjZkMDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ViNmQwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xyXG4gICAgICAgICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbiAgICAgICAgICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuICAgICAgICAgIC5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1LjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnFyX2NvZGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uOmRpc2FibGVkLFxyXG5idXR0b25bZGlzYWJsZWRdIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxufVxyXG4vLyAuY2FyZF9jb2x1bW4gOjpuZy1kZWVwIC5xcmNvZGVfbW9kYWx7XHJcbi8vICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gOjpuZy1kZWVwIC5tb2RhbC1iYWNrZHJvcHtcclxuLy8gICBkaXNwbGF5OiBub25lO1xyXG4vLyB9Il19 */"]
});
AddCardsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__.AutoUnsubscribe)()], AddCardsComponent);


/***/ }),

/***/ 9934:
/*!*****************************************************************!*\
  !*** ./src/app/module/cards/cards-list/cards-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsListComponent": () => (/* binding */ CardsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-auto-unsubscribe */ 3970);
/* harmony import */ var src_app_shared_permission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/permission */ 9206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_service_business_unit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/business-unit.service */ 669);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _core_loader_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/loader/loading/loading.component */ 9367);
















const _c0 = function (a0) { return { bu: a0 }; };
function CardsListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "+ Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c0, ctx_r0.selectedBUCode));
} }
function CardsListComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bu_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", bu_r5 == null ? null : bu_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", bu_r5 == null ? null : bu_r5.name, " ");
} }
function CardsListComponent_div_19_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Templates Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["/cards/edit", a1]; };
function CardsListComponent_div_19_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c1, item_r6 == null ? null : item_r6.id));
} }
function CardsListComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CardsListComponent_div_19_h1_3_Template, 2, 0, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CardsListComponent_div_19_div_5_Template, 7, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.loadingState && (ctx_r2.templateList == null ? null : ctx_r2.templateList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "mycardFrame", i_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r6 && item_r6.template && item_r6.template.html);
} }
function CardsListComponent_h1_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Select Business Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CardsListComponent_loading_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "loading");
} }
let CardsListComponent = class CardsListComponent {
    constructor(dialog, businessUnitService, dataService) {
        this.dialog = dialog;
        this.businessUnitService = businessUnitService;
        this.dataService = dataService;
        this.loadingState = false;
        this.objectArray = [];
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.buListArray = [];
        this.permissionCode = src_app_shared_permission__WEBPACK_IMPORTED_MODULE_1__.permission;
        this.templateList = [];
        this.searchFilterBU = null;
        this.dataService.currentUser.subscribe((data) => {
            if (data)
                this.currentUser = data;
        });
        {
            this.dataService.permission.subscribe((response) => {
                this.permissionObject = response;
            });
        }
        this.dataService.fetchId().subscribe(data => {
            this.idFromAdd = data;
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
        //     this.loadingState = false;
        //     this.buListArray = [res.data];
        //     if (this.buListArray.length > 0)
        //       this.selectedBUCode = this.buListArray[0].code;
        //     this.getObjects();
        //   }
        // }, (error) => {
        //   this.loadingState = false;
        //   this.buListArray = [];
        // })
        let filters = [];
        if (this.currentUser.hasOwnProperty('businessUnitIds') && this.currentUser.businessUnitIds && this.currentUser.businessUnitIds[0]) {
            this.currentUser.businessUnitIds.map((data) => {
                filters.push({ "propertyName": "Code", "value": data, "caseSensitive": true });
            });
        }
        else if (this.currentUser.hasOwnProperty('myBuCode')) {
            filters = [{ "propertyName": "Code", "value": this.currentUser.myBuCode, "caseSensitive": true }];
            this.searchFilterBU = { "conditionOperator": 1, "filters": filters };
        }
        this.getBUData();
    }
    getBUData() {
        this.loadingState = true;
        this.businessUnitService.getBusinessUnitList({
            "searchFilter": this.searchFilterBU,
            "page": 1,
            "pageSize": 0,
            "fields": null
        }).subscribe((res) => {
            this.loadingState = false;
            if (res) {
                this.buListArray = res.data;
                if (this.buListArray.length > 0)
                    if (this.idFromAdd) {
                        this.selectedBUCode = this.idFromAdd;
                    }
                    else {
                        this.selectedBUCode = this.buListArray[0].code;
                    }
                this.getObjects();
            }
        }, (err) => { this.loadingState = false; });
    }
    getObjects() {
        console.log(this.buListArray);
        this.buListArray.forEach(data => {
            if (data.code == this.selectedBUCode) {
                this.objectArray = [data];
                this.templateList = [];
                if (this.objectArray[0] && this.objectArray[0].hasOwnProperty('activeTemplateId') && this.objectArray[0]['activeTemplateId']) {
                    this.getTemplateList();
                }
            }
        });
        // this.loadingState = true;
        // const params: any = {
        //   "searchFilter": {
        //     "conditionOperator": 0,
        //     "filters": [
        //       {
        //         "propertyName": "Code",
        //         "value": this.selectedBUCode,
        //         "caseSensitive": true
        //       }
        //     ]
        //   },
        //   "page": 1,
        //   "pageSize": 0,
        //   "fields": null
        // };
        // this.dataId = this.selectedBUCode;
        // this.objectArray = [];
        // this.businessUnitService.getBusinessUnitList(params).subscribe((response) => {
        //   this.loadingState = false;
        //   if (response) {
        //     this.objectArray = response.data;
        //     if (this.objectArray[0] && this.objectArray[0].hasOwnProperty('activeTemplateId') && this.objectArray[0]['activeTemplateId']) {
        //       this.getTemplateList();
        //     }
        //   } else {
        //     this.objectArray = [];
        //   }
        // }, (error) => {
        //   this.loadingState = false;
        //   this.objectArray = [];
        // });
    }
    getTemplateList() {
        this.loadingState = true;
        this.businessUnitService.getTemplateList({
            "searchFilter": {
                "conditionOperator": 0,
                "filters": [
                    {
                        "propertyName": "id",
                        "operator": 0,
                        "value": this.objectArray[0]['activeTemplateId'],
                        "dataType": "string",
                        "caseSensitive": true
                    }
                ]
            },
            "page": 1,
            "pageSize": 0,
            "fields": null
        }).subscribe((res) => {
            this.loadingState = false;
            if (res.data && res.data.length > 0 && res.data[0]) {
                this.templatesListArray = res.data;
                this.setFrame();
            }
            else {
                this.templateList = [];
            }
        }, (err) => { this.loadingState = false; });
    }
    setFrame() {
        this.loadingState = true;
        setTimeout(() => {
            this.templateList = [];
            this.objectArray.map((data, i) => {
                if (data && data.template && data.template.html) {
                    let a = document.getElementById("mycardFrame" + i);
                    // a.innerHTML = data.template.html3;
                    a.innerHTML = this.templatesListArray[0]['html'];
                    this.templateList.push(i + 1);
                }
            });
        }, 500);
        this.loadingState = false;
    }
    onActiveChange(event, item) {
        var _a;
        item['isActive'] = (event.target.value == "true" ? true : false);
        item['updatedBy'] = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.emailId;
        this.businessUnitService.saveBusinessUnit(item).subscribe((res) => {
            // this.getObjects();
        });
    }
    ngOnDestroy() { }
};
CardsListComponent.ɵfac = function CardsListComponent_Factory(t) { return new (t || CardsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_business_unit_service__WEBPACK_IMPORTED_MODULE_2__.BusinessUnitService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService)); };
CardsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CardsListComponent, selectors: [["app-cards-list"]], decls: 22, vars: 6, consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "m-0", "mt-3"], [1, "col", "admin-brdcmb", "mt-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["class", "adbtn col", 4, "ngIf"], [1, "row"], [1, "form_field"], ["appearance", "outline"], ["placeholder", "Select Business Unit", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "mt-3"], ["class", "cards_container", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "adbtn", "col"], ["mat-raised-button", "", "color", "primary", "routerLink", "add", 1, "mr-5", 3, "queryParams"], [3, "value"], [1, "cards_container"], [1, "card_item"], [1, "card_column"], [3, "id"], ["class", "cards_status", 4, "ngIf"], [1, "cards_status"], [1, "status"], [1, "status_button"], [3, "routerLink"]], template: function CardsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CardsListComponent_div_12_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CardsListComponent_Template_mat_select_ngModelChange_16_listener($event) { return ctx.selectedBUCode = $event; })("selectionChange", function CardsListComponent_Template_mat_select_selectionChange_16_listener() { return ctx.getObjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CardsListComponent_mat_option_17_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CardsListComponent_div_19_Template, 6, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, CardsListComponent_h1_20_Template, 2, 0, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CardsListComponent_loading_21_Template, 1, 0, "loading", 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.addCard));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedBUCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.buListArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.objectArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.selectedBUCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loadingState);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _core_loader_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent], styles: [".main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n  min-height: 500px;\n}\n@media (max-width: 768px) {\n  .main-page[_ngcontent-%COMP%] {\n    border-radius: 0;\n    background-color: transparent;\n    padding: 0;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n.main-page[_ngcontent-%COMP%]   .form_field[_ngcontent-%COMP%] {\n  width: 18rem;\n}\n@media (max-width: 768px) {\n  .main-page[_ngcontent-%COMP%]   .form_field[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    width: 100%;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .form_field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main-page[_ngcontent-%COMP%]   .admin-brdcmb[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n@media (max-width: 768px) {\n  .main-page[_ngcontent-%COMP%]   .admin-brdcmb[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.adbtn[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  background-color: var(--color-primary);\n}\n@media (max-width: 768px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 40px;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--white);\n  text-decoration: none;\n}\n.adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 5px;\n}\n.adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.cards_container[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  padding: 40px;\n  box-shadow: var(--box-shadow);\n  border-radius: 20px;\n  min-height: 500px;\n  display: flex;\n}\n@media (max-width: 768px) {\n  .cards_container[_ngcontent-%COMP%] {\n    padding: 20px 0px 40px 0;\n    box-shadow: none;\n    border-radius: 0px;\n  }\n}\n.cards_container[_ngcontent-%COMP%]   .card_item[_ngcontent-%COMP%] {\n  flex: 325px;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .img_auto[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .img_auto[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 2px;\n  width: 2px;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .img_auto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 250px;\n}\n@media (max-width: 576px) {\n  .cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .img_auto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%] {\n  background-color: var(--color-cards);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  min-height: 170px;\n  padding: 20px;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 50%;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: 0;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: var(--color-secondary);\n  font-size: 12px;\n  line-height: 15px;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .date-cr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .date-cr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: var(--color-secondary);\n  font-size: 14px;\n  line-height: 21px;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 1199px) {\n  .cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_bg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 1199px) {\n  .cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_bg[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_bg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-black-lgt);\n  font-size: 13px;\n  line-height: 19px;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  font-feature-settings: ;\n  font-variant: JIS04;\n  padding: 0 15px;\n  border-radius: 10px;\n  border: none;\n  background-color: #fff3e0;\n  color: #f79824;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n  display: flex;\n  align-items: center;\n  color: #f79824;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_button[_ngcontent-%COMP%]   button.btn_edit[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-green);\n  margin-right: 30px;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_button[_ngcontent-%COMP%]   button.btn_ref[_ngcontent-%COMP%] {\n  background-color: var(--color-orange-light);\n  margin-right: 30px;\n}\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_button[_ngcontent-%COMP%]   button.btn_share[_ngcontent-%COMP%] {\n  background-color: var(--color-light-pink);\n}\n.status_dropdown_green[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: var(--btn-color-green);\n  color: var(--color-green-dark);\n  border-color: var(--btn-color-green);\n  padding: 6px 3px;\n  margin-left: 10px;\n  font-weight: 500;\n  font-size: 12px;\n}\n.status_dropdown_red[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: pink;\n  color: red;\n  border-color: pink;\n  padding: 6px 3px;\n  margin-left: 10px;\n  font-weight: 500;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQUU7RUFMRjtJQU1JLGdCQUFBO0lBQ0EsNkJBQUE7SUFDQSxVQUFBO0VBR0Y7QUFDRjtBQURJOztFQUVFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUdOO0FBQ0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0FBQ0o7QUFDRTtFQUNFLFlBQUE7QUFDSjtBQUFJO0VBRkY7SUFHSSxnQkFBQTtJQUNBLFdBQUE7RUFHSjtBQUNGO0FBRkk7RUFDRSxXQUFBO0FBSU47QUFERTtFQUNFLGNBQUE7QUFHSjtBQUZJO0VBRkY7SUFHSSxTQUFBO0VBS0o7QUFDRjtBQURBO0VBQ0UsaUJBQUE7QUFJRjtBQUhFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFLSjtBQUpJO0VBTkY7SUFPSSxZQUFBO0lBQ0EsWUFBQTtFQU9KO0FBQ0Y7QUFOSTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFRTjtBQUpFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFNSjtBQUxJO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQU9OO0FBRkE7RUFDRSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBS0Y7QUFIRTtFQVJGO0lBU0ksd0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBTUY7QUFDRjtBQUxFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBT0o7QUFBSTtFQUNFLGdCQUFBO0FBRU47QUFETTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBR1I7QUFETTtFQUNFLGFBQUE7QUFHUjtBQUZRO0VBRkY7SUFHSSxhQUFBO0VBS1I7QUFDRjtBQUZJO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUlOO0FBRlE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFJVjtBQURNO0VBQ0UsaUJBQUE7QUFHUjtBQUZRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBSVY7QUFIVTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLWjtBQUpZO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQU1kO0FBSlk7RUFDRSxnQkFBQTtBQU1kO0FBQUk7RUFDRSxnQkFBQTtBQUVOO0FBQU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUVSO0FBRFE7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR1Y7QUFBTTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFFUjtBQURRO0VBTEY7SUFNSSxzQkFBQTtJQUNBLHVCQUFBO0VBSVI7QUFDRjtBQUhRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBS1Y7QUFKVTtFQUhGO0lBSUksbUJBQUE7RUFPVjtBQUNGO0FBTlU7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVFaO0FBTFE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFPVjtBQU5VO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVFaO0FBUFk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVNkO0FBUFk7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0FBU2Q7QUFQWTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7QUFTZDtBQVBZO0VBQ0UseUNBQUE7QUFTZDtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0o7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUoiLCJmaWxlIjoiY2FyZHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWJsdWUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiB7XHJcbiAgICAmIGEsXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWluLWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2IoMjYgODggMjQ2IC8gMTclKTtcclxuICB9XHJcbiAgLmZvcm1fZmllbGQge1xyXG4gICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmFkbWluLWJyZGNtYiB7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRidG4ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiYSgyNiwgODgsIDI0NiwgMC40OSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAmIGEge1xyXG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAmIGEge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJkc19jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAxZnIpO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogMjBweCAwcHggNDBweCAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbiAgLmNhcmRfaXRlbSB7XHJcbiAgICBmbGV4OiAzMjVweDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuICAuY2FyZF9jb2x1bW4ge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgLy8gcGFkZGluZzogMTVweDtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItY2FyZHMpO1xyXG4gICAgLmltZ19hdXRvIHtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9maWxlX2RldGFpbHMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXJkcyk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAucHJvZmlsZV9pbWcge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkX2RldGFpbHMge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkc19zdGF0dXMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgLmRhdGUtY3Ige1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXR1c19iZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2stbGd0KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXR1c19idXR0b24ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogSklTMDQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2UwO1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y3OTgyNDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZjc5ODI0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYnRuX2VkaXQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYnRuX3JlZiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3JhbmdlLWxpZ2h0KTtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5idG5fc2hhcmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LXBpbmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5zdGF0dXNfZHJvcGRvd25fZ3JlZW4ge1xyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tY29sb3ItZ3JlZW4pO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLWRhcmspO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idG4tY29sb3ItZ3JlZW4pO1xyXG4gICAgcGFkZGluZzogNnB4IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuLnN0YXR1c19kcm9wZG93bl9yZWQge1xyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1jb2xvcjogcGluaztcclxuICAgIHBhZGRpbmc6IDZweCAzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
CardsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_0__.AutoUnsubscribe)()
], CardsListComponent);



/***/ }),

/***/ 2352:
/*!**********************************************!*\
  !*** ./src/app/module/cards/cards.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsModule": () => (/* binding */ CardsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ 3153);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/pagination/pagination.module */ 9304);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var _add_cards_add_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-cards/add-cards.component */ 7183);
/* harmony import */ var _cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards-list/cards-list.component */ 9934);
/* harmony import */ var src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/search/search.module */ 4778);
/* harmony import */ var src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/permission */ 9206);
/* harmony import */ var _edit_cards_edit_cards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-cards/edit-cards.component */ 4901);
/* harmony import */ var src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/loader/loader.module */ 1098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);















const routes = [
    {
        path: "",
        component: _cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_5__.CardsListComponent,
        data: { title: 'Cards List', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.cardList }
    },
    {
        path: "add",
        component: _add_cards_add_cards_component__WEBPACK_IMPORTED_MODULE_4__.AddCardsComponent,
        data: { title: 'Add card', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.addCard }
    },
    {
        path: 'edit/:id',
        component: _edit_cards_edit_cards_component__WEBPACK_IMPORTED_MODULE_8__.EditCardsComponent,
        data: { title: 'Update card', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.updateCard }
    }
];
class CardsModule {
}
CardsModule.ɵfac = function CardsModule_Factory(t) { return new (t || CardsModule)(); };
CardsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CardsModule });
CardsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_1__.FormValidationModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_2__.PaginationModule,
            src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_6__.SearchModule,
            src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__.LoaderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CardsModule, { declarations: [_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_5__.CardsListComponent, _add_cards_add_cards_component__WEBPACK_IMPORTED_MODULE_4__.AddCardsComponent, _edit_cards_edit_cards_component__WEBPACK_IMPORTED_MODULE_8__.EditCardsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_1__.FormValidationModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_2__.PaginationModule,
        src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_6__.SearchModule,
        src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__.LoaderModule] }); })();


/***/ }),

/***/ 4901:
/*!*****************************************************************!*\
  !*** ./src/app/module/cards/edit-cards/edit-cards.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditCardsComponent": () => (/* binding */ EditCardsComponent)
/* harmony export */ });
/* harmony import */ var D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-auto-unsubscribe */ 3970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common.service */ 5842);
/* harmony import */ var src_app_service_business_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/business-unit.service */ 669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);



















function EditCardsComponent_div_22_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bu_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", bu_r4 == null ? null : bu_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", bu_r4 == null ? null : bu_r4.name, " ");
  }
}

function EditCardsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Business Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditCardsComponent_div_22_Template_mat_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r5.selectedBUID = $event;
    })("selectionChange", function EditCardsComponent_div_22_Template_mat_select_selectionChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r7.onBUChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, EditCardsComponent_div_22_mat_option_6_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.selectedBUID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.buListArray);
  }
}

function EditCardsComponent_div_23_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "QR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r10 < 9 ? "0" + (i_r10 + 1) : i_r10 + 1);
  }
}

function EditCardsComponent_div_23_ng_container_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditCardsComponent_div_23_ng_container_10_ng_template_2_Template_img_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r16.removeCarouselItems(i_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditCardsComponent_div_23_ng_container_10_ng_template_2_Template_mat_form_field_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);

      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);

      return _r15.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EditCardsComponent_div_23_ng_container_10_ng_template_2_Template_input_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r20.onCarouselImageUpload($event, i_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r10 = ctx_r22.index;
    const item_r9 = ctx_r22.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r10 < 9 ? "0" + (i_r10 + 1) : i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r9 == null ? null : item_r9.itemValue, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r9 == null ? null : item_r9.imagePathName);
  }
}

function EditCardsComponent_div_23_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EditCardsComponent_div_23_ng_container_10_ng_container_1_Template, 10, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, EditCardsComponent_div_23_ng_container_10_ng_template_2_Template, 18, 3, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const i_r10 = ctx.index;

    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r10 == 0)("ngIfElse", _r12);
  }
}

function EditCardsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Carousel Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, EditCardsComponent_div_23_ng_container_10_Template, 4, 2, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditCardsComponent_div_23_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r23.addCarouselItems();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditCardsComponent_div_23_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r25.submitSecondForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.carouselItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (ctx_r1.carouselItems == null ? null : ctx_r1.carouselItems.length) > 3);
  }
}

function EditCardsComponent_div_24_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-checkbox", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EditCardsComponent_div_24_ng_container_14_div_1_Template_mat_checkbox_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const i_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r30.onCheckAttribute($event, i_r28);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const attribute_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](attribute_r27 == null ? null : attribute_r27.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", attribute_r27 == null ? null : attribute_r27.isEditable);
  }
}

function EditCardsComponent_div_24_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EditCardsComponent_div_24_ng_container_14_div_1_Template, 6, 2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const attribute_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", attribute_r27 == null ? null : attribute_r27.isDynamic);
  }
}

function EditCardsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Card Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Attributes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Editable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, EditCardsComponent_div_24_ng_container_14_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditCardsComponent_div_24_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r34.submitThirdForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.attributesList);
  }
}

const _c0 = function (a0, a1) {
  return {
    "orange": a0,
    "orange-light": a1
  };
};

let EditCardsComponent = class EditCardsComponent {
  constructor(router, activatedRoute, dataService, toastService, dialog, commonService, businessUnitService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.dataService = dataService;
    this.toastService = toastService;
    this.dialog = dialog;
    this.commonService = commonService;
    this.businessUnitService = businessUnitService;
    this.pageTitle = "Add";
    this.loadingState = false;
    this.showLoader = false;
    this.formErrors = {
      email: null,
      apierror: null
    };
    this.isEditing = false;
    this.editId = null;
    this.activeForm = 2;
    this.selectedTemplatedIndex = 0;
    this.backgroundImages = [];
    this.carouselItems = [];
    this.attributesList = [];
    this.defaultHTML = '';

    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.isEditing = true;
      this.editId = this.activatedRoute.snapshot.paramMap.get('id');
      this.pageTitle = "Update";
    }

    this.dataService.currentUser.subscribe(data => {
      if (data) this.currentUser = data;
    });
  }

  ngOnInit() {
    this.getSingleBUData();
  }

  getSingleBUData() {
    this.businessUnitService.getBusinessUnitById({
      id: this.editId
    }).subscribe(res => {
      this.selectedBU = res.data;
      this.selectedTemplated = this.selectedBU.template;
      this.selectedBUID = this.editId;
      this.carouselItems = this.selectedTemplated.carouselItems;
      this.submitFirstForm();
    });
  }

  onBackgroundChange(fileInputFile, i) {
    var _this = this;

    return (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;

      if (!fileInputFile.target.files[0].name.match(reg)) {
        _this.toastService.error('Please select valid file');

        return false;
      } else {
        const data = new FormData();
        data.append('file', fileInputFile.target.files[0]);
        _this.backgroundImages[i] = Object.assign(Object.assign({}, _this.backgroundImages[i]), {
          imagePathName: fileInputFile.target.files[0].name
        });
        yield _this.commonService.fileUpload(data).then(res => {
          _this.backgroundImages[i] = Object.assign(Object.assign({}, _this.backgroundImages[i]), {
            imagePath: res.data
          });
        });
      }
    })();
  }

  onCarouselImageUpload(fileInputFile, i) {
    var _this2 = this;

    return (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;

      if (!fileInputFile.target.files[0].name.match(reg)) {
        _this2.toastService.error('Please select valid file');

        return false;
      } else {
        const data = new FormData();
        data.append('file', fileInputFile.target.files[0]);
        _this2.carouselItems[i] = Object.assign(Object.assign({}, _this2.carouselItems[i]), {
          imagePathName: fileInputFile.target.files[0].name
        });
        yield _this2.commonService.fileUpload(data).then(res => {
          _this2.carouselItems[i] = Object.assign(Object.assign({}, _this2.carouselItems[i]), {
            itemValue: res.data
          });
        });

        _this2.setHTMLcarouselItems();
      }
    })();
  }

  onCheckAttribute(event, i) {
    this.attributesList[i].isEditable = event.checked;
  }

  submitFirstForm() {
    this.activeForm = 2;
    this.attributesList = this.selectedTemplated.attributes;
    this.backgroundImages = [];

    if (this.selectedTemplated.backgroundImages) {
      this.selectedTemplated.backgroundImages.map(data => {
        this.backgroundImages.push(Object.assign(Object.assign({}, data), {
          imagePathName: ''
        }));
      });
    }

    this.carouselItems = [];

    if (this.selectedTemplated.carouselItems) {
      this.selectedTemplated.carouselItems.map(data => {
        this.carouselItems.push(Object.assign(Object.assign({}, data), {
          imagePathName: ''
        }));
      });
    }

    setTimeout(() => {
      let a = document.getElementById("selectedmyFrame2");
      a.innerHTML = this.selectedTemplated.html2;
      this.setHTMLcarouselItems();
    }, 10); // test
    // this.test();
  }

  submitSecondForm() {
    this.activeForm = 3;
    setTimeout(() => {
      let b = document.getElementById("selectedmyFrame3");
      b.innerHTML = this.selectedTemplated.html2;
      this.setHTMLcarouselItems();
    }, 10);
  }

  submitThirdForm() {
    let data;
    let template = this.selectedTemplated;
    delete template.createdDate;
    delete template.updatedDate;
    delete template.isSelect;
    delete template.isDeleted;
    delete template.attributes;
    delete template.backgroundImages;
    delete template.carouselItems;
    template['html2'] = template.html2;
    template.html = '';
    data = Object.assign(Object.assign({}, this.selectedBU), {
      activeTemplateId: template.id,
      template: Object.assign(Object.assign({}, template), {
        attributes: this.attributesList,
        backgroundImages: this.backgroundImages,
        carouselItems: this.carouselItems
      })
    });
    if (template) if (this.isEditing) {
      this.businessUnitService.saveBusinessUnit(data).subscribe(response => {
        this.showLoader = false;

        if (response) {
          this.router.navigateByUrl('/cards');
        } else {
          response.error.map(obj => {
            if (obj.hasOwnProperty('email')) {
              this.formErrors['email'] = obj['email'];
            } else {
              this.formErrors['apierror'] = `* ${response.error}`;
            }
          });
        }
      }, error => {
        this.showLoader = false;
      });
    } else {
      this.businessUnitService.saveBusinessUnit(data).subscribe(response => {
        this.showLoader = false; // if (response) {

        this.router.navigateByUrl('/cards'); // } else {
        //   response.error.map(obj => {
        //     if (obj.hasOwnProperty('email')) {
        //       this.formErrors['email'] = obj['email'];
        //     } else {
        //       this.formErrors['apierror'] = `* ${response.error}`;
        //     }
        //   });
        // }
      }, error => {
        this.showLoader = false;
      });
    }
  }

  checkStep(step = 1) {
    switch (step) {
      case 2:
        this.submitFirstForm();
        break;

      case 3:
        {
          if (!this.selectedTemplated || !this.selectedBUID) {
            this.submitFirstForm();
            break;
          } else {
            this.submitSecondForm();
            break;
          }
        }
    }
  }

  addCarouselItems() {
    this.carouselItems.push({
      "itemName": `{CarouselItem${this.carouselItems.length + 1}}`,
      "itemValue": "https://ebcblob.blob.core.windows.net/ebc/NEC-Logo.png",
      "description": "string",
      "displayName": "Display Name",
      imagePathName: ''
    });
    this.setHTMLcarouselItems();
  }

  removeCarouselItems(i) {
    this.carouselItems.splice(i, 1);
    this.setHTMLcarouselItems();
  }

  ngOnDestroy() {}

  setHTMLcarouselItems() {
    let mainData = "";
    let temp = this.defaultHTML;
    let first = `<div id="carouselExampleIn123" data-bs-interval="true" class="carousel slide slider-main" data-bs-ride="carousel"
style="margin-top: 25px;">
<div class="carousel-indicators" style="bottom: -45px;">`;
    let carousel_btn_DYNAMIC = ``;
    let close_div = `</div>`;
    let carousel_inner = `<div class="carousel-inner">`;
    let carousel_img_DYNAMIC = ``;
    let close_div2 = `</div>`;
    let prev_next_BTN = `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIn123"
    data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span
        class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIn123"
    data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span
        class="visually-hidden">Next</span>
</button>
</div>`; // process

    this.carouselItems.map((data, i) => {
      if (i == 0) {
        carousel_btn_DYNAMIC = `<button type="button" data-bs-target="#carouselExampleIn123" data-bs-slide-to="0" class="active"
      aria-current="true" aria-label="Slide 1" style="width: 10px;height: 10px;border: 1px solid #000;border-radius: 50%;">
      </button>`;
        carousel_img_DYNAMIC = `<div class="carousel-item active" style="text-align: center; "><img
        src="https://ebcblob.blob.core.windows.net/ebc/scan.png " class="img - fluid" alt="..."
        style="height: 105px;cursor:pointer; " data-bs-toggle="modal" data-bs-target="#QRcodeModal" /></div>`;
      } else {
        carousel_btn_DYNAMIC = carousel_btn_DYNAMIC + `<button type="button" data-bs-target="#carouselExampleIn123" data-bs-slide-to="0"
        aria-current="true" aria-label="Slide 1"
        style="width: 10px;height: 10px;border: 1px solid #000;border-radius: 50%;">
        </button>`;
        carousel_img_DYNAMIC = carousel_img_DYNAMIC + `<div class="carousel-item " style="text-align: center; "><img
        src="${data.itemValue}" class="img - fluid" alt="..."
        style="height: 105px;cursor:pointer; " data-bs-toggle="modal" data-bs-target="#QRcodeModal" /></div>`;
      }
    });
    mainData = first + carousel_btn_DYNAMIC + close_div + carousel_inner + carousel_img_DYNAMIC + close_div2 + prev_next_BTN;
    document.getElementById('carouselExampleIndicators').innerHTML = mainData; // let temp2 = temp.replace(`{{test_test_test_test123}}`, mainData);
    // setTimeout(() => {
    //   let a: any = document.getElementById("selectedmyFrame2")
    //   a.innerHTML = temp2;
    // }, 100);
  }

};

EditCardsComponent.ɵfac = function EditCardsComponent_Factory(t) {
  return new (t || EditCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_business_unit_service__WEBPACK_IMPORTED_MODULE_4__.BusinessUnitService));
};

EditCardsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: EditCardsComponent,
  selectors: [["app-edit-cards"]],
  decls: 25,
  vars: 12,
  consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "0"], [1, "col", "add-brdcmb"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["routerLink", "/cards"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "main-div"], [1, "d-flex", "justify-content-center", "padding-x"], ["mat-mini-fab", "", "aria-label", "", 3, "ngClass", "click"], [1, "dashed-line"], ["class", "card_heading", 4, "ngIf"], ["class", "placepolder", 4, "ngIf"], [1, "card_heading"], [1, "form-heading"], [1, "text_field"], ["appearance", "outline"], ["placeholder", "Select Business Unit", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "placepolder"], [1, "row"], [1, "col-md-8"], [1, "form_uploadsection"], [1, "col-md-12"], [1, "heading"], [4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "qr_code"], [1, "code"], [1, "blue-btn", 3, "disabled", "click"], [1, "card_container"], [1, "card_item"], [1, "card_column"], ["id", "selectedmyFrame2"], [1, "btn_card_next"], [1, "blue-btn", 3, "click"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "cards", "qr_code"], [1, "no"], ["src", "assets/images/cards/Qr_Code.svg"], [1, "cards"], [1, "cross"], ["src", "../../../../assets/images/cards/cross.png", 3, "click"], [1, "logo"], [2, "height", "60px", "width", "65px", 3, "src"], [1, "form_field"], [1, "txt_field"], [1, "form-group", "w-45", "input-fildcl"], [1, ""], ["appearance", "outline", 1, "w-100", 3, "click"], ["matInput", "", "readonly", "", "placeholder", "Upload", 3, "value"], ["src", "assets/images/Upload.svg", 1, "upload-icon"], ["hidden", "", "accept", "image/x-png,image/jpeg", "type", "file", "file-model", "myFile", 3, "change"], ["fileInputp", ""], [1, "card_template"], [1, "card_attr"], [1, "attr_container"], [1, "item", "heading"], ["id", "selectedmyFrame3"], [1, "d-md-flex", "flex-wrap", "mt-5", "justify-content-md-between", "justify-content-center", "align-items-center"], [1, "text-md-right"], ["class", "item", 4, "ngIf"], [1, "item"], [1, "checkbox"], [1, "container"], ["type", "checkbox", 3, "checked", "change"]],
  template: function EditCardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nav", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ol", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditCardsComponent_Template_button_click_17_listener() {
        return ctx.checkStep(2);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "01");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditCardsComponent_Template_button_click_20_listener() {
        return ctx.checkStep(3);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "02");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, EditCardsComponent_div_22_Template, 7, 2, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, EditCardsComponent_div_23_Template, 24, 2, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, EditCardsComponent_div_24_Template, 26, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, " Cards ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c0, ctx.activeForm == 2, ctx.activeForm != 2));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](9, _c0, ctx.activeForm == 3, ctx.activeForm != 3));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeForm == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeForm == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeForm == 3);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckbox],
  styles: [".main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n@media (max-width: 768px) {\n  .main-page[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border-radius: 0;\n    padding: 0;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  padding-bottom: 50px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n@media (max-width: 768px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border-radius: 0;\n    padding: 0;\n    padding-bottom: 30px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-weight: 500;\n  font-size: 15px;\n  background-color: var(--color-orange);\n  color: var(--color-orange-light);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .orange-light[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-weight: 500;\n  font-size: 15px;\n  background-color: var(--color-orange-light);\n  color: var(--color-orange);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .dashed-line[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #ccc;\n  width: 35%;\n  margin-right: 15px;\n  margin-left: 15px;\n  height: 26px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .margin-y[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3px;\n  top: 11px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  color: var(--color-secondary);\n  font-size: 14px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%]   .form-heading[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 0;\n  margin-right: 50px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%] {\n  margin-top: 5em;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .heading-plac[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 22px;\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .heading-plac[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-secondary);\n  margin-bottom: 15px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  \n  \n  \n  \n  \n  \n  \n  \n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 0px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 14px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 18px;\n  width: 18px;\n  border: 1px solid #bbb;\n  background-color: #fff;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  border-color: #ccc;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n  border-color: #2196f3;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  left: 5px;\n  top: 1px;\n  width: 5.5px;\n  height: 12px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%] {\n  box-shadow: 0px 1px 7px grey;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 2px;\n  width: 2px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: move;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   .card-input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 5px;\n  border: none;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   .card-input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-size: 14px;\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .back-card[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .placepolder[_ngcontent-%COMP%]   .back-card[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   .card-input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 30px;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   .card_heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 63px;\n  border-radius: 1rem;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--color-table-heading);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n  color: var(--color-primary);\n  border: none;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: sub;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.8rem 0rem 0rem 0.8rem;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 24px;\n  border-radius: 0rem 0.8rem 0.8rem 0rem;\n  text-align: center;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: none;\n  color: var(--color-secondary);\n  font-size: 15px;\n  line-height: 24px;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 1px 6px 10px #969696;\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  margin-right: 16px;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.8rem 0rem 0rem 0.8rem;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-radius: 0rem 0.8rem 0.8rem 0rem;\n  text-align: center;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .max_length_dropdown[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 17px;\n  color: var(--color-secondary);\n  background-color: var(--color-light-gray);\n  border-color: var(--color-light-gray);\n  border-radius: 5px;\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--color-light-gray);\n}\n.main-page[_ngcontent-%COMP%]   .card_main[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   .max_length_dropdown[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-color: var(--white);\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .card_dropdown[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .card_dropdown[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .card_dropdown[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--color-secondary);\n  margin-right: 30px;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .card_dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 17px;\n  color: var(--color-secondary);\n  background-color: var(--color-light-gray);\n  border-color: var(--color-light-gray);\n  border-radius: 5px;\n  padding: 5px 5px;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%]   .radio_group_label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%]   .radio_group_label[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%]   .radio_group_label[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%]   .radio_group_label[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .radio_buttn[_ngcontent-%COMP%]   .radio_group_label[_ngcontent-%COMP%]     .mat-ripple-element {\n  background-color: transparent !important;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: var(--color-secondary);\n  border: 1px solid #efefef;\n  border-radius: 5px;\n  width: 132px;\n  padding: 7px 15px;\n}\n.main-page[_ngcontent-%COMP%]   .card_size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]   .custom_size[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%] {\n  background-color: var(--color-cards);\n  border-radius: 10px;\n  position: relative;\n  height: 250px;\n  width: 400px;\n  margin: 0 auto;\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%]   .layout_left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -60px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%]   .layout_left[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  width: 1px;\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%]   .layout_left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 21px;\n  color: var(--color-primary);\n  transform: rotate(-90deg);\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%]   .layout_bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -50px;\n  width: 100%;\n  text-align: center;\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%]   .layout_bottom[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  height: 1px;\n  background-color: blue;\n}\n.main-page[_ngcontent-%COMP%]   .card_layout[_ngcontent-%COMP%]   .layout_color[_ngcontent-%COMP%]   .layout_bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 21px;\n  color: var(--color-primary);\n  display: inline-block;\n  margin-top: 10px;\n}\n.main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-top: 30px;\n    text-align: left;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--color-secondary);\n  margin-bottom: 0;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .choose_color[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .choose_color[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .upload_image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--color-secondary);\n}\n.main-page[_ngcontent-%COMP%]   .crd_colorpckr[_ngcontent-%COMP%]   .upload_image[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-wrapper .mat-form-field-flex {\n  align-items: center;\n}\n.main-page[_ngcontent-%COMP%]   .tabing[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.main-page[_ngcontent-%COMP%]   .tabing[_ngcontent-%COMP%]     .mat-tab-body-wrapper .mat-tab-body-content {\n  overflow: hidden;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .text_field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .text_field[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .text_field[_ngcontent-%COMP%]     .mat-form-field {\n    width: 100%;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n  padding-left: 8rem;\n  padding-right: 8rem;\n}\n@media (max-width: 768px) {\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n  width: 45%;\n  margin-bottom: 25px;\n}\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n}\n.main-page[_ngcontent-%COMP%]   .btn_next[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: end;\n}\n.btn_card_next[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n}\n.orange-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(255, 173, 102, 0.19);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-orange);\n  color: var(--white);\n  border: 2px solid var(--color-orange);\n  text-decoration: none;\n}\n@media (max-width: 576px) {\n  .orange-btn[_ngcontent-%COMP%] {\n    width: 150px;\n    margin-bottom: 20px;\n    margin-left: 0px;\n  }\n}\n.orange-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-orange);\n  background-color: var(--white);\n}\n@media (max-width: 576px) {\n  .text-md-right[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.blue-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n  text-decoration: none;\n}\n@media (max-width: 576px) {\n  .blue-btn[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    width: 150px;\n  }\n}\n.blue-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  background-color: var(--white);\n}\n.blue-line-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 5px;\n  color: var(--color-primary);\n  text-decoration: none;\n}\n@media (max-width: 576px) {\n  .blue-line-btn[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 150px;\n  }\n}\n.blue-line-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n}\n.card_container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-row-gap: 30px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 10px;\n}\n.card_container[_ngcontent-%COMP%]   .card_item[_ngcontent-%COMP%] {\n  flex: 325px;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.move[_ngcontent-%COMP%] {\n  cursor: move;\n  position: absolute;\n  white-space: nowrap;\n}\n.round[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.is-bold[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n.is-italic[_ngcontent-%COMP%] {\n  font-style: italic !important;\n}\n.is-regular[_ngcontent-%COMP%] {\n  font-style: normal !important;\n}\n.is-underline[_ngcontent-%COMP%] {\n  text-decoration: underline !important;\n  -webkit-text-decoration-line: underline !important;\n          text-decoration-line: underline !important;\n}\n.image_resize[_ngcontent-%COMP%] {\n  resize: both;\n  overflow: hidden;\n  display: inline-block;\n}\n.image_resize[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n}\n.prev_front[_ngcontent-%COMP%]::-webkit-scrollbar, .prev_back[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 2px;\n}\n.select-temp[_ngcontent-%COMP%] {\n  border: red;\n  border-style: ridge;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  color: #102a6c;\n  font-weight: 500;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .btn_changebg[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 26px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .btn_changebg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #eb6d00;\n  box-shadow: 0px 4px 21px rgba(108, 123, 160, 0.27);\n  border-radius: 5px;\n  padding: 8px 12px;\n  font-family: Poppins;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: #ffffff;\n  border: none;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin-top: 44px;\n  margin-bottom: 18px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #102a6c;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 27px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  background: #f3f7ff;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 290px;\n  padding: 30px 13px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .cross[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .cross[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .no[_ngcontent-%COMP%] {\n  margin-bottom: 23px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .no[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: #eb6d00;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 59px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #102a6c;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 24px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .form_field[_ngcontent-%COMP%] {\n  margin-top: 49px;\n  width: 100%;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .form_field[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .form_field[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]:last-child {\n  margin-top: 10px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  height: 44.85px;\n  width: 100%;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex {\n  height: 38px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline {\n  height: 38px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline .mat-form-field-outline-start {\n  width: 13px !important;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n  left: 4px;\n  padding: 0;\n  top: 2px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label, .form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-input-element {\n  font-size: 12px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label-wrapper {\n  top: -1.04375em;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label-wrapper .mat-form-field-label {\n  height: 16px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .txt_field[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  top: 2px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .btn_save_cancel[_ngcontent-%COMP%] {\n  margin-top: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 45px;\n  gap: 45px;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .btn_save_cancel[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  background: #eb6d00;\n  box-shadow: 0px 4px 21px rgba(108, 123, 160, 0.27);\n  border-radius: 5px;\n  padding: 8px 12px;\n  font-family: Poppins;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: #ffffff;\n  border: none;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form_uploadsection[_ngcontent-%COMP%]   .btn_save_cancel[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #eb6d00;\n  border-radius: 5px;\n  padding: 8px 12px;\n  font-family: Poppins;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: #eb6d00;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card_template[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 33px;\n  color: #0b315e;\n  margin-bottom: 31px;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  color: #0b315e;\n  margin-bottom: 0;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #102a6c;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  \n  \n  \n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 28px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 14px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 18px;\n  width: 18px;\n  border: 1px solid #bbb;\n  background-color: #fff;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  border-color: #ccc;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #eb6d00;\n  border-color: #eb6d00;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.card_template[_ngcontent-%COMP%]   .card_attr[_ngcontent-%COMP%]   .attr_container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  left: 5px;\n  top: 1px;\n  width: 5.5px;\n  height: 12px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.qr_code[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  height: 290px;\n  display: flex;\n  align-items: center;\n}\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n  opacity: 0.4;\n  cursor: not-allowed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBSkY7SUFLSSw2QkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQUdGO0FBQ0Y7QUFESTs7RUFFRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFHTjtBQUNFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO0FBQ0o7QUFBSTtFQU5GO0lBT0ksZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxvQkFBQTtFQUdKO0FBQ0Y7QUFGSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtBQUlOO0FBREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0EsMEJBQUE7QUFHTjtBQUFJO0VBQ0UsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFTjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNOO0FBRUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQU47QUFHSTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtBQUROO0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRE47QUFFTTtFQUxGO0lBTUksc0JBQUE7SUFDQSx1QkFBQTtFQUNOO0FBQ0Y7QUFBTTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBR0k7RUFnQkUsZUFBQTtBQWhCTjtBQUVRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFBVjtB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QTtFQUtBLGtDQUFBO0FBM0dWO0FBbURVO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFHQSxpQkFBQTtBQWpEWjtBQXFEVTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQW5EWjtBQXVEVTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFyRFo7QUF5RFU7RUFDRSxrQkFBQTtBQXZEWjtBQTJEVTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUF6RFo7QUE2RFU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBM0RaO0FBK0RVO0VBQ0UsY0FBQTtBQTdEWjtBQWlFVTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBR0Esd0JBQUE7QUEvRFo7QUF1RUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFwRUY7QUFzRUE7O0VBRUUseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFuRUYiLCJmaWxlIjoiZWRpdC1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWJsdWUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiB7XHJcbiAgICAmIGEsXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWluLWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYigyNiA4OCAyNDYgLyAxNyUpO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLm9yYW5nZSB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3JhbmdlKTtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW9yYW5nZS1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLm9yYW5nZS1saWdodCB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3JhbmdlLWxpZ2h0KTtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW9yYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhc2hlZC1saW5lIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjY2NjO1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hcmdpbi15IHtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudXBsb2FkLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAzcHg7XHJcbiAgICAgIHRvcDogMTFweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmRfaGVhZGluZyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLWhlYWRpbmcge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxhY2VIb2xkZXIgc2NyZWVuIGNvZGUgc3RhcnRcclxuICAgIC5wbGFjZXBvbGRlciB7XHJcbiAgICAgIC5oZWFkaW5nLXBsYWMge1xyXG4gICAgICAgICYgaDIge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmIGg2IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIG1hcmdpbi10b3A6IDVlbTtcclxuXHJcbiAgICAgIC5jYXJkX2NvbHVtbiB7XHJcbiAgICAgICAgLmNhcmRfY2hlY2tib3gge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIC8qIFRoZSBjb250YWluZXIgKi9cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuICAgICAgICAgIC5jb250YWluZXIgaW5wdXQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuICAgICAgICAgIC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgICAgICAgIC5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4gICAgICAgICAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzIxOTZmMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xyXG4gICAgICAgICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbiAgICAgICAgICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuICAgICAgICAgIC5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1LjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZF9oZWFkaW5nIHtcclxuICAgICAgICAgICYgaDMge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2ZpbGVfZGV0YWlscyB7XHJcbiAgICAgICAgICAvLyB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLy8gb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCBncmV5O1xyXG4gICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9maWxlX2ltZyB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2FyZF9kZXRhaWxzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAuY2FyZC1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgJiBkaXYge1xyXG4gICAgICAgICAgICAgICAgJiBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmFjay1jYXJkIHtcclxuICAgICAgICAucHJvZmlsZV9kZXRhaWxzIHtcclxuICAgICAgICAgIC5jYXJkX2RldGFpbHMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC5jYXJkLWlucHV0IHtcclxuICAgICAgICAgICAgICAmIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAmIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmRfbWFpbiB7XHJcbiAgICAuY2FyZF9oZWFkaW5nIHtcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmIHRhYmxlIHtcclxuICAgICAgJiB0ciB7XHJcbiAgICAgICAgaGVpZ2h0OiA2M3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgJiB0aCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10YWJsZS1oZWFkaW5nKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAmIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgdGg6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtIDByZW0gMHJlbSAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgdGg6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHJlbSAwLjhyZW0gMC44cmVtIDByZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gICAgICAgICAgJiBpbWcge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggNnB4IDEwcHggIzk2OTY5NjtcclxuICAgICAgICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtIDByZW0gMHJlbSAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcmVtIDAuOHJlbSAwLjhyZW0gMHJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm1heF9sZW5ndGhfZHJvcGRvd24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ncmF5KTtcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWdyYXkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAmIHRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1saWdodC1ncmF5KTtcclxuICAgICAgICAubWF4X2xlbmd0aF9kcm9wZG93biB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmRfc2l6ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgLmNhcmRfZHJvcGRvd24ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtZ3JheSk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ncmF5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmN1c3RvbV9zaXplIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLnJhZGlvX2J1dHRuIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yYWRpb19ncm91cF9sYWJlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA6Om5nLWRlZXAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zaXplIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN1c3RvbV9zaXplIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHdpZHRoOiAxMzJweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDdweCAxNXB4O1xyXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmRfbGF5b3V0IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgLmxheW91dF9jb2xvciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcmRzKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAubGF5b3V0X2xlZnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubGF5b3V0X2JvdHRvbSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNyZF9jb2xvcnBja3Ige1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hvb3NlX2NvbG9yIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudXBsb2FkX2ltYWdlIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG4gICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICAgICAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50YWJpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIDo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gICAgICAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRleHRfZmllbGQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucGFkZGluZy14IHtcclxuICAgIHBhZGRpbmctbGVmdDogOHJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhyZW07XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgICYgZm9ybSB7XHJcbiAgICAgIC53LTQ1IHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYmEoMjYsIDg4LCAyNDYsIDAuNDkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmJ0bl9uZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgfVxyXG59XHJcbi5idG5fY2FyZF9uZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4vLyBidXR0b24gc3R5bGVcclxuLm9yYW5nZS1idG4ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYmEoMjU1LCAxNzMsIDEwMiwgMC4xOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vcmFuZ2UpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itb3JhbmdlKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb3JhbmdlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICB9XHJcbn1cclxuLnRleHQtbWQtcmlnaHQge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuLmJsdWUtYnRuIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIH1cclxufVxyXG5cclxuLmJsdWUtbGluZS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG59XHJcbi5jYXJkX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXJvdy1nYXA6IDMwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIC5jYXJkX2l0ZW0ge1xyXG4gICAgZmxleDogMzI1cHg7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcbn1cclxuLm1vdmUge1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4ucm91bmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaXMtYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxufVxyXG4uaXMtaXRhbGljIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcclxufVxyXG4uaXMtcmVndWxhciB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlzLXVuZGVybGluZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmltYWdlX3Jlc2l6ZSB7XHJcbiAgcmVzaXplOiBib3RoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbn1cclxuLnByZXZfZnJvbnQsXHJcbi5wcmV2X2JhY2sge1xyXG4gIC8vIG92ZXJmbG93OiBhdXRvO1xyXG4gIC8vIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICB9XHJcbn1cclxuLnNlbGVjdC10ZW1wIHtcclxuICBib3JkZXI6IHJlZDtcclxuICBib3JkZXItc3R5bGU6IHJpZGdlO1xyXG59XHJcblxyXG4uZm9ybV91cGxvYWRzZWN0aW9uIHtcclxuICAudHh0X2ZpZWxkIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgY29sb3I6ICMxMDJhNmM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG5fY2hhbmdlYmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjZweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlYjZkMDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDEwOCwgMTIzLCAxNjAsIDAuMjcpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogNDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICBoMyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAjMTAyYTZjO1xyXG4gICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZHMge1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjdmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjkwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmNyb3NzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6Nzk4cHgpIHtcclxuICAgICAgICAvLyBsZWZ0OiA1MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjU3OHB4KSB7XHJcbiAgICAgICAgLy8gbGVmdDogMTQ4cHg7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ubyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICBjb2xvcjogI2ViNmQwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvZGUge1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1OXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogIzEwMmE2YztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcm1fZmllbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0OXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLnR4dF9maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudHh0X2ZpZWxkIHtcclxuICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAmIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgICAgICAgIGhlaWdodDogNDQuODVweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgJiAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuXHJcbiAgICAgICAgICAgICYgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuXHJcbiAgICAgICAgICAgICAgJiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTNweCAhaW1wb3J0YW50OyAvLyBPdmVycmlkZSBNYXRlcmlhbCBpbi1saW5lIHN0eWxlXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAvLyAmIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XHJcbiAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgdG9wOiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICYgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG4gICAgICAgICAgICAgICYgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICYgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMS4wNDM3NWVtO1xyXG5cclxuICAgICAgICAgICAgICAgICYgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudXBsb2FkLWljb24ge1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG5fc2F2ZV9jYW5jZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMzRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDQ1cHg7XHJcbiAgICAuYnRuX3NhdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWI2ZDAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiYSgxMDgsIDEyMywgMTYwLCAwLjI3KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnRuX2NhbmNlbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYjZkMDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICBjb2xvcjogI2ViNmQwMDtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJkX3RlbXBsYXRlIHtcclxuICAuaGVhZGluZyB7XHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgIGNvbG9yOiAjMGIzMTVlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZF9hdHRyIHtcclxuICAgIC5hdHRyX2NvbnRhaW5lciB7XHJcbiAgICAgIC5pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwYjMxNWU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgIGNvbG9yOiAjMTAyYTZjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hlY2tib3gge1xyXG4gICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuICAgICAgICAgIC5jb250YWluZXIgaW5wdXQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuICAgICAgICAgIC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgICAgICAgIC5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4gICAgICAgICAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjZkMDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ViNmQwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xyXG4gICAgICAgICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbiAgICAgICAgICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuICAgICAgICAgIC5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1LjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnFyX2NvZGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uOmRpc2FibGVkLFxyXG5idXR0b25bZGlzYWJsZWRdIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
});
EditCardsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__.AutoUnsubscribe)()], EditCardsComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_module_cards_cards_module_ts.js.map