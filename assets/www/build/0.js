webpackJsonp([0],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoproductoPageModule", function() { return NuevoproductoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevoproducto__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NuevoproductoPageModule = /** @class */ (function () {
    function NuevoproductoPageModule() {
    }
    NuevoproductoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevoproducto__["a" /* NuevoproductoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevoproducto__["a" /* NuevoproductoPage */]),
            ],
        })
    ], NuevoproductoPageModule);
    return NuevoproductoPageModule;
}());

//# sourceMappingURL=nuevoproducto.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
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
 * Generated class for the NuevoproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoproductoPage = /** @class */ (function () {
    function NuevoproductoPage(navCtrl, navParams, servicio, formBuilder, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.currentItems = [];
        this.form2 = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.validador = false;
        this.form = formBuilder.group({
            codigo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            nombre: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            marca: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            categoria: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            precio: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            stock: ['1', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            minimo: ['0', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            unidad: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            estado: ['1', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
        this.cargarCategorias();
        this.cargarMarcas();
        this.cargarUnidades();
    }
    NuevoproductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevoproductoPage');
    };
    NuevoproductoPage.prototype.cargarCategorias = function () {
        var _this = this;
        var seq = this.servicio.get("categoria?sort=nombre asc");
        seq.subscribe(function (res) {
            _this.categorias = res;
        });
    };
    NuevoproductoPage.prototype.cargarMarcas = function () {
        var _this = this;
        var seq = this.servicio.get("marca?sort=nombre asc");
        seq.subscribe(function (res) {
            _this.marcas = res;
        });
    };
    NuevoproductoPage.prototype.cargarUnidades = function () {
        var _this = this;
        var seq = this.servicio.get("unidad?sort=nombre asc");
        seq.subscribe(function (res) {
            _this.unidades = res;
        });
    };
    NuevoproductoPage.prototype.registrar = function () {
        var _this = this;
        if (!this.form.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Todos los campos son obligatorios',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var seq = this.servicio.post('producto', this.form.value);
            seq.subscribe(function (res) {
                var alert = _this.alertCtrl.create({
                    title: 'Éxito!',
                    subTitle: 'Se guardo el producto satisfactoriamente',
                    buttons: ['OK']
                });
                alert.present();
                _this.viewCtrl.dismiss(res);
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Comprueba que la información ingresada es correcta ',
                    buttons: ['OK']
                });
                alert.present();
                // this.viewCtrl.dismiss(this.form.value);
            });
        }
    };
    NuevoproductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevoproducto',template:/*ion-inline-start:"C:\Proyectos\herasclient2\src\pages\nuevoproducto\nuevoproducto.html"*/'<ion-content>\n\n\n\n  <div class="w3-container w3-blue">\n\n    <h3>Crear producto</h3>\n\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n  <form class="w3-container" id="container" *ngIf="form" [formGroup]="form" (ngSubmit)="registrar()">\n\n\n\n    <label class="w3-text-blue">\n\n      <b>Código</b>\n\n    </label>\n\n    <input class="w3-input w3-border w3-round" placeholder="Código de barras del producto" autofocus formControlName="codigo"\n\n      type="text">\n\n\n\n    <label class="w3-text-blue">\n\n      <b>Nombre</b>\n\n    </label>\n\n    <input class="w3-input w3-border w3-round" placeholder="Nombre del producto" autofocus formControlName="nombre" type="text">\n\n\n\n    <label class="w3-text-blue">\n\n      <b>Unidad</b>\n\n    </label>\n\n    <select class="w3-select w3-border w3-round w3-white" name="option" formControlName="unidad">\n\n      <option value="" disabled selected>Elige una opción</option>\n\n      <option *ngFor="let unidad of unidades" value={{unidad.id}}>{{unidad.nombre}}</option>\n\n\n\n    </select>\n\n\n\n    <label class="w3-text-blue">\n\n      <b>Marca</b>\n\n    </label>\n\n    <select class="w3-select w3-border w3-round w3-white" name="option" formControlName="marca">\n\n      <option value="" disabled selected>Elige una opción</option>\n\n      <option *ngFor="let marca of marcas" value={{marca.id}}>{{marca.nombre}}</option>\n\n\n\n    </select>\n\n    <label class="w3-text-blue">\n\n      <b>Categoría</b>\n\n    </label>\n\n    <select class="w3-select w3-border w3-round w3-white" name="option" formControlName="categoria">\n\n      <option value="" disabled selected>Elige una opción</option>\n\n      <option *ngFor="let categoria of categorias" value={{categoria.id}}>{{categoria.nombre}}</option>\n\n\n\n    </select>\n\n\n\n    <label class="w3-text-blue">\n\n        <b>Precio</b>\n\n      </label>\n\n      <input class="w3-input w3-border w3-round" placeholder="Precio del producto" autofocus formControlName="precio" type="number">\n\n  \n\n      <label class="w3-text-blue">\n\n          <b>Stock inicial</b>\n\n        </label>\n\n        <input class="w3-input w3-border w3-round" placeholder="Stock inicial" autofocus formControlName="stock" type="number">\n\n  \n\n        <label class="w3-text-blue">\n\n            <b>Stock mínimo</b>\n\n          </label>\n\n          <input class="w3-input w3-border w3-round" placeholder="Stock mínimo" autofocus formControlName="minimo" type="number">\n\n      \n\n\n\n  </form>\n\n  <button ion-button (click)="registrar()">Guardar</button>\n\n  <button ion-button (click)="cancelar()">Cancelar</button>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\herasclient2\src\pages\nuevoproducto\nuevoproducto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], NuevoproductoPage);
    return NuevoproductoPage;
}());

//# sourceMappingURL=nuevoproducto.js.map

/***/ })

});
//# sourceMappingURL=0.js.map