webpackJsonp([18],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CantidadPageModule", function() { return CantidadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cantidad__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CantidadPageModule = (function () {
    function CantidadPageModule() {
    }
    CantidadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cantidad__["a" /* CantidadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cantidad__["a" /* CantidadPage */]),
            ],
        })
    ], CantidadPageModule);
    return CantidadPageModule;
}());

//# sourceMappingURL=cantidad.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CantidadPage; });
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
 * Generated class for the CantidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CantidadPage = (function () {
    function CantidadPage(navCtrl, navParams, formBuilder, service, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.viewCtrl = viewCtrl;
        this.prod = navParams.get('producto');
        this.formCodigo = formBuilder.group({
            unidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.obtenerPrecios();
    }
    CantidadPage.prototype.cambiar = function (producto) {
        alert(JSON.stringify(producto));
    };
    CantidadPage.prototype.gestionar = function () {
        var _this = this;
        this.service.obtenerPrecio(this.formCodigo.value.unidad).subscribe(function (res) {
            if (_this.formCodigo.valid) {
                if (_this.formCodigo.value.cantidad <= 0) {
                    alert("No se puede ingresar cantidades igual o menor a cero");
                }
                else {
                    _this.viewCtrl.dismiss({ cantidad: _this.formCodigo.value.cantidad, precio: res });
                }
            }
            else {
                alert("Completa todos los campos");
            }
        });
    };
    CantidadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StockPage');
    };
    CantidadPage.prototype.obtenerPrecios = function () {
        var _this = this;
        var seq = this.service.obtenerPrecios(this.prod.id);
        seq.subscribe(function (res) {
            _this.items = res;
            _this.formCodigo.setValue({
                unidad: _this.items[0].tamano,
                cantidad: '1',
            });
        });
    };
    CantidadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cantidad',template:/*ion-inline-start:"C:\Proyectos\HERAS\inventarioclient\src\pages\cantidad\cantidad.html"*/'<ion-content>\n\n    <div class="w3-container w3-blue">\n\n      <h3>Cantidad</h3>\n\n    </div>\n\n  \n\n    <form id="container" [formGroup]="formCodigo" (ngSubmit)="gestionar()">\n\n  \n\n      <div class="w3-container w3-row">\n\n        <div class="w3-col s12 m4 l4 w3-padding">\n\n            <label class="w3-text-blue">\n\n                <b>Unidad</b>\n\n              </label>\n\n              <select [(ngModel)]="unidad"  class="w3-select w3-border w3-round w3-white" name="option" formControlName="unidad">\n\n                <option value="" disabled selected>Elige una opción</option>\n\n        \n\n                <option *ngFor="let item of items" value="{{item.id}}">{{item.unidad.nombre}}</option>\n\n        \n\n              </select>\n\n        </div>\n\n  \n\n        <div class="w3-col s12 m4 l4 w3-padding">\n\n            <label class="w3-text-blue">\n\n                <b>Cantidad</b>\n\n              </label>\n\n              <input class="w3-input w3-border w3-round" placeholder="Cantidad" autofocus formControlName="cantidad" type="number">\n\n        \n\n        \n\n        </div>\n\n  \n\n        \n\n      </div>\n\n      <div class="w3-container w3-padding">\n\n          <button class="w3-btn w3-blue w3-round  ">Guardar</button>\n\n      </div>\n\n  \n\n  \n\n    </form>\n\n  \n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\Proyectos\HERAS\inventarioclient\src\pages\cantidad\cantidad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], CantidadPage);
    return CantidadPage;
}());

//# sourceMappingURL=cantidad.js.map

/***/ })

});
//# sourceMappingURL=18.js.map