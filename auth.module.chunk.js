webpackJsonp(["auth.module"],{

/***/ "./node_modules/angular5-social-login/angular5-social-login.umd.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js"), __webpack_require__("./node_modules/@angular/common/esm5/common.js"), __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js")) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs/BehaviorSubject'], factory) :
	(factory((global['angular5-social-login'] = {}),global.core,global.common,global.BehaviorSubject));
}(this, (function (exports,core,common,BehaviorSubject) { 'use strict';

var AuthServiceConfig = (function () {
    /**
     * @param {?} providers
     */
    function AuthServiceConfig(providers) {
        this.providers = new Map();
        for (var i = 0; i < providers.length; i++) {
            var element = providers[i];
            this.providers.set(element.id, element.provider);
        }
    }
    return AuthServiceConfig;
}());
var AuthService = (function () {
    /**
     * @param {?} config
     */
    function AuthService(config) {
        var _this = this;
        this._user = null;
        this._authState = new BehaviorSubject.BehaviorSubject(null);
        this.providers = config.providers;
        this.providers.forEach(function (provider, key) {
            provider.initialize().then(function (user) {
                user.provider = key;
                _this._user = user;
                _this._authState.next(user);
            }).catch(function (err) {
                // this._authState.next(null);
            });
        });
    }
    Object.defineProperty(AuthService.prototype, "authState", {
        /**
         * @return {?}
         */
        get: function () {
            return this._authState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} providerId
     * @return {?}
     */
    AuthService.prototype.signIn = function (providerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var /** @type {?} */ providerObject = _this.providers.get(providerId);
            if (providerObject) {
                providerObject.signIn().then(function (user) {
                    user.provider = providerId;
                    resolve(user);
                    _this._user = user;
                    _this._authState.next(user);
                });
            }
            else {
                reject(AuthService.LOGIN_PROVIDER_NOT_FOUND);
            }
        });
    };
    /**
     * @return {?}
     */
    AuthService.prototype.signOut = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._user && _this._user.provider) {
                var /** @type {?} */ providerId = _this._user.provider;
                var /** @type {?} */ providerObject = _this.providers.get(providerId);
                providerObject.signOut().then(function () {
                    _this._user = null;
                    _this._authState.next(null);
                    resolve();
                }).catch(function (err) {
                    _this._authState.next(null);
                });
            }
            else {
                reject(AuthService.LOGIN_PROVIDER_NOT_FOUND);
            }
        });
    };
    return AuthService;
}());
AuthService.LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
AuthService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
AuthService.ctorParameters = function () { return [
    { type: AuthServiceConfig, },
]; };

var SocialLoginModule = (function () {
    function SocialLoginModule() {
    }
    return SocialLoginModule;
}());
SocialLoginModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                providers: [
                    AuthService
                ]
            },] },
];
/**
 * @nocollapse
 */
SocialLoginModule.ctorParameters = function () { return []; };

var SocialUser = (function () {
    function SocialUser() {
    }
    return SocialUser;
}());
var LoginProviderClass = (function () {
    function LoginProviderClass() {
    }
    return LoginProviderClass;
}());
var LinkedInResponse = (function () {
    function LinkedInResponse() {
    }
    return LinkedInResponse;
}());

/**
 * @abstract
 */
