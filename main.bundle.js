webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "\n    <nav></nav>\n    <router-outlet></router-outlet>\n  ",
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_component__ = __webpack_require__("../../../../../src/app/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_message_component__ = __webpack_require__("../../../../../src/app/new-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nav_component__ = __webpack_require__("../../../../../src/app/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_component__ = __webpack_require__("../../../../../src/app/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_component__ = __webpack_require__("../../../../../src/app/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_12__home_component__["a" /* HomeComponent */]
    },
    {
        path: 'messages',
        component: __WEBPACK_IMPORTED_MODULE_7__messages_component__["a" /* MessagesComponent */]
    },
    {
        path: 'messages/:name',
        component: __WEBPACK_IMPORTED_MODULE_7__messages_component__["a" /* MessagesComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_13__register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_15__login_component__["a" /* LoginComponent */]
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_16__user_component__["a" /* UserComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(routes), __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatToolbarModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__messages_component__["a" /* MessagesComponent */], __WEBPACK_IMPORTED_MODULE_10__new_message_component__["a" /* NewMessageComponent */], __WEBPACK_IMPORTED_MODULE_11__nav_component__["a" /* NavComponent */], __WEBPACK_IMPORTED_MODULE_12__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_13__register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_15__login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_16__user_component__["a" /* UserComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_9__web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_14__auth_service__["a" /* AuthService */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.BASE_URL = 'http://localhost:63145/auth';
        this.NAME_KEY = 'name';
        this.TOKEN_KEY = 'token';
    }
    Object.defineProperty(AuthService.prototype, "name", {
        get: function () {
            return localStorage.getItem(this.NAME_KEY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return !!localStorage.getItem(this.TOKEN_KEY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "tokenHeader", {
        get: function () {
            var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY) });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (loginData) {
        var _this = this;
        this.http.post(this.BASE_URL + '/login', loginData).subscribe(function (res) {
            _this.authenticate(res);
        });
    };
    AuthService.prototype.register = function (user) {
        var _this = this;
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe(function (res) {
            _this.authenticate(res);
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
    };
    AuthService.prototype.authenticate = function (res) {
        var authResponse = res.json();
        if (!authResponse.token)
            return;
        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.firstName);
        this.router.navigate(['/']);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home',
        template: "\n    <new-message></new-message>\n    <messages></messages>\n  ",
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        this.loginData = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        this.auth.login(this.loginData);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login',
        template: "\n        <mat-card>\n            <mat-input-container>\n                <input matInput [(ngModel)]=\"loginData.email\" placeholder=\"Email\" type=\"email\">\n            </mat-input-container>\n            <mat-input-container>\n                <input matInput [(ngModel)]=\"loginData.password\" placeholder=\"Password\" type=\"password\">\n            </mat-input-container>\n            <button mat-raised-button color=\"primary\" (click)=\"login()\">Login</button>\n        </mat-card>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = (function () {
    function MessagesComponent(webService, route) {
        this.webService = webService;
        this.route = route;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var name = this.route.snapshot.params['name'];
        this.webService.getMessages(name);
        this.webService.getUser().subscribe();
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'messages',
        template: "\n    <div *ngFor=\"let message of webService.messages | async\">\n        <mat-card class=\"card\">\n            <mat-card-title [routerLink]=\"['/messages', message.owner]\" style=\"cursor: pointer\">{{message.owner}}</mat-card-title>\n            <mat-card-content>{{message.text}}</mat-card-content>\n        </mat-card>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], MessagesComponent);

var _a, _b;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(auth) {
        this.auth = auth;
    }
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'nav',
        template: "\n        <mat-toolbar color=\"primary\">\n            <button mat-button routerLink=\"/\" >Message Board</button>\n            <button mat-button routerLink=\"/messages\" >Messages</button>\n            <span style=\"flex: 1 1 auto\"></span>\n            <button *ngIf=\"!auth.isAuthenticated\"mat-button routerLink=\"/login\" >Login</button>\n            <button *ngIf=\"!auth.isAuthenticated\"mat-button routerLink=\"/register\" >Register</button>\n            <button *ngIf=\"auth.isAuthenticated\" mat-button routerLink=\"/user\" >Welcome {{auth.name}}</button>                                    \n            <button *ngIf=\"auth.isAuthenticated\" mat-button (click)=\"auth.logout()\" >Logout</button>                                                \n        </mat-toolbar>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavComponent);

var _a;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//ngModel, two way binding, Angular material used for template
var NewMessageComponent = (function () {
    function NewMessageComponent(webService, auth) {
        this.webService = webService;
        this.auth = auth;
        this.message = {
            owner: this.auth.name,
            text: ""
        };
    }
    NewMessageComponent.prototype.post = function () {
        this.webService.postMessage(this.message);
    };
    return NewMessageComponent;
}());
NewMessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'new-message',
        template: "\n        <mat-card class=\"card\">\n            <mat-card-content>\n                <mat-input-container>\n                    <textarea [(ngModel)]=\"message.text\" matInput placeholder=\"Message\"></textarea>\n                </mat-input-container>\n                <mat-card-actions>\n                    <button (click)=\"post()\" mat-button color=\"primary\">POST</button>\n                </mat-card-actions>\n            </mat-card-content>\n        </mat-card>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NewMessageComponent);

var _a, _b;
//# sourceMappingURL=new-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/register.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <mat-input-container>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error': isValid('firstName')}\" matInput placeholder=\"First Name\" formControlName=\"firstName\">\r\n        </mat-input-container>\r\n        <mat-input-container>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error': isValid('lastName')}\" matInput placeholder=\"Last Name\" formControlName=\"lastName\">\r\n        </mat-input-container>\r\n        <mat-input-container>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error': isValid('email')}\" type=\"email\" matInput placeholder=\"Email\" formControlName=\"email\">\r\n        </mat-input-container>\r\n        <mat-input-container>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error': isValid('password')}\" type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\r\n        </mat-input-container>\r\n        <mat-input-container>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error': isValid('confirmPassword')}\" type=\"password\" matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\r\n        </mat-input-container>\r\n        <br>\r\n        <span *ngIf=\"form.errors?.mismatchedFields\">Passwords do not match</span>\r\n        <br>\r\n        <button mat-raised-button color=\"primary\">Register</button>\r\n    </form>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.form = fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, emailValid()]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        }, { validator: matchingFields('password', 'confirmPassword') });
    }
    RegisterComponent.prototype.onSubmit = function () {
        console.log(this.form.errors);
        this.auth.register(this.form.value);
    };
    RegisterComponent.prototype.isValid = function (control) {
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/register.component.html"),
        styles: ["\n        .error {\n            background-color: #fff0f0\n        }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], RegisterComponent);

function matchingFields(field1, field2) {
    return function (form) {
        if (form.controls[field1].value !== form.controls[field2].value)
            return { mismatchedFields: true };
    };
}
function emailValid() {
    return function (control) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(control.value) ? null : { invalidEmail: true };
    };
}
var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(webService) {
        this.webService = webService;
        this.model = {
            firstName: '',
            lastName: ''
        };
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webService.getUser().subscribe(function (res) {
            _this.model.firstName = res.firstName;
            _this.model.lastName = res.lastName;
        });
    };
    UserComponent.prototype.saveUser = function (userData) {
        this.webService.saveUser(userData).subscribe();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user',
        template: "\n        <mat-card class=\"card\">\n            <mat-input-container>\n                <input matInput [(ngModel)]=\"model.firstName\" placeholder=\"First Name\">\n            </mat-input-container>\n            <mat-input-container>\n                <input mdInput [(ngModel)]=\"model.lastName\" placeholder=\"Last Name\">\n            </mat-input-container>\n            <button mat-raised-button color=\"primary\" (click)=\"saveUser(model)\">Save Changes</button>\n        </mat-card>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var WebService = (function () {
    function WebService(http, sb, auth) {
        this.http = http;
        this.sb = sb;
        this.auth = auth;
        this.BASE_URL = 'http://localhost:63145/api';
        this.messageStore = [];
        this.messageSubjet = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Subject"]();
        this.messages = this.messageSubjet.asObservable();
        this.getMessages('');
    }
    WebService.prototype.getMessages = function (user) {
        var _this = this;
        user = (user) ? '/' + user : '';
        this.http.get(this.BASE_URL + '/messages' + user).subscribe(function (response) {
            _this.messageStore = response.json();
            _this.messageSubjet.next(_this.messageStore);
        }, function (error) {
            _this.handleError("Unable to get messages");
        });
    };
    WebService.prototype.postMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.BASE_URL + '/messages', message).toPromise()];
                    case 1:
                        response = _a.sent();
                        this.messageStore.push(response.json());
                        this.messageSubjet.next(this.messageStore);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError("Unable to post message");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //get user data
    WebService.prototype.getUser = function () {
        return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader).map(function (res) { return res.json(); });
    };
    //user data saved
    WebService.prototype.saveUser = function (userData) {
        return this.http.post(this.BASE_URL + '/users/me', userData, this.auth.tokenHeader).map(function (res) { return res.json(); });
    };
    WebService.prototype.handleError = function (error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    };
    return WebService;
}());
WebService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], WebService);

var _a, _b, _c;
//# sourceMappingURL=web.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map