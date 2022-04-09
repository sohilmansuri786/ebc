"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["common"],{

/***/ 5597:
/*!*************************************************************!*\
  !*** ./src/app/core/action-popup/action-popup.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionPopupComponent": () => (/* binding */ ActionPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class ActionPopupComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        this.isDelete = this.data.isDelete;
    }
    close() {
        this.dialogRef.close(false);
    }
    onDelete() {
        this.dialogRef.close(Object.assign({ is_delete: true }, this.data));
    }
}
ActionPopupComponent.ɵfac = function ActionPopupComponent_Factory(t) { return new (t || ActionPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
ActionPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionPopupComponent, selectors: [["app-action-popup"]], decls: 10, vars: 0, consts: [[1, "delet-popup", "text-center"], ["src", "assets/images/delete-icon.svg"], [1, "text-center"], ["mat-button", "", "mat-dialog-close", "", 1, "blue-line-btn", 3, "click"], [1, "blue-btn", 3, "click"]], template: function ActionPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Are you sure you want to delete this?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionPopupComponent_Template_button_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionPopupComponent_Template_button_click_8_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".delete-popup .mat-dialog-container {\n  border-radius: 20px;\n}\n\n.delet-popup[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 500px;\n}\n\n.delet-popup[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n}\n\n.delet-popup[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 22px;\n  margin: 3rem 0rem 4rem 0rem;\n}\n\n.delet-popup[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n  text-decoration: none;\n}\n\n.delet-popup[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  background-color: var(--white);\n}\n\n.delet-popup[_ngcontent-%COMP%]   .blue-line-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 5px;\n  color: var(--color-primary);\n  text-decoration: none;\n}\n\n.delet-popup[_ngcontent-%COMP%]   .blue-line-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUdFO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFETjs7QUFHRTtFQUNJLDZCQUFBO0VBQ0YsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFJSTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUFGTjs7QUFNRTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBSko7O0FBTUk7RUFDRSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFKTiIsImZpbGUiOiJhY3Rpb24tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRlbGV0ZS1wb3B1cCB7XHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZGVsZXQtcG9wdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDo1MDBweDtcclxuICBcclxuICAmIGltZ3tcclxuICAgICAgd2lkdGg6MTI4cHg7XHJcbiAgICAgIGhlaWdodDoxMjhweDtcclxuICB9XHJcbiAgJiBoM3tcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luOiAzcmVtIDByZW0gNHJlbSAwcmVtO1xyXG4gIH1cclxuXHJcbiAgLmJsdWUtYnRuIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ibHVlLWxpbmUtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9581:
/*!********************************************!*\
  !*** ./src/app/service/address.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressService": () => (/* binding */ AddressService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class AddressService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint + 'v1/Address/';
    }
    getAddressList(param) {
        return this.http.post(`${this.API_URL}GetAddresses`, param);
    }
    saveAddress(data) {
        return this.http.post(`${this.API_URL}Save`, data);
    }
    getAddressById(param = null) {
        return this.http.get(`${this.API_URL}GetAddress`, { params: param });
    }
    deleteAddress(id) {
        return this.http.delete(`${this.API_URL}Delete?id=${id}`);
    }
}
AddressService.ɵfac = function AddressService_Factory(t) { return new (t || AddressService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AddressService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AddressService, factory: AddressService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 669:
/*!**************************************************!*\
  !*** ./src/app/service/business-unit.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessUnitService": () => (/* binding */ BusinessUnitService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class BusinessUnitService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint + 'v1/BusinessUnits/';
    }
    getBusinessUnitList(param) {
        return this.http.post(`${this.API_URL}GetBusinessUnits`, param);
    }
    saveBusinessUnit(data) {
        return this.http.post(`${this.API_URL}Save`, data);
    }
    getBusinessUnitById(param = null) {
        return this.http.get(`${this.API_URL}GetBusinessUnit`, { params: param });
    }
    getBusinessUnitByCode(param = null) {
        return this.http.get(`${this.API_URL}GetBusinessUnitByCode`, { params: param });
    }
    deleteBusinessUnit(id) {
        return this.http.delete(`${this.API_URL}Delete?id=${id}`);
    }
    checkCodeExists(code) {
        return this.http.get(`${this.API_URL}CheckCodeExists?code=${code}`);
    }
    // template
    getTemplateList(param) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint}v1/Template/GetTemplates`, param);
    }
    previewTemplateList(param) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint}v1/Template/Preview`, {}, { params: param });
    }
}
BusinessUnitService.ɵfac = function BusinessUnitService_Factory(t) { return new (t || BusinessUnitService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BusinessUnitService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BusinessUnitService, factory: BusinessUnitService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 762:
/*!***********************************************!*\
  !*** ./src/app/service/pagination.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationService": () => (/* binding */ PaginationService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class PaginationService {
    constructor() { }
    getPager(recordCount, currentPage = 1, currentPageLimit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultPageLimit) {
        let totalPages = Math.ceil(recordCount / currentPageLimit);
        if (totalPages !== undefined && totalPages !== null && totalPages !== 0) {
            // ensure current page isn't out of range
            if (currentPage < 1) {
                currentPage = 1;
            }
            else if (currentPage > totalPages) {
                currentPage = totalPages;
            }
            let startPage, endPage;
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            }
            else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                }
                else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                }
                else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }
            // create an array of pages to ng-repeat in the pager control
            const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
            // return object with all pager properties required by the view
            return {
                currentPage: currentPage,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                pages: pages
            };
        }
    }
}
PaginationService.ɵfac = function PaginationService_Factory(t) { return new (t || PaginationService)(); };
PaginationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PaginationService, factory: PaginationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7749:
/*!*****************************************!*\
  !*** ./src/app/service/role.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class RoleService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint + 'v1/Roles/';
    }
    getRoleList(param) {
        return this.http.post(`${this.API_URL}GetRoles`, param);
    }
    saveRole(data) {
        return this.http.post(`${this.API_URL}Save`, data);
    }
    deleteRole(id) {
        return this.http.delete(`${this.API_URL}Delete?id=${id}`);
    }
    getModules(data, param, isList) {
        if (isList)
            return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint}v1/Modules/GetModules`, data, { params: param });
        else
            return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint}v1/Modules/GetModule`, { params: param });
    }
    getRoleById(param = null) {
        return this.http.get(`${this.API_URL}GetRole`, { params: param });
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RoleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

}]);
//# sourceMappingURL=common.js.map