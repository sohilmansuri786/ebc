(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _service_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/_guards */ 7897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_i18n_i18n_module_ts"), __webpack_require__.e("default-node_modules_ngx-auto-unsubscribe_dist_index_js-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("src_app_auth_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/login/login.module */ 8990)).then(m => m.LoginModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_0__.LoginRedirect],
        data: { title: 'Login' },
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_i18n_i18n_module_ts"), __webpack_require__.e("src_app_auth_forgot-password_forgot-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/forgot-password/forgot-password.module */ 6377)).then(m => m.ForgotPasswordModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_0__.LoginRedirect],
        data: { title: 'forgot-password' },
    },
    {
        path: 'reset-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_i18n_i18n_module_ts"), __webpack_require__.e("src_app_auth_reset-password_reset-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/reset-password/reset-password.module */ 9987)).then(m => m.ResetPasswordModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_0__.LoginRedirect],
        data: { title: 'reset-password' },
    },
    {
        path: 'verification',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_i18n_i18n_module_ts"), __webpack_require__.e("src_app_auth_verify-opt_verify-opt_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/verify-opt/verify-opt.module */ 1879)).then(m => m.VerifyOptModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_0__.LoginRedirect],
        data: { title: 'link-expired' },
    },
    {
        path: 'end-user',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-ngx-vcard_fesm2015_ngx-vcard_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_end-user_end-user_end-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./end-user/end-user/end-user.module */ 8607)).then(m => m.EndUserModule),
        data: { title: 'End User' },
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_i18n_i18n_module_ts"), __webpack_require__.e("default-node_modules_ngx-auto-unsubscribe_dist_index_js-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_module_master_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/master.module */ 9932)).then(m => m.MasterModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_0__.EnsureAuthenticated],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _shared_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/messages */ 4613);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _core_change_password_popup_change_password_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/change-password-popup/change-password-popup.component */ 9937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _service_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/jwt.service */ 5190);
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/data.service */ 4590);
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/common.service */ 5842);
/* harmony import */ var _service_tenant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/tenant.service */ 8444);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _core_loader_fullscreen_loading_fullscreen_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/loader/fullscreen-loading/fullscreen-loading.component */ 329);














