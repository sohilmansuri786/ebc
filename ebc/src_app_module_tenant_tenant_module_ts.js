"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["src_app_module_tenant_tenant_module_ts"],{

/***/ 5467:
/*!******************************************************************!*\
  !*** ./src/app/module/tenant/add-tenant/add-tenant.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTenantComponent": () => (/* binding */ AddTenantComponent)
/* harmony export */ });
/* harmony import */ var D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_shared_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/common */ 3118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var src_app_service_tenant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/tenant.service */ 8444);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common.service */ 5842);
/* harmony import */ var _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/form-validation/directive/form-submit.directive */ 9855);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/form-validation/directive/control-errors.directive */ 6242);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _shared_directive_number_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directive/number.directive */ 3580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 8133);




















function AddTenantComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????propertyInterpolate"]("value", ctx_r0.addForm.controls["code"].value);
  }
}

function AddTenantComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("input", function AddTenantComponent_ng_container_36_Template_input_input_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
      return ctx_r8.onCheckCodeExist();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", ctx_r1.isEditing)("formControl", ctx_r1.addForm.controls["code"]);
  }
}

function AddTenantComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r2.formErrors == null ? null : ctx_r2.formErrors.code);
  }
}

function AddTenantComponent_div_46_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Contact is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}

function AddTenantComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, AddTenantComponent_div_46_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r3.addForm.get("primaryContact").errors == null ? null : ctx_r3.addForm.get("primaryContact").errors.pattern);
  }
}

function AddTenantComponent_div_55_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Email address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}

function AddTenantComponent_div_55_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Email address is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}

function AddTenantComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, AddTenantComponent_div_55_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, AddTenantComponent_div_55_small_2_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r4.addForm.get("primaryEmailId").errors == null ? null : ctx_r4.addForm.get("primaryEmailId").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r4.addForm.get("primaryEmailId").errors == null ? null : ctx_r4.addForm.get("primaryEmailId").errors.pattern);
  }
}

function AddTenantComponent_div_68_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Email address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}

function AddTenantComponent_div_68_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Email address is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}

function AddTenantComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, AddTenantComponent_div_68_small_1_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, AddTenantComponent_div_68_small_2_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r5.addForm.get("secondaryEmailId").errors == null ? null : ctx_r5.addForm.get("secondaryEmailId").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r5.addForm.get("secondaryEmailId").errors == null ? null : ctx_r5.addForm.get("secondaryEmailId").errors.pattern);
  }
}

function AddTenantComponent_mat_option_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }

  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", item_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", item_r15.name, " ");
  }
}

const pattern = "(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)";
class AddTenantComponent {
  constructor(router, fb, toastService, tenantService, commonService, activatedRoute) {
    this.router = router;
    this.fb = fb;
    this.toastService = toastService;
    this.tenantService = tenantService;
    this.commonService = commonService;
    this.activatedRoute = activatedRoute;
    this.hide = true;
    this.hide1 = true;
    this.showLoader = false;
    this.formErrors = {
      primaryEmailId: null,
      code: null,
      apierror: null
    };
    this.tierListArray = [];
    this.isEditing = false;
    this.editId = null;
    this.pageTitle = "Add Tenant";
    this.emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.isEditing = true;
      this.editId = this.activatedRoute.snapshot.paramMap.get('id');
      this.isEditing ? this.pageTitle = 'Update Tenant' : this.pageTitle = 'Add Tenant';
    }

