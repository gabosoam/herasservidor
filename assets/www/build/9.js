webpackJsonp([9],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, user, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            nombre: '',
            contrasena: ''
        };
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.user.login(this.account).subscribe(function (resp) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages__["b" /* MainPage */]);
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Proyectos\HERAS\inventarioclient\src\pages\login\login.html"*/'<ion-content padding class="animated fadeIn login auth-page">\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-0 col-sm-0 col-xs-0 col-md-0 col-lg-4 col-xl-4></ion-col>\n\n      <ion-col col-12 col-sm-12 col-xs-12 col-md-12 col-lg-4 col-xl-4>\n\n        <div class="login-content w3-card-4 w3-white w3-round-large  w3-padding w3-border-blue">\n\n\n\n          <!-- Logo -->\n\n          <div padding-horizontal text-center class="animated fadeInDown">\n\n            <img src="/assets/img/logo.jpg" alt="">\n\n            <br>\n\n            <br>\n\n            <h2 ion-text class="text-primary">\n\n              <strong>Sistema de inventario HERAS</strong>\n\n            </h2>\n\n          </div>\n\n          <br>\n\n          <br>\n\n          <form class="w3-container" (submit)="doLogin()">\n\n\n\n            <label class="w3-text-blue">\n\n              <b>Nombre de usuario</b>\n\n            </label>\n\n            <input autofocus placeholder="Ingrese su nombre de usuario" [(ngModel)]="account.nombre" name="email" class="w3-input w3-border w3-large w3-round"\n\n              type="text">\n\n            <br>\n\n            <label class="w3-text-blue">\n\n              <b>Contraseña</b>\n\n            </label>\n\n            <input placeholder="Ingrese su contraseña " [(ngModel)]="account.contrasena" name="password" class="w3-input w3-border w3-large w3-round"\n\n              type="password">\n\n            <br>\n\n            <button class="w3-btn w3-blue w3-round w3-large">Iniciar sesión</button>\n\n\n\n            <br>\n\n            <br>\n\n\n\n          </form>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-0 col-sm-0 col-xs-0 col-md-0 col-lg-4 col-xl-4></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <!-- <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col col-4>\n\n          <form (submit)="doLogin()">\n\n              <ion-list>\n\n                  <br><br><br>\n\n                <img src="assets/img/logo0.jpg" alt="">\n\n                <br><br><br>\n\n                <ion-item>\n\n                  <ion-label floating>Nombre de usuario</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.nombre" name="email"></ion-input>\n\n                </ion-item>\n\n          \n\n          \n\n                <ion-item>\n\n                  <ion-label floating>Contraseña</ion-label>\n\n                  <ion-input type="password" [(ngModel)]="account.contrasena" name="password"></ion-input>\n\n                </ion-item>\n\n          \n\n                <div padding>\n\n                  <button ion-button color="primary" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n\n                </div>\n\n          \n\n              </ion-list>\n\n            </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-4>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid> -->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\HERAS\inventarioclient\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=9.js.map