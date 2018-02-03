webpackJsonp([5],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(43);
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
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, settings, formBuilder, navParams, translate, alertCtrl, modalCtrl, items) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.items = items;
        this.settingsReady = false;
        this.profileSettings = {
            page: 'profile',
            pageTitleKey: 'SETTINGS_PAGE_PROFILE'
        };
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.subSettings = SettingsPage_1;
        this.form = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.formCodigo = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    SettingsPage_1 = SettingsPage;
    SettingsPage.prototype.saludar = function () {
        var _this = this;
        this.buscador = "nombre";
        var seq = this.items.buscarProductoNombre(this.form.value.name);
        seq.subscribe(function (res) {
            console.log(res);
            _this.productos = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    SettingsPage.prototype.crearProducto = function () {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create('SearchPage');
        addModal.onDidDismiss(function (producto) {
            if (producto) {
                _this.codigo = producto.codigo;
                _this.buscarCodigo2(producto.codigo);
            }
        });
        addModal.present();
    };
    SettingsPage.prototype.buscarNombre = function (nombre) {
        var _this = this;
        this.buscador = "nombre";
        var seq = this.items.buscarProductoNombre(nombre);
        seq.subscribe(function (res) {
            console.log(res);
            _this.productos = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    SettingsPage.prototype.buscarCodigo = function () {
        var _this = this;
        this.buscador = "codigo";
        var seq = this.items.buscarProductoCodigo(this.formCodigo.value.name);
        seq.subscribe(function (res) {
            console.log('asdasdsa');
            console.log(res);
            _this.productos = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    SettingsPage.prototype.buscarCodigo2 = function (codigo) {
        var _this = this;
        this.buscador = "codigo";
        var seq = this.items.buscarProductoCodigo(codigo);
        seq.subscribe(function (res) {
            _this.productos = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    SettingsPage.prototype.modificarItem = function (producto) {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create('ItemCreatePage', { producto: producto });
        addModal.onDidDismiss(function (producto) {
            if (producto) {
                var seq = _this.items.modificarProducto(producto.id, producto);
                seq.subscribe(function (res) {
                    if (_this.buscador == "nombre") {
                        _this.saludar();
                    }
                    else if (_this.buscador == "codigo") {
                        _this.buscarCodigo();
                    }
                });
            }
        });
        addModal.present();
    };
    SettingsPage.prototype.listarPrecios = function (producto) {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create('PrecioPage', { producto: producto });
        addModal.onDidDismiss(function (producto) {
            if (producto) {
                var seq = _this.items.modificarProducto(producto.id, producto);
                seq.subscribe(function (res) {
                    if (_this.buscador == "nombre") {
                        _this.saludar();
                    }
                    else if (_this.buscador == "codigo") {
                        _this.buscarCodigo();
                    }
                });
            }
        });
        addModal.present();
    };
    SettingsPage.prototype.agregarStock = function (producto) {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create('StockPage', { producto: producto });
        addModal.onDidDismiss(function (data) {
            if (data) {
                var seq = _this.items.modificarStock(data.id, data.stock);
                seq.subscribe(function (res) {
                    if (_this.buscador == "nombre") {
                        _this.saludar();
                    }
                    else if (_this.buscador == "codigo") {
                        _this.buscarCodigo();
                    }
                });
            }
        });
        addModal.present();
    };
    SettingsPage.prototype.desactivarItem = function (producto) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Eliminar este producto?',
            message: 'Está seguro que desea continuar?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        if (producto) {
                            var seq = _this.items.modificarProducto(producto.id, { estado: 0 });
                            seq.subscribe(function (res) {
                                if (_this.buscador == "nombre") {
                                    _this.saludar();
                                }
                                else if (_this.buscador == "codigo") {
                                    _this.buscarCodigo();
                                }
                            });
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingsPage = SettingsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Proyectos\inventarioclient\src\pages\settings\settings.html"*/'<ion-content class="animated fadeIn login auth-page">\n\n  <div class="w3-container w3-blue">\n\n    <h2>Inicio</h2>\n\n  </div>\n\n\n\n\n\n\n\n\n\n  <div class="w3-container w3-light-gray">\n\n    <div class="w3-row">\n\n      <div class="w3-col w3-padding s12 m4 l4">\n\n        <form id="container" [formGroup]="formCodigo" (ngSubmit)="buscarCodigo()">\n\n\n\n          <label class="w3-text-blue">\n\n            <b>Buscar por código</b>\n\n          </label>\n\n          <input class="w3-input w3-border w3-round" type="text" [(ngModel)]="codigo" autofocus formControlName="name" placeholder="Buscar por código">\n\n\n\n\n\n        </form>\n\n      </div>\n\n      <div class="w3-col w3-padding s12 m4 l4">\n\n        <form style="max-width: 100" id="container" *ngIf="form" [formGroup]="form" (ngSubmit)="saludar()">\n\n\n\n          <label class="w3-text-blue">\n\n            <b>Buscar por código</b>\n\n          </label>\n\n          <input class="w3-input w3-border w3-round" type="text" autofocus formControlName="name" placeholder="Buscar por nombre">\n\n        </form>\n\n      </div>\n\n      <div class="w3-col w3-padding s12 m4 l4">\n\n          <button ion-button (click)="crearProducto()">Crear un producto</button>\n\n        </div>\n\n    </div>\n\n  </div>\n\n\n\n<div class="">\n\n    <table class="w3-table w3-striped w3-bordered  w3-round">\n\n\n\n        <tr class="w3-dark-gray">\n\n    \n\n          <th>Código</th>\n\n          <th>Producto</th>\n\n          <th>Stock</th>\n\n    \n\n          <th>Precio</th>\n\n    \n\n          <th>Mínimo</th>\n\n          <th>Acciones</th>\n\n        </tr>\n\n        <tr *ngFor="let producto of productos">\n\n          <td overflow-scroll=" true ">{{producto.codigo}}</td>\n\n          <td>{{producto.nombre}}</td>\n\n          <td>\n\n              {{producto.stock}} ({{producto.unidad.nombre}})\n\n          </td>\n\n    \n\n          <td>${{producto.precio}}</td>\n\n    \n\n          <td>{{producto.minimo}}</td>\n\n          <td>\n\n            <button ion-button round icon-only small (click)="agregarStock(producto)">\n\n              <ion-icon name="md-add"></ion-icon>\n\n            </button>\n\n            <button ion-button small icon-only color="secondary" (click)="modificarItem(producto)" round>\n\n              <ion-icon name="md-create"></ion-icon>\n\n            </button>\n\n            <button ion-button small icon-only color="light" (click)="listarPrecios(producto)" round>\n\n              <ion-icon name="logo-usd"></ion-icon>\n\n            </button>\n\n            <button ion-button small icon-only color="danger" (click)="desactivarItem(producto)" round>\n\n              <ion-icon name="md-trash"></ion-icon>\n\n            </button>\n\n          </td>\n\n        </tr>\n\n    \n\n    \n\n      </table>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventarioclient\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["c" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* Items */]])
    ], SettingsPage);
    return SettingsPage;
    var SettingsPage_1;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=5.js.map