var BaseLoginProvider = (function () {
    function BaseLoginProvider() {
    }
    /**
     * @abstract
     * @return {?}
     */
    BaseLoginProvider.prototype.initialize = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BaseLoginProvider.prototype.signIn = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BaseLoginProvider.prototype.signOut = function () { };
    /**
     * @param {?} obj
     * @param {?} onload
     * @return {?}
     */
    BaseLoginProvider.prototype.loadScript = function (obj, onload) {
        if (document.getElementById(obj.name)) {
            return;
        }
        var /** @type {?} */ signInJS = document.createElement('script');
        signInJS.async = true;
        signInJS.src = obj.url;
        signInJS.onload = onload;
        if (obj.name === 'LINKEDIN') {
            signInJS.async = false;
            signInJS.text = ('api_key: ' + obj.id).replace('\'', '');
        }
        document.head.appendChild(signInJS);
    };
    return BaseLoginProvider;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GoogleLoginProvider = (function (_super) {
    __extends(GoogleLoginProvider, _super);
    /**
     * @param {?} clientId
     */
    function GoogleLoginProvider(clientId) {
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.loginProviderObj = new LoginProviderClass();
        _this.loginProviderObj.id = clientId;
        _this.loginProviderObj.name = 'google';
        _this.loginProviderObj.url = 'https://apis.google.com/js/platform.js';
        return _this;
    }
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(_this.loginProviderObj, function () {
                gapi.load('auth2', function () {
                    _this.auth2 = gapi.auth2.init({
                        client_id: _this.clientId,
                        scope: 'email'
                    });
                    _this.auth2.then(function () {
                        if (_this.auth2.isSignedIn.get()) {
                            resolve(_this.drawUser());
                        }
                    });
                });
            });
        });
    };
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.drawUser = function () {
        var /** @type {?} */ user = new SocialUser();
        var /** @type {?} */ profile = this.auth2.currentUser.get().getBasicProfile();
        var /** @type {?} */ authResponseObj = this.auth2.currentUser.get().getAuthResponse(true);
        user.id = profile.getId();
        user.name = profile.getName();
        user.email = profile.getEmail();
        user.image = profile.getImageUrl();
        user.token = authResponseObj.access_token;
        user.idToken = authResponseObj.id_token;
        return user;
    };
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var /** @type {?} */ promise = _this.auth2.signIn();
            promise.then(function () {
                resolve(_this.drawUser());
            });
        });
    };
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.signOut = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth2.signOut().then(function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    return GoogleLoginProvider;
}(BaseLoginProvider));
GoogleLoginProvider.PROVIDER_ID = 'google';

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FacebookLoginProvider = (function (_super) {
    __extends$1(FacebookLoginProvider, _super);
    /**
     * @param {?} clientId
     */
    function FacebookLoginProvider(clientId) {
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.loginProviderObj = new LoginProviderClass();
        _this.loginProviderObj.id = clientId;
        _this.loginProviderObj.name = 'facebook';
        _this.loginProviderObj.url = 'https://connect.facebook.net/en_US/sdk.js';
        return _this;
    }
    /**
     * @return {?}
     */
    FacebookLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(_this.loginProviderObj, function () {
                FB.init({
                    appId: _this.clientId,
                    autoLogAppEvents: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.10'
                });
                FB.AppEvents.logPageView();
                FB.getLoginStatus(function (response) {
                    if (response.status === 'connected') {
                        var /** @type {?} */ accessToken_1 = FB.getAuthResponse()['accessToken'];
                        FB.api('/me?fields=name,email,picture', function (res) {
                            resolve(FacebookLoginProvider.drawUser(Object.assign({}, { token: accessToken_1 }, res)));
                        });
                    }
                });
            });
        });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    FacebookLoginProvider.drawUser = function (response) {
        var /** @type {?} */ user = new SocialUser();
        user.id = response.id;
        user.name = response.name;
        user.email = response.email;
        user.token = response.token;
        user.image = 'https://graph.facebook.com/' + response.id + '/picture?type=normal';
        return user;
    };
    /**
     * @return {?}
     */
    FacebookLoginProvider.prototype.signIn = function () {
        return new Promise(function (resolve, reject) {
            FB.login(function (response) {
                if (response.authResponse) {
                    var /** @type {?} */ accessToken_2 = FB.getAuthResponse()['accessToken'];
                    FB.api('/me?fields=name,email,picture', function (res) {
                        resolve(FacebookLoginProvider.drawUser(Object.assign({}, { token: accessToken_2 }, res)));
                    });
                }
            }, { scope: 'email,public_profile' });
        });
    };
    /**
     * @return {?}
     */
    FacebookLoginProvider.prototype.signOut = function () {
        return new Promise(function (resolve, reject) {
            FB.logout(function (response) {
                resolve();
            });
        });
    };
    return FacebookLoginProvider;
}(BaseLoginProvider));
FacebookLoginProvider.PROVIDER_ID = 'facebook';

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LinkedinLoginProvider = (function (_super) {
    __extends$2(LinkedinLoginProvider, _super);
    /**
     * @param {?} clientId
     */
    function LinkedinLoginProvider(clientId) {
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.loginProviderObj = new LoginProviderClass();
        _this.loginProviderObj.id = clientId;
        _this.loginProviderObj.name = 'linkedin';
        _this.loginProviderObj.url = 'https://platform.linkedin.com/in.js';
        return _this;
    }
    /**
     * @return {?}
     */
    LinkedinLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(_this.loginProviderObj, function () {
                IN.init({
                    api_key: _this.clientId,
                    authorize: true,
                    onLoad: _this.onLinkedInLoad()
                });
                IN.Event.on(IN, 'auth', function () {
                    if (IN.User.isAuthorized()) {
                        IN.API.Raw('/people/~:(id,first-name,last-name,email-address,picture-url)').result(function (res) {
                            resolve(_this.drawUser(res));
                        });
                    }
                });
            });
        });
    };
    /**
     * @return {?}
     */
    LinkedinLoginProvider.prototype.onLinkedInLoad = function () {
        IN.Event.on(IN, 'systemReady', function () {
            IN.User.refresh();
        });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    LinkedinLoginProvider.prototype.drawUser = function (response) {
        var /** @type {?} */ user = new SocialUser();
        user.id = response.emailAddress;
        user.name = response.firstName + ' ' + response.lastName;
        user.email = response.emailAddress;
        user.image = response.pictureUrl;
        user.token = IN.ENV.auth.oauth_token;
        return user;
    };
    /**
     * @return {?}
     */
    LinkedinLoginProvider.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            IN.User.authorize(function () {
                IN.API.Raw('/people/~:(id,first-name,last-name,email-address,picture-url)').result(function (res) {
                    resolve(_this.drawUser(res));
                });
            });
        });
    };
    /**
     * @return {?}
     */
    LinkedinLoginProvider.prototype.signOut = function () {
        return new Promise(function (resolve, reject) {
            IN.User.logout(function (response) {
                resolve();
            }, function (err) {
                reject(err);
            });
        });
    };
    return LinkedinLoginProvider;
}(BaseLoginProvider));
LinkedinLoginProvider.PROVIDER_ID = 'linkedin';

