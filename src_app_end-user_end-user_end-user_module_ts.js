"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["src_app_end-user_end-user_end-user_module_ts"],{

/***/ 631:
/*!*********************************************************!*\
  !*** ./src/app/end-user/end-user/end-user.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndUserComponent": () => (/* binding */ EndUserComponent)
/* harmony export */ });
/* harmony import */ var D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_vcard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-vcard */ 9379);








function EndUserComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("generateVCardFunction", ctx_r0.generateVCardOnTheFly);
  }
}

function EndUserComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
} // import * as htmlToImage from 'html-to-image';


class EndUserComponent {
  // base64Image: any = '';
  constructor(activatedRoute, eRef, authService) {
    this.activatedRoute = activatedRoute;
    this.eRef = eRef;
    this.authService = authService;
    this.loadingState = true;
    this.qrcode = `BEGIN:VCARDVERSION:3.0N:ASZ;Tajuddin;Shaik;;FN:Tajuddin Shaik ASZTEL;TYPE=VOICE:+918897007153TEL;TYPE=VOICE:+918897007153END:VCARD`; // image64() {
    //   htmlToImage.toBlob(document.getElementById('prev_front'))
    //     .then(function (blob) {
    //       let reader = new FileReader();
    //       reader.readAsDataURL(blob);
    //       reader.onloadend = function () {
    //         base64dataFront = reader.result;
    //       }
    //     })
    // }
    // getUserObject() {
    //   this.authService.getUserByIdEndUser({ id: this.endLoginUser?.id }, { token: this.endLoginUser.jwtToken }).subscribe((response) => {
    //     if (response) {
    //       this.activeUser = response.data;
    //       let finalCards = [];
    //       this.activeUser.finalCards.map((data) => {
    //         finalCards.push({ ...data, flip: true });
    //       })
    //     }
    //   });
    // }

    this.generateVCardOnTheFly = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h;

      let address = `${(_a = this.currentTenantAddress) === null || _a === void 0 ? void 0 : _a.building} ${(_b = this.currentTenantAddress) === null || _b === void 0 ? void 0 : _b.street} ${(_c = this.currentTenantAddress) === null || _c === void 0 ? void 0 : _c.locality} ${(_d = this.currentTenantAddress) === null || _d === void 0 ? void 0 : _d.city} ${(_e = this.currentTenantAddress) === null || _e === void 0 ? void 0 : _e.state} ${(_f = this.currentTenantAddress) === null || _f === void 0 ? void 0 : _f.country}-${(_g = this.currentTenantAddress) === null || _g === void 0 ? void 0 : _g.postalcode}`; // TODO: Generate the VCard before Download

      if (this.activeUser) return {
        version: '3.0',
        name: {
          firstNames: this.activeUser.firstName,
          lastNames: this.activeUser.lastName // namePrefix: 'Mr.'

        },
        organization: this.currentTenant.companyName,
        title: this.activeUser.designation,
        email: [this.activeUser.emailId],
        telephone: [{
          value: this.activeUser.primaryContact,
          param: {
            type: ['work', 'voice'],
            value: 'uri'
          }
        } // {
        //   value: 'tel:+1-404-555-1212',
        //   param: { type: ['home', 'voice'], value: 'uri' },
        // },
        ],
        note: `${window.location.href}`,
        url: `${(_h = this.currentTenant) === null || _h === void 0 ? void 0 : _h.website} `,
        address: [{
          street: address
        }] // rev: '20080424T195243Z',
        // photo: `ENCODING = b; TYPE = JPEG:${ this.base64Image } `,

      };else {
        return {
          name: {
            firstNames: 'NEC',
            lastNames: 'NEC'
          }
        };
      }
    };

