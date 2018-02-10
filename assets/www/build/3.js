webpackJsonp([3],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageModule", function() { return StockPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StockPageModule = (function () {
    function StockPageModule() {
    }
    StockPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__stock__["a" /* StockPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stock__["a" /* StockPage */]),
            ],
        })
    ], StockPageModule);
    return StockPageModule;
}());

//# sourceMappingURL=stock.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StockPage = (function () {
    function StockPage(navCtrl, navParams, formBuilder, service, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.viewCtrl = viewCtrl;
        this.prod = navParams.get('producto');
        this.formCodigo = formBuilder.group({
            unidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,],
            cantidad: ['1', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.obtenerPrecios();
    }
    StockPage.prototype.gestionar = function () {
        var total = this.formCodigo.value.cantidad / this.formCodigo.value.unidad;
        if (this.formCodigo.valid) {
            this.viewCtrl.dismiss({ id: this.prod.id, stock: total });
        }
        else {
        }
    };
    StockPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StockPage');
    };
    StockPage.prototype.obtenerPrecios = function () {
        var _this = this;
        var seq = this.service.obtenerPrecios(this.prod.id);
        seq.subscribe(function (res) {
            console.log(res);
            _this.items = res;
        });
    };
    StockPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stock',template:/*ion-inline-start:"C:\Proyectos\inventarioclient\src\pages\stock\stock.html"*/'<ion-content>\n\n  <div class="w3-container w3-blue">\n\n    <h3>Agregar stock</h3>\n\n  </div>\n\n\n\n  <form id="container" [formGroup]="formCodigo" (ngSubmit)="gestionar()">\n\n\n\n    <div class="w3-container w3-row">\n\n      <div class="w3-col s12 m4 l4 w3-padding">\n\n          <label class="w3-text-blue">\n\n              <b>Unidad</b>\n\n            </label>\n\n            <select [(ngModel)]="unidad" class="w3-select w3-border w3-round w3-white" name="option" formControlName="unidad">\n\n              <option value="" disabled selected="true">Elige una opción</option>\n\n      \n\n              <option *ngFor="let item of items" value={{item.tamano}}>{{item.unidad.nombre}}</option>\n\n      \n\n            </select>\n\n\n\n\n\n    \n\n      </div>\n\n\n\n      <div class="w3-col s12 m4 l4 w3-padding">\n\n          <label class="w3-text-blue">\n\n              <b>Cantidad</b>\n\n            </label>\n\n            <input class="w3-input w3-border w3-round" placeholder="Cantidad" autofocus formControlName="cantidad" type="number">\n\n      \n\n      \n\n      </div>\n\n\n\n      \n\n    </div>\n\n    <div class="w3-container w3-padding">\n\n        <button class="w3-btn w3-blue w3-round  ">Guardar</button>\n\n    </div>\n\n\n\n\n\n  </form>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventarioclient\src\pages\stock\stock.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], StockPage);
    return StockPage;
}());

//# sourceMappingURL=stock.js.map

/***/ })

});
//# sourceMappingURL=3.js.map