class AppComponent {
    constructor(renderer, router, activatedRoute, titleService, jwtService, dataService, meta, commonService, tenantService, dialog) {
        this.renderer = renderer;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.jwtService = jwtService;
        this.dataService = dataService;
        this.meta = meta;
        this.commonService = commonService;
        this.tenantService = tenantService;
        this.dialog = dialog;
        this.permissionObject = [];
        if (window.location.host == 'ebc-web.azurewebsites.net') {
            let path = window.location.href.split('ebc-web.azurewebsites.net/')[1];
            window.location.href = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.frontEndURL}${path}`;
        }
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationStart) {
                if (this.previousUrl) {
                    this.renderer.removeClass(document.body, this.previousUrl);
                }
                const currentUrlSlug = event.url.slice(1);
                if (currentUrlSlug) {
                    this.renderer.addClass(document.body, currentUrlSlug);
                }
                this.previousUrl = currentUrlSlug;
            }
        });
        this.globalRouterEvents();
        if (this.jwtService.getToken() && this.jwtService.getRefreshToken()) {
            if (window.location.pathname != '/end-user')
                this.refreshToken();
        }
        this.dataService.isAuthenticated.subscribe((isLoggedIn) => {
            this.isAuthenticated = isLoggedIn;
        });
        this.dataService.permission.subscribe((response) => {
            response && response.length > 0 ? this.permissionObject = response : '';
        });
    }
    globalRouterEvents() {
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd)).subscribe(() => {
            const rt = this.getChild(this.activatedRoute);
            rt.data.subscribe(data => {
                var _a;
                this.isRootPage = data && data.isRootPage;
                const title = data && data.title;
                const tags = data && data.tags;
                const permissionCode = data && data.permission;
                if (title) {
                    this.titleService.setTitle(`${title} | ${_shared_messages__WEBPACK_IMPORTED_MODULE_0__.APP_NAME}`);
                }
                if (tags) {
                    tags.forEach((tag) => {
                        this.meta.updateTag(tag);
                    });
                }
                if (data && data.permission)
                    if (this.permissionObject.length != 0) {
                        if (!((_a = this.permissionObject) === null || _a === void 0 ? void 0 : _a.includes(permissionCode))) {
                            this.router.navigateByUrl('/dashboard');
                            return;
                        }
                    }
                    else {
                        // this.dataService.purgeAuth();
                        // this.router.navigateByUrl('/login');
                        return;
                    }
            });
        });
    }
    refreshToken() {
        this.commonService.refreshToken().subscribe((response) => {
            if (response) {
                this.dataService.setAuth(response);
                response.tenantCode ? this.getTenantDetails(response.tenantCode) : '';
                if (response.user.isFirstTimeLogin) {
                    const dialogRef = this.dialog.open(_core_change_password_popup_change_password_popup_component__WEBPACK_IMPORTED_MODULE_2__.ChangePasswordComponentPopup, {
                        disableClose: true,
                        // width: '855px',
                        // height: '700px',
                        data: response,
                        panelClass: 'delete-popup'
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        if (result && result.is_delete) {
                            // this.roleService.deleteRole(result.id).subscribe((res) => {
                            //   this.getObjects();
                            // })
                        }
                    });
                }
            }
        }, (err) => {
            this.dataService.purgeAuth();
            window.location.reload();
        });
    }
    getTenantDetails(tenantCode) {
        this.tenantService.getTenantByCodeEndUser({
            "code": tenantCode
        }).subscribe((res) => {
            if (res && res.data)
                this.dataService.currentTenantSubject.next(res);
        });
    }
    ngOnInit() { }
    getChild(activatedRoute) {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        }
        else {
            return activatedRoute;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_jwt_service__WEBPACK_IMPORTED_MODULE_3__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_tenant_service__WEBPACK_IMPORTED_MODULE_6__.TenantService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["role", "main", 2, "height", "100%"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "fullscreen-loading");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _core_loader_fullscreen_loading_fullscreen_loading_component__WEBPACK_IMPORTED_MODULE_7__.FullscreenLoadingComponent], styles: ["body[_ngcontent-%COMP%] {\n  transition: all linear 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4zcztcclxufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _service_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/_helpers */ 4533);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/material.module */ 4872);
/* harmony import */ var _core_change_password_popup_change_password_popup_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/change-password-popup/change-password-popup.module */ 2997);
/* harmony import */ var _service_helpers_loader_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/_helpers/loader.interceptor */ 5757);
/* harmony import */ var _core_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/loader/loader.module */ 1098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _service_helpers__WEBPACK_IMPORTED_MODULE_1__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _service_helpers__WEBPACK_IMPORTED_MODULE_1__.ErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _service_helpers_loader_interceptor__WEBPACK_IMPORTED_MODULE_5__.LoaderInterceptor, multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule.forRoot({ preventDuplicates: true }),
            _shared_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExModule,
            _core_change_password_popup_change_password_popup_module__WEBPACK_IMPORTED_MODULE_4__.ChangePasswordModule,
            _core_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__.LoaderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule, _shared_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExModule,
        _core_change_password_popup_change_password_popup_module__WEBPACK_IMPORTED_MODULE_4__.ChangePasswordModule,
        _core_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__.LoaderModule] }); })();


/***/ }),

/***/ 9937:
/*!*******************************************************************************!*\
  !*** ./src/app/core/change-password-popup/change-password-popup.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponentPopup": () => (/* binding */ ChangePasswordComponentPopup)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_shared_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/common */ 3118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/form-validation/directive/form-submit.directive */ 9855);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/form-validation/directive/control-errors.directive */ 6242);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);













// import { ToastrService } from 'ngx-toastr';
class ChangePasswordComponentPopup {
    constructor(userService, fb, toastr, dialogRef) {
        this.userService = userService;
        this.fb = fb;
        this.toastr = toastr;
        this.dialogRef = dialogRef;
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
                    this.dialogRef.close(false);
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
ChangePasswordComponentPopup.ɵfac = function ChangePasswordComponentPopup_Factory(t) { return new (t || ChangePasswordComponentPopup)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef)); };
ChangePasswordComponentPopup.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ChangePasswordComponentPopup, selectors: [["app-change-password-popup"]], decls: 39, vars: 10, consts: [[1, "side_container"], [1, "card"], [1, "card_details"], [1, "d-flex", "justify-content-between"], [1, "form-hadding"], [1, "form_container"], [3, "formGroup", "ngSubmit"], [1, "form-group", "paddingLabel", "required"], [1, "text_field"], ["for", "old password"], ["appearance", "outline", 1, "w-100", "h-60"], ["matInput", "", "placeholder", "Old Password", 3, "formControl", "type"], ["matSuffix", "", 1, "eye-icon1", 3, "click"], ["for", "new password"], ["matInput", "", "placeholder", "New Password", 3, "formControl", "type"], ["matSuffix", "", 1, "eye-icon2", 3, "click"], ["for", "Confirm password"], ["matInput", "", "placeholder", "Confirm Password", 3, "formControl", "type"], ["matSuffix", "", 1, "eye-icon3", 3, "click"], [1, "d-flex", "justify-content-center", "margin-y", "buttons"], ["type", "submit", "mat-raised-button", "", 1, "blue-btn"]], template: function ChangePasswordComponentPopup_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponentPopup_Template_form_ngSubmit_7_listener() { return ctx.submitForm(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordComponentPopup_Template_mat_icon_click_16_listener() { return ctx.hide = !ctx.hide; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordComponentPopup_Template_mat_icon_click_25_listener() { return ctx.hide1 = !ctx.hide1; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordComponentPopup_Template_mat_icon_click_34_listener() { return ctx.hide2 = !ctx.hide2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Save ");
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _shared_form_validation_directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_2__.FormSubmitDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _shared_form_validation_directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_3__.ControlErrorsDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton], styles: [".card[_ngcontent-%COMP%] {\n  background-color: var(--color-light-blue);\n  border-radius: 1.5rem;\n  padding: 1rem 2rem;\n}\n@media (max-width: 576px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 0;\n    box-shadow: none;\n  }\n}\n.card_details[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 1rem;\n  padding: 20px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.17);\n}\n@media (max-width: 576px) {\n  .card_details[_ngcontent-%COMP%] {\n    padding: 0;\n    box-shadow: none;\n  }\n}\n.card_details[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 600;\n  font-size: 22px;\n  padding: 20px 20px 20px 20px;\n  margin-bottom: 0;\n}\n@media (max-width: 576px) {\n  .card_details[_ngcontent-%COMP%]   .form-hadding[_ngcontent-%COMP%] {\n    padding: 20px 20px 20px 10px;\n  }\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%] {\n  padding: 20px 20px 20px 20px;\n  max-width: 500px;\n}\n@media (max-width: 576px) {\n  .card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%] {\n    padding: 20px 20px 20px 10px;\n    max-width: 100%;\n  }\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 10px 10px 1px;\n  color: var(--color-secondary);\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 27px;\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n@media (max-width: 576px) {\n  .card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    padding: 20px 0px 20px 0px;\n  }\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n  text-decoration: none;\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  background-color: var(--white);\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-line-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 35px;\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.card_details[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .blue-line-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n}\n.eye-icon1[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -2px;\n  top: -22px;\n  cursor: pointer;\n}\n.eye-icon2[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -2px;\n  top: -22px;\n  cursor: pointer;\n}\n.eye-icon3[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -2px;\n  top: -22px;\n  cursor: pointer;\n}\n  .delete-popup .mat-dialog-container {\n  border-radius: 20px;\n}\n.delet-popup[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 500px;\n}\n.delet-popup[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n}\n.delet-popup[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  font-weight: 500;\n  font-size: 22px;\n  margin: 3rem 0rem 4rem 0rem;\n}\n.delet-popup[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 48px;\n  box-shadow: 0px 4px 21px rgba(26, 88, 246, 0.49);\n  border-radius: 10px;\n  margin-left: 15px;\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n  text-decoration: none;\n}\n.delet-popup[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  background-color: var(--white);\n}\n.delet-popup[_ngcontent-%COMP%]   .blue-line-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  height: 48px;\n  width: 200px;\n  border: 2px solid var(--color-primary);\n  border-radius: 10px;\n  margin-left: 5px;\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.delet-popup[_ngcontent-%COMP%]   .blue-line-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: var(--white);\n  border: 2px solid var(--color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFKRjtJQUtJLFVBQUE7SUFDQSxnQkFBQTtFQUdGO0FBQ0Y7QUFBQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUFHRjtBQUZFO0VBTEY7SUFNSSxVQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGO0FBSkU7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFNSjtBQUxJO0VBTkY7SUFPSSw0QkFBQTtFQVFKO0FBQ0Y7QUFMRTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUFPSjtBQU5JO0VBSEY7SUFJSSw0QkFBQTtJQUNBLGVBQUE7RUFTSjtBQUNGO0FBUkk7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVVOO0FBUEk7RUFDRSxhQUFBO0FBU047QUFSTTtFQUZGO0lBR0ksMEJBQUE7RUFXTjtBQUNGO0FBVk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFFQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQkFBQTtBQVdSO0FBVFE7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FBV1Y7QUFQTTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBU1I7QUFQUTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQVNWO0FBRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUtGO0FBRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUtGO0FBRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUtGO0FBREU7RUFDRSxtQkFBQTtBQUlKO0FBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUdGO0FBREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUdKO0FBREU7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBR0o7QUFBRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7QUFFSjtBQUFJO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtBQUVOO0FBRUU7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQUFKO0FBRUk7RUFDRSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFBTiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtYmx1ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmRfZGV0YWlscyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggcmdiKDI2IDg4IDI0NiAvIDE3JSk7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLmZvcm0taGFkZGluZyB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm1fY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDEwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGxhYmVsIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxcHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIHtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJsdWUtYnRuIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCByZ2JhKDI2LCA4OCwgMjQ2LCAwLjQ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJsdWUtbGluZS1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5leWUtaWNvbjEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTJweDtcclxuICB0b3A6IC0yMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmV5ZS1pY29uMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMnB4O1xyXG4gIHRvcDogLTIycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZXllLWljb24zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0ycHg7XHJcbiAgdG9wOiAtMjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGVsZXRlLXBvcHVwIHtcclxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5kZWxldC1wb3B1cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuXHJcbiAgJiBpbWcge1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgaGVpZ2h0OiAxMjhweDtcclxuICB9XHJcbiAgJiBoMyB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW46IDNyZW0gMHJlbSA0cmVtIDByZW07XHJcbiAgfVxyXG5cclxuICAuYmx1ZS1idG4ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IHJnYmEoMjYsIDg4LCAyNDYsIDAuNDkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJsdWUtbGluZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2997:
/*!****************************************************************************!*\
  !*** ./src/app/core/change-password-popup/change-password-popup.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordModule": () => (/* binding */ ChangePasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ 3153);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/material.module */ 4872);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/loader/loader.module */ 1098);
/* harmony import */ var _change_password_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-popup.component */ 9937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);











class ChangePasswordModule {
}
ChangePasswordModule.ɵfac = function ChangePasswordModule_Factory(t) { return new (t || ChangePasswordModule)(); };
ChangePasswordModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ChangePasswordModule });
ChangePasswordModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_0__.FormValidationModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ChangePasswordModule, { declarations: [_change_password_popup_component__WEBPACK_IMPORTED_MODULE_5__.ChangePasswordComponentPopup], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_0__.FormValidationModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule], exports: [_change_password_popup_component__WEBPACK_IMPORTED_MODULE_5__.ChangePasswordComponentPopup] }); })();


/***/ }),

/***/ 329:
/*!********************************************************************************!*\
  !*** ./src/app/core/loader/fullscreen-loading/fullscreen-loading.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullscreenLoadingComponent": () => (/* binding */ FullscreenLoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/loader.service */ 5399);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loading/loading.component */ 9367);





function FullscreenLoadingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

class FullscreenLoadingComponent {
  constructor(loaderService) {
    this.loaderService = loaderService;
    this.isLoading = this.loaderService.isLoading;
  }

  ngOnInit() {}

}

FullscreenLoadingComponent.ɵfac = function FullscreenLoadingComponent_Factory(t) {
  return new (t || FullscreenLoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
};

FullscreenLoadingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FullscreenLoadingComponent,
  selectors: [["fullscreen-loading"]],
  decls: 2,
  vars: 3,
  consts: [["class", "loading_screen", 4, "ngIf"], [1, "loading_screen"]],
  template: function FullscreenLoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FullscreenLoadingComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.isLoading));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__.LoadingComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsc2NyZWVuLWxvYWRpbmcuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 1098:
/*!**********************************************!*\
  !*** ./src/app/core/loader/loader.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderModule": () => (/* binding */ LoaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading/loading.component */ 9367);
/* harmony import */ var _fullscreen_loading_fullscreen_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullscreen-loading/fullscreen-loading.component */ 329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class LoaderModule {
}
LoaderModule.ɵfac = function LoaderModule_Factory(t) { return new (t || LoaderModule)(); };
LoaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoaderModule });
LoaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoaderModule, { declarations: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent,
        _fullscreen_loading_fullscreen_loading_component__WEBPACK_IMPORTED_MODULE_1__.FullscreenLoadingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent,
        _fullscreen_loading_fullscreen_loading_component__WEBPACK_IMPORTED_MODULE_1__.FullscreenLoadingComponent] }); })();


/***/ }),

/***/ 9367:
/*!**********************************************************!*\
  !*** ./src/app/core/loader/loading/loading.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


const _c0 = function () { return { "background-color": "blue" }; };
class LoadingComponent {
    constructor() { }
    ngOnInit() { }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["loading"]], decls: 4, vars: 2, consts: [[1, "Loading"], ["role", "status", 1, "spinner-grow", 3, "ngStyle"], [1, "sr-only"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".Loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n}\n.Loading[_ngcontent-%COMP%], .Loading[_ngcontent-%COMP%]::after {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.Loading[_ngcontent-%COMP%]::after {\n  z-index: -1;\n  content: \"\";\n  background: rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFKRjtBQU1FO0VBRUUsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMSjtBQVFFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQU5KIiwiZmlsZSI6ImxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6aG9zdCB7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyB9XHJcblxyXG4uTG9hZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG5cclxuICAmLFxyXG4gICY6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1140:
/*!*****************************************************************!*\
  !*** ./src/app/service/_guards/ensure-authenticated.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnsureAuthenticated": () => (/* binding */ EnsureAuthenticated)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.service */ 4590);



class EnsureAuthenticated {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.dataService.currentUser.subscribe((data) => {
            if (data) {
                this.currentUser = data;
            }
        });
    }
    canActivate(route, state) {
        let temp = this.currentUser;
        if (localStorage.getItem('_auth_ebc')) {
            return true;
        }
        if (temp && temp.userType && temp.userType == "Super Admin") {
            this.router.navigate(['/login'], { queryParams: { isAdmin: true } });
        }
        else {
            this.router.navigate(['/login'], { queryParams: { next: encodeURI(state.url) } });
        }
        return false;
    }
}
EnsureAuthenticated.ɵfac = function EnsureAuthenticated_Factory(t) { return new (t || EnsureAuthenticated)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
EnsureAuthenticated.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EnsureAuthenticated, factory: EnsureAuthenticated.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7897:
/*!******************************************!*\
  !*** ./src/app/service/_guards/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnsureAuthenticated": () => (/* reexport safe */ _ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_0__.EnsureAuthenticated),
/* harmony export */   "LoginRedirect": () => (/* reexport safe */ _login_redirect_service__WEBPACK_IMPORTED_MODULE_1__.LoginRedirect)
/* harmony export */ });
/* harmony import */ var _ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ensure-authenticated.service */ 1140);
/* harmony import */ var _login_redirect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-redirect.service */ 5178);




/***/ }),

/***/ 5178:
/*!***********************************************************!*\
  !*** ./src/app/service/_guards/login-redirect.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRedirect": () => (/* binding */ LoginRedirect)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class LoginRedirect {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('_auth_ebc')) {
            return false;
        }
        else {
            return true;
        }
    }
}
LoginRedirect.ɵfac = function LoginRedirect_Factory(t) { return new (t || LoginRedirect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
LoginRedirect.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginRedirect, factory: LoginRedirect.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6999:
/*!*******************************************************!*\
  !*** ./src/app/service/_helpers/error.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/data.service */ 4590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





class ErrorInterceptor {
    constructor(dateService, router) {
        this.dateService = dateService;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
            if (error.status === 401) {
                // auto logout if 401 response returned from api
                this.dateService.purgeAuth();
                this.router.navigateByUrl('/login');
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 4533:
/*!*******************************************!*\
  !*** ./src/app/service/_helpers/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* reexport safe */ _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__.JwtInterceptor),
/* harmony export */   "ErrorInterceptor": () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_1__.ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ 8819);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ 6999);




/***/ }),

/***/ 8819:
/*!*****************************************************!*\
  !*** ./src/app/service/_helpers/jwt.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var src_app_shared_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/common */ 3118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jwt.service */ 5190);



class JwtInterceptor {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        if (request.body && request.body.open_api && request.body.token) {
            // if (request.body.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${request.body.token}`
                }
            });
            // }
        }
        else {
            const token = this.jwtService.getToken();
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${(0,src_app_shared_common__WEBPACK_IMPORTED_MODULE_0__.decryptValue)(this.jwtService.getToken())}`
                    }
                });
            }
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 5757:
/*!********************************************************!*\
  !*** ./src/app/service/_helpers/loader.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderInterceptor": () => (/* binding */ LoaderInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader.service */ 5399);



class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(request, next) {
        this.loaderService.show();
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => this.loaderService.hide()));
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
LoaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });


/***/ }),

/***/ 892:
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class AuthService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint + 'v1/Authentication/';
    }
    login(data) {
        return this.http.post(`${this.API_URL}Authenticate`, data);
    }
    forgotPassword(email) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint}v1/Auth/sendOTP`, {}, { params: email });
    }
    // End user API with static token
    endUserLogin(data) {
        return this.http.post(`${this.API_URL}DAuthenticate`, data);
    }
    getBusinessUnitListEndUser(param, header) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint}v1/BusinessUnits/GetBusinessUnits`, param, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                Authorization: `Bearer ${header.token}`
            })
        });
    }
    previewTemplateListEndUser(param, header) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint}v1/Template/Preview`, {}, {
            params: param,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                Authorization: `Bearer ${header.token}`
            })
        });
    }
    getTenantByCodeEndUser(param, header) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint}v1/Tenants/GetTenantByCode`, {
            params: param,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                Authorization: `Bearer ${header.token}`
            })
        });
    }
    // not used
    checkResetPasswordToken(token) {
        return this.http.get(`${this.API_URL}/reset-password/${token}`);
    }
    editProfile(data) {
        return this.http.post(`${this.API_URL}/auth/profile`, data);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ 5842:
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _shared_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/common */ 3118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.service */ 5190);





class CommonService {
    constructor(http, jwt) {
        this.http = http;
        this.jwt = jwt;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint;
    }
    fileUpload(file) {
        return this.http.post(`${this.API_URL}v1/FileUpload/Upload`, file).toPromise();
    }
    refreshToken() {
        return this.http.post(`${this.API_URL}v1/Authentication/RefreshToken`, { 'refreshToken': (0,_shared_common__WEBPACK_IMPORTED_MODULE_1__.decryptValue)(this.jwt.getRefreshToken()) }, { withCredentials: true });
    }
    logout(token) {
        return this.http.post(`${this.API_URL}v1/Authentication/RevokeToken`, { 'refreshToken': token });
    }
    sortData(filedName = '', ArrayList = []) {
        const data = ArrayList.slice();
        ArrayList = data.sort((a, b) => {
            return (a[filedName] < b[filedName] ? -1 : 1) * (this.isShort ? 1 : -1);
        });
        return ArrayList;
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_2__.JwtService)); };
CommonService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4590:
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _shared_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/common */ 3118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.service */ 5190);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.service */ 5842);





class DataService {
    constructor(jwtService, commonService) {
        this.jwtService = jwtService;
        this.commonService = commonService;
        // for storing current user details
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.currentUser = this.currentUserSubject.asObservable();
        // for tierId to userLicense details
        this.tierListArraySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.tierListArray = this.tierListArraySubject.asObservable();
        // for checking user is authneticated or not
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
        // for storing current Tenant details
        this.currentTenantSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.currentTenant = this.currentTenantSubject.asObservable();
        // for storing current company details
        this.currentBUSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.currentBU = this.currentBUSubject.asObservable();
        // for checking company is selected or not
        this.isCompanySelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
        this.isCompanySelected = this.isCompanySelectedSubject.asObservable();
        // for storing common lists details
        this.commonListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.commonList = this.commonListSubject.asObservable();
        // for storing current user permission details
        this.userPermissionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.permission = this.userPermissionSubject.asObservable();
        // for storing current company details
        this.forgatAuthSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.forgatAuth = this.forgatAuthSubject.asObservable();
        // for passing id from add-cards to cards-list
        this.currentIdSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.getRole = (userType) => {
            switch (userType) {
                case 'Super Admin': return ['Super Admin'];
                case 'Tenant Admin': return ['BU Admin', 'End User'];
                case 'BU Admin': return ['End User'];
                case 'End User': return ['End User'];
            }
        }; //'Tenant Admin'
    }
    saveToken(token) {
        this.jwtService.saveToken((0,_shared_common__WEBPACK_IMPORTED_MODULE_0__.encryptValue)(token));
    }
    saveRefreshToken(token) {
        this.jwtService.saveRefreshToken((0,_shared_common__WEBPACK_IMPORTED_MODULE_0__.encryptValue)(token));
    }
    saveCommonList(data) {
        this.commonListSubject.next(data);
    }
    setAuth(data) {
        this.saveToken(data['jwtToken']);
        this.saveRefreshToken(data['refreshToken']);
        this.authUser = data;
        this.updateAuth(Object.assign(Object.assign({}, data.user), { userType: data.userType, roleList: this.getRole(data.userType), tenantCode: data.tenantCode }));
        this.updatePermission(data.permissions);
        this.startRefreshTokenTimer();
    }
    updateAuth(data) {
        this.currentUserSubject.next(data);
        this.isAuthenticatedSubject.next(true);
    }
    updatePermission(data) {
        this.userPermissionSubject.next(data);
    }
    purgeAuth() {
        this.jwtService.destroyToken();
        this.jwtService.destroyRefreshToken();
        this.stopRefreshTokenTimer();
        // Set auth status to false
        this.authUser = null;
        this.isAuthenticatedSubject.next(false);
        this.currentUserSubject.next(null);
        this.userPermissionSubject.next([]);
        this.purgeCompany();
    }
    pushId(data) {
        this.currentIdSubject.next(data);
    }
    fetchId() {
        return this.currentIdSubject.asObservable();
    }
    // updateCompany(data) {
    // this.currentTenantSubject.next(data);
    //   this.jwtService.saveCompanyId(data.company_id);
    //   this.jwtService.saveCompanyName(data.company_name);
    // this.isCompanySelectedSubject.next(true);
    // }
    purgeCompany() {
        // this.jwtService.destroyCompanyId();
        // this.jwtService.destroyCompanyName();
        this.currentTenantSubject.next(null);
        this.isCompanySelectedSubject.next(false);
    }
    startRefreshTokenTimer() {
        if (this.authUser && this.authUser.jwtToken) {
            const jwtToken = JSON.parse(atob(this.authUser.jwtToken.split('.')[1]));
            console.log("jwtToken", jwtToken);
            const expires = new Date(jwtToken.exp * 1000);
            const timeout = expires.getTime() - Date.now() - (60 * 1000);
            this.test(timeout);
            this.refreshTokenTimeout = setTimeout(() => this.commonService.refreshToken().subscribe(), timeout);
        }
    }
    test(timeout) {
        let ms = timeout, min = Math.floor((ms / 1000 / 60) << 0), sec = Math.floor((ms / 1000) % 60);
        console.log(" refreshTokenTimeout", min + ':' + sec);
    }
    stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5190:
/*!****************************************!*\
  !*** ./src/app/service/jwt.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtService": () => (/* binding */ JwtService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class JwtService {
    getToken() {
        return window.localStorage['_auth_ebc'];
    }
    saveToken(token) {
        window.localStorage['_auth_ebc'] = token;
    }
    destroyToken() {
        window.localStorage.removeItem('_auth_ebc');
    }
    getCompanyId() {
        return window.localStorage['__ebc__cmp'];
    }
    saveCompanyId(id) {
        window.localStorage['__ebc__cmp'] = id;
    }
    destroyCompanyId() {
        window.localStorage.removeItem('__ebc__cmp');
    }
    getCompanyName() {
        return window.localStorage['__ebc__cmp_nm'];
    }
    saveCompanyName(name) {
        window.localStorage['__ebc__cmp_nm'] = name;
    }
    destroyCompanyName() {
        window.localStorage.removeItem('__ebc__cmp_nm');
    }
    saveValue(name, value) {
        window.localStorage[name] = value;
    }
    destroyValue(name) {
        window.localStorage.removeItem(name);
    }
    getValue(name) {
        return window.localStorage[name]; // window.localStorage['google_token'];
    }
    // refreshToken
    getRefreshToken() {
        return window.localStorage['refreshToken'];
    }
    saveRefreshToken(token) {
        window.localStorage['refreshToken'] = token;
    }
    destroyRefreshToken() {
        window.localStorage.removeItem('refreshToken');
    }
}
JwtService.ɵfac = function JwtService_Factory(t) { return new (t || JwtService)(); };
JwtService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtService, factory: JwtService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5399:
/*!*******************************************!*\
  !*** ./src/app/service/loader.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8444:
/*!*******************************************!*\
  !*** ./src/app/service/tenant.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantService": () => (/* binding */ TenantService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class TenantService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint + 'v1/Tenants/';
    }
    getTenantList(param) {
        return this.http.post(`${this.API_URL}GetTenants`, param);
    }
    saveTenant(data) {
        return this.http.post(`${this.API_URL}Save`, data);
    }
    deleteUser(id) {
        return this.http.delete(`${this.API_URL}Delete?id=${id}`);
    }
    getTenantById(param = null) {
        return this.http.get(`${this.API_URL}GetTenant`, { params: param });
    }
    getTiers(params) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint}v1/Tiers/GetTiers`, params);
    }
    checkCodeExists(code) {
        return this.http.get(`${this.API_URL}CheckCodeExists?code=${code}`);
    }
    getTenantByCodeEndUser(param) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint}v1/Tenants/GetTenantByCode`, { params: param });
    }
}
TenantService.ɵfac = function TenantService_Factory(t) { return new (t || TenantService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TenantService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TenantService, factory: TenantService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4981:
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class UserService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint + 'v1/Users/';
    }
    getUserList(param = null) {
        return this.http.post(`${this.API_URL}GetUsers`, param);
    }
    saveUser(data) {
        return this.http.post(`${this.API_URL}Save`, data);
    }
    fileUpload(data, param) {
        return this.http.post(`${this.API_URL}BulkUpload`, data, { params: param });
    }
    getUserById(param = null) {
        return this.http.get(`${this.API_URL}GetUser`, { params: param });
    }
    updatePassword(data) {
        return this.http.post(`${this.API_URL}ChangePassword`, {}, { params: data });
    }
    changePassword(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint}v1/Auth/UpdatePassword`, {}, { params: data });
    }
    deleteUser(id) {
        return this.http.delete(`${this.API_URL}Delete?id=${id}`);
    }
    getMasterData() {
        return this.http.get(`${this.API_URL}/user/master-data`);
    }
    checkLoginIdExists(param = null) {
        return this.http.get(`${this.API_URL}CheckLoginIdExists`, { params: param });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3118:
/*!**********************************!*\
  !*** ./src/app/shared/common.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encryptValue": () => (/* binding */ encryptValue),
