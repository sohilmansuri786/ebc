"use strict";
(self["webpackChunkebc"] = self["webpackChunkebc"] || []).push([["default-src_app_shared_i18n_i18n_module_ts"],{

/***/ 2820:
/*!********************************************!*\
  !*** ./src/app/shared/i18n/i18n.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18nModule": () => (/* binding */ I18nModule),
/* harmony export */   "translateLoaderFactory": () => (/* binding */ translateLoaderFactory)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5347);









class I18nModule {
    constructor(translateService, platform) {
        var _a;
        this.platform = platform;
        translateService.addLangs((_a = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.language) === null || _a === void 0 ? void 0 : _a.map((el) => el.code));
        const browserLang = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platform)
            ? (translateService.getLangs().includes(localStorage.getItem('currentLanguage')) ?
                localStorage.getItem('currentLanguage') : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === null || src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === void 0 ? void 0 : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultLangCode) ||
                (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === null || src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === void 0 ? void 0 : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultLangCode) ||
                translateService.getBrowserLang()
            : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === null || src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === void 0 ? void 0 : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultLangCode;
        translateService.use(browserLang || (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === null || src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === void 0 ? void 0 : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultLangCode));
    }
}
I18nModule.ɵfac = function I18nModule_Factory(t) { return new (t || I18nModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID)); };
I18nModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: I18nModule });
I18nModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserTransferStateModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateLoader,
                    useFactory: translateLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.TransferState, _angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID],
                },
            }),
        ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](I18nModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserTransferStateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule] }); })();
// export function translateLoaderFactory(
//   httpClient: HttpClient,
//   transferState: TransferState,
//   platform: any
// ) {
//   return isPlatformBrowser(platform)
//     ? new TranslateHttpLoader(httpClient)
//     : '';
// }
// required for AOT compilation
function translateLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http);
}


/***/ }),

/***/ 7514:
/*!**************************************************************************!*\
  !*** ./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_LANGUAGE": () => (/* binding */ DEFAULT_LANGUAGE),
/* harmony export */   "FakeMissingTranslationHandler": () => (/* binding */ FakeMissingTranslationHandler),
/* harmony export */   "MissingTranslationHandler": () => (/* binding */ MissingTranslationHandler),
/* harmony export */   "TranslateCompiler": () => (/* binding */ TranslateCompiler),
/* harmony export */   "TranslateDefaultParser": () => (/* binding */ TranslateDefaultParser),
/* harmony export */   "TranslateDirective": () => (/* binding */ TranslateDirective),
/* harmony export */   "TranslateFakeCompiler": () => (/* binding */ TranslateFakeCompiler),
/* harmony export */   "TranslateFakeLoader": () => (/* binding */ TranslateFakeLoader),
/* harmony export */   "TranslateLoader": () => (/* binding */ TranslateLoader),
/* harmony export */   "TranslateModule": () => (/* binding */ TranslateModule),
/* harmony export */   "TranslateParser": () => (/* binding */ TranslateParser),
/* harmony export */   "TranslatePipe": () => (/* binding */ TranslatePipe),
/* harmony export */   "TranslateService": () => (/* binding */ TranslateService),
/* harmony export */   "TranslateStore": () => (/* binding */ TranslateStore),
/* harmony export */   "USE_DEFAULT_LANG": () => (/* binding */ USE_DEFAULT_LANG),
/* harmony export */   "USE_EXTEND": () => (/* binding */ USE_EXTEND),
/* harmony export */   "USE_STORE": () => (/* binding */ USE_STORE)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4437);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1954);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3853);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2673);





class TranslateLoader {}
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */


class TranslateFakeLoader extends TranslateLoader {
  getTranslation(lang) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({});
  }

}

