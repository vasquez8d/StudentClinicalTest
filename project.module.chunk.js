webpackJsonp(["project.module"],{

/***/ "./src/app/main/content/apps/dashboards/analytics/analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsDashboardService; });
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


var AnalyticsDashboardService = /** @class */ (function () {
    function AnalyticsDashboardService(http) {
        this.http = http;
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    AnalyticsDashboardService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getWidgets()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    AnalyticsDashboardService.prototype.getWidgets = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/analytics-dashboard-widgets')
                .subscribe(function (response) {
                _this.widgets = response;
                resolve(response);
            }, reject);
        });
    };
    AnalyticsDashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AnalyticsDashboardService);
    return AnalyticsDashboardService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard-project\" class=\"page-layout simple right-sidenav\" fxLayout=\"row\">\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\" fusePerfectScrollbar>\r\n\r\n            <!-- HEADER -->\r\n            <div class=\"header mat-accent-bg p-24 pb-0\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n\r\n                    <span style=\"text-transform: capitalize;\" class=\"mat-display-1 mb-0 welcome-message\" *fuseIfOnDom\r\n                          [@animate]=\"{value:'*',params:{x:'50px'}}\">Bienvenido, {{user.user_pri_nom}}\r\n                    </span>\r\n\r\n                    <button mat-icon-button fuseMatSidenavToggler=\"dashboards-right-sidenav\" fxHide.gt-md>\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\">\r\n                    <div class=\"selected-project\">Student Clinical Medic</div>\r\n                    <!-- <button mat-icon-button class=\"project-selector\" [matMenuTriggerFor]=\"projectsMenu\"\r\n                            aria-label=\"Select project\">\r\n                        <mat-icon>more_horiz</mat-icon>\r\n                    </button>\r\n\r\n                    <mat-menu #projectsMenu=\"matMenu\">\r\n                        <button mat-menu-item *ngFor=\"let project of projects\" (click)=\"selectedProject = project\">\r\n                            <span>{{project.name}}</span>\r\n                        </button>\r\n                    </mat-menu> -->\r\n                </div>\r\n            </div>\r\n            <!-- / HEADER -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group dynamicHeight>\r\n\r\n                    <mat-tab label=\"Cursos\">\r\n\r\n                        <div class=\"widget-group grey-100-bg p-12\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\r\n                             [@animateStagger]=\"{value:'50'}\">\r\n\r\n                            <!-- WIDGET 1 -->\r\n                            <!-- <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                         fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\r\n                                         fxLayoutAlign=\"space-between center\">\r\n                                        <mat-form-field>\r\n                                            <mat-select class=\"simplified font-size-16\"\r\n                                                        [(ngModel)]=\"widgets.widget1.currentRange\"\r\n                                                        aria-label=\"Change range\">\r\n                                                <mat-option *ngFor=\"let range of widgets.widget1.ranges | keys\"\r\n                                                            [value]=\"range.key\">\r\n                                                    {{range.value}}\r\n                                                </mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                        <button mat-icon-button fuseWidgetToggle aria-label=\"more\">\r\n                                            <mat-icon>more_vert</mat-icon>\r\n                                        </button>\r\n                                    </div>\r\n\r\n                                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                        <div class=\"light-blue-fg font-size-72 line-height-72\">\r\n                                            {{widgets.widget1.data.count[widgets.widget1.currentRange]}}\r\n                                        </div>\r\n                                        <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget1.data.label}}\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <span class=\"h4 secondary-text text-truncate\">\r\n                                            {{widgets.widget1.data.extra.label}}:\r\n                                        </span>\r\n                                        <span class=\"h4 ml-8\">\r\n                                            {{widgets.widget1.data.extra.count[widgets.widget1.currentRange]}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                            aria-label=\"Flip widget\">\r\n                                        <mat-icon class=\"s-16\">close</mat-icon>\r\n                                    </button>\r\n\r\n                                    <div>\r\n                                        {{widgets.widget1.detail}}\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </fuse-widget> -->\r\n                            <!-- / WIDGET 1 -->\r\n\r\n                            <!-- WIDGET 2 -->\r\n\r\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                         fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n                                <!-- Front -->\r\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\r\n                                         fxLayoutAlign=\"space-between center\">\r\n                                        <div class=\"h3\">Curso 1</div>\r\n\r\n                                        <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                                aria-label=\"more\">\r\n                                            <mat-icon>more_vert</mat-icon>\r\n                                        </button>\r\n                                    </div>\r\n\r\n                                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                        <div class=\"red-fg font-size-72 line-height-72\">\r\n                                            14\r\n                                        </div>\r\n                                        <div class=\"h3 secondary-text font-weight-500\">Clases\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <span class=\"h4 secondary-text text-truncate\">\r\n                                            Clases completadas:\r\n                                        </span>\r\n                                        <span class=\"h4 ml-8\">7</span>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- / Front -->\r\n\r\n                                <!-- Back -->\r\n                                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                            aria-label=\"Flip widget\">\r\n                                        <mat-icon class=\"s-16\">close</mat-icon>\r\n                                    </button>\r\n\r\n                                    <div>\r\n                                        Resumen del curso.\r\n                                    </div>\r\n                                </div>\r\n                                <!-- / Back -->\r\n\r\n                            </fuse-widget>\r\n                            <!-- / WIDGET 2 -->\r\n\r\n                            <!-- WIDGET 2 -->\r\n                            \r\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n                                <!-- Front -->\r\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                        <div class=\"h3\">Curso 2</div>\r\n                            \r\n                                        <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\" aria-label=\"more\">\r\n                                            <mat-icon>more_vert</mat-icon>\r\n                                        </button>\r\n                                    </div>\r\n                            \r\n                                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                        <div class=\"red-fg font-size-72 line-height-72\">\r\n                                            18\r\n                                        </div>\r\n                                        <div class=\"h3 secondary-text font-weight-500\">Clases\r\n                                        </div>\r\n                                    </div>\r\n                            \r\n                                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <span class=\"h4 secondary-text text-truncate\">\r\n                                            Clases completadas:\r\n                                        </span>\r\n                                        <span class=\"h4 ml-8\">5</span>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- / Front -->\r\n                            \r\n                                <!-- Back -->\r\n                                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\" aria-label=\"Flip widget\">\r\n                                        <mat-icon class=\"s-16\">close</mat-icon>\r\n                                    </button>\r\n                            \r\n                                    <div>\r\n                                        Resumen del curso.\r\n                                    </div>\r\n                                </div>\r\n                                <!-- / Back -->\r\n                            \r\n                            </fuse-widget>\r\n                            <!-- / WIDGET 2 -->\r\n\r\n                            <!-- WIDGET 2 -->\r\n\r\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                         fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n                                <!-- Front -->\r\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\r\n                                         fxLayoutAlign=\"space-between center\">\r\n                                        <div class=\"h3\">Curso 3</div>\r\n\r\n                                        <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                                aria-label=\"more\">\r\n                                            <mat-icon>more_vert</mat-icon>\r\n                                        </button>\r\n                                    </div>\r\n\r\n                                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                        <div class=\"red-fg font-size-72 line-height-72\">\r\n                                            14\r\n                                        </div>\r\n                                        <div class=\"h3 secondary-text font-weight-500\">Clases\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <span class=\"h4 secondary-text text-truncate\">\r\n                                            Clases completadas:\r\n                                        </span>\r\n                                        <span class=\"h4 ml-8\">7</span>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- / Front -->\r\n\r\n                                <!-- Back -->\r\n                                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                            aria-label=\"Flip widget\">\r\n                                        <mat-icon class=\"s-16\">close</mat-icon>\r\n                                    </button>\r\n\r\n                                    <div>\r\n                                        Resumen del curso.\r\n                                    </div>\r\n                                </div>\r\n                                <!-- / Back -->\r\n\r\n                            </fuse-widget>\r\n                            <!-- / WIDGET 2 -->\r\n\r\n                            <!-- WIDGET 2 -->\r\n                            \r\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n                                <!-- Front -->\r\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                        <div class=\"h3\">Curso 4</div>\r\n                            \r\n                                        <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\" aria-label=\"more\">\r\n                                            <mat-icon>more_vert</mat-icon>\r\n                                        </button>\r\n                                    </div>\r\n                            \r\n                                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                        <div class=\"red-fg font-size-72 line-height-72\">\r\n                                            18\r\n                                        </div>\r\n                                        <div class=\"h3 secondary-text font-weight-500\">Clases\r\n                                        </div>\r\n                                    </div>\r\n                            \r\n                                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <span class=\"h4 secondary-text text-truncate\">\r\n                                            Clases completadas:\r\n                                        </span>\r\n                                        <span class=\"h4 ml-8\">5</span>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- / Front -->\r\n                            \r\n                                <!-- Back -->\r\n                                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\" aria-label=\"Flip widget\">\r\n                                        <mat-icon class=\"s-16\">close</mat-icon>\r\n                                    </button>\r\n                            \r\n                                    <div>\r\n                                        Resumen del curso.\r\n                                    </div>\r\n                                </div>\r\n                                <!-- / Back -->\r\n                            \r\n                            </fuse-widget>\r\n                            <!-- / WIDGET 2 -->\r\n\r\n                            <!-- WIDGET 6 -->\r\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                         fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                                <!-- Front -->\r\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                                    <div class=\"px-16 py-8 border-bottom\" fxLayout=\"row\"\r\n                                         fxLayoutAlign=\"space-between center\">\r\n                                        <div class=\"h3\">Distribución de cursos</div>\r\n                                        <mat-form-field>\r\n                                            <mat-select class=\"simplified\" [(ngModel)]=\"widget6.currentRange\"\r\n                                                        aria-label=\"Change range\">\r\n                                                <mat-option *ngFor=\"let range of widgets.widget6.ranges | keys\"\r\n                                                            [value]=\"range.key\">\r\n                                                    {{range.value}}\r\n                                                </mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n\r\n                                    <div class=\"h-400\">\r\n                                        <ngx-charts-pie-chart\r\n                                            *fuseIfOnDom\r\n                                            [scheme]=\"widget6.scheme\"\r\n                                            [results]=\"widgets.widget6.mainChart[widget6.currentRange]\"\r\n                                            [legend]=\"widget6.showLegend\"\r\n                                            [explodeSlices]=\"widget6.explodeSlices\"\r\n                                            [labels]=\"widget6.labels\"\r\n                                            [doughnut]=\"widget6.doughnut\"\r\n                                            [gradient]=\"widget6.gradient\"\r\n                                            (select)=\"widget6.onSelect($event)\">\r\n                                        </ngx-charts-pie-chart>\r\n                                    </div>\r\n\r\n                                    <div class=\"py-8 mh-16 border-top\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n\r\n                                        <div class=\"py-8 border-right\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n                                             fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n                                            <span class=\"mat-display-1 mb-0\">\r\n                                                {{widgets.widget6.footerLeft.count[widget6.currentRange]}}\r\n                                            </span>\r\n                                            <span class=\"h4\">Cursos matriculados</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"py-8\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"100\"\r\n                                             fxFlex.gt-sm=\"50\">\r\n                                            <span class=\"mat-display-1 mb-0\">\r\n                                                {{widgets.widget6.footerRight.count[widget6.currentRange]}}\r\n                                            </span>\r\n                                            <span class=\"h4\">Cursos finalizados</span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <!-- / Front -->\r\n\r\n                            </fuse-widget>\r\n                            <!-- / WIDGET 6 -->\r\n\r\n                            <!-- WIDGET 7 -->\r\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                         fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                                <!-- Front -->\r\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                                    <div class=\"px-16 py-8 border-bottom\" fxLayout=\"row\"\r\n                                         fxLayoutAlign=\"space-between center\">\r\n                                        <div class=\"h3\">Últimos cursos finalizados</div>\r\n                                        <mat-form-field>\r\n                                            <mat-select class=\"simplified\" [(ngModel)]=\"widget7.currentRange\"\r\n                                                        aria-label=\"Change range\">\r\n                                                <mat-option *ngFor=\"let range of widgets.widget7.ranges | keys\"\r\n                                                            [value]=\"range.key\">\r\n                                                    {{range.value}}\r\n                                                </mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n\r\n                                    <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\r\n                                         *ngFor=\"let event of widgets.widget7.schedule[widget7.currentRange]\">\r\n                                        <div>\r\n                                            <div class=\"h3\">{{event.title}}</div>\r\n                                            <div>\r\n                                                <span class=\"secondary-text\">Calificación: 10</span>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <button mat-icon-button aria-label=\"More information\">\r\n                                            <mat-icon>more_vert</mat-icon>\r\n                                        </button>\r\n\r\n                                        <!-- <mat-menu #moreMenu=\"matMenu\">\r\n                                            <button mat-menu-item aria-label=\"Flip widget\">\r\n                                                Details\r\n                                            </button>\r\n                                        </mat-menu> -->\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <!-- / Front -->\r\n\r\n                            </fuse-widget>\r\n                            <!-- / WIDGET 7 -->\r\n\r\n                        </div>\r\n                        <!-- / WIDGET GROUP -->\r\n\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Prácticas\">\r\n                        <div class=\"widget-group grey-100-bg\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\r\n                             [@animateStagger]=\"{value:'50'}\">\r\n\r\n                            <!-- <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                         fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                    <div class=\"h3 px-16 py-24\">\r\n                                        {{widgets.widget8.title}}\r\n                                    </div>\r\n\r\n                                    <mat-divider></mat-divider>\r\n\r\n                                    <div class=\"h-400\">\r\n                                        <ngx-charts-pie-chart\r\n                                            *fuseIfOnDom\r\n                                            [scheme]=\"widget8.scheme\"\r\n                                            [results]=\"widgets.widget8.mainChart\"\r\n                                            [legend]=\"widget8.legend\"\r\n                                            [explodeSlices]=\"widget8.explodeSlices\"\r\n                                            [labels]=\"widget8.labels\"\r\n                                            [doughnut]=\"widget8.doughnut\"\r\n                                            [gradient]=\"widget8.gradient\"\r\n                                            (select)=\"widget8.onSelect($event)\">\r\n                                        </ngx-charts-pie-chart>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                            </fuse-widget>\r\n\r\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                         fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                    <div class=\"px-16 py-12 border-bottom\" fxLayout=\"row\"\r\n                                         fxLayoutAlign=\"space-between center\">\r\n                                        <div class=\"h3\">{{widgets.widget9.title}}</div>\r\n                                        <mat-form-field>\r\n                                            <mat-select [(ngModel)]=\"widget9.currentRange\" aria-label=\"Change range\">\r\n                                                <mat-option *ngFor=\"let range of widgets.widget9.ranges | keys\"\r\n                                                            [value]=\"range.key\">\r\n                                                    {{range.value}}\r\n                                                </mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n\r\n                                    <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                                         fxLayout.gt-xs=\"row\"\r\n                                         fxLayoutAlign.gt-xs=\"space-between end\">\r\n                                        <div fxFlex=\"0 1 auto\">\r\n                                            <div class=\"h4 secondary-text\">{{widgets.widget9.weeklySpent.title}}</div>\r\n                                            <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\r\n                                                <span class=\"secondary-text\">$</span>\r\n                                                <span>{{widgets.widget9.weeklySpent.count[widget9.currentRange]}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"h-52\" fxFlex>\r\n                                            <ngx-charts-area-chart\r\n                                                *fuseIfOnDom\r\n                                                [results]=\"widgets.widget9.weeklySpent.chart[widget9.currentRange]\"\r\n                                                [scheme]=\"widget9.scheme\"\r\n                                                [gradient]=\"widget9.gradient\"\r\n                                                [xAxis]=\"widget9.xAxis\"\r\n                                                [yAxis]=\"widget9.yAxis\"\r\n                                                [legend]=\"widget9.legend\"\r\n                                                [showXAxisLabel]=\"widget9.showXAxisLabel\"\r\n                                                [showYAxisLabel]=\"widget9.showYAxisLabel\"\r\n                                                [xAxisLabel]=\"widget9.xAxisLabel\"\r\n                                                [yAxisLabel]=\"widget9.yAxisLabel\"\r\n                                                [curve]=\"widget9.curve\">\r\n                                            </ngx-charts-area-chart>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                                         fxLayout.gt-xs=\"row\"\r\n                                         fxLayoutAlign.gt-xs=\"space-between end\">\r\n                                        <div fxFlex=\"0 1 auto\">\r\n                                            <div class=\"h4 secondary-text\">{{widgets.widget9.totalSpent.title}}</div>\r\n                                            <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\r\n                                                <span class=\"secondary-text\">$</span>\r\n                                                <span>{{widgets.widget9.totalSpent.count[widget9.currentRange]}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"h-52\" fxFlex>\r\n                                            <ngx-charts-area-chart\r\n                                                *fuseIfOnDom\r\n                                                [results]=\"widgets.widget9.totalSpent.chart[widget9.currentRange]\"\r\n                                                [scheme]=\"widget9.scheme\"\r\n                                                [gradient]=\"widget9.gradient\"\r\n                                                [xAxis]=\"widget9.xAxis\"\r\n                                                [yAxis]=\"widget9.yAxis\"\r\n                                                [legend]=\"widget9.legend\"\r\n                                                [showXAxisLabel]=\"widget9.showXAxisLabel\"\r\n                                                [showYAxisLabel]=\"widget9.showYAxisLabel\"\r\n                                                [xAxisLabel]=\"widget9.xAxisLabel\"\r\n                                                [yAxisLabel]=\"widget9.yAxisLabel\"\r\n                                                [curve]=\"widget9.curve\">\r\n                                            </ngx-charts-area-chart>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                                         fxLayout.gt-xs=\"row\"\r\n                                         fxLayoutAlign.gt-xs=\"space-between end\">\r\n                                        <div fxFlex=\"0 1 auto\">\r\n                                            <div class=\"h4 secondary-text\">{{widgets.widget9.remaining.title}}</div>\r\n                                            <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\r\n                                                <span class=\"secondary-text\">$</span>\r\n                                                <span>{{widgets.widget9.remaining.count[widget9.currentRange]}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"h-52\" fxFlex>\r\n                                            <ngx-charts-area-chart\r\n                                                *fuseIfOnDom\r\n                                                [results]=\"widgets.widget9.remaining.chart[widget9.currentRange]\"\r\n                                                [scheme]=\"widget9.scheme\"\r\n                                                [gradient]=\"widget9.gradient\"\r\n                                                [xAxis]=\"widget9.xAxis\"\r\n                                                [yAxis]=\"widget9.yAxis\"\r\n                                                [legend]=\"widget9.legend\"\r\n                                                [showXAxisLabel]=\"widget9.showXAxisLabel\"\r\n                                                [showYAxisLabel]=\"widget9.showYAxisLabel\"\r\n                                                [xAxisLabel]=\"widget9.xAxisLabel\"\r\n                                                [yAxisLabel]=\"widget9.yAxisLabel\"\r\n                                                [curve]=\"widget9.curve\">\r\n                                            </ngx-charts-area-chart>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"px-16 py-24 border-top\">\r\n                                        <div class=\"h4 secondary-text\">{{widgets.widget9.totalBudget.title}}</div>\r\n                                        <div class=\"pt-8 mat-display-1 m-0 font-weight-300\">\r\n                                            <span class=\"secondary-text\">$</span>\r\n                                            <span>{{widgets.widget9.totalBudget.count}}</span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                            </fuse-widget> -->\r\n\r\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"row\"\r\n                                         fxFlex=\"100\">\r\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                                    <div class=\"simple-table-container\" ms-responsive-table>\r\n                                        <div class=\" table-title\">\r\n                                            Prácticas calificadas\r\n                                        </div>\r\n\r\n                                        <table class=\"simple\">\r\n\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th *ngFor=\"let column of widgets.widget10.table.columns\">\r\n                                                        {{column.title}}\r\n                                                    </th>\r\n                                                </tr>\r\n                                            </thead>\r\n\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let row of widgets.widget10.table.rows\">\r\n                                                    <td *ngFor=\"let cell of row\">\r\n                                                        <span class=\"p-4\" [ngClass]=\"cell.classes\">\r\n                                                            {{cell.value}}\r\n                                                        </span>\r\n                                                        <mat-icon *ngIf=\"cell.icon\" class=\"s-16\">{{cell.icon}}\r\n                                                        </mat-icon>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </fuse-widget>\r\n\r\n                        </div>\r\n\r\n                    </mat-tab>\r\n\r\n                    <!-- <mat-tab label=\"Team Members\">\r\n\r\n                        <div class=\"widget-group grey-100-bg\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\r\n                             [@animateStagger]=\"{value:'50'}\">\r\n\r\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"row\"\r\n                                         fxFlex=\"100\">\r\n\r\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                                    <div class=\"p-24 mb-8 border-bottom\" fxLayout=\"row\"\r\n                                         fxLayoutAlign=\"space-between center\">\r\n                                        <div class=\"h2\">{{widgets.widget11.title}}</div>\r\n                                        <div class=\"text-boxed red-bg white-fg m-0\">\r\n                                            {{widgets.widget11.table.rows.length}}\r\n                                            members\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <mat-table #table [dataSource]=\"widget11.dataSource\">\r\n\r\n                                        <ng-container cdkColumnDef=\"avatar\">\r\n                                            <mat-header-cell fxFlex=\"64px\" *cdkHeaderCellDef></mat-header-cell>\r\n                                            <mat-cell fxFlex=\"64px\" *cdkCellDef=\"let contact\">\r\n                                                <img class=\"avatar\" *ngIf=\"contact.avatar\" [alt]=\"contact.name\"\r\n                                                     [src]=\"contact.avatar\"/>\r\n                                            </mat-cell>\r\n                                        </ng-container>\r\n                                        <ng-container cdkColumnDef=\"name\">\r\n                                            <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\r\n                                            <mat-cell *cdkCellDef=\"let contact\">\r\n                                                <p class=\"text-truncate font-weight-600\">{{contact.name}}\r\n                                                    {{contact.lastName}}</p>\r\n                                            </mat-cell>\r\n                                        </ng-container>\r\n                                        <ng-container cdkColumnDef=\"position\">\r\n                                            <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Position\r\n                                            </mat-header-cell>\r\n                                            <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\r\n                                                <p class=\"position text-truncate\">\r\n                                                    {{contact.position}}\r\n                                                </p>\r\n                                            </mat-cell>\r\n                                        </ng-container>\r\n\r\n                                        <ng-container cdkColumnDef=\"office\">\r\n                                            <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Office\r\n                                            </mat-header-cell>\r\n                                            <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-md>\r\n                                                <p class=\"office text-truncate\">\r\n                                                    {{contact.office}}\r\n                                                </p>\r\n                                            </mat-cell>\r\n                                        </ng-container>\r\n                                        <ng-container cdkColumnDef=\"email\">\r\n                                            <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Email\r\n                                            </mat-header-cell>\r\n                                            <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\r\n                                                <p class=\"email text-truncate\">\r\n                                                    {{contact.email}}\r\n                                                </p>\r\n                                            </mat-cell>\r\n                                        </ng-container>\r\n\r\n                                        <ng-container cdkColumnDef=\"phone\">\r\n                                            <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Phone\r\n                                            </mat-header-cell>\r\n                                            <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-md>\r\n                                                <p class=\"phone text-truncate\">\r\n                                                    {{contact.phone}}\r\n                                                </p>\r\n                                            </mat-cell>\r\n                                        </ng-container>\r\n\r\n                                        <mat-header-row\r\n                                            *cdkHeaderRowDef=\"widgets.widget11.table.columns\"></mat-header-row>\r\n                                        <mat-row *cdkRowDef=\"let contact; columns: widgets.widget11.table.columns;\">\r\n                                        </mat-row>\r\n                                    </mat-table>\r\n                                </div>\r\n\r\n                            </fuse-widget>\r\n\r\n                        </div>\r\n\r\n                    </mat-tab> -->\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"end\" mode=\"side\" opened=\"true\"\r\n                     fuseMatSidenavHelper=\"dashboards-right-sidenav\" mat-is-locked-open=\"gt-md\">\r\n\r\n            <div class=\"sidenav-content\" fusePerfectScrollbar>\r\n\r\n                <!-- WIDGET GROUP -->\r\n                <div class=\"widget-group\" fxLayout=\"column\" fxFlex=\"100\" *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\r\n\r\n                    <!-- NOW WIDGET -->\r\n                    <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"sidenav-widget p-0\">\r\n\r\n                        <!-- Front -->\r\n                        <div class=\"fuse-widget-front\">\r\n\r\n                            <div class=\"pl-16 pr-8 py-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n                                <div style=\"text-transform: capitalize;\" class=\"h3\">{{dateNow | amLocale:'es' | amDateFormat:'dddd, hh:mm:ss A'}}</div>\r\n                                 \r\n                                <div>\r\n                                    <!-- <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"more\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n\r\n                                    <mat-menu #moreMenu=\"matMenu\">\r\n                                        <button mat-menu-item aria-label=\"Flip widget\">\r\n                                            Details\r\n                                        </button>\r\n                                    </mat-menu> -->\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"p-16 pb-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                <div class=\"h1 secondary-text\">\r\n                                    <span style=\"text-transform: capitalize;\">{{dateNow | amLocale:'es' | amDateFormat:'MMMM'}}</span>\r\n                                </div>\r\n\r\n                                <div class=\"font-size-72 line-height-88 secondary-text font-weight-400\">\r\n                                    {{dateNow | date: 'd'}}\r\n                                </div>\r\n\r\n                                <div class=\"h1 secondary-text\">\r\n                                    <span>{{dateNow | date: 'y'}}</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <mat-divider></mat-divider>\r\n                        </div>\r\n                        <!-- / Front -->\r\n\r\n                    </fuse-widget>\r\n                    <!-- / NOW WIDGET -->\r\n\r\n                    <!-- WEATHER WIDGET -->\r\n                    <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"sidenav-widget p-0\">\r\n\r\n                        <!-- Front -->\r\n                        <div class=\"fuse-widget-front\">\r\n\r\n                            <div class=\"pl-16 pr-8 py-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n                                <div class=\"h4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon class=\"mr-8\">place</mat-icon>\r\n                                    {{widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].name}}\r\n                                </div>\r\n\r\n                                <div>\r\n                                    <!-- <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"more\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n\r\n                                    <mat-menu #moreMenu=\"matMenu\">\r\n                                        <button mat-menu-item aria-label=\"Flip widget\">\r\n                                            Details\r\n                                        </button>\r\n                                    </mat-menu> -->\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"p-16 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                    <mat-icon fontSet=\"meteocons\"\r\n                                              [fontIcon]=\"widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].icon\"\r\n                                              class=\"icon s-40 mr-16\"></mat-icon>\r\n                                    <span class=\"mat-display-2 m-0 font-weight-300 secondary-text\">\r\n                                        {{widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].temp[widgets.weatherWidget.tempUnit]}}\r\n                                    </span>\r\n                                    <span class=\"font-size-48 font-weight-300 hint-text text-super ml-8\">°</span>\r\n                                    <span class=\"mat-display-2 mb-0 font-weight-300 hint-text ng-binding\">C</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <mat-divider></mat-divider>\r\n\r\n                        </div>\r\n                        <!-- / Front -->\r\n\r\n                    </fuse-widget>\r\n                    <!-- / WEATHER WIDGET -->\r\n\r\n                </div>\r\n                <!-- / WIDGET GROUP -->\r\n            </div>\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/dashboards/project/project.component.scss":
/***/ (function(module, exports) {

module.exports = "#dashboard-project mat-sidenav-container .mat-drawer-content,\n#dashboard-project mat-sidenav-container .mat-sidenav-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%; }\n\n#dashboard-project mat-sidenav-container .center > .header {\n  height: 160px;\n  min-height: 160px;\n  max-height: 160px; }\n\n#dashboard-project mat-sidenav-container .center > .header .selected-project {\n    background: rgba(0, 0, 0, 0.12);\n    color: #FFFFFF;\n    padding: 8px 16px;\n    height: 40px;\n    line-height: 24px;\n    font-size: 16px; }\n\n#dashboard-project mat-sidenav-container .center > .header .project-selector {\n    margin-left: 1px;\n    border-radius: 0;\n    background: rgba(0, 0, 0, 0.12); }\n\n#dashboard-project mat-sidenav-container .center > .header .project-selector mat-icon {\n      color: #FFFFFF; }\n\n#dashboard-project mat-sidenav-container .center > .content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n#dashboard-project mat-sidenav-container .center > .content mat-tab-group {\n    height: 100%; }\n\n#dashboard-project mat-sidenav-container .center > .content mat-tab-group .mat-tab-body-wrapper {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n\n#dashboard-project mat-sidenav-container .center > .content .mat-tab-label-container {\n    padding: 0 24px; }\n\n#dashboard-project mat-sidenav-container .sidenav {\n  width: 250px !important;\n  min-width: 250px !important;\n  max-width: 250px !important; }\n\n#dashboard-project mat-sidenav-container .widget.widget5 .gridline-path.gridline-path-horizontal {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/dashboards/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseProjectDashboardComponent; });
/* unused harmony export FilesDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_shape__ = __webpack_require__("./node_modules/d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_service__ = __webpack_require__("./src/app/main/content/apps/dashboards/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_globaluser__ = __webpack_require__("./src/app/global/globaluser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment__ = __webpack_require__("./node_modules/angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__analytics_analytics_service__ = __webpack_require__("./src/app/main/content/apps/dashboards/analytics/analytics.service.ts");
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









var FuseProjectDashboardComponent = /** @class */ (function () {
    function FuseProjectDashboardComponent(projectDashboardService, analyticsDashboardService, globalUser, momentModule) {
        var _this = this;
        this.projectDashboardService = projectDashboardService;
        this.analyticsDashboardService = analyticsDashboardService;
        this.globalUser = globalUser;
        this.momentModule = momentModule;
        this.widget5 = {};
        this.widget6 = {};
        this.widget7 = {};
        this.widget8 = {};
        this.widget9 = {};
        this.widget11 = {};
        // widgetsAna: any;
        this.user = {};
        this.dateNow = Date.now();
        this.projects = this.projectDashboardService.projects;
        this.selectedProject = this.projects[0];
        this.widgets = this.projectDashboardService.widgets;
        // this.widgetsAna = this.analyticsDashboardService.widgets;
        this.user = this.globalUser.user;
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
            },
            supporting: {
                currentRange: '',
                xAxis: false,
                yAxis: false,
                gradient: false,
                legend: false,
                showXAxisLabel: false,
                xAxisLabel: 'Days',
                showYAxisLabel: false,
                yAxisLabel: 'Isues',
                scheme: {
                    domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
                },
                curve: __WEBPACK_IMPORTED_MODULE_3_d3_shape__["curveBasis"]
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
        /**
         * Widget 8
         */
        this.widget8 = {
            legend: false,
            explodeSlices: false,
            labels: true,
            doughnut: false,
            gradient: false,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107']
            },
            onSelect: function (ev) {
                console.log(ev);
            }
        };
        /**
         * Widget 9
         */
        this.widget9 = {
            currentRange: 'TW',
            xAxis: false,
            yAxis: false,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            curve: __WEBPACK_IMPORTED_MODULE_3_d3_shape__["curveBasis"]
        };
        setInterval(function () {
            _this.dateNow = Date.now();
        }, 1000);
        // this.registerCustomChartJSPlugin();
    }
    FuseProjectDashboardComponent.prototype.ngOnInit = function () {
        /**
         * Widget 11
         */
        this.widget11.onContactsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.widget11.onContactsChanged.next(this.widgets.widget11.table.rows);
        this.widget11.dataSource = new FilesDataSource(this.widget11);
    };
    FuseProjectDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-project-dashboard',
            template: __webpack_require__("./src/app/main/content/apps/dashboards/project/project.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/dashboards/project/project.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_4__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__project_service__["a" /* ProjectDashboardService */],
            __WEBPACK_IMPORTED_MODULE_8__analytics_analytics_service__["a" /* AnalyticsDashboardService */],
            __WEBPACK_IMPORTED_MODULE_6__global_globaluser__["a" /* GlobalUser */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_moment__["MomentModule"]])
    ], FuseProjectDashboardComponent);
    return FuseProjectDashboardComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    function FilesDataSource(widget11) {
        var _this = _super.call(this) || this;
        _this.widget11 = widget11;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    FilesDataSource.prototype.connect = function () {
        return this.widget11.onContactsChanged;
    };
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/project/project.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseProjectDashboardModule", function() { return FuseProjectDashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_widget_widget_module__ = __webpack_require__("./src/@fuse/components/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_component__ = __webpack_require__("./src/app/main/content/apps/dashboards/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__project_service__ = __webpack_require__("./src/app/main/content/apps/dashboards/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment__ = __webpack_require__("./node_modules/angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__analytics_analytics_service__ = __webpack_require__("./src/app/main/content/apps/dashboards/analytics/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_7__project_component__["a" /* FuseProjectDashboardComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_8__project_service__["a" /* ProjectDashboardService */], AnalyticsDashboardService: __WEBPACK_IMPORTED_MODULE_10__analytics_analytics_service__["a" /* AnalyticsDashboardService */]
        }
    }
];
var FuseProjectDashboardModule = /** @class */ (function () {
    function FuseProjectDashboardModule() {
    }
    FuseProjectDashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__project_component__["a" /* FuseProjectDashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["E" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["N" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["O" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__fuse_components_widget_widget_module__["a" /* FuseWidgetModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_moment__["MomentModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__project_service__["a" /* ProjectDashboardService */],
                __WEBPACK_IMPORTED_MODULE_10__analytics_analytics_service__["a" /* AnalyticsDashboardService */]
            ]
        })
    ], FuseProjectDashboardModule);
    return FuseProjectDashboardModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/project/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDashboardService; });
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


var ProjectDashboardService = /** @class */ (function () {
    function ProjectDashboardService(http) {
        this.http = http;
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ProjectDashboardService.prototype.resolve = function (route, state) {
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
    ProjectDashboardService.prototype.getProjects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/project-dashboard-projects')
                .subscribe(function (response) {
                _this.projects = response;
                resolve(response);
            }, reject);
        });
    };
    ProjectDashboardService.prototype.getWidgets = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/project-dashboard-widgets')
                .subscribe(function (response) {
                _this.widgets = response;
                resolve(response);
            }, reject);
        });
    };
    ProjectDashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProjectDashboardService);
    return ProjectDashboardService;
}());



/***/ })

});
//# sourceMappingURL=project.module.chunk.js.map