exports.SocialLoginModule = SocialLoginModule;
exports.AuthService = AuthService;
exports.AuthServiceConfig = AuthServiceConfig;
exports.SocialUser = SocialUser;
exports.LoginProviderClass = LoginProviderClass;
exports.LinkedInResponse = LinkedInResponse;
exports.FacebookLoginProvider = FacebookLoginProvider;
exports.GoogleLoginProvider = GoogleLoginProvider;
exports.LinkedinLoginProvider = LinkedinLoginProvider;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./src/app/main/content/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getAuthServiceConfigs"] = getAuthServiceConfigs;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_login_login_module__ = __webpack_require__("./src/app/main/content/auth/authentication/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_register_register_module__ = __webpack_require__("./src/app/main/content/auth/authentication/register/register.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_forgot_password_forgot_password_module__ = __webpack_require__("./src/app/main/content/auth/authentication/forgot-password/forgot-password.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_reset_password_reset_password_module__ = __webpack_require__("./src/app/main/content/auth/authentication/reset-password/reset-password.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authlogin_service__ = __webpack_require__("./src/app/services/authlogin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authregister_service__ = __webpack_require__("./src/app/services/authregister.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular5_social_login__ = __webpack_require__("./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_user_reg_provider_model__ = __webpack_require__("./src/app/models/user-reg-provider.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_register_provider_register_provider_module__ = __webpack_require__("./src/app/main/content/auth/authentication/register-provider/register-provider.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// Configs 
function getAuthServiceConfigs() {
    var config = new __WEBPACK_IMPORTED_MODULE_8_angular5_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_8_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_8_angular5_social_login__["FacebookLoginProvider"]("203124637131720")
        },
    ]);
    return config;
}
// Services
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                // Auth
                __WEBPACK_IMPORTED_MODULE_2__authentication_login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_3__authentication_register_register_module__["a" /* RegisterModule */],
                __WEBPACK_IMPORTED_MODULE_4__authentication_forgot_password_forgot_password_module__["a" /* ForgotPasswordModule */],
                __WEBPACK_IMPORTED_MODULE_5__authentication_reset_password_reset_password_module__["a" /* ResetPasswordModule */],
                __WEBPACK_IMPORTED_MODULE_10__authentication_register_provider_register_provider_module__["a" /* UserRegisterProviderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular5_social_login__["SocialLoginModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_authlogin_service__["a" /* AuthloginService */],
                __WEBPACK_IMPORTED_MODULE_7__services_authregister_service__["a" /* AuthregisterService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8_angular5_social_login__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                __WEBPACK_IMPORTED_MODULE_9__models_user_reg_provider_model__["a" /* UserRegProviderModel */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/main/content/auth/authentication/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"forgot-password\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n    <div id=\"forgot-password-intro\" fxFlex fxHide fxShow.gt-xs>\r\n\r\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\r\n            <img src=\"assets/images/logos/fuse.svg\">\r\n        </div>\r\n\r\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\r\n            Welcome to the FUSE!\r\n        </div>\r\n\r\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\r\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"forgot-password-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\r\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\r\n\r\n        <div id=\"forgot-password-form\">\r\n\r\n            <div class=\"logo\" fxHide.gt-xs>\r\n                <span>F</span>\r\n            </div>\r\n\r\n            <div class=\"title\">RECOVER YOUR PASSWORD</div>\r\n\r\n            <form name=\"forgoPasswordForm\" [formGroup]=\"forgotPasswordForm\" novalidate>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"forgotPasswordFormErrors.email.required\">\r\n                        Email is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!forgotPasswordFormErrors.email.required && forgotPasswordFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\r\n                        aria-label=\"SEND RESET LINK\" [disabled]=\"forgotPasswordForm.invalid\">\r\n                    SEND RESET LINK\r\n                </button>\r\n\r\n            </form>\r\n\r\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <a class=\"link\" [routerLink]=\"'/auth/login'\">Go back to login</a>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/auth/authentication/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #forgot-password {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #forgot-password #forgot-password-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #forgot-password #forgot-password-intro {\n        padding: 128px 64px; } }\n:host #forgot-password #forgot-password-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #forgot-password #forgot-password-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #forgot-password #forgot-password-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #forgot-password #forgot-password-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #forgot-password #forgot-password-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #forgot-password #forgot-password-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n          text-align: center;\n          padding: 24px; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #039be5; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .title {\n        font-size: 21px; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .description {\n        padding-top: 8px; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n              width: 80%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n              width: 80%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/auth/authentication/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseForgotPasswordComponent = /** @class */ (function () {
    function FuseForgotPasswordComponent(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.forgotPasswordFormErrors = {
            email: {}
        };
    }
    FuseForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]]
        });
        this.forgotPasswordForm.valueChanges.subscribe(function () {
            _this.onForgotPasswordFormValuesChanged();
        });
    };
    FuseForgotPasswordComponent.prototype.onForgotPasswordFormValuesChanged = function () {
        for (var field in this.forgotPasswordFormErrors) {
            if (!this.forgotPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.forgotPasswordFormErrors[field] = {};
            // Get the control
            var control = this.forgotPasswordForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.forgotPasswordFormErrors[field] = control.errors;
            }
        }
    };
    FuseForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-forgot-password',
            template: __webpack_require__("./src/app/main/content/auth/authentication/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("./src/app/main/content/auth/authentication/forgot-password/forgot-password.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseForgotPasswordComponent);
    return FuseForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/main/content/auth/authentication/forgot-password/forgot-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_password_component__ = __webpack_require__("./src/app/main/content/auth/authentication/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_4__forgot_password_component__["a" /* FuseForgotPasswordComponent */]
    }
];
var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__forgot_password_component__["a" /* FuseForgotPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
            ]
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());



/***/ }),