TranslateFakeLoader.ɵfac = /* @__PURE__ */function () {
  let ɵTranslateFakeLoader_BaseFactory;
  return function TranslateFakeLoader_Factory(t) {
    return (ɵTranslateFakeLoader_BaseFactory || (ɵTranslateFakeLoader_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TranslateFakeLoader)))(t || TranslateFakeLoader);
  };
}();

TranslateFakeLoader.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TranslateFakeLoader,
  factory: TranslateFakeLoader.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateFakeLoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();

class MissingTranslationHandler {}
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */


class FakeMissingTranslationHandler {
  handle(params) {
    return params.key;
  }

}

FakeMissingTranslationHandler.ɵfac = function FakeMissingTranslationHandler_Factory(t) {
  return new (t || FakeMissingTranslationHandler)();
};

FakeMissingTranslationHandler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FakeMissingTranslationHandler,
  factory: FakeMissingTranslationHandler.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FakeMissingTranslationHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
/* tslint:disable */

/**
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param o1 Object or value to compare.
 * @param o2 Object or value to compare.
 * @returns true if arguments are equal.
 */


function equals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN

  let t1 = typeof o1,
      t2 = typeof o2,
      length,
      key,
      keySet;

  if (t1 == t2 && t1 == 'object') {
    if (Array.isArray(o1)) {
      if (!Array.isArray(o2)) return false;

      if ((length = o1.length) == o2.length) {
        for (key = 0; key < length; key++) {
          if (!equals(o1[key], o2[key])) return false;
        }

        return true;
      }
    } else {
      if (Array.isArray(o2)) {
        return false;
      }

      keySet = Object.create(null);

      for (key in o1) {
        if (!equals(o1[key], o2[key])) {
          return false;
        }

        keySet[key] = true;
      }

      for (key in o2) {
        if (!(key in keySet) && typeof o2[key] !== 'undefined') {
          return false;
        }
      }

      return true;
    }
  }

  return false;
}
/* tslint:enable */


function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

function mergeDeep(target, source) {
  let output = Object.assign({}, target);

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, {
            [key]: source[key]
          });
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, {
          [key]: source[key]
        });
      }
    });
  }

  return output;
}

class TranslateParser {}

class TranslateDefaultParser extends TranslateParser {
  constructor() {
    super(...arguments);
    this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
  }

  interpolate(expr, params) {
    let result;

    if (typeof expr === 'string') {
      result = this.interpolateString(expr, params);
    } else if (typeof expr === 'function') {
      result = this.interpolateFunction(expr, params);
    } else {
      // this should not happen, but an unrelated TranslateService test depends on it
      result = expr;
    }

    return result;
  }

  getValue(target, key) {
    let keys = typeof key === 'string' ? key.split('.') : [key];
    key = '';

    do {
      key += keys.shift();

      if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
        target = target[key];
        key = '';
      } else if (!keys.length) {
        target = undefined;
      } else {
        key += '.';
      }
    } while (keys.length);

    return target;
  }

  interpolateFunction(fn, params) {
    return fn(params);
  }

  interpolateString(expr, params) {
    if (!params) {
      return expr;
    }

    return expr.replace(this.templateMatcher, (substring, b) => {
      let r = this.getValue(params, b);
      return isDefined(r) ? r : substring;
    });
  }

}

TranslateDefaultParser.ɵfac = /* @__PURE__ */function () {
  let ɵTranslateDefaultParser_BaseFactory;
  return function TranslateDefaultParser_Factory(t) {
    return (ɵTranslateDefaultParser_BaseFactory || (ɵTranslateDefaultParser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TranslateDefaultParser)))(t || TranslateDefaultParser);
  };
}();

TranslateDefaultParser.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TranslateDefaultParser,
  factory: TranslateDefaultParser.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateDefaultParser, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();

class TranslateCompiler {}
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */


class TranslateFakeCompiler extends TranslateCompiler {
  compile(value, lang) {
    return value;
  }

  compileTranslations(translations, lang) {
    return translations;
  }

}

