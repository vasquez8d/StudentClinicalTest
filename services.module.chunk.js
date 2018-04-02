webpackJsonp(["services.module"],{

/***/ "./src/app/main/content/services/config/config.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"config\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Services</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Config</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>Config</code> is a custom built Fuse service allows to have a granule control over the Fuse. It can be\r\n            used for changing theme options (layout, color etc.) by component basis.\r\n        </p>\r\n\r\n        <div class=\"my-48\">\r\n            <h2>Usage</h2>\r\n            <p class=\"mat-grey-200-bg py-8\">\r\n\r\n                <fuse-highlight lang=\"typescript\">\r\n                    <textarea #source>\r\n\r\n                        export class SomeComponent\r\n                        {\r\n                            config: any;\r\n\r\n                            constructor(private fuseConfig: FuseConfigService)\r\n                            {\r\n                                // Subscribe to settings changed event\r\n                                this.fuseConfig.onConfigChanged.subscribe(\r\n                                    (newConfig) => {\r\n                                        this.config = newConfig;\r\n                                    }\r\n                                );\r\n                            }\r\n\r\n                            onInit(){\r\n\r\n                                // Fully customizable surroundings for this particular component\r\n                                this.fuseConfig.setConfig({\r\n                                    layout          : {\r\n                                        navigation      : 'left',       // 'right', 'left', 'top', none\r\n                                        navigationFolded: false,        // true, false\r\n                                        toolbar         : 'below',      // 'above', 'below', none\r\n                                        footer          : 'none'        // 'above', 'below', none\r\n                                        mode            : 'fullwidth'   // 'boxed', 'fullwidth'\r\n                                    },\r\n                                    colorClasses    : {\r\n                                        toolbar: 'mat-white-500-bg',\r\n                                        navbar : 'mat-fuse-dark-700-bg',\r\n                                        footer : 'mat-fuse-dark-900-bg'\r\n                                    },\r\n                                    customScrollbars: true,\r\n                                    routerAnimation : 'fadeIn'\r\n                                });\r\n                            }\r\n                        }\r\n\r\n                    </textarea>\r\n                </fuse-highlight>\r\n\r\n            </p>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/content/services/config/config.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/services/config/config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseConfigServiceDocsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseConfigServiceDocsComponent = /** @class */ (function () {
    function FuseConfigServiceDocsComponent() {
    }
    FuseConfigServiceDocsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-config-service-docs',
            template: __webpack_require__("./src/app/main/content/services/config/config.component.html"),
            styles: [__webpack_require__("./src/app/main/content/services/config/config.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseConfigServiceDocsComponent);
    return FuseConfigServiceDocsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseServicesModule", function() { return FuseServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config_component__ = __webpack_require__("./src/app/main/content/services/config/config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splash_screen_splash_screen_component__ = __webpack_require__("./src/app/main/content/services/splash-screen/splash-screen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'config',
        component: __WEBPACK_IMPORTED_MODULE_5__config_config_component__["a" /* FuseConfigServiceDocsComponent */]
    },
    {
        path: 'splash-screen',
        component: __WEBPACK_IMPORTED_MODULE_6__splash_screen_splash_screen_component__["a" /* FuseSplashScreenServiceDocsComponent */]
    }
];
var FuseServicesModule = /** @class */ (function () {
    function FuseServicesModule() {
    }
    FuseServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__config_config_component__["a" /* FuseConfigServiceDocsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__splash_screen_splash_screen_component__["a" /* FuseSplashScreenServiceDocsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["c" /* FuseHighlightModule */]
            ],
        })
    ], FuseServicesModule);
    return FuseServicesModule;
}());



/***/ }),

/***/ "./src/app/main/content/services/splash-screen/splash-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"splash-screen\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Services</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Splash Screen</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>Splash screen</code> is a custom built Fuse service allows to have a fully controllable splash\r\n            screen. It also has built state for application loading so it will always be available while the app\r\n            loads.\r\n        </p>\r\n\r\n        <div class=\"my-48\">\r\n            <h2>Usage</h2>\r\n            <p class=\"mat-grey-200-bg py-8\">\r\n\r\n                <fuse-highlight lang=\"typescript\">\r\n                    <textarea #source>\r\n\r\n                        export class SomeComponent\r\n                        {\r\n                            constructor(private fuseSplashScreen: FuseSplashScreenService) {}\r\n\r\n                            onInit(){\r\n                                this.fuseSplashScreen.show();\r\n                                this.fuseSplashScreen.hide();\r\n                            }\r\n                        }\r\n\r\n                    </textarea>\r\n                </fuse-highlight>\r\n\r\n            </p>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/content/services/splash-screen/splash-screen.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/services/splash-screen/splash-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSplashScreenServiceDocsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseSplashScreenServiceDocsComponent = /** @class */ (function () {
    function FuseSplashScreenServiceDocsComponent() {
    }
    FuseSplashScreenServiceDocsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-splash-screen-service-docs',
            template: __webpack_require__("./src/app/main/content/services/splash-screen/splash-screen.component.html"),
            styles: [__webpack_require__("./src/app/main/content/services/splash-screen/splash-screen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSplashScreenServiceDocsComponent);
    return FuseSplashScreenServiceDocsComponent;
}());



/***/ })

});
//# sourceMappingURL=services.module.chunk.js.map