webpackJsonp([5],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(366);
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

/***/ 366:
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
    function SettingsPage(navCtrl, settings, loadingCtrl, formBuilder, navParams, translate, alertCtrl, modalCtrl, items) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.loadingCtrl = loadingCtrl;
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
        this.filtro = '';
        this.filtroCategoria = '';
        this.filtroMarca = '';
        this.resultado = 'Realice una búsqueda';
        this.cargarCategorias();
        this.cargarMarcas();
    }
    SettingsPage_1 = SettingsPage;
    SettingsPage.prototype.filtrar = function () {
        switch (this.filtro) {
            case '':
                break;
            case "1":
                this.cargarCero();
                break;
            case "2":
                alert('caso 2');
                break;
            case "3":
                this.todosProductos();
                break;
            case "4":
                this.productosSinPrecio();
                break;
            default:
                break;
        }
    };
    SettingsPage.prototype.cargarCategorias = function () {
        var _this = this;
        var seq = this.items.obtenerCategorias();
        seq.subscribe(function (res) {
            _this.categorias = res;
        });
    };
    SettingsPage.prototype.cargarMarcas = function () {
        var _this = this;
        var seq = this.items.obtenerMarcas();
        seq.subscribe(function (res) {
            _this.marcas = res;
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
    SettingsPage.prototype.cargarCero = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        var seq = this.items.obtenerProductosEnCero();
        seq.subscribe(function (res) {
            _this.productos = res;
            _this.resultado = res.length + " resultado(s)";
            loader.dismiss();
        });
    };
    SettingsPage.prototype.cargarPorCategoria = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        var seq = this.items.obtenerPorCategoria(this.filtroCategoria);
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            _this.productos = res;
            loader.dismiss();
        });
    };
    SettingsPage.prototype.cargarPorMarca = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        var seq = this.items.obtenerPorMarca(this.filtroMarca);
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            _this.productos = res;
            loader.dismiss();
        });
    };
    SettingsPage.prototype.saludar = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        this.buscador = "nombre";
        var seq = this.items.buscarProductoNombre(this.form.value.name);
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            _this.productos = res;
            loader.dismiss();
        }, function (err) {
            loader.dismiss();
            console.error('ERROR', err);
        });
    };
    SettingsPage.prototype.todosProductos = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        var seq = this.items.todosProductos();
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            _this.productos = res;
            loader.dismiss();
        });
    };
    SettingsPage.prototype.productosSinPrecio = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        var seq = this.items.precioCero();
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            _this.productos = res;
            loader.dismiss();
        });
    };
    SettingsPage.prototype.buscarCodigo = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        this.buscador = "codigo";
        var seq = this.items.buscarProductoCodigo(this.formCodigo.value.name);
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            loader.dismiss();
            _this.productos = res;
        }, function (err) {
            console.error('ERROR', err);
            loader.dismiss();
        });
    };
    SettingsPage.prototype.buscarNombre = function (nombre) {
        var _this = this;
        this.buscador = "nombre";
        var seq = this.items.buscarProductoNombre(nombre);
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
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
            _this.resultado = res.length + " resultado(s)";
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
                    if (res) {
                        _this.buscarCodigo2(res.codigo);
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
                });
            }
        });
        addModal.present();
    };
    SettingsPage.prototype.print = function () {
        var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        mywindow.document.write('<html><head><title>' + document.title + '</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write('<h1>' + document.title + '</h1>');
        mywindow.document.write(document.getElementById('boleta').innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        mywindow.print();
        mywindow.close();
        return true;
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
            selector: 'page-settings',template:/*ion-inline-start:"C:\Proyectos\HERAS\inventarioclient\src\pages\settings\settings.html"*/'<ion-content class="animated fadeIn login auth-page">\n\n  <div class="w3-container w3-blue">\n\n    <h2>Productos</h2>\n\n  </div>\n\n\n\n\n\n\n\n\n\n  <div class="w3-container w3-light-gray">\n\n    <div class="w3-row">\n\n      <div class="w3-col w3-padding s12 m4 l4">\n\n        <form id="container" [formGroup]="formCodigo" (ngSubmit)="buscarCodigo()">\n\n\n\n          <label class="w3-text-blue">\n\n            <b>Buscar por código</b>\n\n          </label>\n\n          <input class="w3-input w3-border w3-round-large w3-large" type="text" [(ngModel)]="codigo" autofocus formControlName="name"\n\n            placeholder="Buscar por código">\n\n\n\n\n\n        </form>\n\n      </div>\n\n      <div class="w3-col w3-padding s12 m4 l4">\n\n        <form style="max-width: 100" id="container" *ngIf="form" [formGroup]="form" (ngSubmit)="saludar()">\n\n\n\n          <label class="w3-text-blue">\n\n            <b>Buscar por nombre</b>\n\n          </label>\n\n          <input class="w3-input w3-border w3-round-large w3-large" type="text" autofocus formControlName="name" placeholder="Buscar por nombre"\n\n            (ionInput)="saludar()">\n\n        </form>\n\n      </div>\n\n      <div class="w3-col w3-padding s12 m4 l4">\n\n        <!-- <button class="" ion-button (click)="crearProducto()">Crear un producto</button> -->\n\n        <!-- <button class="" ion-button (click)="todosProductos()">Todos los productos</button> -->\n\n        <!-- <button class="" ion-button color="danger" (click)="cargarCero()">Por acabarse</button> -->\n\n        <label class="w3-text-blue">\n\n          <b>Filtros rápidos</b>\n\n        </label>\n\n        <select class="w3-select w3-large w3-round-large" [(ngModel)]="filtro" (change)="filtrar()" name="option">\n\n          <option value="" selected>Selecciona un filtro...</option>\n\n          <option value="1">Productos sin stock</option>\n\n          <option value="2">Productos por terminarse</option>\n\n          <option value="3">Todos los productos</option>\n\n          <option value="4">Productos con precio cero</option>\n\n        </select>\n\n      </div>\n\n\n\n      <div class="w3-col w3-padding s12 m4 l4">\n\n        <!-- <button class="" ion-button (click)="crearProducto()">Crear un producto</button> -->\n\n        <!-- <button class="" ion-button (click)="todosProductos()">Todos los productos</button> -->\n\n        <!-- <button class="" ion-button color="danger" (click)="cargarCero()">Por acabarse</button> -->\n\n        <label class="w3-text-blue">\n\n          <b>Categorías</b>\n\n        </label>\n\n        <select class="w3-select w3-large w3-round-large" [(ngModel)]="filtroCategoria" (change)="cargarPorCategoria()" name="option">\n\n          <option value="" disabled selected>Selecciona una categoría...</option>\n\n          <option *ngFor="let categoria of categorias" value="{{categoria.id}}">{{categoria.nombre}} ({{categoria.productos.length}})</option>\n\n\n\n        </select>\n\n      </div>\n\n\n\n      <div class="w3-col w3-padding s12 m4 l4">\n\n\n\n        <label class="w3-text-blue">\n\n          <b>Marcas</b>\n\n        </label>\n\n        <select class="w3-select w3-large w3-round-large" name="option" [(ngModel)]="filtroMarca" (change)="cargarPorMarca()">\n\n          <option value="" disabled selected>Seleccione una marca...</option>\n\n          <option *ngFor="let marca of marcas" value="{{marca.id}}">{{marca.nombre}} ({{marca.productos.length}})</option>\n\n\n\n        </select>\n\n      </div>\n\n\n\n      <div class="w3-col w3-padding s12 m4 l4">\n\n        <div class="w3-row">\n\n          <div class="w3-col s12 m4 l4">\n\n            <label class="w3-text-blue">\n\n              <b>Acciones</b>\n\n            </label>\n\n            <button (click)="print()" class="w3-blue w3-round-large w3-button ">Imprimir</button>\n\n          </div>\n\n          <div class="w3-col s12 m4 l4">\n\n            <label class="w3-text-blue">\n\n              <b>Acciones</b>\n\n            </label>\n\n            <button (click)="crearProducto()" class="w3-blue w3-round-large w3-button ">Nuevo producto</button>\n\n          </div>\n\n        </div>\n\n\n\n\n\n      </div>\n\n\n\n    </div>\n\n\n\n\n\n  </div>\n\n\n\n  <div class="">\n\n\n\n\n\n\n\n    <div class="w3-responsive">\n\n\n\n      <div class="w3-padding">\n\n        <h3>{{resultado}}</h3>\n\n      </div>\n\n      <table  class="w3-table w3-bordered w3-large">\n\n\n\n        <tr class="w3-dark-gray">\n\n\n\n          <th>Código</th>\n\n          <th>Producto</th>\n\n          <th>Unidad</th>\n\n          <th>Marca</th>\n\n          <th>Categoría</th>\n\n          <th>Precio</th>\n\n          <th>Stock</th>\n\n          <th>Mínimo</th>\n\n\n\n\n\n\n\n          <th>Acciones</th>\n\n        </tr>\n\n        <tr *ngFor="let producto of productos">\n\n          <td overflow-scroll=" true ">\n\n            <input class="w3-input" readonly type="text" value="{{producto.codigo}}">\n\n          </td>\n\n          <td>{{producto.nombre}}</td>\n\n          <td>{{producto.unidad.nombre}}</td>\n\n          <td>{{producto.marca.nombre}}</td>\n\n          <td>{{producto.categoria.nombre}}</td>\n\n          <td>${{producto.precio}}</td>\n\n          <td [class.w3-orange]=" producto.minimo >=producto.stock " [class.w3-red]=" producto.stock <= 0 " [class.w3-green]=" producto.stock > producto.minimo ">\n\n            {{producto.stock}}\n\n          </td>\n\n          <td [class.w3-orange]=" producto.minimo >=producto.stock " [class.w3-red]=" producto.stock <= 0 " [class.w3-green]=" producto.stock > producto.minimo ">{{producto.minimo}}</td>\n\n\n\n\n\n\n\n\n\n          <td>\n\n            <button ion-button round icon-only small (click)="agregarStock(producto)">\n\n              <ion-icon name="md-add"></ion-icon>\n\n            </button>\n\n            <button ion-button small icon-only color="secondary" (click)="modificarItem(producto)" round>\n\n              <ion-icon name="md-create"></ion-icon>\n\n            </button>\n\n            <button ion-button small icon-only color="light" (click)="listarPrecios(producto)" round>\n\n              <ion-icon name="logo-usd"></ion-icon>\n\n            </button>\n\n            <button ion-button small icon-only color="danger" (click)="desactivarItem(producto)" round>\n\n              <ion-icon name="md-trash"></ion-icon>\n\n            </button>\n\n          </td>\n\n        </tr>\n\n\n\n\n\n      </table>\n\n    </div>\n\n\n\n\n\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n<div id="boleta" class="w3-responsive">\n\n\n\n    <div class="w3-padding">\n\n      <h3>{{resultado}}</h3>\n\n    </div>\n\n    <table class="w3-table " style="width: 100%"border="1">\n\n\n\n      <tr class="w3-dark-gray">\n\n\n\n        <th>Código</th>\n\n        <th>Producto</th>\n\n        <th>Unidad</th>\n\n        <th>Marca</th>\n\n        <th>Categoría</th>\n\n        <th>Precio</th>\n\n        <th>Stock</th>\n\n        <th>Mínimo</th>\n\n\n\n\n\n\n\n        <th>Comentario</th>\n\n      </tr>\n\n      <tr *ngFor="let producto of productos">\n\n        <td overflow-scroll=" true ">\n\n          {{producto.codigo}} \n\n        </td>\n\n        <td>{{producto.nombre}}</td>\n\n        <td>{{producto.unidad.nombre}}</td>\n\n        <td>{{producto.marca.nombre}}</td>\n\n        <td>{{producto.categoria.nombre}}</td>\n\n        <td>${{producto.precio}}</td>\n\n        <td [class.w3-orange]=" producto.minimo >=producto.stock " [class.w3-red]=" producto.stock <= 0 " [class.w3-green]=" producto.stock > producto.minimo ">\n\n          {{producto.stock}}\n\n        </td>\n\n        <td [class.w3-orange]=" producto.minimo >=producto.stock " [class.w3-red]=" producto.stock <= 0 " [class.w3-green]=" producto.stock > producto.minimo ">{{producto.minimo}}</td>\n\n\n\n\n\n\n\n\n\n        <td>\n\n         \n\n        </td>\n\n      </tr>\n\n\n\n\n\n    </table>\n\n  </div>'/*ion-inline-end:"C:\Proyectos\HERAS\inventarioclient\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["c" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* Items */]])
    ], SettingsPage);
    return SettingsPage;
    var SettingsPage_1;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=5.js.map