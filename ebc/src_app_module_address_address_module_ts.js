"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["src_app_module_address_address_module_ts"],{

/***/ 4994:
/*!*********************************************************************!*\
  !*** ./src/app/module/address/address-add/address-add.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressAddComponent": () => (/* binding */ AddressAddComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-auto-unsubscribe */ 3970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_address_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/address.service */ 9581);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var src_app_service_tenant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/tenant.service */ 8444);
/* harmony import */ var _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/form-validation/directive/form-submit.directive */ 9855);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/form-validation/directive/control-errors.directive */ 6242);
/* harmony import */ var _shared_directive_number_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directive/number.directive */ 3580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);















let AddressAddComponent = class AddressAddComponent {
    constructor(router, activatedRoute, fb, addressService, dataService, tenantService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.addressService = addressService;
        this.dataService = dataService;
        this.tenantService = tenantService;
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            email: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
            if (this.isEditing) {
                this.getEditObject();
            }
        }
        this.addForm = this.fb.group({
            addressName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])],
            building: [""],
            street: [""],
            locality: [""],
            postalcode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])],
            city: [""],
            state: [""],
            country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])],
            isPrimary: [false]
        });
        this.dataService.currentUser.subscribe((user) => { if (user)
            this.currentUser = user; });
        this.dataService.currentTenant.subscribe((tenant) => { if (tenant)
            this.currentTenant = tenant; });
    }
    ngOnInit() { }
    getEditObject() {
        this.addressService.getAddressById({ id: this.editId }).subscribe((response) => {
            if (response) {
                this.addForm.patchValue(response.data);
            }
            else {
                this.router.navigateByUrl('/address');
            }
        });
    }
    submitForm() {
        if (this.addForm.valid) {
            this.showLoader = true;
            if (this.isEditing) {
                this.addressService.saveAddress(Object.assign(Object.assign({}, this.addForm.value), { id: this.editId })).subscribe((response) => {
                    this.showLoader = false;
                    if (response) {
                        this.router.navigateByUrl('/address');
                        if (response.data.isPrimary) {
                            this.getTenantDetails(this.currentTenant.data.code);
                        }
                    }
                    else { }
                }, (error) => {
                    this.showLoader = false;
                });
            }
            else {
                this.addressService.saveAddress(Object.assign({}, this.addForm.value)).subscribe((response) => {
                    this.showLoader = false;
                    if (response) {
                        this.router.navigateByUrl('/address');
                    }
                    else { }
                }, (error) => {
                    this.showLoader = false;
                });
            }
        }
    }
    getTenantDetails(tenantCode) {
        this.tenantService.getTenantByCodeEndUser({
            "code": tenantCode
        }).subscribe((res) => {
            if (res && res.data)
                this.dataService.currentTenantSubject.next(res);
        });
    }
    ngOnDestroy() { }
};
AddressAddComponent.ɵfac = function AddressAddComponent_Factory(t) { return new (t || AddressAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_service_address_service__WEBPACK_IMPORTED_MODULE_1__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_service_tenant_service__WEBPACK_IMPORTED_MODULE_3__.TenantService)); };
AddressAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AddressAddComponent, selectors: [["app-address-add"]], decls: 70, vars: 10, consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "0"], [1, "col", "add-brdcmb"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["routerLink", "/address", "aria-current", "page", 1, "breadcrumb-item", "active"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "main-div", "padding-x"], [1, "d-flex", "justify-content-between"], [1, "form-hadding"], [1, "pt-5", "row", "justify-content-between", 3, "formGroup", "ngSubmit"], [1, "form-group", "w-45", "input-fildcl"], ["for", "lname", 1, "control-label"], [1, "inpu-t"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "placeholder", "Ex : Primary", 3, "formControl"], [1, ""], ["matInput", "", "placeholder", " Ex : Street", 3, "formControl"], ["matInput", "", "placeholder", " Ex : Building", 3, "formControl"], ["matInput", "", "number", "", "placeholder", " Ex : 123456", 3, "formControl"], ["matInput", "", "placeholder", " Ex : City", 3, "formControl"], ["matInput", "", "placeholder", " Ex : State", 3, "formControl"], ["matInput", "", "placeholder", " Ex : india", 3, "formControl"], [1, "d-flex", "justify-content-center", "margin-y"], ["type", "submit", "mat-raised-button", "", "color", "primary"]], template: function AddressAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function AddressAddComponent_Template_form_ngSubmit_18_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Address Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Postalcode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.isEditing ? "Update" : "Add", " Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.isEditing ? "Update" : "Add", " Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.addForm.controls["addressName"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.addForm.controls["street"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.addForm.controls["building"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.addForm.controls["postalcode"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.addForm.controls["city"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.addForm.controls["state"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.addForm.controls["country"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_4__.FormSubmitDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_5__.ControlErrorsDirective, _shared_directive_number_directive__WEBPACK_IMPORTED_MODULE_6__.NumberDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton], styles: [".mat-option:before,   .mat-select:before {\n  position: absolute;\n  width: 20px;\n  height: 10px;\n  left: 120px;\n  content: \"\";\n}\n\n.main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 600;\n  font-size: 22px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .imageoverlap[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  padding-right: 40px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .dashed-line[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #ccc;\n  width: 35%;\n  margin-right: 15px;\n  margin-left: 15px;\n  height: 26px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .margin-y[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .image-icon[_ngcontent-%COMP%] {\n  margin-top: -4px;\n  width: 25px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  top: 11px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  top: 11px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  color: var(--color-secondary);\n  font-size: 14px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n  padding-left: 8rem;\n  padding-right: 8rem;\n  padding-top: 4rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n  width: 45%;\n  margin-bottom: 5px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n}\n\n@media (max-width: 1199.98px) {\n  .side_container[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0px;\n    padding-left: 0px;\n  }\n\n  .main-page[_ngcontent-%COMP%]   form.pt-5.row.justify-content-between.ng-untouched.ng-pristine.ng-invalid[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n    padding-right: 2rem;\n    padding-top: 30px !important;\n  }\n}\n\n.division[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.division[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.division[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 8px;\n}\n\n@media (max-width: 530px) {\n  .main-page[_ngcontent-%COMP%] {\n    background-color: var(--white);\n    border-radius: 1rem;\n    padding: 20px;\n    box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n  }\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    padding: 0 10px !important;\n    background-color: transparent;\n    border-radius: 0;\n    box-shadow: none;\n  }\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   form.pt-5.row.justify-content-between.ng-untouched.ng-pristine.ng-invalid[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n  }\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n    color: var(--color-secondary);\n    font-weight: 500;\n    font-size: 20px;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: inherit;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: var(--color-secondary);\n    font-weight: 500;\n    font-size: 16px;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 48px;\n    box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n    border-radius: 10px;\n    margin-left: 5px;\n    background-color: var(--color-primary);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQVFBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUk7O0VBRUUsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBTk47O0FBVUU7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0FBUko7O0FBVUk7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVJOOztBQVdJO0VBQ0UsbUJBQUE7QUFUTjs7QUFZSTtFQUNFLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBVk47O0FBWUk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBVk47O0FBYUk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFYTjs7QUFhSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFYTjs7QUFhSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFYTjs7QUFhSTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtBQVhOOztBQWVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBYko7O0FBZ0JNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBZFI7O0FBaUJNO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFmUjs7QUFrQk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0FBaEJSOztBQXFDQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQW5DSjs7RUF3Q0U7SUFDRSw0QkFBQTtFQXJDSjtFQXVDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSw0QkFBQTtFQXJDSjtBQUNGOztBQXdDQTtFQUNFLGdCQUFBO0FBdENGOztBQXVDRTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBckNKOztBQXVDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQXJDSjs7QUF5Q0E7RUFDRTtJQUNFLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsZ0RBQUE7RUF0Q0Y7RUF1Q0U7SUFDRSwwQkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQXJDSjtFQXVDSTtJQUNFLDRCQUFBO0VBckNOO0VBd0NFO0lBQ0UsNkJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUF0Q0o7RUEwQ0U7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0VBeENGO0VBMkNJO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBekNOO0VBNENJO0lBQ0UsNkJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUExQ047RUE2Q0k7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGdEQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNDQUFBO0VBM0NOO0FBQ0YiLCJmaWxlIjoiYWRkcmVzcy1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1vcHRpb246YmVmb3JlLFxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3Q6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGxlZnQ6IDEyMHB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLy8gbWl4aW4gc3RhcnRcclxuQG1peGluIGFsbC1pbnB1dC1zdHlsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm1haW4tcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtYmx1ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuXHJcbiAgLmJyZWFkY3J1bWIge1xyXG4gICAgJiBhLFxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi1kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiKDI2IDg4IDI0NiAvIDE3JSk7XHJcblxyXG4gICAgLmZvcm0taGFkZGluZyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlb3ZlcmxhcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhc2hlZC1saW5lIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjY2NjO1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luLXkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAvLyBtYXJnaW4tbGVmdDogLTAuNXJlbTtcclxuICAgIH1cclxuICAgIC5pbWFnZS1pY29uIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuZXllLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtMjhweDtcclxuICAgICAgdG9wOiAxMXB4O1xyXG4gICAgfVxyXG4gICAgLnVwbG9hZC1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogLTI4cHg7XHJcbiAgICAgIHRvcDogMTFweDtcclxuICAgIH1cclxuICAgIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFkZGluZy14IHtcclxuICAgIHBhZGRpbmctbGVmdDogOHJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuXHJcbiAgICAmIGZvcm0ge1xyXG4gICAgICAudy00NSB7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYmEoMjYsIDg4LCAyNDYsIDAuNDkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIHJlc3BvbnNpdmUgY29kZSBzdGFydFxyXG5cclxuLy8gRXh0cmEgc21hbGwgZGV2aWNlcyAocG9ydHJhaXQgcGhvbmVzLCBsZXNzIHRoYW4gNTc2cHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG59XHJcblxyXG4vLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCBsZXNzIHRoYW4gNzY4cHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG59XHJcblxyXG4vLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgbGVzcyB0aGFuIDk5MnB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxufVxyXG5cclxuLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIGxlc3MgdGhhbiAxMjAwcHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuICAuc2lkZV9jb250YWluZXIge1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWluLXBhZ2Uge1xyXG5cclxuICAgIGZvcm0ucHQtNS5yb3cuanVzdGlmeS1jb250ZW50LWJldHdlZW4ubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLWludmFsaWR7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGFkZGluZy14IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZGl2aXNpb257XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBzcGFue1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBocntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MzBweCkge1xyXG4gIC5tYWluLXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiKDI2IDg4IDI0NiAvIDE3JSk7XHJcbiAgICAubWFpbi1kaXYge1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgICBmb3JtLnB0LTUucm93Lmp1c3RpZnktY29udGVudC1iZXR3ZWVuLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy1pbnZhbGlke1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAuZm9ybS1oYWRkaW5nIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgLnBhZGRpbmcteCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiBpbmhlcml0O1xyXG5cclxuICAgICYgZm9ybSB7XHJcbiAgICAgIC53LTQ1IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbn1cclxuIl19 */"] });
AddressAddComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_0__.AutoUnsubscribe)()
], AddressAddComponent);



/***/ }),