TranslateFakeCompiler.ɵfac = /* @__PURE__ */function () {
  let ɵTranslateFakeCompiler_BaseFactory;
  return function TranslateFakeCompiler_Factory(t) {
    return (ɵTranslateFakeCompiler_BaseFactory || (ɵTranslateFakeCompiler_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TranslateFakeCompiler)))(t || TranslateFakeCompiler);
  };
}();

TranslateFakeCompiler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TranslateFakeCompiler,
  factory: TranslateFakeCompiler.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateFakeCompiler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();

class TranslateStore {
  constructor() {
    /**
     * The lang currently used
     */
    this.currentLang = this.defaultLang;
    /**
     * a list of translations per lang
     */

    this.translations = {};
    /**
     * an array of langs
     */

    this.langs = [];
    /**
     * An EventEmitter to listen to translation change events
     * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
       *     // do something
       * });
     */

    this.onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * An EventEmitter to listen to lang change events
     * onLangChange.subscribe((params: LangChangeEvent) => {
       *     // do something
       * });
     */

    this.onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * An EventEmitter to listen to default lang change events
     * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
       *     // do something
       * });
     */

    this.onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }

}

const USE_STORE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('USE_STORE');
const USE_DEFAULT_LANG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('USE_DEFAULT_LANG');
const DEFAULT_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('DEFAULT_LANGUAGE');
const USE_EXTEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('USE_EXTEND');

class TranslateService {
  /**
   *
   * @param store an instance of the store (that is supposed to be unique)
   * @param currentLoader An instance of the loader currently used
   * @param compiler An instance of the compiler currently used
   * @param parser An instance of the parser currently used
   * @param missingTranslationHandler A handler for missing translations.
   * @param useDefaultLang whether we should use default language translation when current language translation is missing.
   * @param isolate whether this service should use the store or not
   * @param extend To make a child module extend (and use) translations from parent modules.
   * @param defaultLanguage Set the default language using configuration
   */
  constructor(store, currentLoader, compiler, parser, missingTranslationHandler, useDefaultLang = true, isolate = false, extend = false, defaultLanguage) {
    this.store = store;
    this.currentLoader = currentLoader;
    this.compiler = compiler;
    this.parser = parser;
    this.missingTranslationHandler = missingTranslationHandler;
    this.useDefaultLang = useDefaultLang;
    this.isolate = isolate;
    this.extend = extend;
    this.pending = false;
    this._onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._langs = [];
    this._translations = {};
    this._translationRequests = {};
    /** set the default language from configuration */

    if (defaultLanguage) {
      this.setDefaultLang(defaultLanguage);
    }
  }
  /**
   * An EventEmitter to listen to translation change events
   * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
     *     // do something
     * });
   */


  get onTranslationChange() {
    return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
  }
  /**
   * An EventEmitter to listen to lang change events
   * onLangChange.subscribe((params: LangChangeEvent) => {
     *     // do something
     * });
   */


  get onLangChange() {
    return this.isolate ? this._onLangChange : this.store.onLangChange;
  }
  /**
   * An EventEmitter to listen to default lang change events
   * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
     *     // do something
     * });
   */


  get onDefaultLangChange() {
    return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
  }
  /**
   * The default lang to fallback when translations are missing on the current lang
   */


  get defaultLang() {
    return this.isolate ? this._defaultLang : this.store.defaultLang;
  }

  set defaultLang(defaultLang) {
    if (this.isolate) {
      this._defaultLang = defaultLang;
    } else {
      this.store.defaultLang = defaultLang;
    }
  }
  /**
   * The lang currently used
   */


  get currentLang() {
    return this.isolate ? this._currentLang : this.store.currentLang;
  }

  set currentLang(currentLang) {
    if (this.isolate) {
      this._currentLang = currentLang;
    } else {
      this.store.currentLang = currentLang;
    }
  }
  /**
   * an array of langs
   */


  get langs() {
    return this.isolate ? this._langs : this.store.langs;
  }

