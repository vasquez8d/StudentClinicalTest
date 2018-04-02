webpackJsonp(["scrumboard.module"],{

/***/ "./src/app/main/content/apps/scrumboard/board.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Board; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var sampleLabels = [
    {
        'id': '56027e4119ad3a5dc28b36cd',
        'name': 'Design',
        'color': 'mat-red-500-bg'
    },
    {
        'id': '5640635e19ad3a5dc21416b2',
        'name': 'App',
        'color': 'mat-blue-500-bg'
    },
    {
        'id': '6540635g19ad3s5dc31412b2',
        'name': 'Feature',
        'color': 'mat-green-400-bg'
    }
];
var sampleMembers = [
    {
        id: '56027c1930450d8bf7b10758',
        name: 'Alice Freeman',
        avatar: 'assets/images/avatars/alice.jpg'
    },
    {
        id: '26027s1930450d8bf7b10828',
        name: 'Danielle Obrien',
        avatar: 'assets/images/avatars/danielle.jpg'
    },
    {
        id: '76027g1930450d8bf7b10958',
        name: 'James Lewis',
        avatar: 'assets/images/avatars/james.jpg'
    },
    {
        id: '36027j1930450d8bf7b10158',
        name: 'Vincent Munoz',
        avatar: 'assets/images/avatars/vincent.jpg'
    }
];
var Board = /** @class */ (function () {
    function Board(board) {
        this.name = board.name || 'Untitled Board';
        this.uri = board.uri || 'untitled-board';
        this.id = board.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
        this.settings = board.settings || {
            color: '',
            subscribed: true,
            cardCoverImages: true
        };
        this.lists = [];
        this.cards = [];
        this.members = board.members || sampleMembers;
        this.labels = board.labels || sampleLabels;
    }
    return Board;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/add-list/add-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list new-list mat-elevation-z1\">\r\n\r\n    <button *ngIf=\"!formActive\" mat-button class=\"new-list-form-button\" (click)=\"openForm()\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"mat-red-bg\">add</mat-icon>\r\n            <span>Add a list</span>\r\n        </div>\r\n    </button>\r\n\r\n    <form *ngIf=\"formActive\" class=\"new-list-form\" [formGroup]=\"form\" (submit)=\"onFormSubmit()\"\r\n          fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n        <input formControlName=\"name\" #nameInput fxFlex placeholder=\"Write a list Name\">\r\n\r\n        <button mat-icon-button fxFlex=\"0 1 auto\">\r\n            <mat-icon>check</mat-icon>\r\n        </button>\r\n        <button mat-icon-button fxFlex=\"0 1 auto\" (click)=\"closeForm()\">\r\n            <mat-icon>close</mat-icon>\r\n        </button>\r\n    </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/add-list/add-list.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .new-list {\n  border-radius: 2px;\n  background-color: #EEF0F2; }\n  :host .new-list .new-list-form-button {\n    text-transform: none;\n    font-size: 15px;\n    padding: 0 16px;\n    height: 64px;\n    margin: 0;\n    width: 100%; }\n  :host .new-list .new-list-form-button mat-icon {\n      border-radius: 50%;\n      height: 40px;\n      width: 40px;\n      line-height: 40px;\n      margin-right: 16px; }\n  :host .new-list .new-list-form {\n    padding: 16px;\n    height: 64px; }\n  :host .new-list .new-list-form > input {\n      height: 100%; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/add-list/add-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardAddListComponent; });
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


var FuseScrumboardBoardAddListComponent = /** @class */ (function () {
    function FuseScrumboardBoardAddListComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formActive = false;
        this.onlistAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FuseScrumboardBoardAddListComponent.prototype.openForm = function () {
        this.form = this.formBuilder.group({
            name: ['']
        });
        this.formActive = true;
        this.focusNameField();
    };
    FuseScrumboardBoardAddListComponent.prototype.closeForm = function () {
        this.formActive = false;
    };
    FuseScrumboardBoardAddListComponent.prototype.focusNameField = function () {
        var _this = this;
        setTimeout(function () {
            _this.nameInputField.nativeElement.focus();
        });
    };
    FuseScrumboardBoardAddListComponent.prototype.onFormSubmit = function () {
        if (this.form.valid) {
            this.onlistAdd.next(this.form.getRawValue().name);
            this.formActive = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardAddListComponent.prototype, "onlistAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nameInput'),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardAddListComponent.prototype, "nameInputField", void 0);
    FuseScrumboardBoardAddListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-add-list',
            template: __webpack_require__("./src/app/main/content/apps/scrumboard/board/add-list/add-list.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/scrumboard/board/add-list/add-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseScrumboardBoardAddListComponent);
    return FuseScrumboardBoardAddListComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n\r\n    <div id=\"board\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header mat-accent-bg p-16 p-mat-24\" [ngClass]=\"'mat-'+board.settings.color+'-bg'\" fxLayout=\"column\">\r\n\r\n            <div class=\"header-content\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" fxFlex=\"1 0 auto\">\r\n\r\n                <!-- BOARD SELECTION BUTTON -->\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlexOrder=\"2\" fxFlexOrder.gt-xs=\"1\">\r\n                    <button mat-raised-button class=\"mat-accent header-boards-button\"\r\n                            [ngClass]=\"'mat-'+board.settings.color+'-700-bg'\"\r\n                            routerLink=\"/apps/scrumboard/boards\"\r\n                            aria-label=\"boards button\">\r\n                        <mat-icon>assessment</mat-icon>\r\n                        <span>BOARDS</span>\r\n                    </button>\r\n                </div>\r\n                <!-- / BOARD SELECTION BUTTON -->\r\n\r\n                <!-- BOARD NAME -->\r\n                <div class=\"header-board-name mb-8 mb-mat-0\"\r\n                     fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n                     fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"center center\"\r\n                     fxFlex=\"1 0 100%\" fxFlex.gt-xs=\"1 0 auto\"\r\n                     fxFlexOrder=\"1\" fxFlexOrder.gt-xs=\"2\">\r\n                    <mat-icon *ngIf=\"board.settings.subscribed\" class=\"board-subscribe s-16\">remove_red_eye</mat-icon>\r\n                    <fuse-scrumboard-edit-board-name\r\n                        [board]=\"board\"\r\n                        (onNameChanged)=\"onBoardNameChanged($event)\">\r\n                    </fuse-scrumboard-edit-board-name>\r\n                </div>\r\n                <!-- / BOARD NAME -->\r\n\r\n                <!-- TOOLBAR -->\r\n                <div class=\"toolbar\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlexOrder=\"3\">\r\n\r\n                    <!-- BOARD SETTINGS BUTTON -->\r\n                    <button mat-icon-button (click)=\"settingsSidenav.toggle()\"\r\n                            aria-label=\"Settings\" matTooltip=\"Settings\">\r\n                        <mat-icon>settings</mat-icon>\r\n                    </button>\r\n                    <!-- / BOARD SETTINGS BUTTON -->\r\n                </div>\r\n                <!-- / TOOLBAR -->\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <div fxFlex class=\"board-content-wrapper p-16 p-mat-24\" [ngClass]=\"board.settings.color+'-100-bg'\">\r\n\r\n            <!-- BOARD -->\r\n            <div class=\"board-content ngx-dnd-container p-16 p-mat-24\" fxLayout=\"row\"\r\n                 ngxDroppable=\"list\" [model]=\"board.lists\" (out)=\"onDrop($event)\"\r\n                 *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\r\n\r\n                <!-- LIST -->\r\n                <fuse-scrumboard-board-list\r\n                    class=\"scrumboard-board-list list-wrapper ngx-dnd-item\"\r\n                    ngxDraggable\r\n                    *ngFor=\"let list of board.lists\"\r\n                    [model]=\"list\"\r\n                    [list]=\"list\"\r\n                    [@animate]=\"{value:'*',params:{duration:'350ms',x:'100%'}}\">\r\n                </fuse-scrumboard-board-list>\r\n                <!-- / LIST -->\r\n\r\n                <!-- NEW LIST BUTTON-->\r\n                <fuse-scrumboard-board-add-list class=\"new-list-wrapper\" (onlistAdd)=\"onListAdd($event)\"\r\n                                                [@animate]=\"{value:'*',params:{duration:'350ms',x:'100%'}}\">\r\n                </fuse-scrumboard-board-add-list>\r\n                <!-- / NEW LIST BUTTON-->\r\n\r\n            </div>\r\n            <!-- / BOARD -->\r\n        </div>\r\n        <!-- primary content -->\r\n    </div>\r\n\r\n    <mat-sidenav #settingsSidenav align=\"end\">\r\n        <fuse-scrumboard-board-settings></fuse-scrumboard-board-settings>\r\n    </mat-sidenav>\r\n\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/board.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host mat-sidenav-container {\n  width: 100%;\n  height: 100%; }\n:host mat-sidenav-container mat-sidenav {\n    width: 320px !important;\n    min-width: 320px !important;\n    max-width: 320px !important; }\n:host mat-sidenav-container #board {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n    height: 100%; }\n:host mat-sidenav-container #board > .header {\n      position: relative;\n      min-height: 96px;\n      background-image: none;\n      z-index: 49; }\n:host mat-sidenav-container #board > .header .header-content .header-boards-button {\n        margin: 0; }\n:host mat-sidenav-container #board > .header .header-content .header-board-name {\n        font-size: 16px; }\n:host mat-sidenav-container #board > .header .header-content .header-board-name .board-subscribe {\n          margin-right: 8px; }\n:host mat-sidenav-container #board > .header .header-content .header-board-name .editable-buttons mat-icon {\n          color: #FFFFFF !important; }\n:host mat-sidenav-container #board > .header .header-content .right-side > .mat-button:last-child {\n        margin-right: 0; }\n:host mat-sidenav-container #board #board-selector {\n      position: absolute;\n      top: 96px;\n      right: 0;\n      left: 0;\n      height: 192px;\n      z-index: 48;\n      padding: 24px;\n      opacity: 1; }\n:host mat-sidenav-container #board #board-selector .board-list-item {\n        width: 128px;\n        height: 192px;\n        padding: 16px;\n        cursor: pointer;\n        position: relative; }\n:host mat-sidenav-container #board #board-selector .board-list-item .board-name {\n          text-align: center;\n          padding: 16px 0; }\n:host mat-sidenav-container #board #board-selector .board-list-item .selected-icon {\n          position: absolute;\n          top: 0;\n          left: 50%;\n          width: 32px;\n          height: 32px;\n          margin-left: -16px;\n          border-radius: 50%;\n          text-align: center;\n          color: white; }\n:host mat-sidenav-container #board #board-selector .board-list-item .selected-icon i {\n            line-height: 32px !important; }\n:host mat-sidenav-container #board #board-selector .board-list-item.add-new-board {\n          opacity: 0.6; }\n:host mat-sidenav-container #board .board-content-wrapper {\n      position: relative;\n      background: #E5E7E8; }\n:host mat-sidenav-container #board .board-content-wrapper .board-content {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        height: 100%;\n        overflow-y: hidden;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch; }\n:host mat-sidenav-container #board .board-content-wrapper .board-content .list-sortable-placeholder {\n          background: rgba(0, 0, 0, 0.06);\n          margin-right: 24px; }\n:host mat-sidenav-container #board .board-content-wrapper .board-content .new-list-wrapper {\n          width: 344px;\n          min-width: 344px;\n          max-width: 344px;\n          padding-right: 24px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_model__ = __webpack_require__("./src/app/main/content/apps/scrumboard/list.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scrumboard_service__ = __webpack_require__("./src/app/main/content/apps/scrumboard/scrumboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FuseScrumboardBoardComponent = /** @class */ (function () {
    function FuseScrumboardBoardComponent(route, location, scrumboardService) {
        this.route = route;
        this.location = location;
        this.scrumboardService = scrumboardService;
    }
    FuseScrumboardBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(function (board) {
                _this.board = board;
            });
    };
    FuseScrumboardBoardComponent.prototype.ngOnDestroy = function () {
        this.onBoardChanged.unsubscribe();
    };
    FuseScrumboardBoardComponent.prototype.onListAdd = function (newListName) {
        if (newListName === '') {
            return;
        }
        this.scrumboardService.addList(new __WEBPACK_IMPORTED_MODULE_4__list_model__["a" /* List */]({ name: newListName }));
    };
    FuseScrumboardBoardComponent.prototype.onBoardNameChanged = function (newName) {
        this.scrumboardService.updateBoard();
        this.location.go('/apps/scrumboard/boards/' + this.board.id + '/' + this.board.uri);
    };
    FuseScrumboardBoardComponent.prototype.onDrop = function (ev) {
        this.scrumboardService.updateBoard();
    };
    FuseScrumboardBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board',
            template: __webpack_require__("./src/app/main/content/apps/scrumboard/board/board.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/scrumboard/board/board.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_5__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardBoardComponent);
    return FuseScrumboardBoardComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar *ngIf=\"card\" matDialogTitle class=\"mat-accent-bg m-0\">\r\n\r\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <!-- DUE DATE -->\r\n                <div class=\"due-date\" fxFlex=\"0 1 auto\">\r\n\r\n                    <button *ngIf=\"card.due\" mat-icon-button class=\"\" [matMenuTriggerFor]=\"dueDateMenu\">\r\n                        <mat-icon>today</mat-icon>\r\n                    </button>\r\n\r\n                    <mat-menu #dueDateMenu=\"matMenu\" [overlapTrigger]=\"false\">\r\n                        <button mat-menu-item (click)=\"removeDueDate()\">Remove Due Date</button>\r\n                    </mat-menu>\r\n\r\n                    <mat-form-field *ngIf=\"!card.due\">\r\n                        <input matInput [matDatepicker]=\"menuPicker\" [(ngModel)]=\"card.due\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"menuPicker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #menuPicker></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n                <!-- / DUE DATE -->\r\n\r\n                <!-- LABELS -->\r\n                <div class=\"labels\" fxFlex=\"0 1 auto\">\r\n\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"labelsMenu\">\r\n                        <mat-icon>label</mat-icon>\r\n                    </button>\r\n\r\n                    <mat-menu #labelsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"scrumboard-labels-menu\">\r\n\r\n                        <fuse-scrumboard-label-selector [card]=\"card\" (onCardLabelsChange)=\"updateCard()\"></fuse-scrumboard-label-selector>\r\n\r\n                    </mat-menu>\r\n                </div>\r\n                <!-- / LABELS -->\r\n\r\n                <!-- MEMBERS -->\r\n                <div class=\"members\" fxFlex=\"0 1 auto\">\r\n\r\n                    <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"membersMenu\">\r\n                        <mat-icon>account_circle</mat-icon>\r\n                    </button>\r\n\r\n                    <mat-menu #membersMenu=\"matMenu\" [overlapTrigger]=\"false\">\r\n                        <div fxFlex fxLayout=\"column\" class=\"scrumboard-members-menu\" (click)=\"$event.stopPropagation()\">\r\n                            <mat-checkbox class=\"member px-12\" [checked]=\"card.idMembers.indexOf(member.id) > -1\"\r\n                                          *ngFor=\"let member of board.members\"\r\n                                          (change)=\"toggleInArray(member.id, card.idMembers);updateCard()\">\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <img [alt]=\"member.name\" [src]=\" member.avatar\" class=\"avatar\"/>\r\n                                    <p class=\"member-name\">{{ member.name }}</p>\r\n                                </div>\r\n                            </mat-checkbox>\r\n                        </div>\r\n                    </mat-menu>\r\n                </div>\r\n                <!-- / MEMBERS -->\r\n\r\n                <!-- ATTACHMENT -->\r\n                <button mat-icon-button aria-label=\"Attachment\">\r\n                    <mat-icon>attachment</mat-icon>\r\n                </button>\r\n                <!-- / ATTACHMENT -->\r\n\r\n                <!-- CHECKLIST -->\r\n                <div class=\"due-date \" fxFlex=\"0 1 auto\">\r\n\r\n                    <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"checklistMenu\" #checklistMenuTrigger=\"matMenuTrigger\" (menuOpened)=\"onChecklistMenuOpen()\">\r\n                        <mat-icon>check_box</mat-icon>\r\n                    </button>\r\n\r\n                    <mat-menu #checklistMenu=\"matMenu\" [overlapTrigger]=\"false\">\r\n\r\n                        <form class=\"px-16 py-8\" #newChecklistForm=\"ngForm\" (submit)=\"addChecklist(newChecklistForm)\" (click)=\"$event.stopPropagation()\"\r\n                              fxLayout=\"column\" fxLayoutAlign=\"start end\">\r\n\r\n                            <mat-form-field floatPlaceholder=\"never\" (click)=\"$event.stopPropagation()\" fxFlex>\r\n                                <input #newCheckListTitleField matInput ngModel #checklistTitle=\"ngModel\" name=\"checklistTitle\" placeholder=\"Checklist title\" required>\r\n                            </mat-form-field>\r\n\r\n                            <button mat-raised-button class=\"mat-accent\" aria-label=\"Add Checklist\" [disabled]=\"!newChecklistForm.valid\">Add Checklist</button>\r\n                        </form>\r\n\r\n                    </mat-menu>\r\n                </div>\r\n                <!-- / CHECKLIST -->\r\n\r\n                <!-- SUBSCRIBE -->\r\n                <div class=\"subscribe \" fxFlex=\"0 1 auto\">\r\n                    <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"subscribeMenu\">\r\n                        <mat-icon>remove_red_eye</mat-icon>\r\n                    </button>\r\n                    <mat-menu #subscribeMenu=\"matMenu\" [overlapTrigger]=\"false\">\r\n                        <button *ngIf=\"card.subscribed\" mat-menu-item (click)=\"toggleSubscribe()\">\r\n                            Unsubscribe\r\n                        </button>\r\n                        <button *ngIf=\"!card.subscribed\" mat-menu-item (click)=\"toggleSubscribe()\">\r\n                            Subscribe\r\n                        </button>\r\n                    </mat-menu>\r\n                </div>\r\n                <!-- / SUBSCRIBE -->\r\n\r\n                <!-- OPTIONS -->\r\n                <div class=\"options \" fxFlex=\"0 1 auto\">\r\n                    <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"optionsMenu\">\r\n                        <mat-icon>more_horiz</mat-icon>\r\n                    </button>\r\n                    <mat-menu #optionsMenu=\"matMenu\" [overlapTrigger]=\"false\">\r\n                        <button mat-menu-item (click)=\"removeCard()\">\r\n                            Remove Card\r\n                        </button>\r\n                    </mat-menu>\r\n                </div>\r\n                <!-- / OPTIONS -->\r\n            </div>\r\n\r\n            <!-- CLOSE DIALOG BUTTON -->\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close Dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n            <!-- / CLOSE DIALOG BUTTON -->\r\n        </div>\r\n    </mat-toolbar>\r\n\r\n    <div *ngIf=\"card\" mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\r\n\r\n        <div fxLayout.gt-sm=\"row\" fxLayoutAlign.gt-sm=\"space-between center\"\r\n             fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n            <!-- BREADCRUMB -->\r\n            <div class=\"card-breadcrumb mb-16 mb-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <span>{{board.name}}</span>\r\n                <mat-icon class=\"s-20\">chevron_right</mat-icon>\r\n                <span>{{list.name}}</span>\r\n            </div>\r\n            <!-- / BREADCRUMB -->\r\n\r\n            <!-- DUE DATE -->\r\n            <div *ngIf=\"card.due\" class=\"due-date\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <mat-form-field floatPlaceholder=\"never\">\r\n                    <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"card.due\" placeholder=\"Choose a due date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                </mat-form-field>\r\n\r\n                <button mat-icon-button class=\"remove-due-date\" (click)=\"removeDueDate()\">\r\n                    <mat-icon class=\"s-16\">close</mat-icon>\r\n                </button>\r\n            </div>\r\n            <!-- / DUE DATE -->\r\n\r\n        </div>\r\n\r\n        <!-- NAME -->\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon *ngIf=\"card.subscribed\" class=\"card-subscribe s-20 mr-12\">remove_red_eye</mat-icon>\r\n            <div class=\"card-name\">\r\n                <mat-form-field floatPlaceholder=\"never\" fxFlex>\r\n                    <input matInput [(ngModel)]=\"card.name\" placeholder=\"Title\" required (change)=\"updateCard()\">\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <!-- / NAME -->\r\n\r\n        <!-- DESCRIPTION -->\r\n        <div class=\"description\">\r\n            <mat-form-field fxFlex>\r\n                <textarea matInput [(ngModel)]=\"card.description\" placeholder=\"Description\" columns=\"1\" mat-maxlength=\"150\" max-rows=\"4\" (change)=\"updateCard()\"></textarea>\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- / DESCRIPTION -->\r\n\r\n        <!-- SECTIONS -->\r\n        <div class=\"sections\">\r\n\r\n            <!-- LABELS SECTION -->\r\n            <div *ngIf=\"card.idLabels[0] || card.idMembers[0]\" class=\"section\"\r\n                 fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n                <div *ngIf=\"card.idLabels[0]\" fxFlex class=\"labels\">\r\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"s-20\">label</mat-icon>\r\n                        <span class=\"section-title\">Labels</span>\r\n                    </div>\r\n                    <div class=\"section-content\">\r\n                        <mat-chip-list class=\"label-chips\">\r\n                            <mat-chip class=\"label-chip mb-4\"\r\n                                      *ngFor=\"let labelId of card.idLabels\"\r\n                                      [ngClass]=\"board.labels | getById:labelId:'color'\"\r\n                                      fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <span>{{board.labels|getById:labelId:'name'}}</span>\r\n                                <mat-icon class=\"ml-8 s-16 chip-remove\" (click)=\"toggleInArray(labelId, card.idLabels);updateCard()\">close</mat-icon>\r\n                            </mat-chip>\r\n                        </mat-chip-list>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"card.idMembers[0]\" fxFlex class=\"members\">\r\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"s-20\">supervisor_account</mat-icon>\r\n                        <span class=\"section-title\">Members</span>\r\n                    </div>\r\n                    <div class=\"section-content\">\r\n                        <mat-chip-list class=\"member-chips\">\r\n                            <mat-chip class=\"member-chip mb-4\" *ngFor=\"let memberId of card.idMembers\"\r\n                                      fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <img class=\"member-chip-avatar\" [src]=\"board.members | getById:memberId:'avatar'\"\r\n                                     [matTooltip]=\"board.members | getById:memberId:'name'\">\r\n                                <mat-icon class=\"ml-8 s-16 chip-remove\" (click)=\"toggleInArray(memberId, card.idMembers);updateCard()\">close</mat-icon>\r\n                            </mat-chip>\r\n                        </mat-chip-list>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- / LABELS SECTION -->\r\n\r\n            <!-- ATTACHMENTS SECTION -->\r\n            <div *ngIf=\"card.attachments[0]\" class=\"section\">\r\n\r\n                <div class=\"attachments\">\r\n\r\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"s-20\">attachment</mat-icon>\r\n                        <span class=\"section-title\">Attachments</span>\r\n                    </div>\r\n\r\n                    <div class=\"section-content\">\r\n\r\n                        <div class=\"attachment\" *ngFor=\"let item of card.attachments\" [ngSwitch]=\"item.type\">\r\n\r\n                            <div *ngSwitchCase=\"'image'\"\r\n                                 fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"start center\"\r\n                                 fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n                                <div class=\"attachment-preview mat-elevation-z2\"\r\n                                     [ngStyle]=\"{'background-image': 'url('+item.src+')'}\">\r\n                                </div>\r\n\r\n                                <div class=\"attachment-content\" fxLayout=\"column\">\r\n\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <span class=\"attachment-name\">{{item.name}}</span>\r\n                                        <mat-icon *ngIf=\"card.idAttachmentCover === item.id\"\r\n                                                  class=\"yellow-700-fg attachment-is-cover s-20\">star\r\n                                        </mat-icon>\r\n                                    </div>\r\n\r\n                                    <span class=\"attachment-time\">{{item.time}}</span>\r\n\r\n                                    <div>\r\n                                        <button mat-raised-button class=\"attachment-actions-button\" [matMenuTriggerFor]=\"attachmentActionsMenu\">\r\n                                            <span fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                                <span>Actions</span>\r\n                                                <mat-icon class=\"s-20\">arrow_drop_down</mat-icon>\r\n                                            </span>\r\n                                        </button>\r\n                                        <mat-menu #attachmentActionsMenu=\"matMenu\">\r\n                                            <button mat-menu-item (click)=\"toggleCoverImage(item.id)\">\r\n                                                <span *ngIf=\"card.idAttachmentCover !== item.id\">Make Cover</span>\r\n                                                <span *ngIf=\"card.idAttachmentCover === item.id\">Remove Cover</span>\r\n                                            </button>\r\n                                            <button mat-menu-item (click)=\"removeAttachment(item)\">\r\n                                                Remove Attachment\r\n                                            </button>\r\n                                        </mat-menu>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div *ngSwitchCase=\"'link'\" fxLayout=\"row\">\r\n                                <div class=\"attachment-preview mat-elevation-z2\" fxLayout=\"column\"\r\n                                     fxLayoutAlign=\"center center\">\r\n                                    <span>LINK</span>\r\n                                </div>\r\n                                <div class=\"attachment-content\" fxLayout=\"column\">\r\n                                    <span class=\"attachment-url\">{{item.url}}</span>\r\n                                    <span class=\"attachment-time\">{{item.time}}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <button mat-button class=\"add-attachment-button\" aria-label=\"add attachment\">\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"s-20\">add</mat-icon>\r\n                                <span>Add an attachment</span>\r\n                            </div>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- / ATTACHMENTS SECTION -->\r\n\r\n            <!-- CHECKLISTS SECTION -->\r\n            <div class=\"section\" *ngFor=\"let checklist of card.checklists\">\r\n\r\n                <div class=\"checklist\">\r\n\r\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                        <mat-icon class=\"s-20\">check_box</mat-icon>\r\n\r\n                        <span fxFlex class=\"section-title\">{{checklist.name}}</span>\r\n\r\n\r\n                        <div>\r\n                            <button mat-icon-button class=\"checklist-actions-button\" [matMenuTriggerFor]=\"checklistActionsMenu\">\r\n                                <mat-icon class=\"s-20\">more_vert</mat-icon>\r\n                            </button>\r\n                            <mat-menu #checklistActionsMenu=\"matMenu\">\r\n                                <button mat-menu-item (click)=\"removeChecklist(checklist)\">\r\n                                    <mat-icon>delete</mat-icon>\r\n                                    <span>Remove Checklist</span>\r\n                                </button>\r\n                            </mat-menu>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"section-content\">\r\n\r\n                        <div class=\"checklist-progress\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                            <span class=\"checklist-progress-value\">\r\n                                {{checklist.checkItemsChecked}} / {{checklist.checkItems.length}}\r\n                            </span>\r\n\r\n                            <mat-progress-bar class=\"mat-accent checklist-progressbar\" mode=\"determinate\"\r\n                                              value=\"{{100 * checklist.checkItemsChecked / checklist.checkItems.length}}\">\r\n                            </mat-progress-bar>\r\n                        </div>\r\n\r\n                        <div class=\"check-items\">\r\n\r\n                            <div class=\"check-item\" *ngFor=\"let checkItem of checklist.checkItems\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n                                <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-checkbox [(ngModel)]=\"checkItem.checked\"\r\n                                                  (change)=\"updateCheckedCount(checklist)\"\r\n                                                  aria-label=\"{{checkItem.name}}\">\r\n                                    </mat-checkbox>\r\n                                    <mat-form-field fxFlex class=\"mx-12\">\r\n                                        <input matInput [(ngModel)]=\"checkItem.name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                                <button mat-icon-button class=\"checklist-actions-button\" (click)=\"removeChecklistItem(checkItem, checklist)\">\r\n                                    <mat-icon class=\"s-20\">delete</mat-icon>\r\n                                </button>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <form #newCheckItemForm=\"ngForm\" (submit)=\"addCheckItem(newCheckItemForm,checklist)\" name=\"newCheckItemForm\" class=\"new-check-item-form\"\r\n                              fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\r\n                                <mat-icon class=\"s-20\">add</mat-icon>\r\n\r\n                                <mat-form-field class=\"no-errors-spacer mx-12\" fxFlex>\r\n                                    <input matInput ngModel #checkItem=\"ngModel\" name=\"checkItem\" placeholder=\"Add an item\" autocomplete=\"off\">\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <button mat-raised-button\r\n                                    [disabled]=\"!newCheckItemForm.valid || newCheckItemForm.pristine\"\r\n                                    class=\"mat-accent\" aria-label=\"Add\">\r\n                                <span>Add</span>\r\n                            </button>\r\n                        </form>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- / CHECKLISTS SECTION -->\r\n\r\n            <!-- COMMENTS SECTION -->\r\n            <div class=\"section\">\r\n\r\n                <div class=\"comments\">\r\n\r\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"s-20\">comment</mat-icon>\r\n                        <span class=\"section-title\">Comments</span>\r\n                    </div>\r\n\r\n                    <div class=\"section-content\">\r\n                        <form name=\"cardCommentForm\"\r\n                              #newCommentForm=\"ngForm\" (submit)=\"addNewComment(newCommentForm)\"\r\n                              class=\"comment new-comment\" fxLayout=\"column\" fxLayoutAlign=\"start\" no-validate>\r\n\r\n                            <div fxLayout=\"row\">\r\n                                <img class=\"comment-member-avatar\" src=\"assets/images/avatars/profile.jpg\">\r\n                                <mat-form-field fxFlex>\r\n                                    <input matInput name=\"newComment\" ngModel #newComment=\"ngModel\"\r\n                                           placeholder=\"Write a comment..\" required>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                <button mat-raised-button class=\"mat-accent\"\r\n                                        [disabled]=\"!newCommentForm.valid || newCommentForm.pristine\"\r\n                                        aria-label=\"Add\">\r\n                                    <span>Add</span>\r\n                                </button>\r\n                            </div>\r\n                        </form>\r\n\r\n                        <div class=\"comment\" fxLayout=\"row\" *ngFor=\"let comment of card.comments\">\r\n\r\n                            <img class=\"comment-member-avatar\"\r\n                                 [src]=\"board.members | getById: comment.idMember:'avatar'\">\r\n\r\n                            <div fxLayout=\"column\">\r\n                                <div class=\"comment-member-name\">\r\n                                    {{board.members | getById: comment.idMember:'name'}}\r\n                                </div>\r\n                                <div class=\"comment-bubble\">{{comment.message}}</div>\r\n                                <div class=\"comment-time secondary-text\">{{comment.time}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- / COMMENTS SECTION -->\r\n\r\n            <!-- ACTIVITIES SECTION -->\r\n            <div *ngIf=\"card.activities[0]\" class=\"section\">\r\n\r\n                <div class=\"activities\">\r\n\r\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"s-20\">list</mat-icon>\r\n                        <span class=\"section-title\">Activity</span>\r\n                    </div>\r\n\r\n                    <div class=\"section-content\">\r\n                        <div class=\"activity\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngFor=\"let activity of card.activities\">\r\n                            <img class=\"activity-member-avatar\"\r\n                                 [src]=\"board.members| getById:activity.idMember:'avatar'\">\r\n                            <div class=\"activity-member-name\">{{board.members| getById:activity.idMember:'name'}}</div>\r\n                            <div class=\"activity-message\">{{activity.message}}</div>\r\n                            <div class=\"activity-time secondary-text\">{{activity.time}}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <!-- / ACTIVITIES SECTION -->\r\n\r\n        </div>\r\n        <!-- / SECTIONS -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.scrumboard-card-dialog {\n  width: 720px; }\n@media screen and (max-width: 599px) {\n    .scrumboard-card-dialog {\n      width: 100%; } }\n.scrumboard-card-dialog .mat-dialog-container {\n    padding: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field {\n      width: auto;\n      margin: 0 8px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field .mat-form-field-wrapper {\n        padding: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field .mat-form-field-wrapper .mat-form-field-flex {\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n.scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n            display: none; }\n.scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-input-element {\n            display: none; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content {\n      position: relative;\n      background-color: #F5F5F5; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .card-breadcrumb {\n        font-weight: 500;\n        font-size: 14px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .card-subscribe {\n        margin-right: 8px;\n        color: rgba(0, 0, 0, 0.6); }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .picker {\n        width: 140px;\n        min-width: 140px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .card-name {\n        width: 100%;\n        font-size: 22px; }\n@media screen and (max-width: 599px) {\n          .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .card-name {\n            font-size: 14px; } }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .description {\n        padding-bottom: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section {\n        border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n        margin-bottom: 32px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section:last-child {\n          border-bottom: none;\n          margin-bottom: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section:last-child .section-content {\n            padding-bottom: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .section-header {\n          font-size: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .section-header mat-icon {\n            margin-right: 8px;\n            color: rgba(0, 0, 0, 0.6); }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .section-header .section-title {\n            font-weight: 500; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .section-content {\n          padding: 24px 0 32px 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .labels .section-content {\n          padding: 8px 0 32px 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .labels .label-chips {\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n          padding: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .labels .label-chips .label-chip {\n            display: block; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .labels .label-chips .label-chip .chip-remove {\n              cursor: pointer; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .section-content {\n          padding: 8px 0 32px 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .member-chips {\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n          padding: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .member-chips .member-chip {\n            padding: 4px 12px 4px 4px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .member-chips .member-chip .member-chip-avatar {\n              width: 32px;\n              border-radius: 50%; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .member-chips .member-chip .chip-remove {\n              cursor: pointer; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment {\n          margin-bottom: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-preview {\n            background-color: #EEF0F2;\n            width: 160px;\n            height: 128px;\n            background-size: contain;\n            background-position: 50% 50%;\n            background-repeat: no-repeat;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.6);\n            margin-right: 24px; }\n@media screen and (max-width: 599px) {\n              .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-preview {\n                margin-bottom: 24px; } }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-url,\n          .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-name {\n            font-weight: 500;\n            font-size: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-is-cover {\n            margin-left: 6px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-time {\n            color: rgba(0, 0, 0, 0.6); }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-actions-button {\n            background-color: white;\n            text-transform: capitalize;\n            margin: 12px 0 0 0;\n            padding-left: 12px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-actions-button mat-icon {\n              margin-left: 8px;\n              color: rgba(0, 0, 0, 0.6); }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .add-attachment-button {\n          margin: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .add-attachment-button mat-icon {\n            color: rgba(0, 0, 0, 0.6);\n            margin-right: 8px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .add-attachment-button span {\n            font-weight: 500;\n            text-transform: capitalize; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .checklist-progress {\n          margin-bottom: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .checklist-progress .checklist-progress-value {\n            margin-right: 12px;\n            font-weight: 500;\n            white-space: nowrap;\n            font-size: 14px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .editable-wrap {\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .check-items .check-item mat-checkbox {\n          margin-bottom: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .check-items .check-item mat-checkbox .mat-label {\n            font-size: 14px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .check-items .check-item mat-checkbox.mat-checked .mat-label {\n            text-decoration: line-through;\n            color: rgba(0, 0, 0, 0.6); }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .new-check-item-form {\n          padding-top: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .new-check-item-form mat-form-field {\n            margin: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .new-check-item-form .mat-button {\n            margin: 0 0 0 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment {\n          margin-bottom: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-member-avatar {\n            width: 32px;\n            height: 32px;\n            border-radius: 50%;\n            margin-right: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-member-name {\n            font-size: 14px;\n            font-weight: 500; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-time {\n            font-size: 12px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble {\n            position: relative;\n            padding: 8px;\n            background-color: white;\n            border: 1px solid #dcdfe1;\n            font-size: 14px;\n            margin: 4px 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble:after, .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble:before {\n              content: ' ';\n              position: absolute;\n              width: 0;\n              height: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble:after {\n              left: -7px;\n              right: auto;\n              top: 0px;\n              bottom: auto;\n              border: 11px solid;\n              border-color: white transparent transparent transparent; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble:before {\n              left: -9px;\n              right: auto;\n              top: -1px;\n              bottom: auto;\n              border: 8px solid;\n              border-color: #dcdfe1 transparent transparent transparent; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment.new-comment mat-form-field {\n            margin: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity {\n          margin-bottom: 12px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity .activity-member-avatar {\n            width: 24px;\n            height: 24px;\n            border-radius: 50%;\n            margin-right: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity .activity-member-name {\n            font-size: 14px;\n            font-weight: 500;\n            margin-right: 8px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity .activity-message {\n            font-size: 14px;\n            margin-right: 8px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity .activity-time {\n            font-size: 12px; }\n.scrumboard-card-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.scrumboard-members-menu {\n  width: 240px; }\n.scrumboard-members-menu .mat-checkbox-layout,\n  .scrumboard-members-menu .mat-checkbox-label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n.scrumboard-labels-menu .mat-menu-content {\n  padding-bottom: 0; }\n.scrumboard-labels-menu .mat-menu-content .mat-checkbox-layout,\n  .scrumboard-labels-menu .mat-menu-content .mat-checkbox-label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n.scrumboard-labels-menu .mat-menu-content .views {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    overflow: hidden;\n    width: 240px;\n    min-width: 240px;\n    max-width: 240px;\n    min-height: 240px; }\n.scrumboard-labels-menu .mat-menu-content .views .view {\n      position: absolute;\n      width: 240px;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0; }\n.scrumboard-labels-menu .mat-menu-content .views .view > .header {\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardCardDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scrumboard_service__ = __webpack_require__("./src/app/main/content/apps/scrumboard/scrumboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var FuseScrumboardCardDialogComponent = /** @class */ (function () {
    function FuseScrumboardCardDialogComponent(dialogRef, data, dialog, scrumboardService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.scrumboardService = scrumboardService;
        this.toggleInArray = __WEBPACK_IMPORTED_MODULE_3__fuse_utils__["a" /* FuseUtils */].toggleInArray;
    }
    FuseScrumboardCardDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(function (board) {
                _this.board = board;
                _this.card = _this.board.cards.find(function (_card) {
                    return _this.data.cardId === _card.id;
                });
                _this.list = _this.board.lists.find(function (_list) {
                    return _this.data.listId === _list.id;
                });
            });
    };
    /**
     * Remove Due date
     */
    FuseScrumboardCardDialogComponent.prototype.removeDueDate = function () {
        this.card.due = '';
        this.updateCard();
    };
    /**
     * Toggle Subscribe
     */
    FuseScrumboardCardDialogComponent.prototype.toggleSubscribe = function () {
        this.card.subscribed = !this.card.subscribed;
        this.updateCard();
    };
    /**
     * Toggle Cover Image
     * @param attachmentId
     */
    FuseScrumboardCardDialogComponent.prototype.toggleCoverImage = function (attachmentId) {
        if (this.card.idAttachmentCover === attachmentId) {
            this.card.idAttachmentCover = '';
        }
        else {
            this.card.idAttachmentCover = attachmentId;
        }
        this.updateCard();
    };
    /**
     * Remove Attachment
     * @param attachment
     */
    FuseScrumboardCardDialogComponent.prototype.removeAttachment = function (attachment) {
        if (attachment.id === this.card.idAttachmentCover) {
            this.card.idAttachmentCover = '';
        }
        this.card.attachments.splice(this.card.attachments.indexOf(attachment), 1);
        this.updateCard();
    };
    /**
     * Remove Checklist
     * @param checklist
     */
    FuseScrumboardCardDialogComponent.prototype.removeChecklist = function (checklist) {
        this.card.checklists.splice(this.card.checklists.indexOf(checklist), 1);
        this.updateCard();
    };
    /**
     * Update Checked Count
     * @param list
     */
    FuseScrumboardCardDialogComponent.prototype.updateCheckedCount = function (list) {
        var checkItems = list.checkItems;
        var checkedItems = 0;
        var allCheckedItems = 0;
        var allCheckItems = 0;
        for (var _i = 0, checkItems_1 = checkItems; _i < checkItems_1.length; _i++) {
            var checkItem = checkItems_1[_i];
            if (checkItem.checked) {
                checkedItems++;
            }
        }
        list.checkItemsChecked = checkedItems;
        for (var _a = 0, _b = this.card.checklists; _a < _b.length; _a++) {
            var item = _b[_a];
            allCheckItems += item.checkItems.length;
            allCheckedItems += item.checkItemsChecked;
        }
        this.card.checkItems = allCheckItems;
        this.card.checkItemsChecked = allCheckedItems;
        this.updateCard();
    };
    /**
     * Remove Checklist Item
     * @param checkItem
     * @param checklist
     */
    FuseScrumboardCardDialogComponent.prototype.removeChecklistItem = function (checkItem, checklist) {
        checklist.checkItems.splice(checklist.checkItems.indexOf(checkItem), 1);
        this.updateCheckedCount(checklist);
        this.updateCard();
    };
    /**
     * Add Check Item
     * @param {NgForm} form
     * @param checkList
     */
    FuseScrumboardCardDialogComponent.prototype.addCheckItem = function (form, checkList) {
        var checkItemVal = form.value.checkItem;
        if (!checkItemVal || checkItemVal === '') {
            return;
        }
        var newCheckItem = {
            'name': checkItemVal,
            'checked': false
        };
        checkList.checkItems.push(newCheckItem);
        this.updateCheckedCount(checkList);
        form.setValue({ checkItem: '' });
        this.updateCard();
    };
    /**
     * Add Checklist
     * @param {NgForm} form
     */
    FuseScrumboardCardDialogComponent.prototype.addChecklist = function (form) {
        this.card.checklists.push({
            id: __WEBPACK_IMPORTED_MODULE_3__fuse_utils__["a" /* FuseUtils */].generateGUID(),
            name: form.value.checklistTitle,
            checkItemsChecked: 0,
            checkItems: []
        });
        form.setValue({ checklistTitle: '' });
        form.resetForm();
        this.checklistMenu.closeMenu();
        this.updateCard();
    };
    /**
     * On Checklist Menu Open
     */
    FuseScrumboardCardDialogComponent.prototype.onChecklistMenuOpen = function () {
        var _this = this;
        setTimeout(function () {
            _this.newCheckListTitleField.nativeElement.focus();
        });
    };
    /**
     * Add New Comment
     * @param {NgForm} form
     */
    FuseScrumboardCardDialogComponent.prototype.addNewComment = function (form) {
        var newCommentText = form.value.newComment;
        var newComment = {
            idMember: '36027j1930450d8bf7b10158',
            message: newCommentText,
            time: 'now'
        };
        this.card.comments.unshift(newComment);
        form.setValue({ newComment: '' });
        this.updateCard();
    };
    /**
     * Remove Card
     */
    FuseScrumboardCardDialogComponent.prototype.removeCard = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the card?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dialogRef.close();
                _this.scrumboardService.removeCard(_this.card.id, _this.list.id);
            }
        });
    };
    /**
     * Update Card
     */
    FuseScrumboardCardDialogComponent.prototype.updateCard = function () {
        this.scrumboardService.updateCard(this.card);
    };
    FuseScrumboardCardDialogComponent.prototype.ngOnDestroy = function () {
        this.onBoardChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('checklistMenuTrigger'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatMenuTrigger */])
    ], FuseScrumboardCardDialogComponent.prototype, "checklistMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('newCheckListTitleField'),
        __metadata("design:type", Object)
    ], FuseScrumboardCardDialogComponent.prototype, "newCheckListTitleField", void 0);
    FuseScrumboardCardDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-card-dialog',
            template: __webpack_require__("./src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardCardDialogComponent);
    return FuseScrumboardCardDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"labelsMenuView\" class=\"views\" (click)=\"$event.stopPropagation()\">\r\n\r\n    <div class=\"view\" *ngSwitchCase=\"'labels'\" fxFlex fxLayout=\"column\">\r\n\r\n        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div>Labels</div>\r\n            <button mat-button (click)=\"labelsMenuView ='add'\">\r\n                <mat-icon class=\"s-16\">add</mat-icon>\r\n                <span>Add</span>\r\n            </button>\r\n        </div>\r\n\r\n        <div fxFlex fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n            <div class=\"label\" *ngFor=\"let label of board.labels\" fxFlex=\"0 0 auto\" fxLayout=\"row\" fxFlexAlign=\"space-between center\"\r\n                 [ngClass]=\"label.color\">\r\n\r\n                <mat-checkbox fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" [checked]=\"card.idLabels.indexOf(label.id) > -1\"\r\n                              (change)=\"toggleInArray(label.id, card.idLabels);cardLabelsChanged()\">\r\n                    {{label.name}}\r\n                </mat-checkbox>\r\n\r\n                <button mat-icon-button>\r\n                    <mat-icon class=\"s-16\" (click)=\"labelsMenuView ='edit';selectedLabel = label\">mode_edit</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"view edit\" *ngSwitchCase=\"'edit'\" fxFlex fxLayout=\"column\">\r\n\r\n        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <button mat-icon-button (click)=\"labelsMenuView ='labels'\">\r\n                <mat-icon class=\"s-16\">arrow_back</mat-icon>\r\n            </button>\r\n            <div>Edit Label</div>\r\n        </div>\r\n\r\n        <div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"selectedLabel.name\" (change)=\"onLabelChange()\">\r\n            </mat-form-field>\r\n\r\n            <fuse-material-color-picker [(selectedClass)]=\"selectedLabel.color\" class=\"ml-8\" (change)=\"$event.preventDefault;onLabelChange()\"></fuse-material-color-picker>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"view add\" *ngSwitchCase=\"'add'\" fxFlex fxLayout=\"column\">\r\n\r\n        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <button mat-icon-button (click)=\"labelsMenuView ='labels'\">\r\n                <mat-icon class=\"s-16\">arrow_back</mat-icon>\r\n            </button>\r\n            <div>Add Label</div>\r\n        </div>\r\n\r\n        <form (submit)=\"addNewLabel()\" #newLabelForm=\"ngForm\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"start end\">\r\n\r\n            <div fxFlex=\"0 1 auto\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <mat-form-field fxFlex>\r\n                    <input matInput placeholder=\"Name\" [(ngModel)]=\"newLabel.name\" name=\"labelName\" required>\r\n                </mat-form-field>\r\n\r\n                <fuse-material-color-picker class=\"ml-8\" [(selectedClass)]=\"newLabel.color\" name=\"labelColor\"></fuse-material-color-picker>\r\n            </div>\r\n\r\n            <button mat-raised-button class=\"mat-accent mt-16\" [disabled]=\"!newLabelForm.valid\">ADD NEW LABEL</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.scss":
/***/ (function(module, exports) {

module.exports = ".scrumboard-labels-menu .mat-menu-content {\n  padding-bottom: 0; }\n  .scrumboard-labels-menu .mat-menu-content .mat-checkbox-layout,\n  .scrumboard-labels-menu .mat-menu-content .mat-checkbox-label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .scrumboard-labels-menu .mat-menu-content .views {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    overflow: hidden;\n    width: 240px;\n    min-width: 240px;\n    max-width: 240px;\n    min-height: 240px; }\n  .scrumboard-labels-menu .mat-menu-content .views .view {\n      position: absolute;\n      width: 240px;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0; }\n  .scrumboard-labels-menu .mat-menu-content .views .view > .header {\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n        padding: 4px 8px 8px 16px;\n        margin-bottom: 8px; }\n  .scrumboard-labels-menu .mat-menu-content .views .view .label {\n        margin: 0 8px 8px 8px;\n        padding: 4px 4px 4px 16px; }\n  .scrumboard-labels-menu .mat-menu-content .views .view.edit > .header, .scrumboard-labels-menu .mat-menu-content .views .view.add > .header {\n        padding: 0 8px 8px 0; }\n  .scrumboard-labels-menu .mat-menu-content .views .view.edit form, .scrumboard-labels-menu .mat-menu-content .views .view.add form {\n        padding: 0 16px 8px 16px; }\n  .scrumboard-labels-menu .mat-menu-content .views .view.edit form .mat-form-field-infix, .scrumboard-labels-menu .mat-menu-content .views .view.add form .mat-form-field-infix {\n          width: auto !important; }\n  .scrumboard-labels-menu .mat-menu-content .views .view.edit .content, .scrumboard-labels-menu .mat-menu-content .views .view.add .content {\n        padding: 8px 16px 8px 16px; }\n  .scrumboard-labels-menu .mat-menu-content .views .view.edit .content .mat-form-field-infix, .scrumboard-labels-menu .mat-menu-content .views .view.add .content .mat-form-field-infix {\n          width: auto !important; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardLabelSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scrumboard_service__ = __webpack_require__("./src/app/main/content/apps/scrumboard/scrumboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseScrumboardLabelSelectorComponent = /** @class */ (function () {
    function FuseScrumboardLabelSelectorComponent(scrumboardService) {
        this.scrumboardService = scrumboardService;
        this.onCardLabelsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.labelsMenuView = 'labels';
        this.newLabel = {
            'id': '',
            'name': '',
            'color': 'mat-blue-400-bg'
        };
        this.toggleInArray = __WEBPACK_IMPORTED_MODULE_2__fuse_utils__["a" /* FuseUtils */].toggleInArray;
    }
    FuseScrumboardLabelSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(function (board) {
                _this.board = board;
            });
    };
    FuseScrumboardLabelSelectorComponent.prototype.ngOnDestroy = function () {
        this.onBoardChanged.unsubscribe();
    };
    FuseScrumboardLabelSelectorComponent.prototype.cardLabelsChanged = function () {
        this.onCardLabelsChange.next();
    };
    FuseScrumboardLabelSelectorComponent.prototype.onLabelChange = function () {
        this.scrumboardService.updateBoard();
    };
    FuseScrumboardLabelSelectorComponent.prototype.addNewLabel = function () {
        this.newLabel.id = __WEBPACK_IMPORTED_MODULE_2__fuse_utils__["a" /* FuseUtils */].generateGUID();
        this.board.labels.push(Object.assign({}, this.newLabel));
        this.newLabel.name = '';
        this.labelsMenuView = 'labels';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('card'),
        __metadata("design:type", Object)
    ], FuseScrumboardLabelSelectorComponent.prototype, "card", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardLabelSelectorComponent.prototype, "onCardLabelsChange", void 0);
    FuseScrumboardLabelSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-label-selector',
            template: __webpack_require__("./src/app/main/content/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_1__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardLabelSelectorComponent);
    return FuseScrumboardLabelSelectorComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/edit-board-name/edit-board-name.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!formActive\" class=\"board-name\" fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <span>{{board.name}}</span>\r\n    <button mat-icon-button (click)=\"openForm()\">\r\n        <mat-icon class=\"s-16\">edit_mode</mat-icon>\r\n    </button>\r\n</div>\r\n\r\n\r\n<form [formGroup]=\"form\" (ngSubmit)=\"onFormSubmit()\"\r\n      class=\"board-name-form\" fxLayout=\"row\" fxFlex=\"1 0 auto\" *ngIf=\"formActive\">\r\n\r\n    <input formControlName=\"name\" #nameInput fxFlex=\"1 0 auto\" placeholder=\"Write a board name\">\r\n\r\n    <button mat-icon-button fxFlex=\"0 1 auto\">\r\n        <mat-icon>check</mat-icon>\r\n    </button>\r\n    <button mat-icon-button fxFlex=\"0 1 auto\" (click)=\"closeForm()\" type=\"button\">\r\n        <mat-icon>close</mat-icon>\r\n    </button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/edit-board-name/edit-board-name.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block !important; }\n  :host .board-name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    font-size: 15px;\n    font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/edit-board-name/edit-board-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardEditBoardNameComponent; });
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


var FuseScrumboardEditBoardNameComponent = /** @class */ (function () {
    function FuseScrumboardEditBoardNameComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formActive = false;
        this.onNameChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FuseScrumboardEditBoardNameComponent.prototype.openForm = function () {
        this.form = this.formBuilder.group({
            name: [this.board.name]
        });
        this.formActive = true;
        this.focusNameField();
    };
    FuseScrumboardEditBoardNameComponent.prototype.closeForm = function () {
        this.formActive = false;
    };
    FuseScrumboardEditBoardNameComponent.prototype.focusNameField = function () {
        var _this = this;
        setTimeout(function () {
            _this.nameInputField.nativeElement.focus();
        });
    };
    FuseScrumboardEditBoardNameComponent.prototype.onFormSubmit = function () {
        if (this.form.valid) {
            this.board.name = this.form.getRawValue().name;
            this.board.uri = encodeURIComponent(this.board.name).replace(/%20/g, '-').toLowerCase();
            this.onNameChanged.next(this.board.name);
            this.formActive = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardEditBoardNameComponent.prototype, "board", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardEditBoardNameComponent.prototype, "onNameChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nameInput'),
        __metadata("design:type", Object)
    ], FuseScrumboardEditBoardNameComponent.prototype, "nameInputField", void 0);
    FuseScrumboardEditBoardNameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-edit-board-name',
            template: __webpack_require__("./src/app/main/content/apps/scrumboard/board/edit-board-name/edit-board-name.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/scrumboard/board/edit-board-name/edit-board-name.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseScrumboardEditBoardNameComponent);
    return FuseScrumboardEditBoardNameComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/list/add-card/add-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!formActive\" class=\"add-card-button\"\r\n     (click)=\"openForm()\"\r\n     fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div>\r\n        <mat-icon class=\"s-20\">add</mat-icon>\r\n    </div>\r\n    <span>Add a card</span>\r\n</div>\r\n\r\n<div *ngIf=\"formActive\" class=\"add-card-form-wrapper\">\r\n\r\n    <form [formGroup]=\"form\" (submit)=\"onFormSubmit()\" class=\"add-card-form\" fxLayout=\"column\">\r\n\r\n        <mat-form-field fxFlex floatPlaceholder=\"never\">\r\n            <input #nameInput matInput formControlName=\"name\" placeholder=\"Card title\" autocomplete=\"off\" required>\r\n        </mat-form-field>\r\n\r\n        <div class=\"pl-8\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n            <button mat-raised-button class=\"add-button mat-accent\" aria-label=\"add\"\r\n                    [disabled]=\"form.invalid\">\r\n                <span>Add</span>\r\n            </button>\r\n\r\n            <button mat-icon-button (click)=\"closeForm()\" class=\"cancel-button\" aria-label=\"cancel\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/list/add-card/add-card.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .add-card-button {\n  position: relative;\n  height: 48px;\n  min-height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-transform: none;\n  font-weight: 500;\n  font-size: 14px;\n  background-color: #DCDFE2;\n  cursor: pointer;\n  border-radius: 2px; }\n  :host .add-card-button mat-icon {\n    margin-right: 8px;\n    color: rgba(0, 0, 0, 0.6); }\n  :host .add-card-form-wrapper {\n  background-color: #DCDFE2; }\n  :host .add-card-form-wrapper .add-card-form {\n    z-index: 999;\n    background: white;\n    display: block;\n    position: relative;\n    padding: 8px;\n    border-top: 1px solid rgba(0, 0, 0, 0.12); }\n  :host .add-card-form-wrapper .add-card-form mat-form-field {\n      width: 100%;\n      margin: 0;\n      padding: 12px 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/list/add-card/add-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardAddCardComponent; });
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


var FuseScrumboardBoardAddCardComponent = /** @class */ (function () {
    function FuseScrumboardBoardAddCardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formActive = false;
        this.onCardAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FuseScrumboardBoardAddCardComponent.prototype.openForm = function () {
        this.form = this.formBuilder.group({
            name: ''
        });
        this.formActive = true;
        this.focusNameField();
    };
    FuseScrumboardBoardAddCardComponent.prototype.closeForm = function () {
        this.formActive = false;
    };
    FuseScrumboardBoardAddCardComponent.prototype.focusNameField = function () {
        var _this = this;
        setTimeout(function () {
            _this.nameInputField.nativeElement.focus();
        });
    };
    FuseScrumboardBoardAddCardComponent.prototype.onFormSubmit = function () {
        if (this.form.valid) {
            var cardName = this.form.getRawValue().name;
            this.onCardAdd.next(cardName);
            this.formActive = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardAddCardComponent.prototype, "onCardAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nameInput'),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardAddCardComponent.prototype, "nameInputField", void 0);
    FuseScrumboardBoardAddCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-add-card',
            template: __webpack_require__("./src/app/main/content/apps/scrumboard/board/list/add-card/add-card.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/scrumboard/board/list/add-card/add-card.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseScrumboardBoardAddCardComponent);
    return FuseScrumboardBoardAddCardComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/list/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- CARD COVER -->\r\n<div *ngIf=\"board.settings.cardCoverImages && card.idAttachmentCover\"\r\n     class=\"list-card-cover\">\r\n    <img [src]=\"card.attachments | getById:card.idAttachmentCover:'src'\">\r\n</div>\r\n<!-- / CARD COVER -->\r\n\r\n<!-- CARD DETAILS -->\r\n<div class=\"list-card-details\">\r\n\r\n    <!-- CARD SORT HANDLE -->\r\n    <div class=\"list-card-sort-handle\">\r\n        <mat-icon mat-font-icon=\"icon-cursor-move\" class=\"icon s16\"></mat-icon>\r\n    </div>\r\n    <!-- /CARD SORT HANDLE -->\r\n\r\n    <!-- CARD LABELS -->\r\n    <div *ngIf=\"card.idLabels.length > 0\" class=\"list-card-labels\" fxLayout=\"row wrap\">\r\n\r\n        <span class=\"list-card-label\"\r\n              [ngClass]=\"board.labels | getById:labelId:'color'\"\r\n              *ngFor=\"let labelId of card.idLabels\"\r\n              [matTooltip]=\"board.labels | getById:labelId:'name'\">\r\n        </span>\r\n\r\n    </div>\r\n    <!-- / CARD LABELS -->\r\n\r\n    <!-- CARD NAME -->\r\n    <div class=\"list-card-name\">{{card.name}}</div>\r\n    <!-- / CARD NAME -->\r\n\r\n    <div *ngIf=\"card.due || card.checkItems\"\r\n         class=\"list-card-badges\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <!-- CARD DUE -->\r\n        <span class=\"badge due-date\"\r\n              [ngClass]=\"{'overdue': isOverdue(card.due)}\"\r\n              *ngIf=\"card.due\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"s-16\">access_time</mat-icon>\r\n            <span>{{card.due | date:'mediumDate'}}</span>\r\n\r\n        </span>\r\n        <!-- / CARD DUE -->\r\n\r\n        <!-- CARD CHECK ITEMS STATUS -->\r\n        <span *ngIf=\"card.checkItems\"\r\n              class=\"badge check-items\"\r\n              [ngClass]=\"{'completed': card.checkItemsChecked === card.checkItems}\"\r\n              fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"s-16\">check_circle</mat-icon>\r\n            <span>{{card.checkItemsChecked}}</span>\r\n            <span>/</span>\r\n            <span>{{card.checkItems}}</span>\r\n        </span>\r\n        <!-- / CARD CHECK ITEMS STATUS -->\r\n\r\n    </div>\r\n\r\n    <!-- CARD MEMBERS -->\r\n    <div *ngIf=\"card.idMembers.length > 0\"\r\n         class=\"list-card-members\"\r\n         fxLayout=\"row\">\r\n\r\n        <div class=\"list-card-member\"\r\n             *ngFor=\"let memberId of card.idMembers\">\r\n\r\n            <img class=\"list-card-member-avatar\"\r\n                 [src]=\"board.members | getById:memberId:'avatar'\"\r\n                 [matTooltip]=\"board.members | getById:memberId:'name'\">\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / CARD MEMBERS -->\r\n\r\n</div>\r\n<!-- / CARD DETAILS -->\r\n\r\n<!-- CARD FOOTER -->\r\n<div class=\"list-card-footer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <!-- CARD SUBSCRIBE -->\r\n        <span *ngIf=\"card.subscribed\" class=\"list-card-footer-item\"\r\n              fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"s-18\">remove_red_eye</mat-icon>\r\n        </span>\r\n        <!-- / CARD SUBSCRIBE -->\r\n\r\n        <!-- CARD DETAILS -->\r\n        <span *ngIf=\"card.description !== ''\"\r\n              class=\"list-card-footer-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"s-18\">description</mat-icon>\r\n        </span>\r\n        <!-- / CARD DETAILS -->\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n\r\n        <!-- CARD ATTACHMENT -->\r\n        <span *ngIf=\"card.attachments\"\r\n              class=\"list-card-footer-item\"\r\n              fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"s-18\">attachment</mat-icon>\r\n            <span class=\"value\">{{card.attachments.length}}</span>\r\n        </span>\r\n        <!-- / CARD ATTACHMENT -->\r\n\r\n        <!-- CARD COMMENTS -->\r\n        <span *ngIf=\"card.comments\"\r\n              class=\"list-card-footer-item\"\r\n              fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"s-18\">comment</mat-icon>\r\n            <span class=\"value\">{{card.comments.length}}</span>\r\n        </span>\r\n        <!-- / CARD COMMENTS -->\r\n\r\n    </div>\r\n</div>\r\n<!-- CARD FOOTER -->\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/list/card/card.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.scrumboard-board-card {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin: 16px 0 !important;\n  background-color: white !important;\n  color: #000;\n  border-radius: 2px;\n  -webkit-transition: -webkit-box-shadow 150ms ease;\n  transition: -webkit-box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease, -webkit-box-shadow 150ms ease;\n  cursor: pointer; }\n.scrumboard-board-card .list-card-sort-handle {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 4px;\n    background: rgba(255, 255, 255, 0.8); }\n.scrumboard-board-card .list-card-details {\n    padding: 16px 16px 0 16px; }\n.scrumboard-board-card .list-card-details .list-card-labels {\n      margin-bottom: 6px; }\n.scrumboard-board-card .list-card-details .list-card-labels .list-card-label {\n        width: 32px;\n        height: 6px;\n        border-radius: 6px;\n        margin: 0 6px 6px 0; }\n.scrumboard-board-card .list-card-details .list-card-name {\n      font-size: 14px;\n      font-weight: 500;\n      margin-bottom: 12px; }\n.scrumboard-board-card .list-card-details .list-card-badges {\n      margin-bottom: 12px; }\n.scrumboard-board-card .list-card-details .list-card-badges .badge {\n        margin-right: 8px;\n        padding: 4px 8px;\n        border-radius: 2px;\n        background-color: rgba(0, 0, 0, 0.4);\n        color: #FFFFFF; }\n.scrumboard-board-card .list-card-details .list-card-badges .badge mat-icon {\n          margin-right: 4px; }\n.scrumboard-board-card .list-card-details .list-card-badges .badge.due-date {\n          background-color: #4caf50; }\n.scrumboard-board-card .list-card-details .list-card-badges .badge.due-date.overdue {\n            background-color: #f44336; }\n.scrumboard-board-card .list-card-details .list-card-badges .badge.check-items.completed {\n          background-color: #4caf50; }\n.scrumboard-board-card .list-card-details .list-card-members {\n      margin-bottom: 12px; }\n.scrumboard-board-card .list-card-details .list-card-members .list-card-member {\n        margin-right: 8px; }\n.scrumboard-board-card .list-card-details .list-card-members .list-card-member .list-card-member-avatar {\n          border-radius: 50%;\n          width: 32px;\n          height: 32px; }\n.scrumboard-board-card .list-card-footer {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    padding: 0 16px; }\n.scrumboard-board-card .list-card-footer .list-card-footer-item {\n      height: 48px;\n      margin-right: 12px;\n      color: rgba(0, 0, 0, 0.66); }\n.scrumboard-board-card .list-card-footer .list-card-footer-item .value {\n        padding-left: 8px; }\n.scrumboard-board-card .list-card-footer .list-card-footer-item:last-of-type {\n        margin-right: 0; }\n.scrumboard-board-card .ngx-dnd-content {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n.scrumboard-board-card.gu-mirror {\n    position: fixed !important;\n    margin: 0 !important;\n    z-index: 9999 !important;\n    opacity: 0.8;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80);\n    -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.scrumboard-board-card.gu-hide {\n    display: none !important; }\n.scrumboard-board-card.gu-unselectable {\n    -webkit-user-select: none !important;\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important; }\n.scrumboard-board-card.gu-transit {\n    opacity: 0.2;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20); }\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/list/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseScrumboardBoardCardComponent = /** @class */ (function () {
    function FuseScrumboardBoardCardComponent(route) {
        this.route = route;
    }
    FuseScrumboardBoardCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.board = this.route.snapshot.data.board;
        this.card = this.board.cards.filter(function (card) {
            return _this.cardId === card.id;
        })[0];
    };
    /**
     * Is the card overdue?
     *
     * @param cardDate
     * @returns {boolean}
     */
    FuseScrumboardBoardCardComponent.prototype.isOverdue = function (cardDate) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__() > __WEBPACK_IMPORTED_MODULE_2_moment__(new Date(cardDate));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardCardComponent.prototype, "cardId", void 0);
    FuseScrumboardBoardCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-card',
            template: __webpack_require__("./src/app/main/content/apps/scrumboard/board/list/card/card.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/scrumboard/board/list/card/card.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], FuseScrumboardBoardCardComponent);
    return FuseScrumboardBoardCardComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"1 0 auto\" *ngIf=\"!formActive\" class=\"list-header-name\" (click)=\"openForm()\">\r\n    {{list.name}}\r\n</div>\r\n\r\n<form [formGroup]=\"form\" (ngSubmit)=\"onFormSubmit()\"\r\n      class=\"list-header-name-form\" fxLayout=\"row\" fxFlex=\"1 0 auto\"\r\n      *ngIf=\"formActive\">\r\n\r\n    <input formControlName=\"name\" #nameInput fxFlex placeholder=\"Write a list Name\">\r\n\r\n    <button mat-icon-button fxFlex=\"0 1 auto\">\r\n        <mat-icon>check</mat-icon>\r\n    </button>\r\n    <button mat-icon-button fxFlex=\"0 1 auto\" (click)=\"closeForm()\" type=\"button\">\r\n        <mat-icon>close</mat-icon>\r\n    </button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .list-header-name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardEditListNameComponent; });
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


var FuseScrumboardBoardEditListNameComponent = /** @class */ (function () {
    function FuseScrumboardBoardEditListNameComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formActive = false;
        this.onNameChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FuseScrumboardBoardEditListNameComponent.prototype.openForm = function () {
        this.form = this.formBuilder.group({
            name: [this.list.name]
        });
        this.formActive = true;
        this.focusNameField();
    };
    FuseScrumboardBoardEditListNameComponent.prototype.closeForm = function () {
        this.formActive = false;
    };
    FuseScrumboardBoardEditListNameComponent.prototype.focusNameField = function () {
        var _this = this;
        setTimeout(function () {
            _this.nameInputField.nativeElement.focus();
        });
    };
    FuseScrumboardBoardEditListNameComponent.prototype.onFormSubmit = function () {
        if (this.form.valid) {
            this.list.name = this.form.getRawValue().name;
            this.onNameChanged.next(this.list.name);
            this.formActive = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardEditListNameComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardEditListNameComponent.prototype, "onNameChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nameInput'),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardEditListNameComponent.prototype, "nameInputField", void 0);
    FuseScrumboardBoardEditListNameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-edit-list-name',
            template: __webpack_require__("./src/app/main/content/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseScrumboardBoardEditListNameComponent);
    return FuseScrumboardBoardEditListNameComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list mat-elevation-z1\" fxLayout=\"column\">\r\n\r\n    <!-- LIST HEADER -->\r\n    <div class=\"list-header\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <fuse-scrumboard-board-edit-list-name\r\n            fxFlex=\"1 0 auto\"\r\n            [list]=\"list\"\r\n            (onNameChanged)=\"onListNameChanged($event)\">\r\n        </fuse-scrumboard-board-edit-list-name>\r\n\r\n        <div fxFlex=\"0 1 auto\">\r\n            <button mat-icon-button class=\"list-header-option-button\" [matMenuTriggerFor]=\"listMenu\">\r\n                <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #listMenu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"removeList(list.id)\">Remove List</button>\r\n            </mat-menu>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / LIST HEADER -->\r\n\r\n    <!-- LIST CONTENT -->\r\n    <div class=\"list-content\" fxLayout=\"column\">\r\n\r\n        <div class=\"list-cards ngx-dnd-container\"\r\n             [model]=\"list.idCards\" ngxDroppable=\"card\" (out)=\"onDrop($event)\"\r\n             fusePerfectScrollbar #listScroll>\r\n            <fuse-scrumboard-board-card ngxDraggable\r\n                                        (click)=\"openCardDialog(cardId)\"\r\n                                        class=\"scrumboard-board-card mat-elevation-z2 ngx-dnd-item\"\r\n                                        *ngFor=\"let cardId of list.idCards\"\r\n                                        [model]=\"cardId\"\r\n                                        [cardId]=\"cardId\">\r\n            </fuse-scrumboard-board-card>\r\n        </div>\r\n    </div>\r\n    <!-- / LIST CONTENT -->\r\n\r\n    <!-- NEW CARD BUTTON-->\r\n    <div class=\"list-footer\">\r\n        <fuse-scrumboard-board-add-card (onCardAdd)=\"onCardAdd($event)\">\r\n        </fuse-scrumboard-board-add-card>\r\n    </div>\r\n    <!-- / NEW CARD BUTTON-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/list/list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.scrumboard-board-list {\n  width: 344px;\n  min-width: 344px;\n  max-width: 344px;\n  padding-right: 24px !important;\n  height: 100%; }\n.scrumboard-board-list .list {\n    max-height: 100%;\n    background-color: #EEF0F2;\n    color: #000;\n    border-radius: 2px;\n    -webkit-transition: -webkit-box-shadow 150ms ease;\n    transition: -webkit-box-shadow 150ms ease;\n    transition: box-shadow 150ms ease;\n    transition: box-shadow 150ms ease, -webkit-box-shadow 150ms ease; }\n.scrumboard-board-list .list .list-header {\n      height: 64px;\n      min-height: 64px;\n      padding: 0 8px 0 16px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n@media (max-width: 959px) {\n        .scrumboard-board-list .list .list-header {\n          height: 48px;\n          min-height: 48px; } }\n.scrumboard-board-list .list .list-content {\n      position: relative;\n      overflow: hidden;\n      overflow-y: auto;\n      min-height: 0; }\n.scrumboard-board-list .list .list-content .list-cards {\n        position: relative;\n        min-height: 32px;\n        padding: 0 16px;\n        background: #eeeeee !important; }\n.scrumboard-board-list .list .list-footer {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 auto;\n              flex: 1 0 auto;\n      min-height: 48px; }\n.scrumboard-board-list .ngx-dnd-content {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n.scrumboard-board-list.gu-mirror {\n    position: fixed !important;\n    margin: 0 !important;\n    z-index: 9999 !important;\n    opacity: 0.8;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80); }\n.scrumboard-board-list.gu-mirror > .list {\n      -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.scrumboard-board-list.gu-hide {\n    display: none !important; }\n.scrumboard-board-list.gu-unselectable {\n    -webkit-user-select: none !important;\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important; }\n.scrumboard-board-list.gu-transit {\n    opacity: 0.2;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20); }\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__ = __webpack_require__("./src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_model__ = __webpack_require__("./src/app/main/content/apps/scrumboard/card.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scrumboard_service__ = __webpack_require__("./src/app/main/content/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialogs_card_card_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FuseScrumboardBoardListComponent = /** @class */ (function () {
    function FuseScrumboardBoardListComponent(route, scrumboardService, dialog) {
        this.route = route;
        this.scrumboardService = scrumboardService;
        this.dialog = dialog;
    }
    FuseScrumboardBoardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(function (board) {
                _this.board = board;
            });
    };
    FuseScrumboardBoardListComponent.prototype.ngOnDestroy = function () {
        this.onBoardChanged.unsubscribe();
    };
    FuseScrumboardBoardListComponent.prototype.onListNameChanged = function (newListName) {
        this.list.name = newListName;
    };
    FuseScrumboardBoardListComponent.prototype.onCardAdd = function (newCardName) {
        var _this = this;
        if (newCardName === '') {
            return;
        }
        this.scrumboardService.addCard(this.list.id, new __WEBPACK_IMPORTED_MODULE_5__card_model__["a" /* Card */]({ name: newCardName }));
        setTimeout(function () {
            _this.listScroll.scrollToBottom(0, 400);
        });
    };
    FuseScrumboardBoardListComponent.prototype.removeList = function (listId) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the list and it\'s all cards?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.scrumboardService.removeList(listId);
            }
        });
    };
    FuseScrumboardBoardListComponent.prototype.openCardDialog = function (cardId) {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__dialogs_card_card_component__["a" /* FuseScrumboardCardDialogComponent */], {
            panelClass: 'scrumboard-card-dialog',
            data: {
                cardId: cardId,
                listId: this.list.id
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
        });
    };
    FuseScrumboardBoardListComponent.prototype.onDrop = function (ev) {
        this.scrumboardService.updateBoard();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseScrumboardBoardListComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */])
    ], FuseScrumboardBoardListComponent.prototype, "listScroll", void 0);
    FuseScrumboardBoardListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-list',
            template: __webpack_require__("./src/app/main/content/apps/scrumboard/board/list/list.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/scrumboard/board/list/list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__scrumboard_service__["b" /* ScrumboardService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
    ], FuseScrumboardBoardListComponent);
    return FuseScrumboardBoardListComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"colors\">\r\n    <!-- COLORS -->\r\n    <mat-list-item class=\"color m-8 mat-elevation-z1\"\r\n                   [ngClass]=\"'mat-'+color.key+'-bg'\"\r\n                   *ngFor=\"let color of (colors | keys)\"\r\n                   (click)=\"setColor(color.key)\"\r\n                   matRipple>\r\n        <p fxFlex>{{color.key}}</p>\r\n        <mat-icon class=\"s-16\" *ngIf=\"color.key === board.settings.color\">check</mat-icon>\r\n        <button mat-icon-button *ngIf=\"color.key === board.settings.color\" (click)=\"$event.stopPropagation();setColor('')\">\r\n            <mat-icon class=\"s-16\">delete</mat-icon>\r\n        </button>\r\n    </mat-list-item>\r\n    <!-- / COLORS -->\r\n</mat-list>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .colors .color {\n  position: relative;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardColorSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_mat_colors__ = __webpack_require__("./src/@fuse/mat-colors/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrumboard_service__ = __webpack_require__("./src/app/main/content/apps/scrumboard/scrumboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseScrumboardBoardColorSelectorComponent = /** @class */ (function () {
    function FuseScrumboardBoardColorSelectorComponent(scrumboardService) {
        this.scrumboardService = scrumboardService;
        this.colors = __WEBPACK_IMPORTED_MODULE_1__fuse_mat_colors__["a" /* MatColors */].all;
    }
    FuseScrumboardBoardColorSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(function (board) {
                _this.board = board;
            });
    };
    FuseScrumboardBoardColorSelectorComponent.prototype.ngOnDestroy = function () {
        this.onBoardChanged.unsubscribe();
    };
    FuseScrumboardBoardColorSelectorComponent.prototype.setColor = function (color) {
        this.board.settings.color = color;
        this.scrumboardService.updateBoard();
    };
    FuseScrumboardBoardColorSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-color-selector',
            template: __webpack_require__("./src/app/main/content/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardBoardColorSelectorComponent);
    return FuseScrumboardBoardColorSelectorComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/sidenavs/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"view\" class=\"views\" (click)=\"$event.stopPropagation()\">\r\n\r\n    <div class=\"view\" *ngSwitchCase=\"'main'\" [@slideInLeft]>\r\n\r\n        <!-- SIDENAV HEADER -->\r\n        <div class=\"header mat-accent-bg px-24\" [ngClass]=\"'mat-'+board.settings.color+'-bg'\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <div>Settings</div>\r\n        </div>\r\n        <!-- / SIDENAV HEADER -->\r\n\r\n        <!-- SIDENAV CONTENT -->\r\n        <div class=\"content py-16\" fusePerfectScrollbar>\r\n\r\n            <div class=\"nav\">\r\n                <div class=\"nav-item\">\r\n                    <div class=\"nav-link\" matRipple (click)=\"view = 'board-color'\">\r\n                        <mat-icon class=\"nav-link-icon\">format_color_fill</mat-icon>\r\n                        <p class=\"title\">Board Color</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"nav-item\">\r\n                    <div class=\"nav-link\" matRipple (click)=\"toggleCardCover()\">\r\n                        <mat-icon class=\"nav-link-icon\">photo</mat-icon>\r\n                        <p fxFlex class=\"title\">Card Cover Images</p>\r\n                        <mat-icon *ngIf=\"board.settings.cardCoverImages\" class=\"s-18\">check</mat-icon>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"nav-item\">\r\n                    <div class=\"nav-link\" matRipple (click)=\"toggleSubcription()\">\r\n                        <mat-icon class=\"nav-link-icon\">remove_red_eye</mat-icon>\r\n                        <p fxFlex class=\"title\">Subscribe</p>\r\n                        <mat-icon *ngIf=\"board.settings.subscribed\" class=\"s-18\">check</mat-icon>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"nav-item\">\r\n                    <div class=\"nav-link\" matRipple>\r\n                        <mat-icon class=\"nav-link-icon\">content_copy</mat-icon>\r\n                        <p class=\"title\">Copy Board</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"nav-item\">\r\n                    <div class=\"nav-link\" matRipple>\r\n                        <mat-icon class=\"nav-link-icon\">delete</mat-icon>\r\n                        <p class=\"title\">Delete Board</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <mat-divider></mat-divider>\r\n            </div>\r\n        </div>\r\n        <!-- / SIDENAV CONTENT -->\r\n    </div>\r\n\r\n    <div class=\"view\" *ngSwitchCase=\"'board-color'\" [@slideInRight]>\r\n\r\n        <!-- SIDENAV HEADER -->\r\n        <div class=\"header mat-accent-bg px-24\" [ngClass]=\"'mat-'+board.settings.color+'-bg'\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div>Background Color</div>\r\n            <button mat-icon-button (click)=\"view ='main'\">\r\n                <mat-icon class=\"s-16\">arrow_back</mat-icon>\r\n            </button>\r\n        </div>\r\n        <!-- / SIDENAV HEADER -->\r\n\r\n        <!-- SIDENAV CONTENT -->\r\n        <div class=\"content p-8\" fusePerfectScrollbar>\r\n            <fuse-scrumboard-board-color-selector></fuse-scrumboard-board-color-selector>\r\n        </div>\r\n        <!-- / SIDENAV CONTENT -->\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/sidenavs/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  height: 100%; }\n  :host .views {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    overflow: hidden;\n    height: 100%; }\n  :host .views .view {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n  :host .views .view > .header {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 1 auto;\n                flex: 0 1 auto;\n        height: 64px;\n        min-height: 64px;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  :host .views .view > .content {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 auto;\n                flex: 1 1 auto;\n        overflow-y: auto; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/board/sidenavs/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardBoardSettingsSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrumboard_service__ = __webpack_require__("./src/app/main/content/apps/scrumboard/scrumboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseScrumboardBoardSettingsSidenavComponent = /** @class */ (function () {
    function FuseScrumboardBoardSettingsSidenavComponent(scrumboardService) {
        this.scrumboardService = scrumboardService;
        this.view = 'main';
    }
    FuseScrumboardBoardSettingsSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(function (board) {
                _this.board = board;
            });
    };
    FuseScrumboardBoardSettingsSidenavComponent.prototype.ngOnDestroy = function () {
        this.onBoardChanged.unsubscribe();
    };
    FuseScrumboardBoardSettingsSidenavComponent.prototype.toggleCardCover = function () {
        this.board.settings.cardCoverImages = !this.board.settings.cardCoverImages;
        this.scrumboardService.updateBoard();
    };
    FuseScrumboardBoardSettingsSidenavComponent.prototype.toggleSubcription = function () {
        this.board.settings.subscribed = !this.board.settings.subscribed;
        this.scrumboardService.updateBoard();
    };
    FuseScrumboardBoardSettingsSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard-board-settings',
            template: __webpack_require__("./src/app/main/content/apps/scrumboard/board/sidenavs/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/scrumboard/board/sidenavs/settings/settings.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_1__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardBoardSettingsSidenavComponent);
    return FuseScrumboardBoardSettingsSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/card.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Card = /** @class */ (function () {
    function Card(card) {
        this.id = card.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
        this.name = card.name || '';
        this.description = card.description || '';
        this.idAttachmentCover = card.idAttachmentCover || '';
        this.idMembers = card.idMembers || [];
        this.idLabels = card.idLabels || [];
        this.attachments = card.attachments || [];
        this.subscribed = card.subscribed || true;
        this.checklists = card.checklists || [];
        this.checkItems = card.checkItems || 0;
        this.checkItemsChecked = card.checkItemsChecked || 0;
        this.comments = card.comments || [];
        this.activities = card.activities || [];
        this.due = card.due || '';
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var List = /** @class */ (function () {
    function List(list) {
        this.id = list.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
        this.name = list.name || '';
        this.idCards = [];
    }
    return List;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/scrumboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BOARDS -->\r\n<div id=\"boards\" class=\"mat-primary-400-bg\" fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex fusePerfectScrollbar>\r\n\r\n    <div class=\"header pt-44 pt-mat-88\" fxFlex=\"0 0 auto\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms'}}\">\r\n        <h1>Scrumboard App</h1>\r\n    </div>\r\n\r\n    <!-- BOARD LIST -->\r\n    <div class=\"board-list\" fxFlex=\"0 0 auto\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" *fuseIfOnDom\r\n         [@animateStagger]=\"{value:'50'}\">\r\n\r\n        <!-- BOARD -->\r\n        <div class=\"board-list-item\" *ngFor=\"let board of boards\"\r\n             [routerLink]=\"'/apps/scrumboard/boards/'+board.id+'/'+board.uri\"\r\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\r\n            <mat-icon class=\"s-64\">assessment</mat-icon>\r\n            <div class=\"board-name\">{{board.name}}</div>\r\n        </div>\r\n        <!-- / BOARD -->\r\n\r\n        <!-- NEW BOARD BUTTON -->\r\n        <div class=\"board-list-item add-new-board\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n             (click)=\"newBoard()\"\r\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\r\n            <mat-icon class=\"s-64\">add_circle</mat-icon>\r\n            <div class=\"board-name\">Add new board</div>\r\n        </div>\r\n        <!-- / NEW BOARD BUTTON -->\r\n\r\n    </div>\r\n    <!-- / BOARD LIST -->\r\n</div>\r\n<!-- / BOARDS -->\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/scrumboard.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  min-height: 100%; }\n:host #boards {\n    width: 100%;\n    overflow: auto; }\n:host #boards .board-list {\n      padding: 32px 0;\n      max-height: none !important; }\n:host #boards .board-list .board-list-item {\n        min-width: 210px;\n        width: 210px;\n        padding: 24px 0;\n        margin: 16px;\n        border-radius: 2px;\n        background: rgba(0, 0, 0, 0.12);\n        cursor: pointer; }\n:host #boards .board-list .board-list-item:hover {\n          -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n                  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n:host #boards .board-list .board-list-item .board-name {\n          padding-top: 16px;\n          font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/scrumboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseScrumboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__board_model__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scrumboard_service__ = __webpack_require__("./src/app/main/content/apps/scrumboard/scrumboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuseScrumboardComponent = /** @class */ (function () {
    function FuseScrumboardComponent(router, scrumboardService) {
        this.router = router;
        this.scrumboardService = scrumboardService;
    }
    FuseScrumboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardsChanged =
            this.scrumboardService.onBoardsChanged
                .subscribe(function (boards) {
                _this.boards = boards;
            });
    };
    FuseScrumboardComponent.prototype.ngOnDestroy = function () {
        this.onBoardsChanged.unsubscribe();
    };
    FuseScrumboardComponent.prototype.newBoard = function () {
        var _this = this;
        var newBoard = new __WEBPACK_IMPORTED_MODULE_3__board_model__["a" /* Board */]({});
        this.scrumboardService.createNewBoard(newBoard).then(function () {
            _this.router.navigate(['/apps/scrumboard/boards/' + newBoard.id + '/' + newBoard.uri]);
        });
    };
    FuseScrumboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-scrumboard',
            template: __webpack_require__("./src/app/main/content/apps/scrumboard/scrumboard.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/scrumboard/scrumboard.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_2__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__scrumboard_service__["b" /* ScrumboardService */]])
    ], FuseScrumboardComponent);
    return FuseScrumboardComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/scrumboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseScrumboardModule", function() { return FuseScrumboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scrumboard_service__ = __webpack_require__("./src/app/main/content/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scrumboard_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/scrumboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__board_board_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__board_list_list_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__board_list_card_card_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board/list/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__board_list_edit_list_name_edit_list_name_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__board_list_add_card_add_card_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board/list/add-card/add-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__board_add_list_add_list_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board/add-list/add-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__board_dialogs_card_card_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board/dialogs/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__board_dialogs_card_label_selector_label_selector_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__board_edit_board_name_edit_board_name_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board/edit-board-name/edit-board-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__board_sidenavs_settings_settings_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board/sidenavs/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__board_sidenavs_settings_board_color_selector_board_color_selector_component__ = __webpack_require__("./src/app/main/content/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__swimlane_ngx_dnd__ = __webpack_require__("./node_modules/@swimlane/ngx-dnd/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__swimlane_ngx_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__swimlane_ngx_dnd__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        path: 'boards',
        component: __WEBPACK_IMPORTED_MODULE_6__scrumboard_component__["a" /* FuseScrumboardComponent */],
        resolve: {
            scrumboard: __WEBPACK_IMPORTED_MODULE_5__scrumboard_service__["b" /* ScrumboardService */]
        }
    },
    {
        path: 'boards/:boardId/:boardUri',
        component: __WEBPACK_IMPORTED_MODULE_7__board_board_component__["a" /* FuseScrumboardBoardComponent */],
        resolve: {
            board: __WEBPACK_IMPORTED_MODULE_5__scrumboard_service__["a" /* BoardResolve */]
        }
    },
    {
        path: '**',
        redirectTo: 'boards'
    }
];
var FuseScrumboardModule = /** @class */ (function () {
    function FuseScrumboardModule() {
    }
    FuseScrumboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__scrumboard_component__["a" /* FuseScrumboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__board_board_component__["a" /* FuseScrumboardBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__board_list_list_component__["a" /* FuseScrumboardBoardListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__board_list_card_card_component__["a" /* FuseScrumboardBoardCardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__board_list_edit_list_name_edit_list_name_component__["a" /* FuseScrumboardBoardEditListNameComponent */],
                __WEBPACK_IMPORTED_MODULE_11__board_list_add_card_add_card_component__["a" /* FuseScrumboardBoardAddCardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__board_add_list_add_list_component__["a" /* FuseScrumboardBoardAddListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__board_dialogs_card_card_component__["a" /* FuseScrumboardCardDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__board_dialogs_card_label_selector_label_selector_component__["a" /* FuseScrumboardLabelSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_15__board_edit_board_name_edit_board_name_component__["a" /* FuseScrumboardEditBoardNameComponent */],
                __WEBPACK_IMPORTED_MODULE_16__board_sidenavs_settings_settings_component__["a" /* FuseScrumboardBoardSettingsSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_17__board_sidenavs_settings_board_color_selector_board_color_selector_component__["a" /* FuseScrumboardBoardColorSelectorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["Q" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_18__swimlane_ngx_dnd__["NgxDnDModule"],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["a" /* FuseConfirmDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["d" /* FuseMaterialColorPickerModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__scrumboard_service__["b" /* ScrumboardService */],
                __WEBPACK_IMPORTED_MODULE_5__scrumboard_service__["a" /* BoardResolve */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__board_dialogs_card_card_component__["a" /* FuseScrumboardCardDialogComponent */]]
        })
    ], FuseScrumboardModule);
    return FuseScrumboardModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/scrumboard/scrumboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScrumboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardResolve; });
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



var ScrumboardService = /** @class */ (function () {
    function ScrumboardService(http) {
        this.http = http;
        this.onBoardsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onBoardChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ScrumboardService.prototype.resolve = function (route, state) {
        var _this = this;
        this.routeParams = route.params;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getBoards()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    ScrumboardService.prototype.getBoards = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/scrumboard-boards')
                .subscribe(function (response) {
                _this.boards = response;
                _this.onBoardsChanged.next(_this.boards);
                resolve(_this.boards);
            }, reject);
        });
    };
    ScrumboardService.prototype.getBoard = function (boardId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/scrumboard-boards/' + boardId)
                .subscribe(function (response) {
                _this.board = response;
                _this.onBoardChanged.next(_this.board);
                resolve(_this.board);
            }, reject);
        });
    };
    ScrumboardService.prototype.addCard = function (listId, newCard) {
        this.board.lists.map(function (list) {
            if (list.id === listId) {
                return list.idCards.push(newCard.id);
            }
        });
        this.board.cards.push(newCard);
        return this.updateBoard();
    };
    ScrumboardService.prototype.addList = function (newList) {
        this.board.lists.push(newList);
        return this.updateBoard();
    };
    ScrumboardService.prototype.removeList = function (listId) {
        var list = this.board.lists.find(function (_list) {
            return _list.id === listId;
        });
        for (var _i = 0, _a = list.idCards; _i < _a.length; _i++) {
            var cardId = _a[_i];
            this.removeCard(cardId);
        }
        var index = this.board.lists.indexOf(list);
        this.board.lists.splice(index, 1);
        return this.updateBoard();
    };
    ScrumboardService.prototype.removeCard = function (cardId, listId) {
        var card = this.board.cards.find(function (_card) {
            return _card.id === cardId;
        });
        if (listId) {
            var list = this.board.lists.find(function (_list) {
                return listId === _list.id;
            });
            list.idCards.splice(list.idCards.indexOf(cardId), 1);
        }
        this.board.cards.splice(this.board.cards.indexOf(card), 1);
        this.updateBoard();
    };
    ScrumboardService.prototype.updateBoard = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/scrumboard-boards/' + _this.board.id, _this.board)
                .subscribe(function (response) {
                _this.onBoardChanged.next(_this.board);
                resolve(_this.board);
            }, reject);
        });
    };
    ScrumboardService.prototype.updateCard = function (newCard) {
        this.board.cards.map(function (_card) {
            if (_card.id === newCard.id) {
                return newCard;
            }
        });
        this.updateBoard();
    };
    ScrumboardService.prototype.createNewBoard = function (board) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/scrumboard-boards/' + board.id, board)
                .subscribe(function (response) {
                resolve(board);
            }, reject);
        });
    };
    ScrumboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ScrumboardService);
    return ScrumboardService;
}());

var BoardResolve = /** @class */ (function () {
    function BoardResolve(scrumboardService) {
        this.scrumboardService = scrumboardService;
    }
    BoardResolve.prototype.resolve = function (route) {
        return this.scrumboardService.getBoard(route.paramMap.get('boardId'));
    };
    BoardResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [ScrumboardService])
    ], BoardResolve);
    return BoardResolve;
}());



/***/ })

});
//# sourceMappingURL=scrumboard.module.chunk.js.map