/***/ 7458:
/*!***********************************************************************!*\
  !*** ./src/app/module/address/address-list/address-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressListComponent": () => (/* binding */ AddressListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_app_core_action_popup_action_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/action-popup/action-popup.component */ 5597);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_shared_permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/permission */ 9206);
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-auto-unsubscribe */ 3970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/pagination.service */ 762);
/* harmony import */ var src_app_service_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/address.service */ 9581);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/common.service */ 5842);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _core_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/search/search.component */ 2448);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _core_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/pagination/pagination.component */ 4852);


















function AddressListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "search-box", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("text", function AddressListComponent_div_13_Template_search_box_text_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r3.searchObject($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("placeholder", "Search");
} }
function AddressListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "+ Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddressListComponent_div_16_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddressListComponent_div_16_th_4_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r17.sortData("AddressName"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddressListComponent_div_16_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r19 == null ? null : element_r19.addressName, " ");
} }
function AddressListComponent_div_16_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddressListComponent_div_16_td_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", element_r20 == null ? null : element_r20.city, " ");
} }
function AddressListComponent_div_16_td_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddressListComponent_div_16_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddressListComponent_div_16_td_8_span_1_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddressListComponent_div_16_td_8_span_2_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (element_r20 == null ? null : element_r20.city) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (element_r20 == null ? null : element_r20.city) == "");
} }
function AddressListComponent_div_16_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddressListComponent_div_16_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r24 == null ? null : element_r24.country, " ");
} }
function AddressListComponent_div_16_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["edit", a1]; };
function AddressListComponent_div_16_td_14_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, element_r25 == null ? null : element_r25.id));
} }
function AddressListComponent_div_16_td_14_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddressListComponent_div_16_td_14_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31); const element_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r29.onDelete(element_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddressListComponent_div_16_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddressListComponent_div_16_td_14_button_1_Template, 3, 3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddressListComponent_div_16_td_14_button_2_Template, 3, 0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.permissionObject == null ? null : ctx_r12.permissionObject.includes(ctx_r12.permissionCode == null ? null : ctx_r12.permissionCode.updateAddress));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r12.permissionObject == null ? null : ctx_r12.permissionObject.includes(ctx_r12.permissionCode == null ? null : ctx_r12.permissionCode.deleteAddress)) && !(element_r25 == null ? null : element_r25.isPrimary));
} }
function AddressListComponent_div_16_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 40);
} }
function AddressListComponent_div_16_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 41);
} }
function AddressListComponent_div_16_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " No data found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddressListComponent_div_16_div_18_pagination_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "pagination", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onPageChange", function AddressListComponent_div_16_div_18_pagination_1_Template_pagination_onPageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r34.getPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("paginationList", ctx_r33.pagination)("selectedPageLimit", ctx_r33.currentPageLimit)("currentPage", ctx_r33.currentPage);
} }
function AddressListComponent_div_16_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddressListComponent_div_16_div_18_pagination_1_Template, 1, 3, "pagination", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r16.showPagination);
} }
function AddressListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](3, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, AddressListComponent_div_16_th_4_Template, 3, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, AddressListComponent_div_16_td_5_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](6, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, AddressListComponent_div_16_th_7_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, AddressListComponent_div_16_td_8_Template, 3, 2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](9, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, AddressListComponent_div_16_th_10_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, AddressListComponent_div_16_td_11_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](12, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, AddressListComponent_div_16_th_13_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, AddressListComponent_div_16_td_14_Template, 3, 2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, AddressListComponent_div_16_tr_15_Template, 1, 0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, AddressListComponent_div_16_tr_16_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, AddressListComponent_div_16_tr_17_Template, 3, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, AddressListComponent_div_16_div_18_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx_r2.objectArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.objectArray == null ? null : ctx_r2.objectArray.length) > 0);
} }
let AddressListComponent = class AddressListComponent {
    constructor(paginationService, addressService, commonService, dialog, dataService) {
        this.paginationService = paginationService;
        this.addressService = addressService;
        this.commonService = commonService;
        this.dialog = dialog;
        this.dataService = dataService;
        this.displayedColumns = ['addressName', 'city', 'country', 'action'];
        this.filterColumns = ['AddressName', 'City', 'Country'];
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.currentPageLimit = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultPageLimit;
        this.permissionObject = null;
        this.showPagination = false;
        this.searchFilter = {};
        this.permissionCode = src_app_shared_permission__WEBPACK_IMPORTED_MODULE_2__.permission;
        this.isShort = false;
        this.dataService.currentUser.subscribe((user) => { if (user)
            this.currentUser = user; });
        this.dataService.permission.subscribe((response) => {
            this.permissionObject = response;
        });
    }
    ngOnInit() {
        this.getObjects();
    }
    getObjects() {
        const params = {
            fields: null,
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
        this.addressService.getAddressList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.data) {
                this.objectArray = response.data;
                this.showPagination = true;
                this.pagination = this.paginationService.getPager(response['recordCount'], this.currentPage, this.currentPageLimit);
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
    sortData(name) {
        // Frontend Short
        // this.commonService.isShort = !this.commonService.isShort
        // this.objectArray = this.commonService.sortData(name, this.objectArray);
        // Backend Short
        this.isShort = !this.isShort;
        this.sortFieldName = name;
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
                this.addressService.deleteAddress(result.id).subscribe((res) => {
                    this.getObjects();
                });
            }
        });
    }
    ngOnDestroy() { }
};
AddressListComponent.ɵfac = function AddressListComponent_Factory(t) { return new (t || AddressListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_address_service__WEBPACK_IMPORTED_MODULE_5__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService)); };
AddressListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: AddressListComponent, selectors: [["app-address-list"]], decls: 17, vars: 3, consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "m-0", "mt-3"], [1, "col", "admin-brdcmb", "mt-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["routerLink", "/address", "aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-0"], ["class", "w-30", 4, "ngIf"], ["class", "adbtn col", 4, "ngIf"], [1, "col-lg-12", "mt-3"], ["class", "main-div", 4, "ngIf"], [1, "w-30"], [3, "placeholder", "text"], [1, "adbtn", "col"], ["mat-raised-button", "", "routerLink", "add", "color", "primary", 1, "mr-5"], [1, "main-div"], [1, "admin-table"], ["mat-table", "", 1, "", 3, "dataSource"], ["matColumnDef", "addressName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "city"], ["matColumnDef", "country"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["class", "mt-3", 4, "ngIf"], ["mat-header-cell", ""], ["src", "assets/images/filter.svg", 3, "click"], ["mat-cell", ""], [4, "ngIf"], ["type", "button", "class", "btn btn-green text-success", 3, "routerLink", 4, "ngIf"], ["type", "button", "class", "btn btn-red text-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-green", "text-success", 3, "routerLink"], ["type", "button", 1, "btn", "btn-red", "text-danger", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "9999", 1, "mat-cell"], [1, "mt-3"], [3, "paginationList", "selectedPageLimit", "currentPage", "onPageChange", 4, "ngIf"], [3, "paginationList", "selectedPageLimit", "currentPage", "onPageChange"]], template: function AddressListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, AddressListComponent_div_13_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, AddressListComponent_div_14_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, AddressListComponent_div_16_Template, 19, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showPagination);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.addAddress));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.addressList));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _core_search_search_component__WEBPACK_IMPORTED_MODULE_8__.SearchComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatNoDataRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _core_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__.PaginationComponent], styles: [".main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%] {\n    padding: 1rem 0rem;\n  }\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%] {\n    padding: 0;\n    background-color: transparent;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    box-shadow: none;\n    background-color: transparent;\n    padding: 0px;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .admin-table[_ngcontent-%COMP%] {\n    overflow: auto;\n    margin-top: 20px;\n  }\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .admin-table[_ngcontent-%COMP%] {\n    overflow: auto;\n    margin-top: 20px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 70px;\n  border-radius: 1rem;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #edf0ff;\n  font-size: 18px;\n  font-weight: 600;\n  text-align: left;\n  color: #1a58f6;\n  border: none;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: sub;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 55px;\n  border-radius: 0.8rem 0rem 0rem 0.8rem;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 40px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 25px;\n    text-align: left;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    text-align: justify;\n  }\n}\n@media (max-width: 320px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 10px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 0px;\n    text-align: left;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 5px;\n    text-align: justify;\n  }\n}\n@media (max-width: 320px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 5px;\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n  padding-left: 52px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 32px;\n    text-align: justify;\n  }\n}\n@media (max-width: 575px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    min-width: 140px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 24px;\n  border-radius: 0 0.8rem 0.8rem 0;\n  text-align: center;\n  width: 15rem;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: none;\n  color: var(--color-secondary);\n  font-size: 16px;\n  line-height: 24px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 1px 6px 10px #969696;\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  margin-right: 16px;\n  margin-bottom: 10px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 55px;\n  border-radius: 0.8rem 0rem 0rem 0.8rem;\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding: 7px 0px 0px 15px;\n  }\n}\n@media (max-width: 1440px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding-left: 54px;\n  }\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding: 5px 20px;\n  }\n}\n@media (max-width: 578px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 320px;\n    text-align: justify;\n  }\n}\n@media (max-width: 425px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 350px;\n  }\n}\n@media (max-width: 325px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 202px;\n    text-align: left;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 10px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding: 11px 0px 0px 0px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  padding-left: 55px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    padding: 11px 0px 0px 35px;\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-radius: 0;\n  text-align: center;\n  padding: 5px 0px 0px;\n  min-width: 124px;\n}\n@media (max-width: 578px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    min-width: 120px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   button[_ngcontent-%COMP%] {\n  margin: 0px 5px;\n  border-radius: 10px;\n  line-height: 0;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn-green[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-green);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn-red[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-red);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn-yellow[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-yellow);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: var(--color-light-gray);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .pagin-sel[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--black);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .pagin-sel[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--color-light-gray);\n  border-radius: 5px;\n  padding: 5px;\n  margin-left: 5px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border: none !important;\n  background-color: orange;\n}\n.main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n  width: 18rem;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 20px;\n  }\n}\n@media (max-width: 991.98px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 15px 5px 15px 15px;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 40%;\n    padding: 15px 5px 15px 15px;\n  }\n}\n@media (max-width: 425px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 0px 15px 0px;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 0px 15px 0px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .admin-brdcmb[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.mr-5[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.adbtn[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 575.98px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n}\n@media (max-width: 798px) {\n  .adbtn[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 15px 7px 15px 0px;\n    display: flex;\n  }\n}\n@media (max-width: 1024px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 0px 7px 15px 0px;\n    width: 200px;\n    display: flex;\n  }\n}\n@media (max-width: 991.98px) {\n  .adbtn[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 15px 0px 0px 0px;\n    display: flex;\n  }\n}\n@media (max-width: 425px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 15px 0px 15px 0px;\n  }\n}\n@media (max-width: 375px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 15px 0px 15px 0px;\n    display: block;\n  }\n}\n@media (max-width: 320px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 15px 0px 15px 0px;\n    display: block;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n}\n@media (max-width: 578px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    height: 50px;\n  }\n}\n@media (max-width: 798px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 78%;\n    margin-right: 5px;\n  }\n}\n@media (max-width: 425px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-right: 0px;\n  }\n}\n@media (max-width: 375px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n    margin-left: 0;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--white);\n  text-decoration: none;\n}\n.adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 5px;\n}\n@media (max-width: 578px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    height: 50px;\n  }\n}\n@media (max-width: 798px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 75%;\n    margin-right: 5px;\n  }\n}\n@media (max-width: 425px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n}\n@media (max-width: 375px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%] {\n  position: relative;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: none;\n  position: absolute;\n  z-index: 88888888;\n  top: -9px;\n  left: 15px;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid rgba(0, 0, 0, 0.72);\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:after {\n  content: \"Copy to Clipboard\";\n  display: none;\n  position: absolute;\n  z-index: 9999;\n  top: -45px;\n  left: -37px;\n  width: 114px;\n  height: 36px;\n  color: #fff;\n  font-size: 10px;\n  line-height: 36px;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.72);\n  border-radius: 3px;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:hover:before, .integration-checklist__copy-button[_ngcontent-%COMP%]:hover:after {\n  display: block;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:active, .integration-checklist__copy-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:active:after, .integration-checklist__copy-button[_ngcontent-%COMP%]:focus:after {\n  content: \"Copied!\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFMRjtJQU1JLGtCQUFBO0VBRUY7QUFDRjtBQURFO0VBUkY7SUFTSSxVQUFBO0lBQ0EsNkJBQUE7RUFJRjtBQUNGO0FBRkk7O0VBRUUsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSU47QUFBRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUFFSjtBQURJO0VBTEY7SUFNSSxnQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFQUlKO0FBQ0Y7QUFGTTtFQURGO0lBRUksY0FBQTtJQUNBLGdCQUFBO0VBS047QUFDRjtBQUpNO0VBTEY7SUFNSSxjQUFBO0lBQ0EsZ0JBQUE7RUFPTjtBQUNGO0FBSk07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFNUjtBQUpRO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBTVY7QUFMVTtFQUNFLG1CQUFBO0FBT1o7QUFKUTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7QUFNVjtBQUxVO0VBSEY7SUFJSSxrQkFBQTtJQUNBLG1CQUFBO0VBUVY7QUFDRjtBQVBVO0VBUEY7SUFRSSxrQkFBQTtJQUNBLG1CQUFBO0VBVVY7QUFDRjtBQVRVO0VBWEY7SUFZSSxrQkFBQTtJQUNBLGdCQUFBO0VBWVY7QUFDRjtBQVhVO0VBZkY7SUFpQkksbUJBQUE7RUFhVjtBQUNGO0FBWlU7RUFuQkY7SUFxQkksbUJBQUE7RUFjVjtBQUNGO0FBWlE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBY1Y7QUFiVTtFQUhGO0lBSUksa0JBQUE7SUFDQSxtQkFBQTtFQWdCVjtBQUNGO0FBZlU7RUFQRjtJQVFJLGtCQUFBO0lBQ0EsbUJBQUE7RUFrQlY7QUFDRjtBQWpCVTtFQVhGO0lBWUksaUJBQUE7SUFDQSxnQkFBQTtFQW9CVjtBQUNGO0FBbkJVO0VBZkY7SUFnQkksaUJBQUE7SUFDQSxtQkFBQTtFQXNCVjtBQUNGO0FBckJVO0VBbkJGO0lBb0JJLGlCQUFBO0lBQ0EsbUJBQUE7RUF3QlY7QUFDRjtBQXRCUTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUF3QlY7QUF2QlU7RUFIRjtJQUlJLGtCQUFBO0lBQ0EsbUJBQUE7RUEwQlY7QUFDRjtBQXpCVTtFQVBGO0lBUUksa0JBQUE7SUFDQSxtQkFBQTtFQTRCVjtBQUNGO0FBM0JVO0VBWEY7SUFZSSxrQkFBQTtJQUNBLG1CQUFBO0VBOEJWO0FBQ0Y7QUE3QlU7RUFmRjtJQWdCSSxnQkFBQTtFQWdDVjtBQUNGO0FBOUJRO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWdDVjtBQTdCUTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQStCVjtBQTdCVTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUErQlo7QUEzQlE7RUFDRSxrQkFBQTtFQUNBLHNDQUFBO0FBNkJWO0FBNUJVO0VBSEY7SUFJSSx5QkFBQTtFQStCVjtBQUNGO0FBOUJVO0VBTkY7SUFPSSxrQkFBQTtFQWlDVjtBQUNGO0FBaENVO0VBVEY7SUFVSSxpQkFBQTtFQW1DVjtBQUNGO0FBakNVO0VBYkY7SUFjSSxnQkFBQTtJQUNBLG1CQUFBO0VBb0NWO0FBQ0Y7QUFsQ1U7RUFsQkY7SUFtQkksZ0JBQUE7RUFxQ1Y7QUFDRjtBQXBDVTtFQXJCRjtJQXNCSSxnQkFBQTtJQUNBLGdCQUFBO0VBdUNWO0FBQ0Y7QUFyQ1E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBdUNWO0FBdENVO0VBSEY7SUFJSSxrQkFBQTtJQUNBLG1CQUFBO0VBeUNWO0FBQ0Y7QUF4Q1U7RUFQRjtJQVFJLGtCQUFBO0lBQ0EsbUJBQUE7RUEyQ1Y7QUFDRjtBQTFDVTtFQVhGO0lBWUkseUJBQUE7RUE2Q1Y7QUFDRjtBQTFDUTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUE0Q1Y7QUEzQ1U7RUFIRjtJQUlJLGtCQUFBO0lBQ0EsbUJBQUE7RUE4Q1Y7QUFDRjtBQTdDVTtFQVBGO0lBUUksa0JBQUE7SUFDQSxtQkFBQTtFQWdEVjtBQUNGO0FBL0NVO0VBWEY7SUFZSSwwQkFBQTtJQUNBLG1CQUFBO0VBa0RWO0FBQ0Y7QUEvQ1E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQWlEVjtBQWhEVTtFQUxGO0lBTUksZ0JBQUE7RUFtRFY7QUFDRjtBQWxEVTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFvRFo7QUFsRFU7RUFDRSx3Q0FBQTtBQW9EWjtBQWxEVTtFQUNFLHNDQUFBO0FBb0RaO0FBbERVO0VBQ0UseUNBQUE7QUFvRFo7QUEvQ007RUFDRSxtQ0FBQTtBQWlEUjtBQTVDTTtFQUNFLG1CQUFBO0FBOENSO0FBNUNNO0VBQ0UsWUFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUE4Q1I7QUF2Q1U7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FBeUNaO0FBbENFO0VBQ0UsWUFBQTtBQW9DSjtBQW5DSTtFQUZGO0lBR0ksV0FBQTtJQUNBLGlCQUFBO0VBc0NKO0FBQ0Y7QUFyQ0k7RUFORjtJQU9JLFVBQUE7SUFDQSwyQkFBQTtFQXdDSjtBQUNGO0FBdkNJO0VBVkY7SUFXSSxVQUFBO0lBQ0EsMkJBQUE7RUEwQ0o7QUFDRjtBQXpDSTtFQWRGO0lBZUksV0FBQTtJQUNBLDBCQUFBO0VBNENKO0FBQ0Y7QUEzQ0k7RUFsQkY7SUFtQkksV0FBQTtJQUNBLDBCQUFBO0VBOENKO0FBQ0Y7QUEzQ0U7RUFDRSxjQUFBO0FBNkNKO0FBekNBO0VBQ0UsaUJBQUE7QUE0Q0Y7QUF6Q0E7RUFDRSxpQkFBQTtBQTRDRjtBQTNDRTtFQUZGO0lBR0ksaUJBQUE7RUE4Q0Y7QUFDRjtBQTdDRTtFQUxGO0lBTUksZ0JBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7RUFnREY7QUFDRjtBQS9DRTtFQVZGO0lBV0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQWtERjtBQUNGO0FBakRFO0VBZkY7SUFnQkksZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLGFBQUE7RUFvREY7QUFDRjtBQW5ERTtFQXBCRjtJQXFCSSwwQkFBQTtFQXNERjtBQUNGO0FBckRFO0VBdkJGO0lBd0JJLDBCQUFBO0lBQ0EsY0FBQTtFQXdERjtBQUNGO0FBdkRFO0VBM0JGO0lBNEJJLDBCQUFBO0lBQ0EsY0FBQTtFQTBERjtBQUNGO0FBekRFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtBQTJESjtBQTFESTtFQVBGO0lBUUksV0FBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0VBNkRKO0FBQ0Y7QUE1REk7RUFaRjtJQWFJLFVBQUE7SUFDQSxpQkFBQTtFQStESjtBQUNGO0FBOURJO0VBaEJGO0lBaUJJLFdBQUE7SUFFQSxpQkFBQTtFQWdFSjtBQUNGO0FBL0RJO0VBckJGO0lBc0JJLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUFrRUo7QUFDRjtBQWpFSTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFtRU47QUEvREU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWlFSjtBQWhFSTtFQU5GO0lBT0ksV0FBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0VBbUVKO0FBQ0Y7QUFsRUk7RUFYRjtJQVlJLFVBQUE7SUFDQSxpQkFBQTtFQXFFSjtBQUNGO0FBcEVJO0VBZkY7SUFnQkksVUFBQTtFQXVFSjtBQUNGO0FBdEVJO0VBbEJGO0lBbUJJLFdBQUE7SUFDQSxtQkFBQTtFQXlFSjtBQUNGO0FBeEVJO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQTBFTjtBQW5EQTtFQUNFLGtCQUFBO0FBc0RGO0FBcERFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSx5Q0FBQTtBQXFESjtBQWxERTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQkFBQTtFQUNBLGtCQUFBO0FBa0RKO0FBL0NFO0VBQ0Usc0JBQUE7QUFpREo7QUEvQ0k7RUFFRSxjQUFBO0FBZ0ROO0FBNUNFO0VBRUUsYUFBQTtBQTZDSjtBQTNDSTtFQUNFLGtCQUFBO0FBNkNOIiwiZmlsZSI6ImFkZHJlc3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWJsdWUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCkge1xyXG4gICAgcGFkZGluZzogMXJlbSAwcmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmJyZWFkY3J1bWIge1xyXG4gICAgJiBhLFxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi1kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiKDI2IDg4IDI0NiAvIDE3JSk7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5hZG1pbi10YWJsZSB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiB0YWJsZSB7XHJcbiAgICAgICYgdHIge1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG5cclxuICAgICAgICAmIHRoIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZGYwZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGNvbG9yOiAjMWE1OGY2O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgJiAubWF0LWljb24ge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNTVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbSAwcmVtIDByZW0gMC44cmVtO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmIHRoOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmIHRoOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmIHRoOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMC44cmVtIDAuOHJlbSAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiB0ZCB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cclxuICAgICAgICAgICYgaW1nIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDZweCAxMHB4ICM5Njk2OTY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNTVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbSAwcmVtIDByZW0gMC44cmVtO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAwcHggMHB4IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzhweCkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjVweCkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmIHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIHRkOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMHB4IDBweCAzNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiB0ZDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDBweDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTI0cHg7XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc4cHgpIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tZ3JlZW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1yZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29sb3ItcmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4teWVsbG93IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yLXllbGxvdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtZ3JheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFnaW4tc2VsIHtcclxuICAgICAgJiBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgICAgfVxyXG4gICAgICAuc2VsZWN0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtZ3JheSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudy0zMCB7XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggNXB4IDE1cHggMTVweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCkge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDVweCAxNXB4IDE1cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hZG1pbi1icmRjbWIge1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubXItNSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5hZGJ0biB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTVweCA3cHggMTVweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBwYWRkaW5nOiAwcHggN3B4IDE1cHggMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYmEoMjYsIDg4LCAyNDYsIDAuNDkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc4cHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgIHdpZHRoOiA3OCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvLyBtYXJnaW4tbGVmdDogMjJweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgJiBhIHtcclxuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3OHB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCkge1xyXG4gICAgICB3aWR0aDogNzUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgICB3aWR0aDogNDclO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJiBhIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyByZXNwb25zaXZlIGNvZGUgc3RhcnRcclxuXHJcbi8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxufVxyXG5cclxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgbGVzcyB0aGFuIDc2OHB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIGxlc3MgdGhhbiA5OTJweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBsZXNzIHRoYW4gMTIwMHB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcbn1cclxuXHJcbi5pbnRlZ3JhdGlvbi1jaGVja2xpc3RfX2NvcHktYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogODg4ODg4ODg7XHJcbiAgICB0b3A6IC05cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcblxyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43Mik7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiQ29weSB0byBDbGlwYm9hcmRcIjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgdG9wOiAtNDVweDtcclxuICAgIGxlZnQ6IC0zN3B4O1xyXG4gICAgd2lkdGg6IDExNHB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG5cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuXHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJDb3BpZWQhXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAuYWxpZ25DZW50ZXJ7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyB9Il19 */"] });
AddressListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_3__.AutoUnsubscribe)()
], AddressListComponent);