  set langs(langs) {
    if (this.isolate) {
      this._langs = langs;
    } else {
      this.store.langs = langs;
    }
  }
  /**
   * a list of translations per lang
   */


  get translations() {
    return this.isolate ? this._translations : this.store.translations;
  }

  set translations(translations) {
    if (this.isolate) {
      this._translations = translations;
    } else {
      this.store.translations = translations;
    }
  }
  /**
   * Sets the default language to use as a fallback
   */


  setDefaultLang(lang) {
    if (lang === this.defaultLang) {
      return;
    }

    let pending = this.retrieveTranslations(lang);

    if (typeof pending !== "undefined") {
      // on init set the defaultLang immediately
      if (this.defaultLang == null) {
        this.defaultLang = lang;
      }

      pending.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(res => {
        this.changeDefaultLang(lang);
      });
    } else {
      // we already have this language
      this.changeDefaultLang(lang);
    }
  }
  /**
   * Gets the default language used
   */


  getDefaultLang() {
    return this.defaultLang;
  }
  /**
   * Changes the lang currently used
   */


  use(lang) {
    // don't change the language if the language given is already selected
    if (lang === this.currentLang) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.translations[lang]);
    }

    let pending = this.retrieveTranslations(lang);

    if (typeof pending !== "undefined") {
      // on init set the currentLang immediately
      if (!this.currentLang) {
        this.currentLang = lang;
      }

      pending.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(res => {
        this.changeLang(lang);
      });
      return pending;
    } else {
      // we have this language, return an Observable
      this.changeLang(lang);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.translations[lang]);
    }
  }
  /**
   * Retrieves the given translations
   */


  retrieveTranslations(lang) {
    let pending; // if this language is unavailable or extend is true, ask for it

    if (typeof this.translations[lang] === "undefined" || this.extend) {
      this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
      pending = this._translationRequests[lang];
    }

    return pending;
  }
  /**
   * Gets an object of translations for a given language with the current loader
   * and passes it through the compiler
   */


  getTranslation(lang) {
    this.pending = true;
    const loadingTranslations = this.currentLoader.getTranslation(lang).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
    this.loadingTranslations = loadingTranslations.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.compiler.compileTranslations(res, lang)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
    this.loadingTranslations.subscribe({
      next: res => {
        this.translations[lang] = this.extend && this.translations[lang] ? Object.assign(Object.assign({}, res), this.translations[lang]) : res;
        this.updateLangs();
        this.pending = false;
      },
      error: err => {
        this.pending = false;
      }
    });
    return loadingTranslations;
  }
  /**
   * Manually sets an object of translations for a given language
   * after passing it through the compiler
   */


  setTranslation(lang, translations, shouldMerge = false) {
    translations = this.compiler.compileTranslations(translations, lang);

    if ((shouldMerge || this.extend) && this.translations[lang]) {
      this.translations[lang] = mergeDeep(this.translations[lang], translations);
    } else {
      this.translations[lang] = translations;
    }

    this.updateLangs();
    this.onTranslationChange.emit({
      lang: lang,
      translations: this.translations[lang]
    });
  }
  /**
   * Returns an array of currently available langs
   */


  getLangs() {
    return this.langs;
  }
  /**
   * Add available langs
   */


  addLangs(langs) {
    langs.forEach(lang => {
      if (this.langs.indexOf(lang) === -1) {
        this.langs.push(lang);
      }
    });
  }
  /**
   * Update the list of available langs
   */


  updateLangs() {
    this.addLangs(Object.keys(this.translations));
  }
  /**
   * Returns the parsed result of the translations
   */


  getParsedResult(translations, key, interpolateParams) {
    let res;

    if (key instanceof Array) {
      let result = {},
          observables = false;

      for (let k of key) {
        result[k] = this.getParsedResult(translations, k, interpolateParams);

        if ((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(result[k])) {
          observables = true;
        }
      }

      if (observables) {
        const sources = key.map(k => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(result[k]) ? result[k] : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(result[k]));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(sources).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(arr => {
          let obj = {};
          arr.forEach((value, index) => {
            obj[key[index]] = value;
          });
          return obj;
        }));
      }

      return result;
    }

    if (translations) {
      res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
    }

    if (typeof res === "undefined" && this.defaultLang != null && this.defaultLang !== this.currentLang && this.useDefaultLang) {
      res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
    }

    if (typeof res === "undefined") {
      let params = {
        key,
        translateService: this
      };

      if (typeof interpolateParams !== 'undefined') {
        params.interpolateParams = interpolateParams;
      }

      res = this.missingTranslationHandler.handle(params);
    }

    return typeof res !== "undefined" ? res : key;
  }
  /**
   * Gets the translated value of a key (or an array of keys)
   * @returns the translated key, or an object of translated keys
   */


  get(key, interpolateParams) {
    if (!isDefined(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    } // check if we are loading a new translation to use


    if (this.pending) {
      return this.loadingTranslations.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.concatMap)(res => {
        res = this.getParsedResult(res, key, interpolateParams);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(res) ? res : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(res);
      }));
    } else {
      let res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(res) ? res : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(res);
    }
  }
  /**
   * Returns a stream of translated values of a key (or an array of keys) which updates
   * whenever the translation changes.
   * @returns A stream of the translated key, or an object of translated keys
   */


  getStreamOnTranslationChange(key, interpolateParams) {
    if (!isDefined(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.defer)(() => this.get(key, interpolateParams)), this.onTranslationChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(event => {
      const res = this.getParsedResult(event.translations, key, interpolateParams);

      if (typeof res.subscribe === 'function') {
        return res;
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(res);
      }
    })));
  }
  /**
   * Returns a stream of translated values of a key (or an array of keys) which updates
   * whenever the language changes.
   * @returns A stream of the translated key, or an object of translated keys
   */


  stream(key, interpolateParams) {
    if (!isDefined(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.defer)(() => this.get(key, interpolateParams)), this.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(event => {
      const res = this.getParsedResult(event.translations, key, interpolateParams);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(res) ? res : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(res);
    })));
  }
  /**
   * Returns a translation instantly from the internal state of loaded translation.
   * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
   */


  instant(key, interpolateParams) {
    if (!isDefined(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    }

    let res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);

    if ((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(res)) {
      if (key instanceof Array) {
        let obj = {};
        key.forEach((value, index) => {
          obj[key[index]] = key[index];
        });
        return obj;
      }

      return key;
    } else {
      return res;
    }
  }
  /**
   * Sets the translated value of a key, after compiling it
   */


  set(key, value, lang = this.currentLang) {
    this.translations[lang][key] = this.compiler.compile(value, lang);
    this.updateLangs();
    this.onTranslationChange.emit({
      lang: lang,
      translations: this.translations[lang]
    });
  }
  /**
   * Changes the current lang
   */


  changeLang(lang) {
    this.currentLang = lang;
    this.onLangChange.emit({
      lang: lang,
      translations: this.translations[lang]
    }); // if there is no default lang, use the one that we just set

    if (this.defaultLang == null) {
      this.changeDefaultLang(lang);
    }
  }
  /**
   * Changes the default lang
   */


  changeDefaultLang(lang) {
    this.defaultLang = lang;
    this.onDefaultLangChange.emit({
      lang: lang,
      translations: this.translations[lang]
    });
  }
  /**
   * Allows to reload the lang file from the file
   */


  reloadLang(lang) {
    this.resetLang(lang);
    return this.getTranslation(lang);
  }
  /**
   * Deletes inner translation
   */


  resetLang(lang) {
    this._translationRequests[lang] = undefined;
    this.translations[lang] = undefined;
  }
  /**
   * Returns the language code name from the browser, e.g. "de"
   */


  getBrowserLang() {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return undefined;
    }

    let browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
    browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

    if (typeof browserLang === 'undefined') {
      return undefined;
    }

    if (browserLang.indexOf('-') !== -1) {
      browserLang = browserLang.split('-')[0];
    }

    if (browserLang.indexOf('_') !== -1) {
      browserLang = browserLang.split('_')[0];
    }

    return browserLang;
  }
  /**
   * Returns the culture language code name from the browser, e.g. "de-DE"
   */


  getBrowserCultureLang() {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return undefined;
    }

    let browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
    browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
    return browserCultureLang;
  }

}

