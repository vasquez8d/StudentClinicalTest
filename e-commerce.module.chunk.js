webpackJsonp(["e-commerce.module"],{

/***/ "./node_modules/rxjs/_esm5/add/observable/fromEvent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromEvent PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].fromEvent = __WEBPACK_IMPORTED_MODULE_1__observable_fromEvent__["fromEvent"];
//# sourceMappingURL=fromEvent.js.map 


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_merge PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].merge = __WEBPACK_IMPORTED_MODULE_1__observable_merge__["a" /* merge */];
//# sourceMappingURL=merge.js.map 


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/startWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/startWith.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_startWith PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.startWith = __WEBPACK_IMPORTED_MODULE_1__operator_startWith__["a" /* startWith */];
//# sourceMappingURL=startWith.js.map 


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/startWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startWith;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/** PURE_IMPORTS_START .._operators_startWith PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits the items you specify as arguments before it begins to emit
 * items emitted by the source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {...T} values - Items you want the modified Observable to emit first.
 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_startWith__["a" /* startWith */].apply(void 0, array)(this);
}
//# sourceMappingURL=startWith.js.map 


/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"e-commerce-dashboard\" class=\"page-layout simple fullwidth\">\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24 w-100-p\">\r\n\r\n        <!-- WIDGET GROUP -->\r\n        <div class=\"widget-group\" fxLayout=\"row wrap\" fxFlex=\"100\" fxLayoutAlign=\"start start\" *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\r\n\r\n            <!-- WIDGET 1 -->\r\n            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                <!-- Front -->\r\n                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <mat-form-field>\r\n                            <mat-select class=\"simplified font-size-16\" [(ngModel)]=\"widgets.widget1.currentRange\"\r\n                                        aria-label=\"Change range\">\r\n                                <mat-option *ngFor=\"let range of widgets.widget1.ranges | keys\"\r\n                                            [value]=\"range.key\">\r\n                                    {{range.value}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <button mat-icon-button fuseWidgetToggle aria-label=\"more\">\r\n                            <mat-icon>more_vert</mat-icon>\r\n                        </button>\r\n                    </div>\r\n\r\n                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <div class=\"light-blue-fg font-size-72 line-height-72\">\r\n                            {{widgets.widget1.data.count[widgets.widget1.currentRange]}}\r\n                        </div>\r\n                        <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget1.data.label}}</div>\r\n                    </div>\r\n\r\n                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <span class=\"h4 secondary-text text-truncate\">{{widgets.widget1.data.extra.label}}:</span>\r\n                        <span class=\"h4 ml-8\">{{widgets.widget1.data.extra.count[widgets.widget1.currentRange]}}</span>\r\n                    </div>\r\n                </div>\r\n                <!-- / Front -->\r\n\r\n                <!-- Back -->\r\n                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                            aria-label=\"Flip widget\">\r\n                        <mat-icon class=\"s-16\">close</mat-icon>\r\n                    </button>\r\n\r\n                    <div>\r\n                        {{widgets.widget1.detail}}\r\n                    </div>\r\n                </div>\r\n                <!-- / Back -->\r\n\r\n            </fuse-widget>\r\n            <!-- / WIDGET 1 -->\r\n\r\n            <!-- WIDGET 2 -->\r\n            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                <!-- Front -->\r\n                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <div class=\"h3\">{{widgets.widget2.title}}</div>\r\n\r\n                        <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\" aria-label=\"more\">\r\n                            <mat-icon>more_vert</mat-icon>\r\n                        </button>\r\n                    </div>\r\n\r\n                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <div class=\"red-fg font-size-72 line-height-72\">\r\n                            {{widgets.widget2.data.count}}\r\n                        </div>\r\n                        <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget2.data.label}}</div>\r\n                    </div>\r\n\r\n                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <span class=\"h4 secondary-text text-truncate\">{{widgets.widget2.data.extra.label}}:</span>\r\n                        <span class=\"h4 ml-8\">{{widgets.widget2.data.extra.count}}</span>\r\n                    </div>\r\n                </div>\r\n                <!-- / Front -->\r\n\r\n                <!-- Back -->\r\n                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                            aria-label=\"Flip widget\">\r\n                        <mat-icon class=\"s-16\">close</mat-icon>\r\n                    </button>\r\n\r\n                    <div>\r\n                        {{widgets.widget2.detail}}\r\n                    </div>\r\n                </div>\r\n                <!-- / Back -->\r\n\r\n            </fuse-widget>\r\n            <!-- / WIDGET 2 -->\r\n\r\n            <!-- WIDGET 3 -->\r\n            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                <!-- Front -->\r\n                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <div class=\"h3\">{{widgets.widget3.title}}</div>\r\n\r\n                        <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\" aria-label=\"more\">\r\n                            <mat-icon>more_vert</mat-icon>\r\n                        </button>\r\n                    </div>\r\n\r\n                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <div class=\"orange-fg font-size-72 line-height-72\">\r\n                            {{widgets.widget3.data.count}}\r\n                        </div>\r\n                        <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget3.data.label}}</div>\r\n                    </div>\r\n\r\n                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <span class=\"h4 secondary-text text-truncate\">{{widgets.widget3.data.extra.label}}:</span>\r\n                        <span class=\"h4 ml-8\">{{widgets.widget3.data.extra.count}}</span>\r\n                    </div>\r\n                </div>\r\n                <!-- / Front -->\r\n\r\n                <!-- Back -->\r\n                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                            aria-label=\"Flip widget\">\r\n                        <mat-icon class=\"s-16\">close</mat-icon>\r\n                    </button>\r\n\r\n                    <div>\r\n                        {{widgets.widget3.detail}}\r\n                    </div>\r\n                </div>\r\n                <!-- / Back -->\r\n\r\n            </fuse-widget>\r\n            <!-- / WIDGET 3 -->\r\n\r\n            <!-- WIDGET 4 -->\r\n            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                <!-- Front -->\r\n                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <div class=\"h3\">{{widgets.widget4.title}}</div>\r\n\r\n                        <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\" aria-label=\"more\">\r\n                            <mat-icon>more_vert</mat-icon>\r\n                        </button>\r\n                    </div>\r\n\r\n                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <div class=\"blue-grey-fg font-size-72 line-height-72\">{{widgets.widget4.data.count}}\r\n                        </div>\r\n                        <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget4.data.label}}</div>\r\n                    </div>\r\n\r\n                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <span class=\"h4 secondary-text text-truncate\">{{widgets.widget4.data.extra.label}}:</span>\r\n                        <span class=\"h4 ml-8\">{{widgets.widget4.data.extra.count}}</span>\r\n                    </div>\r\n                </div>\r\n                <!-- / Front -->\r\n\r\n                <!-- Back -->\r\n                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                            aria-label=\"Flip widget\">\r\n                        <mat-icon class=\"s-16\">close</mat-icon>\r\n                    </button>\r\n\r\n                    <div>\r\n                        {{widgets.widget4.detail}}\r\n                    </div>\r\n                </div>\r\n                <!-- / Back -->\r\n\r\n            </fuse-widget>\r\n            <!-- / WIDGET 4 -->\r\n\r\n\r\n            <!-- WIDGET 5 -->\r\n            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"row\" fxFlex=\"100\">\r\n\r\n                <!-- Front -->\r\n                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                    <div class=\"px-16 border-bottom\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n\r\n                        <div fxFlex class=\"py-8 h3\">{{widgets.widget5.title}}</div>\r\n\r\n                        <div fxFlex=\"0 1 auto\" class=\"py-8\" fxLayout=\"row\">\r\n                            <button mat-button class=\"px-16\"\r\n                                    *ngFor=\"let range of widgets.widget5.ranges | keys\"\r\n                                    (click)=\"widget5.currentRange = range.key\"\r\n                                    [disabled]=\"widget5.currentRange == range.key\">\r\n                                {{range.value}}\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"h-420\">\r\n                        <ngx-charts-bar-vertical-stacked\r\n                            *fuseIfOnDom\r\n                            [scheme]=\"widget5.scheme\"\r\n                            [results]=\"this.widgets.widget5.mainChart[this.widget5.currentRange]\"\r\n                            [gradient]=\"widget5.gradient\"\r\n                            [xAxis]=\"widget5.xAxis\"\r\n                            [yAxis]=\"widget5.yAxis\"\r\n                            [legend]=\"widget5.legend\"\r\n                            [showXAxisLabel]=\"widget5.showXAxisLabel\"\r\n                            [showYAxisLabel]=\"widget5.showYAxisLabel\"\r\n                            [xAxisLabel]=\"widget5.xAxisLabel\"\r\n                            [yAxisLabel]=\"widget5.yAxisLabel\"\r\n                            (select)=\"widget5.onSelect($event)\">\r\n                        </ngx-charts-bar-vertical-stacked>\r\n                    </div>\r\n                </div>\r\n                <!-- / Front -->\r\n\r\n            </fuse-widget>\r\n            <!-- / WIDGET 5 -->\r\n\r\n            <!-- WIDGET 6 -->\r\n            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                <!-- Front -->\r\n                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                    <div class=\"px-16 border-bottom\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <div class=\"h3\">{{widgets.widget6.title}}</div>\r\n                        <mat-form-field>\r\n                            <mat-select class=\"simplified\" [(ngModel)]=\"widget6.currentRange\" aria-label=\"Change range\">\r\n                                <mat-option *ngFor=\"let range of widgets.widget6.ranges | keys\"\r\n                                            [value]=\"range.key\">\r\n                                    {{range.value}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <div class=\"h-400\">\r\n                        <ngx-charts-pie-chart\r\n                            *fuseIfOnDom\r\n                            [scheme]=\"widget6.scheme\"\r\n                            [results]=\"widgets.widget6.mainChart[widget6.currentRange]\"\r\n                            [legend]=\"widget6.showLegend\"\r\n                            [explodeSlices]=\"widget6.explodeSlices\"\r\n                            [labels]=\"widget6.labels\"\r\n                            [doughnut]=\"widget6.doughnut\"\r\n                            [gradient]=\"widget6.gradient\"\r\n                            (select)=\"widget6.onSelect($event)\">\r\n                        </ngx-charts-pie-chart>\r\n                    </div>\r\n\r\n                    <div class=\"py-8 mh-16 border-top\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n                        <div class=\"py-8 border-right\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n                            <span class=\"mat-display-1 mb-0\">{{widgets.widget6.footerLeft.count[widget6.currentRange]}}</span>\r\n                            <span class=\"h4\">{{widgets.widget6.footerLeft.title}}</span>\r\n                        </div>\r\n\r\n                        <div class=\"py-8\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n                            <span class=\"mat-display-1 mb-0\">{{widgets.widget6.footerRight.count[widget6.currentRange]}}</span>\r\n                            <span class=\"h4\">{{widgets.widget6.footerRight.title}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / Front -->\r\n\r\n            </fuse-widget>\r\n            <!-- / WIDGET 6 -->\r\n\r\n            <!-- WIDGET 7 -->\r\n            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                <!-- Front -->\r\n                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                    <div class=\"px-16 border-bottom\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <div class=\"h3\">{{widgets.widget7.title}}</div>\r\n                        <mat-form-field>\r\n                            <mat-select class=\"simplified\" [(ngModel)]=\"widget7.currentRange\"\r\n                                        aria-label=\"Change range\">\r\n                                <mat-option *ngFor=\"let range of widgets.widget7.ranges | keys\"\r\n                                            [value]=\"range.key\">\r\n                                    {{range.value}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\r\n                         *ngFor=\"let customer of widgets.widget7.customers[widget7.currentRange]\">\r\n                        <div>\r\n                            <div class=\"h3\">{{customer.name}}</div>\r\n                            <div>\r\n                                <span *ngIf=\"customer.location\">{{customer.location}}</span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <button mat-icon-button aria-label=\"More information\">\r\n                            <mat-icon>more_vert</mat-icon>\r\n                        </button>\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / Front -->\r\n\r\n            </fuse-widget>\r\n            <!-- / WIDGET 7 -->\r\n\r\n        </div>\r\n        <!-- / WIDGET GROUP -->\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = "#e-commerce-dashboard .content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseEcommerceDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_service__ = __webpack_require__("./src/app/main/content/apps/e-commerce/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseEcommerceDashboardComponent = /** @class */ (function () {
    function FuseEcommerceDashboardComponent(projectsDashboardService) {
        this.projectsDashboardService = projectsDashboardService;
        this.widget5 = {};
        this.widget6 = {};
        this.widget7 = {};
        this.projects = this.projectsDashboardService.projects;
        this.selectedProject = this.projects[0];
        this.widgets = this.projectsDashboardService.widgets;
        /**
         * Widget 5
         */
        this.widget5 = {
            currentRange: 'TW',
            xAxis: true,
            yAxis: true,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            onSelect: function (ev) {
                console.log(ev);
            }
        };
        /**
         * Widget 6
         */
        this.widget6 = {
            currentRange: 'TW',
            legend: false,
            explodeSlices: false,
            labels: true,
            doughnut: true,
            gradient: false,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63']
            },
            onSelect: function (ev) {
                console.log(ev);
            }
        };
        /**
         * Widget 7
         */
        this.widget7 = {
            currentRange: 'T'
        };
    }
    FuseEcommerceDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-e-commerce-dashboard',
            template: __webpack_require__("./src/app/main/content/apps/e-commerce/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/e-commerce/dashboard/dashboard.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_1__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* EcommerceDashboardService */]])
    ], FuseEcommerceDashboardComponent);
    return FuseEcommerceDashboardComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcommerceDashboardService; });
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


