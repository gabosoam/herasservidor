webpackJsonp([14],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPageModule", function() { return HistorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historial__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistorialPageModule = (function () {
    function HistorialPageModule() {
    }
    HistorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__historial__["a" /* HistorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historial__["a" /* HistorialPage */]),
            ],
        })
    ], HistorialPageModule);
    return HistorialPageModule;
}());

//# sourceMappingURL=historial.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(43);
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
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorialPage = (function () {
    function HistorialPage(navCtrl, navParams, items, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.loadingCtrl = loadingCtrl;
        this.filtro = '1';
        this.cargarFacturasHoy();
    }
    HistorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistorialPage');
    };
    HistorialPage.prototype.cargarFacturas = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        this.estado = 'Todas las ventas';
        var seq = this.items.obtenerFacturas();
        seq.subscribe(function (res) {
            _this.facturas = res;
            var aux = 0;
            for (var i = 0; i < res.length; i++) {
                aux += res[i].rawtotal;
            }
            _this.total = aux.toFixed(2);
            loader.dismiss();
        });
    };
    HistorialPage.prototype.cargarFacturasHoy = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        this.estado = 'Ventas del día de hoy';
        var seq = this.items.obtenerFacturasHoy();
        seq.subscribe(function (res) {
            _this.facturas = res;
            var aux = 0;
            for (var i = 0; i < res.length; i++) {
                aux += res[i].rawtotal;
            }
            _this.total = aux.toFixed(2);
            loader.dismiss();
        });
    };
    HistorialPage.prototype.cargarFacturasSemana = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        this.estado = 'Ventas de la semana';
        var seq = this.items.obtenerFacturasSemana();
        seq.subscribe(function (res) {
            _this.facturas = res;
            var aux = 0;
            for (var i = 0; i < res.length; i++) {
                aux += res[i].rawtotal;
            }
            _this.total = aux.toFixed(2);
            loader.dismiss();
        });
    };
    HistorialPage.prototype.cargarFacturasMes = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        this.estado = 'Ventas del mes';
        var seq = this.items.obtenerFacturasMes();
        seq.subscribe(function (res) {
            _this.facturas = res;
            var aux = 0;
            for (var i = 0; i < res.length; i++) {
                aux += res[i].rawtotal;
            }
            _this.total = aux.toFixed(2);
            loader.dismiss();
        });
    };
    HistorialPage.prototype.print = function () {
        var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        mywindow.document.write('<html><head><title>' + document.title + '</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write('<h1>' + this.estado + '</h1>');
        mywindow.document.write(document.getElementById('boleta2').innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        mywindow.print();
        mywindow.close();
        return true;
    };
    HistorialPage.prototype.filtrar = function () {
        switch (this.filtro) {
            case '':
                break;
            case "1":
                this.cargarFacturasHoy();
                break;
            case "2":
                this.cargarFacturasSemana();
                break;
            case "3":
                this.cargarFacturasMes();
                break;
            case "4":
                this.cargarFacturas();
                break;
            default:
                break;
        }
    };
    HistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historial',template:/*ion-inline-start:"C:\Proyectos\HERAS\inventarioclient\src\pages\historial\historial.html"*/'<ion-content>\n  <div class="w3-container w3-blue">\n    <h2>Historial</h2>\n  </div>\n\n  <div class="w3-container w3-light-gray">\n    <div class="w3-row">\n\n\n      <div class="w3-col w3-padding s12 m4 l4">\n        <!-- <button class="" ion-button (click)="crearProducto()">Crear un producto</button> -->\n        <!-- <button class="" ion-button (click)="todosProductos()">Todos los productos</button> -->\n        <!-- <button class="" ion-button color="danger" (click)="cargarCero()">Por acabarse</button> -->\n        <label class="w3-text-blue">\n          <b>Filtros rápidos</b>\n        </label>\n        <select class="w3-select w3-large w3-round-large" [(ngModel)]="filtro" (change)="filtrar()" name="option">\n          <option value="" selected>Selecciona un filtro...</option>\n          <option value="1">Hoy</option>\n          <option value="2">Esta semana</option>\n          <option value="3">Este mes</option>\n          <option value="4">Todo!</option>\n        </select>\n        <h3>Mostrando: {{estado}}</h3>\n      </div>\n      <div class="w3-col s12 m4 l4">\n          <label class="w3-text-blue">\n            <b>Acciones</b><br><br>\n          </label>\n          <button (click)="print()" class="w3-blue w3-round-large w3-large w3-button ">Imprimir</button>\n        </div>\n\n      <div class="w3-responsive">\n\n        <div class="w3-padding">\n          <h3>{{resultado}}</h3>\n        </div>\n\n      </div>\n\n\n    </div>\n\n\n\n\n  </div>\n\n  <table class="w3-table w3-bordered w3-large">\n\n    <tr class="w3-dark-gray">\n\n      <th>Número</th>\n      <th>Tipo</th>\n      <th>Fecha</th>\n      <th>Hora</th>\n      <th>Realizado por</th>\n      <th>Total</th>\n\n\n\n      <th>Acciones</th>\n    </tr>\n    <tr *ngFor="let factura of facturas">\n      <td>{{factura.id}}</td>\n      <td>{{factura.cliente}}</td>\n      <td>{{factura.fecha}}</td>\n      <td>{{factura.hora}}</td>\n      <td>{{factura.usuario}}</td>\n      <td>${{factura.total}}</td>\n      <td>\n\n        <button ion-button small icon-only color="danger" (click)="desactivarItem(factura)" round>\n          <ion-icon name="md-trash"></ion-icon>\n        </button>\n      </td>\n    </tr>\n    <tr>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td class="w3-right">\n        <strong style="text-align: left">\n          <h2>Total:</h2>\n        </strong>\n      </td>\n      <td>\n        <h2>${{total}}</h2>\n      </td>\n    </tr>\n\n\n  </table>\n\n\n</ion-content>\n\n<div id="boleta2">\n  <table border="1" style="width: 100%">\n    <tr class="w3-dark-gray">\n\n      <th>Número</th>\n      <th>Tipo</th>\n      <th>Fecha</th>\n      <th>Hora</th>\n      <th>Realizado por</th>\n      <th>Total</th>\n\n    </tr>\n\n    <tr *ngFor="let factura of facturas">\n      <td>{{factura.id}}</td>\n      <td>{{factura.cliente}}</td>\n      <td>{{factura.fecha}}</td>\n      <td>{{factura.hora}}</td>\n      <td>{{factura.usuario}}</td>\n      <td>${{factura.total}}</td>\n    \n    </tr>\n    <tr>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n   \n      <td class="w3-right">\n        <strong style="text-align: left">\n          <h2>Total:</h2>\n        </strong>\n      </td>\n      <td>\n        <h2>${{total}}</h2>\n      </td>\n    </tr>\n\n  </table>\n</div>'/*ion-inline-end:"C:\Proyectos\HERAS\inventarioclient\src\pages\historial\historial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], HistorialPage);
    return HistorialPage;
}());

//# sourceMappingURL=historial.js.map

/***/ })

});
//# sourceMappingURL=14.js.map