TranslateService.ɵfac = function TranslateService_Factory(t) {
  return new (t || TranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TranslateStore), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TranslateLoader), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TranslateCompiler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TranslateParser), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MissingTranslationHandler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](USE_DEFAULT_LANG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](USE_STORE), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](USE_EXTEND), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DEFAULT_LANGUAGE));
};

TranslateService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TranslateService,
  factory: TranslateService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: TranslateStore
    }, {
      type: TranslateLoader
    }, {
      type: TranslateCompiler
    }, {
      type: TranslateParser
    }, {
      type: MissingTranslationHandler
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [USE_DEFAULT_LANG]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [USE_STORE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [USE_EXTEND]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [DEFAULT_LANGUAGE]
      }]
    }];
  }, null);
})();

class TranslateDirective {
  constructor(translateService, element, _ref) {
    this.translateService = translateService;
    this.element = element;
    this._ref = _ref; // subscribe to onTranslationChange event, in case the translations of the current lang change

    if (!this.onTranslationChangeSub) {
      this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(event => {
        if (event.lang === this.translateService.currentLang) {
          this.checkNodes(true, event.translations);
        }
      });
    } // subscribe to onLangChange event, in case the language changes


    if (!this.onLangChangeSub) {
      this.onLangChangeSub = this.translateService.onLangChange.subscribe(event => {
        this.checkNodes(true, event.translations);
      });
    } // subscribe to onDefaultLangChange event, in case the default language changes


    if (!this.onDefaultLangChangeSub) {
      this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(event => {
        this.checkNodes(true);
      });
    }
  }