/* harmony export */   "decryptValue": () => (/* binding */ decryptValue),
/* harmony export */   "validateEmail": () => (/* binding */ validateEmail),
/* harmony export */   "isMobileNumber": () => (/* binding */ isMobileNumber),
/* harmony export */   "setCookie": () => (/* binding */ setCookie),
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "deleteCookie": () => (/* binding */ deleteCookie),
/* harmony export */   "generateRandomPaymentReferenceNumber": () => (/* binding */ generateRandomPaymentReferenceNumber),
/* harmony export */   "CommonFunction": () => (/* binding */ CommonFunction),
/* harmony export */   "validateEmailFormControl": () => (/* binding */ validateEmailFormControl),
/* harmony export */   "PasswordValidation": () => (/* binding */ PasswordValidation),
/* harmony export */   "generateRandomAlphaNumericeString": () => (/* binding */ generateRandomAlphaNumericeString),
/* harmony export */   "validateAllFormFields": () => (/* binding */ validateAllFormFields),
/* harmony export */   "validateAllFormArrayFields": () => (/* binding */ validateAllFormArrayFields),
/* harmony export */   "enableAllFormFields": () => (/* binding */ enableAllFormFields)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 6240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/*
 * General utils for managing cookies in Typescript.
 */



const rawEncryptionKey = '#572@/.&';
function encryptValue(value) {
    const ciphertext = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(value, rawEncryptionKey);
    return ciphertext;
}
function decryptValue(value) {
    const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(value.toString(), rawEncryptionKey);
    const plaintext = bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
    return plaintext;
}
function validateEmail(email) {
    const re = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return re.test(String(email).toLowerCase());
}
function isMobileNumber(number) {
    const phoneRe = /^[+]*[(]{0,1}[6-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    return phoneRe.test(number);
}
function setCookie(name, val, type = null, time = 30) {
    const date = new Date();
    const value = encryptValue(val);
    // Set it expire in 7 days
    if (type === 'mins') {
        date.setTime(date.getTime() + (time * 60 * 1000));
    }
    else if (type === 'hrs') {
        date.setTime(date.getTime() + (time * 60 * 60 * 1000));
    }
    else if (type === 'days') {
        date.setTime(date.getTime() + (time * 24 * 60 * 60 * 1000));
    }
    // Set it
    document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}
function getCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length == 2) {
        return decryptValue(parts.pop().split(';').shift());
    }
}
function deleteCookie(name) {
    const date = new Date();
    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
    // Set it
    document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
}
function generateRandomPaymentReferenceNumber() {
    return Math.floor(Math.random() * 1000000000);
}
class CommonFunction {
}
/* This is made for setting errors of invalid form fields dynamically */
CommonFunction._setErrMsgs = (control, errorsObj, field, validationMessages) => {
    if (control && control.invalid) {
        if (validationMessages !== undefined && validationMessages !== null && validationMessages !== '') {
            const messages = validationMessages[field];
            if (messages !== undefined && messages !== null && messages !== '') {
                for (const key in control.errors) {
                    if (control.errors.hasOwnProperty(key)) {
                        errorsObj[field] = messages[key] + '<br>';
                        return;
                    }
                }
            }
        }
        else {
            for (const key in control.errors) {
                if (control.errors.hasOwnProperty(key)) {
                    errorsObj[field] = true;
                    return;
                }
            }
        }
    }
};
CommonFunction.resetForm = (control, formError = null) => {
    control.reset();
    control.markAsUntouched();
    control.markAsPristine();
    jquery__WEBPACK_IMPORTED_MODULE_1__('form').removeClass('submitted');
    jquery__WEBPACK_IMPORTED_MODULE_1__('.ng2-flatpickr-input').val('');
    if (formError !== null) {
        for (const field in formError) {
            if (formError.hasOwnProperty(field)) {
                formError[field] = '';
            }
        }
    }
};
CommonFunction.formatDateTime = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate;
    const year = d.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    let hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return [day, month, year].join('-') + ' ' + hours + ':' + minutes + ' ' + ampm;
};
CommonFunction.changedateFormate = (date) => {
    let today;
    if (date) {
        today = date;
    }
    else {
        today = new Date();
    }
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    // 2020-02-04 00:00:00
    let finaldate = `${yyyy}-${mm}-${dd} 00:00:00`;
    return finaldate;
};
CommonFunction.changedateTimeFormate = (date) => {
    let today;
    if (date) {
        today = date;
    }
    else {
        today = new Date();
    }
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var minit = today.getMinutes();
    var second = today.getSeconds();
    // 2020-02-04 12:15:60
    let finaldate = `${yyyy}-${mm}-${dd} ${hour}:${minit}:${second}`;
    return finaldate;
};
CommonFunction.formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return [day, month, year].join('-');
};
CommonFunction.datetoTimestamp = (date) => {
    return new Date(date).getTime() / 1000;
};
function validateEmailFormControl(c) {
    // tslint:disable:max-line-length
    // tslint:disable:prefer-const
    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (c.value) {
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: false
        };
    }
    return null;
}
class PasswordValidation {
    static passwordValidation() {
        return (AC) => {
            let password = AC.get('new_password').value;
            let confirmpassword = AC.get('confirm_password').value;
            if (password !== confirmpassword) {
                return AC.get('confirm_password').setErrors({ validatePassword: true });
            }
        };
    }
}
function _getRandomByte() {
    // http://caniuse.com/#feat=getrandomvalues
    let result = null;
    if (window.crypto && window.crypto.getRandomValues) {
        result = new Uint8Array(1);
        window.crypto.getRandomValues(result);
        return result[0];
    }
    else {
        return Math.floor(Math.random() * 256);
    }
}
function generateRandomAlphaNumericeString() {
    let result;
    const length = 8;
    const _pattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
    const str = Array.apply(null, { 'length': length }).map(function () {
        while (true) {
            result = String.fromCharCode(_getRandomByte());
            if (_pattern.test(result)) {
                return result;
            }
        }
    }, this).join('');
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
    return regex.test(str) ? str : generateRandomAlphaNumericeString();
}
function validateAllFormFields(formGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
        const control = formGroup.get(field); //{3}
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl) {
            control.markAsTouched({ onlySelf: true });
        }
        else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup) {
            this.validateAllFormFields(control); //{6}
        }
    });
}
function validateAllFormArrayFields(formArray) {
    formArray.controls.forEach((control, i) => {
        validateAllFormFields(control);
    });
}
function enableAllFormFields(formGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
        const control = formGroup.get(field); //{3}
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl) {
            control.enable();
        }
        else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup) {
            enableAllFormFields(control); //{6}
        }
    });
}


