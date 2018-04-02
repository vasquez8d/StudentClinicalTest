webpackJsonp(["ui.module"],{

/***/ "./src/app/main/content/ui/colors/colors.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"material-colors\" class=\"page-layout simple tabbed\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Colors</div>\r\n        </div>\r\n\r\n        <a mat-raised-button class=\"reference-button mat-white-bg mt-16 mt-sm-0\"\r\n           href=\"https://www.google.com/design/spec/style/color.html#color-color-palette\"\r\n           target=\"_blank\">\r\n            <mat-icon>link</mat-icon>\r\n            <span>Reference</span>\r\n        </a>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group class=\"color-tabs\" dynamicHeight=\"true\" (selectedTabChange)=\"selectColor($event)\">\r\n\r\n            <mat-tab *ngFor=\"let color of ['primary', 'accent', 'warn']\" label=\"{{color}}\">\r\n                <ng-template mat-tab-label>\r\n                    <span class=\"text-capitalize\">{{color}}</span>\r\n                </ng-template>\r\n            </mat-tab>\r\n\r\n            <mat-tab *ngFor=\"let color of (colors | keys)\" label=\"{{color.key}}\">\r\n                <ng-template mat-tab-label>\r\n                    <span class=\"text-capitalize\">{{color.key}}</span>\r\n                </ng-template>\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n        <div class=\"color-tabs-content p-24\" fxLayout=\"column\">\r\n\r\n            <div class=\"h3 pb-16\">Fuse has classes for every single color from\r\n                <a href=\"https://www.google.com/design/spec/style/color.html#color-color-palette\"\r\n                   target=\"_blank\">Material\r\n                    Design Color Palette</a> for your convenient. You can use them with pretty much every\r\n                element.\r\n            </div>\r\n\r\n            <div class=\"color-header colored-bg p-8\"\r\n                 [ngClass]=\"'mat-'+selectedColor+'-bg'\"\r\n                 fxLayout=\"column\">\r\n                <div class=\"p-8\">\r\n                    <h3 class=\"text-capitalize\">{{selectedColor}}</h3>\r\n                </div>\r\n                <div class=\"p-8\" fxLayout=\"row\">\r\n\r\n                    <div fxFlex=\"30\" fxLayoutAlign=\"start center\">500</div>\r\n\r\n                    <div class=\"colored-bg p-8\" [ngClass]=\"'mat-'+selectedColor+'-bg'\" fxFlex=\"30\">\r\n                        <div class=\"pb-4\">.{{'mat-'+selectedColor+'-bg'}}</div>\r\n                        <div class=\"secondary-text pb-4\">.secondary-text</div>\r\n                        <div class=\"hint-text pb-4\">.hint-text, .disabled-text</div>\r\n                        <div class=\"divider\">.divider</div>\r\n                    </div>\r\n\r\n                    <div fxFlex=\"30\">\r\n                    </div>\r\n\r\n                    <div fxFlex=\"128px\">\r\n                        {{selectedColorDefaultValue}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"color\" fxLayout=\"column\" fxFlex=\"1 0 auto\" *ngIf=\"selectedColor != 'black' && selectedColor != 'white'\">\r\n\r\n                <div class=\"colored-bg p-8\"\r\n                     *ngFor=\"let hue of ['50','100','200','300','400','500','600','700','800','900','A100','A200','A400','A700']\"\r\n                     fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayout.sm=\"column\"\r\n                     [ngClass]=\"selectedColor+'-'+hue+'-bg'\">\r\n\r\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">{{hue}}</div>\r\n\r\n                    <div class=\"colored-bg p-8\" [ngClass]=\"'mat-'+selectedColor+'-'+hue+'-bg'\" fxFlex=\"30\">\r\n                        <div class=\"pb-4\">.{{'mat-'+selectedColor+'-'+hue+'-bg'}}</div>\r\n                        <div class=\"secondary-text pb-4\">.secondary-text</div>\r\n                        <div class=\"hint-text pb-4\">.hint-text, .disabled-text</div>\r\n                        <div class=\"divider\">.divider</div>\r\n                    </div>\r\n\r\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">.{{selectedColor+'-'+hue+'-bg'}}</div>\r\n\r\n                    <div class=\"fg-box mat-elevation-z2 p-8\"\r\n                         [ngClass]=\"selectedColor+'-'+hue+'-fg'\" fxFlex=\"128px\" fxLayoutAlign=\"center center\">\r\n                        .{{selectedColor+'-'+hue+'-fg'}}\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- / CONTENT -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/colors/colors.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .content .color-tabs-content .color .fg-box {\n  background-color: white; }\n\n:host .content .color-tabs-content .colored-bg {\n  -webkit-transition: background-color 400ms ease;\n  transition: background-color 400ms ease; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/colors/colors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseColorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_mat_colors__ = __webpack_require__("./src/@fuse/mat-colors/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseColorsComponent = /** @class */ (function () {
    function FuseColorsComponent() {
        this.colors = __WEBPACK_IMPORTED_MODULE_1__fuse_mat_colors__["a" /* MatColors */].all;
        this.updateSelectedColor('primary');
    }
    FuseColorsComponent.prototype.selectColor = function (selected) {
        this.updateSelectedColor(selected.tab.textLabel);
    };
    FuseColorsComponent.prototype.updateSelectedColor = function (colorName) {
        this.selectedColor = colorName;
        this.selectedColorDefaultValue = __WEBPACK_IMPORTED_MODULE_1__fuse_mat_colors__["a" /* MatColors */].getColor(this.selectedColor)[500];
    };
    FuseColorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-colors',
            template: __webpack_require__("./src/app/main/content/ui/colors/colors.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/colors/colors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseColorsComponent);
    return FuseColorsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/colors/colors.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIColorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components_demo_demo_module__ = __webpack_require__("./src/@fuse/components/demo/demo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__colors_component__ = __webpack_require__("./src/app/main/content/ui/colors/colors.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'colors',
        component: __WEBPACK_IMPORTED_MODULE_5__colors_component__["a" /* FuseColorsComponent */]
    }
];
var UIColorsModule = /** @class */ (function () {
    function UIColorsModule() {
    }
    UIColorsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__colors_component__["a" /* FuseColorsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["O" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components_demo_demo_module__["a" /* FuseDemoModule */]
            ]
        })
    ], UIColorsModule);
    return UIColorsModule;
}());



/***/ }),