var EcommerceDashboardService = /** @class */ (function () {
    function EcommerceDashboardService(http) {
        this.http = http;
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    EcommerceDashboardService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getProjects(),
                _this.getWidgets()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    EcommerceDashboardService.prototype.getProjects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/project-dashboard-projects')
                .subscribe(function (response) {
                _this.projects = response;
                resolve(response);
            }, reject);
        });
    };
    EcommerceDashboardService.prototype.getWidgets = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/e-commerce-dashboard')
                .subscribe(function (response) {
                _this.widgets = response;
                resolve(response);
            }, reject);
        });
    };
    EcommerceDashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], EcommerceDashboardService);
    return EcommerceDashboardService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/e-commerce.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseEcommerceModule", function() { return FuseEcommerceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fuse_components_widget_widget_module__ = __webpack_require__("./src/@fuse/components/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("./src/app/main/content/apps/e-commerce/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_service__ = __webpack_require__("./src/app/main/content/apps/e-commerce/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products_products_component__ = __webpack_require__("./src/app/main/content/apps/e-commerce/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products_service__ = __webpack_require__("./src/app/main/content/apps/e-commerce/products/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_product_component__ = __webpack_require__("./src/app/main/content/apps/e-commerce/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_product_service__ = __webpack_require__("./src/app/main/content/apps/e-commerce/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__orders_orders_component__ = __webpack_require__("./src/app/main/content/apps/e-commerce/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__orders_orders_service__ = __webpack_require__("./src/app/main/content/apps/e-commerce/orders/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__order_order_component__ = __webpack_require__("./src/app/main/content/apps/e-commerce/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__order_order_service__ = __webpack_require__("./src/app/main/content/apps/e-commerce/order/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* FuseEcommerceDashboardComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_service__["a" /* EcommerceDashboardService */]
        }
    },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_10__products_products_component__["a" /* FuseEcommerceProductsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_11__products_products_service__["a" /* EcommerceProductsService */]
        }
    },
    {
        path: 'products/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__product_product_component__["a" /* FuseEcommerceProductComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_13__product_product_service__["a" /* EcommerceProductService */]
        }
    },
    {
        path: 'products/:id/:handle',
        component: __WEBPACK_IMPORTED_MODULE_12__product_product_component__["a" /* FuseEcommerceProductComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_13__product_product_service__["a" /* EcommerceProductService */]
        }
    },
    {
        path: 'orders',
        component: __WEBPACK_IMPORTED_MODULE_14__orders_orders_component__["a" /* FuseEcommerceOrdersComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_15__orders_orders_service__["a" /* EcommerceOrdersService */]
        }
    },
    {
        path: 'orders/:id',
        component: __WEBPACK_IMPORTED_MODULE_16__order_order_component__["a" /* FuseEcommerceOrderComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_17__order_order_service__["a" /* EcommerceOrderService */]
        }
    }
];
var FuseEcommerceModule = /** @class */ (function () {
    function FuseEcommerceModule() {
    }
    FuseEcommerceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* FuseEcommerceDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__products_products_component__["a" /* FuseEcommerceProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__product_product_component__["a" /* FuseEcommerceProductComponent */],
                __WEBPACK_IMPORTED_MODULE_14__orders_orders_component__["a" /* FuseEcommerceOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__order_order_component__["a" /* FuseEcommerceOrderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["x" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["N" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["O" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
                }),
                __WEBPACK_IMPORTED_MODULE_6__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__fuse_components_widget_widget_module__["a" /* FuseWidgetModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_service__["a" /* EcommerceDashboardService */],
                __WEBPACK_IMPORTED_MODULE_11__products_products_service__["a" /* EcommerceProductsService */],
                __WEBPACK_IMPORTED_MODULE_13__product_product_service__["a" /* EcommerceProductService */],
                __WEBPACK_IMPORTED_MODULE_15__orders_orders_service__["a" /* EcommerceOrdersService */],
                __WEBPACK_IMPORTED_MODULE_17__order_order_service__["a" /* EcommerceOrderService */]
            ]
        })
    ], FuseEcommerceModule);
    return FuseEcommerceModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/order/order-statuses.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orderStatuses; });