/***/ }),

/***/ 3580:
/*!******************************************************!*\
  !*** ./src/app/shared/directive/number.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberDirective": () => (/* binding */ NumberDirective),
/* harmony export */   "FloatNumberDirective": () => (/* binding */ FloatNumberDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onKeyDown(event) {
        const e = event;
        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105 ||
            (e.keyCode === 110) || (e.keyCode === 190))) {
            e.preventDefault();
        }
    }
}
NumberDirective.ɵfac = function NumberDirective_Factory(t) { return new (t || NumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
NumberDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumberDirective, selectors: [["", "number", ""]], hostBindings: function NumberDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NumberDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } } });
class FloatNumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onKeyDown(event) {
        const e = event;
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    }
}
FloatNumberDirective.ɵfac = function FloatNumberDirective_Factory(t) { return new (t || FloatNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
FloatNumberDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FloatNumberDirective, selectors: [["", "floatNumber", ""]], hostBindings: function FloatNumberDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function FloatNumberDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } } });


/***/ }),

/***/ 4239:
/*!***********************************************************!*\
  !*** ./src/app/shared/directive/router-back.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterBackDirective": () => (/* binding */ RouterBackDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


class RouterBackDirective {
    constructor(location) {
        this.location = location;
    }
    onClick() {
        this.location.back();
    }
}
RouterBackDirective.ɵfac = function RouterBackDirective_Factory(t) { return new (t || RouterBackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location)); };
RouterBackDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RouterBackDirective, selectors: [["", "routerBack", ""]], hostBindings: function RouterBackDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RouterBackDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });


