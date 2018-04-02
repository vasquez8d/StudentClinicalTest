webpackJsonp(["contacts.module"],{

/***/ "./src/app/main/content/apps/contacts/contact-form/contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n            <button mat-button class=\"mat-icon-button\"\r\n                    (click)=\"dialogRef.close()\"\r\n                    aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n\r\n        <mat-toolbar-row class=\"toolbar-bottom py-8 py-sm-16\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <img [src]=\"contact.avatar\" class=\" avatar contact-avatar huge\"\r\n                 [alt]=\"contact.name\"/>\r\n            <div class=\"contact-name\">{{contact.name}}</div>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\r\n\r\n        <form [formGroup]=\"contactForm\">\r\n\r\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"name\" formControlName=\"name\" placeholder=\"Name\" matInput required>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-icon class=\"mr-12 mt-12\"></mat-icon>\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"lastName\" formControlName=\"lastName\" placeholder=\"Lastname\" matInput>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-icon class=\"mr-12 mt-12\">star</mat-icon>\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"nickname\" formControlName=\"nickname\" matInput placeholder=\"Nickname\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-icon class=\"mr-12 mt-12\">phone</mat-icon>\r\n                <mat-form-field fxFlex>\r\n                    <input formControlName=\"phone\" matInput placeholder=\"Phone number\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-icon class=\"mr-12 mt-12\">email</mat-icon>\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"email\" formControlName=\"email\" matInput type=\"email\" placeholder=\"Email\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-icon class=\"mr-12 mt-12\">domain</mat-icon>\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"company\" formControlName=\"company\" matInput placeholder=\"Company\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-icon class=\"mr-12 mt-12\">work</mat-icon>\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"jobTitle\" formControlName=\"jobTitle\" matInput placeholder=\"Job title\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field class=\"mr-24\" fxFlex>\r\n                    <input matInput [matDatepicker]=\"birthdayDatePicker\" placeholder=\"Birthday\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"birthdayDatePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #birthdayDatePicker></mat-datepicker>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-icon class=\"mr-12 mt-12\">home</mat-icon>\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"address\" formControlName=\"address\" matInput placeholder=\"Address\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" class=\"textarea-wrapper\" fxLayoutAlign=\"start start\">\r\n                <mat-icon class=\"mr-12 mt-12\">note</mat-icon>\r\n                <mat-form-field fxFlex>\r\n                    <textarea name=\"notes\" formControlName=\"notes\" placeholder=\"Notes\" matInput type=\"text\" max-rows=\"4\"></textarea>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <button *ngIf=\"action !=='edit'\"\r\n                mat-raised-button\r\n                (click)=\"dialogRef.close(contactForm)\"\r\n                class=\"save-button mat-accent\"\r\n                [disabled]=\"contactForm.invalid\"\r\n                aria-label=\"SAVE\">\r\n            SAVE\r\n        </button>\r\n\r\n        <button *ngIf=\"action ==='edit'\"\r\n                mat-raised-button\r\n                (click)=\"dialogRef.close(['save',contactForm])\"\r\n                class=\"save-button mat-accent\"\r\n                [disabled]=\"contactForm.invalid\"\r\n                aria-label=\"SAVE\">\r\n            SAVE\r\n        </button>\r\n\r\n        <button *ngIf=\"action ==='edit'\"\r\n                mat-button\r\n                class=\"mat-icon-button\"\r\n                (click)=\"dialogRef.close(['delete',contactForm])\"\r\n                aria-label=\"Delete\"\r\n                matTooltip=\"Delete\">\r\n            <mat-icon>delete</mat-icon>\r\n        </button>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/contacts/contact-form/contact-form.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.contact-form-dialog {\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .contact-form-dialog {\n      width: 100%; } }\n.contact-form-dialog .mat-dialog-container {\n    padding: 0;\n    overflow: hidden; }\n.contact-form-dialog .mat-dialog-container .mat-toolbar {\n      min-height: initial; }\n.contact-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.contact-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/contacts/contact-form/contact-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseContactsContactFormDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_model__ = __webpack_require__("./src/app/main/content/apps/contacts/contact.model.ts");
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




var FuseContactsContactFormDialogComponent = /** @class */ (function () {
    function FuseContactsContactFormDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Contact';
            this.contact = data.contact;
        }
        else {
            this.dialogTitle = 'New Contact';
            this.contact = new __WEBPACK_IMPORTED_MODULE_3__contact_model__["a" /* Contact */]({});
        }
        this.contactForm = this.createContactForm();
    }
    FuseContactsContactFormDialogComponent.prototype.createContactForm = function () {
        return this.formBuilder.group({
            id: [this.contact.id],
            name: [this.contact.name],
            lastName: [this.contact.lastName],
            avatar: [this.contact.avatar],
            nickname: [this.contact.nickname],
            company: [this.contact.company],
            jobTitle: [this.contact.jobTitle],
            email: [this.contact.email],
            phone: [this.contact.phone],
            address: [this.contact.address],
            birthday: [this.contact.birthday],
            notes: [this.contact.notes]
        });
    };
    FuseContactsContactFormDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-contacts-contact-form-dialog',
            template: __webpack_require__("./src/app/main/content/apps/contacts/contact-form/contact-form.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/contacts/contact-form/contact-form.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseContactsContactFormDialogComponent);
    return FuseContactsContactFormDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/contacts/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"dataSource\"\r\n           [@animateStagger]=\"{value:'50'}\">\r\n    <!-- Checkbox Column -->\r\n    <ng-container cdkColumnDef=\"checkbox\">\r\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\">\r\n            <mat-checkbox [(ngModel)]=\"checkboxes[contact.id]\" (ngModelChange)=\"onSelectedChange(contact.id)\"\r\n                          (click)=\"$event.stopPropagation()\">\r\n            </mat-checkbox>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Avatar Column -->\r\n    <ng-container cdkColumnDef=\"avatar\">\r\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\">\r\n            <img class=\"avatar\" *ngIf=\"contact.avatar\" [alt]=\"contact.name\"\r\n                 [src]=\"contact.avatar\"/>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container cdkColumnDef=\"name\">\r\n        <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\">\r\n            <p class=\"text-truncate font-weight-600\">{{contact.name}} {{contact.lastName}}</p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Email Column -->\r\n    <ng-container cdkColumnDef=\"email\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Email</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\r\n            <p class=\"email text-truncate\">\r\n                {{contact.email}}\r\n            </p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Phone Column -->\r\n    <ng-container cdkColumnDef=\"phone\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Phone</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-md>\r\n            <p class=\"phone text-truncate\">\r\n                {{contact.phone}}\r\n            </p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Job Title Column -->\r\n    <ng-container cdkColumnDef=\"jobTitle\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-lg>Job title</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-lg>\r\n            <p class=\"job-title text-truncate\">\r\n                {{contact.jobTitle}}\r\n            </p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Company Column -->\r\n    <ng-container cdkColumnDef=\"company\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-lg>Company</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-lg>\r\n            <p class=\"company text-truncate\">\r\n                {{contact.company}}\r\n            </p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Buttons Column -->\r\n    <ng-container cdkColumnDef=\"buttons\">\r\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\">\r\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\r\n                <button mat-icon-button (click)=\"$event.stopPropagation();toggleStar(contact.id)\" aria-label=\"Toggle star\">\r\n                    <mat-icon *ngIf=\"user.starred.includes(contact.id)\">star</mat-icon>\r\n                    <mat-icon *ngIf=\"!user.starred.includes(contact.id)\">star_outline</mat-icon>\r\n                </button>\r\n\r\n                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\r\n                        (click)=\"$event.stopPropagation();\">\r\n                    <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n\r\n                <mat-menu #moreMenu=\"matMenu\">\r\n                    <button mat-menu-item aria-label=\"remove\" (click)=\"deleteContact(contact)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>Remove</span>\r\n                    </button>\r\n                </mat-menu>\r\n            </div>\r\n\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *cdkRowDef=\"let contact; columns: displayedColumns;\"\r\n             class=\"contact\"\r\n             (click)=\"editContact(contact)\"\r\n             [ngClass]=\"{'mat-light-blue-50-bg':checkboxes[contact.id]}\"\r\n             matRipple\r\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\r\n    </mat-row>\r\n</mat-table>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/contacts/contact-list/contact-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-contacts-contact-list {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\nfuse-contacts-contact-list .mat-table {\n    background: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\nfuse-contacts-contact-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 48px;\n              flex: 0 1 48px; }\nfuse-contacts-contact-list .mat-table .mat-column-checkbox .mat-checkbox-ripple {\n        display: none !important; }\nfuse-contacts-contact-list .mat-table .mat-column-avatar {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 64px;\n              flex: 0 1 64px; }\nfuse-contacts-contact-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 80px;\n              flex: 0 1 80px; }\nfuse-contacts-contact-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px 8px 8px 24px; }\nfuse-contacts-contact-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nfuse-contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 1 auto;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            fuse-contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\n#add-contact-button {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  padding: 0;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/contacts/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseContactsContactListComponent; });
/* unused harmony export FilesDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_form_contact_form_component__ = __webpack_require__("./src/app/main/content/apps/contacts/contact-form/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacts_service__ = __webpack_require__("./src/app/main/content/apps/contacts/contacts.service.ts");
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







var FuseContactsContactListComponent = /** @class */ (function () {
    function FuseContactsContactListComponent(contactsService, dialog) {
        var _this = this;
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.displayedColumns = ['checkbox', 'avatar', 'name', 'email', 'phone', 'jobTitle', 'buttons'];
        this.onContactsChangedSubscription =
            this.contactsService.onContactsChanged.subscribe(function (contacts) {
                _this.contacts = contacts;
                _this.checkboxes = {};
                contacts.map(function (contact) {
                    _this.checkboxes[contact.id] = false;
                });
            });
        this.onSelectedContactsChangedSubscription =
            this.contactsService.onSelectedContactsChanged.subscribe(function (selectedContacts) {
                for (var id in _this.checkboxes) {
                    if (!_this.checkboxes.hasOwnProperty(id)) {
                        continue;
                    }
                    _this.checkboxes[id] = selectedContacts.includes(id);
                }
                _this.selectedContacts = selectedContacts;
            });
        this.onUserDataChangedSubscription =
            this.contactsService.onUserDataChanged.subscribe(function (user) {
                _this.user = user;
            });
    }
    FuseContactsContactListComponent.prototype.ngOnInit = function () {
        this.dataSource = new FilesDataSource(this.contactsService);
    };
    FuseContactsContactListComponent.prototype.ngOnDestroy = function () {
        this.onContactsChangedSubscription.unsubscribe();
        this.onSelectedContactsChangedSubscription.unsubscribe();
        this.onUserDataChangedSubscription.unsubscribe();
    };
    FuseContactsContactListComponent.prototype.editContact = function (contact) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__contact_form_contact_form_component__["a" /* FuseContactsContactFormDialogComponent */], {
            panelClass: 'contact-form-dialog',
            data: {
                contact: contact,
                action: 'edit'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            var actionType = response[0];
            var formData = response[1];
            switch (actionType) {
                /**
                 * Save
                 */
                case 'save':
                    _this.contactsService.updateContact(formData.getRawValue());
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    _this.deleteContact(contact);
                    break;
            }
        });
    };
    /**
     * Delete Contact
     */
    FuseContactsContactListComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.contactsService.deleteContact(contact);
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseContactsContactListComponent.prototype.onSelectedChange = function (contactId) {
        this.contactsService.toggleSelectedContact(contactId);
    };
    FuseContactsContactListComponent.prototype.toggleStar = function (contactId) {
        if (this.user.starred.includes(contactId)) {
            this.user.starred.splice(this.user.starred.indexOf(contactId), 1);
        }
        else {
            this.user.starred.push(contactId);
        }
        this.contactsService.updateUserData(this.user);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], FuseContactsContactListComponent.prototype, "dialogContent", void 0);
    FuseContactsContactListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-contacts-contact-list',
            template: __webpack_require__("./src/app/main/content/apps/contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/contacts/contact-list/contact-list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__contacts_service__["a" /* ContactsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], FuseContactsContactListComponent);
    return FuseContactsContactListComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    function FilesDataSource(contactsService) {
        var _this = _super.call(this) || this;
        _this.contactsService = contactsService;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    FilesDataSource.prototype.connect = function () {
        return this.contactsService.onContactsChanged;
    };
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/main/content/apps/contacts/contact.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Contact = /** @class */ (function () {
    function Contact(contact) {
        {
            this.id = contact.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
            this.name = contact.name || '';
            this.lastName = contact.lastName || '';
            this.avatar = contact.avatar || 'assets/images/avatars/profile.jpg';
            this.nickname = contact.nickname || '';
            this.company = contact.company || '';
            this.jobTitle = contact.jobTitle || '';
            this.email = contact.email || '';
            this.phone = contact.phone || '';
            this.address = contact.address || '';
            this.birthday = contact.birhday || '';
            this.notes = contact.notes || '';
        }
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/main/content/apps/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contacts\" class=\"page-layout simple left-sidenav inner-sidenav\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\"\r\n         fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n        <!-- APP TITLE -->\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <button mat-button class=\"mat-icon-button sidenav-toggle mr-12\"\r\n                    fuseMatSidenavToggler=\"contacts-main-sidenav\"\r\n                    fxHide.gt-md>\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n\r\n            <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">account_box</mat-icon>\r\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Contacts</span>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / APP TITLE -->\r\n\r\n        <!-- SEARCH -->\r\n        <div class=\"search-input-wrapper mt-16 ml-8 m-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <label for=\"search\" class=\"mr-8\">\r\n                <mat-icon>search</mat-icon>\r\n            </label>\r\n            <mat-form-field mat-no-float class=\"m-0\" floatPlaceholder=\"never\">\r\n                <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for anything\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- / SEARCH -->\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- SELECTED BAR -->\r\n    <fuse-selected-bar class=\"mat-accent-600-bg\" *ngIf=\"hasSelectedContacts\" [@slideInTop]></fuse-selected-bar>\r\n    <!-- / SELECTED BAR -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"contacts-main-sidenav\" mat-is-locked-open=\"gt-sm\">\r\n\r\n            <fuse-contacts-main-sidenav *fuseIfOnDom [@animate]=\"{value:'*'}\"></fuse-contacts-main-sidenav>\r\n\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center p-24 pb-56 pr-sm-92\" fusePerfectScrollbar>\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content mat-white-bg mat-elevation-z4\">\r\n\r\n                <fuse-contacts-contact-list></fuse-contacts-contact-list>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n\r\n<!-- ADD CONTACT BUTTON -->\r\n<button mat-fab class=\"mat-accent-bg\" id=\"add-contact-button\" (click)=\"newContact()\" aria-label=\"add contact\"\r\n        *fuseIfOnDom [@animate]=\"{value:'*', params:{delay:'300ms',scale:'.2'}}\">\r\n    <mat-icon>person_add</mat-icon>\r\n</button>\r\n<!-- / ADD CONTACT BUTTON -->\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/contacts/contacts.component.scss":
/***/ (function(module, exports) {

module.exports = "#contacts .content {\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_form_contact_form_component__ = __webpack_require__("./src/app/main/content/apps/contacts/contact-form/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_service__ = __webpack_require__("./src/app/main/content/apps/contacts/contacts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FuseContactsComponent = /** @class */ (function () {
    function FuseContactsComponent(contactsService, dialog) {
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
    }
    FuseContactsComponent.prototype.newContact = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__contact_form_contact_form_component__["a" /* FuseContactsContactFormDialogComponent */], {
            panelClass: 'contact-form-dialog',
            data: {
                action: 'new'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            _this.contactsService.updateContact(response.getRawValue());
        });
    };
    FuseContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectedContactsChangedSubscription =
            this.contactsService.onSelectedContactsChanged
                .subscribe(function (selectedContacts) {
                _this.hasSelectedContacts = selectedContacts.length > 0;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.contactsService.onSearchTextChanged.next(searchText);
        });
    };
    FuseContactsComponent.prototype.ngOnDestroy = function () {
        this.onSelectedContactsChangedSubscription.unsubscribe();
    };
    FuseContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-contacts',
            template: __webpack_require__("./src/app/main/content/apps/contacts/contacts.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/contacts/contacts.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__contacts_service__["a" /* ContactsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */]])
    ], FuseContactsComponent);
    return FuseContactsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/contacts/contacts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseContactsModule", function() { return FuseContactsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidenavs_main_main_component__ = __webpack_require__("./src/app/main/content/apps/contacts/sidenavs/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_component__ = __webpack_require__("./src/app/main/content/apps/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contacts_service__ = __webpack_require__("./src/app/main/content/apps/contacts/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_list_contact_list_component__ = __webpack_require__("./src/app/main/content/apps/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selected_bar_selected_bar_component__ = __webpack_require__("./src/app/main/content/apps/contacts/selected-bar/selected-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_form_contact_form_component__ = __webpack_require__("./src/app/main/content/apps/contacts/contact-form/contact-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_7__contacts_component__["a" /* FuseContactsComponent */],
        resolve: {
            contacts: __WEBPACK_IMPORTED_MODULE_8__contacts_service__["a" /* ContactsService */]
        }
    }
];
var FuseContactsModule = /** @class */ (function () {
    function FuseContactsModule() {
    }
    FuseContactsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__contacts_component__["a" /* FuseContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_list_contact_list_component__["a" /* FuseContactsContactListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__selected_bar_selected_bar_component__["a" /* FuseContactsSelectedBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidenavs_main_main_component__["a" /* FuseContactsMainSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_form_contact_form_component__["a" /* FuseContactsContactFormDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["E" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["N" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["P" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_components__["a" /* FuseConfirmDialogModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__contacts_service__["a" /* ContactsService */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__contact_form_contact_form_component__["a" /* FuseContactsContactFormDialogComponent */]]
        })
    ], FuseContactsModule);
    return FuseContactsModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/contacts/contacts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_model__ = __webpack_require__("./src/app/main/content/apps/contacts/contact.model.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactsService = /** @class */ (function () {
    function ContactsService(http) {
        this.http = http;
        this.onContactsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onSelectedContactsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onUserDataChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onSearchTextChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.onFilterChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.selectedContacts = [];
    }
    /**
     * The Contacts App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ContactsService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getContacts(),
                _this.getUserData()
            ]).then(function (_a) {
                var files = _a[0];
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    _this.searchText = searchText;
                    _this.getContacts();
                });
                _this.onFilterChanged.subscribe(function (filter) {
                    _this.filterBy = filter;
                    _this.getContacts();
                });
                resolve();
            }, reject);
        });
    };
    ContactsService.prototype.getContacts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/contacts-contacts')
                .subscribe(function (response) {
                _this.contacts = response;
                if (_this.filterBy === 'starred') {
                    _this.contacts = _this.contacts.filter(function (_contact) {
                        return _this.user.starred.includes(_contact.id);
                    });
                }
                if (_this.filterBy === 'frequent') {
                    _this.contacts = _this.contacts.filter(function (_contact) {
                        return _this.user.frequentContacts.includes(_contact.id);
                    });
                }
                if (_this.searchText && _this.searchText !== '') {
                    _this.contacts = __WEBPACK_IMPORTED_MODULE_4__fuse_utils__["a" /* FuseUtils */].filterArrayByString(_this.contacts, _this.searchText);
                }
                _this.contacts = _this.contacts.map(function (contact) {
                    return new __WEBPACK_IMPORTED_MODULE_5__contact_model__["a" /* Contact */](contact);
                });
                _this.onContactsChanged.next(_this.contacts);
                resolve(_this.contacts);
            }, reject);
        });
    };
    ContactsService.prototype.getUserData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/contacts-user/5725a6802d10e277a0f35724')
                .subscribe(function (response) {
                _this.user = response;
                _this.onUserDataChanged.next(_this.user);
                resolve(_this.user);
            }, reject);
        });
    };
    /**
     * Toggle selected contact by id
     * @param id
     */
    ContactsService.prototype.toggleSelectedContact = function (id) {
        // First, check if we already have that todo as selected...
        if (this.selectedContacts.length > 0) {
            var index = this.selectedContacts.indexOf(id);
            if (index !== -1) {
                this.selectedContacts.splice(index, 1);
                // Trigger the next event
                this.onSelectedContactsChanged.next(this.selectedContacts);
                // Return
                return;
            }
        }
        // If we don't have it, push as selected
        this.selectedContacts.push(id);
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    /**
     * Toggle select all
     */
    ContactsService.prototype.toggleSelectAll = function () {
        if (this.selectedContacts.length > 0) {
            this.deselectContacts();
        }
        else {
            this.selectContacts();
        }
    };
    ContactsService.prototype.selectContacts = function (filterParameter, filterValue) {
        var _this = this;
        this.selectedContacts = [];
        // If there is no filter, select all todos
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedContacts = [];
            this.contacts.map(function (contact) {
                _this.selectedContacts.push(contact.id);
            });
        }
        else {
            /* this.selectedContacts.push(...
                 this.contacts.filter(todo => {
                     return todo[filterParameter] === filterValue;
                 })
             );*/
        }
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    ContactsService.prototype.updateContact = function (contact) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/contacts-contacts/' + contact.id, __assign({}, contact))
                .subscribe(function (response) {
                _this.getContacts();
                resolve(response);
            });
        });
    };
    ContactsService.prototype.updateUserData = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/contacts-user/' + _this.user.id, __assign({}, userData))
                .subscribe(function (response) {
                _this.getUserData();
                _this.getContacts();
                resolve(response);
            });
        });
    };
    ContactsService.prototype.deselectContacts = function () {
        this.selectedContacts = [];
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    ContactsService.prototype.deleteContact = function (contact) {
        var contactIndex = this.contacts.indexOf(contact);
        this.contacts.splice(contactIndex, 1);
        this.onContactsChanged.next(this.contacts);
    };
    ContactsService.prototype.deleteSelectedContacts = function () {
        var _loop_1 = function (contactId) {
            var contact = this_1.contacts.find(function (_contact) {
                return _contact.id === contactId;
            });
            var contactIndex = this_1.contacts.indexOf(contact);
            this_1.contacts.splice(contactIndex, 1);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.selectedContacts; _i < _a.length; _i++) {
            var contactId = _a[_i];
            _loop_1(contactId);
        }
        this.onContactsChanged.next(this.contacts);
        this.deselectContacts();
    };
    ContactsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/contacts/selected-bar/selected-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-24\">\r\n\r\n    <div class=\"close-button-wrapper\" fxFlex=\"0 1 auto\" fxFlex.gt-sm=\"220px\" (click)=\"deselectAll()\">\r\n        <button class=\"p-8\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"mr-8\">arrow_back</mat-icon>\r\n            <span class=\"text-uppercase\">Back</span>\r\n        </button>\r\n    </div>\r\n\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutAlign.gt-sm=\"space-between center\">\r\n\r\n        <div>\r\n            <span class=\"selected-contacts-count\">\r\n                <span>{{selectedContacts.length}}</span>\r\n                <span>selected</span>\r\n            </span>\r\n\r\n            <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\r\n                <mat-icon>arrow_drop_down</mat-icon>\r\n            </button>\r\n            <mat-menu #selectMenu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"selectAll()\">Select all</button>\r\n                <button mat-menu-item (click)=\"deselectAll()\">Deselect all</button>\r\n            </mat-menu>\r\n\r\n        </div>\r\n\r\n        <div class=\"multi-select-actions\">\r\n            <button mat-icon-button (click)=\"deleteSelectedContacts()\" aria-label=\"delete selected\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/contacts/selected-bar/selected-bar.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 120px;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/contacts/selected-bar/selected-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseContactsSelectedBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_service__ = __webpack_require__("./src/app/main/content/apps/contacts/contacts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseContactsSelectedBarComponent = /** @class */ (function () {
    function FuseContactsSelectedBarComponent(contactsService, dialog) {
        var _this = this;
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.contactsService.onSelectedContactsChanged
            .subscribe(function (selectedContacts) {
            _this.selectedContacts = selectedContacts;
            setTimeout(function () {
                _this.hasSelectedContacts = selectedContacts.length > 0;
                _this.isIndeterminate = (selectedContacts.length !== _this.contactsService.contacts.length && selectedContacts.length > 0);
            }, 0);
        });
    }
    FuseContactsSelectedBarComponent.prototype.selectAll = function () {
        this.contactsService.selectContacts();
    };
    FuseContactsSelectedBarComponent.prototype.deselectAll = function () {
        this.contactsService.deselectContacts();
    };
    FuseContactsSelectedBarComponent.prototype.deleteSelectedContacts = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected contacts?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.contactsService.deleteSelectedContacts();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseContactsSelectedBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-selected-bar',
            template: __webpack_require__("./src/app/main/content/apps/contacts/selected-bar/selected-bar.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/contacts/selected-bar/selected-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__contacts_service__["a" /* ContactsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], FuseContactsSelectedBarComponent);
    return FuseContactsSelectedBarComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/contacts/sidenavs/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-content\">\r\n\r\n    <div class=\"card mat-white-bg\">\r\n        <!-- SIDENAV HEADER -->\r\n        <div class=\"header p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <!-- USER -->\r\n            <img [src]=\"user.avatar\" class=\"avatar mr-16\" [alt]=\"user.name\"/>\r\n            <span class=\"h5\">{{user.name}}</span>\r\n            <!-- / USER -->\r\n\r\n        </div>\r\n        <!-- / SIDENAV HEADER -->\r\n\r\n        <!-- SIDENAV CONTENT -->\r\n        <div class=\"content py-16\" fusePerfectScrollbar>\r\n\r\n            <div class=\"nav\">\r\n\r\n                <div class=\"nav-item\" aria-label=\"inbox\">\r\n                    <a class=\"nav-link\" matRipple (click)=\"changeFilter('all')\" [ngClass]=\"{'active':filterBy ==='all'}\">\r\n                        <span class=\"title\">All Contacts</span>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"nav-item\" aria-label=\"frequently contacted\" (click)=\"changeFilter('frequent')\">\r\n                    <a class=\"nav-link\" matRipple [ngClass]=\"{'active':filterBy ==='frequent'}\">\r\n                        <div class=\"title\">Freequently contacted</div>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"nav-item\" aria-label=\"starred\" (click)=\"changeFilter('starred')\">\r\n                    <a class=\"nav-link\" matRipple [ngClass]=\"{'active':filterBy ==='starred'}\">\r\n                        <div class=\"title\">Starred Contacts</div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- / SIDENAV CONTENT -->\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/contacts/sidenavs/main/main.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  height: 100%; }\n:host .sidenav-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0; }\n@media screen and (min-width: 960px) {\n      :host .sidenav-content {\n        padding: 24px 4px 24px 24px; } }\n:host .sidenav-content .card {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 auto;\n              flex: 0 1 auto;\n      padding: 0; }\n@media screen and (min-width: 960px) {\n        :host .sidenav-content .card {\n          -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n                  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); } }\n:host .sidenav-content .card > .header {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 1 auto;\n                flex: 0 1 auto;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .sidenav-content .card > .content {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 1 auto;\n                flex: 0 1 auto; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/contacts/sidenavs/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseContactsMainSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts_service__ = __webpack_require__("./src/app/main/content/apps/contacts/contacts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseContactsMainSidenavComponent = /** @class */ (function () {
    function FuseContactsMainSidenavComponent(contactsService) {
        var _this = this;
        this.contactsService = contactsService;
        this.filterBy = this.contactsService.filterBy || 'all';
        this.onUserDataChangedSubscription =
            this.contactsService.onUserDataChanged.subscribe(function (user) {
                _this.user = user;
            });
    }
    FuseContactsMainSidenavComponent.prototype.changeFilter = function (filter) {
        this.filterBy = filter;
        this.contactsService.onFilterChanged.next(this.filterBy);
    };
    FuseContactsMainSidenavComponent.prototype.ngOnDestroy = function () {
        this.onUserDataChangedSubscription.unsubscribe();
    };
    FuseContactsMainSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-contacts-main-sidenav',
            template: __webpack_require__("./src/app/main/content/apps/contacts/sidenavs/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/contacts/sidenavs/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */]])
    ], FuseContactsMainSidenavComponent);
    return FuseContactsMainSidenavComponent;
}());



/***/ })

});
//# sourceMappingURL=contacts.module.chunk.js.map