var orderStatuses = [
    {
        'id': 1,
        'name': 'Awaiting check payment',
        'color': 'mat-blue-500-bg'
    },
    {
        'id': 2,
        'name': 'Payment accepted',
        'color': 'mat-green-500-bg'
    },
    {
        'id': 3,
        'name': 'Preparing the order',
        'color': 'mat-orange-500-bg'
    },
    {
        'id': 4,
        'name': 'Shipped',
        'color': 'mat-purple-500-bg'
    },
    {
        'id': 5,
        'name': 'Delivered',
        'color': 'mat-green-800-bg'
    },
    {
        'id': 6,
        'name': 'Canceled',
        'color': 'mat-pink-500-bg'
    },
    {
        'id': 7,
        'name': 'Refunded',
        'color': 'mat-red-500-bg'
    },
    {
        'id': 8,
        'name': 'Payment error',
        'color': 'mat-red-900-bg'
    },
    {
        'id': 9,
        'name': 'On pre-order (paid)',
        'color': 'mat-purple-300-bg'
    },
    {
        'id': 10,
        'name': 'Awaiting bank wire payment',
        'color': 'mat-blue-500-bg'
    },
    {
        'id': 11,
        'name': 'Awaiting PayPal payment',
        'color': 'mat-blue-500-bg'
    },
    {
        'id': 12,
        'name': 'Remote payment accepted',
        'color': 'mat-green-500-bg'
    },
    {
        'id': 13,
        'name': 'On pre-order (not paid)',
        'color': 'mat-purple-300-bg'
    },
    {
        'id': 14,
        'name': 'Awaiting Cash-on-delivery payment',
        'color': 'mat-blue-500-bg'
    }
];