/***/ "./src/app/main/content/auth/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n    <div id=\"login-intro\" fxFlex fxHide fxShow.gt-xs>\r\n\r\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\r\n            <img src=\"assets/images/logos/logo_web.png\">\r\n        </div>\r\n\r\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\r\n            Bienvenido a Student Clinical Medic\r\n        </div>\r\n\r\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\r\n            Sistema Aula Virtual.\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"login-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\r\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\r\n\r\n        <div id=\"login-form\">\r\n\r\n            <div class=\"logo\" fxHide.gt-xs>\r\n                <span>F</span>\r\n            </div>\r\n\r\n            <div class=\"title\">{{textLogin}}</div>\r\n\r\n            <form name=\"loginForm\" [formGroup]=\"loginForm\" novalidate>\r\n\r\n                <div style=\"margin-bottom: 5%;\" *ngIf=\"imageUserProvider\"  class=\"user-info\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\r\n                    fxLayoutAlign.gt-sm=\"start center\">\r\n                   <img class=\"profile-image avatar huge\" src=\"{{imageUserProviderUrl}}\"\r\n                        *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\r\n                   <div style=\"text-transform: capitalize;\" class=\"name\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\r\n                      {{textUserProvider}}\r\n                    </div>\r\n               </div>\r\n\r\n                <mat-error *ngIf=\"loginIncorrect_email\">\r\n                    {{ login_incorrect_message }}\r\n                </mat-error>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Correo electrónico\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"loginFormErrors.email.required\">\r\n                        El correo electrónico es requerido.\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!loginFormErrors.email.required && loginFormErrors.email.email\">\r\n                        Por favor ingresa un correo electrónico valido.\r\n                    </mat-error>\r\n\r\n                </mat-form-field>\r\n\r\n                <mat-error *ngIf=\"loginIncorrect_password\">\r\n                    {{ login_incorrect_message }}\r\n                </mat-error>\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Contraseña\" formControlName=\"password\">\r\n                    <mat-error *ngIf=\"loginFormErrors.password.required\">\r\n                        La contraseña es requerida.\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <div class=\"remember-forgot-password\" fxLayout=\"row\" fxLayout.xs=\"column\"\r\n                     fxLayoutAlign=\"space-between center\">\r\n                    <mat-checkbox formControlName=\"remember\" class=\"remember-me\" aria-label=\"Remember Me\">\r\n                        Recordarme\r\n                    </mat-checkbox>\r\n\r\n                    <!-- <a class=\"forgot-password\" [routerLink]=\"'/auth/forgot-password'\">\r\n                        ¿Olvidaste tu contraseña?\r\n                    </a> -->\r\n                </div>\r\n\r\n                <button type=\"button\" (click)=\"login()\" mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"LOGIN\"\r\n                        [disabled]=\"loginForm.invalid\">\r\n                    Ingresar\r\n                </button>\r\n\r\n            </form>\r\n\r\n            <div class=\"separator\">\r\n                <span class=\"text\">O</span>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n\r\n                <!-- <button (click)=\"socialSignIn('google')\" mat-raised-button class=\"google\">\r\n                    Ingresar con Google\r\n                </button> -->\r\n\r\n                <button (click)=\"socialSignIn('facebook')\" mat-raised-button class=\"facebook\">\r\n                    Ingresar con Facebook\r\n                </button>\r\n\r\n            </div>\r\n\r\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <span class=\"text\">¿No tienes una cuenta?</span>\r\n                <a class=\"link\" [routerLink]=\"'/auth/register'\">Crear una nueva cuenta</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/auth/authentication/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #login {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #login #login-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #login #login-intro {\n        padding: 128px 64px; } }\n:host #login #login-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #login #login-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #login #login-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #login #login-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #login #login-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #login #login-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #login #login-form-wrapper #login-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #login #login-form-wrapper #login-form {\n          text-align: center;\n          padding: 24px; } }\n:host #login #login-form-wrapper #login-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #039be5; }\n:host #login #login-form-wrapper #login-form .title {\n        font-size: 21px; }\n:host #login #login-form-wrapper #login-form .description {\n        padding-top: 8px; }\n:host #login #login-form-wrapper #login-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #login #login-form-wrapper #login-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form mat-form-field {\n              width: 80%; } }\n:host #login #login-form-wrapper #login-form form mat-checkbox {\n          margin: 0; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password {\n          font-size: 13px;\n          margin-top: 8px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .remember-me {\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password {\n            font-size: 13px;\n            font-weight: 500;\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form .submit-button {\n              width: 80%; } }\n:host #login #login-form-wrapper #login-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        text-align: center;\n        color: rgba(0, 0, 0, 0.54); }\n:host #login #login-form-wrapper #login-form .separator .text {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #login #login-form-wrapper #login-form .separator .text:before, :host #login #login-form-wrapper #login-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #login #login-form-wrapper #login-form .separator .text:before {\n            right: 100%; }\n:host #login #login-form-wrapper #login-form .separator .text:after {\n            left: 100%; }\n:host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n        width: 70%;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n          :host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n            width: 60%; } }\n:host #login #login-form-wrapper #login-form button.google mat-icon, :host #login #login-form-wrapper #login-form button.facebook mat-icon {\n          color: #FFFFFF;\n          margin: 0 8px 0 0; }\n:host #login #login-form-wrapper #login-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #login #login-form-wrapper #login-form button.facebook {\n        background-color: #3f5c9a; }\n:host #login #login-form-wrapper #login-form .register {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #login #login-form-wrapper #login-form .register .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/auth/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authlogin_service__ = __webpack_require__("./src/app/services/authlogin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_globaluser__ = __webpack_require__("./src/app/global/globaluser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_social_login__ = __webpack_require__("./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_user_reg_provider_model__ = __webpack_require__("./src/app/models/user-reg-provider.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FuseLoginComponent = /** @class */ (function () {
    function FuseLoginComponent(fuseConfig, formBuilder, authloginService, activatedRoute, router, globalUser, userRegProvider, socialAuthService) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.authloginService = authloginService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.globalUser = globalUser;
        this.userRegProvider = userRegProvider;
        this.socialAuthService = socialAuthService;
        this.loginIncorrect_email = false;
        this.loginIncorrect_password = false;
        this.imageUserProvider = false;
        this.imageUserProviderUrl = '';
        this.textUserProvider = '';
        this.textLogin = 'Ingresa con tus credenciales';
        this.login_incorrect_message = '';
        this.user = {
            user_mail: '',
            user_pw: ''
        };
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.loginFormErrors = {
            email: {},
            password: {}
        };
    }
    FuseLoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_7_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_7_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            _this.authloginService.checkUserProviderMail(userData).subscribe(function (success) {
                if (success.res_service === 'ok') {
                    _this.imageUserProvider = true;
                    _this.imageUserProviderUrl = userData.image;
                    _this.textUserProvider = userData.name;
                    _this.textLogin = 'Ingresar como';
                    _this.loginForm = _this.formBuilder.group({
                        email: [success.data_result.user_mail, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]],
                        password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
                        remember: [true]
                    });
                }
                else {
                    _this.userRegProvider.user = userData;
                    try {
                        _this.router.navigateByUrl('/auth/regprovider');
                    }
                    catch (err) {
                        console.log(err);
                    }
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    FuseLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            remember: [false]
        });
        this.loginForm.valueChanges.subscribe(function () {
            _this.onLoginFormValuesChanged();
        });
    };
    FuseLoginComponent.prototype.onLoginFormValuesChanged = function () {
        this.loginIncorrect_password = false;
        this.loginIncorrect_email = false;
        for (var field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            var control = this.loginForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    };
    FuseLoginComponent.prototype.login = function () {
        var _this = this;
        this.user.user_mail = this.loginForm.controls.email.value;
        this.user.user_pw = this.loginForm.controls.password.value;
        this.authloginService.login(this.user, this.loginForm.controls.remember.value).subscribe(function (success) {
            if (success.res_service === 'ok') {
                _this.globalUser.user = success.data_result;
                // this.router.navigateByUrl('');
                location.href = '';
            }
            else {
                if (success.type_error === 'email') {
                    _this.loginIncorrect_password = false;
                    _this.loginIncorrect_email = true;
                    _this.login_incorrect_message = success.res_service;
                }
                else if (success.type_error === 'password') {
                    _this.loginIncorrect_password = true;
                    _this.loginIncorrect_email = false;
                    _this.login_incorrect_message = success.res_service;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    FuseLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-login',
            template: __webpack_require__("./src/app/main/content/auth/authentication/login/login.component.html"),
            styles: [__webpack_require__("./src/app/main/content/auth/authentication/login/login.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_4__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_authlogin_service__["a" /* AuthloginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__global_globaluser__["a" /* GlobalUser */],
            __WEBPACK_IMPORTED_MODULE_8__models_user_reg_provider_model__["a" /* UserRegProviderModel */],
            __WEBPACK_IMPORTED_MODULE_7_angular5_social_login__["AuthService"]])
    ], FuseLoginComponent);
    return FuseLoginComponent;
}());



/***/ }),