  set translate(key) {
    if (key) {
      this.key = key;
      this.checkNodes();
    }
  }

  set translateParams(params) {
    if (!equals(this.currentParams, params)) {
      this.currentParams = params;
      this.checkNodes(true);
    }
  }

  ngAfterViewChecked() {
    this.checkNodes();
  }

  checkNodes(forceUpdate = false, translations) {
    let nodes = this.element.nativeElement.childNodes; // if the element is empty

    if (!nodes.length) {
      // we add the key as content
      this.setContent(this.element.nativeElement, this.key);
      nodes = this.element.nativeElement.childNodes;
    }

    for (let i = 0; i < nodes.length; ++i) {
      let node = nodes[i];

      if (node.nodeType === 3) {
        // node type 3 is a text node
        let key;

        if (forceUpdate) {
          node.lastKey = null;
        }

        if (isDefined(node.lookupKey)) {
          key = node.lookupKey;
        } else if (this.key) {
          key = this.key;
        } else {
          let content = this.getContent(node);
          let trimmedContent = content.trim();

          if (trimmedContent.length) {
            node.lookupKey = trimmedContent; // we want to use the content as a key, not the translation value

            if (content !== node.currentValue) {
              key = trimmedContent; // the content was changed from the user, we'll use it as a reference if needed

              node.originalContent = content || node.originalContent;
            } else if (node.originalContent) {
              // the content seems ok, but the lang has changed
              // the current content is the translation, not the key, use the last real content as key
              key = node.originalContent.trim();
            } else if (content !== node.currentValue) {
              // we want to use the content as a key, not the translation value
              key = trimmedContent; // the content was changed from the user, we'll use it as a reference if needed

              node.originalContent = content || node.originalContent;
            }
          }
        }

        this.updateValue(key, node, translations);
      }
    }
  }