/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"order\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header white-fg\"\r\n             fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n            <!-- APP TITLE -->\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <button class=\"mr-16\" mat-icon-button [routerLink]=\"'/apps/e-commerce/orders'\">\r\n                    <mat-icon>arrow_back</mat-icon>\r\n                </button>\r\n\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\r\n                     *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\r\n                    <div class=\"h2\">\r\n                        Order {{order.reference}}\r\n                    </div>\r\n                    <div class=\"subtitle secondary-text\">\r\n                        <span>from</span>\r\n                        <span>{{order.customer.firstName}} {{order.customer.lastName}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- / APP TITLE -->\r\n\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card mat-white-bg\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Order Details\">\r\n\r\n                        <div class=\"order-details tab-content p-24\" fusePerfectScrollbar>\r\n\r\n                            <div class=\"section pb-48\">\r\n\r\n                                <div class=\"pb-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon class=\"m-0 mr-16\">account_circle</mat-icon>\r\n                                    <div class=\"h2 secondary-text\">Customer</div>\r\n                                </div>\r\n\r\n                                <div class=\"customer\">\r\n                                    <table class=\"simple\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Name</th>\r\n                                                <th>Email</th>\r\n                                                <th>Phone</th>\r\n                                                <th>Company</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                                        <img class=\"avatar\" [src]=\"order.customer.avatar\">\r\n                                                        <span class=\"name text-truncate\">{{order.customer.firstName}} {{order.customer.lastName}}</span>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span class=\"email text-truncate\">{{order.customer.email}}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span class=\"phone text-truncate\">{{order.customer.phone}}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span class=\"company text-truncate\">{{order.customer.company}}</span>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n\r\n                                <mat-tab-group class=\"addresses\">\r\n\r\n                                    <mat-tab label=\"Shipping Address\">\r\n                                        <div fxFlex fxLayout=\"column\" *fuseIfOnDom>\r\n                                            <div class=\"address h4 py-24\">{{order.customer.shippingAddress.address}}</div>\r\n                                            <agm-map class=\"w-100-p h-400\" [zoom]=\"15\"\r\n                                                     [latitude]=\"order.customer.shippingAddress.lat\"\r\n                                                     [longitude]=\"order.customer.shippingAddress.lng\">\r\n                                                <agm-marker [latitude]=\"order.customer.shippingAddress.lat\"\r\n                                                            [longitude]=\"order.customer.shippingAddress.lng\">\r\n                                                </agm-marker>\r\n                                            </agm-map>\r\n                                        </div>\r\n                                    </mat-tab>\r\n\r\n                                    <mat-tab label=\"Invoice Address\" fxLayout=\"column\">\r\n                                        <div fxFlex fxLayout=\"column\" *fuseIfOnDom>\r\n                                            <div class=\"address h4 py-24\">{{order.customer.invoiceAddress.address}}</div>\r\n                                            <agm-map class=\"w-100-p h-400\" [zoom]=\"15\"\r\n                                                     [latitude]=\"order.customer.invoiceAddress.lat\"\r\n                                                     [longitude]=\"order.customer.invoiceAddress.lng\">\r\n                                                <agm-marker [latitude]=\"order.customer.invoiceAddress.lat\"\r\n                                                            [longitude]=\"order.customer.invoiceAddress.lng\">\r\n                                                </agm-marker>\r\n                                            </agm-map>\r\n                                        </div>\r\n                                    </mat-tab>\r\n                                </mat-tab-group>\r\n                            </div>\r\n\r\n                            <div class=\"section pb-48\">\r\n\r\n                                <div class=\"pb-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon class=\"m-0 mr-16\">access_time</mat-icon>\r\n                                    <div class=\"h2 secondary-text\">Order Status</div>\r\n                                </div>\r\n\r\n                                <table class=\"simple\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Status</th>\r\n                                            <th>Updated On</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n\r\n                                        <tr *ngFor=\"let status of order.status\">\r\n                                            <td>\r\n                                                <span class=\"status h6 p-4\" [ngClass]=\"status.color\">\r\n                                                    {{status.name}}\r\n                                                </span>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span>\r\n                                                    {{status.date | date}}\r\n                                                </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n\r\n                                <form class=\"update-status p-24\"\r\n                                      (ngSubmit)=\"updateStatus()\"\r\n                                      [formGroup]=\"statusForm\"\r\n                                      fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                                    <mat-form-field class=\"mr-16\" fxFlex>\r\n                                        <mat-select formControlName=\"newStatus\"\r\n                                                    placeholder=\"Select a status\" required>\r\n                                            <mat-option *ngFor=\"let status of orderStatuses\"\r\n                                                        [value]=\"status.id\">\r\n                                                {{status.name}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n\r\n                                    <button mat-raised-button class=\"mat-accent\"\r\n                                            [disabled]=\"statusForm.invalid\">\r\n                                        Update Status\r\n                                    </button>\r\n                                </form>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"section pb-48\">\r\n\r\n                                <div class=\"pb-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon class=\"m-0 mr-16\">attach_money</mat-icon>\r\n                                    <div class=\"h2 secondary-text\">Payment</div>\r\n                                </div>\r\n\r\n                                <table class=\"simple\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>TransactionID</th>\r\n                                            <th>Payment Method</th>\r\n                                            <th>Amount</th>\r\n                                            <th>Date</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <span class=\"text-truncate\">\r\n                                                    {{order.payment.transactionId}}\r\n                                                </span>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"text-truncate\">\r\n                                                    {{order.payment.method}}\r\n                                                </span>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"text-truncate\">\r\n                                                    {{order.payment.amount}}\r\n                                                </span>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"text-truncate\">\r\n                                                    {{order.payment.date | date}}\r\n                                                </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"section pb-48\">\r\n\r\n                                <div class=\"pb-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon class=\"m-0 mr-16\">local_shipping</mat-icon>\r\n                                    <div class=\"h2 secondary-text\">Shipping</div>\r\n                                </div>\r\n\r\n                                <table class=\"simple\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Tracking Code</th>\r\n                                            <th>Carrier</th>\r\n                                            <th>Weight</th>\r\n                                            <th>Fee</th>\r\n                                            <th>Date</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let shipping of order.shippingDetails\">\r\n                                            <td class=\"tracking-code\">\r\n                                                {{shipping.tracking}}\r\n                                            </td>\r\n                                            <td>\r\n                                                {{shipping.carrier}}\r\n                                            </td>\r\n                                            <td>\r\n                                                {{shipping.weight}}\r\n                                            </td>\r\n                                            <td>\r\n                                                {{shipping.fee}}\r\n                                            </td>\r\n                                            <td>\r\n                                                {{shipping.date}}\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Products\">\r\n                        <div class=\"products tab-content p-24\" fusePerfectScrollbar>\r\n                            <table class=\"simple\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>ID</th>\r\n                                        <th>Image</th>\r\n                                        <th>Name</th>\r\n                                        <th>Price</th>\r\n                                        <th>Quantity</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr class=\"product-row\"\r\n                                        *ngFor=\"let product of order.products\"\r\n                                        [routerLink]=\"'/apps/e-commerce/products/'+product.id+'/'+product.handle\">\r\n                                        <td class=\"w-64\">\r\n                                            {{product.id}}\r\n                                        </td>\r\n                                        <td class=\"w-80\">\r\n                                            <img class=\"product-image\" [src]=\"product.image\">\r\n                                        </td>\r\n                                        <td>\r\n                                            {{product.name}}\r\n                                        </td>\r\n                                        <td>\r\n                                            {{product.price}}\r\n                                        </td>\r\n                                        <td>\r\n                                            {{product.quantity}}\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Invoice\">\r\n\r\n                        <div class=\"invoice tab-content p-24\" fusePerfectScrollbar>\r\n\r\n                            <div id=\"invoice\" class=\"compact page-layout blank\" fxLayout=\"row\" fusePerfectScrollbar>\r\n\r\n                                <div class=\"invoice-container\">\r\n\r\n                                    <!-- INVOICE -->\r\n                                    <div class=\"card\">\r\n\r\n                                        <div class=\"header\">\r\n                                            <div class=\"invoice-date\">{{order.date}}</div>\r\n\r\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n                                                <div class=\"client\">\r\n                                                    <div class=\"invoice-number\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                                        <span class=\"title\">INVOICE</span>\r\n                                                        <span class=\"number\">{{order.reference}}</span>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"info\">\r\n                                                        <div class=\"title\">\r\n                                                            {{order.customer.firstName}}\r\n                                                            {{order.customer.lastName}}\r\n                                                        </div>\r\n                                                        <div class=\"address\">{{order.customer.invoiceAddress}}</div>\r\n                                                        <div class=\"phone\">{{order.customer.phone}}</div>\r\n                                                        <div class=\"email\">{{order.customer.email}}</div>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class=\"issuer mat-accent-bg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                                    <div class=\"logo\">\r\n                                                        <img src=\"assets/images/logos/fuse.svg\">\r\n                                                    </div>\r\n\r\n                                                    <div class=\"info\">\r\n                                                        <div class=\"title\">FUSE INC.</div>\r\n                                                        <div class=\"address\">2810 Country Club Road Cranford, NJ 07016</div>\r\n                                                        <div class=\"phone\">+66 123 455 87</div>\r\n                                                        <div class=\"email\">hello@fuseinc.com</div>\r\n                                                        <div class=\"website\">www.fuseinc.com</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"content\">\r\n\r\n                                            <table class=\"simple invoice-table\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>PRODUCT</th>\r\n                                                        <th class=\"text-right\">PRICE</th>\r\n                                                        <th class=\"text-right\">QUANTITY</th>\r\n                                                        <th class=\"text-right\">TOTAL</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let product of order.products\">\r\n                                                        <td>\r\n                                                            <div class=\"title\">\r\n                                                                {{product.name}}\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td class=\"text-right\">\r\n                                                            {{product.price | currency:'USD':'symbol'}}\r\n                                                        </td>\r\n                                                        <td class=\"text-right\">\r\n                                                            {{product.quantity}}\r\n                                                        </td>\r\n                                                        <td class=\"text-right\">\r\n                                                            {{product.total | currency:'USD':'symbol'}}\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n\r\n                                            <table class=\"simple invoice-table-footer\">\r\n                                                <tbody>\r\n                                                    <tr class=\"subtotal\">\r\n                                                        <td>SUBTOTAL</td>\r\n                                                        <td>{{order.subtotal | currency:'USD':'symbol'}}</td>\r\n                                                    </tr>\r\n                                                    <tr class=\"tax\">\r\n                                                        <td>TAX</td>\r\n                                                        <td>{{order.tax | currency:'USD':'symbol'}}</td>\r\n                                                    </tr>\r\n                                                    <tr class=\"discount\">\r\n                                                        <td>DISCOUNT</td>\r\n                                                        <td>-{{order.discount | currency:'USD':'symbol'}}</td>\r\n                                                    </tr>\r\n                                                    <tr class=\"total\">\r\n                                                        <td>TOTAL</td>\r\n                                                        <td>{{order.total | currency:'USD':'symbol'}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n\r\n                                        <div class=\"footer\">\r\n                                            <div class=\"note\">Please pay within 15 days. Thank you for your business.</div>\r\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                                                <div class=\"logo\">\r\n                                                    <img src=\"assets/images/logos/fuse.svg\">\r\n                                                </div>\r\n                                                <div class=\"small-note\">\r\n                                                    In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque\r\n                                                    scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit\r\n                                                    quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia.\r\n                                                    Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero\r\n                                                    tincidunt lacinia et eget eros.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- / INVOICE -->\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/order/order.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#order .header .subtitle {\n  margin: 6px 0 0 0; }\n#order .content .mat-tab-group,\n#order .content .mat-tab-body-wrapper,\n#order .content .tab-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  max-width: 100%; }\n#order .content .tab-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n#order .content .tab-content.products .product-row {\n    cursor: pointer; }\n#order .content .tab-content.invoice {\n    /* PRINT STYLES */ }\n#order .content .tab-content.invoice #invoice.compact {\n      padding: 0;\n      overflow: auto; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container {\n        padding: 16px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card {\n          width: 1020px;\n          min-width: 1020px;\n          max-width: 1020px;\n          padding: 64px 88px;\n          overflow: hidden;\n          background: #FFFFFF;\n          -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n                  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .invoice-date {\n            font-size: 14px;\n            color: rgba(0, 0, 0, 0.54);\n            margin-bottom: 32px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .invoice-number {\n            font-size: 18px;\n            padding-bottom: 2px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .invoice-number .title {\n              color: rgba(0, 0, 0, 0.54); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .invoice-number .number {\n              padding-left: 6px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .due-date {\n            font-size: 18px;\n            padding-bottom: 16px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .due-date .title {\n              color: rgba(0, 0, 0, 0.54); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .due-date .date {\n              padding-left: 6px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .info {\n            color: rgba(0, 0, 0, 0.54);\n            line-height: 22px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer {\n            margin-right: -88px;\n            padding-right: 66px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer .logo {\n              width: 96px;\n              padding: 0 8px;\n              border-right: 1px solid rgba(255, 255, 255, 0.7); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer .info {\n              padding: 16px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n            margin-top: 64px;\n            font-size: 15px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n              padding-left: 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n              padding-right: 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n              font-size: 16px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n              margin-top: 8px;\n              font-size: 12px;\n              color: rgba(0, 0, 0, 0.54);\n              max-width: 360px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n            margin: 32px 0 72px 0; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n              text-align: right;\n              font-size: 16px;\n              font-weight: 500;\n              color: rgba(0, 0, 0, 0.54);\n              border-bottom: none;\n              padding: 4px 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                text-align: left; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n              padding-bottom: 32px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n              padding: 24px 8px;\n              border-top: 1px solid rgba(0, 0, 0, 0.12);\n              font-size: 35px;\n              font-weight: 300;\n              color: black; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n            font-size: 15px;\n            font-weight: 500;\n            margin-bottom: 24px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo, #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n            -ms-flex: 0 1 auto; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n            width: 32px;\n            min-width: 32px;\n            margin-right: 24px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n            font-size: 12px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            line-height: 18px; }\n@media print {\n      #order .content .tab-content.invoice {\n        /* Invoice Specific Styles */ }\n        #order .content .tab-content.invoice #invoice.compact .invoice-container {\n          padding: 0; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card {\n            width: 100%;\n            min-width: 0;\n            background: none;\n            padding: 0;\n            -webkit-box-shadow: none;\n                    box-shadow: none; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .invoice-date {\n              margin-bottom: 16pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer {\n              padding-right: 0;\n              margin-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n              margin-top: 16pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th {\n                font-size: 10pt;\n                max-width: 60pt; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n                  padding-left: 0; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n                  padding-right: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n                padding-left: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n                padding-right: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n                font-size: 10pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n                margin-top: 4pt;\n                font-size: 9pt;\n                max-width: none; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n              margin: 16pt 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n                font-size: 13pt;\n                padding: 4pt 4pt; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                  text-align: left;\n                  padding-left: 0; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                  padding-right: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n                padding-bottom: 16pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n                padding: 16pt 4pt 0 4pt;\n                font-size: 16pt; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                  padding-left: 0; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                  padding-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n              font-size: 10pt;\n              margin-bottom: 8pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n              margin-right: 8pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n              font-size: 8pt;\n              line-height: normal; } }\n#order .content .mat-tab-body-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n#order .content .mat-tab-label {\n  height: 64px; }\n#order .content table {\n  table-layout: fixed; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseEcommerceOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_model__ = __webpack_require__("./src/app/main/content/apps/e-commerce/order/order.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_service__ = __webpack_require__("./src/app/main/content/apps/e-commerce/order/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_statuses__ = __webpack_require__("./src/app/main/content/apps/e-commerce/order/order-statuses.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var FuseEcommerceOrderComponent = /** @class */ (function () {
    function FuseEcommerceOrderComponent(orderService, formBuilder) {
        this.orderService = orderService;
        this.formBuilder = formBuilder;
        this.order = new __WEBPACK_IMPORTED_MODULE_9__order_model__["a" /* Order */]();
        this.orderStatuses = __WEBPACK_IMPORTED_MODULE_11__order_statuses__["a" /* orderStatuses */];
    }
    FuseEcommerceOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to update order on changes
        this.onOrderChanged =
            this.orderService.onOrderChanged
                .subscribe(function (order) {
                _this.order = new __WEBPACK_IMPORTED_MODULE_9__order_model__["a" /* Order */](order);
            });
        this.statusForm = this.formBuilder.group({
            newStatus: ['']
        });
    };
    FuseEcommerceOrderComponent.prototype.ngOnDestroy = function () {
        this.onOrderChanged.unsubscribe();
    };
    FuseEcommerceOrderComponent.prototype.updateStatus = function () {
        var newStatusId = Number.parseInt(this.statusForm.get('newStatus').value);
        if (!newStatusId) {
            return;
        }
        var newStatus = this.orderStatuses.find(function (status) {
            return status.id === newStatusId;
        });
        newStatus['date'] = new Date().toString();
        this.order.status.unshift(newStatus);
    };
    FuseEcommerceOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-e-commerce-order',
            template: __webpack_require__("./src/app/main/content/apps/e-commerce/order/order.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/e-commerce/order/order.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_8__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__order_service__["a" /* EcommerceOrderService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseEcommerceOrderComponent);
    return FuseEcommerceOrderComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/order/order.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Order = /** @class */ (function () {
    function Order(order) {
        order = order || {};
        this.id = order.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
        this.reference = order.reference || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
        this.subtotal = order.subtotal || 0;
        this.tax = order.tax || 0;
        this.discount = order.discount || 0;
        this.total = order.total || 0;
        this.date = order.date || '';
        this.customer = order.customer || {};
        this.products = order.products || [];
        this.status = order.status || [];
        this.payment = order.payment || {};
        this.shippingDetails = order.shippingDetails || [];
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/order/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcommerceOrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EcommerceOrderService = /** @class */ (function () {
    function EcommerceOrderService(http) {
        this.http = http;
        this.onOrderChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    EcommerceOrderService.prototype.resolve = function (route, state) {
        var _this = this;
        this.routeParams = route.params;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getOrder()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    EcommerceOrderService.prototype.getOrder = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/e-commerce-orders/' + _this.routeParams.id)
                .subscribe(function (response) {
                _this.order = response;
                _this.onOrderChanged.next(_this.order);
                resolve(response);
            }, reject);
        });
    };
    EcommerceOrderService.prototype.saveOrder = function (order) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/e-commerce-orders/' + order.id, order)
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    EcommerceOrderService.prototype.addOrder = function (order) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/e-commerce-orders/', order)
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    EcommerceOrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], EcommerceOrderService);
    return EcommerceOrderService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"orders\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header white-fg\"\r\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n            <!-- APP TITLE -->\r\n            <div class=\"logo\"\r\n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">shopping_basket</mat-icon>\r\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Orders</span>\r\n            </div>\r\n            <!-- / APP TITLE -->\r\n\r\n            <!-- SEARCH -->\r\n            <div class=\"search-input-wrapper ml-8 m-sm-0\"\r\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <label for=\"search\" class=\"mr-8\">\r\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\r\n                </label>\r\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\r\n                    <input id=\"search\" matInput #filter placeholder=\"Search\">\r\n                </mat-form-field>\r\n            </div>\r\n            <!-- / SEARCH -->\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card mat-white-bg\">\r\n\r\n            <mat-table class=\"orders-table\"\r\n                       #table [dataSource]=\"dataSource\"\r\n                       matSort\r\n                       [@animateStagger]=\"{value:'50'}\"\r\n                       fusePerfectScrollbar>\r\n\r\n                <!-- ID Column -->\r\n                <ng-container cdkColumnDef=\"id\">\r\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header>ID</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let order\">\r\n                        <p class=\"text-truncate\">{{order.id}}</p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Reference Column -->\r\n                <ng-container cdkColumnDef=\"reference\">\r\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Reference</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let order\" fxHide fxShow.gt-sm>\r\n                        <p class=\"text-truncate\">{{order.reference}}</p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container cdkColumnDef=\"customer\">\r\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header>Customer</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let order\">\r\n                        <p class=\"text-truncate\">\r\n                            {{order.customer.firstName}}\r\n                            {{order.customer.lastName}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Total Price Column -->\r\n                <ng-container cdkColumnDef=\"total\">\r\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-md>Total</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let order\" fxHide fxShow.gt-md>\r\n                        <p class=\"total-price text-truncate\">\r\n                            {{order.total | currency:'USD':'symbol'}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Payment Column -->\r\n                <ng-container cdkColumnDef=\"payment\">\r\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Payment</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let order\" fxHide fxShow.gt-sm>\r\n                        <p class=\"text-truncate\">\r\n                            {{order.payment.method}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container cdkColumnDef=\"status\">\r\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header >Status</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let order\">\r\n                        <p class=\"status text-truncate h6 p-4\" [ngClass]=\"order.status[0].color\">\r\n                            {{order.status[0].name}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container cdkColumnDef=\"date\">\r\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Date</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let order\" fxHide fxShow.gt-sm>\r\n                        <p class=\"text-truncate\">\r\n                            {{order.date}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n                <mat-row *cdkRowDef=\"let order; columns: displayedColumns;\"\r\n                         class=\"order\"\r\n                         matRipple\r\n                         [routerLink]=\"'/apps/e-commerce/orders/'+order.id\">\r\n                </mat-row>\r\n            </mat-table>\r\n\r\n            <mat-paginator #paginator\r\n                           [length]=\"dataSource.filteredData.length\"\r\n                           [pageIndex]=\"0\"\r\n                           [pageSize]=\"10\"\r\n                           [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n            </mat-paginator>\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n    </div>\r\n    <!-- / CENTER -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/orders/orders.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .header .search-input-wrapper {\n  max-width: 480px; }\n\n:host .mat-tab-group,\n:host .mat-tab-body-wrapper,\n:host .tab-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  max-width: 100%; }\n\n:host .orders-table {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  overflow: auto; }\n\n:host .orders-table .mat-header-row {\n    min-height: 64px; }\n\n:host .orders-table .order {\n    position: relative;\n    cursor: pointer;\n    height: 84px; }\n\n:host .orders-table .mat-cell {\n    min-width: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n:host .orders-table .mat-column-id {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 84px;\n            flex: 0 1 84px; }\n\n:host .orders-table .mat-column-image {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 84px;\n            flex: 0 1 84px; }\n\n:host .orders-table .mat-column-image .product-image {\n      width: 52px;\n      height: 52px;\n      border: 1px solid rgba(0, 0, 0, 0.12); }\n\n:host .orders-table .mat-column-buttons {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 80px;\n            flex: 0 1 80px; }\n\n:host .orders-table .quantity-indicator {\n    display: inline-block;\n    vertical-align: middle;\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    margin-right: 8px; }\n\n:host .orders-table .quantity-indicator + span {\n      display: inline-block;\n      vertical-align: middle; }\n\n:host .orders-table .active-icon {\n    border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseEcommerceOrdersComponent; });
/* unused harmony export FilesDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__orders_service__ = __webpack_require__("./src/app/main/content/apps/e-commerce/orders/orders.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var FuseEcommerceOrdersComponent = /** @class */ (function () {
    function FuseEcommerceOrdersComponent(ordersService) {
        this.ordersService = ordersService;
        this.displayedColumns = ['id', 'reference', 'customer', 'total', 'payment', 'status', 'date'];
    }
    FuseEcommerceOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new FilesDataSource(this.ordersService, this.paginator, this.sort);
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatPaginator */])
    ], FuseEcommerceOrdersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FuseEcommerceOrdersComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatSort */])
    ], FuseEcommerceOrdersComponent.prototype, "sort", void 0);
    FuseEcommerceOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-e-commerce-orders',
            template: __webpack_require__("./src/app/main/content/apps/e-commerce/orders/orders.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/e-commerce/orders/orders.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_11__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__orders_service__["a" /* EcommerceOrdersService */]])
    ], FuseEcommerceOrdersComponent);
    return FuseEcommerceOrdersComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    function FilesDataSource(ordersService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.ordersService = ordersService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        _this._filteredDataChange = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        _this.filteredData = _this.ordersService.orders;
        return _this;
    }
    Object.defineProperty(FilesDataSource.prototype, "filteredData", {
        get: function () {
            return this._filteredDataChange.value;
        },
        set: function (value) {
            this._filteredDataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilesDataSource.prototype, "filter", {
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    FilesDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.ordersService.onOrdersChanged,
            this._paginator.page,
            this._filterChange,
            this._sort.sortChange
        ];
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var data = _this.ordersService.orders.slice();
            data = _this.filterData(data);
            _this.filteredData = data.slice();
            data = _this.sortData(data);
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        });
    };
    FilesDataSource.prototype.filterData = function (data) {
        if (!this.filter) {
            return data;
        }
        return __WEBPACK_IMPORTED_MODULE_12__fuse_utils__["a" /* FuseUtils */].filterArrayByString(data, this.filter);
    };
    FilesDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'id':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'reference':
                    _b = [a.reference, b.reference], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'customer':
                    _c = [a.customer.firstName, b.customer.firstName], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'total':
                    _d = [a.total, b.total], propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'payment':
                    _e = [a.payment.method, b.payment.method], propertyA = _e[0], propertyB = _e[1];
                    break;
                case 'status':
                    _f = [a.status[0].name, b.status[0].name], propertyA = _f[0], propertyB = _f[1];
                    break;
                case 'date':
                    _g = [a.date, b.date], propertyA = _g[0], propertyB = _g[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
            var _a, _b, _c, _d, _e, _f, _g;
        });
    };
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/orders/orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcommerceOrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EcommerceOrdersService = /** @class */ (function () {
    function EcommerceOrdersService(http) {
        this.http = http;
        this.onOrdersChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    EcommerceOrdersService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getOrders()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    EcommerceOrdersService.prototype.getOrders = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/e-commerce-orders')
                .subscribe(function (response) {
                _this.orders = response;
                _this.onOrdersChanged.next(_this.orders);
                resolve(response);
            }, reject);
        });
    };
    EcommerceOrdersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], EcommerceOrdersService);
    return EcommerceOrdersService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"product\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header white-fg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n            <!-- APP TITLE -->\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <button class=\"mr-0 mr-sm-16\" mat-icon-button [routerLink]=\"'/apps/e-commerce/products'\">\r\n                    <mat-icon>arrow_back</mat-icon>\r\n                </button>\r\n\r\n                <div class=\"product-image mr-8 mr-sm-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\r\n                    <img *ngIf=\"product.images[0]\" [src]=\"product.images[0].url\">\r\n                    <img *ngIf=\"!product.images[0]\" [src]=\"'assets/images/ecommerce/product-image-placeholder.png'\">\r\n                </div>\r\n\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\r\n                     *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\r\n                    <div class=\"h2\" *ngIf=\"pageType ==='edit'\">\r\n                        {{product.name}}\r\n                    </div>\r\n                    <div class=\"h2\" *ngIf=\"pageType ==='new'\">\r\n                        New Product\r\n                    </div>\r\n                    <div class=\"subtitle secondary-text\">\r\n                        <span>Product Detail</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- / APP TITLE -->\r\n\r\n            <button mat-raised-button\r\n                    class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\r\n                    [disabled]=\"productForm.invalid\"\r\n                    *ngIf=\"pageType ==='new'\" (click)=\"addProduct()\">\r\n                <span>ADD</span>\r\n            </button>\r\n\r\n            <button mat-raised-button\r\n                    class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\r\n                    [disabled]=\"productForm.invalid || productForm.pristine\"\r\n                    *ngIf=\"pageType ==='edit'\" (click)=\"saveProduct()\">\r\n                <span>SAVE</span>\r\n            </button>\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card mat-white-bg\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <form name=\"productForm\" [formGroup]=\"productForm\" class=\"product w-100-p\" fxLayout=\"column\" fxFlex>\r\n\r\n                    <mat-tab-group>\r\n\r\n                        <mat-tab label=\"Basic Info\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"name\"\r\n                                           formControlName=\"name\"\r\n                                           placeholder=\"Product Name\"\r\n                                           required>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <textarea matInput\r\n                                              name=\"description\"\r\n                                              formControlName=\"description\"\r\n                                              placeholder=\"Product Description\"\r\n                                              rows=\"5\">\r\n                                    </textarea>\r\n                                </mat-form-field>\r\n\r\n                                <h3 class=\"mb-0\">Categories</h3>\r\n                                <mat-form-field class=\"w-100-p\" floatPlaceholder=\"never\">\r\n                                    <mat-chip-list matPrefix #categoryList\r\n                                                   name=\"categories\"\r\n                                                   formControlName=\"categories\">\r\n\r\n                                        <mat-chip *ngFor=\"let category of product.categories\"\r\n                                                  removable=\"true\" (removed)=\"product.removeCategory(category)\">\r\n                                            {{category}}\r\n                                            <mat-icon matChipRemove>cancel</mat-icon>\r\n                                        </mat-chip>\r\n                                    </mat-chip-list>\r\n                                    <input matInput\r\n                                           matChipInputAddOnBlur=\"true\"\r\n                                           (matChipInputTokenEnd)=\"product.addCategory($event)\"\r\n                                           placeholder=\"Add category...\"\r\n                                           [matChipInputFor]=\"categoryList\"/>\r\n                                </mat-form-field>\r\n\r\n                                <h3 class=\"mb-0\">Tags</h3>\r\n                                <mat-form-field class=\"w-100-p\" floatPlaceholder=\"never\">\r\n                                    <mat-chip-list matPrefix #tagList\r\n                                                   name=\"tags\"\r\n                                                   formControlName=\"tags\">\r\n\r\n                                        <mat-chip *ngFor=\"let tag of product.tags\"\r\n                                                  removable=\"true\" (removed)=\"product.removeTag(tag)\">\r\n                                            {{tag}}\r\n                                            <mat-icon matChipRemove>cancel</mat-icon>\r\n                                        </mat-chip>\r\n                                    </mat-chip-list>\r\n                                    <input matInput\r\n                                           matChipInputAddOnBlur=\"true\"\r\n                                           (matChipInputTokenEnd)=\"product.addTag($event)\"\r\n                                           placeholder=\"Add tag...\"\r\n                                           [matChipInputFor]=\"tagList\"/>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Product Images\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n\r\n                                    <div *ngIf=\"product.images.length === 0\"\r\n                                         class=\"product-image\" fxlayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                        <img class=\"media\" [src]=\"'assets/images/ecommerce/product-image-placeholder.png'\">\r\n                                    </div>\r\n\r\n                                    <div *ngFor=\"let image of product.images\">\r\n                                        <div *ngIf=\"product.images.length > 0\"\r\n                                             class=\"product-image\" fxlayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                            <img class=\"media\" [src]=\"image.url\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Pricing\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"priceTaxExcl\"\r\n                                           formControlName=\"priceTaxExcl\"\r\n                                           placeholder=\"Tax Excluded Price\" type=\"number\">\r\n                                    <span matPrefix>$&nbsp;</span>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"priceTaxIncl\"\r\n                                           formControlName=\"priceTaxIncl\"\r\n                                           placeholder=\"Tax Included Price\" type=\"number\">\r\n                                    <span matPrefix>$&nbsp;</span>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"taxRate\"\r\n                                           formControlName=\"taxRate\"\r\n                                           placeholder=\"Tax Rate\" type=\"number\">\r\n                                    <span matPrefix>&#37;</span>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"comparedPrice\"\r\n                                           formControlName=\"comparedPrice\"\r\n                                           placeholder=\"Compared Price\" type=\"number\">\r\n                                    <span matPrefix>$&nbsp;</span>\r\n                                    <mat-hint align=\"start\">Add a compare price to show next to the real price</mat-hint>\r\n                                </mat-form-field>\r\n\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Inventory\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"sku\"\r\n                                           formControlName=\"sku\"\r\n                                           placeholder=\"SKU\">\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"quantity\"\r\n                                           formControlName=\"quantity\"\r\n                                           placeholder=\"Quantity\" type=\"number\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Shipping\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar fxLayout=\"column\">\r\n\r\n                                <div class=\"py-16\" fxLayout=\"row\">\r\n                                    <mat-form-field fxFlex>\r\n                                        <input matInput\r\n                                               name=\"Width\"\r\n                                               formControlName=\"width\"\r\n                                               placeholder=\"Width\">\r\n                                    </mat-form-field>\r\n                                    <mat-form-field fxFlex>\r\n                                        <input matInput\r\n                                               name=\"Height\"\r\n                                               formControlName=\"height\"\r\n                                               placeholder=\"Height\">\r\n                                    </mat-form-field>\r\n                                    <mat-form-field fxFlex>\r\n                                        <input matInput\r\n                                               name=\"Depth\"\r\n                                               formControlName=\"depth\"\r\n                                               placeholder=\"Depth\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"Weight\"\r\n                                           formControlName=\"weight\"\r\n                                           placeholder=\"Weight\">\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"extraShippingFee\"\r\n                                           formControlName=\"extraShippingFee\"\r\n                                           placeholder=\"Extra Shipping Fee\" type=\"number\">\r\n                                    <span matPrefix>$&nbsp;</span>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                    </mat-tab-group>\r\n                </form>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/product/product.component.scss":
