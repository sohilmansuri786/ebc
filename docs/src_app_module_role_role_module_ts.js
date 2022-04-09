"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["src_app_module_role_role_module_ts"],{

/***/ 3981:
/*!************************************************************!*\
  !*** ./src/app/module/role/add-role/add-role.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRoleComponent": () => (/* binding */ AddRoleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/role.service */ 7749);
/* harmony import */ var _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/form-validation/directive/form-submit.directive */ 9855);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/form-validation/directive/control-errors.directive */ 6242);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);












function AddRoleComponent_li_62_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-checkbox", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddRoleComponent_li_62_Template_mat_checkbox_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.onChangePermission(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", permission_r1 == null ? null : permission_r1.isSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", permission_r1 == null ? null : permission_r1.name, " ");
} }
/**
 * @title Basic checkboxes
 */
class AddRoleComponent {
    constructor(router, activatedRoute, fb, roleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.roleService = roleService;
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            email: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        this.pageTitle = 'Add Roles';
        this.adminType = 'Super Admin';
        this.onChangeAdminType = (type) => { this.adminType = type; this.getModules(true); };
        this.checkSelectAll = () => {
            var _a, _b;
            let count = 0;
            (_a = this.roleModuleList) === null || _a === void 0 ? void 0 : _a.permissions.forEach(element => {
                if (element === null || element === void 0 ? void 0 : element.isSelect)
                    count++;
            });
            (((_b = this.roleModuleList) === null || _b === void 0 ? void 0 : _b.permissions.length) == count) ?
                this.roleModuleList['isSelectAll'] = true
                : this.roleModuleList['isSelectAll'] = false;
        };
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
            this.isEditing ? this.pageTitle = 'Update Roles' : this.pageTitle = 'Add Roles';
        }
        this.addForm = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
        });
    }
    ngOnInit() {
        if (this.isEditing) {
            this.getEditObject();
        }
        else {
            this.getModules(true);
        }
    }
    getModules(flag) {
        this.flag = flag;
        let data = {
            "searchFilter": null,
            "page": 1,
            "pageSize": 0,
            "fields": null
        };
        this.flag ? data = Object.assign(Object.assign({}, data), { "searchFilter": {
                "conditionOperator": 0,
                "filters": [
                    {
                        "propertyName": "Name",
                        "value": this.adminType,
                        "caseSensitive": true
                    }
                ]
            } }) : '';
        const param = {};
        let isList = true;
        if (!this.flag) {
            isList = false;
            param['id'] = this.objectDetails.accessPermissions[0].moduleId;
        }
        this.roleService.getModules(data, param, isList).subscribe((res) => {
            if (res) {
                if (!this.flag) {
                    this.roleModuleList = res.data;
                    let tempPermission = [];
                    this.adminType = this.roleModuleList.name;
                    this.roleModuleList.permissions.map((data) => {
                        if (this.objectDetails.accessPermissions[0].permissionCodes.includes(data.code)) {
                            tempPermission.push(Object.assign(Object.assign({}, data), { isSelect: true }));
                        }
                        else
                            tempPermission.push(Object.assign(Object.assign({}, data), { isSelect: false }));
                    });
                    this.roleModuleList.permissions = tempPermission;
                    this.checkSelectAll();
                }
                else {
                    this.roleModuleList = res.data[0];
                    let tempPermission = [];
                    this.roleModuleList.permissions.map((data) => {
                        tempPermission.push(Object.assign(Object.assign({}, data), { isSelect: false }));
                    });
                    this.roleModuleList.permissions = tempPermission;
                    this.roleModuleList['isSelectAll'] = false;
                }
            }
        });
    }
    onChangePermission(i) {
        this.roleModuleList.permissions[i]['isSelect'] = !this.roleModuleList.permissions[i]['isSelect'];
        this.checkSelectAll();
    }
    selectAll(value) {
        let tempPermission = [];
        this.roleModuleList.permissions.map((data) => {
            tempPermission.push(Object.assign(Object.assign({}, data), { isSelect: value === null || value === void 0 ? void 0 : value.checked }));
        });
        this.roleModuleList.permissions = tempPermission;
        this.roleModuleList['isSelectAll'] = value === null || value === void 0 ? void 0 : value.checked;
    }
    getEditObject() {
        this.roleService.getRoleById({ id: this.editId }).subscribe((response) => {
            if (response) {
                this.objectDetails = response.data;
                this.addForm.patchValue(response.data);
                this.getModules(false);
            }
            else {
                this.router.navigateByUrl('/role');
            }
        });
    }
    submitForm() {
        var _a;
        if (this.addForm.valid) {
            this.showLoader = true;
            let permissionCodes = [];
            this.roleModuleList.permissions.map((item) => {
                item.isSelect ? permissionCodes.push(item.code) : '';
            });
            let data = Object.assign(Object.assign({}, this.addForm.value), { "accessPermissions": [
                    {
                        "moduleId": (_a = this.roleModuleList) === null || _a === void 0 ? void 0 : _a.id,
                        "permissionCodes": permissionCodes
                    }
                ] });
            if (permissionCodes.length > 0)
                if (this.isEditing) {
                    this.roleService.saveRole(Object.assign(Object.assign({}, data), { id: this.editId })).subscribe((response) => {
                        this.showLoader = false;
                        if (response) {
                            this.router.navigateByUrl('/role');
                        }
                        else {
                            response.error.map(obj => {
                                if (obj.hasOwnProperty('name')) {
                                    this.formErrors['name'] = obj['name'];
                                }
                                else {
                                    this.formErrors['apierror'] = `* ${response.error}`;
                                }
                            });
                        }
                    }, (error) => {
                        this.showLoader = false;
                    });
                }
                else {
                    this.roleService.saveRole(data).subscribe((response) => {
                        this.showLoader = false;
                        if (response) {
                            this.router.navigateByUrl('/role');
                        }
                        else {
                            response.error.map(obj => {
                                if (obj.hasOwnProperty('name')) {
                                    this.formErrors['name'] = obj['name'];
                                }
                                else {
                                    this.formErrors['apierror'] = `* ${response.error}`;
                                }
                            });
                        }
                    }, (error) => {
                        this.showLoader = false;
                    });
                }
        }
    }
}
AddRoleComponent.ɵfac = function AddRoleComponent_Factory(t) { return new (t || AddRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_role_service__WEBPACK_IMPORTED_MODULE_0__.RoleService)); };
AddRoleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddRoleComponent, selectors: [["app-add-role"]], decls: 66, vars: 12, consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "0"], [1, "col", "add-brdcmb"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["routerLink", "/role"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "main-div", "padding-x"], [1, "d-flex", "justify-content-between"], [1, "form-hadding"], [1, "form_field", "row", "justify-content-between", 3, "formGroup", "ngSubmit"], [1, "form-group", "w-44", "input-fildcl"], ["for", "lname", 1, "control-label"], [1, "inpu-t"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "placeholder", "Ex : Jack", 3, "formControl"], [1, "form-group", "w-46", "input-fildcl"], [1, ""], ["matInput", "", "placeholder", "Ex : Role Description", 3, "formControl"], [1, "form-check", "mt-3"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", "value", "Super Admin", 1, "form-check-input", 3, "checked", "change"], ["for", "flexRadioDefault1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", "value", "Tenant Admin", 1, "form-check-input", 3, "checked", "change"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", "value", "End User", 1, "form-check-input", 3, "checked", "change"], [1, "form-group", "w-45", "input-fildcl"], [1, "card-example-section"], [1, "example-list-section"], [1, "example-margin", 3, "checked", "change"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "margin-y"], ["type", "submit", "mat-raised-button", "", "color", "primary"], [3, "checked", "change"]], template: function AddRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddRoleComponent_Template_form_ngSubmit_19_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Role Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Role Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddRoleComponent_Template_input_change_37_listener() { return ctx.onChangeAdminType("Super Admin"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Super Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddRoleComponent_Template_input_change_41_listener() { return ctx.onChangeAdminType("Tenant Admin"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Tenant Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddRoleComponent_Template_input_change_45_listener() { return ctx.onChangeAdminType("End User"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " End User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddRoleComponent_Template_input_change_49_listener() { return ctx.onChangeAdminType("BU Admin"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " BU Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Role Functionalities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-checkbox", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddRoleComponent_Template_mat_checkbox_change_58_listener($event) { return ctx.selectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, AddRoleComponent_li_62_Template, 3, 2, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.pageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.pageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.addForm.controls["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.addForm.controls["description"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.adminType == "Super Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.adminType == "Tenant Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.adminType == "End User");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.adminType == "BU Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.roleModuleList == null ? null : ctx.roleModuleList.isSelectAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.roleModuleList == null ? null : ctx.roleModuleList.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.roleModuleList == null ? null : ctx.roleModuleList.permissions);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_1__.FormSubmitDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_2__.ControlErrorsDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton], styles: [".mat-option:before,   .mat-select:before {\n  position: absolute;\n  width: 20px;\n  height: 10px;\n  left: 120px;\n  content: \"\";\n}\n\n.main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 600;\n  font-size: 22px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .imageoverlap[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  padding-right: 40px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .dashed-line[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #ccc;\n  width: 35%;\n  margin-right: 15px;\n  margin-left: 15px;\n  height: 26px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .margin-y[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  margin-left: -1.3rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .image-icon[_ngcontent-%COMP%] {\n  margin-top: -4px;\n  width: 25px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  top: 11px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  top: 11px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  color: var(--color-secondary);\n  font-size: 14px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n  padding-left: 8rem;\n  padding-right: 8rem;\n  padding-top: 4rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n  width: 45%;\n  margin-bottom: 5px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n}\n\n@media (max-width: 1199.98px) {\n  .side_container[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0px;\n    padding-left: 0px;\n  }\n\n  .main-page[_ngcontent-%COMP%]   form.pt-5.row.justify-content-between.ng-untouched.ng-pristine.ng-invalid[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n    padding-right: 2rem;\n    padding-top: 30px !important;\n  }\n}\n\n.division[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.division[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.division[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 8px;\n}\n\n@media (max-width: 530px) {\n  .main-page[_ngcontent-%COMP%] {\n    background-color: var(--white);\n    border-radius: 1rem;\n    padding: 20px;\n    box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n  }\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    padding: 0 10px !important;\n    background-color: transparent;\n    border-radius: 0;\n    box-shadow: none;\n  }\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   form.pt-5.row.justify-content-between.ng-untouched.ng-pristine.ng-invalid[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n  }\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n    color: var(--color-secondary);\n    font-weight: 500;\n    font-size: 20px;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: inherit;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: var(--color-secondary);\n    font-weight: 500;\n    font-size: 16px;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 240px;\n    height: 48px;\n    box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n    border-radius: 10px;\n    margin-left: 5px;\n    background-color: var(--color-primary);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1yb2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQVFBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUk7O0VBRUUsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBTk47O0FBVUU7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0FBUko7O0FBVUk7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVJOOztBQVdJO0VBQ0UsbUJBQUE7QUFUTjs7QUFZSTtFQUNFLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBVk47O0FBWUk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFWTjs7QUFZSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQVZOOztBQVlJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQVZOOztBQVlJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQVZOOztBQVlJO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FBVk47O0FBY0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFaSjs7QUFlTTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQWJSOztBQWdCTTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBZFI7O0FBaUJNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtBQWZSOztBQW9DQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQWxDSjs7RUF1Q0U7SUFDRSw0QkFBQTtFQXBDSjtFQXNDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSw0QkFBQTtFQXBDSjtBQUNGOztBQXVDQTtFQUNFLGdCQUFBO0FBckNGOztBQXNDRTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBcENKOztBQXNDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQXBDSjs7QUF3Q0E7RUFDRTtJQUNFLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsZ0RBQUE7RUFyQ0Y7RUFzQ0U7SUFDRSwwQkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQXBDSjtFQXNDSTtJQUNFLDRCQUFBO0VBcENOO0VBdUNFO0lBQ0UsNkJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUFyQ0o7RUF5Q0U7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0VBdkNGO0VBMENJO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBeENOO0VBMkNJO0lBQ0UsNkJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUF6Q047RUE0Q0k7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGdEQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNDQUFBO0VBMUNOO0FBQ0YiLCJmaWxlIjoiYWRkLXJvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1vcHRpb246YmVmb3JlLFxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3Q6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGxlZnQ6IDEyMHB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLy8gbWl4aW4gc3RhcnRcclxuQG1peGluIGFsbC1pbnB1dC1zdHlsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm1haW4tcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtYmx1ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuXHJcbiAgLmJyZWFkY3J1bWIge1xyXG4gICAgJiBhLFxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi1kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiKDI2IDg4IDI0NiAvIDE3JSk7XHJcblxyXG4gICAgLmZvcm0taGFkZGluZyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlb3ZlcmxhcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhc2hlZC1saW5lIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjY2NjO1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luLXkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEuM3JlbTtcclxuICAgIH1cclxuICAgIC5pbWFnZS1pY29uIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuZXllLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtMjhweDtcclxuICAgICAgdG9wOiAxMXB4O1xyXG4gICAgfVxyXG4gICAgLnVwbG9hZC1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogLTI4cHg7XHJcbiAgICAgIHRvcDogMTFweDtcclxuICAgIH1cclxuICAgIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFkZGluZy14IHtcclxuICAgIHBhZGRpbmctbGVmdDogOHJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuXHJcbiAgICAmIGZvcm0ge1xyXG4gICAgICAudy00NSB7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYmEoMjYsIDg4LCAyNDYsIDAuNDkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIHJlc3BvbnNpdmUgY29kZSBzdGFydFxyXG5cclxuLy8gRXh0cmEgc21hbGwgZGV2aWNlcyAocG9ydHJhaXQgcGhvbmVzLCBsZXNzIHRoYW4gNTc2cHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG59XHJcblxyXG4vLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCBsZXNzIHRoYW4gNzY4cHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG59XHJcblxyXG4vLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgbGVzcyB0aGFuIDk5MnB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxufVxyXG5cclxuLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIGxlc3MgdGhhbiAxMjAwcHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuICAuc2lkZV9jb250YWluZXIge1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWluLXBhZ2Uge1xyXG5cclxuICAgIGZvcm0ucHQtNS5yb3cuanVzdGlmeS1jb250ZW50LWJldHdlZW4ubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLWludmFsaWR7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGFkZGluZy14IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZGl2aXNpb257XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBzcGFue1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBocntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MzBweCkge1xyXG4gIC5tYWluLXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiKDI2IDg4IDI0NiAvIDE3JSk7XHJcbiAgICAubWFpbi1kaXYge1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgICBmb3JtLnB0LTUucm93Lmp1c3RpZnktY29udGVudC1iZXR3ZWVuLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy1pbnZhbGlke1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAuZm9ybS1oYWRkaW5nIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgLnBhZGRpbmcteCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiBpbmhlcml0O1xyXG5cclxuICAgICYgZm9ybSB7XHJcbiAgICAgIC53LTQ1IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9077:
/*!**************************************************************!*\
  !*** ./src/app/module/role/role-list/role-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleListComponent": () => (/* binding */ RoleListComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_action_popup_action_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/action-popup/action-popup.component */ 5597);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_shared_permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/permission */ 9206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/pagination.service */ 762);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/common.service */ 5842);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_service_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/role.service */ 7749);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var _core_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/search/search.component */ 2448);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _core_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/pagination/pagination.component */ 4852);
















function RoleListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "+ Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RoleListComponent_div_18_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Roles Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RoleListComponent_div_18_th_4_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r11.sortData("Roles"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RoleListComponent_div_18_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r13 == null ? null : element_r13.name, " ");
} }
function RoleListComponent_div_18_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Roles Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RoleListComponent_div_18_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r14 == null ? null : element_r14.description, " ");
} }
function RoleListComponent_div_18_ng_container_9_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["edit", a1]; };
function RoleListComponent_div_18_ng_container_9_td_2_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](1, _c0, element_r17 == null ? null : element_r17.id));
} }
function RoleListComponent_div_18_ng_container_9_td_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RoleListComponent_div_18_ng_container_9_td_2_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23); const element_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r21.onDelete(element_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RoleListComponent_div_18_ng_container_9_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RoleListComponent_div_18_ng_container_9_td_2_button_1_Template, 3, 3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RoleListComponent_div_18_ng_container_9_td_2_button_2_Template, 3, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r16.permissionObject == null ? null : ctx_r16.permissionObject.includes(ctx_r16.permissionCode == null ? null : ctx_r16.permissionCode.editRole));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r16.permissionObject == null ? null : ctx_r16.permissionObject.includes(ctx_r16.permissionCode == null ? null : ctx_r16.permissionCode.deleteRole));
} }
function RoleListComponent_div_18_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RoleListComponent_div_18_ng_container_9_th_1_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RoleListComponent_div_18_ng_container_9_td_2_Template, 3, 2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function RoleListComponent_div_18_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 39);
} }
function RoleListComponent_div_18_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 40);
} }
function RoleListComponent_div_18_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RoleListComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](3, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, RoleListComponent_div_18_th_4_Template, 3, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, RoleListComponent_div_18_td_5_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](6, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, RoleListComponent_div_18_th_7_Template, 3, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, RoleListComponent_div_18_td_8_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, RoleListComponent_div_18_ng_container_9_Template, 3, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, RoleListComponent_div_18_tr_10_Template, 1, 0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, RoleListComponent_div_18_tr_11_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, RoleListComponent_div_18_tr_12_Template, 3, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx_r1.objectArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r1.permissionObject == null ? null : ctx_r1.permissionObject.includes(ctx_r1.permissionCode == null ? null : ctx_r1.permissionCode.editRole)) || (ctx_r1.permissionObject == null ? null : ctx_r1.permissionObject.includes(ctx_r1.permissionCode == null ? null : ctx_r1.permissionCode.deleteRole)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
function RoleListComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "pagination", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onPageChange", function RoleListComponent_div_19_Template_pagination_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r25.getPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("paginationList", ctx_r2.pagination)("currentPage", ctx_r2.currentPage)("selectedPageLimit", ctx_r2.currentPageLimit);
} }
class RoleListComponent {
    constructor(paginationService, commonService, dialog, roleService, router, dataService) {
        this.paginationService = paginationService;
        this.commonService = commonService;
        this.dialog = dialog;
        this.roleService = roleService;
        this.router = router;
        this.dataService = dataService;
        this.displayedColumns = ['name', 'description'];
        this.filterColumns = ['Name', 'Description'];
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
        this.currentPageLimit = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultPageLimit;
        this.permissionCode = src_app_shared_permission__WEBPACK_IMPORTED_MODULE_2__.permission;
        this.searchFilter = {};
        this.isShort = false;
        this.dataService.permission.subscribe((response) => {
            var _a, _b, _c, _d;
            this.permissionObject = response;
            if (((_a = this.permissionObject) === null || _a === void 0 ? void 0 : _a.includes((_b = this.permissionCode) === null || _b === void 0 ? void 0 : _b.editRole)) || ((_c = this.permissionObject) === null || _c === void 0 ? void 0 : _c.includes((_d = this.permissionCode) === null || _d === void 0 ? void 0 : _d.deleteRole)))
                this.displayedColumns.push('action');
        });
    }
    ngOnInit() {
        this.getObjects();
    }
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
        this.roleService.getRoleList(params).subscribe((response) => {
            this.loadingState = false;
            if (response) {
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
                this.roleService.deleteRole(result.id).subscribe((res) => {
                    this.getObjects();
                });
            }
        });
    }
}
RoleListComponent.ɵfac = function RoleListComponent_Factory(t) { return new (t || RoleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_role_service__WEBPACK_IMPORTED_MODULE_5__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService)); };
RoleListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: RoleListComponent, selectors: [["app-role-list"]], decls: 20, vars: 4, consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "m-0", "mt-3"], [1, "col-md-3", "admin-brdcmb", "mt-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-0"], [1, "row", "m-0", "buttons"], [1, "w-30"], [3, "placeholder", "text"], ["class", "adbtn col", 4, "ngIf"], [1, "col-lg-12", "mt-3"], ["class", "main-div", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "adbtn", "col"], ["routerLink", "add", "mat-raised-button", "", "color", "primary", 1, "mr-5"], [1, "main-div"], [1, "admin-table"], ["mat-table", "", 1, "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "action", 4, "ngIf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["src", "assets/images/filter.svg", 3, "click"], ["mat-cell", ""], ["matColumnDef", "action"], ["type", "button", "class", "btn btn-green text-success", 3, "routerLink", 4, "ngIf"], ["type", "button", "class", "btn btn-red text-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-green", "text-success", 3, "routerLink"], ["type", "button", 1, "btn", "btn-red", "text-danger", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "9999", 1, "mat-cell"], [1, "mt-3"], [3, "paginationList", "currentPage", "selectedPageLimit", "onPageChange"]], template: function RoleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "search-box", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("text", function RoleListComponent_Template_search_box_text_15_listener($event) { return ctx.searchObject($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, RoleListComponent_div_16_Template, 4, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, RoleListComponent_div_18_Template, 13, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, RoleListComponent_div_19_Template, 2, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.addRole));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.roleList));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.objectArray == null ? null : ctx.objectArray.length) > 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _core_search_search_component__WEBPACK_IMPORTED_MODULE_7__.SearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatNoDataRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _core_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent], styles: [".main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%] {\n    padding: 1rem 0rem;\n  }\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%] {\n    padding: 0;\n    background-color: transparent;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    box-shadow: none;\n    background-color: transparent;\n    padding: 0px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .admin-table[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .admin-table[_ngcontent-%COMP%] {\n    overflow: auto;\n    margin-top: 20px;\n  }\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .admin-table[_ngcontent-%COMP%] {\n    overflow: auto;\n    margin-top: 20px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 70px;\n  border-radius: 1rem;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #edf0ff;\n  font-size: 18px;\n  font-weight: 600;\n  text-align: left;\n  color: #1a58f6;\n  border: none;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: sub;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 55px;\n  border-radius: 0.8rem 0rem 0rem 0.8rem;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 20px;\n    text-align: left;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 20px;\n    text-align: left;\n    min-width: 160px;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 50px;\n    text-align: justify;\n  }\n}\n@media (max-width: 320px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 50px;\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    text-align: justify;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    text-align: justify;\n    min-width: 220px;\n  }\n}\n@media (max-width: 320px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n  padding-left: 52px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding: 0;\n    text-align: justify;\n  }\n}\n@media (max-width: 575px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    min-width: 120px;\n    padding-left: 15px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.8rem 0.8rem 0;\n  text-align: left;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: none;\n  color: var(--color-secondary);\n  font-size: 16px;\n  line-height: 24px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 1px 6px 10px #969696;\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  margin-right: 16px;\n  margin-bottom: 10px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 55px;\n  border-radius: 0.8rem 0rem 0rem 0.8rem;\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding: 7px 0px 0px 15px;\n  }\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding: 5px 20px;\n  }\n}\n@media (max-width: 578px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 320px;\n    text-align: justify;\n    padding-left: 50px;\n  }\n}\n@media (max-width: 425px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 350px;\n  }\n}\n@media (max-width: 325px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 202px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding: 11px 0px 0px 0px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  padding-left: 55px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    padding: 11px 0px 0px 0px;\n    text-align: justify;\n  }\n}\n@media (max-width: 575px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    min-width: 120px;\n    padding-left: 15px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-radius: 0;\n  text-align: left;\n  padding: 5px 0px 0px;\n  min-width: 124px;\n}\n@media (max-width: 578px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    min-width: 120px;\n    padding: 0px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   button[_ngcontent-%COMP%] {\n  margin: 0px 5px;\n  border-radius: 10px;\n  line-height: 0;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn-green[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-green);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn-red[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-red);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn-yellow[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-yellow);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: var(--color-light-gray);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .pagin-sel[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--black);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .pagin-sel[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--color-light-gray);\n  border-radius: 5px;\n  padding: 5px;\n  margin-left: 5px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border: none !important;\n  background-color: orange;\n}\n.main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n  width: 18rem;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 20px;\n  }\n}\n@media (max-width: 991.98px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 15px 5px 15px 15px;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 40%;\n    padding: 15px 5px 15px 15px;\n  }\n}\n@media (max-width: 425px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 0px 15px 0px;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 0px 15px 0px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .admin-brdcmb[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.mr-5[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.adbtn[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 575.98px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n}\n@media (max-width: 798px) {\n  .adbtn[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 15px 7px 15px 0px;\n    display: flex;\n  }\n}\n@media (max-width: 1024px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 0px 7px 15px 0px;\n    width: 200px;\n    display: flex;\n  }\n}\n@media (max-width: 991.98px) {\n  .adbtn[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 15px 0px 0px 0px;\n    display: flex;\n  }\n}\n@media (max-width: 425px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 15px 0px 15px 0px;\n  }\n}\n@media (max-width: 375px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 15px 0px 15px 0px;\n    display: block;\n  }\n}\n@media (max-width: 320px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 15px 0px 15px 0px;\n    display: block;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n}\n@media (max-width: 578px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    height: 50px;\n  }\n}\n@media (max-width: 798px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 78%;\n    margin-right: 5px;\n  }\n}\n@media (max-width: 425px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n}\n@media (max-width: 375px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n    margin-left: 0;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--white);\n  text-decoration: none;\n}\n.adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 5px;\n}\n@media (max-width: 578px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    height: 50px;\n  }\n}\n@media (max-width: 798px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 75%;\n    margin-right: 5px;\n  }\n}\n@media (max-width: 425px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n}\n@media (max-width: 375px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%] {\n  position: relative;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: none;\n  position: absolute;\n  z-index: 88888888;\n  top: -9px;\n  left: 15px;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid rgba(0, 0, 0, 0.72);\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:after {\n  content: \"Copy to Clipboard\";\n  display: none;\n  position: absolute;\n  z-index: 9999;\n  top: -45px;\n  left: -37px;\n  width: 114px;\n  height: 36px;\n  color: #fff;\n  font-size: 10px;\n  line-height: 36px;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.72);\n  border-radius: 3px;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:hover:before, .integration-checklist__copy-button[_ngcontent-%COMP%]:hover:after {\n  display: block;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:active, .integration-checklist__copy-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:active:after, .integration-checklist__copy-button[_ngcontent-%COMP%]:focus:after {\n  content: \"Copied!\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFMRjtJQU1JLGtCQUFBO0VBRUY7QUFDRjtBQURFO0VBUkY7SUFTSSxVQUFBO0lBQ0EsNkJBQUE7RUFJRjtBQUNGO0FBRkk7O0VBRUUsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSU47QUFBRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUFFSjtBQURJO0VBTEY7SUFNSSxnQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFQUlKO0FBQ0Y7QUFISTtFQUNFLGNBQUE7QUFLTjtBQUpNO0VBRkY7SUFHSSxjQUFBO0lBQ0EsZ0JBQUE7RUFPTjtBQUNGO0FBTk07RUFORjtJQU9JLGNBQUE7SUFDQSxnQkFBQTtFQVNOO0FBQ0Y7QUFOTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQVFSO0FBTlE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFRVjtBQVBVO0VBQ0UsbUJBQUE7QUFTWjtBQU5RO0VBQ0Usa0JBQUE7RUFDQSxzQ0FBQTtBQVFWO0FBUFU7RUFIRjtJQUlJLGtCQUFBO0lBQ0EsZ0JBQUE7RUFVVjtBQUNGO0FBVFU7RUFQRjtJQVFJLGtCQUFBO0lBQ0EsbUJBQUE7RUFZVjtBQUNGO0FBWFU7RUFYRjtJQVlJLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQWNWO0FBQ0Y7QUFiVTtFQWhCRjtJQWlCSSxrQkFBQTtJQUNBLG1CQUFBO0VBZ0JWO0FBQ0Y7QUFmVztFQXBCSDtJQXFCSyxrQkFBQTtJQUNBLG1CQUFBO0VBa0JYO0FBQ0Y7QUFoQlE7RUFFRSxnQkFBQTtBQWlCVjtBQWhCVTtFQUhGO0lBS0ksbUJBQUE7RUFrQlY7QUFDRjtBQWpCVTtFQVBGO0lBU0ksbUJBQUE7RUFtQlY7QUFDRjtBQWxCVTtFQVhGO0lBYUksbUJBQUE7RUFvQlY7QUFDRjtBQW5CVTtFQWZGO0lBaUJNLG1CQUFBO0lBQ0EsZ0JBQUE7RUFxQlo7QUFDRjtBQXBCVztFQXBCSDtJQXNCTyxtQkFBQTtFQXNCYjtBQUNGO0FBcEJRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQXNCVjtBQXJCVTtFQUhGO0lBSUksa0JBQUE7SUFDQSxtQkFBQTtFQXdCVjtBQUNGO0FBdkJVO0VBUEY7SUFRSSxrQkFBQTtJQUNBLG1CQUFBO0VBMEJWO0FBQ0Y7QUF6QlU7RUFYRjtJQVlJLFVBQUE7SUFDQSxtQkFBQTtFQTRCVjtBQUNGO0FBM0JXO0VBZkg7SUFnQkksZ0JBQUE7SUFDQSxrQkFBQTtFQThCVjtBQUNGO0FBNUJRO0VBRUUsZ0NBQUE7RUFDQSxnQkFBQTtBQTZCVjtBQXpCUTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTJCVjtBQXpCVTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUEyQlo7QUF2QlE7RUFDRSxrQkFBQTtFQUNBLHNDQUFBO0FBeUJWO0FBeEJVO0VBSEY7SUFJSSx5QkFBQTtFQTJCVjtBQUNGO0FBdkJVO0VBVEY7SUFVSSxpQkFBQTtFQTBCVjtBQUNGO0FBeEJVO0VBYkY7SUFjSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUEyQlY7QUFDRjtBQTFCVTtFQWxCRjtJQW1CSSxnQkFBQTtFQTZCVjtBQUNGO0FBNUJVO0VBckJGO0lBc0JJLGdCQUFBO0VBK0JWO0FBQ0Y7QUE3QlE7RUFFRSxnQkFBQTtBQThCVjtBQTdCVTtFQUhGO0lBSUksa0JBQUE7SUFDQSxtQkFBQTtFQWdDVjtBQUNGO0FBL0JVO0VBUEY7SUFRSSxrQkFBQTtJQUNBLG1CQUFBO0VBa0NWO0FBQ0Y7QUFqQ1U7RUFYRjtJQVlJLHlCQUFBO0VBb0NWO0FBQ0Y7QUFqQ1E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBbUNWO0FBbENVO0VBSEY7SUFJSSxrQkFBQTtJQUNBLG1CQUFBO0VBcUNWO0FBQ0Y7QUFwQ1U7RUFQRjtJQVFJLGtCQUFBO0lBQ0EsbUJBQUE7RUF1Q1Y7QUFDRjtBQXRDVTtFQVhGO0lBWUkseUJBQUE7SUFDQSxtQkFBQTtFQXlDVjtBQUNGO0FBeENVO0VBZkY7SUFnQkksZ0JBQUE7SUFDQSxrQkFBQTtFQTJDVjtBQUNGO0FBeENRO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUEwQ1Y7QUF0Q1U7RUFSRjtJQVNJLGdCQUFBO0lBQ0EsWUFBQTtFQXlDVjtBQUNGO0FBeENVO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQTBDWjtBQXhDVTtFQUNFLHdDQUFBO0FBMENaO0FBeENVO0VBQ0Usc0NBQUE7QUEwQ1o7QUF4Q1U7RUFDRSx5Q0FBQTtBQTBDWjtBQXJDTTtFQUNFLG1DQUFBO0FBdUNSO0FBbENNO0VBQ0UsbUJBQUE7QUFvQ1I7QUFsQ007RUFDRSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQW9DUjtBQTdCVTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUErQlo7QUF4QkU7RUFDRSxZQUFBO0FBMEJKO0FBekJJO0VBRkY7SUFHSSxXQUFBO0lBQ0EsaUJBQUE7RUE0Qko7QUFDRjtBQTNCSTtFQU5GO0lBT0ksVUFBQTtJQUNBLDJCQUFBO0VBOEJKO0FBQ0Y7QUE3Qkk7RUFWRjtJQVdJLFVBQUE7SUFDQSwyQkFBQTtFQWdDSjtBQUNGO0FBL0JJO0VBZEY7SUFlSSxXQUFBO0lBQ0EsMEJBQUE7RUFrQ0o7QUFDRjtBQWpDSTtFQWxCRjtJQW1CSSxXQUFBO0lBQ0EsMEJBQUE7RUFvQ0o7QUFDRjtBQWpDRTtFQUNFLGNBQUE7QUFtQ0o7QUEvQkE7RUFDRSxpQkFBQTtBQWtDRjtBQS9CQTtFQUNFLGlCQUFBO0FBa0NGO0FBakNFO0VBRkY7SUFHSSxpQkFBQTtFQW9DRjtBQUNGO0FBbkNFO0VBTEY7SUFNSSxnQkFBQTtJQUNBLDBCQUFBO0lBQ0EsYUFBQTtFQXNDRjtBQUNGO0FBckNFO0VBVkY7SUFXSSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VBd0NGO0FBQ0Y7QUF2Q0U7RUFmRjtJQWdCSSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtFQTBDRjtBQUNGO0FBekNFO0VBcEJGO0lBcUJJLDBCQUFBO0VBNENGO0FBQ0Y7QUEzQ0U7RUF2QkY7SUF3QkksMEJBQUE7SUFDQSxjQUFBO0VBOENGO0FBQ0Y7QUE3Q0U7RUEzQkY7SUE0QkksMEJBQUE7SUFDQSxjQUFBO0VBZ0RGO0FBQ0Y7QUEvQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0FBaURKO0FBaERJO0VBUEY7SUFRSSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7RUFtREo7QUFDRjtBQWxESTtFQVpGO0lBYUksVUFBQTtJQUNBLGlCQUFBO0VBcURKO0FBQ0Y7QUFwREk7RUFoQkY7SUFpQkksV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUF1REo7QUFDRjtBQXRESTtFQXJCRjtJQXNCSSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBeURKO0FBQ0Y7QUF4REk7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBMEROO0FBdERFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUF3REo7QUF2REk7RUFORjtJQU9JLFdBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtFQTBESjtBQUNGO0FBekRJO0VBWEY7SUFZSSxVQUFBO0lBQ0EsaUJBQUE7RUE0REo7QUFDRjtBQTNESTtFQWZGO0lBZ0JJLFVBQUE7RUE4REo7QUFDRjtBQTdESTtFQWxCRjtJQW1CSSxXQUFBO0lBQ0EsbUJBQUE7RUFnRUo7QUFDRjtBQS9ESTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7QUFpRU47QUExQ0E7RUFDRSxrQkFBQTtBQTZDRjtBQTNDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7QUE0Q0o7QUF6Q0U7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsK0JBQUE7RUFDQSxrQkFBQTtBQXlDSjtBQXRDRTtFQUNFLHNCQUFBO0FBd0NKO0FBdENJO0VBRUUsY0FBQTtBQXVDTjtBQW5DRTtFQUVFLGFBQUE7QUFvQ0o7QUFsQ0k7RUFDRSxrQkFBQTtBQW9DTiIsImZpbGUiOiJyb2xlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ibHVlKTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzk4cHgpe1xyXG4gICAgcGFkZGluZzogMXJlbSAwcmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiB7XHJcbiAgICAmIGEsXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWluLWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2IoMjYgODggMjQ2IC8gMTclKTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYWRtaW4tdGFibGUge1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmIHRhYmxlIHtcclxuICAgICAgJiB0ciB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblxyXG4gICAgICAgICYgdGgge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VkZjBmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6ICMxYTU4ZjY7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAmIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgdGg6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtIDByZW0gMHJlbSAwLjhyZW07XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzk4cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmIHRoOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgICAgIC8vICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgdGg6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNTJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzk4cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJiB0aDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIC8vIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAuOHJlbSAwLjhyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAvLyB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gICAgICAgICAgJiBpbWcge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggNnB4IDEwcHggIzk2OTY5NjtcclxuICAgICAgICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtIDByZW0gMHJlbSAwLjhyZW07XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzk4cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDBweCAwcHggMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOjVweCAyMHB4O1xyXG4gICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc4cHgpIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzI1cHgpIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJiB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiB0ZDpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHggMHB4O1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxMjRweDtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjEwMjRweCkge1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3OHB4KSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tZ3JlZW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1yZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29sb3ItcmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4teWVsbG93IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yLXllbGxvdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtZ3JheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFnaW4tc2VsIHtcclxuICAgICAgJiBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgICAgfVxyXG4gICAgICAuc2VsZWN0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtZ3JheSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudy0zMCB7XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgXHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggNXB4IDE1cHggMTVweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCl7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggNXB4IDE1cHggMTVweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCl7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCl7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hZG1pbi1icmRjbWIge1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubXItNSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5hZGJ0biB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KXtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH0gXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDdweCAxNXB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfSBcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgIHBhZGRpbmc6IDBweCA3cHggMTVweCAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH0gXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYmEoMjYsIDg4LCAyNDYsIDAuNDkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc4cHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgaGVpZ2h0OiA1MHB4OztcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCl7XHJcbiAgICAgIHdpZHRoOiA3OCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgJiBhIHtcclxuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3OHB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGhlaWdodDogNTBweDs7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzk4cHgpe1xyXG4gICAgICB3aWR0aDogNzUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCl7XHJcbiAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgICYgYSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gcmVzcG9uc2l2ZSBjb2RlIHN0YXJ0XHJcblxyXG4vLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIGxlc3MgdGhhbiA1NzZweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbn1cclxuXHJcbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIGxlc3MgdGhhbiA3NjhweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbn1cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCBsZXNzIHRoYW4gOTkycHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG59XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgbGVzcyB0aGFuIDEyMDBweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG59XHJcblxyXG4uaW50ZWdyYXRpb24tY2hlY2tsaXN0X19jb3B5LWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDg4ODg4ODg4O1xyXG4gICAgdG9wOiAtOXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG5cclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNzIpO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIkNvcHkgdG8gQ2xpcGJvYXJkXCI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHRvcDogLTQ1cHg7XHJcbiAgICBsZWZ0OiAtMzdweDtcclxuICAgIHdpZHRoOiAxMTRweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43Mik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcblxyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSxcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiQ29waWVkIVwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2308:
/*!********************************************!*\
  !*** ./src/app/module/role/role.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleModule": () => (/* binding */ RoleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ 3153);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/pagination/pagination.module */ 9304);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-role/add-role.component */ 3981);
/* harmony import */ var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-list/role-list.component */ 9077);
/* harmony import */ var src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/search/search.module */ 4778);
/* harmony import */ var src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/permission */ 9206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);













const routes = [
    {
        path: "",
        component: _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_5__.RoleListComponent,
        data: { title: 'Role List', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.roleList }
    },
    {
        path: "add",
        component: _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__.AddRoleComponent,
        data: { title: 'Add Role', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.addRole }
    },
    {
        path: 'edit/:id',
        component: _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__.AddRoleComponent,
        data: { title: 'Update Role', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.editRole }
    }
];
class RoleModule {
}
RoleModule.ɵfac = function RoleModule_Factory(t) { return new (t || RoleModule)(); };
RoleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: RoleModule });
RoleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_1__.FormValidationModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_2__.PaginationModule,
            src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_6__.SearchModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](RoleModule, { declarations: [_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_5__.RoleListComponent, _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__.AddRoleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_1__.FormValidationModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_2__.PaginationModule,
        src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_6__.SearchModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_module_role_role_module_ts.js.map