/***/ "./src/app/main/content/ui/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"forms\" class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Forms</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <div class=\"h1\">\r\n            Reactive Forms\r\n        </div>\r\n\r\n        <p class=\"pt-16 pb-32\">\r\n            Angular reactive forms facilitate a reactive style of programming that favors explicit management of the\r\n            data flowing between a non-UI data model (typically retrieved from a server) and a UI-oriented form model\r\n            that retains the states and values of the HTML controls on screen. Reactive forms offer the ease of using\r\n            reactive patterns, testing, and validation.\r\n        </p>\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayout.gt-md=\"row\">\r\n\r\n            <!-- REACTIVE FORM EXAMPLE -->\r\n\r\n            <form class=\"mat-white-bg mat-elevation-z4 p-24 mr-24 mb-24\" fxLayout=\"column\" fxLayoutAlign=\"start\"\r\n                  fxFlex=\"1 0 auto\" name=\"form\" [formGroup]=\"form\">\r\n\r\n                <div class=\"h2 mb-24\">Reactive Form Example</div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field fxFlex=\"100\">\r\n                        <input matInput placeholder=\"Company (disabled)\" formControlName=\"company\">\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field fxFlex=\"50\">\r\n                        <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\r\n                        <mat-error *ngIf=\"formErrors.firstName.required\">\r\n                            First Name is required!\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field fxFlex=\"50\">\r\n                        <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\r\n                        <mat-error *ngIf=\"formErrors.lastName.required\">\r\n                            Last Name is required!\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field fxFlex=\"100\">\r\n                        <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\r\n                            1600 Amphitheatre Pkwy\r\n                        </textarea>\r\n                        <mat-error *ngIf=\"formErrors.address.required\">\r\n                            Address is required!\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field fxFlex=\"100\">\r\n                        <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\r\n                        <mat-error *ngIf=\"formErrors.address2.required\">\r\n                            Address 2 is required!\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field fxFlex=\"33\">\r\n                        <input matInput placeholder=\"City\" formControlName=\"city\" required>\r\n                        <mat-error *ngIf=\"formErrors.city.required\">\r\n                            City is required!\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field fxFlex=\"34\">\r\n                        <input matInput placeholder=\"State\" formControlName=\"state\" required>\r\n                        <mat-error *ngIf=\"formErrors.state.required\">\r\n                            State is required!\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field fxFlex=\"33\">\r\n                        <input matInput #postalCode placeholder=\"Postal Code\" value=\"94043\"\r\n                               formControlName=\"postalCode\" required>\r\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n                        <mat-error *ngIf=\"formErrors.postalCode.maxlength\">\r\n                            Postal Code needs to be max. {{formErrors.postalCode.maxlength.requiredLength}} characters\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formErrors.postalCode.required\">\r\n                            Postal Code is required!\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field fxFlex=\"100\">\r\n                        <mat-select placeholder=\"Country\" formControlName=\"country\" required>\r\n                            <mat-option [value]=\"'United States of America'\">\r\n                                United States of America\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'United Kingdom'\">\r\n                                United Kingdom\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'Russia'\">\r\n                                Russia\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'China'\">\r\n                                China\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'Japan'\">\r\n                                Japan\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'Turkey'\">\r\n                                Turkey\r\n                            </mat-option>\r\n                        </mat-select>\r\n                        <mat-error *ngIf=\"formErrors.country.required\">\r\n                            Country is required!\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n            </form>\r\n\r\n            <!-- / REACTIVE FORM EXAMPLE -->\r\n\r\n            <div class=\"form-errors-model mat-white-bg p-24 mat-elevation-z4\">\r\n\r\n                <div class=\"h2 mb-24\">Reactive Form Errors Model</div>\r\n\r\n                <pre><code>{{formErrors | json}}</code></pre>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"h1 pt-32\">\r\n            Horizontal Stepper\r\n        </div>\r\n\r\n        <p class=\"pb-32\">\r\n            Angular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\r\n            <code>mat-horizontal-stepper</code> selector can be used to create a horizontal stepper.\r\n        </p>\r\n\r\n        <div class=\"horizontal-stepper-wrapper\">\r\n\r\n            <!-- HORIZONTAL STEPPER EXAMPLE -->\r\n            <mat-horizontal-stepper class=\"mat-elevation-z4\" [linear]=\"true\">\r\n\r\n                <mat-step [stepControl]=\"horizontalStepperStep1\">\r\n\r\n                    <form [formGroup]=\"horizontalStepperStep1\">\r\n\r\n                        <ng-template matStepLabel>Fill out your name</ng-template>\r\n\r\n                        <div>\r\n\r\n                            <mat-form-field fxFlex=\"50\">\r\n                                <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\r\n                                <mat-error *ngIf=\"horizontalStepperStep1Errors.firstName.required\">\r\n                                    First Name is required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field fxFlex=\"50\">\r\n                                <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\r\n                                <mat-error *ngIf=\"formErrors.lastName.required\">\r\n                                    Last Name is required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step [stepControl]=\"horizontalStepperStep2\">\r\n\r\n                    <form [formGroup]=\"horizontalStepperStep2\">\r\n\r\n                        <ng-template matStepLabel>Fill out your address</ng-template>\r\n\r\n                        <div>\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\r\n                                    1600 Amphitheatre Pkwy\r\n                                </textarea>\r\n                                <mat-error *ngIf=\"horizontalStepperStep2Errors.address.required\">\r\n                                    Address is required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                                Previous\r\n                            </button>\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step [stepControl]=\"horizontalStepperStep3\">\r\n\r\n                    <form [formGroup]=\"horizontalStepperStep3\">\r\n\r\n                        <ng-template matStepLabel>Fill out your address</ng-template>\r\n\r\n                        <div>\r\n\r\n                            <mat-form-field fxFlex=\"33\">\r\n                                <input matInput placeholder=\"City\" formControlName=\"city\" required>\r\n                                <mat-error *ngIf=\"horizontalStepperStep3Errors.city.required\">\r\n                                    City is required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field fxFlex=\"34\">\r\n                                <input matInput placeholder=\"State\" formControlName=\"state\" required>\r\n                                <mat-error *ngIf=\"horizontalStepperStep3Errors.state.required\">\r\n                                    State is required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field fxFlex=\"33\">\r\n                                <input matInput #postalCode placeholder=\"Postal Code\" formControlName=\"postalCode\"\r\n                                       required>\r\n                                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n                                <mat-error *ngIf=\"horizontalStepperStep3Errors.postalCode.maxlength\">\r\n                                    Postal Code needs to be max.\r\n                                    {{horizontalStepperStep3Errors.postalCode.maxlength.requiredLength}} characters\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"horizontalStepperStep3Errors.postalCode.required\">\r\n                                    Postal Code is required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                                Previous\r\n                            </button>\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step>\r\n\r\n                    <ng-template matStepLabel>Done</ng-template>\r\n\r\n                    <div class=\"h2 m-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        Thank your for filling out our form.\r\n                    </div>\r\n\r\n                    <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                            Previous\r\n                        </button>\r\n                        <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"finishHorizontalStepper()\">\r\n                            Finish\r\n                        </button>\r\n                    </div>\r\n\r\n                </mat-step>\r\n\r\n            </mat-horizontal-stepper>\r\n            <!-- / HORIZONTAL STEPPER EXAMPLE -->\r\n\r\n        </div>\r\n\r\n        <div class=\"h1 pt-48\">\r\n            Vertical Stepper\r\n        </div>\r\n\r\n        <p class=\"pb-32\">\r\n            Angular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\r\n            <code>mat-vertical-stepper</code> can be used to create a vertical stepper.\r\n        </p>\r\n\r\n        <div class=\"vertical-stepper-wrapper\">\r\n\r\n            <!-- VERTICAL STEPPER EXAMPLE -->\r\n            <mat-vertical-stepper class=\"mat-elevation-z4\" [linear]=\"true\">\r\n\r\n                <mat-step [stepControl]=\"verticalStepperStep1\">\r\n\r\n                    <form [formGroup]=\"verticalStepperStep1\">\r\n\r\n                        <ng-template matStepLabel>Fill out your name</ng-template>\r\n\r\n                        <div>\r\n\r\n                            <mat-form-field fxFlex=\"50\">\r\n                                <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\r\n                                <mat-error *ngIf=\"verticalStepperStep1Errors.firstName.required\">\r\n                                    First Name is required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field fxFlex=\"50\">\r\n                                <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\r\n                                <mat-error *ngIf=\"formErrors.lastName.required\">\r\n                                    Last Name is required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step [stepControl]=\"verticalStepperStep2\">\r\n\r\n                    <form [formGroup]=\"verticalStepperStep2\">\r\n\r\n                        <ng-template matStepLabel>Fill out your address</ng-template>\r\n\r\n                        <div>\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\r\n                                    1600 Amphitheatre Pkwy\r\n                                </textarea>\r\n                                <mat-error *ngIf=\"verticalStepperStep2Errors.address.required\">\r\n                                    Address is required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                                Previous\r\n                            </button>\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step [stepControl]=\"verticalStepperStep3\">\r\n\r\n                    <form [formGroup]=\"verticalStepperStep3\">\r\n\r\n                        <ng-template matStepLabel>Fill out your address</ng-template>\r\n\r\n                        <div>\r\n\r\n                            <mat-form-field fxFlex=\"33\">\r\n                                <input matInput placeholder=\"City\" formControlName=\"city\" required>\r\n                                <mat-error *ngIf=\"verticalStepperStep3Errors.city.required\">\r\n                                    City is required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field fxFlex=\"34\">\r\n                                <input matInput placeholder=\"State\" formControlName=\"state\" required>\r\n                                <mat-error *ngIf=\"verticalStepperStep3Errors.state.required\">\r\n                                    State is required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field fxFlex=\"33\">\r\n                                <input matInput #postalCode placeholder=\"Postal Code\" formControlName=\"postalCode\"\r\n                                       required>\r\n                                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n                                <mat-error *ngIf=\"verticalStepperStep3Errors.postalCode.maxlength\">\r\n                                    Postal Code needs to be max.\r\n                                    {{verticalStepperStep3Errors.postalCode.maxlength.requiredLength}} characters\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"verticalStepperStep3Errors.postalCode.required\">\r\n                                    Postal Code is required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                                Previous\r\n                            </button>\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step>\r\n\r\n                    <ng-template matStepLabel>Done</ng-template>\r\n\r\n                    <div class=\"h2 m-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        Thank your for filling out our form.\r\n                    </div>\r\n\r\n                    <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                            Previous\r\n                        </button>\r\n                        <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"finishVerticalStepper()\">\r\n                            Finish\r\n                        </button>\r\n                    </div>\r\n\r\n                </mat-step>\r\n\r\n            </mat-vertical-stepper>\r\n            <!-- / VERTICAL STEPPER EXAMPLE -->\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/forms/forms.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .content form {\n  width: 100%;\n  max-width: 800px !important; }\n\n:host .content .form-errors-model {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n:host .content .form-errors-model code {\n    background: none !important; }\n\n:host .content .horizontal-stepper-wrapper,\n:host .content .vertical-stepper-wrapper {\n  max-width: 800px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseFormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseFormsComponent = /** @class */ (function () {
    function FuseFormsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        // Reactive form errors
        this.formErrors = {
            company: {},
            firstName: {},
            lastName: {},
            address: {},
            address2: {},
            city: {},
            state: {},
            postalCode: {},
            country: {}
        };
        // Horizontal Stepper form error
        this.horizontalStepperStep1Errors = {
            firstName: {},
            lastName: {}
        };
        this.horizontalStepperStep2Errors = {
            address: {}
        };
        this.horizontalStepperStep3Errors = {
            city: {},
            state: {},
            postalCode: {}
        };
        // Vertical Stepper form error
        this.verticalStepperStep1Errors = {
            firstName: {},
            lastName: {}
        };
        this.verticalStepperStep2Errors = {
            address: {}
        };
        this.verticalStepperStep3Errors = {
            city: {},
            state: {},
            postalCode: {}
        };
    }
    FuseFormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Reactive Form
        this.form = this.formBuilder.group({
            company: [
                {
                    value: 'Google',
                    disabled: true
                }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required
            ],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            address2: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            postalCode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(5)]],
            country: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.form.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        // Horizontal Stepper form steps
        this.horizontalStepperStep1 = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.horizontalStepperStep2 = this.formBuilder.group({
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.horizontalStepperStep3 = this.formBuilder.group({
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            postalCode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(5)]]
        });
        this.horizontalStepperStep1.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        this.horizontalStepperStep2.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        this.horizontalStepperStep3.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        // Vertical Stepper form stepper
        this.verticalStepperStep1 = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.verticalStepperStep2 = this.formBuilder.group({
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.verticalStepperStep3 = this.formBuilder.group({
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            postalCode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(5)]]
        });
        this.verticalStepperStep1.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        this.verticalStepperStep2.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        this.verticalStepperStep3.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
    };
    FuseFormsComponent.prototype.onFormValuesChanged = function () {
        for (var field in this.formErrors) {
            if (!this.formErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.formErrors[field] = {};
            // Get the control
            var control = this.form.get(field);
            if (control && control.dirty && !control.valid) {
                this.formErrors[field] = control.errors;
            }
        }
    };
    FuseFormsComponent.prototype.finishHorizontalStepper = function () {
        alert('You have finished the horizontal stepper!');
    };
    FuseFormsComponent.prototype.finishVerticalStepper = function () {
        alert('You have finished the vertical stepper!');
    };
    FuseFormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-forms',
            template: __webpack_require__("./src/app/main/content/ui/forms/forms.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/forms/forms.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseFormsComponent);
    return FuseFormsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/forms/forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIFormsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_component__ = __webpack_require__("./src/app/main/content/ui/forms/forms.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'forms',
        component: __WEBPACK_IMPORTED_MODULE_4__forms_component__["a" /* FuseFormsComponent */]
    }
];
var UIFormsModule = /** @class */ (function () {
    function UIFormsModule() {
    }
    UIFormsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__forms_component__["a" /* FuseFormsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["L" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
            ]
        })
    ], UIFormsModule);
    return UIFormsModule;
}());



/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/helper-classes.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes\" class=\"page-layout simple tabbed\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Helper Classes</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group dynamicHeight=\"true\">\r\n\r\n            <mat-tab label=\"Padding & Margin Helpers\">\r\n\r\n                <fuse-helper-classes-padding-margin></fuse-helper-classes-padding-margin>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Width & Height Helpers\">\r\n\r\n                <fuse-helper-classes-width-height></fuse-helper-classes-width-height>\r\n\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/helper-classes.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/helper-classes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseHelperClassesComponent; });
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

var FuseHelperClassesComponent = /** @class */ (function () {
    function FuseHelperClassesComponent() {
    }
    FuseHelperClassesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-helper-classes',
            template: __webpack_require__("./src/app/main/content/ui/helper-classes/helper-classes.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/helper-classes/helper-classes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseHelperClassesComponent);
    return FuseHelperClassesComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/helper-classes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIHelperClassesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_classes_component__ = __webpack_require__("./src/app/main/content/ui/helper-classes/helper-classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_padding_margin_padding_margin_component__ = __webpack_require__("./src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_width_height_width_height_component__ = __webpack_require__("./src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'helper-classes',
        component: __WEBPACK_IMPORTED_MODULE_5__helper_classes_component__["a" /* FuseHelperClassesComponent */]
    }
];
var UIHelperClassesModule = /** @class */ (function () {
    function UIHelperClassesModule() {
    }
    UIHelperClassesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__helper_classes_component__["a" /* FuseHelperClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tabs_padding_margin_padding_margin_component__["a" /* FuseHelperClassesPaddingMarginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tabs_width_height_width_height_component__["a" /* FuseHelperClassesWidthHeightComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["O" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["c" /* FuseHighlightModule */],
            ],
        })
    ], UIHelperClassesModule);
    return UIHelperClassesModule;
}());



/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes-padding-margin\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Padding Helpers</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>p-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"p-0\">No padding</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>p-4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"p-4\">4px padding</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>p-12</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"p-12\">12px padding</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-20\">Direction Specific Padding Helpers</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>pt-0</span>\r\n                <span>pr-0</span>\r\n                <span>pb-0</span>\r\n                <span>pl-0</span>\r\n                <span>px-0</span>\r\n                <span>py-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"pt-0\">0 padding from top</span>\r\n                    <span class=\"pr-0\">0 padding from right</span>\r\n                    <span class=\"pb-0\">0 padding from bottom</span>\r\n                    <span class=\"pl-0\">0 padding from left</span>\r\n                    <span class=\"px-0\">0 padding from left and right</span>\r\n                    <span class=\"py-0\">0 padding from top and bottom</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>pt-4</span>\r\n                <span>pr-4</span>\r\n                <span>pb-4</span>\r\n                <span>pl-4</span>\r\n                <span>px-4</span>\r\n                <span>py-4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"pt-4\">4px padding from top</span>\r\n                    <span class=\"pr-4\">4px padding from right</span>\r\n                    <span class=\"pb-4\">4px padding from bottom</span>\r\n                    <span class=\"pl-4\">4px padding from left</span>\r\n                    <span class=\"px-4\">4px padding from left and right</span>\r\n                    <span class=\"py-4\">4px padding from top and bottom</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-20\">Margin Helpers</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>m-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"m-0\">No margin</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>m-4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"m-4\">4px margin</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>m-12</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"m-12\">12px margin</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-20\">Direction Specific Margin Helpers</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>mt-0</span>\r\n                <span>mr-0</span>\r\n                <span>mb-0</span>\r\n                <span>ml-0</span>\r\n                <span>mx-0</span>\r\n                <span>my-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mt-0\">0 margin from top</span>\r\n                    <span class=\"mr-0\">0 margin from right</span>\r\n                    <span class=\"mb-0\">0 margin from bottom</span>\r\n                    <span class=\"ml-0\">0 margin from left</span>\r\n                    <span class=\"mx-0\">0 margin from left and right</span>\r\n                    <span class=\"my-0\">0 margin from top and bottom</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>mt-4</span>\r\n                <span>mr-4</span>\r\n                <span>mb-4</span>\r\n                <span>ml-4</span>\r\n                <span>mx-4</span>\r\n                <span>my-4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mt-4\">4px margin from top</span>\r\n                    <span class=\"mr-4\">4px margin from right</span>\r\n                    <span class=\"mb-4\">4px margin from bottom</span>\r\n                    <span class=\"ml-4\">4px margin from left</span>\r\n                    <span class=\"mx-4\">4px margin from left and right</span>\r\n                    <span class=\"my-4\">4px margin from top and bottom</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss":
/***/ (function(module, exports) {

module.exports = ":host #helper-classes-padding-margin .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-padding-margin .source-code code {\n    background: none !important; }\n  :host #helper-classes-padding-margin .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-padding-margin .preview:last-child {\n    margin-bottom: 0; }\n  :host #helper-classes-padding-margin .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseHelperClassesPaddingMarginComponent; });
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

var FuseHelperClassesPaddingMarginComponent = /** @class */ (function () {
    function FuseHelperClassesPaddingMarginComponent() {
    }
    FuseHelperClassesPaddingMarginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-helper-classes-padding-margin',
            template: __webpack_require__("./src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseHelperClassesPaddingMarginComponent);
    return FuseHelperClassesPaddingMarginComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes-width-height\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Width Helpers</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>w-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"w-0\">0px width</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:512, Multiples of 4</div>\r\n                <span>w-100</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"w-100\">100px width</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\r\n                <span>w-25-p</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"w-25-p\">25% width</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\r\n                <span>w-100-p</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"w-100-p\">100% width</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-20\">Height Helpers</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>h-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"h-0\">0px height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:512, Multiples of 4</div>\r\n                <span>h-100</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"h-100\">100px height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\r\n                <span>h-25-p</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"h-25-p\">25% height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\r\n                <span>h-100-p</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"h-100-p\">100% height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.scss":
/***/ (function(module, exports) {

module.exports = ":host #helper-classes-width-height .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-width-height .source-code code {\n    background: none !important; }\n  :host #helper-classes-width-height .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-width-height .preview:last-child {\n    margin-bottom: 0; }\n  :host #helper-classes-width-height .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseHelperClassesWidthHeightComponent; });
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

var FuseHelperClassesWidthHeightComponent = /** @class */ (function () {
    function FuseHelperClassesWidthHeightComponent() {
    }
    FuseHelperClassesWidthHeightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-helper-classes-width-height',
            template: __webpack_require__("./src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseHelperClassesWidthHeightComponent);
    return FuseHelperClassesWidthHeightComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes\" class=\"page-layout simple tabbed\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Icons</div>\r\n        </div>\r\n\r\n        <a mat-raised-button class=\"reference-button mat-white-bg mt-16 mt-sm-0\" href=\"https://material.angular.io\" target=\"_blank\">\r\n            <mat-icon>link</mat-icon>\r\n            <span>Reference</span>\r\n        </a>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <mat-spinner *ngIf=\"loading\" color=\"accent\"></mat-spinner>\r\n        </div>\r\n\r\n        <div *ngIf=\"!loading\">\r\n\r\n            <div fxLayout=\"column\">\r\n\r\n                <div class=\"m-32\">\r\n                    <mat-form-field class=\"w-100-p\">\r\n                        <input matInput placeholder=\"Search an icon...\" (input)=\"filterIcons($event)\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row wrap\">\r\n\r\n                    <div class=\"icon-holder m-16\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n                         *ngFor=\"let icon of filteredIcons\">\r\n                        <mat-icon class=\"s-48\">{{icon}}</mat-icon>\r\n                        <div class=\"icon-name secondary-text mt-8\">{{icon}}</div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/icons/icons.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1200px; }\n  :host .content .icon-holder {\n    width: 112px;\n    height: 120px; }\n  :host .content .icon-holder .icon-name {\n      font-size: 12px;\n      word-wrap: break-word;\n      width: 100px;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseIconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseIconsComponent = /** @class */ (function () {
    function FuseIconsComponent(http) {
        this.http = http;
        this.loading = true;
    }
    FuseIconsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/icons')
            .subscribe(function (icons) {
            _this.icons = icons;
            _this.filteredIcons = _this.icons;
            _this.loading = false;
        });
    };
    FuseIconsComponent.prototype.filterIcons = function (event) {
        var value = event.target.value;
        this.filteredIcons = this.icons.filter(function (icon) {
            return icon.includes(value);
        });
    };
    FuseIconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-icons',
            template: __webpack_require__("./src/app/main/content/ui/icons/icons.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/icons/icons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FuseIconsComponent);
    return FuseIconsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/icons/icons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIIconsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_component__ = __webpack_require__("./src/app/main/content/ui/icons/icons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'icons',
        component: __WEBPACK_IMPORTED_MODULE_4__icons_component__["a" /* FuseIconsComponent */]
    }
];
var UIIconsModule = /** @class */ (function () {
    function UIIconsModule() {
    }
    UIIconsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__icons_component__["a" /* FuseIconsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], UIIconsModule);
    return UIIconsModule;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/blank/blank.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout blank p-24\" fusePerfectScrollbar>\r\n\r\n    <h2>Blank Page</h2>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/blank/blank.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/blank/blank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseBlankComponent; });
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

var FuseBlankComponent = /** @class */ (function () {
    function FuseBlankComponent() {
    }
    FuseBlankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-blank',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/blank/blank.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/blank/blank.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseBlankComponent);
    return FuseBlankComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth single-scroll\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header white-fg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <h2>Fullwidth with page scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card mat-white-bg\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n                <span>Content toolbar</span>\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\">\r\n\r\n                <fuse-demo-content></fuse-demo-content>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedFullWidth2Component; });
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

var FuseCardedFullWidth2Component = /** @class */ (function () {
    function FuseCardedFullWidth2Component() {
    }
    FuseCardedFullWidth2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-fullwidth-2',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedFullWidth2Component);
    return FuseCardedFullWidth2Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header white-fg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <h2>Fullwidth with content scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card mat-white-bg\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n                <span>Content toolbar</span>\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-content></fuse-demo-content>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedFullWidthComponent; });
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

var FuseCardedFullWidthComponent = /** @class */ (function () {
    function FuseCardedFullWidthComponent() {
    }
    FuseCardedFullWidthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-fullwidth',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedFullWidthComponent);
    return FuseCardedFullWidthComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidenav tabbed single-scroll\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <!-- SIDENAV HEADER -->\r\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\r\n                <h2>Sidenav header</h2>\r\n            </div>\r\n            <!-- / SIDENAV HEADER -->\r\n\r\n            <!-- SIDENAV CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n            </div>\r\n            <!-- / SIDENAV CONTENT -->\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\">\r\n\r\n            <!-- CONTENT HEADER -->\r\n            <div class=\"header white-fg p-24\">\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                    <button mat-button class=\"mat-icon-button sidenav-toggle mr-8\"\r\n                            fuseMatSidenavToggler=\"carded-left-sidenav\" fxHide.gt-md>\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n\r\n                    <h2>Left sidenav with tabs and page scroll</h2>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <!-- / CONTENT HEADER -->\r\n\r\n            <!-- CONTENT CARD -->\r\n            <div class=\"content-card mat-white-bg\">\r\n\r\n                <!-- CONTENT -->\r\n                <div class=\"content\">\r\n\r\n                    <mat-tab-group>\r\n\r\n                        <mat-tab label=\"Tab 1\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 2\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 3\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 4\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 5\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 6\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 7\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 8\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 9\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 10\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                    </mat-tab-group>\r\n\r\n                </div>\r\n                <!-- / CONTENT -->\r\n\r\n            </div>\r\n            <!-- / CONTENT CARD -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedLeftSidenav2TabbedComponent; });
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

var FuseCardedLeftSidenav2TabbedComponent = /** @class */ (function () {
    function FuseCardedLeftSidenav2TabbedComponent() {
    }
    FuseCardedLeftSidenav2TabbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-left-sidenav-2-tabbed',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedLeftSidenav2TabbedComponent);
    return FuseCardedLeftSidenav2TabbedComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidenav single-scroll\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <!-- SIDENAV HEADER -->\r\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\r\n                <h2>Sidenav header</h2>\r\n            </div>\r\n            <!-- / SIDENAV HEADER -->\r\n\r\n            <!-- SIDENAV CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n            </div>\r\n            <!-- / SIDENAV CONTENT -->\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\">\r\n\r\n            <!-- CONTENT HEADER -->\r\n            <div class=\"header white-fg p-24\">\r\n                <h2>Left sidenav with page scroll</h2>\r\n            </div>\r\n            <!-- / CONTENT HEADER -->\r\n\r\n            <!-- CONTENT CARD -->\r\n            <div class=\"content-card mat-white-bg\">\r\n\r\n                <!-- CONTENT TOOLBAR -->\r\n                <div class=\"toolbar px-24 py-8\">\r\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\r\n                            fuseMatSidenavToggler=\"carded-left-sidenav\"\r\n                            fxHide.gt-md>\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n\r\n                    <span>Content toolbar</span>\r\n                </div>\r\n                <!-- / CONTENT TOOLBAR -->\r\n\r\n                <!-- CONTENT -->\r\n                <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                    <fuse-demo-content></fuse-demo-content>\r\n\r\n                </div>\r\n                <!-- / CONTENT -->\r\n\r\n            </div>\r\n            <!-- / CONTENT CARD -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedLeftSidenav2Component; });
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

var FuseCardedLeftSidenav2Component = /** @class */ (function () {
    function FuseCardedLeftSidenav2Component() {
    }
    FuseCardedLeftSidenav2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-left-sidenav-2',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedLeftSidenav2Component);
    return FuseCardedLeftSidenav2Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidenav tabbed\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <!-- SIDENAV HEADER -->\r\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\r\n                <h2>Sidenav header</h2>\r\n            </div>\r\n            <!-- / SIDENAV HEADER -->\r\n\r\n            <!-- SIDENAV CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n            </div>\r\n            <!-- / SIDENAV CONTENT -->\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\">\r\n\r\n            <!-- CONTENT HEADER -->\r\n            <div class=\"header white-fg p-24\">\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                    <button mat-button class=\"mat-icon-button sidenav-toggle mr-8\"\r\n                            fuseMatSidenavToggler=\"carded-left-sidenav\" fxHide.gt-md>\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n\r\n                    <h2>Left sidenav with tabs and content scroll</h2>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <!-- / CONTENT HEADER -->\r\n\r\n            <!-- CONTENT CARD -->\r\n            <div class=\"content-card mat-white-bg\">\r\n\r\n                <!-- CONTENT -->\r\n                <div class=\"content\">\r\n\r\n                    <mat-tab-group>\r\n\r\n                        <mat-tab label=\"Tab 1\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 2\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 3\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 4\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 5\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 6\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 7\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 8\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 9\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 10\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                    </mat-tab-group>\r\n\r\n                </div>\r\n                <!-- / CONTENT -->\r\n\r\n            </div>\r\n            <!-- / CONTENT CARD -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedLeftSidenavTabbedComponent; });
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

var FuseCardedLeftSidenavTabbedComponent = /** @class */ (function () {
    function FuseCardedLeftSidenavTabbedComponent() {
    }
    FuseCardedLeftSidenavTabbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-left-sidenav-tabbed',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedLeftSidenavTabbedComponent);
    return FuseCardedLeftSidenavTabbedComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidenav\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <!-- SIDENAV HEADER -->\r\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\r\n                <h2>Sidenav header</h2>\r\n            </div>\r\n            <!-- / SIDENAV HEADER -->\r\n\r\n            <!-- SIDENAV CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n            </div>\r\n            <!-- / SIDENAV CONTENT -->\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\">\r\n\r\n            <!-- CONTENT HEADER -->\r\n            <div class=\"header white-fg p-24\">\r\n                <h2>Left sidenav with content scroll</h2>\r\n            </div>\r\n            <!-- / CONTENT HEADER -->\r\n\r\n            <!-- CONTENT CARD -->\r\n            <div class=\"content-card mat-white-bg\">\r\n\r\n                <!-- CONTENT TOOLBAR -->\r\n                <div class=\"toolbar px-24 py-8\">\r\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\r\n                            fuseMatSidenavToggler=\"carded-left-sidenav\"\r\n                            fxHide.gt-md>\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n\r\n                    <span>Content toolbar</span>\r\n                </div>\r\n                <!-- / CONTENT TOOLBAR -->\r\n\r\n                <!-- CONTENT -->\r\n                <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                    <fuse-demo-content></fuse-demo-content>\r\n\r\n                </div>\r\n                <!-- / CONTENT -->\r\n\r\n            </div>\r\n            <!-- / CONTENT CARD -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedLeftSidenavComponent; });
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

var FuseCardedLeftSidenavComponent = /** @class */ (function () {
    function FuseCardedLeftSidenavComponent() {
    }
    FuseCardedLeftSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-left-sidenav',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedLeftSidenavComponent);
    return FuseCardedLeftSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidenav tabbed single-scroll\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\">\r\n\r\n            <!-- CONTENT HEADER -->\r\n            <div class=\"header white-fg p-24\">\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                    <button mat-button class=\"mat-icon-button sidenav-toggle mr-8\"\r\n                            fuseMatSidenavToggler=\"carded-left-sidenav\" fxHide.gt-md>\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n\r\n                    <h2>Right sidenav with tabs and page scroll</h2>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <!-- / CONTENT HEADER -->\r\n\r\n            <!-- CONTENT CARD -->\r\n            <div class=\"content-card mat-white-bg\">\r\n\r\n                <!-- CONTENT -->\r\n                <div class=\"content\">\r\n\r\n                    <mat-tab-group>\r\n\r\n                        <mat-tab label=\"Tab 1\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 2\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 3\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 4\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 5\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 6\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 7\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 8\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 9\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 10\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                    </mat-tab-group>\r\n\r\n                </div>\r\n                <!-- / CONTENT -->\r\n\r\n            </div>\r\n            <!-- / CONTENT CARD -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <!-- SIDENAV HEADER -->\r\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\r\n                <h2>Sidenav header</h2>\r\n            </div>\r\n            <!-- / SIDENAV HEADER -->\r\n\r\n            <!-- SIDENAV CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n            </div>\r\n            <!-- / SIDENAV CONTENT -->\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedRightSidenav2TabbedComponent; });
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

var FuseCardedRightSidenav2TabbedComponent = /** @class */ (function () {
    function FuseCardedRightSidenav2TabbedComponent() {
    }
    FuseCardedRightSidenav2TabbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-right-sidenav-2-tabbed',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedRightSidenav2TabbedComponent);
    return FuseCardedRightSidenav2TabbedComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidenav single-scroll\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\">\r\n\r\n            <!-- CONTENT HEADER -->\r\n            <div class=\"header white-fg p-24\">\r\n                <h2>Right sidenav with page scroll</h2>\r\n            </div>\r\n            <!-- / CONTENT HEADER -->\r\n\r\n            <!-- CONTENT CARD -->\r\n            <div class=\"content-card mat-white-bg\">\r\n\r\n                <!-- CONTENT TOOLBAR -->\r\n                <div class=\"toolbar px-24 py-8\">\r\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\r\n                            fuseMatSidenavToggler=\"carded-right-sidenav\"\r\n                            fxHide.gt-md>\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n\r\n                    <span>Content toolbar</span>\r\n                </div>\r\n                <!-- / CONTENT TOOLBAR -->\r\n\r\n                <!-- CONTENT -->\r\n                <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                    <fuse-demo-content></fuse-demo-content>\r\n\r\n                </div>\r\n                <!-- / CONTENT -->\r\n\r\n            </div>\r\n            <!-- / CONTENT CARD -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"carded-right-sidenav\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <!-- SIDENAV HEADER -->\r\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\r\n                <h2>Sidenav header</h2>\r\n            </div>\r\n            <!-- / SIDENAV HEADER -->\r\n\r\n            <!-- SIDENAV CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n            </div>\r\n            <!-- / SIDENAV CONTENT -->\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedRightSidenav2Component; });
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

var FuseCardedRightSidenav2Component = /** @class */ (function () {
    function FuseCardedRightSidenav2Component() {
    }
    FuseCardedRightSidenav2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-right-sidenav-2',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedRightSidenav2Component);
    return FuseCardedRightSidenav2Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidenav tabbed\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\">\r\n\r\n            <!-- CONTENT HEADER -->\r\n            <div class=\"header white-fg p-24\">\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                    <button mat-button class=\"mat-icon-button sidenav-toggle mr-8\"\r\n                            fuseMatSidenavToggler=\"carded-left-sidenav\" fxHide.gt-md>\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n\r\n                    <h2>Right sidenav with tabs and content scroll</h2>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <!-- / CONTENT HEADER -->\r\n\r\n            <!-- CONTENT CARD -->\r\n            <div class=\"content-card mat-white-bg\">\r\n\r\n                <!-- CONTENT -->\r\n                <div class=\"content\">\r\n\r\n                    <mat-tab-group>\r\n\r\n                        <mat-tab label=\"Tab 1\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 2\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 3\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 4\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 5\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 6\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 7\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 8\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 9\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Tab 10\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <!-- PUT YOUR TAB CONTENT HERE -->\r\n                                <fuse-demo-content></fuse-demo-content>\r\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                    </mat-tab-group>\r\n\r\n                </div>\r\n                <!-- / CONTENT -->\r\n\r\n            </div>\r\n            <!-- / CONTENT CARD -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <!-- SIDENAV HEADER -->\r\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\r\n                <h2>Sidenav header</h2>\r\n            </div>\r\n            <!-- / SIDENAV HEADER -->\r\n\r\n            <!-- SIDENAV CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n            </div>\r\n            <!-- / SIDENAV CONTENT -->\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedRightSidenavTabbedComponent; });
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

var FuseCardedRightSidenavTabbedComponent = /** @class */ (function () {
    function FuseCardedRightSidenavTabbedComponent() {
    }
    FuseCardedRightSidenavTabbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-right-sidenav-tabbed',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedRightSidenavTabbedComponent);
    return FuseCardedRightSidenavTabbedComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidenav\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\">\r\n\r\n            <!-- CONTENT HEADER -->\r\n            <div class=\"header white-fg p-24\">\r\n                <h2>Right sidenav with content scroll</h2>\r\n            </div>\r\n            <!-- / CONTENT HEADER -->\r\n\r\n            <!-- CONTENT CARD -->\r\n            <div class=\"content-card mat-white-bg\">\r\n\r\n                <!-- CONTENT TOOLBAR -->\r\n                <div class=\"toolbar px-24 py-8\">\r\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\r\n                            fuseMatSidenavToggler=\"carded-right-sidenav\"\r\n                            fxHide.gt-md>\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n\r\n                    <span>Content toolbar</span>\r\n                </div>\r\n                <!-- / CONTENT TOOLBAR -->\r\n\r\n                <!-- CONTENT -->\r\n                <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                    <fuse-demo-content></fuse-demo-content>\r\n\r\n                </div>\r\n                <!-- / CONTENT -->\r\n\r\n            </div>\r\n            <!-- / CONTENT CARD -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"carded-right-sidenav\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <!-- SIDENAV HEADER -->\r\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\r\n                <h2>Sidenav header</h2>\r\n            </div>\r\n            <!-- / SIDENAV HEADER -->\r\n\r\n            <!-- SIDENAV CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n            </div>\r\n            <!-- / SIDENAV CONTENT -->\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedRightSidenavComponent; });
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

var FuseCardedRightSidenavComponent = /** @class */ (function () {
    function FuseCardedRightSidenavComponent() {
    }
    FuseCardedRightSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-right-sidenav',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedRightSidenavComponent);
    return FuseCardedRightSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/page-layouts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIPageLayoutsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components_demo_demo_module__ = __webpack_require__("./src/@fuse/components/demo/demo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carded_fullwidth_fullwidth_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carded_fullwidth_2_fullwidth_2_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__carded_left_sidenav_left_sidenav_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carded_left_sidenav_tabbed_left_sidenav_tabbed_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__carded_left_sidenav_2_left_sidenav_2_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__carded_left_sidenav_2_tabbed_left_sidenav_2_tabbed_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__carded_right_sidenav_right_sidenav_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__carded_right_sidenav_tabbed_right_sidenav_tabbed_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__carded_right_sidenav_2_right_sidenav_2_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__carded_right_sidenav_2_tabbed_right_sidenav_2_tabbed_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__simple_fullwidth_fullwidth_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__simple_left_sidenav_left_sidenav_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__simple_left_sidenav_2_left_sidenav_2_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__simple_left_sidenav_3_left_sidenav_3_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__simple_right_sidenav_right_sidenav_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__simple_right_sidenav_2_right_sidenav_2_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__simple_right_sidenav_3_right_sidenav_3_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__simple_tabbed_tabbed_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/blank/blank.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var routes = [
    {
        path: 'page-layouts/carded/full-width',
        component: __WEBPACK_IMPORTED_MODULE_5__carded_fullwidth_fullwidth_component__["a" /* FuseCardedFullWidthComponent */]
    },
    {
        path: 'page-layouts/carded/full-width-2',
        component: __WEBPACK_IMPORTED_MODULE_6__carded_fullwidth_2_fullwidth_2_component__["a" /* FuseCardedFullWidth2Component */]
    },
    {
        path: 'page-layouts/carded/left-sidenav',
        component: __WEBPACK_IMPORTED_MODULE_7__carded_left_sidenav_left_sidenav_component__["a" /* FuseCardedLeftSidenavComponent */]
    },
    {
        path: 'page-layouts/carded/left-sidenav-tabbed',
        component: __WEBPACK_IMPORTED_MODULE_8__carded_left_sidenav_tabbed_left_sidenav_tabbed_component__["a" /* FuseCardedLeftSidenavTabbedComponent */]
    },
    {
        path: 'page-layouts/carded/left-sidenav-2',
        component: __WEBPACK_IMPORTED_MODULE_9__carded_left_sidenav_2_left_sidenav_2_component__["a" /* FuseCardedLeftSidenav2Component */]
    },
    {
        path: 'page-layouts/carded/left-sidenav-2-tabbed',
        component: __WEBPACK_IMPORTED_MODULE_10__carded_left_sidenav_2_tabbed_left_sidenav_2_tabbed_component__["a" /* FuseCardedLeftSidenav2TabbedComponent */]
    },
    {
        path: 'page-layouts/carded/right-sidenav',
        component: __WEBPACK_IMPORTED_MODULE_11__carded_right_sidenav_right_sidenav_component__["a" /* FuseCardedRightSidenavComponent */]
    },
    {
        path: 'page-layouts/carded/right-sidenav-tabbed',
        component: __WEBPACK_IMPORTED_MODULE_12__carded_right_sidenav_tabbed_right_sidenav_tabbed_component__["a" /* FuseCardedRightSidenavTabbedComponent */]
    },
    {
        path: 'page-layouts/carded/right-sidenav-2',
        component: __WEBPACK_IMPORTED_MODULE_13__carded_right_sidenav_2_right_sidenav_2_component__["a" /* FuseCardedRightSidenav2Component */]
    },
    {
        path: 'page-layouts/carded/right-sidenav-2-tabbed',
        component: __WEBPACK_IMPORTED_MODULE_14__carded_right_sidenav_2_tabbed_right_sidenav_2_tabbed_component__["a" /* FuseCardedRightSidenav2TabbedComponent */]
    },
    {
        path: 'page-layouts/simple/full-width',
        component: __WEBPACK_IMPORTED_MODULE_15__simple_fullwidth_fullwidth_component__["a" /* FuseSimpleFullWidthComponent */]
    },
    {
        path: 'page-layouts/simple/left-sidenav',
        component: __WEBPACK_IMPORTED_MODULE_16__simple_left_sidenav_left_sidenav_component__["a" /* FuseSimpleLeftSidenavComponent */]
    },
    {
        path: 'page-layouts/simple/left-sidenav-2',
        component: __WEBPACK_IMPORTED_MODULE_17__simple_left_sidenav_2_left_sidenav_2_component__["a" /* FuseSimpleLeftSidenav2Component */]
    },
    {
        path: 'page-layouts/simple/left-sidenav-3',
        component: __WEBPACK_IMPORTED_MODULE_18__simple_left_sidenav_3_left_sidenav_3_component__["a" /* FuseSimpleLeftSidenav3Component */]
    },
    {
        path: 'page-layouts/simple/right-sidenav',
        component: __WEBPACK_IMPORTED_MODULE_19__simple_right_sidenav_right_sidenav_component__["a" /* FuseSimpleRightSidenavComponent */]
    },
    {
        path: 'page-layouts/simple/right-sidenav-2',
        component: __WEBPACK_IMPORTED_MODULE_20__simple_right_sidenav_2_right_sidenav_2_component__["a" /* FuseSimpleRightSidenav2Component */]
    },
    {
        path: 'page-layouts/simple/right-sidenav-3',
        component: __WEBPACK_IMPORTED_MODULE_21__simple_right_sidenav_3_right_sidenav_3_component__["a" /* FuseSimpleRightSidenav3Component */]
    },
    {
        path: 'page-layouts/simple/tabbed',
        component: __WEBPACK_IMPORTED_MODULE_22__simple_tabbed_tabbed_component__["a" /* FuseTabbedComponent */]
    },
    {
        path: 'page-layouts/blank',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    }
];
var UIPageLayoutsModule = /** @class */ (function () {
    function UIPageLayoutsModule() {
    }
    UIPageLayoutsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__carded_fullwidth_fullwidth_component__["a" /* FuseCardedFullWidthComponent */],
                __WEBPACK_IMPORTED_MODULE_6__carded_fullwidth_2_fullwidth_2_component__["a" /* FuseCardedFullWidth2Component */],
                __WEBPACK_IMPORTED_MODULE_7__carded_left_sidenav_left_sidenav_component__["a" /* FuseCardedLeftSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__carded_left_sidenav_tabbed_left_sidenav_tabbed_component__["a" /* FuseCardedLeftSidenavTabbedComponent */],
                __WEBPACK_IMPORTED_MODULE_9__carded_left_sidenav_2_left_sidenav_2_component__["a" /* FuseCardedLeftSidenav2Component */],
                __WEBPACK_IMPORTED_MODULE_10__carded_left_sidenav_2_tabbed_left_sidenav_2_tabbed_component__["a" /* FuseCardedLeftSidenav2TabbedComponent */],
                __WEBPACK_IMPORTED_MODULE_11__carded_right_sidenav_right_sidenav_component__["a" /* FuseCardedRightSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_12__carded_right_sidenav_tabbed_right_sidenav_tabbed_component__["a" /* FuseCardedRightSidenavTabbedComponent */],
                __WEBPACK_IMPORTED_MODULE_13__carded_right_sidenav_2_right_sidenav_2_component__["a" /* FuseCardedRightSidenav2Component */],
                __WEBPACK_IMPORTED_MODULE_14__carded_right_sidenav_2_tabbed_right_sidenav_2_tabbed_component__["a" /* FuseCardedRightSidenav2TabbedComponent */],
                __WEBPACK_IMPORTED_MODULE_15__simple_fullwidth_fullwidth_component__["a" /* FuseSimpleFullWidthComponent */],
                __WEBPACK_IMPORTED_MODULE_16__simple_left_sidenav_left_sidenav_component__["a" /* FuseSimpleLeftSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_17__simple_left_sidenav_2_left_sidenav_2_component__["a" /* FuseSimpleLeftSidenav2Component */],
                __WEBPACK_IMPORTED_MODULE_18__simple_left_sidenav_3_left_sidenav_3_component__["a" /* FuseSimpleLeftSidenav3Component */],
                __WEBPACK_IMPORTED_MODULE_19__simple_right_sidenav_right_sidenav_component__["a" /* FuseSimpleRightSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_20__simple_right_sidenav_2_right_sidenav_2_component__["a" /* FuseSimpleRightSidenav2Component */],
                __WEBPACK_IMPORTED_MODULE_21__simple_right_sidenav_3_right_sidenav_3_component__["a" /* FuseSimpleRightSidenav3Component */],
                __WEBPACK_IMPORTED_MODULE_22__simple_tabbed_tabbed_component__["a" /* FuseTabbedComponent */],
                __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["O" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components_demo_demo_module__["a" /* FuseDemoModule */]
            ]
        })
    ], UIPageLayoutsModule);
    return UIPageLayoutsModule;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <h2>Fullwidth</h2>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24 mat-white-bg\">\r\n\r\n        <fuse-demo-content></fuse-demo-content>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleFullWidthComponent; });
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

var FuseSimpleFullWidthComponent = /** @class */ (function () {
    function FuseSimpleFullWidthComponent() {
    }
    FuseSimpleFullWidthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-fullwidth',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleFullWidthComponent);
    return FuseSimpleFullWidthComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidenav single-scroll\" fusePerfectScrollbar>\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav  p-24\" align=\"start\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"simple-left-sidenav-2\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\" fusePerfectScrollbar>\r\n\r\n            <!-- HEADER -->\r\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <button mat-button class=\"mat-icon-button sidenav-toggle\"\r\n                        fuseMatSidenavToggler=\"simple-left-sidenav-2\"\r\n                        fxHide.gt-md>\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <div>\r\n                    <h2>Left sidenav with page scroll</h2>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- / HEADER -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24 mat-white-bg\">\r\n\r\n                <fuse-demo-content></fuse-demo-content>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleLeftSidenav2Component; });
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

var FuseSimpleLeftSidenav2Component = /** @class */ (function () {
    function FuseSimpleLeftSidenav2Component() {
    }
    FuseSimpleLeftSidenav2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-left-sidenav-2',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleLeftSidenav2Component);
    return FuseSimpleLeftSidenav2Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidenav inner-sidenav\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <button mat-button class=\"mat-icon-button sidenav-toggle\"\r\n                fuseMatSidenavToggler=\"simple-left-sidenav-3\"\r\n                fxHide.gt-md>\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <div>\r\n            <h2>Left inner sidenav with content scroll</h2>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"simple-left-sidenav-3\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <div class=\"sidenav-content\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n            </div>\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center p-24\" fusePerfectScrollbar>\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24 mat-elevation-z4 mat-white-bg\">\r\n\r\n                <fuse-demo-content></fuse-demo-content>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleLeftSidenav3Component; });
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

var FuseSimpleLeftSidenav3Component = /** @class */ (function () {
    function FuseSimpleLeftSidenav3Component() {
    }
    FuseSimpleLeftSidenav3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-left-sidenav-3',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleLeftSidenav3Component);
    return FuseSimpleLeftSidenav3Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidenav\" fusePerfectScrollbar>\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"simple-left-sidenav\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <div class=\"sidenav-content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n            </div>\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\" fusePerfectScrollbar>\r\n\r\n            <!-- HEADER -->\r\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <button mat-button class=\"mat-icon-button sidenav-toggle\"\r\n                        fuseMatSidenavToggler=\"simple-left-sidenav\"\r\n                        fxHide.gt-md>\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <div>\r\n                    <h2>Left sidenav with content scroll</h2>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- / HEADER -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24 mat-white-bg\">\r\n\r\n                <fuse-demo-content></fuse-demo-content>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleLeftSidenavComponent; });
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

var FuseSimpleLeftSidenavComponent = /** @class */ (function () {
    function FuseSimpleLeftSidenavComponent() {
    }
    FuseSimpleLeftSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-left-sidenav',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleLeftSidenavComponent);
    return FuseSimpleLeftSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidenav single-scroll\" fusePerfectScrollbar>\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\" fusePerfectScrollbar>\r\n\r\n            <!-- HEADER -->\r\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <button mat-button class=\"mat-icon-button sidenav-toggle\"\r\n                        fuseMatSidenavToggler=\"simple-right-sidenav-2\"\r\n                        fxHide.gt-md>\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <div>\r\n                    <h2>Right sidenav with page scroll</h2>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- / HEADER -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24 mat-white-bg\">\r\n\r\n                <fuse-demo-content></fuse-demo-content>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav  p-24\" align=\"end\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"simple-right-sidenav-2\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleRightSidenav2Component; });
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

var FuseSimpleRightSidenav2Component = /** @class */ (function () {
    function FuseSimpleRightSidenav2Component() {
    }
    FuseSimpleRightSidenav2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-right-sidenav-2',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleRightSidenav2Component);
    return FuseSimpleRightSidenav2Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidenav inner-sidenav\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <button mat-button class=\"mat-icon-button sidenav-toggle\"\r\n                fuseMatSidenavToggler=\"simple-right-sidenav-3\"\r\n                fxHide.gt-md>\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <div>\r\n            <h2>Right inner sidenav with content scroll</h2>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center p-24\" fusePerfectScrollbar>\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24 mat-elevation-z4 mat-white-bg\">\r\n\r\n                <fuse-demo-content></fuse-demo-content>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"simple-right-sidenav-3\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <div class=\"sidenav-content\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n            </div>\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleRightSidenav3Component; });
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

var FuseSimpleRightSidenav3Component = /** @class */ (function () {
    function FuseSimpleRightSidenav3Component() {
    }
    FuseSimpleRightSidenav3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-right-sidenav-3',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleRightSidenav3Component);
    return FuseSimpleRightSidenav3Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidenav\" fusePerfectScrollbar>\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\" fusePerfectScrollbar>\r\n\r\n            <!-- HEADER -->\r\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <button mat-button class=\"mat-icon-button sidenav-toggle\"\r\n                        fuseMatSidenavToggler=\"simple-right-sidenav\"\r\n                        fxHide.gt-md>\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <div>\r\n                    <h2>Right sidenav with content scroll</h2>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- / HEADER -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24 mat-white-bg\">\r\n\r\n                <fuse-demo-content></fuse-demo-content>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"simple-right-sidenav\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <div class=\"sidenav-content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-sidenav></fuse-demo-sidenav>\r\n\r\n            </div>\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleRightSidenavComponent; });
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

var FuseSimpleRightSidenavComponent = /** @class */ (function () {
    function FuseSimpleRightSidenavComponent() {
    }
    FuseSimpleRightSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-right-sidenav',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleRightSidenavComponent);
    return FuseSimpleRightSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple tabbed\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24\">\r\n        <h2>Tabbed</h2>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content mat-white-bg\">\r\n\r\n        <mat-tab-group dynamicHeight=\"true\">\r\n\r\n            <mat-tab label=\"Tab 1\">\r\n                <div class=\"p-24\">\r\n                    <fuse-demo-content></fuse-demo-content>\r\n                </div>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Tab 2\">\r\n                <div class=\"p-24\">\r\n                    <fuse-demo-content></fuse-demo-content>\r\n                </div>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Tab 3\">\r\n                <div class=\"p-24\">\r\n                    <fuse-demo-content></fuse-demo-content>\r\n                </div>\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTabbedComponent; });
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

var FuseTabbedComponent = /** @class */ (function () {
    function FuseTabbedComponent() {
    }
    FuseTabbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-tabbed',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTabbedComponent);
    return FuseTabbedComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-blockquotes-lists\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Blockquotes</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <blockquote>\r\n                    <p>\r\n                        You can do anything, but not everything.\r\n                    </p>\r\n                </blockquote>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <blockquote>\r\n                        <p>\r\n                            You can do anything, but not everything.\r\n                        </p>\r\n                    </blockquote>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <blockquote>\r\n                    <p>\r\n                        You can do anything, but not everything.\r\n                    </p>\r\n                    <footer>\r\n                        David Allen\r\n                    </footer>\r\n                </blockquote>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <blockquote>\r\n                        <p>\r\n                            You can do anything, but not everything.\r\n                        </p>\r\n                        <footer>\r\n                            David Allen\r\n                        </footer>\r\n                    </blockquote>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <blockquote class=\"reverse\">\r\n                    <p>\r\n                        You can do anything, but not everything.\r\n                    </p>\r\n                    <footer>\r\n                        David Allen\r\n                    </footer>\r\n                </blockquote>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <blockquote class=\"reverse\">\r\n                        <p>\r\n                            You can do anything, but not everything.\r\n                        </p>\r\n                        <footer>\r\n                            David Allen\r\n                        </footer>\r\n                    </blockquote>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-20\">Lists</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <ol>\r\n                    <li>Ordered list item</li>\r\n                    <li>\r\n                        Ordered list item\r\n                        <ol>\r\n                            <li>Ordered list item</li>\r\n                            <li>Ordered list item</li>\r\n                        </ol>\r\n                    </li>\r\n                    <li>Ordered list item</li>\r\n                    <li>Ordered list item</li>\r\n                </ol>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <ol>\r\n                        <li>Ordered list item</li>\r\n                        <li>\r\n                            Ordered list item\r\n                            <ol>\r\n                                <li>Ordered list item</li>\r\n                                <li>Ordered list item</li>\r\n                            </ol>\r\n                        </li>\r\n                        <li>Ordered list item</li>\r\n                        <li>Ordered list item</li>\r\n                    </ol>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <ul>\r\n                    <li>Unordered list item</li>\r\n                    <li>\r\n                        Unordered list item\r\n                        <ul>\r\n                            <li>Unordered list item</li>\r\n                            <li>Unordered list item</li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>Unordered list item</li>\r\n                    <li>Unordered list item</li>\r\n                </ul>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <ul>\r\n                        <li>Unordered list item</li>\r\n                        <li>\r\n                            Unordered list item\r\n                            <ul>\r\n                                <li>Unordered list item</li>\r\n                                <li>Unordered list item</li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>Unordered list item</li>\r\n                        <li>Unordered list item</li>\r\n                    </ul>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-20\">Definition Lists</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <dl>\r\n                    <dt>Definition term</dt>\r\n                    <dd>This is the definition description</dd>\r\n\r\n                    <dt>Another definition term</dt>\r\n                    <dd>This is also another definition description</dd>\r\n                </dl>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <dl>\r\n                        <dt>Definition term</dt>\r\n                        <dd>This is the definition description</dd>\r\n\r\n                        <dt>Another definition term</dt>\r\n                        <dd>This is also another definition description</dd>\r\n                    </dl>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss":
/***/ (function(module, exports) {

module.exports = ":host #typography-blockquotes-lists .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-blockquotes-lists .source-code code {\n    background: none !important; }\n  :host #typography-blockquotes-lists .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-blockquotes-lists .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-blockquotes-lists .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTypographyBlockquotesListsComponent; });
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

var FuseTypographyBlockquotesListsComponent = /** @class */ (function () {
    function FuseTypographyBlockquotesListsComponent() {
    }
    FuseTypographyBlockquotesListsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-typography-blockquotes-lists',
            template: __webpack_require__("./src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyBlockquotesListsComponent);
    return FuseTypographyBlockquotesListsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/headings/headings.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-headings\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Material design typography classes</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">112px</div>\r\n                <span class=\"mat-display-4\">Display 4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-display-4\">Display 4</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">56px</div>\r\n                <span class=\"mat-display-3\">Display 3</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-display-3\">Display 3</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">45px</div>\r\n                <span class=\"mat-display-2\">Display 2</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-display-2\">Display 2</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">34px</div>\r\n                <span class=\"mat-display-1\">Display 1</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-display-1\">Display 1</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">24px</div>\r\n                <span class=\"mat-headline\">Headline</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-headline\">Headline</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">20px</div>\r\n                <span class=\"mat-title\">Title</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-title\">Title</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">16px</div>\r\n                <span class=\"mat-subheading-2\">Subheading 2</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-subheading-2\">Subheading 2</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">15px</div>\r\n                <span class=\"mat-subheading-1\">Subheading 1</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-subheading-1\">Subheading 1</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">14px</div>\r\n                <span class=\"mat-body-1\">Body 1</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-body-1\">Body 1</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">14px</div>\r\n                <span class=\"mat-body-2\">Body 2</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-body-2\">Body 2</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">12px</div>\r\n                <span class=\"mat-caption\">Caption</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-caption\">Caption</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-20\">Standard Headings</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">24px</div>\r\n                <span class=\"h1\">Heading 1</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h1>Heading 1</h1>\r\n                    <span class=\"h1\">Heading 1</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">20px</div>\r\n                <span class=\"h2\">Heading 2</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h2>Heading 2</h2>\r\n                    <span class=\"h2\">Heading 2</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">16px</div>\r\n                <span class=\"h3\">Heading 3</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h3>Heading 3</h3>\r\n                    <span class=\"h3\">Heading 3</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">15px</div>\r\n                <span class=\"h4\">Heading 4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h4>Heading 4</h4>\r\n                    <span class=\"h4\">Heading 4</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">13px</div>\r\n                <span class=\"h5\">Heading 5</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h5>Heading 5</h5>\r\n                    <span class=\"h5\">Heading 5</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">12px</div>\r\n                <span class=\"h6\">Heading 6</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h6>Heading 6</h6>\r\n                    <span class=\"h6\">Heading 6</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/headings/headings.component.scss":
/***/ (function(module, exports) {

module.exports = ":host #typography-headings .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-headings .source-code code {\n    background: none !important; }\n  :host #typography-headings .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-headings .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-headings .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/headings/headings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTypographyHeadingsComponent; });
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

var FuseTypographyHeadingsComponent = /** @class */ (function () {
    function FuseTypographyHeadingsComponent() {
    }
    FuseTypographyHeadingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-typography-headings',
            template: __webpack_require__("./src/app/main/content/ui/typography/tabs/headings/headings.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/typography/tabs/headings/headings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyHeadingsComponent);
    return FuseTypographyHeadingsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/helpers/helpers.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-helpers\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Font Weight</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">From 100 to 900</div>\r\n                <span class=\"font-weight-100\">font-weight: 100</span>\r\n                <span>...</span>\r\n                <span class=\"font-weight-900\">font-weight: 900</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"font-weight-100\">100 font weight</span>\r\n                    ...\r\n                    <span class=\"font-weight-900\">900 font weight</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-20\">Font Size</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Multiplies of 2, max: 120</div>\r\n                <span class=\"font-size-20\">font-size: 20</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"font-size-20\">font-size: 20</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-20\">Line Height</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Multiplies of 2, max: 120</div>\r\n                <span>line-height: 2</span>\r\n                <span>...</span>\r\n                <span>line-height: 120</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"line-height-2\">2px line height</span>\r\n                    ...\r\n                    <span class=\"line-height-120\">120px line height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-20\">Other helpers</div>\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-left\">Left aligned text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-left\">Left aligned text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-center\">Center aligned text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-center\">Center aligned text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-right\">Right aligned text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-right\">Right aligned text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <p>\r\n                    <span class=\"text-boxed\">Boxed text</span>\r\n                </p>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <p>\r\n                        <span class=\"text-boxed\">Boxed text</span>\r\n                    </p>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview mat-grey-700-bg\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <p>\r\n                    <span class=\"text-boxed-light\">Boxed text light</span>\r\n                </p>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <p>\r\n                        <span class=\"text-boxed-light\">Boxed text light</span>\r\n                    </p>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <p>\r\n                    <span class=\"text-strike\">Strike-through text</span>\r\n                </p>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <p>\r\n                        <span class=\"text-strike\">Strike-through text</span>\r\n                    </p>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-italic\">Italic text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-italic\">Italic text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-semibold\">Semi-bold text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-semibold\">Semi-bold text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-bold\">Bold text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-bold\">Bold text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span class=\"text-truncate\">This is a truncated text. It will be truncated if it's too long. Vivamus\r\n                    convallis dui porta massa.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"text-truncate\">\r\n                        This is a truncated text. It will be truncated if it's too long. Vivamus convallis dui porta massa.\r\n                    </span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/helpers/helpers.component.scss":
/***/ (function(module, exports) {

module.exports = ":host #typography-helpers .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-helpers .source-code code {\n    background: none !important; }\n  :host #typography-helpers .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-helpers .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-helpers .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/helpers/helpers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTypographyHelpersComponent; });
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

var FuseTypographyHelpersComponent = /** @class */ (function () {
    function FuseTypographyHelpersComponent() {
    }
    FuseTypographyHelpersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-typography-helpers',
            template: __webpack_require__("./src/app/main/content/ui/typography/tabs/helpers/helpers.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/typography/tabs/helpers/helpers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyHelpersComponent);
    return FuseTypographyHelpersComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-inline-text-elements\" class=\"p-24\">\r\n\r\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><abbr title=\"Cascaded Style Sheet\">CSS</abbr></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <abbr title=\"Cascaded Style Sheet\">CSS</abbr>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is a <mark>marked</mark> text.</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a <mark>marked</mark> text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>\r\n                    <del>This is a deleted text.</del>\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <del>This is a deleted text.</del>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><s>This is a strike-through text.</s></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <s>This is a strike-through text.</s>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><u>This is an underlined text.</u></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <u>This is an underlined text.</u>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>\r\n                    <small>This is a small text.</small>\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <small>This is a small text.</small>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><strong>This is a strong text.</strong></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <strong>This is a strong text.</strong>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><em>This is an italic text.</em></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <em>This is an italic text.</em>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is a\r\n                    <span class=\"text-super\">super</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a\r\n                    <span class=\"text-super\">super</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>\r\n                    This is a\r\n                    <span class=\"text-sub\">sub</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a\r\n                    <span class=\"text-sub\">sub</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is a\r\n                    <span class=\"text-capitalize\">capitalized</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a\r\n                    <span class=\"text-capitalized\">capitalized</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is an\r\n                    <span class=\"text-uppercase\">uppercase</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is an\r\n                    <span class=\"text-uppercase\">uppercase</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is a\r\n                    <span class=\"text-lowercase\">LOWERCASE</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a\r\n                    <span class=\"text-lowercase\">LOWERCASE</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss":
/***/ (function(module, exports) {

module.exports = ":host #typography-inline-text-elements .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-inline-text-elements .source-code code {\n    background: none !important; }\n  :host #typography-inline-text-elements .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-inline-text-elements .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-inline-text-elements .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTypographyInlineTextElementsComponent; });
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

var FuseTypographyInlineTextElementsComponent = /** @class */ (function () {
    function FuseTypographyInlineTextElementsComponent() {
    }
    FuseTypographyInlineTextElementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-typography-inline-text-elements',
            template: __webpack_require__("./src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyInlineTextElementsComponent);
    return FuseTypographyInlineTextElementsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography\" class=\"page-layout simple tabbed\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Typography</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group dynamicHeight=\"true\">\r\n\r\n            <mat-tab label=\"Headings\">\r\n\r\n                <fuse-typography-headings></fuse-typography-headings>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Inline Text Elements\">\r\n\r\n                <fuse-typography-inline-text-elements></fuse-typography-inline-text-elements>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Blockquotes & Lists\">\r\n\r\n                <fuse-typography-blockquotes-lists></fuse-typography-blockquotes-lists>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Helpers\">\r\n\r\n                <fuse-typography-helpers></fuse-typography-helpers>\r\n\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/ui/typography/typography.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTypographyComponent; });
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

var FuseTypographyComponent = /** @class */ (function () {
    function FuseTypographyComponent() {
    }
    FuseTypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-typography',
            template: __webpack_require__("./src/app/main/content/ui/typography/typography.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyComponent);
    return FuseTypographyComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/typography/typography.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UITypographyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typography_component__ = __webpack_require__("./src/app/main/content/ui/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_headings_headings_component__ = __webpack_require__("./src/app/main/content/ui/typography/tabs/headings/headings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_inline_text_elements_inline_text_elements_component__ = __webpack_require__("./src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_blockquotes_lists_blockquotes_lists_component__ = __webpack_require__("./src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_helpers_helpers_component__ = __webpack_require__("./src/app/main/content/ui/typography/tabs/helpers/helpers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'typography',
        component: __WEBPACK_IMPORTED_MODULE_5__typography_component__["a" /* FuseTypographyComponent */]
    }
];
var UITypographyModule = /** @class */ (function () {
    function UITypographyModule() {
    }
    UITypographyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__typography_component__["a" /* FuseTypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tabs_headings_headings_component__["a" /* FuseTypographyHeadingsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tabs_inline_text_elements_inline_text_elements_component__["a" /* FuseTypographyInlineTextElementsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tabs_blockquotes_lists_blockquotes_lists_component__["a" /* FuseTypographyBlockquotesListsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tabs_helpers_helpers_component__["a" /* FuseTypographyHelpersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["O" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["c" /* FuseHighlightModule */]
            ]
        })
    ], UITypographyModule);
    return UITypographyModule;
}());



/***/ }),

/***/ "./src/app/main/content/ui/ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseUIModule", function() { return FuseUIModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forms_forms_module__ = __webpack_require__("./src/app/main/content/ui/forms/forms.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons_icons_module__ = __webpack_require__("./src/app/main/content/ui/icons/icons.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typography_typography_module__ = __webpack_require__("./src/app/main/content/ui/typography/typography.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_classes_helper_classes_module__ = __webpack_require__("./src/app/main/content/ui/helper-classes/helper-classes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_layouts_page_layouts_module__ = __webpack_require__("./src/app/main/content/ui/page-layouts/page-layouts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__colors_colors_module__ = __webpack_require__("./src/app/main/content/ui/colors/colors.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FuseUIModule = /** @class */ (function () {
    function FuseUIModule() {
    }
    FuseUIModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__forms_forms_module__["a" /* UIFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__icons_icons_module__["a" /* UIIconsModule */],
                __WEBPACK_IMPORTED_MODULE_3__typography_typography_module__["a" /* UITypographyModule */],
                __WEBPACK_IMPORTED_MODULE_4__helper_classes_helper_classes_module__["a" /* UIHelperClassesModule */],
                __WEBPACK_IMPORTED_MODULE_5__page_layouts_page_layouts_module__["a" /* UIPageLayoutsModule */],
                __WEBPACK_IMPORTED_MODULE_6__colors_colors_module__["a" /* UIColorsModule */]
            ]
        })
    ], FuseUIModule);
    return FuseUIModule;
}());



/***/ })

});
//# sourceMappingURL=ui.module.chunk.js.map