/***/ (function(module, exports) {

module.exports = "#product .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n  #product .header .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n  #product .header .subtitle {\n  margin: 6px 0 0 0; }\n  #product .content .mat-tab-group,\n#product .content .mat-tab-body-wrapper,\n#product .content .tab-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  max-width: 100%; }\n  #product .content .mat-tab-body-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  #product .content .mat-tab-label {\n  height: 64px; }\n  #product .content .product-image {\n  overflow: hidden;\n  width: 128px;\n  height: 128px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n  #product .content .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseEcommerceProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_model__ = __webpack_require__("./src/app/main/content/apps/e-commerce/product/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_service__ = __webpack_require__("./src/app/main/content/apps/e-commerce/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var FuseEcommerceProductComponent = /** @class */ (function () {
    function FuseEcommerceProductComponent(productService, formBuilder, snackBar, location) {
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.location = location;
        this.product = new __WEBPACK_IMPORTED_MODULE_11__product_model__["a" /* Product */]();
    }
    FuseEcommerceProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to update product on changes
        this.onProductChanged =
            this.productService.onProductChanged
                .subscribe(function (product) {
                if (product) {
                    _this.product = new __WEBPACK_IMPORTED_MODULE_11__product_model__["a" /* Product */](product);
                    _this.pageType = 'edit';
                }
                else {
                    _this.pageType = 'new';
                    _this.product = new __WEBPACK_IMPORTED_MODULE_11__product_model__["a" /* Product */]();
                }
                _this.productForm = _this.createProductForm();
            });
    };
    FuseEcommerceProductComponent.prototype.ngOnDestroy = function () {
        this.onProductChanged.unsubscribe();
    };
    FuseEcommerceProductComponent.prototype.createProductForm = function () {
        return this.formBuilder.group({
            id: [this.product.id],
            name: [this.product.name],
            handle: [this.product.handle],
            description: [this.product.description],
            categories: [this.product.categories],
            tags: [this.product.tags],
            images: [this.product.images],
            priceTaxExcl: [this.product.priceTaxExcl],
            priceTaxIncl: [this.product.priceTaxIncl],
            taxRate: [this.product.taxRate],
            comparedPrice: [this.product.comparedPrice],
            quantity: [this.product.quantity],
            sku: [this.product.sku],
            width: [this.product.width],
            height: [this.product.height],
            depth: [this.product.depth],
            weight: [this.product.weight],
            extraShippingFee: [this.product.extraShippingFee],
            active: [this.product.active]
        });
    };
    FuseEcommerceProductComponent.prototype.saveProduct = function () {
        var _this = this;
        var data = this.productForm.getRawValue();
        data.handle = __WEBPACK_IMPORTED_MODULE_10__fuse_utils__["a" /* FuseUtils */].handleize(data.name);
        this.productService.saveProduct(data)
            .then(function () {
            // Trigger the subscription with new data
            _this.productService.onProductChanged.next(data);
            // Show the success message
            _this.snackBar.open('Product saved', 'OK', {
                verticalPosition: 'top',
                duration: 2000
            });
        });
    };
    FuseEcommerceProductComponent.prototype.addProduct = function () {
        var _this = this;
        var data = this.productForm.getRawValue();
        data.handle = __WEBPACK_IMPORTED_MODULE_10__fuse_utils__["a" /* FuseUtils */].handleize(data.name);
        this.productService.addProduct(data)
            .then(function () {
            // Trigger the subscription with new data
            _this.productService.onProductChanged.next(data);
            // Show the success message
            _this.snackBar.open('Product added', 'OK', {
                verticalPosition: 'top',
                duration: 2000
            });
            // Change the location with new one
            _this.location.go('apps/e-commerce/products/' + _this.product.id + '/' + _this.product.handle);
        });
    };
    FuseEcommerceProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-e-commerce-product',
            template: __webpack_require__("./src/app/main/content/apps/e-commerce/product/product.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/e-commerce/product/product.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_9__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__product_service__["a" /* EcommerceProductService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_13__angular_common__["Location"]])
    ], FuseEcommerceProductComponent);
    return FuseEcommerceProductComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/product/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Product = /** @class */ (function () {
    function Product(product) {
        product = product || {};
        this.id = product.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
        this.name = product.name || '';
        this.handle = product.handle || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].handleize(this.name);
        this.description = product.description || '';
        this.categories = product.categories || [];
        this.tags = product.tags || [];
        this.images = product.images || [];
        this.priceTaxExcl = product.priceTaxExcl || 0;
        this.priceTaxIncl = product.priceTaxIncl || 0;
        this.taxRate = product.taxRate || 0;
        this.comparedPrice = product.comparedPrice || 0;
        this.quantity = product.quantity || 0;
        this.sku = product.sku || 0;
        this.width = product.width || 0;
        this.height = product.height || 0;
        this.depth = product.depth || 0;
        this.weight = product.weight || 0;
        this.extraShippingFee = product.extraShippingFee || 0;
        this.active = product.active || true;
    }
    Product.prototype.addCategory = function (event) {
        var input = event.input;
        var value = event.value;
        // Add category
        if (value) {
            this.categories.push(value);
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    Product.prototype.removeCategory = function (category) {
        var index = this.categories.indexOf(category);
        if (index >= 0) {
            this.categories.splice(index, 1);
        }
    };
    Product.prototype.addTag = function (event) {
        var input = event.input;
        var value = event.value;
        // Add tag
        if (value) {
            this.tags.push(value);
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    Product.prototype.removeTag = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    return Product;
}());



/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcommerceProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EcommerceProductService = /** @class */ (function () {
    function EcommerceProductService(http) {
        this.http = http;
        this.onProductChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    EcommerceProductService.prototype.resolve = function (route, state) {
        var _this = this;
        this.routeParams = route.params;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getProduct()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    EcommerceProductService.prototype.getProduct = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.routeParams.id === 'new') {
                _this.onProductChanged.next(false);
                resolve(false);
            }
            else {
                _this.http.get('api/e-commerce-products/' + _this.routeParams.id)
                    .subscribe(function (response) {
                    _this.product = response;
                    _this.onProductChanged.next(_this.product);
                    resolve(response);
                }, reject);
            }
        });
    };
    EcommerceProductService.prototype.saveProduct = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/e-commerce-products/' + product.id, product)
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    EcommerceProductService.prototype.addProduct = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/e-commerce-products/', product)
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    EcommerceProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], EcommerceProductService);
    return EcommerceProductService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"products\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header white-fg\"\r\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n            <!-- APP TITLE -->\r\n            <div class=\"logo my-12 m-sm-0\"\r\n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">shopping_basket</mat-icon>\r\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Products</span>\r\n            </div>\r\n            <!-- / APP TITLE -->\r\n\r\n            <!-- SEARCH -->\r\n            <div class=\"search-input-wrapper mx-12 m-md-0\"\r\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <label for=\"search\" class=\"mr-8\">\r\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\r\n                </label>\r\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\r\n                    <input id=\"search\" matInput #filter placeholder=\"Search\">\r\n                </mat-form-field>\r\n            </div>\r\n            <!-- / SEARCH -->\r\n\r\n            <button mat-raised-button\r\n                    [routerLink]=\"'/apps/e-commerce/products/new'\"\r\n                    class=\"add-product-button mat-white-bg my-12 mt-sm-0\">\r\n                <span>ADD NEW PRODUCT</span>\r\n            </button>\r\n\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card mat-white-bg\">\r\n\r\n            <mat-table class=\"products-table\"\r\n                       #table [dataSource]=\"dataSource\"\r\n                       matSort\r\n                       [@animateStagger]=\"{value:'50'}\"\r\n                       fusePerfectScrollbar>\r\n\r\n                <!-- ID Column -->\r\n                <ng-container cdkColumnDef=\"id\">\r\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header>ID</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let product\">\r\n                        <p class=\"text-truncate\">{{product.id}}</p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Image Column -->\r\n                <ng-container cdkColumnDef=\"image\">\r\n                    <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let product\">\r\n                        <img class=\"product-image\"\r\n                             *ngIf=\"product.images[0]\" [alt]=\"product.name\"\r\n                             [src]=\"product.images[0].url\"/>\r\n                        <img *ngIf=\"!product.images[0]\" [src]=\"'assets/images/ecommerce/product-image-placeholder.png'\">\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container cdkColumnDef=\"name\">\r\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header>Name</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let product\">\r\n                        <p class=\"text-truncate\">{{product.name}}</p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Category Column -->\r\n                <ng-container cdkColumnDef=\"category\">\r\n                    <mat-header-cell *cdkHeaderCellDef fxHide mat-sort-header fxShow.gt-md>Category</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let product\" fxHide fxShow.gt-md>\r\n                        <p class=\"category text-truncate\">\r\n                            {{product.categories[0]}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Price Column -->\r\n                <ng-container cdkColumnDef=\"price\">\r\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Price</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let product\" fxHide fxShow.gt-xs>\r\n                        <p class=\"price text-truncate\">\r\n                            {{product.priceTaxIncl | currency:'USD':'symbol'}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Quantity Column -->\r\n                <ng-container cdkColumnDef=\"quantity\">\r\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Quantity</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let product\" fxHide fxShow.gt-sm>\r\n\r\n                        <span class=\"quantity-indicator text-truncate\"\r\n                              [ngClass]=\"{'mat-red-500-bg':product.quantity <= 5, 'mat-amber-500-bg':product.quantity > 5 && product.quantity <= 25,'mat-green-600-bg':product.quantity > 25}\">\r\n                        </span>\r\n                        <span>\r\n                            {{product.quantity}}\r\n                        </span>\r\n\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Active Column -->\r\n                <ng-container cdkColumnDef=\"active\">\r\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Active</mat-header-cell>\r\n                    <mat-cell *cdkCellDef=\"let product\" fxHide fxShow.gt-xs>\r\n                        <mat-icon *ngIf=\"product.active\" class=\"active-icon mat-green-600-bg s-16\">check</mat-icon>\r\n                        <mat-icon *ngIf=\"!product.active\" class=\"active-icon mat-red-500-bg s-16\">close</mat-icon>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n                <mat-row *cdkRowDef=\"let product; columns: displayedColumns;\"\r\n                         class=\"product\"\r\n                         matRipple\r\n                         [routerLink]=\"'/apps/e-commerce/products/'+product.id+'/'+product.handle\">\r\n                </mat-row>\r\n\r\n            </mat-table>\r\n\r\n            <mat-paginator #paginator\r\n                           [length]=\"dataSource.filteredData.length\"\r\n                           [pageIndex]=\"0\"\r\n                           [pageSize]=\"10\"\r\n                           [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n            </mat-paginator>\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n    </div>\r\n    <!-- / CENTER -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/products/products.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .header .search-input-wrapper {\n  max-width: 480px; }\n@media (max-width: 599px) {\n  :host .header {\n    height: 176px !important;\n    min-height: 176px !important;\n    max-height: 176px !important; } }\n@media (max-width: 599px) {\n  :host .top-bg {\n    height: 240px; } }\n:host .products-table {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  overflow: auto; }\n:host .products-table .mat-header-row {\n    min-height: 64px; }\n:host .products-table .product {\n    position: relative;\n    cursor: pointer;\n    height: 84px; }\n:host .products-table .mat-cell {\n    min-width: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n:host .products-table .mat-column-id {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 84px;\n            flex: 0 1 84px; }\n:host .products-table .mat-column-image {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 84px;\n            flex: 0 1 84px; }\n:host .products-table .mat-column-image .product-image {\n      width: 52px;\n      height: 52px;\n      border: 1px solid rgba(0, 0, 0, 0.12); }\n:host .products-table .mat-column-buttons {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 80px;\n            flex: 0 1 80px; }\n:host .products-table .quantity-indicator {\n    display: inline-block;\n    vertical-align: middle;\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    margin-right: 8px; }\n:host .products-table .quantity-indicator + span {\n      display: inline-block;\n      vertical-align: middle; }\n:host .products-table .active-icon {\n    border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseEcommerceProductsComponent; });
/* unused harmony export FilesDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_service__ = __webpack_require__("./src/app/main/content/apps/e-commerce/products/products.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var FuseEcommerceProductsComponent = /** @class */ (function () {
    function FuseEcommerceProductsComponent(productsService) {
        this.productsService = productsService;
        this.displayedColumns = ['id', 'image', 'name', 'category', 'price', 'quantity', 'active'];
    }
    FuseEcommerceProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new FilesDataSource(this.productsService, this.paginator, this.sort);
        __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatPaginator */])
    ], FuseEcommerceProductsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FuseEcommerceProductsComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatSort */])
    ], FuseEcommerceProductsComponent.prototype, "sort", void 0);
    FuseEcommerceProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-e-commerce-products',
            template: __webpack_require__("./src/app/main/content/apps/e-commerce/products/products.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/e-commerce/products/products.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_11__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__products_service__["a" /* EcommerceProductsService */]])
    ], FuseEcommerceProductsComponent);
    return FuseEcommerceProductsComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    function FilesDataSource(productsService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.productsService = productsService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        _this._filteredDataChange = new __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        _this.filteredData = _this.productsService.products;
        return _this;
    }
    Object.defineProperty(FilesDataSource.prototype, "filteredData", {
        get: function () {
            return this._filteredDataChange.value;
        },
        set: function (value) {
            this._filteredDataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilesDataSource.prototype, "filter", {
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    FilesDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.productsService.onProductsChanged,
            this._paginator.page,
            this._filterChange,
            this._sort.sortChange
        ];
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var data = _this.productsService.products.slice();
            data = _this.filterData(data);
            _this.filteredData = data.slice();
            data = _this.sortData(data);
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        });
    };
    FilesDataSource.prototype.filterData = function (data) {
        if (!this.filter) {
            return data;
        }
        return __WEBPACK_IMPORTED_MODULE_12__fuse_utils__["a" /* FuseUtils */].filterArrayByString(data, this.filter);
    };
    FilesDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'id':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'name':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'categories':
                    _c = [a.categories[0], b.categories[0]], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'price':
                    _d = [a.priceTaxIncl, b.priceTaxIncl], propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'quantity':
                    _e = [a.quantity, b.quantity], propertyA = _e[0], propertyB = _e[1];
                    break;
                case 'active':
                    _f = [a.active, b.active], propertyA = _f[0], propertyB = _f[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
            var _a, _b, _c, _d, _e, _f;
        });
    };
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/main/content/apps/e-commerce/products/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcommerceProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EcommerceProductsService = /** @class */ (function () {
    function EcommerceProductsService(http) {
        this.http = http;
        this.onProductsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    EcommerceProductsService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getProducts()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    EcommerceProductsService.prototype.getProducts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/e-commerce-products')
                .subscribe(function (response) {
                _this.products = response;
                _this.onProductsChanged.next(_this.products);
                resolve(response);
            }, reject);
        });
    };
    EcommerceProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], EcommerceProductsService);
    return EcommerceProductsService;
}());



/***/ })

});
//# sourceMappingURL=e-commerce.module.chunk.js.map