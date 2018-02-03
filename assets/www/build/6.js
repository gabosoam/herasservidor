webpackJsonp([6],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, items, formBuilder, alertCtrl, viewCtrl, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.barcodeScanner = barcodeScanner;
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
        this.obtenerMarcas();
        this.obtenerCategorias();
        this.obtenerUnidades();
    }
    SearchPage_1 = SearchPage;
    SearchPage.prototype.escanear = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            var seq = _this.items.buscarProducto(barcodeData.text).share();
            seq.subscribe(function (res) {
                if (res.length == 1) {
                    // this.validador = true;
                    // this.idProducto = res[0].id;
                    _this.form.setValue({
                        codigo: res[0].codigo,
                        nombre: res[0].nombre,
                        marca: '',
                        categoria: '',
                        precio: 0,
                        stock: 0,
                        minimo: 1,
                        unidad: '',
                        estado: 1,
                    });
                }
                else {
                    _this.form.reset();
                    _this.form.setValue({
                        codigo: barcodeData.text,
                        nombre: '',
                        marca: '',
                        categoria: '',
                        precio: 0,
                        stock: 0,
                        minimo: 1,
                        unidad: '',
                        estado: 1,
                    });
                    _this.validador = false;
                }
            }, function (err) {
                _this.validador == false;
                var alert = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Existió un error ',
                    buttons: ['OK']
                });
                alert.present();
            });
        }, function (err) {
            // An error occurred
        });
    };
    SearchPage.prototype.saludar = function () {
        var _this = this;
        var seq = this.items.buscarProducto(this.form2.value.name).share();
        seq.subscribe(function (res) {
            if (res.length == 1) {
                // this.validador = true;
                // this.idProducto = res[0].id;
                _this.form.setValue({
                    codigo: res[0].codigo,
                    nombre: res[0].nombre,
                    marca: '',
                    categoria: '',
                    precio: 0,
                    stock: 0,
                    minimo: 1,
                    unidad: '',
                    estado: 1,
                });
            }
            else {
                _this.form.reset();
                _this.validador = false;
            }
        }, function (err) {
            _this.validador == false;
            var alert = _this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Existió un error ',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SearchPage.prototype.cancelar = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.registrar = function () {
        var _this = this;
        if (this.validador) {
            var seq_1 = this.items.modificarProducto(this.idProducto, this.form.value);
            seq_1.subscribe(function (res) {
                var alert = _this.alertCtrl.create({
                    title: 'Éxito!',
                    subTitle: 'Se modificó el producto satisfactoriamente',
                    buttons: ['OK']
                });
                alert.present();
                _this.navCtrl.push(SearchPage_1);
            }, function (err) {
                console.error('ERROR', err);
            });
        }
        else {
            if (!this.form.valid) {
                var alert = this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Todos los campos son obligatorios',
                    buttons: ['OK']
                });
                alert.present();
            }
            else {
                var seq = this.items.crearProducto(this.form.value).share();
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
        }
    };
    /**
     * Perform a service for the proper items.
     */
    SearchPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    SearchPage.prototype.buscar = function (cosa) {
        console.log(cosa);
        var alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: 'error',
            buttons: ['OK']
        });
        alert.present();
    };
    SearchPage.prototype.obtenerMarcas = function () {
        var _this = this;
        this.items.obtenerMarcas().subscribe(function (marcas) {
            _this.marcas = marcas;
        });
    };
    SearchPage.prototype.obtenerCategorias = function () {
        var _this = this;
        this.items.obtenerCategorias().subscribe(function (categorias) {
            _this.categorias = categorias;
        });
    };
    SearchPage.prototype.obtenerUnidades = function () {
        var _this = this;
        this.items.obtenerUnidades().subscribe(function (resultado) {
            console.log(resultado);
            _this.unidades = resultado;
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    SearchPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    SearchPage = SearchPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Proyectos\inventarioclient\src\pages\search\search.html"*/'<ion-content>\n\n\n\n  <div class="w3-container w3-blue">\n\n    <h3>Crear producto</h3>\n\n  </div>\n\n\n\n  <button ion-button (click)="escanear()" >Escanear cóðigo</button>\n\n\n\n  <form id="container" *ngIf="form2" [formGroup]="form2" (ngSubmit)="saludar()">\n\n    <ion-searchbar [(ngModel)]="cbxProducto" formControlName="name" placeholder="Buscar producto por código">\n\n    </ion-searchbar>\n\n  </form>\n\n\n\n  <form class="w3-container" id="container" *ngIf="form" [formGroup]="form" (ngSubmit)="registrar()">\n\n\n\n    <label class="w3-text-blue">\n\n      <b>Código</b>\n\n    </label>\n\n    <input class="w3-input w3-border w3-round" placeholder="Código de barras del producto" autofocus formControlName="codigo"\n\n      type="text">\n\n\n\n    <label class="w3-text-blue">\n\n      <b>Nombre</b>\n\n    </label>\n\n    <input class="w3-input w3-border w3-round" placeholder="Nombre del producto" autofocus formControlName="nombre" type="text">\n\n\n\n    <label class="w3-text-blue">\n\n      <b>Unidad</b>\n\n    </label>\n\n    <select class="w3-select w3-border w3-round w3-white" name="option" formControlName="unidad">\n\n      <option value="" disabled selected>Elige una opción</option>\n\n      <option *ngFor="let unidad of unidades" value={{unidad.id}}>{{unidad.nombre}}</option>\n\n\n\n    </select>\n\n\n\n    <label class="w3-text-blue">\n\n      <b>Marca</b>\n\n    </label>\n\n    <select class="w3-select w3-border w3-round w3-white" name="option" formControlName="marca">\n\n      <option value="" disabled selected>Elige una opción</option>\n\n      <option *ngFor="let marca of marcas" value={{marca.id}}>{{marca.nombre}}</option>\n\n\n\n    </select>\n\n    <label class="w3-text-blue">\n\n      <b>Categoría</b>\n\n    </label>\n\n    <select class="w3-select w3-border w3-round w3-white" name="option" formControlName="categoria">\n\n      <option value="" disabled selected>Elige una opción</option>\n\n      <option *ngFor="let categoria of categorias" value={{categoria.id}}>{{categoria.nombre}}</option>\n\n\n\n    </select>\n\n\n\n    <label class="w3-text-blue">\n\n        <b>Precio</b>\n\n      </label>\n\n      <input class="w3-input w3-border w3-round" placeholder="Precio del producto" autofocus formControlName="precio" type="number">\n\n  \n\n      <label class="w3-text-blue">\n\n          <b>Stock inicial</b>\n\n        </label>\n\n        <input class="w3-input w3-border w3-round" placeholder="Stock inicial" autofocus formControlName="stock" type="number">\n\n  \n\n        <label class="w3-text-blue">\n\n            <b>Stock mínimo</b>\n\n          </label>\n\n          <input class="w3-input w3-border w3-round" placeholder="Stock mínimo" autofocus formControlName="minimo" type="number">\n\n      \n\n\n\n  </form>\n\n  <button ion-button (click)="registrar()">Guardar</button>\n\n  <button ion-button (click)="cancelar()">Cancelar</button>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventarioclient\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _g || Object])
    ], SearchPage);
    return SearchPage;
    var SearchPage_1, _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=6.js.map