    if (this.activatedRoute.snapshot.queryParams['tc'] && this.activatedRoute.snapshot.queryParams['em']) {
      this.data = {
        tenantCode: atob(this.activatedRoute.snapshot.queryParams['tc']),
        emailId: atob(this.activatedRoute.snapshot.queryParams['em'])
      };
    }
  }

  ngOnInit() {
    this.authService.endUserLogin({
      tenantCode: this.data.tenantCode,
      emailId: this.data.emailId,
      password: 'uoi'
    }).subscribe(data => {
      this.endLoginUser = data;
      this.activeUser = data.user;
      this.getBUData();
      this.getTenantDetails(this.data.tenantCode);
    });
  }

  getTenantDetails(tenantCode) {
    this.authService.getTenantByCodeEndUser({
      "code": tenantCode
    }, {
      token: this.endLoginUser.jwtToken
    }).subscribe(res => {
      if (res && res.data) this.currentTenant = res.data;
      this.currentTenantAddress = res.miscData;
    });
  }

  getBUData() {
    let buids = [];

    if (this.activeUser.hasOwnProperty('businessUnitIds') && this.endLoginUser.userType == 'End User') {
      this.activeUser.businessUnitIds.map(bu => {
        buids.push({
          "propertyName": "Code",
          "value": bu,
          "caseSensitive": true
        });
      });
    } else if (this.activeUser.hasOwnProperty('myBuCode') && (this.endLoginUser.userType == 'Tenant Admin' || this.endLoginUser.userType == 'BU Admin')) {
      buids = [{
        "propertyName": "Code",
        "value": this.activeUser.myBuCode,
        "caseSensitive": true
      }];
    }

    this.authService.getBusinessUnitListEndUser({
      "searchFilter": {
        "conditionOperator": 0,
        "filters": buids
      },
      "page": 1,
      "pageSize": 0,
      "fields": null
    }, {
      token: this.endLoginUser.jwtToken
    }).subscribe(res => {
      if (res) {
        this.buListArray = res.data;
        this.getTemplate();
      }
    });
  }

  getTemplate() {
    this.authService.previewTemplateListEndUser({
      // templateId: this.buListArray[0].activeTemplateId,
      buId: this.buListArray[0].code,
      userEmailId: this.activeUser.emailId
    }, {
      token: this.endLoginUser.jwtToken
    }).subscribe(response => {
      this.loadingState = false;

      if (response) {
        this.objectArray = response;
        this.setFrame();
      } else {
        this.objectArray = [];
      }
    }, error => {
      this.loadingState = false;
      this.objectArray = [];
    });
  }

  setFrame() {
    setTimeout(() => {
      // this.objectArray.map((data, i) => {
      let a = document.getElementById("endUsercardFrame");
      a.innerHTML = this.objectArray.data; // })
    }, 1000);
  }

  clickout(event) {
    let temp = event.target.outerHTML;
    temp = String(temp);

    if (temp[0] == '<' && temp[1] == 'b' && temp[2] == 'u' && temp[3] == 't' && temp[4] == 't' && temp[5] == 'o' && temp[6] == 'n') {
      if (temp.includes('id="save_contact"')) {
        document.getElementById('carddown').click();
      }

      if (temp.includes('id="share_contact"')) {
        this.shareDialog();
      }
    }
  }

  shareDialog() {
    var _this = this;

    return (0,D_EBC_Web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const blob = yield (yield fetch(_this.objectArray.message)).blob();
      const file = new File([blob], 'fileName.png', {
        type: blob.type
      });
      navigator.share({
        title: _this.activeUser.firstName,
        text: 'Scan this QR code. or \n Open the given below link.',
        files: [file],
        url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.frontEndURL}end-user?tc=${btoa(_this.endLoginUser.tenantCode)}&em=${btoa(_this.endLoginUser.user.emailId)}`
      });
    })();
  }

}

EndUserComponent.ɵfac = function EndUserComponent_Factory(t) {
  return new (t || EndUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};

EndUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: EndUserComponent,
  selectors: [["app-end-user"]],
  hostBindings: function EndUserComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EndUserComponent_click_HostBindingHandler($event) {
        return ctx.clickout($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
    }
  },
  decls: 11,
  vars: 2,
  consts: [[1, "side_container"], [1, "container-fluid"], [1, "main-page"], [1, "cards_container"], [1, "d-flex", "justify-content-center"], [1, "form-hadding"], [1, "card_container"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "card_item"], ["id", "endUsercardFrame"], [1, "btn_bottom"], [1, "btn_download"], ["id", "carddown", "vcdDownloadVCard", "", 2, "display", "none", 3, "generateVCardFunction"], [1, "text-muted", 2, "text-align", "center"]],
  template: function EndUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Business Card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, EndUserComponent_ng_container_8_Template, 6, 1, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EndUserComponent_ng_template_9_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeUser)("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_vcard__WEBPACK_IMPORTED_MODULE_6__.DownloadVCardDirective],
  styles: [".img-fluid[_ngcontent-%COMP%] {\n  max-width: 118%;\n  height: auto;\n}\n\n.main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n}\n\n.main-page[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n\n.main-page[_ngcontent-%COMP%]   .w-30[_ngcontent-%COMP%] {\n  width: 18rem;\n}\n\n.main-page[_ngcontent-%COMP%]   .admin-brdcmb[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n@media (max-width: 768px) {\n  .main-page[_ngcontent-%COMP%]   .admin-brdcmb[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.adbtn[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n}\n\n.adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--white);\n  text-decoration: none;\n}\n\n.adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 5px;\n}\n\n.adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n\n.cards_container[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  padding: 40px;\n  margin-top: 15px;\n}\n\n@media (max-width: 768px) {\n  .cards_container[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n\n@media (max-width: 576px) {\n  .cards_container[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\n\n.cards_container[_ngcontent-%COMP%]   h2.form-hadding[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 27px;\n  color: var(--color-secondary);\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid var(--color-border-cards);\n  display: inline-block;\n  overflow: auto;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 3px;\n}\n\n@media (max-width: 576px) {\n  .cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media (max-width: 576px) {\n  .cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .flip_details[_ngcontent-%COMP%] {\n  background-color: var(--color-cards);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  min-height: 170px;\n  padding: 20px;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .flip_details[_ngcontent-%COMP%]   .nec_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  transform: translate(50px, -50px);\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_nec_details[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 60px 10px 10px 45px;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 50%;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: var(--color-secondary);\n  font-size: 12px;\n  line-height: 15px;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .profile_details[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .card_nec_status[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .status_nec[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .status_nec_button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .status_nec_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 47px;\n  border-radius: 10px;\n  border: none;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .status_nec_button[_ngcontent-%COMP%]   button.btn_edit[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-green);\n  margin-right: 30px;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .status_nec_button[_ngcontent-%COMP%]   button.btn_ref[_ngcontent-%COMP%] {\n  background-color: var(--color-orange-light);\n  margin-right: 30px;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .status_nec_button[_ngcontent-%COMP%]   button.btn_share[_ngcontent-%COMP%] {\n  background-color: var(--color-light-pink);\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .date-cr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .date-cr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: var(--color-secondary);\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n@media (max-width: 1199px) {\n  .cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_bg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 1199px) {\n  .cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_bg[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_bg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-black-lgt);\n  font-size: 13px;\n  line-height: 19px;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 47px;\n  border-radius: 10px;\n  border: none;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_button[_ngcontent-%COMP%]   button.btn_edit[_ngcontent-%COMP%] {\n  background-color: var(--btn-color-green);\n  margin-right: 30px;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_button[_ngcontent-%COMP%]   button.btn_ref[_ngcontent-%COMP%] {\n  background-color: var(--color-orange-light);\n  margin-right: 30px;\n}\n\n.cards_container[_ngcontent-%COMP%]   .card_column[_ngcontent-%COMP%]   .cards_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status_button[_ngcontent-%COMP%]   button.btn_share[_ngcontent-%COMP%] {\n  background-color: var(--color-light-pink);\n}\n\n.status_dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: var(--btn-color-green);\n  color: var(--color-green-dark);\n  border-color: var(--btn-color-green);\n  padding: 6px 3px;\n  margin-left: 10px;\n  font-weight: 500;\n  font-size: 12px;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\n.status_dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n\n.status_dropdown_green[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: var(--btn-color-green);\n  color: var(--color-green-dark);\n  border-color: var(--btn-color-green);\n  padding: 6px 3px;\n  margin-left: 10px;\n  font-weight: 500;\n  font-size: 12px;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\n.status_dropdown_green[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n\n.status_dropdown_red[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: pink;\n  color: red;\n  border-color: pink;\n  padding: 6px 3px;\n  margin-left: 10px;\n  font-weight: 500;\n  font-size: 12px;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\n.status_dropdown_red[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n\n@media (max-width: 1199.98px) {\n  .side_container[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0px;\n    padding-left: 0px;\n  }\n\n  .adbtn[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .adbtn[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n\n.card_item[_ngcontent-%COMP%] {\n  max-width: 335px;\n  margin: 0 auto;\n}\n\n@media (max-width: 576px) {\n  .card_item[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n.btn_bottom[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n@media (max-width: 576px) {\n  .btn_bottom[_ngcontent-%COMP%] {\n    margin-top: 35px;\n  }\n}\n\n.btn_bottom[_ngcontent-%COMP%]   .btn_flip[_ngcontent-%COMP%], .btn_bottom[_ngcontent-%COMP%]   .btn_download[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.btn_bottom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  color: var(--white);\n  width: 160px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n  box-shadow: var(--color-box-shdow);\n  margin: 0 auto;\n  padding: 0 10px;\n}\n\n.btn_bottom[_ngcontent-%COMP%]   .btn_flip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-secondry-button);\n  color: #fe9800;\n  box-shadow: none;\n}\n\n.btn_bottom[_ngcontent-%COMP%]   .btn_flip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 22px;\n}\n\n.btn_bottom[_ngcontent-%COMP%]   .btn_download[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n}\n\n.btn_bottom[_ngcontent-%COMP%]   .btn_download[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJSTs7RUFFRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFETjs7QUFLRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUFISjs7QUFNRTtFQUNFLFlBQUE7QUFKSjs7QUFPRTtFQUNFLGNBQUE7QUFMSjs7QUFNSTtFQUZGO0lBR0ksYUFBQTtFQUhKO0FBQ0Y7O0FBT0E7RUFDRSxpQkFBQTtBQUpGOztBQUtFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtBQUhKOztBQUlJO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUZOOztBQU1FO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFLSTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7QUFITjs7QUFRQTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBTUU7RUFKRjtJQUtJLGFBQUE7RUFIRjtBQUNGOztBQUlFO0VBUEY7SUFRSSxZQUFBO0VBREY7QUFDRjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFFRTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFDSTtFQUNFLFdBQUE7QUFDTjs7QUFDSTtFQVZGO0lBV0ksY0FBQTtFQUVKO0FBQ0Y7O0FBQU07RUFERjtJQUVJLFdBQUE7RUFHTjtBQUNGOztBQURJO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFB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QUNBLGNBQUE7RUFDQSxnQkFBQTtBQVpKOztBQWFJO0VBQ0Usa0JBQUE7QUFYTjs7QUFjRTtFQUNFLHNDQUFBO0FBWko7O0FBYUk7RUFDRSxpQkFBQTtBQVhOIiwiZmlsZSI6ImVuZC11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1mbHVpZCB7XHJcbiAgbWF4LXdpZHRoOiAxMTglO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLm1haW4tcGFnZSB7XHJcbiAgLmJyZWFkY3J1bWIge1xyXG4gICAgJiBhLFxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi1kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiKDI2IDg4IDI0NiAvIDE3JSk7XHJcbiAgfVxyXG5cclxuICAudy0zMCB7XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgfVxyXG5cclxuICAuYWRtaW4tYnJkY21iIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRidG4ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiYSgyNiwgODgsIDI0NiwgMC40OSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICYgYSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICYgYSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhcmRzX2NvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KXtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgaDIuZm9ybS1oYWRkaW5nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIH1cclxuICAuY2FyZF9jb2x1bW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItY2FyZHMpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmxpcF9kZXRhaWxzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FyZHMpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxNzBweDtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgLm5lY19pbWcge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LCAtNTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZF9uZWNfZGV0YWlscyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcGFkZGluZzogNjBweCAxMHB4IDEwcHggNDVweDtcclxuICAgIH1cclxuICAgIC5wcm9maWxlX2RldGFpbHMge1xyXG4gICAgICAucHJvZmlsZV9pbWcge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkX2RldGFpbHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRfbmVjX3N0YXR1cyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXR1c19uZWMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICAgIH1cclxuICAgIC5zdGF0dXNfbmVjX2J1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0N3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICYuYnRuX2VkaXQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5idG5fcmVmIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9yYW5nZS1saWdodCk7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYnRuX3NoYXJlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LXBpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkc19zdGF0dXMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgLmRhdGUtY3Ige1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXR1c19iZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2stbGd0KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXR1c19idXR0b24ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0N3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICYuYnRuX2VkaXQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYnRuX3JlZiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3JhbmdlLWxpZ2h0KTtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5idG5fc2hhcmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LXBpbmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5zdGF0dXNfZHJvcGRvd24ge1xyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tY29sb3ItZ3JlZW4pO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLWRhcmspO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idG4tY29sb3ItZ3JlZW4pO1xyXG4gICAgcGFkZGluZzogNnB4IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB9XHJcbiAgc2VsZWN0OjotbXMtZXhwYW5kIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5zdGF0dXNfZHJvcGRvd25fZ3JlZW4ge1xyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tY29sb3ItZ3JlZW4pO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLWRhcmspO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idG4tY29sb3ItZ3JlZW4pO1xyXG4gICAgcGFkZGluZzogNnB4IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB9XHJcbiAgc2VsZWN0OjotbXMtZXhwYW5kIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5zdGF0dXNfZHJvcGRvd25fcmVkIHtcclxuICBzZWxlY3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHBpbms7XHJcbiAgICBwYWRkaW5nOiA2cHggM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuICAuc2lkZV9jb250YWluZXIge1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWRidG4ge1xyXG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jYXJkX2l0ZW17XHJcbiAgbWF4LXdpZHRoOiAzMzVweDtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBAbWVkaWEgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC8vIC5idG4tbWFpbntcclxuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgIGJvdHRvbTozMHB4O1xyXG4gIC8vICAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gfVxyXG59XHJcbi5idG5fYm90dG9tIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIH1cclxuICAuYnRuX2ZsaXAsXHJcbiAgLmJ0bl9kb3dubG9hZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tY29sb3ItYm94LXNoZG93KTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIH1cclxuICAuYnRuX2ZsaXAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZHJ5LWJ1dHRvbik7XHJcbiAgICBjb2xvcjogI2ZlOTgwMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG5fZG93bmxvYWQgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 8607:
/*!******************************************************!*\
  !*** ./src/app/end-user/end-user/end-user.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "EndUserModule": () => (/* binding */ EndUserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _end_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./end-user.component */ 631);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_vcard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-vcard */ 9379);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);







// import { QRCodeModule } from 'angularx-qrcode';
const routes = [
    {
        path: '',
        component: _end_user_component__WEBPACK_IMPORTED_MODULE_0__.EndUserComponent
    }
];
class EndUserModule {
}
EndUserModule.ɵfac = function EndUserModule_Factory(t) { return new (t || EndUserModule)(); };
EndUserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EndUserModule });
EndUserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            ngx_vcard__WEBPACK_IMPORTED_MODULE_4__.NgxVcardModule,
            // QRCodeModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EndUserModule, { declarations: [_end_user_component__WEBPACK_IMPORTED_MODULE_0__.EndUserComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        ngx_vcard__WEBPACK_IMPORTED_MODULE_4__.NgxVcardModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_end-user_end-user_end-user_module_ts.js.map