/***/ }),

/***/ 7025:
/*!**************************************************!*\
  !*** ./src/app/module/address/address.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressModule": () => (/* binding */ AddressModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ 3153);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/pagination/pagination.module */ 9304);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/search/search.module */ 4778);
/* harmony import */ var src_app_shared_permission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/permission */ 9206);
/* harmony import */ var src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/loader/loader.module */ 1098);
/* harmony import */ var _address_add_address_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./address-add/address-add.component */ 4994);
/* harmony import */ var _address_list_address_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./address-list/address-list.component */ 7458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);














const routes = [
    {
        path: "",
        component: _address_list_address_list_component__WEBPACK_IMPORTED_MODULE_8__.AddressListComponent,
        data: { title: 'Address list', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_5__.permission.addressList }
    },
    {
        path: "add",
        component: _address_add_address_add_component__WEBPACK_IMPORTED_MODULE_7__.AddressAddComponent,
        data: { title: 'Add Address', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_5__.permission.addAddress }
    },
    {
        path: 'edit/:id',
        component: _address_add_address_add_component__WEBPACK_IMPORTED_MODULE_7__.AddressAddComponent,
        data: { title: 'Update Address', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_5__.permission.updateAddress }
    }
];
class AddressModule {
}
AddressModule.ɵfac = function AddressModule_Factory(t) { return new (t || AddressModule)(); };
AddressModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AddressModule });
AddressModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_1__.FormValidationModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_2__.PaginationModule,
            src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_4__.SearchModule,
            src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__.LoaderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AddressModule, { declarations: [_address_add_address_add_component__WEBPACK_IMPORTED_MODULE_7__.AddressAddComponent, _address_list_address_list_component__WEBPACK_IMPORTED_MODULE_8__.AddressListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_1__.FormValidationModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_2__.PaginationModule,
        src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_4__.SearchModule,
        src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__.LoaderModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_module_address_address_module_ts.js.map