/***/ "./src/app/main/content/auth/authentication/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("./src/app/main/content/auth/authentication/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* FuseLoginComponent */]
    }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* FuseLoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/main/content/auth/authentication/register-provider/register-provider.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"register\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n    <div id=\"register-intro\" fxFlex fxHide fxShow.gt-xs>\r\n\r\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\r\n            <img src=\"assets/images/logos/logo_web.png\">\r\n        </div>\r\n\r\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\r\n            Bienvenido a Student Clinical Medic\r\n        </div>\r\n        \r\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\r\n            Sistema Aula Virtual.\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"register-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\r\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\r\n\r\n        <div id=\"register-form\">\r\n\r\n            <div class=\"logo\" fxHide.gt-xs>\r\n                <span>F</span>\r\n            </div>\r\n\r\n            <div class=\"title\">Registro con {{userProvider.provider}} </div>\r\n\r\n            <form name=\"registerForm\" [formGroup]=\"registerForm\" novalidate>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Nombres\" formControlName=\"user_pri_nom\" readonly>\r\n                </mat-form-field>\r\n                \r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Apellido Paterno\" formControlName=\"user_ape_pat\" readonly>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Apellido Materno\" formControlName=\"user_ape_mat\">\r\n                </mat-form-field>\r\n\r\n                <mat-error *ngIf=\"registerIncorrect_email\">\r\n                    {{ reg_incorrect_message }}\r\n                </mat-error>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Correo electrónico\" formControlName=\"user_mail\" readonly>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Contraseña\" formControlName=\"user_pw\">\r\n                    <mat-error *ngIf=\"registerFormErrors.user_pw.required\">\r\n                        La contraseña es requerida.\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Contraseña (Confirmación)\" formControlName=\"user_pw_confirm\">\r\n                    <mat-error *ngIf=\"registerFormErrors.user_pw_confirm.required\">\r\n                        La confirmación de conntraseña es requerida.\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"registerFormErrors.user_pw_confirm.passwordsNotMatch\">\r\n                        La confirmación de contraseña no es correcta.\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <!-- <div class=\"terms\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <mat-checkbox name=\"terms\" aria-label=\"Accept\" required>\r\n                        <span>Aceptar</span>\r\n                    </mat-checkbox>\r\n                    <a href=\"#\">Terminos y condiciones</a>\r\n                </div> -->\r\n\r\n                <button (click)=\"register()\" mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"CREATE AN ACCOUNT\"\r\n                        [disabled]=\"registerForm.invalid\">\r\n                    Aceptar\r\n                </button>\r\n\r\n            </form>\r\n\r\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <span class=\"text\">¿Ya tienes una cuenta?</span>\r\n                <a class=\"link\" [routerLink]=\"'/auth/login'\">Ingresar</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/auth/authentication/register-provider/register-provider.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #register {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #register #register-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #register #register-intro {\n        padding: 128px 64px; } }\n:host #register #register-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #register #register-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #register #register-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #register #register-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #register #register-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #register #register-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #register #register-form-wrapper #register-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #register #register-form-wrapper #register-form {\n          text-align: center;\n          padding: 24px; } }\n:host #register #register-form-wrapper #register-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #039be5; }\n:host #register #register-form-wrapper #register-form .title {\n        font-size: 21px; }\n:host #register #register-form-wrapper #register-form .description {\n        padding-top: 8px; }\n:host #register #register-form-wrapper #register-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #register #register-form-wrapper #register-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #register #register-form-wrapper #register-form form mat-form-field {\n              width: 80%; } }\n:host #register #register-form-wrapper #register-form form mat-checkbox {\n          margin: 0; }\n:host #register #register-form-wrapper #register-form form .terms {\n          margin: 16px 0 32px 0; }\n:host #register #register-form-wrapper #register-form form .terms a {\n            font-size: 16px;\n            margin-left: 4px; }\n:host #register #register-form-wrapper #register-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #register #register-form-wrapper #register-form form .submit-button {\n              width: 80%; } }\n:host #register #register-form-wrapper #register-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        text-align: center;\n        color: rgba(0, 0, 0, 0.54); }\n:host #register #register-form-wrapper #register-form .separator .text {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #register #register-form-wrapper #register-form .separator .text:before, :host #register #register-form-wrapper #register-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #register #register-form-wrapper #register-form .separator .text:before {\n            right: 100%; }\n:host #register #register-form-wrapper #register-form .separator .text:after {\n            left: 100%; }\n:host #register #register-form-wrapper #register-form button.google, :host #register #register-form-wrapper #register-form button.facebook {\n        width: 70%;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n          :host #register #register-form-wrapper #register-form button.google, :host #register #register-form-wrapper #register-form button.facebook {\n            width: 60%; } }\n:host #register #register-form-wrapper #register-form button.google mat-icon, :host #register #register-form-wrapper #register-form button.facebook mat-icon {\n          color: #FFFFFF;\n          margin: 0 8px 0 0; }\n:host #register #register-form-wrapper #register-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #register #register-form-wrapper #register-form button.facebook {\n        background-color: #3f5c9a; }\n"