/***/ }),

/***/ 2322:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/form-validation/control-error/control-error.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlErrorComponent": () => (/* binding */ ControlErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 4770);


class ControlErrorComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this._hide = true;
    }
    set text(value) {
        if (value !== this._text) {
            this._text = value;
            this._hide = !value;
            this.cdr.detectChanges();
        }
    }
    ngOnInit() {
    }
}
ControlErrorComponent.ɵfac = function ControlErrorComponent_Factory(t) { return new (t || ControlErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
ControlErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlErrorComponent, selectors: [["app-control-error"]], inputs: { text: "text" }, decls: 1, vars: 3, consts: [[3, "innerHTML"]], template: function ControlErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-error", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx._hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx._text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 9112:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/form-validation/directive/control-error-container.directive.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlErrorContainerDirective": () => (/* binding */ ControlErrorContainerDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ControlErrorContainerDirective {
    constructor(vcr) {
        this.vcr = vcr;
    }
}
ControlErrorContainerDirective.ɵfac = function ControlErrorContainerDirective_Factory(t) { return new (t || ControlErrorContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
ControlErrorContainerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ControlErrorContainerDirective, selectors: [["", "controlErrorContainer", ""]] });


/***/ }),

/***/ 6242:
/*!******************************************************************************!*\
  !*** ./src/app/shared/form-validation/directive/control-errors.directive.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlErrorsDirective": () => (/* binding */ ControlErrorsDirective)