  updateValue(key, node, translations) {
    if (key) {
      if (node.lastKey === key && this.lastParams === this.currentParams) {
        return;
      }

      this.lastParams = this.currentParams;

      let onTranslation = res => {
        if (res !== key) {
          node.lastKey = key;
        }

        if (!node.originalContent) {
          node.originalContent = this.getContent(node);
        }

        node.currentValue = isDefined(res) ? res : node.originalContent || key; // we replace in the original content to preserve spaces that we might have trimmed

        this.setContent(node, this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));

        this._ref.markForCheck();
      };

      if (isDefined(translations)) {
        let res = this.translateService.getParsedResult(translations, key, this.currentParams);

        if ((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(res)) {
          res.subscribe({
            next: onTranslation
          });
        } else {
          onTranslation(res);
        }
      } else {
        this.translateService.get(key, this.currentParams).subscribe(onTranslation);
      }
    }
  }

  getContent(node) {
    return isDefined(node.textContent) ? node.textContent : node.data;
  }

  setContent(node, content) {
    if (isDefined(node.textContent)) {
      node.textContent = content;
    } else {
      node.data = content;
    }
  }

  ngOnDestroy() {
    if (this.onLangChangeSub) {
      this.onLangChangeSub.unsubscribe();
    }

    if (this.onDefaultLangChangeSub) {
      this.onDefaultLangChangeSub.unsubscribe();
    }

    if (this.onTranslationChangeSub) {
      this.onTranslationChangeSub.unsubscribe();
    }
  }

}