/***/ }),

/***/ "./src/app/main/content/auth/authentication/register-provider/register-provider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterProviderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authregister_service__ = __webpack_require__("./src/app/services/authregister.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user_reg_provider_model__ = __webpack_require__("./src/app/models/user-reg-provider.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserRegisterProviderComponent = /** @class */ (function () {
    function UserRegisterProviderComponent(fuseConfig, formBuilder, authregisterService, activatedRoute, router, userRegProvider) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.authregisterService = authregisterService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userRegProvider = userRegProvider;
        this.registerIncorrect_email = false;
        this.reg_incorrect_message = '';
        if (userRegProvider.user.email != '') {
            this.userProvider = userRegProvider.user;
        }
        else {
            try {
                this.router.navigateByUrl('/auth/login');
            }
            catch (err) {
                console.log(err);
            }
        }
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.registerFormErrors = {
            user_pw: {},
            user_pw_confirm: {},
        };
    }
    UserRegisterProviderComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.userProvider);
        var names = this.userProvider.name.split(" ");
        this.userProvider["user_name"] = names[0];
        if (names.length > 1) {
            this.userProvider["user_priap"] = names[1];
        }
        this.registerForm = this.formBuilder.group({
            user_pri_nom: [this.userProvider.user_name],
            user_mail: [this.userProvider.email],
            user_pw: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            user_pw_confirm: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, confirmPassword]],
            user_ape_pat: [this.userProvider.user_priap],
            user_ape_mat: ['']
        });
        this.registerForm.valueChanges.subscribe(function () {
            _this.onRegisterFormValuesChanged();
        });
    };
    UserRegisterProviderComponent.prototype.onRegisterFormValuesChanged = function () {
        this.registerIncorrect_email = false;
        for (var field in this.registerFormErrors) {
            if (!this.registerFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.registerFormErrors[field] = {};
            // Get the control
            var control = this.registerForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.registerFormErrors[field] = control.errors;
            }
        }
    };
    UserRegisterProviderComponent.prototype.register = function () {
        var _this = this;
        var dataRegister = this.registerForm.value;
        dataRegister["user_reg_provider"] = this.userProvider.provider;
        dataRegister["user_reg_provider_id"] = this.userProvider.id;
        this.authregisterService.registerwo(dataRegister).subscribe(function (success) {
            if (success.res_service === 'ok') {
                location.href = '';
            }
            else {
                if (success.type_error === 'email') {
                    _this.registerIncorrect_email = true;
                    _this.reg_incorrect_message = success.res_service;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserRegisterProviderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-user-register-provider',
            template: __webpack_require__("./src/app/main/content/auth/authentication/register-provider/register-provider.component.html"),
            styles: [__webpack_require__("./src/app/main/content/auth/authentication/register-provider/register-provider.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_authregister_service__["a" /* AuthregisterService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__models_user_reg_provider_model__["a" /* UserRegProviderModel */]])
    ], UserRegisterProviderComponent);
    return UserRegisterProviderComponent;
}());

function confirmPassword(control) {
    if (!control.parent || !control) {
        return;
    }
    var user_pw = control.parent.get('user_pw');
    var user_pw_confirm = control.parent.get('user_pw_confirm');
    if (!user_pw || !user_pw_confirm) {
        return;
    }
    if (user_pw_confirm.value === '') {
        return;
    }
    if (user_pw.value !== user_pw_confirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}


/***/ }),

/***/ "./src/app/main/content/auth/authentication/register-provider/register-provider.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_provider_component__ = __webpack_require__("./src/app/main/content/auth/authentication/register-provider/register-provider.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'regprovider',
        component: __WEBPACK_IMPORTED_MODULE_4__register_provider_component__["a" /* UserRegisterProviderComponent */]
    }
];
var UserRegisterProviderModule = /** @class */ (function () {
    function UserRegisterProviderModule() {
    }
    UserRegisterProviderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__register_provider_component__["a" /* UserRegisterProviderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], UserRegisterProviderModule);
    return UserRegisterProviderModule;
}());



/***/ }),

/***/ "./src/app/main/content/auth/authentication/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"register\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n    <div id=\"register-intro\" fxFlex fxHide fxShow.gt-xs>\r\n\r\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\r\n            <img src=\"assets/images/logos/logo_web.png\">\r\n        </div>\r\n\r\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\r\n            Bienvenido a Student Clinical Medic\r\n        </div>\r\n        \r\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\r\n            Sistema Aula Virtual.\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"register-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\r\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\r\n\r\n        <div id=\"register-form\">\r\n\r\n            <div class=\"logo\" fxHide.gt-xs>\r\n                <span>F</span>\r\n            </div>\r\n\r\n            <div class=\"title\">Crearse una cuenta</div>\r\n\r\n            <form name=\"registerForm\" [formGroup]=\"registerForm\" novalidate>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Nombres\" formControlName=\"user_pri_nom\">\r\n                    <mat-error *ngIf=\"registerFormErrors.user_pri_nom.required\">\r\n                        El nombre es requerido.\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                \r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Apellido Paterno\" formControlName=\"user_ape_pat\">\r\n                    <mat-error *ngIf=\"registerFormErrors.user_ape_pat.required\">\r\n                        Los apellidos son requeridos.\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Apellido Materno\" formControlName=\"user_ape_mat\">\r\n                </mat-form-field>\r\n\r\n                <mat-error *ngIf=\"registerIncorrect_email\">\r\n                    {{ reg_incorrect_message }}\r\n                </mat-error>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Correo electrónico\" formControlName=\"user_mail\">\r\n                    <mat-error *ngIf=\"registerFormErrors.user_mail.required\">\r\n                        El correo electrónico es requerido.\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!registerFormErrors.user_mail.required && registerFormErrors.user_mail.email\">\r\n                        Por favor ingresar un correo electrónico válido.\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Contraseña\" formControlName=\"user_pw\">\r\n                    <mat-error *ngIf=\"registerFormErrors.user_pw.required\">\r\n                        La contraseña es requerida.\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Contraseña (Confirmación)\" formControlName=\"user_pw_confirm\">\r\n                    <mat-error *ngIf=\"registerFormErrors.user_pw_confirm.required\">\r\n                        La confirmación de conntraseña es requerida.\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"registerFormErrors.user_pw_confirm.passwordsNotMatch\">\r\n                        La confirmación de contraseña no es correcta.\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <!-- <div class=\"terms\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <mat-checkbox name=\"terms\" aria-label=\"Accept\" required>\r\n                        <span>Aceptar</span>\r\n                    </mat-checkbox>\r\n                    <a href=\"#\">Terminos y condiciones</a>\r\n                </div> -->\r\n\r\n                <button (click)=\"register()\" mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"CREATE AN ACCOUNT\"\r\n                        [disabled]=\"registerForm.invalid\">\r\n                    Aceptar\r\n                </button>\r\n\r\n            </form>\r\n\r\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <span class=\"text\">¿Ya tienes una cuenta?</span>\r\n                <a class=\"link\" [routerLink]=\"'/auth/login'\">Ingresar</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/auth/authentication/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #register {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #register #register-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #register #register-intro {\n        padding: 128px 64px; } }\n:host #register #register-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #register #register-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #register #register-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #register #register-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #register #register-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #register #register-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #register #register-form-wrapper #register-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #register #register-form-wrapper #register-form {\n          text-align: center;\n          padding: 24px; } }\n:host #register #register-form-wrapper #register-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #039be5; }\n:host #register #register-form-wrapper #register-form .title {\n        font-size: 21px; }\n:host #register #register-form-wrapper #register-form .description {\n        padding-top: 8px; }\n:host #register #register-form-wrapper #register-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #register #register-form-wrapper #register-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #register #register-form-wrapper #register-form form mat-form-field {\n              width: 80%; } }\n:host #register #register-form-wrapper #register-form form mat-checkbox {\n          margin: 0; }\n:host #register #register-form-wrapper #register-form form .terms {\n          margin: 16px 0 32px 0; }\n:host #register #register-form-wrapper #register-form form .terms a {\n            font-size: 16px;\n            margin-left: 4px; }\n:host #register #register-form-wrapper #register-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #register #register-form-wrapper #register-form form .submit-button {\n              width: 80%; } }\n:host #register #register-form-wrapper #register-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        text-align: center;\n        color: rgba(0, 0, 0, 0.54); }\n:host #register #register-form-wrapper #register-form .separator .text {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #register #register-form-wrapper #register-form .separator .text:before, :host #register #register-form-wrapper #register-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #register #register-form-wrapper #register-form .separator .text:before {\n            right: 100%; }\n:host #register #register-form-wrapper #register-form .separator .text:after {\n            left: 100%; }\n:host #register #register-form-wrapper #register-form button.google, :host #register #register-form-wrapper #register-form button.facebook {\n        width: 70%;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n          :host #register #register-form-wrapper #register-form button.google, :host #register #register-form-wrapper #register-form button.facebook {\n            width: 60%; } }\n:host #register #register-form-wrapper #register-form button.google mat-icon, :host #register #register-form-wrapper #register-form button.facebook mat-icon {\n          color: #FFFFFF;\n          margin: 0 8px 0 0; }\n:host #register #register-form-wrapper #register-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #register #register-form-wrapper #register-form button.facebook {\n        background-color: #3f5c9a; }\n"

/***/ }),