/* harmony export */ });
/* harmony import */ var _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../control-error/control-error.component */ 2322);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var _form_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-errors */ 3741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _control_error_container_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-error-container.directive */ 9112);
/* harmony import */ var _form_submit_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-submit.directive */ 9855);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);







class ControlErrorsDirective {
    constructor(vcr, resolver, controlErrorContainer, form, controlDir) {
        this.vcr = vcr;
        this.resolver = resolver;
        this.form = form;
        this.controlDir = controlDir;
        this.customErrors = {};
        this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
        this.submit$ = this.form ? this.form.submit$ : rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
    }
    ngOnInit() {
        if (this.control && this.control.valueChanges) {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(this.control.valueChanges, this.submit$).subscribe((v) => {
                const controlErrors = this.control.errors;
                if (controlErrors) {
                    const control_name = this.getFormControlName(this.control);
                    const firstKey = Object.keys(controlErrors)[0];
                    const messages = _form_errors__WEBPACK_IMPORTED_MODULE_1__.VALIDATION_MESSAGES[control_name];
                    if (messages !== undefined && messages !== null && messages !== '') {
                        this.setError(messages[firstKey]);
                    }
                }
                else if (this.ref) {
                    this.setError(null);
                }
            });
        }
    }
    getFormControlName(c) {
        const formGroup = c.parent.controls;
        return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
    }
    get control() {
        return this.controlDir.control;
    }
    setError(text) {
        if (!this.ref) {
            const factory = this.resolver.resolveComponentFactory(_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_0__.ControlErrorComponent);
            this.ref = this.container.createComponent(factory);
        }
        this.ref.instance.text = text;
    }
    ngOnDestroy() { }
}
ControlErrorsDirective.ɵfac = function ControlErrorsDirective_Factory(t) { return new (t || ControlErrorsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_control_error_container_directive__WEBPACK_IMPORTED_MODULE_2__.ControlErrorContainerDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__.FormSubmitDirective, 9), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControl)); };
ControlErrorsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({ type: ControlErrorsDirective, selectors: [["", "formControl", ""], ["", "formControlName", ""]], inputs: { customErrors: "customErrors" } });