    this.addForm = this.fb.group({
      adminLoginId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email])],
      companyName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
      primaryContact: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(20)])],
      primaryEmailId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.emailRegEx)])],
      secondaryContact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(20)])],
      website: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(pattern)])],
      secondaryEmailId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.emailRegEx)],
      tierId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
      logo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
      addressId: [""],
      address: fb.group({
        addressName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
        building: [""],
        street: [""],
        locality: [""],
        postalcode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
        city: [""],
        state: [""],
        country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
        isPrimary: [true]
      }),
      userLicense: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
      emailTemplate: [''],
      dbConnection: [''],
      code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
      new_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(4)])],
      confirm_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])]
    }, {
      validator: src_app_shared_common__WEBPACK_IMPORTED_MODULE_1__.PasswordValidation.passwordValidation()
    });
  }

  ngOnInit() {
    this.getMasterData();

    if (this.isEditing) {
      this.getEditObject();
    }
  }

  getMasterData() {
    this.tenantService.getTiers({
      "searchFilter": null,
      "page": 1,
      "pageSize": 0,
      "fields": null
    }).subscribe(res => {
      if (res) {
        this.tierListArray = res.data;
      }
    });
  }

  getEditObject() {
    this.tenantService.getTenantById({
      id: this.editId
    }).subscribe(response => {
      if (response) {
        this.tenantDetails = response.data; // this.addForm.patchValue(response.data);

        this.addForm = this.fb.group({
          adminLoginId: response.data.adminLoginId,
          adminPassword: response.data.adminPassword,
          companyName: response.data.companyName,
          primaryContact: response.data.primaryContact,
          primaryEmailId: response.data.primaryEmailId,
          secondaryContact: response.data.secondaryContact,
          website: response.data.website,
          secondaryEmailId: response.data.secondaryEmailId,
          tierId: response.data.tierId,
          isDeleted: response.data.isDeleted,
          tId: response.data.id,
          logo: response.data.logo,
          updatedDate: response.data.updatedDate,
          addressId: response.data.addressId,
          address: this.fb.group({
            addressName: response.miscData.addressName,
            building: response.miscData.building,
            street: response.miscData.street,
            locality: response.miscData.locality,
            postalcode: response.miscData.postalcode,
            city: response.miscData.city,
            state: response.miscData.state,
            country: response.miscData.country,
            isPrimary: response.miscData.isPrimary,
            createdDate: response.miscData.createdDate,
            id: response.miscData.id,
            isDeleted: response.miscData.isDeleted,
            updatedDate: response.miscData.updatedDate
          }),
          userLicense: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
          emailTemplate: response.data.emailTemplate,
          dbConnection: response.data.dbConnection,
          code: response.data.code,
          new_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(4)])],
          confirm_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])]
        });
        this.addForm.patchValue({
          new_password: response.data.adminPassword,
          confirm_password: response.data.adminPassword
        });
        this.onTierChange();
      } else {
        this.router.navigateByUrl('/tenant');
      }
    });
  }

  fileChangeEvent(fileInputFile) {
    const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;

    if (!fileInputFile.target.files[0].name.match(reg)) {
      this.toastService.error('Please select valid file');
      this.removeFile();
      return false;
    } else {
      this.removeFile();
      this.selectedFile = fileInputFile.target.files[0];
      this.addForm.get('logo').setValue(this.selectedFile.name); // var reader = new FileReader();
      // reader.onload = this.handleReaderLoadedFile.bind(this);
      // reader.readAsBinaryString(this.selectedFile);
    }
  }

  removeFile() {
    this.selectedFile = null;
  } // handleReaderLoadedFile(readerEvt) {
  //   var binaryString = readerEvt.target.result;
  //   this.base64textString = 'data:image/png;base64,' + btoa(binaryString);
  // }


  onTierChange() {
    this.tierListArray.map(data => {
      if (data.id == this.addForm.value.tierId) {
        this.addForm.patchValue({
          userLicense: data.licenseCount
        });
      }
    });
  }

  submitForm() {
    var _this = this;

    return (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.addForm.valid) {
        _this.showLoader = true;

        if (_this.selectedFile) {
          const data = new FormData();
          data.append('file', _this.selectedFile);
          yield _this.commonService.fileUpload(data).then(res => {
            _this.addForm.get('logo').setValue(res.data);
          });
        }

        let data = Object.assign(Object.assign({}, _this.addForm.value), {
          adminPassword: _this.addForm.value.new_password,
          country: _this.addForm.value.address.country
        });
        delete data.userLicense;
        delete data.new_password;
        delete data.confirm_password;

        if (_this.isEditing) {
          _this.tenantService.saveTenant(Object.assign(Object.assign({}, data), {
            id: _this.editId
          })).subscribe(response => {
            _this.showLoader = false;

            if (response.status == 'Ok') {
              _this.router.navigateByUrl('/tenant');
            } else {
              _this.toastService.error(response.message);

              response.error.map(obj => {
                if (obj.hasOwnProperty('primaryEmailId')) {
                  _this.formErrors['primaryEmailId'] = obj['primaryEmailId'];
                } else {
                  _this.formErrors['apierror'] = `* ${response.error}`;
                }
              });
            }
          }, error => {
            _this.showLoader = false;
          });
        } else {
          delete data.dbConnection;

          _this.tenantService.saveTenant(data).subscribe(response => {
            _this.showLoader = false;

            if (response.status == 'Ok') {
              _this.router.navigateByUrl('/tenant');
            } else {
              _this.toastService.error(response.message);

              response.error.map(obj => {
                if (obj.hasOwnProperty('primaryEmailId')) {
                  _this.formErrors['primaryEmailId'] = obj['primaryEmailId'];
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

  onCheckCodeExist() {
    this.tenantService.checkCodeExists(this.addForm.value.code).subscribe(res => {
      if (res.message == 'Exist') {
        this.addForm.controls['code'].setErrors({
          isExit: true
        });
        this.formErrors['code'] = 'Tenant code already exit';
      } else {
        this.addForm.controls['code'].setErrors(null);
        this.formErrors['code'] = false;
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

}

AddTenantComponent.??fac = function AddTenantComponent_Factory(t) {
  return new (t || AddTenantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_service_tenant_service__WEBPACK_IMPORTED_MODULE_2__.TenantService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
};

AddTenantComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({
  type: AddTenantComponent,
  selectors: [["app-add-tenant"]],
  decls: 188,
  vars: 40,
  consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "0"], [1, "col", "add-brdcmb"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["routerLink", "/tenant"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "main-div", "padding-x"], [1, "d-flex", "justify-content-between"], [1, "form-hadding"], [1, "form_field", "row", "justify-content-between", 3, "formGroup", "ngSubmit"], [1, "form-group", "w-45", "input-fildcl"], ["for", "lname", 1, "control-label"], [1, "inpu-t"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "placeholder", "Ex : Infosys", 3, "formControl"], [4, "ngIf"], [1, ""], ["matInput", "", "placeholder", "Ex : 098645322", 3, "formControl", "keypress"], ["matInput", "", "placeholder", "Ex : abc@gmail.com", 3, "formControl"], [3, "formControl", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Ex : Microsoft", 3, "readonly", "formControl"], [1, "imageoverlap"], ["appearance", "outline", 1, "w-100", 3, "click"], ["matInput", "", "readonly", "", "placeholder", "Upload", 3, "formControl"], ["src", "assets/images/Upload.svg", 1, "upload-icon"], ["hidden", "", "accept", "image/x-png,image/jpeg", "type", "file", "file-model", "myFile", 3, "change"], ["fileInput", ""], ["type", "email", "matInput", "", "placeholder", "Ex : abc@gmail.com", 3, "readonly", "formControl"], ["matInput", "", "placeholder", "Admin Password", 3, "formControl", "type"], ["matSuffix", "", 1, "eye-icon3", 3, "click"], ["matInput", "", "placeholder", "Ex : https://www.infosys.com", 3, "formControl"], ["formGroupName", "address", 1, "form-group"], ["matInput", "", "formControlName", "addressName", "placeholder", "Ex : Primary"], ["matInput", "", "formControlName", "street", "placeholder", "Ex : Street"], ["matInput", "", "formControlName", "building", "placeholder", "Ex : Building"], ["matInput", "", "number", "", "formControlName", "postalcode", "placeholder", "Ex : Postalcode"], ["matInput", "", "formControlName", "city", "placeholder", "Ex : City"], ["matInput", "", "formControlName", "state", "placeholder", "Ex : State"], ["matInput", "", "formControlName", "country", "placeholder", "Ex : country"], [1, "d-flex", "justify-content-end", "margin-y"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["disabled", "", "matInput", "", "placeholder", "Ex : code", 3, "value"], ["matInput", "", "placeholder", "Ex : code", 3, "readonly", "formControl", "input"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [3, "value"]],
  template: function AddTenantComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "nav", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "ol", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](12, "Tenant");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](19, "form", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("ngSubmit", function AddTenantComponent_Template_form_ngSubmit_19_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](21, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](22, "Company name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](23, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](24, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](25, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](26, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](27, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](28, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](29, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](30, "Code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](31, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](32, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](33, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](34, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](35, AddTenantComponent_ng_container_35_Template, 2, 1, "ng-container", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](36, AddTenantComponent_ng_container_36_Template, 2, 2, "ng-container", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](37, AddTenantComponent_mat_error_37_Template, 2, 1, "mat-error", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](38, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](39, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](40, "Primary Contact ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](41, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](42, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](43, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](44, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](45, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("keypress", function AddTenantComponent_Template_input_keypress_45_listener($event) {
        return ctx.keyPressAlphaNumerics($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](46, AddTenantComponent_div_46_Template, 2, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](47, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](48, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](49, "Primary Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](50, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](51, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](52, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](53, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](54, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](55, AddTenantComponent_div_55_Template, 3, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](56, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](57, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](58, "Secondary Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](59, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](60, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](61, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("keypress", function AddTenantComponent_Template_input_keypress_61_listener($event) {
        return ctx.keyPressAlphaNumerics($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](62, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](63, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](64, "Secondary Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](65, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](66, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](67, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](68, AddTenantComponent_div_68_Template, 3, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](69, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](70, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](71, "Tier ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](72, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](73, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](74, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](75, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](76, "mat-select", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("selectionChange", function AddTenantComponent_Template_mat_select_selectionChange_76_listener() {
        return ctx.onTierChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](77, AddTenantComponent_mat_option_77_Template, 2, 2, "mat-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](78, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](79, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](80, "User License ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](81, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](82, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](83, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](84, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](85, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](86, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](87, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](88, "Logo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](89, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](90, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](91, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](92, "mat-form-field", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AddTenantComponent_Template_mat_form_field_click_92_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r16);

        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????reference"](96);

        return _r7.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](93, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](94, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](95, "input", 31, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("change", function AddTenantComponent_Template_input_change_95_listener($event) {
        return ctx.fileChangeEvent($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](97, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](98, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](99, "Admin Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](100, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](101, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](102, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](103, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](104, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](105, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](106, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](107, "Admin Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](108, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](109, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](110, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](111, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](112, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](113, "mat-icon", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AddTenantComponent_Template_mat_icon_click_113_listener() {
        return ctx.hide = !ctx.hide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](114);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](115, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](116, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](117, "Confirm Admin Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](118, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](119, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](120, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](121, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](122, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](123, "mat-icon", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AddTenantComponent_Template_mat_icon_click_123_listener() {
        return ctx.hide1 = !ctx.hide1;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](124);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](125, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](126, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](127, "Website ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](128, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](129, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](130, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](131, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](132, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](133, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](134, "Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](135, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](136, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](137, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](138, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](139, "Address Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](140, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](141, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](142, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](143, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](144, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](145, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](146, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](147, "Street");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](148, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](149, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](150, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](151, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](152, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](153, "Building");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](154, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](155, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](156, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](157, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](158, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](159, "Postalcode ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](160, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](161, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](162, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](163, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](164, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](165, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](166, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](167, "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](168, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](169, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](170, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](171, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](172, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](173, "State");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](174, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](175, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](176, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](177, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](178, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](179, "Country ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](180, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](181, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](182, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](183, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](184, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](185, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](186, "button", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](187, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx.pageTitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formGroup", ctx.addForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formControl", ctx.addForm.controls["companyName"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????classProp"]("inpu-t1", ctx.isEditing);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.isEditing);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx.isEditing);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.formErrors == null ? null : ctx.formErrors.code);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????classProp"]("is-invalid", ctx.addForm.get("primaryContact").invalid && ctx.addForm.get("primaryContact").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formControl", ctx.addForm.controls["primaryContact"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.addForm.get("primaryContact").invalid && ctx.addForm.get("primaryContact").touched || ctx.addForm.get("primaryContact").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????classProp"]("is-invalid", ctx.addForm.get("primaryEmailId").invalid && ctx.addForm.get("primaryEmailId").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formControl", ctx.addForm.controls["primaryEmailId"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.addForm.get("primaryEmailId").invalid && ctx.addForm.get("primaryEmailId").touched || ctx.addForm.get("primaryEmailId").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formControl", ctx.addForm.controls["secondaryContact"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????classProp"]("is-invalid", ctx.addForm.get("secondaryEmailId").invalid && ctx.addForm.get("secondaryEmailId").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formControl", ctx.addForm.controls["secondaryEmailId"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.addForm.get("secondaryEmailId").invalid && ctx.addForm.get("secondaryEmailId").touched || ctx.addForm.get("secondaryEmailId").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formControl", ctx.addForm.controls["tierId"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx.tierListArray);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????classProp"]("inpu-t2", ctx.isEditing);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", ctx.isEditing)("formControl", ctx.addForm.controls["userLicense"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formControl", ctx.addForm.controls["logo"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????classProp"]("disabled", ctx.isEditing);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", ctx.isEditing)("formControl", ctx.addForm.controls["adminLoginId"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formControl", ctx.addForm.controls["new_password"])("type", ctx.hide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.hide ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formControl", ctx.addForm.controls["confirm_password"])("type", ctx.hide1 ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.hide1 ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formControl", ctx.addForm.controls["website"]);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_4__.FormSubmitDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_5__.ControlErrorsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_directive_number_directive__WEBPACK_IMPORTED_MODULE_6__.NumberDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption],
  styles: [".mat-option:before,   .mat-select:before {\n  position: absolute;\n  width: 20px;\n  height: 10px;\n  left: 120px;\n  content: \"\";\n}\n\n.main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 600;\n  font-size: 22px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .imageoverlap[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  padding-right: 40px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .dashed-line[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #ccc;\n  width: 35%;\n  margin-right: 15px;\n  margin-left: 15px;\n  height: 26px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .margin-y[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  margin-left: -1.3rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .image-icon[_ngcontent-%COMP%] {\n  margin-top: -4px;\n  width: 25px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  top: 11px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  top: 11px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .inpu-t1[_ngcontent-%COMP%]     .mat-form-field-outline {\n  background-color: var(--color-light-gray);\n  border-radius: 4px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .inpu-t1[_ngcontent-%COMP%]     .cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  color: var(--color-gray);\n  font-size: 14px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .inpu-t2[_ngcontent-%COMP%]     .mat-form-field-outline {\n  background-color: var(--color-light-gray);\n  border-radius: 4px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .inpu-t2[_ngcontent-%COMP%]     .cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  color: var(--color-gray);\n  font-size: 14px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]     .mat-form-field-outline {\n  background-color: var(--color-light-gray);\n  border-radius: 4px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]     .cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  color: var(--color-gray);\n  font-size: 14px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n  padding-left: 8rem;\n  padding-right: 8rem;\n  padding-top: 4rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n  width: 45%;\n  margin-bottom: 5px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  color: var(--white);\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n}\n\n@media (max-width: 1199.98px) {\n  .side_container[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0px;\n    padding-left: 0px;\n  }\n\n  .main-page[_ngcontent-%COMP%]   form.pt-5.row.justify-content-between.ng-untouched.ng-pristine.ng-invalid[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n    padding-right: 2rem;\n    padding-top: 30px !important;\n  }\n}\n\n.division[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.division[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.division[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 8px;\n}\n\n@media (max-width: 530px) {\n  .main-page[_ngcontent-%COMP%] {\n    background-color: var(--white);\n    border-radius: 1rem;\n    padding: 20px;\n    box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n  }\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    padding: 0 10px !important;\n    background-color: transparent;\n    border-radius: 0;\n    box-shadow: none;\n  }\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   form.pt-5.row.justify-content-between.ng-untouched.ng-pristine.ng-invalid[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n  }\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n    color: var(--color-secondary);\n    font-weight: 500;\n    font-size: 20px;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: inherit;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .w-45[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: var(--color-secondary);\n    font-weight: 500;\n    font-size: 16px;\n  }\n  .main-page[_ngcontent-%COMP%]   .padding-x[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 240px;\n    height: 48px;\n    box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n    border-radius: 10px;\n    margin-left: 5px;\n    background-color: var(--color-primary);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10ZW5hbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBUUE7RUFDRSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRSTs7RUFFRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFOTjs7QUFVRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUFSSjs7QUFVSTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUk47O0FBV0k7RUFDRSxtQkFBQTtBQVROOztBQVlJO0VBQ0UsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFWTjs7QUFZSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQVZOOztBQVlJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBVk47O0FBWUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBVk47O0FBWUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBVk47O0FBYU07RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0FBWFI7O0FBYU07RUFDRSx3QkFBQTtFQUNBLGVBQUE7QUFYUjs7QUFlSTtFQUNFLHlDQUFBO0VBQ0Esa0JBQUE7QUFiTjs7QUFlSTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQWJOOztBQWlCSTtFQUNFLHlDQUFBO0VBQ0Esa0JBQUE7QUFmTjs7QUFpQkk7RUFDRSx3QkFBQTtFQUNBLGVBQUE7QUFmTjs7QUFvQkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFsQko7O0FBcUJNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBbkJSOztBQXNCTTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBcEJSOztBQXVCTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtBQXJCUjs7QUEwQ0E7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUF4Q0o7O0VBNkNFO0lBQ0UsNEJBQUE7RUExQ0o7RUE0Q0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsNEJBQUE7RUExQ0o7QUFDRjs7QUE2Q0E7RUFDRSxnQkFBQTtBQTNDRjs7QUE0Q0U7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTFDSjs7QUE0Q0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUExQ0o7O0FBOENBO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGdEQUFBO0VBM0NGO0VBNENFO0lBQ0UsMEJBQUE7SUFDQSw2QkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUExQ0o7RUE0Q0k7SUFDRSw0QkFBQTtFQTFDTjtFQTZDRTtJQUNFLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBM0NKO0VBK0NFO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtFQTdDRjtFQWdESTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQTlDTjtFQWlESTtJQUNFLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBL0NOO0VBa0RJO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxnREFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQ0FBQTtFQWhETjtBQUNGIiwiZmlsZSI6ImFkZC10ZW5hbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1vcHRpb246YmVmb3JlLFxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3Q6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGxlZnQ6IDEyMHB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLy8gbWl4aW4gc3RhcnRcclxuQG1peGluIGFsbC1pbnB1dC1zdHlsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm1haW4tcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtYmx1ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuXHJcbiAgLmJyZWFkY3J1bWIge1xyXG4gICAgJiBhLFxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi1kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiKDI2IDg4IDI0NiAvIDE3JSk7XHJcblxyXG4gICAgLmZvcm0taGFkZGluZyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlb3ZlcmxhcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhc2hlZC1saW5lIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjY2NjO1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luLXkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEuM3JlbTtcclxuICAgIH1cclxuICAgIC5pbWFnZS1pY29uIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuZXllLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtMjhweDtcclxuICAgICAgdG9wOiAxMXB4O1xyXG4gICAgfVxyXG4gICAgLnVwbG9hZC1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogLTI4cHg7XHJcbiAgICAgIHRvcDogMTFweDtcclxuICAgIH1cclxuICAgIC5pbnB1LXQxe1xyXG4gICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWdyYXkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG4gICAgICA6Om5nLWRlZXAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5pbnB1LXQye1xyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtZ3JheSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG4gIC5kaXNhYmxlZCB7XHJcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ncmF5KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICB9XHJcblxyXG4gIC5wYWRkaW5nLXgge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogOHJlbTtcclxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xyXG5cclxuICAgICYgZm9ybSB7XHJcbiAgICAgIC53LTQ1IHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJiBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyByZXNwb25zaXZlIGNvZGUgc3RhcnRcclxuXHJcbi8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxufVxyXG5cclxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgbGVzcyB0aGFuIDc2OHB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIGxlc3MgdGhhbiA5OTJweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBsZXNzIHRoYW4gMTIwMHB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcbiAgLnNpZGVfY29udGFpbmVyIHtcclxuICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWFpbi1wYWdlIHtcclxuXHJcbiAgICBmb3JtLnB0LTUucm93Lmp1c3RpZnktY29udGVudC1iZXR3ZWVuLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy1pbnZhbGlke1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBhZGRpbmcteCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmRpdmlzaW9ue1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgc3BhbntcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgaHJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTMwcHgpIHtcclxuICAubWFpbi1wYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYigyNiA4OCAyNDYgLyAxNyUpO1xyXG4gICAgLm1haW4tZGl2IHtcclxuICAgICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAgICAgZm9ybS5wdC01LnJvdy5qdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbi5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctaW52YWxpZHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgLmZvcm0taGFkZGluZyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIC8vIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAgIC5wYWRkaW5nLXgge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogaW5oZXJpdDtcclxuXHJcbiAgICAmIGZvcm0ge1xyXG4gICAgICAudy00NSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJiBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiYSgyNiwgODgsIDI0NiwgMC40OSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 1891:
/*!**************************************************************************************!*\
  !*** ./src/app/module/tenant/tenant-details-popup/tenant-details-popup.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantDetailsPopupComponent": () => (/* binding */ TenantDetailsPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class TenantDetailsPopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
TenantDetailsPopupComponent.??fac = function TenantDetailsPopupComponent_Factory(t) { return new (t || TenantDetailsPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
TenantDetailsPopupComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TenantDetailsPopupComponent, selectors: [["app-tenant-details-popup"]], decls: 56, vars: 0, consts: [[1, "main-model"], [1, "modal-head"], [1, "button-bg", 3, "click"], [1, "material-icons", "lg-18"], [1, "modal-body"], [1, "text-center"], ["src", "assets/images/swipewire-logo.svg", 1, "swip-logo"], [1, "px-80"], [1, "pt-5", "d-flex-div", "justify-content-between"], [1, "sw-icon-info", "d-flex", "justify-content-start", "align-items-center"], ["src", "assets/images/Vector-2.svg", 1, "sw-icon", "green-icon"], ["src", "assets/images/Vector-3.svg", 1, "sw-icon", "pink-icon"], ["src", "assets/images/Vector-4.svg", 1, "sw-icon", "yellow-icon"], ["src", "assets/images/Vector-1.svg", 1, "sw-icon", "blue-icon"]], template: function TenantDetailsPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TenantDetailsPopupComponent_Template_button_click_2_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "SwipeWire Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " A-31, 1st Floor, Lajpat nagar Part-II, New Delhi, 590032 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Tier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Tier 1 Level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Primary Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " +91 7886524528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Secondary Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " 080 2225147 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Primary Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Nec@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Secondary Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " EBC@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".tenant-popup .mat-dialog-container {\n  padding: 0px;\n  border-radius: 20px;\n  box-shadow: var(--popup-shadow);\n}\n\n.main-model[_ngcontent-%COMP%] {\n  border-style: none;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%] {\n  text-align: right;\n  background-color: var(--color-light-blue);\n  height: 134px;\n  padding: 5px;\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   .button-bg[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none transparent;\n  margin-right: 15px;\n  margin-top: 15px;\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: var(--color-secondary);\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .px-80[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: 0 auto;\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .px-80[_ngcontent-%COMP%]   .d-flex-div[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .px-80[_ngcontent-%COMP%]   .pt-5[_ngcontent-%COMP%] {\n  padding-top: 2rem !important;\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .swip-logo[_ngcontent-%COMP%] {\n  width: 293px;\n  height: 120px;\n  margin-top: -76px;\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .sw-icon[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 40px;\n  height: 40px;\n  padding: 10px;\n  margin-right: 15px;\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .sw-icon-info[_ngcontent-%COMP%] {\n  width: 42%;\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .sw-icon-info[_ngcontent-%COMP%]   .green-icon[_ngcontent-%COMP%] {\n  background: var(--btn-color-green);\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .sw-icon-info[_ngcontent-%COMP%]   .yellow-icon[_ngcontent-%COMP%] {\n  background: var(--color-orange-light);\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .sw-icon-info[_ngcontent-%COMP%]   .pink-icon[_ngcontent-%COMP%] {\n  background: var(--color-light-pink);\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .sw-icon-info[_ngcontent-%COMP%]   .blue-icon[_ngcontent-%COMP%] {\n  background: var(--color-LightBlue);\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .sw-icon-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  padding: 0px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .sw-icon-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--color-gray);\n  font-size: 12px;\n  line-height: 18px;\n}\n\n@media (max-width: 767.98px) {\n  .main-model[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%] {\n    height: 90px;\n  }\n  .main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .swip-logo[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 70px;\n  }\n  .main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .px-80[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .px-80[_ngcontent-%COMP%]   .d-flex-div[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n  .main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .px-80[_ngcontent-%COMP%]   .d-flex-div[_ngcontent-%COMP%]   .sw-icon-info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .px-80[_ngcontent-%COMP%]   .d-flex-div[_ngcontent-%COMP%]   .sw-icon-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .main-model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .px-80[_ngcontent-%COMP%]   .pt-5[_ngcontent-%COMP%] {\n    padding-top: 1rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbmFudC1kZXRhaWxzLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBSTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRU47O0FBR0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFETjs7QUFHSTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBRE47O0FBR007RUFDRSxhQUFBO0FBRFI7O0FBR007RUFDRSw0QkFBQTtBQURSOztBQUlJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUZOOztBQUtJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUhOOztBQU1JO0VBY0UsVUFBQTtBQWpCTjs7QUFJTTtFQUNFLGtDQUFBO0FBRlI7O0FBSU07RUFDRSxxQ0FBQTtBQUZSOztBQUlNO0VBQ0UsbUNBQUE7QUFGUjs7QUFJTTtFQUNFLGtDQUFBO0FBRlI7O0FBTU07RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpSOztBQU1RO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKVjs7QUFZQTtFQUVJO0lBQ0UsWUFBQTtFQVZKO0VBYUk7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQVhOO0VBYUk7SUFDRSxXQUFBO0VBWE47RUFZTTtJQUNFLGlDQUFBO0VBVlI7RUFZUTtJQUNFLFdBQUE7RUFWVjtFQVdVO0lBQ0UsZUFBQTtFQVRaO0VBYU07SUFDRSw0QkFBQTtFQVhSO0FBQ0YiLCJmaWxlIjoidGVuYW50LWRldGFpbHMtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnRlbmFudC1wb3B1cCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXBvcHVwLXNoYWRvdyk7XHJcbn1cclxuLm1haW4tbW9kZWwge1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5tb2RhbC1oZWFkIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtYmx1ZSk7XHJcbiAgICBoZWlnaHQ6IDEzNHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgIC5idXR0b24tYmcge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyOiBub25lIHRyYW5zcGFyZW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kYWwtYm9keSB7XHJcbiAgICAmIGg1IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICAgIC5weC04MCB7XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgLmQtZmxleC1kaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgICAgLnB0LTUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zd2lwLWxvZ28ge1xyXG4gICAgICB3aWR0aDogMjkzcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC03NnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdy1pY29uIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdy1pY29uLWluZm8ge1xyXG4gICAgICAuZ3JlZW4taWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYnRuLWNvbG9yLWdyZWVuKTtcclxuICAgICAgfVxyXG4gICAgICAueWVsbG93LWljb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW9yYW5nZS1saWdodCk7XHJcbiAgICAgIH1cclxuICAgICAgLnBpbmstaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtcGluayk7XHJcbiAgICAgIH1cclxuICAgICAgLmJsdWUtaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItTGlnaHRCbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2lkdGg6IDQyJTtcclxuICAgICAgJiBwIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gICAgICAgICYgc21hbGwge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXkpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCBsZXNzIHRoYW4gNzY4cHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gIC5tYWluLW1vZGVsIHtcclxuICAgIC5tb2RhbC1oZWFkIHtcclxuICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAuc3dpcC1sb2dvIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5weC04MCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLmQtZmxleC1kaXYge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgIC5zdy1pY29uLWluZm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgJiBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnB0LTUge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5448:
/*!********************************************************************!*\
  !*** ./src/app/module/tenant/tenant-list/tenant-list.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantListComponent": () => (/* binding */ TenantListComponent)
/* harmony export */ });
/* harmony import */ var _tenant_details_popup_tenant_details_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tenant-details-popup/tenant-details-popup.component */ 1891);
/* harmony import */ var src_app_core_action_popup_action_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/action-popup/action-popup.component */ 5597);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_shared_permission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/permission */ 9206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/pagination.service */ 762);
/* harmony import */ var src_app_service_tenant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/tenant.service */ 8444);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/common.service */ 5842);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/search/search.component */ 2448);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _core_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/pagination/pagination.component */ 4852);
/* harmony import */ var _core_loader_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/loader/loading/loading.component */ 9367);
/* harmony import */ var _shared_pipe_status_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pipe/status.pipe */ 5554);



















function TenantListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](3, "+ Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} }
function TenantListComponent_div_17_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](1, " Company Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????listener"]("click", function TenantListComponent_div_17_th_4_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["????restoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????nextContext"](2); return ctx_r19.sortData("CompanyName"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} }
function TenantListComponent_div_17_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????element"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("src", (element_r21 == null ? null : element_r21.logo) ? element_r21 == null ? null : element_r21.logo : "https://ebcstorage2022.blob.core.windows.net/ebc/DefaultUser.png", _angular_core__WEBPACK_IMPORTED_MODULE_12__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????textInterpolate"](element_r21 == null ? null : element_r21.companyName);
} }
function TenantListComponent_div_17_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](1, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} }
function TenantListComponent_div_17_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????textInterpolate"](element_r22 == null ? null : element_r22.primaryEmailId);
} }
function TenantListComponent_div_17_th_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](1, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????listener"]("click", function TenantListComponent_div_17_th_10_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["????restoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????nextContext"](2); return ctx_r23.sortData("Country"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} }
function TenantListComponent_div_17_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????textInterpolate"](element_r25 == null ? null : element_r25.country);
} }
function TenantListComponent_div_17_th_13_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](1, " Tier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????listener"]("click", function TenantListComponent_div_17_th_13_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["????restoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????nextContext"](2); return ctx_r26.sortData("tierId"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} }
function TenantListComponent_div_17_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????pipe"](3, "tireName");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["????pipeBind1"](3, 1, element_r28 == null ? null : element_r28.tierId));
} }
function TenantListComponent_div_17_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](1, " User License");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} }
function TenantListComponent_div_17_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????pipe"](3, "userLicense");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["????pipeBind1"](3, 1, element_r29 == null ? null : element_r29.tierId));
} }
function TenantListComponent_div_17_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} }
const _c0 = function (a1) { return ["edit", a1]; };
function TenantListComponent_div_17_td_20_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} if (rf & 2) {
    const element_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["????pureFunction1"](1, _c0, element_r30 == null ? null : element_r30.id));
} }
function TenantListComponent_div_17_td_20_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????listener"]("click", function TenantListComponent_div_17_td_20_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["????restoreView"](_r36); const element_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????nextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????nextContext"](2); return ctx_r34.onDelete(element_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} }
function TenantListComponent_div_17_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](1, TenantListComponent_div_17_td_20_button_1_Template, 3, 3, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](2, TenantListComponent_div_17_td_20_button_2_Template, 3, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("ngIf", ctx_r14.permissionObject == null ? null : ctx_r14.permissionObject.includes(ctx_r14.permissionCode == null ? null : ctx_r14.permissionCode.updateTenant));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("ngIf", ctx_r14.permissionObject == null ? null : ctx_r14.permissionObject.includes(ctx_r14.permissionCode == null ? null : ctx_r14.permissionCode.deleteTenant));
} }
function TenantListComponent_div_17_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????element"](0, "tr", 44);
} }
function TenantListComponent_div_17_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????element"](0, "tr", 45);
} }
function TenantListComponent_div_17_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](2, " No data found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} }
function TenantListComponent_div_17_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](1, "pagination", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????listener"]("onPageChange", function TenantListComponent_div_17_div_24_Template_pagination_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["????restoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????nextContext"](2); return ctx_r38.getPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("paginationList", ctx_r18.pagination)("currentPage", ctx_r18.currentPage)("selectedPageLimit", ctx_r18.currentPageLimit);
} }
function TenantListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](2, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementContainerStart"](3, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](4, TenantListComponent_div_17_th_4_Template, 3, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](5, TenantListComponent_div_17_td_5_Template, 4, 2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementContainerStart"](6, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](7, TenantListComponent_div_17_th_7_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](8, TenantListComponent_div_17_td_8_Template, 3, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementContainerStart"](9, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](10, TenantListComponent_div_17_th_10_Template, 3, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](11, TenantListComponent_div_17_td_11_Template, 3, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementContainerStart"](12, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](13, TenantListComponent_div_17_th_13_Template, 3, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](14, TenantListComponent_div_17_td_14_Template, 4, 3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementContainerStart"](15, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](16, TenantListComponent_div_17_th_16_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](17, TenantListComponent_div_17_td_17_Template, 4, 3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementContainerStart"](18, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](19, TenantListComponent_div_17_th_19_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](20, TenantListComponent_div_17_td_20_Template, 3, 2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](21, TenantListComponent_div_17_tr_21_Template, 1, 0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](22, TenantListComponent_div_17_tr_22_Template, 1, 0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](23, TenantListComponent_div_17_tr_23_Template, 3, 0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](24, TenantListComponent_div_17_div_24_Template, 2, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("dataSource", ctx_r1.objectArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("matRowDefColumns", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("ngIf", (ctx_r1.objectArray == null ? null : ctx_r1.objectArray.length) > 0);
} }
function TenantListComponent_loading_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["????element"](0, "loading");
} }
class TenantListComponent {
    constructor(paginationService, tenantService, dialog, commonService, dataService) {
        this.paginationService = paginationService;
        this.tenantService = tenantService;
        this.dialog = dialog;
        this.commonService = commonService;
        this.dataService = dataService;
        this.displayedColumns = ['companyName', 'email', 'country', 'tierId', 'licenseCount', 'action'];
        this.filterColumns = ['CompanyName', 'PrimaryEmailId', 'LicenseCount', 'tierId'];
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
        this.currentPageLimit = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.defaultPageLimit;
        this.tierListArray = [];
        this.permissionCode = src_app_shared_permission__WEBPACK_IMPORTED_MODULE_3__.permission;
        this.searchFilter = {};
        this.isShort = false;
        this.dataService.permission.subscribe((response) => {
            this.permissionObject = response;
        });
    }
    ngOnInit() {
        this.getMasterData();
    }
    getMasterData() {
        this.tenantService.getTiers({
            "searchFilter": null,
            "page": 1,
            "pageSize": 0,
            "fields": null
        }).subscribe((res) => {
            if (res) {
                this.tierListArray = res.data;
                this.dataService.tierListArraySubject.next(this.tierListArray);
                this.getObjects();
            }
        });
    }
    getObjects() {
        const params = {
            page: this.currentPage,
            pageSize: this.currentPageLimit,
            fields: null
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
        this.objectArray = [];
        this.tenantService.getTenantList(params).subscribe((response) => {
            this.loadingState = false;
            if (response) {
                // let tempObjectArray = response.data;
                // let tempArray: any = []
                // tempObjectArray.map((data) => {
                //   this.tierListArray.map((tire) => {
                //     if (tire?.id && data?.tierId && tire?.id == data?.tierId) { tempArray.push({ ...data, licenseCount: tire.licenseCount }) }
                //   })
                // })
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
    onDelete(data) {
        const dialogRef = this.dialog.open(src_app_core_action_popup_action_popup_component__WEBPACK_IMPORTED_MODULE_1__.ActionPopupComponent, {
            width: '683px',
            height: '554px',
            data: Object.assign(Object.assign({}, data), { isDelete: true }),
            panelClass: 'delete-popup'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result && result.is_delete) {
                this.tenantService.deleteUser(result.id).subscribe((res) => {
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
    viewDialog(data) {
        const dialogRef = this.dialog.open(_tenant_details_popup_tenant_details_popup_component__WEBPACK_IMPORTED_MODULE_0__.TenantDetailsPopupComponent, {
            width: '855px',
            height: '676px',
            data: data,
            panelClass: 'tenant-popup'
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
TenantListComponent.??fac = function TenantListComponent_Factory(t) { return new (t || TenantListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["????directiveInject"](src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["????directiveInject"](src_app_service_tenant_service__WEBPACK_IMPORTED_MODULE_5__.TenantService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["????directiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["????directiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService)); };
TenantListComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineComponent"]({ type: TenantListComponent, selectors: [["app-tenant-list"]], decls: 19, vars: 4, consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "row", "m-0", "mt-3"], [1, "col", "admin-brdcmb", "mt-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-0"], [1, "w-30"], [3, "placeholder", "text"], ["class", "adbtn col", 4, "ngIf"], [1, "col-lg-12", "mt-3"], ["class", "main-div", 4, "ngIf"], [4, "ngIf"], [1, "adbtn", "col"], ["mat-raised-button", "", "routerLink", "add"], [1, "main-div"], [1, "admin-table"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "companyName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["mat-header-cell", "", "class", "col_email", 4, "matHeaderCellDef"], ["matColumnDef", "country"], ["matColumnDef", "tierId"], ["matColumnDef", "licenseCount"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["class", "mt-3", 4, "ngIf"], ["mat-header-cell", ""], ["src", "assets/images/filter.svg", 3, "click"], ["mat-cell", ""], ["alt", "...", 1, "rounded-circle", 3, "src"], ["mat-header-cell", "", 1, "col_email"], ["type", "button", "class", "btn btn-green text-success", 3, "routerLink", 4, "ngIf"], ["type", "button", "class", "btn btn-red text-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-green", "text-success", 3, "routerLink"], ["type", "button", 1, "btn", "btn-red", "text-danger", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "9999", 1, "mat-cell"], [1, "mt-3"], [3, "paginationList", "currentPage", "selectedPageLimit", "onPageChange"]], template: function TenantListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](5, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](6, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????text"](11, "Tenant");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](14, "search-box", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????listener"]("text", function TenantListComponent_Template_search_box_text_14_listener($event) { return ctx.searchObject($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](15, TenantListComponent_div_15_Template, 4, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](17, TenantListComponent_div_17_Template, 25, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????template"](18, TenantListComponent_loading_18_Template, 1, 0, "loading", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("placeholder", "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.addTenant));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("ngIf", ctx.permissionObject == null ? null : ctx.permissionObject.includes(ctx.permissionCode == null ? null : ctx.permissionCode.tenantList));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["????property"]("ngIf", ctx.loadingState);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _core_search_search_component__WEBPACK_IMPORTED_MODULE_8__.SearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatNoDataRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _core_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__.PaginationComponent, _core_loader_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__.LoadingComponent], pipes: [_shared_pipe_status_pipe__WEBPACK_IMPORTED_MODULE_11__.TireNamePipe, _shared_pipe_status_pipe__WEBPACK_IMPORTED_MODULE_11__.userLicensePipe], styles: [".main-page[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%] {\n    padding: 1rem 0rem;\n  }\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%] {\n    padding: 0;\n    background-color: transparent;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n    box-shadow: none;\n    background-color: transparent;\n    padding: 0px;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .admin-table[_ngcontent-%COMP%] {\n    overflow: auto;\n    margin-top: 20px;\n  }\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .admin-table[_ngcontent-%COMP%] {\n    overflow: auto;\n    margin-top: 20px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 70px;\n  border-radius: 1rem;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #edf0ff;\n  font-size: 18px;\n  font-weight: 600;\n  text-align: left;\n  color: #1a58f6;\n  border: none;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: sub;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 25px;\n  border-radius: 0.8rem 0rem 0rem 0.8rem;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 40px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 0;\n    text-align: center;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 50px;\n    text-align: justify;\n  }\n}\n@media (max-width: 320px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    padding-left: 50px;\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 5px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 5px;\n    text-align: justify;\n  }\n}\n@media (max-width: 320px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 5px;\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n  padding-left: 52px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 32px;\n    text-align: justify;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 20px;\n    text-align: justify;\n  }\n}\n@media (max-width: 320px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 5px;\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n  padding-left: 5px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n    padding-left: 32px;\n    text-align: justify;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n    padding-left: 20px;\n    text-align: justify;\n  }\n}\n@media (max-width: 320px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n    padding-left: 5px;\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.8rem 0.8rem 0;\n  text-align: center;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: none;\n  color: var(--color-secondary);\n  font-size: 16px;\n  line-height: 24px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 1px 6px 10px #969696;\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  margin-right: 16px;\n  margin-bottom: 10px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 30px;\n  border-radius: 0.8rem 0rem 0rem 0.8rem;\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding: 7px 0px 0px 15px;\n  }\n}\n@media (max-width: 1440px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding-left: 20px;\n  }\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding: 5px 20px;\n    text-align: center;\n  }\n}\n@media (max-width: 578px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 320px;\n    text-align: justify;\n    padding-left: 50px;\n  }\n}\n@media (max-width: 425px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 350px;\n  }\n}\n@media (max-width: 325px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 202px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 10px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding: 11px 0px 0px 0px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  padding-left: 55px;\n  border-radius: 0;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    padding: 11px 0px 0px 35px;\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  padding-left: 25px;\n  border-radius: 0;\n  min-width: 118px;\n}\n@media (max-width: 1024px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 991px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n    padding-left: 10px;\n    text-align: justify;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n    padding: 11px 0px 0px 35px;\n    text-align: justify;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-radius: 0;\n  text-align: center;\n  padding: 5px 0px 0px;\n  min-width: 124px;\n}\n@media (max-width: 578px) {\n  .main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    min-width: 120px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   button[_ngcontent-%COMP%] {\n  margin: 0px 5px;\n  border-radius: 10px;\n  line-height: 0;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn-green[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-green);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn-red[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-red);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn-yellow[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-yellow);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: var(--color-light-gray);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .pagin-sel[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--black);\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .pagin-sel[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--color-light-gray);\n  border-radius: 5px;\n  padding: 5px;\n  margin-left: 5px;\n}\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border: none !important;\n  background-color: orange;\n}\n.main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n  width: 18rem;\n}\n@media (max-width: 576px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 20px;\n  }\n}\n@media (max-width: 991.98px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 15px 5px 15px 15px;\n  }\n}\n@media (max-width: 798px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 40%;\n    padding: 15px 5px 15px 15px;\n  }\n}\n@media (max-width: 425px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 0px 15px 0px;\n  }\n}\n@media (max-width: 375px) {\n  .main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 0px 15px 0px;\n  }\n}\n.main-page[_ngcontent-%COMP%]   .admin-brdcmb[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.mr-5[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.adbtn[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 575.98px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n}\n@media (max-width: 798px) {\n  .adbtn[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 15px 7px 15px 0px;\n    display: flex;\n  }\n}\n@media (max-width: 1024px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 0px 7px 15px 0px;\n    width: 200px;\n    display: flex;\n  }\n}\n@media (max-width: 991.98px) {\n  .adbtn[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 15px 0px 0px 0px;\n    display: flex;\n  }\n}\n@media (max-width: 425px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 15px 0px 15px 0px;\n  }\n}\n@media (max-width: 375px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 15px 0px 15px 0px;\n    display: block;\n  }\n}\n@media (max-width: 320px) {\n  .adbtn[_ngcontent-%COMP%] {\n    padding: 15px 0px 15px 0px;\n    display: block;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n}\n@media (max-width: 578px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    height: 50px;\n  }\n}\n@media (max-width: 798px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 78%;\n    margin-right: 5px;\n  }\n}\n@media (max-width: 425px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 47%;\n    margin-left: 22px;\n  }\n}\n@media (max-width: 320px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n    margin-left: 0;\n  }\n}\n@media (max-width: 375px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n    margin-left: 0;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--white);\n  text-decoration: none;\n}\n.adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 5px;\n}\n@media (max-width: 578px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    height: 50px;\n  }\n}\n@media (max-width: 798px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 75%;\n    margin-right: 5px;\n  }\n}\n@media (max-width: 425px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n}\n@media (max-width: 320px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n    margin-left: 0;\n  }\n}\n@media (max-width: 375px) {\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n.adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%] {\n  position: relative;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: none;\n  position: absolute;\n  z-index: 88888888;\n  top: -9px;\n  left: 15px;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid rgba(0, 0, 0, 0.72);\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:after {\n  content: \"Copy to Clipboard\";\n  display: none;\n  position: absolute;\n  z-index: 9999;\n  top: -45px;\n  left: -37px;\n  width: 114px;\n  height: 36px;\n  color: #fff;\n  font-size: 10px;\n  line-height: 36px;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.72);\n  border-radius: 3px;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:hover:before, .integration-checklist__copy-button[_ngcontent-%COMP%]:hover:after {\n  display: block;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:active, .integration-checklist__copy-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.integration-checklist__copy-button[_ngcontent-%COMP%]:active:after, .integration-checklist__copy-button[_ngcontent-%COMP%]:focus:after {\n  content: \"Copied!\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbmFudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUxGO0lBTUksa0JBQUE7RUFFRjtBQUNGO0FBREU7RUFSRjtJQVNJLFVBQUE7SUFDQSw2QkFBQTtFQUlGO0FBQ0Y7QUFGSTs7RUFFRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFJTjtBQUFFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtBQUVKO0FBREk7RUFMRjtJQU1JLGdCQUFBO0lBQ0EsNkJBQUE7SUFDQSxZQUFBO0VBSUo7QUFDRjtBQUZNO0VBREY7SUFFSSxjQUFBO0lBQ0EsZ0JBQUE7RUFLTjtBQUNGO0FBSk07RUFMRjtJQU1JLGNBQUE7SUFDQSxnQkFBQTtFQU9OO0FBQ0Y7QUFKTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQU1SO0FBSlE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFNVjtBQUxVO0VBQ0UsbUJBQUE7QUFPWjtBQUpRO0VBQ0Usa0JBQUE7RUFDQSxzQ0FBQTtBQU1WO0FBTFU7RUFIRjtJQUlJLGtCQUFBO0lBQ0EsbUJBQUE7RUFRVjtBQUNGO0FBUFU7RUFQRjtJQVFJLGtCQUFBO0lBQ0EsbUJBQUE7RUFVVjtBQUNGO0FBVFU7RUFYRjtJQVlJLGVBQUE7SUFDQSxrQkFBQTtFQVlWO0FBQ0Y7QUFYVTtFQWZGO0lBZ0JJLGtCQUFBO0lBQ0EsbUJBQUE7RUFjVjtBQUNGO0FBYlc7RUFuQkg7SUFvQkssa0JBQUE7SUFDQSxtQkFBQTtFQWdCWDtBQUNGO0FBZFE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBZ0JWO0FBZlU7RUFIRjtJQUlJLGtCQUFBO0lBQ0EsbUJBQUE7RUFrQlY7QUFDRjtBQWpCVTtFQVBGO0lBUUksa0JBQUE7SUFDQSxtQkFBQTtFQW9CVjtBQUNGO0FBbkJVO0VBWEY7SUFZSSxrQkFBQTtJQUNBLG1CQUFBO0VBc0JWO0FBQ0Y7QUFyQlU7RUFmRjtJQWdCSSxpQkFBQTtJQUNFLG1CQUFBO0VBd0JaO0FBQ0Y7QUF2Qlc7RUFuQkg7SUFvQkssaUJBQUE7SUFDRSxtQkFBQTtFQTBCYjtBQUNGO0FBeEJRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQTBCVjtBQXpCVTtFQUhGO0lBSUksa0JBQUE7SUFDQSxtQkFBQTtFQTRCVjtBQUNGO0FBM0JVO0VBUEY7SUFRSSxrQkFBQTtJQUNBLG1CQUFBO0VBOEJWO0FBQ0Y7QUE3QlU7RUFYRjtJQVlJLGtCQUFBO0lBQ0EsbUJBQUE7RUFnQ1Y7QUFDRjtBQS9CVztFQWZIO0lBZ0JJLGtCQUFBO0lBQ0UsbUJBQUE7RUFrQ1o7QUFDRjtBQWpDVztFQW5CSDtJQW9CSSxpQkFBQTtJQUNFLG1CQUFBO0VBb0NaO0FBQ0Y7QUFsQ1E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBb0NWO0FBbkNVO0VBSEY7SUFJSSxrQkFBQTtJQUNBLG1CQUFBO0VBc0NWO0FBQ0Y7QUFyQ1U7RUFQRjtJQVFJLGtCQUFBO0lBQ0EsbUJBQUE7RUF3Q1Y7QUFDRjtBQXZDVTtFQVhGO0lBWUksa0JBQUE7SUFDQSxtQkFBQTtFQTBDVjtBQUNGO0FBekNXO0VBZkg7SUFnQkksa0JBQUE7SUFDRSxtQkFBQTtFQTRDWjtBQUNGO0FBM0NXO0VBbkJIO0lBb0JJLGlCQUFBO0lBQ0UsbUJBQUE7RUE4Q1o7QUFDRjtBQTVDUTtFQUVFLGdDQUFBO0VBQ0Esa0JBQUE7QUE2Q1Y7QUF6Q1E7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUEyQ1Y7QUF6Q1U7RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBMkNaO0FBdkNRO0VBQ0Usa0JBQUE7RUFDQSxzQ0FBQTtBQXlDVjtBQXhDVTtFQUhGO0lBSUkseUJBQUE7RUEyQ1Y7QUFDRjtBQTFDVTtFQU5GO0lBT0ksa0JBQUE7RUE2Q1Y7QUFDRjtBQTVDVTtFQVRGO0lBVUksaUJBQUE7SUFDQSxrQkFBQTtFQStDVjtBQUNGO0FBOUNVO0VBYkY7SUFjSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFpRFY7QUFDRjtBQWhEVTtFQWxCRjtJQW1CSSxnQkFBQTtFQW1EVjtBQUNGO0FBbERVO0VBckJGO0lBc0JJLGdCQUFBO0VBcURWO0FBQ0Y7QUFuRFE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBcURWO0FBcERVO0VBSEY7SUFJSSxrQkFBQTtJQUNBLG1CQUFBO0VBdURWO0FBQ0Y7QUF0RFU7RUFQRjtJQVFJLGtCQUFBO0lBQ0EsbUJBQUE7RUF5RFY7QUFDRjtBQXhEVTtFQVhGO0lBWUkseUJBQUE7RUEyRFY7QUFDRjtBQXhEUTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUEwRFY7QUF6RFU7RUFIRjtJQUlJLGtCQUFBO0lBQ0EsbUJBQUE7RUE0RFY7QUFDRjtBQTNEVTtFQVBGO0lBUUksa0JBQUE7SUFDQSxtQkFBQTtFQThEVjtBQUNGO0FBN0RVO0VBWEY7SUFZSSwwQkFBQTtJQUNBLG1CQUFBO0VBZ0VWO0FBQ0Y7QUE3RFE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUErRFY7QUE5RFU7RUFKRjtJQUtJLGtCQUFBO0lBQ0EsbUJBQUE7RUFpRVY7QUFDRjtBQWhFVTtFQVJGO0lBU0ksa0JBQUE7SUFDQSxtQkFBQTtFQW1FVjtBQUNGO0FBbEVVO0VBWkY7SUFhSSwwQkFBQTtJQUNBLG1CQUFBO0VBcUVWO0FBQ0Y7QUFsRVE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQW9FVjtBQW5FVTtFQUxGO0lBTUksZ0JBQUE7RUFzRVY7QUFDRjtBQXJFVTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF1RVo7QUFyRVU7RUFDRSx3Q0FBQTtBQXVFWjtBQXJFVTtFQUNFLHNDQUFBO0FBdUVaO0FBckVVO0VBQ0UseUNBQUE7QUF1RVo7QUFsRU07RUFDRSxtQ0FBQTtBQW9FUjtBQS9ETTtFQUNFLG1CQUFBO0FBaUVSO0FBL0RNO0VBQ0UsWUFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFpRVI7QUExRFU7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FBNERaO0FBckRFO0VBQ0UsWUFBQTtBQXVESjtBQXRESTtFQUZGO0lBR0ksV0FBQTtJQUNBLGlCQUFBO0VBeURKO0FBQ0Y7QUF4REk7RUFORjtJQU9JLFVBQUE7SUFDQSwyQkFBQTtFQTJESjtBQUNGO0FBMURJO0VBVkY7SUFXSSxVQUFBO0lBQ0EsMkJBQUE7RUE2REo7QUFDRjtBQTVESTtFQWRGO0lBZUksV0FBQTtJQUNBLDBCQUFBO0VBK0RKO0FBQ0Y7QUE5REk7RUFsQkY7SUFtQkksV0FBQTtJQUNBLDBCQUFBO0VBaUVKO0FBQ0Y7QUE5REU7RUFDRSxjQUFBO0FBZ0VKO0FBNURBO0VBQ0UsaUJBQUE7QUErREY7QUE1REE7RUFDRSxpQkFBQTtBQStERjtBQTlERTtFQUZGO0lBR0ksaUJBQUE7RUFpRUY7QUFDRjtBQWhFRTtFQUxGO0lBTUksZ0JBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7RUFtRUY7QUFDRjtBQWxFRTtFQVZGO0lBV0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQXFFRjtBQUNGO0FBcEVFO0VBZkY7SUFnQkksZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLGFBQUE7RUF1RUY7QUFDRjtBQXRFRTtFQXBCRjtJQXFCSSwwQkFBQTtFQXlFRjtBQUNGO0FBeEVFO0VBdkJGO0lBd0JJLDBCQUFBO0lBQ0EsY0FBQTtFQTJFRjtBQUNGO0FBMUVFO0VBM0JGO0lBNEJJLDBCQUFBO0lBQ0EsY0FBQTtFQTZFRjtBQUNGO0FBNUVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtBQThFSjtBQTdFSTtFQVBGO0lBUUksV0FBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0VBZ0ZKO0FBQ0Y7QUEvRUk7RUFaRjtJQWFJLFVBQUE7SUFDQSxpQkFBQTtFQWtGSjtBQUNGO0FBakZJO0VBaEJGO0lBaUJJLFVBQUE7SUFDQSxpQkFBQTtFQW9GSjtBQUNGO0FBbkZJO0VBcEJGO0lBcUJJLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUFzRko7QUFDRjtBQXJGSTtFQXpCRjtJQTBCSSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBd0ZKO0FBQ0Y7QUF2Rkk7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBeUZOO0FBckZFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUF1Rko7QUF0Rkk7RUFORjtJQU9JLFdBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtFQXlGSjtBQUNGO0FBeEZJO0VBWEY7SUFZSSxVQUFBO0lBQ0EsaUJBQUE7RUEyRko7QUFDRjtBQTFGSTtFQWZGO0lBZ0JJLFVBQUE7RUE2Rko7QUFDRjtBQTVGSTtFQWxCRjtJQW1CSSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBK0ZKO0FBQ0Y7QUE5Rkk7RUF2QkY7SUF3QkksV0FBQTtJQUNBLG1CQUFBO0VBaUdKO0FBQ0Y7QUFoR0k7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0FBa0dOO0FBM0VBO0VBQ0Usa0JBQUE7QUE4RUY7QUE1RUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0FBNkVKO0FBMUVFO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLCtCQUFBO0VBQ0Esa0JBQUE7QUEwRUo7QUF2RUU7RUFDRSxzQkFBQTtBQXlFSjtBQXZFSTtFQUVFLGNBQUE7QUF3RU47QUFwRUU7RUFFRSxhQUFBO0FBcUVKO0FBbkVJO0VBQ0Usa0JBQUE7QUFxRU4iLCJmaWxlIjoidGVuYW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ibHVlKTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzk4cHgpe1xyXG4gICAgcGFkZGluZzogMXJlbSAwcmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiB7XHJcbiAgICAmIGEsXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWluLWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2IoMjYgODggMjQ2IC8gMTclKTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYWRtaW4tdGFibGUge1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgdGFibGUge1xyXG4gICAgICAmIHRyIHtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuXHJcbiAgICAgICAgJiB0aCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWRmMGZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogIzFhNThmNjtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICYgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJiB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW0gMHJlbSAwcmVtIDAuOHJlbTtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJiB0aDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmIHRoOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmIHRoOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzk4cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgdGg6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjhyZW0gMC44cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAvLyB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gICAgICAgICAgJiBpbWcge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggNnB4IDEwcHggIzk2OTY5NjtcclxuICAgICAgICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtIDByZW0gMHJlbSAwLjhyZW07XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzk4cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDBweCAwcHggMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOjVweCAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc4cHgpIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzI1cHgpIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJiB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiB0ZDpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDBweCAwcHggMzVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgdGQ6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDExOHB4O1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMHB4IDBweCAzNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiB0ZDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDBweDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTI0cHg7XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc4cHgpIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tZ3JlZW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1yZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29sb3ItcmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4teWVsbG93IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yLXllbGxvdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtZ3JheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFnaW4tc2VsIHtcclxuICAgICAgJiBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgICAgfVxyXG4gICAgICAuc2VsZWN0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtZ3JheSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudy0zMCB7XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgXHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggNXB4IDE1cHggMTVweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCl7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggNXB4IDE1cHggMTVweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCl7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCl7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hZG1pbi1icmRjbWIge1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubXItNSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5hZGJ0biB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KXtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH0gXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OHB4KXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDdweCAxNXB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfSBcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgIHBhZGRpbmc6IDBweCA3cHggMTVweCAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH0gXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYmEoMjYsIDg4LCAyNDYsIDAuNDkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc4cHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgaGVpZ2h0OiA1MHB4OztcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCl7XHJcbiAgICAgIHdpZHRoOiA3OCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAmIGEge1xyXG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc4cHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgaGVpZ2h0OiA1MHB4OztcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3OThweCl7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAgICAgd2lkdGg6IDQ3JTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCl7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCl7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJiBhIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyByZXNwb25zaXZlIGNvZGUgc3RhcnRcclxuXHJcbi8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxufVxyXG5cclxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgbGVzcyB0aGFuIDc2OHB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIGxlc3MgdGhhbiA5OTJweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBsZXNzIHRoYW4gMTIwMHB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcbn1cclxuXHJcbi5pbnRlZ3JhdGlvbi1jaGVja2xpc3RfX2NvcHktYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogODg4ODg4ODg7XHJcbiAgICB0b3A6IC05cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcblxyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43Mik7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiQ29weSB0byBDbGlwYm9hcmRcIjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgdG9wOiAtNDVweDtcclxuICAgIGxlZnQ6IC0zN3B4O1xyXG4gICAgd2lkdGg6IDExNHB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG5cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuXHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJDb3BpZWQhXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2118:
/*!************************************************!*\
  !*** ./src/app/module/tenant/tenant.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantModule": () => (/* binding */ TenantModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/pagination/pagination.module */ 9304);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ 3153);
/* harmony import */ var _tenant_list_tenant_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tenant-list/tenant-list.component */ 5448);
/* harmony import */ var _add_tenant_add_tenant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-tenant/add-tenant.component */ 5467);
/* harmony import */ var src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/search/search.module */ 4778);
/* harmony import */ var src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/permission */ 9206);
/* harmony import */ var src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/loader/loader.module */ 1098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);














const routes = [
    {
        path: "",
        component: _tenant_list_tenant_list_component__WEBPACK_IMPORTED_MODULE_4__.TenantListComponent,
        data: { title: 'Tenant List', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.tenantList }
    },
    {
        path: "add",
        component: _add_tenant_add_tenant_component__WEBPACK_IMPORTED_MODULE_5__.AddTenantComponent,
        data: { title: 'Add Tenant', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.addTenant }
    },
    {
        path: 'edit/:id',
        component: _add_tenant_add_tenant_component__WEBPACK_IMPORTED_MODULE_5__.AddTenantComponent,
        data: { title: 'Update Tenant', permission: src_app_shared_permission__WEBPACK_IMPORTED_MODULE_7__.permission.updateTenant }
    }
];
class TenantModule {
}
TenantModule.??fac = function TenantModule_Factory(t) { return new (t || TenantModule)(); };
TenantModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineNgModule"]({ type: TenantModule });
TenantModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_3__.FormValidationModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_0__.PaginationModule,
            src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_6__.SearchModule,
            src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__.LoaderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["????setNgModuleScope"](TenantModule, { declarations: [_tenant_list_tenant_list_component__WEBPACK_IMPORTED_MODULE_4__.TenantListComponent, _add_tenant_add_tenant_component__WEBPACK_IMPORTED_MODULE_5__.AddTenantComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_3__.FormValidationModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        src_app_core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_0__.PaginationModule,
        src_app_core_search_search_module__WEBPACK_IMPORTED_MODULE_6__.SearchModule,
        src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__.LoaderModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_module_tenant_tenant_module_ts.js.map