/***/ "./src/app/main/content/auth/authentication/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authregister_service__ = __webpack_require__("./src/app/services/authregister.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_globaluser__ = __webpack_require__("./src/app/global/globaluser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FuseRegisterComponent = /** @class */ (function () {
    function FuseRegisterComponent(fuseConfig, formBuilder, authregisterService, activatedRoute, router, globalUser) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.authregisterService = authregisterService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.globalUser = globalUser;
        this.registerIncorrect_email = false;
        this.reg_incorrect_message = '';
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.registerFormErrors = {
            user_pri_nom: {},
            user_mail: {},
            user_pw: {},
            user_pw_confirm: {},
            user_ape_pat: {}
        };
    }
    FuseRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            user_pri_nom: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            user_mail: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]],
            user_pw: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            user_pw_confirm: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, confirmPassword]],
            user_ape_pat: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            user_ape_mat: ['']
        });
        this.registerForm.valueChanges.subscribe(function () {
            _this.onRegisterFormValuesChanged();
        });
    };
    FuseRegisterComponent.prototype.onRegisterFormValuesChanged = function () {
        this.registerIncorrect_email = false;
        for (var field in this.registerFormErrors) {
            if (!this.registerFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.registerFormErrors[field] = {};
            // Get the control
            var control = this.registerForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.registerFormErrors[field] = control.errors;
            }
        }
    };
    FuseRegisterComponent.prototype.register = function () {
        var _this = this;
        var dataRegister = this.registerForm.value;
        this.authregisterService.registerwo(dataRegister).subscribe(function (success) {
            if (success.res_service === 'ok') {
                // console.log(this.globalUser.user);
                // this.router.navigateByUrl('');
                location.href = '';
            }
            else {
                if (success.type_error === 'email') {
                    _this.registerIncorrect_email = true;
                    _this.reg_incorrect_message = success.res_service;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    FuseRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-register',
            template: __webpack_require__("./src/app/main/content/auth/authentication/register/register.component.html"),
            styles: [__webpack_require__("./src/app/main/content/auth/authentication/register/register.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_authregister_service__["a" /* AuthregisterService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__global_globaluser__["a" /* GlobalUser */]])
    ], FuseRegisterComponent);
    return FuseRegisterComponent;
}());

function confirmPassword(control) {
    if (!control.parent || !control) {
        return;
    }
    var user_pw = control.parent.get('user_pw');
    var user_pw_confirm = control.parent.get('user_pw_confirm');
    if (!user_pw || !user_pw_confirm) {
        return;
    }
    if (user_pw_confirm.value === '') {
        return;
    }
    if (user_pw.value !== user_pw_confirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}


/***/ }),

/***/ "./src/app/main/content/auth/authentication/register/register.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("./src/app/main/content/auth/authentication/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* FuseRegisterComponent */]
    }
];
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* FuseRegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/main/content/auth/authentication/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"reset-password\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n    <div id=\"reset-password-intro\" fxFlex fxHide fxShow.gt-xs>\r\n\r\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\r\n            <img src=\"assets/images/logos/fuse.svg\">\r\n        </div>\r\n\r\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\r\n            Welcome to the FUSE!\r\n        </div>\r\n\r\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\r\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"reset-password-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\r\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\r\n\r\n        <div id=\"reset-password-form\">\r\n\r\n            <div class=\"logo\" fxHide.gt-xs>\r\n                <span>F</span>\r\n            </div>\r\n\r\n            <div class=\"title\">RESET YOUR PASSWORD</div>\r\n\r\n            <form name=\"resetPasswordForm\" [formGroup]=\"resetPasswordForm\" novalidate>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"resetPasswordFormErrors.email.required\">\r\n                        Email is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!resetPasswordFormErrors.email.required && resetPasswordFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                    <mat-error *ngIf=\"resetPasswordFormErrors.password.required\">\r\n                        Password is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\r\n                    <mat-error *ngIf=\"resetPasswordFormErrors.passwordConfirm.required\">\r\n                        Password confirmation is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"resetPasswordFormErrors.passwordConfirm.passwordsNotMatch\">\r\n                        Passwords must match\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\r\n                        aria-label=\"RESET MY PASSWORD\" [disabled]=\"resetPasswordForm.invalid\">\r\n                    RESET MY PASSWORD\r\n                </button>\r\n            </form>\r\n\r\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <a class=\"link\" [routerLink]=\"'/auth/login'\">Go back to login</a>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/auth/authentication/reset-password/reset-password.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #reset-password {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #reset-password #reset-password-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #reset-password #reset-password-intro {\n        padding: 128px 64px; } }\n:host #reset-password #reset-password-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #reset-password #reset-password-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #reset-password #reset-password-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #reset-password #reset-password-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #reset-password #reset-password-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #reset-password #reset-password-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #reset-password #reset-password-form-wrapper #reset-password-form {\n          text-align: center;\n          padding: 24px; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #039be5; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .title {\n        font-size: 21px; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .description {\n        padding-top: 8px; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #reset-password #reset-password-form-wrapper #reset-password-form form mat-form-field {\n              width: 80%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n              width: 80%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .login .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/auth/authentication/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseResetPasswordComponent = /** @class */ (function () {
    function FuseResetPasswordComponent(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.resetPasswordFormErrors = {
            email: {},
            password: {},
            passwordConfirm: {}
        };
    }
    FuseResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPasswordForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            passwordConfirm: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, confirmPassword]]
        });
        this.resetPasswordForm.valueChanges.subscribe(function () {
            _this.onResetPasswordFormValuesChanged();
        });
    };
    FuseResetPasswordComponent.prototype.onResetPasswordFormValuesChanged = function () {
        for (var field in this.resetPasswordFormErrors) {
            if (!this.resetPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.resetPasswordFormErrors[field] = {};
            // Get the control
            var control = this.resetPasswordForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.resetPasswordFormErrors[field] = control.errors;
            }
        }
    };
    FuseResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-reset-password',
            template: __webpack_require__("./src/app/main/content/auth/authentication/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("./src/app/main/content/auth/authentication/reset-password/reset-password.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseResetPasswordComponent);
    return FuseResetPasswordComponent;
}());