/***/ }),

/***/ 9855:
/*!***************************************************************************!*\
  !*** ./src/app/shared/form-validation/directive/form-submit.directive.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormSubmitDirective": () => (/* binding */ FormSubmitDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



class FormSubmitDirective {
    constructor(host) {
        this.host = host;
        this.submit$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.element, 'submit').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
            if (this.element.classList.contains('submitted') === false) {
                this.element.classList.add('submitted');
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1));
    }
    get element() {
        return this.host.nativeElement;
    }
}
FormSubmitDirective.ɵfac = function FormSubmitDirective_Factory(t) { return new (t || FormSubmitDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef)); };
FormSubmitDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: FormSubmitDirective, selectors: [["form"]] });


/***/ }),

/***/ 3741:
/*!*******************************************************!*\
  !*** ./src/app/shared/form-validation/form-errors.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VALIDATION_MESSAGES": () => (/* binding */ VALIDATION_MESSAGES)
/* harmony export */ });
const VALIDATION_MESSAGES = {
    first_name: {
        required: `* Please enter first name`,
    },
    last_name: {
        required: `* Please enter last name`,
    },
    email: {
        required: `* Please enter email`,
        email: `* Please enter valid email`,
        validateEmail: `* Please enter valid email`,
    },
    phone_number: {
        required: `Please enter phone number`,
        minlength: `Please enter at least 8 digits`,
        maxlength: `Please enter at least 18 digits`
    },
    password: {
        required: `* Please enter password`,
        pattern: `* Password must contains at least 6 characters`,
    },
    confirm_password: {
        required: `* Please enter confirm password`,
        validatePassword: `* Your Password is not matched`,
    },
    login_pin: {
        required: `* Please enter PIN`,
        maxlength: `Pin Max 4 Digit`,
        minlength: `Please enter at least 4 digits`,
    },
    number_tag_to_create: {
        required: `* Please enter vlaue`,
        max: `Maximum 100`,
        min: ` Minimum 1`
    },
};


/***/ }),

/***/ 3153:
/*!******************************************************************!*\
  !*** ./src/app/shared/form-validation/form-validation.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidationModule": () => (/* binding */ FormValidationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive/form-submit.directive */ 9855);
/* harmony import */ var _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive/control-errors.directive */ 6242);
/* harmony import */ var _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directive/control-error-container.directive */ 9112);
/* harmony import */ var _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-error/control-error.component */ 2322);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








class FormValidationModule {
}
FormValidationModule.ɵfac = function FormValidationModule_Factory(t) { return new (t || FormValidationModule)(); };
FormValidationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FormValidationModule });
FormValidationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FormValidationModule, { declarations: [_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__.ControlErrorComponent,
        _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_2__.ControlErrorContainerDirective,
        _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_1__.ControlErrorsDirective,
        _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_0__.FormSubmitDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule], exports: [_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__.ControlErrorComponent,
        _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_2__.ControlErrorContainerDirective,
        _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_1__.ControlErrorsDirective,
        _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_0__.FormSubmitDirective] }); })();


/***/ }),

/***/ 4872:
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialExModule": () => (/* binding */ MaterialExModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ 3134);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ 1604);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 4941);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ 1780);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ 3865);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ 8205);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 3672);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ 1859);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ 4972);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);














































class MaterialExModule {
}
MaterialExModule.ɵfac = function MaterialExModule_Factory(t) { return new (t || MaterialExModule)(); };
MaterialExModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialExModule });
MaterialExModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__.ScrollingModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__.MatFormFieldModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialExModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__.ScrollingModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__.MatFormFieldModule] }); })();


/***/ }),

/***/ 4613:
/*!************************************!*\
  !*** ./src/app/shared/messages.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_NAME": () => (/* binding */ APP_NAME),
/* harmony export */   "DATEFORMAT": () => (/* binding */ DATEFORMAT),
/* harmony export */   "TIMEFORMAT": () => (/* binding */ TIMEFORMAT),
/* harmony export */   "DATE_TIME_FORMAT": () => (/* binding */ DATE_TIME_FORMAT),
/* harmony export */   "DATE_FORMAT": () => (/* binding */ DATE_FORMAT),
/* harmony export */   "DATERANGE_FORMAT": () => (/* binding */ DATERANGE_FORMAT),
/* harmony export */   "TIME_FORMAT": () => (/* binding */ TIME_FORMAT),
/* harmony export */   "errorMessage": () => (/* binding */ errorMessage)
/* harmony export */ });
const APP_NAME = window.localStorage['__ebc__cmp_nm'] ? window.localStorage['__ebc__cmp_nm'] : 'Smart Digital Business Card';
const DATEFORMAT = 'd-m-Y';
const TIMEFORMAT = 'h:i K';
const DATE_TIME_FORMAT = {
    dateFormat: DATEFORMAT + ' ' + TIMEFORMAT,
    enableTime: true,
    defaultDate: new Date()
    // minDate: null
};
const DATE_FORMAT = {
    dateFormat: DATEFORMAT,
    enableTime: false,
    // minDate: null
};
const DATERANGE_FORMAT = {
    dateFormat: DATEFORMAT,
    mode: 'range'
};
const TIME_FORMAT = {
    dateFormat: TIMEFORMAT,
    time_24hr: false,
    enableTime: true,
    noCalendar: true,
    defaultDate: new Date()
};
const errorMessage = {
    change_password_success: 'Your password changed Successfully',
    delete_dialogue_type: 'error',
    delete_header_text: 'Are you sure you want to delete?',
    delete_confirm_button: 'Yes, Delete it!',
    delete_cancel_button: 'No, Keep it',
    delete_smalll_text: 'You will not be able to recover this!',
    not_delete_dialogue_type: 'error',
    not_delete_header_text: `You can't delete this`,
    not_delete_confirm_button: 'Yes, Delete it!',
    not_delete_cancel_button: 'No, Keep it',
    not_delete_smalll_text: ' This Threshold Attached With Profile',
    unassign_dialogue_type: 'error',
    unassign_header_text: 'Are you sure want to un-assign?',
    unassign_confirm_button: 'Yes, Un-Assign it!',
    unassign_cancel_button: 'No, Keep it',
    unassign_smalll_text: 'You will not be able to recover this!',
    accept_installment_request_dialogue_type: 'success',
    accept_installment_request_header_text: 'Are you sure want to Accept?',
    accept_installment_request_confirm_button: 'Yes, Accept it!',
    accept_installment_request_cancel_button: 'No, Keep it',
    accept_installment_request_smalll_text: 'You will not be able to recover this!',
    reject_installment_request_dialogue_type: 'success',
    reject_installment_request_header_text: 'Are you sure want to Reject?',
    reject_installment_request_confirm_button: 'Yes, Reject it!',
    reject_installment_request_cancel_button: 'No, Keep it',
    reject_installment_request_smalll_text: 'You will not be able to recover this!',
    status_change_dialogue_type: 'warning',
    status_change_header_text: 'Are you sure want to change?',
    status_change_confirm_button: 'Yes',
    status_change_cancel_button: 'No, Keep it',
    status_change_smalll_text: '',
};