TranslateDirective.ɵfac = function TranslateDirective_Factory(t) {
  return new (t || TranslateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};

TranslateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: TranslateDirective,
  selectors: [["", "translate", ""], ["", "ngx-translate", ""]],
  inputs: {
    translate: "translate",
    translateParams: "translateParams"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[translate],[ngx-translate]'
    }]
  }], function () {
    return [{
      type: TranslateService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    translate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    translateParams: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

class TranslatePipe {
  constructor(translate, _ref) {
    this.translate = translate;
    this._ref = _ref;
    this.value = '';
    this.lastKey = null;
    this.lastParams = [];
  }

  updateValue(key, interpolateParams, translations) {
    let onTranslation = res => {
      this.value = res !== undefined ? res : key;
      this.lastKey = key;

      this._ref.markForCheck();
    };

    if (translations) {
      let res = this.translate.getParsedResult(translations, key, interpolateParams);

      if ((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(res.subscribe)) {
        res.subscribe(onTranslation);
      } else {
        onTranslation(res);
      }
    }

    this.translate.get(key, interpolateParams).subscribe(onTranslation);
  }

  transform(query, ...args) {
    if (!query || !query.length) {
      return query;
    } // if we ask another time for the same key, return the last value


    if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
      return this.value;
    }

    let interpolateParams = undefined;

    if (isDefined(args[0]) && args.length) {
      if (typeof args[0] === 'string' && args[0].length) {
        // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
        // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
        let validArgs = args[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":').replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');

        try {
          interpolateParams = JSON.parse(validArgs);
        } catch (e) {
          throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`);
        }
      } else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
        interpolateParams = args[0];
      }
    } // store the query, in case it changes


    this.lastKey = query; // store the params, in case they change

    this.lastParams = args; // set the value

    this.updateValue(query, interpolateParams); // if there is a subscription to onLangChange, clean it

    this._dispose(); // subscribe to onTranslationChange event, in case the translations change


    if (!this.onTranslationChange) {
      this.onTranslationChange = this.translate.onTranslationChange.subscribe(event => {
        if (this.lastKey && event.lang === this.translate.currentLang) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams, event.translations);
        }
      });
    } // subscribe to onLangChange event, in case the language changes


    if (!this.onLangChange) {
      this.onLangChange = this.translate.onLangChange.subscribe(event => {
        if (this.lastKey) {
          this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated

          this.updateValue(query, interpolateParams, event.translations);
        }
      });
    } // subscribe to onDefaultLangChange event, in case the default language changes


    if (!this.onDefaultLangChange) {
      this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(() => {
        if (this.lastKey) {
          this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated

          this.updateValue(query, interpolateParams);
        }
      });
    }

    return this.value;
  }
  /**
   * Clean any existing subscription to change events
   */


  _dispose() {
    if (typeof this.onTranslationChange !== 'undefined') {
      this.onTranslationChange.unsubscribe();
      this.onTranslationChange = undefined;
    }

    if (typeof this.onLangChange !== 'undefined') {
      this.onLangChange.unsubscribe();
      this.onLangChange = undefined;
    }

    if (typeof this.onDefaultLangChange !== 'undefined') {
      this.onDefaultLangChange.unsubscribe();
      this.onDefaultLangChange = undefined;
    }
  }

  ngOnDestroy() {
    this._dispose();
  }

}

TranslatePipe.ɵfac = function TranslatePipe_Factory(t) {
  return new (t || TranslatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TranslateService, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef, 16));
};

TranslatePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "translate",
  type: TranslatePipe,
  pure: false
});
TranslatePipe.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TranslatePipe,
  factory: TranslatePipe.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslatePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
    args: [{
      name: 'translate',
      pure: false // required to update the value when the promise is resolved

    }]
  }], function () {
    return [{
      type: TranslateService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, null);
})();

class TranslateModule {
  /**
   * Use this method in your root module to provide the TranslateService
   */
  static forRoot(config = {}) {
    return {
      ngModule: TranslateModule,
      providers: [config.loader || {
        provide: TranslateLoader,
        useClass: TranslateFakeLoader
      }, config.compiler || {
        provide: TranslateCompiler,
        useClass: TranslateFakeCompiler
      }, config.parser || {
        provide: TranslateParser,
        useClass: TranslateDefaultParser
      }, config.missingTranslationHandler || {
        provide: MissingTranslationHandler,
        useClass: FakeMissingTranslationHandler
      }, TranslateStore, {
        provide: USE_STORE,
        useValue: config.isolate
      }, {
        provide: USE_DEFAULT_LANG,
        useValue: config.useDefaultLang
      }, {
        provide: USE_EXTEND,
        useValue: config.extend
      }, {
        provide: DEFAULT_LANGUAGE,
        useValue: config.defaultLanguage
      }, TranslateService]
    };
  }
  /**
   * Use this method in your other (non root) modules to import the directive/pipe
   */


  static forChild(config = {}) {
    return {
      ngModule: TranslateModule,
      providers: [config.loader || {
        provide: TranslateLoader,
        useClass: TranslateFakeLoader
      }, config.compiler || {
        provide: TranslateCompiler,
        useClass: TranslateFakeCompiler
      }, config.parser || {
        provide: TranslateParser,
        useClass: TranslateDefaultParser
      }, config.missingTranslationHandler || {
        provide: MissingTranslationHandler,
        useClass: FakeMissingTranslationHandler
      }, {
        provide: USE_STORE,
        useValue: config.isolate
      }, {
        provide: USE_DEFAULT_LANG,
        useValue: config.useDefaultLang
      }, {
        provide: USE_EXTEND,
        useValue: config.extend
      }, {
        provide: DEFAULT_LANGUAGE,
        useValue: config.defaultLanguage
      }, TranslateService]
    };
  }

}

TranslateModule.ɵfac = function TranslateModule_Factory(t) {
  return new (t || TranslateModule)();
};

TranslateModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: TranslateModule
});
TranslateModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [TranslatePipe, TranslateDirective],
      exports: [TranslatePipe, TranslateDirective]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 5347:
/*!****************************************************************************************!*\
  !*** ./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateHttpLoader": () => (/* binding */ TranslateHttpLoader)
/* harmony export */ });
class TranslateHttpLoader {
    constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
    }
    /**
     * Gets the translations from the server
     */
    getTranslation(lang) {
        return this.http.get(`${this.prefix}${lang}${this.suffix}`);
    }
}

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_i18n_i18n_module_ts.js.map