function confirmPassword(control) {
    if (!control.parent || !control) {
        return;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return;
    }
    if (passwordConfirm.value === '') {
        return;
    }
    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}


/***/ }),

/***/ "./src/app/main/content/auth/authentication/reset-password/reset-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_component__ = __webpack_require__("./src/app/main/content/auth/authentication/reset-password/reset-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'reset-password',
        component: __WEBPACK_IMPORTED_MODULE_4__reset_password_component__["a" /* FuseResetPasswordComponent */]
    }
];
var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__reset_password_component__["a" /* FuseResetPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());



/***/ }),

/***/ "./src/app/models/user-reg-provider.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegProviderModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserRegProviderModel = /** @class */ (function () {
    function UserRegProviderModel() {
        this.user = {
            email: '',
            id: '',
            image: '',
            name: '',
            provider: '',
            token: ''
        };
    }
    UserRegProviderModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], UserRegProviderModel);
    return UserRegProviderModel;
}());



/***/ }),

/***/ "./src/app/services/authregister.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthregisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__("./node_modules/crypto-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_globaluser__ = __webpack_require__("./src/app/global/globaluser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_globalvalues__ = __webpack_require__("./src/app/global/globalvalues.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthregisterService = /** @class */ (function () {
    function AuthregisterService(http, globalUser, globalValues) {
        this.http = http;
        this.globalUser = globalUser;
        this.globalValues = globalValues;
        this.regUrlwo = this.globalValues.urlAuthUser() + "/createwo";
    }
    AuthregisterService.prototype.registerwo = function (credentials) {
        var _this = this;
        console.log(credentials);
        var pwEncrypt = __WEBPACK_IMPORTED_MODULE_2_crypto_js__["AES"].encrypt(credentials.user_pw.toString(), this.globalValues.cryptoKey());
        credentials.user_pw = pwEncrypt.toString();
        credentials.rol_id = 4;
        credentials.usu_registro = 'web';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http
            .post(this.regUrlwo, credentials, { headers: this.headers })
            .map(function (res) {
            var result = res.json();
            console.log(result);
            if (result.res_service === 'ok') {
                localStorage.setItem('tokenStudentClinicalAccessWS', result.token);
                _this.globalUser.user = result.data_result;
            }
            return result;
        });
    };
    AuthregisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__global_globaluser__["a" /* GlobalUser */],
            __WEBPACK_IMPORTED_MODULE_4__global_globalvalues__["a" /* GlobalValues */]])
    ], AuthregisterService);
    return AuthregisterService;
}());



/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map