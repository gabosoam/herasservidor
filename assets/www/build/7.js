webpackJsonp([7],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecioPageModule", function() { return PrecioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__precio__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrecioPageModule = (function () {
    function PrecioPageModule() {
    }
    PrecioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__precio__["a" /* PrecioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__precio__["a" /* PrecioPage */]),
            ],
        })
    ], PrecioPageModule);
    return PrecioPageModule;
}());

//# sourceMappingURL=precio.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrecioPage; });
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
 * Generated class for the PrecioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrecioPage = (function () {
    function PrecioPage(navCtrl, navParams, formBuilder, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.prod = navParams.get('producto');
        this.obtenerPrecios();
        this.obtenerUnidades();
        this.accion = 'nuevo';
        this.checked = false;
        this.formCodigo = formBuilder.group({
            id: [''],
            unidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            precio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            tamano: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            producto: [this.prod.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    PrecioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrecioPage');
    };
    PrecioPage.prototype.obtenerUnidades = function () {
        var _this = this;
        this.service.obtenerUnidades().subscribe(function (resultado) {
            console.log(resultado);
            _this.unidades = resultado;
        });
    };
    PrecioPage.prototype.obtenerPrecios = function () {
        var _this = this;
        var seq = this.service.obtenerPrecios(this.prod.id);
        seq.subscribe(function (res) {
            _this.items = res;
        });
    };
    PrecioPage.prototype.editar = function (producto) {
        this.accion = "editar";
        this.checked = true;
        this.id = producto.id;
        this.producto = producto.producto;
        this.unidad = producto.unidad;
        this.precio = producto.precio;
        this.tamano = producto.tamano;
    };
    PrecioPage.prototype.eliminar = function (producto) {
        var _this = this;
        var seq = this.service.eliminarPrecio(producto.id);
        seq.subscribe(function (res) {
            _this.obtenerPrecios();
        });
    };
    PrecioPage.prototype.nuevo = function () {
        this.accion = "nuevo";
        this.unidad = "";
        this.precio = "";
        this.tamano = "";
        this.id = "";
    };
    PrecioPage.prototype.gestionar = function () {
        var _this = this;
        if (this.formCodigo.invalid) {
        }
        else {
            switch (this.accion) {
                case 'editar':
                    var seq = this.service.modificarPrecio(this.formCodigo.value);
                    seq.subscribe(function (res) {
                        _this.obtenerPrecios();
                        _this.unidad = "";
                        _this.precio = "";
                        _this.tamano = "";
                        _this.id = "";
                        _this.nuevo();
                    });
                    break;
                case 'nuevo':
                    var seq2 = this.service.agregarPrecio({
                        producto: this.formCodigo.value.producto,
                        unidad: this.formCodigo.value.unidad,
                        tamano: this.formCodigo.value.tamano,
                        precio: this.formCodigo.value.precio,
                    });
                    seq2.subscribe(function (res) {
                        _this.obtenerPrecios();
                        _this.unidad = "";
                        _this.precio = "";
                        _this.tamano = "";
                        _this.id = "";
                    });
                    break;
            }
        }
    };
    PrecioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-precio',template:/*ion-inline-start:"C:\Proyectos\inventarioclient\src\pages\precio\precio.html"*/'<!--\n\n  Generated template for the PrecioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>LISTA DE PRECIOS - {{prod.unidad.nombre}} {{prod.nombre}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form id="container"  [formGroup]="formCodigo" (ngSubmit)="gestionar()" >\n\n\n\n    <ion-list>\n\n\n\n        <ion-input [(ngModel)]="id" type="hidden" value="" formControlName="id"></ion-input>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Unidad</ion-label>\n\n            <ion-select [(ngModel)]="unidad" formControlName="unidad">\n\n                <ion-option disabled  value="">Seleccionar una unidad</ion-option>\n\n              <ion-option *ngFor="let unidad of unidades" value={{unidad.id}}>{{unidad.nombre}}</ion-option>\n\n\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Precio</ion-label>\n\n        <ion-input [(ngModel)]="precio" type="number" value="" formControlName="precio"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Tamaño</ion-label>\n\n        <ion-input [(ngModel)]="tamano" type="number" value="" formControlName="tamano"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <button ion-button>Guardar</button>\n\n      </ion-item>\n\n\n\n\n\n\n\n    </ion-list>\n\n  </form>\n\n  <table style="width: 100%; padding: 10px; border-radius: 25px" border="1">\n\n\n\n    <tr>\n\n\n\n      <th style="padding: 5px; text-align: center">Unidad</th>\n\n      <th style="padding: 5px; text-align: center">Precio</th>\n\n      <th style="padding: 5px; text-align: center">Tamaño</th>\n\n\n\n\n\n\n\n      <th style="padding: 5px; text-align: center"></th>\n\n    </tr>\n\n    <tr *ngFor="let item of items">\n\n      <td style="padding: 5px; text-align: center">{{item.unidad.nombre}}</td>\n\n      <td style="padding: 5px; text-align: center">${{item.precio}}</td>\n\n      <td style="padding: 5px; text-align: center">{{item.tamano}}</td>\n\n\n\n\n\n\n\n      <td style="padding: 5px; text-align: center">\n\n        <button ion-button round icon-only small color="secondary" (click)="editar(item)">\n\n          <ion-icon name="md-create"></ion-icon>\n\n        </button>\n\n\n\n        <button ion-button round icon-only small color="danger" (click)="eliminar(item)">\n\n            <ion-icon name="md-trash"></ion-icon>\n\n          </button>\n\n\n\n      </td>\n\n    </tr>\n\n\n\n\n\n  </table>\n\n\n\n  <ion-fab top right edge (click)="nuevo()">\n\n      <button  ion-fab mini><ion-icon name="add" (click)="nuevo()"></ion-icon></button>\n\n    \n\n    </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventarioclient\src\pages\precio\precio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* Items */]])
    ], PrecioPage);
    return PrecioPage;
}());

//# sourceMappingURL=precio.js.map

/***/ })

});
//# sourceMappingURL=7.js.map