/***/ }),

/***/ 5554:
/*!********************************************!*\
  !*** ./src/app/shared/pipe/status.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardSizeSortForm": () => (/* binding */ CardSizeSortForm),
/* harmony export */   "CardSizeFullForm": () => (/* binding */ CardSizeFullForm),
/* harmony export */   "PricePipe": () => (/* binding */ PricePipe),
/* harmony export */   "userLicensePipe": () => (/* binding */ userLicensePipe),
/* harmony export */   "TireNamePipe": () => (/* binding */ TireNamePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/data.service */ 4590);


class CardSizeSortForm {
    transform(value, args) {
        let text = null;
        if (value) {
            switch (value.value) {
                case 'pixels':
                    text = `px`;
                    break;
                case 'inches':
                    text = `in`;
                    break;
                case 'centimeters':
                    text = `cm`;
                    break;
                default:
                    text = 'px';
                    break;
            }
            return text;
        }
    }
}
CardSizeSortForm.ɵfac = function CardSizeSortForm_Factory(t) { return new (t || CardSizeSortForm)(); };
CardSizeSortForm.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "cardSizeSortForm", type: CardSizeSortForm, pure: true });
class CardSizeFullForm {
    transform(value, args) {
        let text = null;
        if (value) {
            switch (value.value) {
                case 'px':
                    text = `pixels`;
                    break;
                case 'in':
                    text = `inches`;
                    break;
                case 'cm':
                    text = `centimeters`;
                    break;
                default:
                    text = 'pixels';
                    break;
            }
            return text;
        }
    }
}
CardSizeFullForm.ɵfac = function CardSizeFullForm_Factory(t) { return new (t || CardSizeFullForm)(); };
CardSizeFullForm.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "cardSizeFullForm", type: CardSizeFullForm, pure: true });
class PricePipe {
    transform(value, args) {
        return value ? parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) : '00';
        // return parseFloat(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}
PricePipe.ɵfac = function PricePipe_Factory(t) { return new (t || PricePipe)(); };
PricePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "price", type: PricePipe, pure: true });
class userLicensePipe {
    constructor(dataService) {
        this.dataService = dataService;
        this.tierList = [];
        this.dataService.tierListArray.subscribe(data => {
            this.tierList = data;
        });
    }
    transform(value, args) {
        let text = "";
        if (value) {
            this.tierList.map((tire) => {
                if ((tire === null || tire === void 0 ? void 0 : tire.id) && value && (tire === null || tire === void 0 ? void 0 : tire.id) == value) {
                    text = tire === null || tire === void 0 ? void 0 : tire.licenseCount;
                }
            });
            return text;
        }
    }
}
userLicensePipe.ɵfac = function userLicensePipe_Factory(t) { return new (t || userLicensePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService, 16)); };
userLicensePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "userLicense", type: userLicensePipe, pure: true });
class TireNamePipe {
    constructor(dataService) {
        this.dataService = dataService;
        this.tierList = [];
        this.dataService.tierListArray.subscribe(data => {
            this.tierList = data;
        });
    }
    transform(value, args) {
        let text = "";
        if (value) {
            this.tierList.map((tire) => {
                if ((tire === null || tire === void 0 ? void 0 : tire.id) && value && (tire === null || tire === void 0 ? void 0 : tire.id) == value) {
                    text = tire === null || tire === void 0 ? void 0 : tire.name;
                }
            });
            return text;
        }
    }
}
TireNamePipe.ɵfac = function TireNamePipe_Factory(t) { return new (t || TireNamePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService, 16)); };
TireNamePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "tireName", type: TireNamePipe, pure: true });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _directive_number_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive/number.directive */ 3580);
/* harmony import */ var _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe/status.pipe */ 5554);
/* harmony import */ var _directive_router_back_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directive/router-back.directive */ 4239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





const components = [
    _directive_number_directive__WEBPACK_IMPORTED_MODULE_0__.NumberDirective,
    _directive_number_directive__WEBPACK_IMPORTED_MODULE_0__.FloatNumberDirective,
    _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.PricePipe, _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.TireNamePipe,
    _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.CardSizeSortForm,
    _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.CardSizeFullForm,
    _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.userLicensePipe,
    _directive_router_back_directive__WEBPACK_IMPORTED_MODULE_2__.RouterBackDirective
];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directive_number_directive__WEBPACK_IMPORTED_MODULE_0__.NumberDirective,
        _directive_number_directive__WEBPACK_IMPORTED_MODULE_0__.FloatNumberDirective,
        _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.PricePipe, _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.TireNamePipe,
        _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.CardSizeSortForm,
        _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.CardSizeFullForm,
        _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.userLicensePipe,
        _directive_router_back_directive__WEBPACK_IMPORTED_MODULE_2__.RouterBackDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_directive_number_directive__WEBPACK_IMPORTED_MODULE_0__.NumberDirective,
        _directive_number_directive__WEBPACK_IMPORTED_MODULE_0__.FloatNumberDirective,
        _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.PricePipe, _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.TireNamePipe,
        _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.CardSizeSortForm,
        _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.CardSizeFullForm,
        _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__.userLicensePipe,
        _directive_router_back_directive__WEBPACK_IMPORTED_MODULE_2__.RouterBackDirective] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    APIEndpoint: 'https://ebcdevwebapis.azurewebsites.net/api/',
    // APIEndpoint: 'https://ebcprodwebapis.azurewebsites.net/api/',
    defaultLangCode: 'en',
    language: [
        { code: 'en', key: 'english', value: 'English' },
        { code: 'ja', key: 'Japanese', value: '日本' },
        { code: 'chi', key: 'Chinese', value: '中國人' },
    ],
    defaultPageLimit: 10,
    pageLimit: [5, 10, 15, 20, 25],
    // frontEndURL: 'https://dev.nec-digicard.com/'
    frontEndURL: 'https://sohilmansuri786.github.io/sohilmansuri786/'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map