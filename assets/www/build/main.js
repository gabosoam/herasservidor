webpackJsonp([11],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarstockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__ = __webpack_require__(17);
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
 * Generated class for the AgregarstockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgregarstockPage = /** @class */ (function () {
    function AgregarstockPage(navCtrl, navParams, formBuilder, servicio, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.servicio = servicio;
        this.viewCtrl = viewCtrl;
        this.prod = navParams.get('producto');
        this.nombre = this.prod.nombre;
        this.formCodigo = formBuilder.group({
            unidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,],
            cantidad: ['1', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.obtenerPrecios();
    }
    AgregarstockPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarstockPage');
    };
    AgregarstockPage.prototype.obtenerPrecios = function () {
        var _this = this;
        var seq = this.servicio.get('precio?producto=' + this.prod.id);
        seq.subscribe(function (res) {
            _this.items = res;
            _this.formCodigo.setValue({
                unidad: _this.items[0].tamano,
                cantidad: '1',
            });
        });
    };
    AgregarstockPage.prototype.gestionar = function () {
        var total = this.formCodigo.value.cantidad / this.formCodigo.value.unidad;
        if (this.formCodigo.valid) {
            this.viewCtrl.dismiss({ id: this.prod.id, stock: total });
        }
        else {
        }
    };
    AgregarstockPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregarstock',template:/*ion-inline-start:"C:\Proyectos\inventariocliente\src\pages\agregarstock\agregarstock.html"*/'<ion-content>\n  <div class="w3-container w3-blue">\n    <h3>Agregar stock - {{nombre}}</h3>\n  </div>\n\n  <form id="container" [formGroup]="formCodigo" (ngSubmit)="gestionar()">\n\n    <div class="w3-container w3-row">\n      <div class="w3-col s12 m4 l4 w3-padding">\n          <label class="w3-text-blue">\n              <b>Unidad</b>\n            </label>\n            <select [(ngModel)]="unidad" class="w3-select w3-border w3-round-large w3-white w3-large" name="option" formControlName="unidad">\n              <option value="" disabled selected="true">Elige una opción</option>\n      \n              <option *ngFor="let item of items" value={{item.tamano}}>{{item.unidad.nombre}}</option>\n      \n            </select>\n\n\n    \n      </div>\n\n      <div class="w3-col s12 m4 l4 w3-padding">\n          <label class="w3-text-blue">\n              <b>Cantidad</b>\n            </label>\n            <input ng-focus="isFocused" class="w3-input w3-border w3-round-large w3-large" placeholder="Cantidad" autofocus formControlName="cantidad" type="number">\n      \n      \n      </div>\n\n      \n    </div>\n    <div class="w3-container w3-padding">\n        <button class="w3-btn w3-blue w3-round  ">Guardar</button>\n    </div>\n\n\n  </form>\n\n  <hr>\n  <ion-list>\n    <ion-list-header>\n      Stock detallado\n    </ion-list-header>\n    <ion-item *ngFor="let item of items">{{item.producto.stock * item.tamano}}   {{item.unidad.nombre}}</ion-item>\n  \n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventariocliente\src\pages\agregarstock\agregarstock.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], AgregarstockPage);
    return AgregarstockPage;
}());

//# sourceMappingURL=agregarstock.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_agregarstock_agregarstock__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_modificarproducto_modificarproducto__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__preciosproducto_preciosproducto__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_usuario_usuario__ = __webpack_require__(42);
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
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultaPage = /** @class */ (function () {
    function ConsultaPage(navCtrl, navParams, formBuilder, servicio, loadingCtrl, modalCtrl, alertCtrl, usuario) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.servicio = servicio;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.usuario = usuario;
        this.settingsReady = false;
        this.usuarioLogueado = usuario.usuarioLogueado;
        this.form = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.formCodigo = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.filtro = '';
        this.filtroCategoria = '';
        this.filtroMarca = '';
        this.resultado = 'Realice una búsqueda';
        this.cargarCategorias();
        this.cargarMarcas();
    }
    ConsultaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultaPage');
    };
    ConsultaPage.prototype.cargarCategorias = function () {
        var _this = this;
        var seq = this.servicio.get("categoria?sort=nombre asc");
        seq.subscribe(function (res) {
            _this.categorias = res;
        });
    };
    ConsultaPage.prototype.cargarMarcas = function () {
        var _this = this;
        var seq = this.servicio.get("marca?sort=nombre asc");
        seq.subscribe(function (res) {
            _this.marcas = res;
        });
    };
    ConsultaPage.prototype.buscarCodigo = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        this.buscador = "codigo";
        var seq = this.servicio.get('producto?codigo=' + this.formCodigo.value.name + '&estado=1');
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            loader.dismiss();
            _this.productos = res;
        }, function (err) {
            console.error('ERROR', err);
            loader.dismiss();
        });
    };
    ConsultaPage.prototype.buscarPorNombre = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        this.buscador = "nombre";
        var seq = this.servicio.get('producto?where={"nombre":{"contains":"' + this.form.value.name + '"},"estado":{"contains":"1"}}');
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            _this.productos = res;
            loader.dismiss();
        }, function (err) {
            loader.dismiss();
            console.error('ERROR', err);
        });
    };
    ConsultaPage.prototype.filtrar = function () {
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
    ConsultaPage.prototype.cargarCero = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        var seq = this.servicio.get('producto?stock=0 ');
        seq.subscribe(function (res) {
            _this.productos = res;
            _this.resultado = res.length + " resultado(s)";
            loader.dismiss();
        });
    };
    ConsultaPage.prototype.todosProductos = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        var seq = this.servicio.get('producto');
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            _this.productos = res;
            loader.dismiss();
        });
    };
    ConsultaPage.prototype.productosSinPrecio = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        var seq = this.servicio.get('producto?precio=0');
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            _this.productos = res;
            loader.dismiss();
        });
    };
    ConsultaPage.prototype.cargarPorCategoria = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        var seq = this.servicio.get('producto?categoria= ' + this.filtroCategoria);
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            _this.productos = res;
            loader.dismiss();
        });
    };
    ConsultaPage.prototype.cargarPorMarca = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere por favor.",
        });
        loader.present();
        var seq = this.servicio.get('producto?marca= ' + this.filtroMarca);
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            _this.productos = res;
            loader.dismiss();
        });
    };
    ConsultaPage.prototype.print = function () {
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
    ConsultaPage.prototype.crearProducto = function () {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create('NuevoproductoPage');
        addModal.onDidDismiss(function (producto) {
            if (producto) {
                _this.codigo = producto.codigo;
                _this.buscarCodigo2(producto.codigo);
            }
        });
        addModal.present();
    };
    ConsultaPage.prototype.agregarStock = function (producto) {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_agregarstock_agregarstock__["a" /* AgregarstockPage */], { producto: producto });
        addModal.onDidDismiss(function (data) {
            if (data) {
                var seq = _this.servicio.get('producto/modificarstock?id=' + data.id + '&stock=' + data.stock);
                seq.subscribe(function (res) {
                    _this.buscarCodigo2(producto.codigo);
                });
            }
        });
        addModal.present();
    };
    ConsultaPage.prototype.buscarCodigo2 = function (codigo) {
        var _this = this;
        console.log(codigo);
        this.buscador = "codigo";
        var seq = this.servicio.get('producto?codigo=' + codigo + '&estado=1');
        seq.subscribe(function (res) {
            _this.resultado = res.length + " resultado(s)";
            _this.productos = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    ConsultaPage.prototype.modificarItem = function (producto) {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_modificarproducto_modificarproducto__["a" /* ModificarproductoPage */], { producto: producto });
        addModal.onDidDismiss(function (producto) {
            if (producto) {
                var seq = _this.servicio.put('producto/' + producto.id, producto);
                seq.subscribe(function (res) {
                    if (res) {
                        _this.buscarCodigo2(res.codigo);
                    }
                });
            }
        });
        addModal.present();
    };
    ConsultaPage.prototype.listarPrecios = function (producto) {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__preciosproducto_preciosproducto__["a" /* PreciosproductoPage */], { producto: producto });
        addModal.onDidDismiss(function (producto) {
            if (producto) {
                var seq = _this.servicio.put('producto/' + producto.id, producto);
                seq.subscribe(function (res) {
                });
            }
        });
        addModal.present();
    };
    ConsultaPage.prototype.desactivarItem = function (producto) {
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
                            var seq = _this.servicio.put('producto/' + producto.id, { estado: 0 });
                            seq.subscribe(function (res) {
                                _this.buscarCodigo2(producto.codigo);
                            });
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    ConsultaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consulta',template:/*ion-inline-start:"C:\Proyectos\inventariocliente\src\pages\consulta\consulta.html"*/'<ion-content class="">\n\n    <div class="w3-container ">\n        <h2>Consultas</h2>\n        <hr>\n      </div>\n \n  \n\n  <div class="w3-container w3-light-gray">\n    <div class="w3-row">\n      <div class="w3-col w3-padding s12 m4 l4">\n        <form id="container" [formGroup]="formCodigo" (ngSubmit)="buscarCodigo()">\n\n          <label class="w3-text-blue">\n            <b>Buscar por código</b>\n          </label>\n          <input class="w3-input w3-border w3-round-large w3-large" type="text" [(ngModel)]="codigo" autofocus formControlName="name"\n            placeholder="Buscar por código">\n\n\n        </form>\n      </div>\n      <div class="w3-col w3-padding s12 m4 l4">\n        <form style="max-width: 100" id="container" *ngIf="form" [formGroup]="form" (ngSubmit)="buscarPorNombre()">\n\n          <label class="w3-text-blue">\n            <b>Buscar por nombre</b>\n          </label>\n          <input class="w3-input w3-border w3-round-large w3-large" type="text" autofocus formControlName="name" placeholder="Buscar por nombre"\n            (ionInput)="saludar()">\n        </form>\n      </div>\n      <div class="w3-col w3-padding s12 m4 l4">\n        <!-- <button class="" ion-button (click)="crearProducto()">Crear un producto</button> -->\n        <!-- <button class="" ion-button (click)="todosProductos()">Todos los productos</button> -->\n        <!-- <button class="" ion-button color="danger" (click)="cargarCero()">Por acabarse</button> -->\n        <label class="w3-text-blue">\n          <b>Filtros rápidos</b>\n        </label>\n        <select class="w3-select w3-large w3-round-large" [(ngModel)]="filtro" (change)="filtrar()" name="option">\n          <option value="" selected>Selecciona un filtro...</option>\n          <option value="1">Productos sin stock</option>\n          <option value="2">Productos por terminarse</option>\n          <option value="3">Todos los productos</option>\n          <option value="4">Productos con precio cero</option>\n        </select>\n      </div>\n\n      <div class="w3-col w3-padding s12 m4 l4">\n        <!-- <button class="" ion-button (click)="crearProducto()">Crear un producto</button> -->\n        <!-- <button class="" ion-button (click)="todosProductos()">Todos los productos</button> -->\n        <!-- <button class="" ion-button color="danger" (click)="cargarCero()">Por acabarse</button> -->\n        <label class="w3-text-blue">\n          <b>Categorías</b>\n        </label>\n        <select class="w3-select w3-large w3-round-large" [(ngModel)]="filtroCategoria" (change)="cargarPorCategoria()" name="option">\n          <option value="" disabled selected>Selecciona una categoría...</option>\n          <option *ngFor="let categoria of categorias" value="{{categoria.id}}">{{categoria.nombre}} ({{categoria.productos.length}})</option>\n\n        </select>\n      </div>\n\n      <div class="w3-col w3-padding s12 m4 l4">\n\n        <label class="w3-text-blue">\n          <b>Marcas</b>\n        </label>\n        <select class="w3-select w3-large w3-round-large" name="option" [(ngModel)]="filtroMarca" (change)="cargarPorMarca()">\n          <option value="" disabled selected>Seleccione una marca...</option>\n          <option *ngFor="let marca of marcas" value="{{marca.id}}">{{marca.nombre}} ({{marca.productos.length}})</option>\n\n        </select>\n      </div>\n\n      <div class="w3-col w3-padding s12 m4 l4">\n        <div class="w3-row">\n          <div class="w3-col s12 m4 l4">\n            <label class="w3-text-blue">\n              <b>Acciones</b>\n            </label><br>\n            <button (click)="print()" class="w3-blue w3-round-large w3-button ">Imprimir</button>\n          </div>\n          <div\n          [class.w3-hide]=" usuarioLogueado.id.rol==\'usuario\' "\n          class="w3-col s12 m4 l4">\n            <label class="w3-text-blue">\n              <b>Acciones</b>\n            </label>\n            <button (click)="crearProducto()" class="w3-blue w3-round-large w3-button ">Nuevo producto</button>\n          </div>\n        </div>\n\n\n      </div>\n\n    </div>\n\n\n  </div>\n\n  <div class="">\n\n\n\n    <div class="w3-responsive">\n\n      <div class="w3-padding">\n        <h3>{{resultado}}</h3>\n      </div>\n      <table  class="w3-table w3-bordered w3-large">\n\n        <tr class="w3-dark-gray">\n\n          <th>Código</th>\n          <th>Producto</th>\n          <th>Unidad</th>\n          <th>Marca</th>\n          <th>Categoría</th>\n          <th>Precio</th>\n          <th>Stock</th>\n          <th>Mínimo</th>\n\n\n\n          <th\n          [class.w3-hide]=" usuarioLogueado.id.rol==\'usuario\' "\n          >Acciones</th>\n        </tr>\n        <tr *ngFor="let producto of productos">\n          <td overflow-scroll=" true ">\n            <input class="w3-input" readonly type="text" value="{{producto.codigo}}">\n          </td>\n          <td>{{producto.nombre}}</td>\n          <td>{{producto.unidad.nombre}}</td>\n          <td>{{producto.marca.nombre}}</td>\n          <td>{{producto.categoria.nombre}}</td>\n          <td>${{producto.precio}}</td>\n          <td [class.w3-orange]=" producto.minimo >=producto.stock " [class.w3-red]=" producto.stock <= 0 " [class.w3-green]=" producto.stock > producto.minimo ">\n            {{producto.stock}}\n          </td>\n          <td [class.w3-orange]=" producto.minimo >=producto.stock " [class.w3-red]=" producto.stock <= 0 " [class.w3-green]=" producto.stock > producto.minimo ">{{producto.minimo}}</td>\n\n\n\n\n          <td\n          [class.w3-hide]=" usuarioLogueado.id.rol==\'usuario\' "\n          >\n            <button ion-button round icon-only small (click)="agregarStock(producto)">\n              <ion-icon name="md-add"></ion-icon>\n            </button>\n            <button ion-button small icon-only color="secondary" (click)="modificarItem(producto)" round>\n              <ion-icon name="md-create"></ion-icon>\n            </button>\n            <button ion-button small icon-only color="light" (click)="listarPrecios(producto)" round>\n              <ion-icon name="logo-usd"></ion-icon>\n            </button>\n            <button ion-button small icon-only color="danger" (click)="desactivarItem(producto)" round>\n              <ion-icon name="md-trash"></ion-icon>\n            </button>\n          </td>\n        </tr>\n\n\n      </table>\n    </div>\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n</ion-content>\n\n<div id="boleta" class="w3-responsive">\n\n    <div class="w3-padding">\n      <h3>{{resultado}}</h3>\n    </div>\n    <table class="w3-table " style="width: 100%"border="1">\n\n      <tr class="w3-dark-gray">\n\n        <th>Código</th>\n        <th>Producto</th>\n        <th>Unidad</th>\n        <th>Marca</th>\n        <th>Categoría</th>\n        <th>Precio</th>\n        <th>Stock</th>\n        <th>Mínimo</th>\n\n\n\n        <th>Comentario</th>\n      </tr>\n      <tr *ngFor="let producto of productos">\n        <td overflow-scroll=" true ">\n          {{producto.codigo}} \n        </td>\n        <td>{{producto.nombre}}</td>\n        <td>{{producto.unidad.nombre}}</td>\n        <td>{{producto.marca.nombre}}</td>\n        <td>{{producto.categoria.nombre}}</td>\n        <td>${{producto.precio}}</td>\n        <td [class.w3-orange]=" producto.minimo >=producto.stock " [class.w3-red]=" producto.stock <= 0 " [class.w3-green]=" producto.stock > producto.minimo ">\n          {{producto.stock}}\n        </td>\n        <td [class.w3-orange]=" producto.minimo >=producto.stock " [class.w3-red]=" producto.stock <= 0 " [class.w3-green]=" producto.stock > producto.minimo ">{{producto.minimo}}</td>\n\n\n\n\n        <td>\n         \n        </td>\n      </tr>\n\n\n    </table>\n  </div>\n\n'/*ion-inline-end:"C:\Proyectos\inventariocliente\src\pages\consulta\consulta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], ConsultaPage);
    return ConsultaPage;
}());

//# sourceMappingURL=consulta.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificarproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__ = __webpack_require__(17);
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
 * Generated class for the ModificarproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModificarproductoPage = /** @class */ (function () {
    function ModificarproductoPage(navCtrl, navParams, servicio, formBuilder, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.cargarMarcas();
        this.cargarCategorias();
        this.cargarUnidades();
        this.producto = navParams.get('producto');
        this.form = formBuilder.group({
            id: [this.producto.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            codigo: [this.producto.codigo, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            nombre: [this.producto.nombre, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            precio: [this.producto.precio, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            marca: [this.producto.marca.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            categoria: [this.producto.categoria.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            minimo: [this.producto.minimo, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            unidad: [this.producto.unidad.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ModificarproductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModificarproductoPage');
    };
    ModificarproductoPage.prototype.cargarCategorias = function () {
        var _this = this;
        var seq = this.servicio.get("categoria?sort=nombre asc");
        seq.subscribe(function (res) {
            _this.categorias = res;
        });
    };
    ModificarproductoPage.prototype.cargarMarcas = function () {
        var _this = this;
        var seq = this.servicio.get("marca?sort=nombre asc");
        seq.subscribe(function (res) {
            _this.marcas = res;
        });
    };
    ModificarproductoPage.prototype.cargarUnidades = function () {
        var _this = this;
        var seq = this.servicio.get("unidad?sort=nombre asc");
        seq.subscribe(function (res) {
            _this.unidades = res;
        });
    };
    ModificarproductoPage.prototype.modificarProducto = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], ModificarproductoPage.prototype, "fileInput", void 0);
    ModificarproductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modificarproducto',template:/*ion-inline-start:"C:\Proyectos\inventariocliente\src\pages\modificarproducto\modificarproducto.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ producto.nombre }}</ion-title>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form class="w3-margin" *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n\n    <label class="w3-text-blue">\n      <b>Código</b>\n    </label>\n    <input readonly class="w3-input w3-border w3-round" placeholder="Código de barras del producto" autofocus formControlName="codigo"\n      type="text">\n\n    <label class="w3-text-blue">\n      <b>Nombre</b>\n    </label>\n    <input class="w3-input w3-border w3-round" placeholder="Nombre del producto" autofocus formControlName="nombre" type="text">\n\n    <label class="w3-text-blue">\n      <b>Unidad</b>\n    </label>\n    <select class="w3-select w3-border w3-round w3-white" name="option" formControlName="unidad">\n      <option value="" disabled selected>Elige una opción</option>\n      <option *ngFor="let unidad of unidades" value={{unidad.id}}>{{unidad.nombre}}</option>\n\n    </select>\n\n    <label class="w3-text-blue">\n      <b>Marca</b>\n    </label>\n    <select class="w3-select w3-border w3-round w3-white" name="option" formControlName="marca">\n      <option value="" disabled selected>Elige una opción</option>\n      <option *ngFor="let marca of marcas" value={{marca.id}}>{{marca.nombre}}</option>\n\n    </select>\n    <label class="w3-text-blue">\n      <b>Categoría</b>\n    </label>\n    <select class="w3-select w3-border w3-round w3-white" name="option" formControlName="categoria">\n      <option value="" disabled selected>Elige una opción</option>\n      <option *ngFor="let categoria of categorias" value={{categoria.id}}>{{categoria.nombre}}</option>\n\n    </select>\n\n    <label class="w3-text-blue">\n      <b>Precio</b>\n    </label>\n    <input class="w3-input w3-border w3-round" placeholder="Precio del producto" autofocus formControlName="precio" type="number">\n\n\n    <label class="w3-text-blue">\n      <b>Stock mínimo</b>\n    </label>\n    <input class="w3-input w3-border w3-round" placeholder="Stock mínimo" autofocus formControlName="minimo" type="number">\n\n\n\n\n  </form>\n\n  <ion-col class="w3-margin" col-3>\n    <button ion-button (click)="modificarProducto()">Guardar</button>\n  </ion-col>\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventariocliente\src\pages\modificarproducto\modificarproducto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModificarproductoPage);
    return ModificarproductoPage;
}());

//# sourceMappingURL=modificarproducto.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreciosproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__ = __webpack_require__(17);
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
 * Generated class for the PreciosproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreciosproductoPage = /** @class */ (function () {
    function PreciosproductoPage(navCtrl, navParams, formBuilder, servicio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.servicio = servicio;
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
    PreciosproductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreciosproductoPage');
    };
    PreciosproductoPage.prototype.obtenerPrecios = function () {
        var _this = this;
        var seq = this.servicio.get('precio?producto=' + this.prod.id);
        seq.subscribe(function (res) {
            _this.items = res;
        });
    };
    PreciosproductoPage.prototype.obtenerUnidades = function () {
        var _this = this;
        this.servicio.get('unidad?sort=nombre').subscribe(function (resultado) {
            _this.unidades = resultado;
        });
    };
    PreciosproductoPage.prototype.gestionar = function () {
        var _this = this;
        if (this.formCodigo.invalid) {
        }
        else {
            switch (this.accion) {
                case 'editar':
                    if (this.formCodigo.value.tamano <= 0 || this.formCodigo.value.precio <= 0) {
                        alert("No se puede ingresar valores igual o menores a cero");
                    }
                    else {
                        var seq = this.servicio.put('precio/' + this.formCodigo.value.id, this.formCodigo.value);
                        seq.subscribe(function (res) {
                            _this.obtenerPrecios();
                            _this.unidad = "";
                            _this.precio = "";
                            _this.tamano = "";
                            _this.id = "";
                            _this.nuevo();
                        });
                    }
                    break;
                case 'nuevo':
                    if (this.formCodigo.value.tamano <= 0 || this.formCodigo.value.precio <= 0) {
                        alert("No se puede ingresar valores igual o menores a cero");
                    }
                    else {
                        var seq2 = this.servicio.post('precio', {
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
                    }
                    break;
            }
        }
    };
    PreciosproductoPage.prototype.nuevo = function () {
        this.accion = "nuevo";
        this.unidad = "";
        this.precio = "";
        this.tamano = "";
        this.id = "";
    };
    PreciosproductoPage.prototype.editar = function (producto) {
        this.accion = "editar";
        this.checked = true;
        this.id = producto.id;
        this.producto = producto.producto;
        this.unidad = producto.unidad.id;
        this.precio = producto.precio;
        this.tamano = producto.tamano;
    };
    PreciosproductoPage.prototype.eliminar = function (producto) {
        var _this = this;
        var seq = this.servicio.delete('precio/' + producto.id);
        seq.subscribe(function (res) {
            _this.obtenerPrecios();
        });
    };
    PreciosproductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preciosproducto',template:/*ion-inline-start:"C:\Proyectos\inventariocliente\src\pages\preciosproducto\preciosproducto.html"*/'<!--\n  Generated template for the PrecioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>LISTA DE PRECIOS - {{prod.unidad.nombre}} {{prod.nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form id="container" [formGroup]="formCodigo" (ngSubmit)="gestionar()">\n    <ion-input [(ngModel)]="id" type="hidden" value="" formControlName="id"></ion-input>\n\n    <label class="w3-text-blue">\n      <b>Unidad</b>\n    </label>\n    <select class="w3-select w3-border w3-round w3-white" name="option" [(ngModel)]="unidad" formControlName="unidad">\n      <option value="" disabled selected>Elige una opción</option>\n      <option *ngFor="let unidad of unidades" value={{unidad.id}}>{{unidad.nombre}}</option>\n\n    </select>\n\n    <label class="w3-text-blue">\n      <b>Precio</b>\n    </label>\n    <input class="w3-input w3-border w3-round" [(ngModel)]="precio" placeholder="Precio" autofocus formControlName="precio" type="number">\n\n\n    <label class="w3-text-blue">\n        <b>Tamaño</b>\n      </label>\n      <input class="w3-input w3-border w3-round" [(ngModel)]="tamano" placeholder="Tamaño" autofocus formControlName="tamano" type="number">\n  \n\n      <button ion-button>Guardar</button>\n  </form>\n  <table style="width: 100%; padding: 10px; border-radius: 25px" border="1">\n\n    <tr>\n\n      <th style="padding: 5px; text-align: center">Unidad</th>\n      <th style="padding: 5px; text-align: center">Precio</th>\n      <th style="padding: 5px; text-align: center">Tamaño</th>\n\n\n\n      <th style="padding: 5px; text-align: center"></th>\n    </tr>\n    <tr *ngFor="let item of items">\n      <td style="padding: 5px; text-align: center">{{item.unidad.nombre}}</td>\n      <td style="padding: 5px; text-align: center">${{item.precio}}</td>\n      <td style="padding: 5px; text-align: center">{{item.tamano}}</td>\n\n\n\n      <td style="padding: 5px; text-align: center">\n        <button ion-button round icon-only small color="secondary" (click)="editar(item)">\n          <ion-icon name="md-create"></ion-icon>\n        </button>\n\n        <button ion-button round icon-only small color="danger" (click)="eliminar(item)">\n          <ion-icon name="md-trash"></ion-icon>\n        </button>\n\n      </td>\n    </tr>\n\n\n  </table>\n\n  <ion-fab top right edge (click)="nuevo()">\n    <button ion-fab mini>\n      <ion-icon name="add" (click)="nuevo()"></ion-icon>\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventariocliente\src\pages\preciosproducto\preciosproducto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__["a" /* ServicioProvider */]])
    ], PreciosproductoPage);
    return PreciosproductoPage;
}());

//# sourceMappingURL=preciosproducto.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__ = __webpack_require__(17);
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
 * Generated class for the BuscarproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscarproductoPage = /** @class */ (function () {
    function BuscarproductoPage(navCtrl, navParams, servicio, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.viewCtrl = viewCtrl;
        this.searchQuery = '';
    }
    BuscarproductoPage.prototype.agregar = function (producto) {
        this.viewCtrl.dismiss(producto);
    };
    BuscarproductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuscarproductoPage');
    };
    BuscarproductoPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        var _this = this;
        // set val to the value of the searchbar
        var val = ev.target.value;
        var seq = this.servicio.get('producto?where={"nombre":{"contains":"' + val + '"},"estado":{"contains":"1"}}');
        seq.subscribe(function (data) {
            _this.items = data;
            if (val && val.trim() != '') {
                _this.items = _this.items.filter(function (item) {
                    return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        });
        // if the value is an empty string don't filter the items
    };
    BuscarproductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscarproducto',template:/*ion-inline-start:"C:\Proyectos\inventariocliente\src\pages\buscarproducto\buscarproducto.html"*/'<!--\n  Generated template for the BuscarproductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-searchbar placeholder="Ingresar el nombre de un producto" (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <table style="width: 100%; padding: 10px; border-radius: 25px" border="1">\n   \n        <tr>\n          \n          <th style="padding: 5px; text-align: center">Código</th>\n          <th style="padding: 5px; text-align: center">Producto</th>\n          <th style="padding: 5px; text-align: center">U.</th>\n         \n       \n\n          <th style="padding: 5px; text-align: center"></th>\n        </tr>\n        <tr *ngFor="let item of items">\n          <td  style="padding: 5px; text-align: center">{{item.codigo}}</td>\n          <td style="padding: 5px; text-align: center">{{item.nombre}}</td>\n          <td style="padding: 5px; text-align: center">{{item.unidad.nombre}}</td>\n         \n\n     \n          <td style="padding: 5px; text-align: center">\n            <button ion-button round icon-only small (click)="agregar(item)">\n              <ion-icon name="ios-arrow-down"></ion-icon>\n            </button>\n       \n          </td>\n        </tr>\n  \n  \n      </table>\n\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\inventariocliente\src\pages\buscarproducto\buscarproducto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], BuscarproductoPage);
    return BuscarproductoPage;
}());

//# sourceMappingURL=buscarproducto.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IniciarventaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the IniciarventaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IniciarventaPage = /** @class */ (function () {
    function IniciarventaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IniciarventaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IniciarventaPage');
    };
    IniciarventaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-iniciarventa',template:/*ion-inline-start:"C:\Proyectos\inventariocliente\src\pages\iniciarventa\iniciarventa.html"*/'<!--\n  Generated template for the IniciarventaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>iniciarventa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button>Iniciar venta</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\inventariocliente\src\pages\iniciarventa\iniciarventa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], IniciarventaPage);
    return IniciarventaPage;
}());

//# sourceMappingURL=iniciarventa.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(42);
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
var HistorialPage = /** @class */ (function () {
    function HistorialPage(navCtrl, navParams, loadingCtrl, servicio, usuario) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.servicio = servicio;
        this.usuario = usuario;
        this.usuarioLogueado = usuario.usuarioLogueado;
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
        var seq = this.servicio.get('factura/todas');
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
        var seq = this.servicio.get('factura/deldia');
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
        var seq = this.servicio.get('factura/delasemana');
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
        var seq = this.servicio.get('factura/delmes');
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
        mywindow.document.write(document.getElementById('boleta3').innerHTML);
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
            selector: 'page-historial',template:/*ion-inline-start:"C:\Proyectos\inventariocliente\src\pages\historial\historial.html"*/'<ion-content>\n\n  <div\n  [class.w3-hide]=" usuarioLogueado.id.rol==\'usuario\' "\n  >\n\n\n\n    <div class="w3-container w3-light-gray">\n      <div class="w3-row">\n\n\n        <div class="w3-col w3-padding s12 m4 l4">\n          <!-- <button class="" ion-button (click)="crearProducto()">Crear un producto</button> -->\n          <!-- <button class="" ion-button (click)="todosProductos()">Todos los productos</button> -->\n          <!-- <button class="" ion-button color="danger" (click)="cargarCero()">Por acabarse</button> -->\n          <label class="w3-text-blue">\n            <b>Filtros rápidos</b>\n          </label>\n          <select class="w3-select w3-large w3-round-large" [(ngModel)]="filtro" (change)="filtrar()" name="option">\n            <option value="" selected>Selecciona un filtro...</option>\n            <option value="1">Hoy</option>\n            <option value="2">Esta semana</option>\n            <option value="3">Este mes</option>\n            <option value="4">Todo!</option>\n          </select>\n          <h3>Mostrando: {{estado}}</h3>\n        </div>\n        <div class="w3-col s12 m4 l4">\n          <label class="w3-text-blue">\n            <b>Acciones</b>\n            <br>\n            <br>\n          </label>\n          <button (click)="print()" class="w3-blue w3-round-large w3-large w3-button ">Imprimir</button>\n        </div>\n\n        <div class="w3-responsive">\n\n          <div class="w3-padding">\n            <h3>{{resultado}}</h3>\n          </div>\n\n        </div>\n\n\n      </div>\n\n\n\n\n    </div>\n\n    <table class="w3-table w3-bordered w3-large">\n\n      <tr class="w3-dark-gray">\n\n        <th>Número</th>\n        <th>Tipo</th>\n        <th>Fecha</th>\n        <th>Hora</th>\n        <th>Realizado por</th>\n        <th>Total</th>\n\n\n\n        <th>Acciones</th>\n      </tr>\n      <tr *ngFor="let factura of facturas">\n        <td>{{factura.id}}</td>\n        <td>{{factura.cliente}}</td>\n        <td>{{factura.fecha}}</td>\n        <td>{{factura.hora}}</td>\n        <td>{{factura.usuario}}</td>\n        <td>${{factura.total}}</td>\n        <td>\n\n          <button ion-button small icon-only color="danger" (click)="desactivarItem(factura)" round>\n            <ion-icon name="md-trash"></ion-icon>\n          </button>\n        </td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td class="w3-right">\n          <strong style="text-align: left">\n            <h2>Total:</h2>\n          </strong>\n        </td>\n        <td>\n          <h2>${{total}}</h2>\n        </td>\n      </tr>\n\n\n    </table>\n\n  </div>\n\n\n</ion-content>\n\n<div id="boleta3">\n  <table border="1" style="width: 100%">\n    <tr class="w3-dark-gray">\n\n      <th>Número</th>\n      <th>Tipo</th>\n      <th>Fecha</th>\n      <th>Hora</th>\n      <th>Realizado por</th>\n      <th>Total</th>\n\n    </tr>\n\n    <tr *ngFor="let factura of facturas">\n      <td>{{factura.id}}</td>\n      <td>{{factura.cliente}}</td>\n      <td>{{factura.fecha}}</td>\n      <td>{{factura.hora}}</td>\n      <td>{{factura.usuario}}</td>\n      <td>${{factura.total}}</td>\n\n    </tr>\n    <tr>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n\n      <td class="w3-right">\n        <strong style="text-align: left">\n          <h2>Total:</h2>\n        </strong>\n      </td>\n      <td>\n        <h2>${{total}}</h2>\n      </td>\n    </tr>\n\n  </table>\n</div>'/*ion-inline-end:"C:\Proyectos\inventariocliente\src\pages\historial\historial.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__["a" /* ServicioProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__["a" /* ServicioProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */]) === "function" && _e || Object])
    ], HistorialPage);
    return HistorialPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=historial.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CantidadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__ = __webpack_require__(17);
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
var CantidadPage = /** @class */ (function () {
    function CantidadPage(navCtrl, navParams, servicio, formBuilder, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.prod = navParams.get('producto');
        this.nombre = this.prod.nombre;
        this.formCodigo = formBuilder.group({
            unidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.obtenerPrecios();
    }
    CantidadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CantidadPage');
    };
    CantidadPage.prototype.obtenerPrecios = function () {
        var _this = this;
        var seq = this.servicio.get('precio?producto=' + this.prod.id);
        seq.subscribe(function (res) {
            _this.items = res;
            var valor = res[0].unidad;
            _this.formCodigo.setValue({
                unidad: res[0].id,
                cantidad: '1',
            });
        });
    };
    CantidadPage.prototype.gestionar = function () {
        var _this = this;
        this.servicio.get('precio/' + this.formCodigo.value.unidad).subscribe(function (res) {
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
    CantidadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cantidad',template:/*ion-inline-start:"C:\Proyectos\inventariocliente\src\pages\cantidad\cantidad.html"*/'<ion-content>\n  <div class="w3-container w3-blue">\n    <h3>Cantidad - {{nombre}}</h3>\n  </div>\n\n  <form id="container" [formGroup]="formCodigo" (ngSubmit)="gestionar()">\n\n    <div class="w3-container w3-row">\n      <div class="w3-col s12 m4 l4 w3-padding">\n        <label class="w3-text-blue">\n          <b>Unidad</b>\n        </label>\n        <select class="w3-select w3-border w3-round w3-white" name="option" [(ngModel)]="unidad" formControlName="unidad">\n\n\n          <option *ngFor="let item of items" value="{{item.id}}">{{item.unidad.nombre}}</option>\n\n        </select>\n      </div>\n\n      <div class="w3-col s12 m4 l4 w3-padding">\n        <label class="w3-text-blue">\n          <b>Cantidad</b>\n        </label>\n        <input class="w3-input w3-border w3-round" placeholder="Cantidad" autofocus formControlName="cantidad" type="number">\n\n\n      </div>\n\n\n    </div>\n    <div class="w3-container w3-padding">\n      <button class="w3-btn w3-blue w3-round  ">Guardar</button>\n    </div>\n\n\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventariocliente\src\pages\cantidad\cantidad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], CantidadPage);
    return CantidadPage;
}());

//# sourceMappingURL=cantidad.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(42);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, servicio, usuarioLogueado) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.usuarioLogueado = usuarioLogueado;
        this.account = {
            nombre: '',
            contrasena: ''
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var seq = this.servicio.post('login', this.account);
        seq.subscribe(function (res) {
            _this.usuarioLogueado.crearUsuario(res);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Proyectos\inventariocliente\src\pages\login\login.html"*/'<ion-content padding class="animated fadeIn login auth-page">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-0 col-sm-0 col-xs-0 col-md-0 col-lg-4 col-xl-4></ion-col>\n        <ion-col col-12 col-sm-12 col-xs-12 col-md-12 col-lg-4 col-xl-4>\n          <div class="login-content w3-card-4 w3-white w3-round-large  w3-padding w3-border-blue">\n  \n            <!-- Logo -->\n            <div padding-horizontal text-center class="animated fadeInDown">\n              <img src="assets/imgs/logo.jpg" alt="">\n              <br>\n              <br>\n              <h2 ion-text class="text-primary">\n                <strong>Sistema de inventario HERAS</strong>\n              </h2>\n            </div>\n            <br>\n            <br>\n            <form class="w3-container" (submit)="doLogin()">\n  \n              <label class="w3-text-blue">\n                <b>Nombre de usuario</b>\n              </label>\n              <input autofocus placeholder="Ingrese su nombre de usuario" [(ngModel)]="account.nombre" name="email" class="w3-input w3-border w3-large w3-round"\n                type="text">\n              <br>\n              <label class="w3-text-blue">\n                <b>Contraseña</b>\n              </label>\n              <input placeholder="Ingrese su contraseña " [(ngModel)]="account.contrasena" name="password" class="w3-input w3-border w3-large w3-round"\n                type="password">\n              <br>\n              <button class="w3-btn w3-blue w3-round w3-large">Iniciar sesión</button>\n  \n              <br>\n              <br>\n  \n            </form>\n  \n  \n  \n  \n  \n  \n  \n          </div>\n        </ion-col>\n        <ion-col col-0 col-sm-0 col-xs-0 col-md-0 col-lg-4 col-xl-4></ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  \n    <!-- <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n  \n        </ion-col>\n  \n        <ion-col col-4>\n            <form (submit)="doLogin()">\n                <ion-list>\n                    <br><br><br>\n                  <img src="assets/img/logo0.jpg" alt="">\n                  <br><br><br>\n                  <ion-item>\n                    <ion-label floating>Nombre de usuario</ion-label>\n                    <ion-input type="text" [(ngModel)]="account.nombre" name="email"></ion-input>\n                  </ion-item>\n            \n            \n                  <ion-item>\n                    <ion-label floating>Contraseña</ion-label>\n                    <ion-input type="password" [(ngModel)]="account.contrasena" name="password"></ion-input>\n                  </ion-item>\n            \n                  <div padding>\n                    <button ion-button color="primary" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n                  </div>\n            \n                </ion-list>\n              </form>\n        </ion-col>\n  \n        <ion-col col-4>\n  \n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n  \n  </ion-content>'/*ion-inline-end:"C:\Proyectos\inventariocliente\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cantidad_cantidad__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__buscarproducto_buscarproducto__ = __webpack_require__(106);
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
 * Generated class for the VentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VentaPage = /** @class */ (function () {
    function VentaPage(navCtrl, navParams, formBuilder, servicio, modalCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.factura = { id: 0 };
        this.cliente = "1";
        this.form = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.refrescar();
    }
    VentaPage.prototype.ionViewDidLoad = function () {
    };
    VentaPage.prototype.refrescar = function () {
        var _this = this;
        var data = [];
        this.detalles = data;
        this.servicio.post('factura', { usuario: 'Gabo' }).subscribe(function (res) {
            _this.factura = res;
            _this.obtenerDetalles(_this.factura.id).subscribe(function (res) {
                _this.detalles = res;
                _this.calcularTotal();
            });
            var fecha = new Date(_this.factura.createdAt);
            _this.fecha = fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
        });
    };
    VentaPage.prototype.obtenerDetalles = function (factura) {
        var _this = this;
        this.form.setValue({
            name: ''
        });
        var seq = this.servicio.get('detalle/obtenerdetalle?factura=' + factura);
        seq.subscribe(function (res) {
            _this.detalles = res;
            _this.calcularTotal();
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
            }
            else {
            }
        }, function (err) {
        });
        return seq;
    };
    VentaPage.prototype.calcularTotal = function () {
        var detalle = this.detalles;
        var aux = 0.00;
        for (var index = 0; index < detalle.length; index++) {
            aux += parseFloat(detalle[index].rawtotal);
        }
        this.total = 0.00;
        this.total = aux.toFixed(2);
    };
    VentaPage.prototype.cambiarCliente = function () {
        var seq = this.servicio.put('factura/' + this.factura.id, { cliente: this.cliente });
        seq.subscribe(function (res) {
        }, function (error) {
        });
    };
    VentaPage.prototype.buscarCodigo = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.servicio.get('producto?codigo=' + this.form.value.name + '&estado=1').subscribe(function (resultado) {
            if (resultado.length > 0) {
                //  let addModal = this.modalCtrl.create('ItemCreatePage');
                var addModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cantidad_cantidad__["a" /* CantidadPage */], { producto: resultado[0] });
                addModal.onDidDismiss(function (data) {
                    if (data) {
                        var detalle = {
                            factura: _this.factura.id,
                            cantidad: data.cantidad,
                            producto: resultado[0].id,
                            precio: data.precio.precio,
                            unidad: data.precio.unidad.nombre,
                            reducir: data.cantidad / data.precio.tamano
                        };
                        if (data.cantidad / data.precio.tamano > resultado[0].stock) {
                            var confirm = _this.alertCtrl.create({
                                title: 'Atención!',
                                message: 'Tienes menos stock del solicitado. Deseas continuar?',
                                buttons: [
                                    {
                                        text: 'Aceptar',
                                        handler: function () {
                                            _this.servicio.post('detalle/', detalle).subscribe(function (res) {
                                                _this.obtenerDetalles(_this.factura.id);
                                            });
                                        }
                                    },
                                    {
                                        text: 'Cancelar',
                                        handler: function () {
                                        }
                                    }
                                ]
                            });
                            confirm.present();
                        }
                        else {
                            _this.servicio.post('detalle/', detalle).subscribe(function (res) {
                                _this.obtenerDetalles(_this.factura.id);
                            });
                        }
                    }
                });
                addModal.present();
            }
            else {
                alert('No existe el código ingresado');
            }
        });
    };
    VentaPage.prototype.borrarDetalle = function (detalle) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Eliminar ítem',
            message: 'Está seguro que desea eliminar el ítem?',
            buttons: [
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.servicio.delete('detalle/' + detalle).subscribe(function (data) {
                            _this.obtenerDetalles(_this.factura.id);
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    VentaPage.prototype.buscar = function () {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__buscarproducto_buscarproducto__["a" /* BuscarproductoPage */]);
        addModal.onDidDismiss(function (producto) {
            if (producto) {
                var addModal_1 = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cantidad_cantidad__["a" /* CantidadPage */], { producto: producto });
                addModal_1.onDidDismiss(function (data) {
                    if (data) {
                        var detalle = {
                            factura: _this.factura.id,
                            cantidad: data.cantidad,
                            producto: producto.id,
                            precio: data.precio.precio,
                            unidad: data.precio.unidad.nombre,
                            reducir: data.cantidad / data.precio.tamano
                        };
                        _this.servicio.post('detalle/', detalle).subscribe(function (res) {
                            _this.obtenerDetalles(_this.factura.id);
                        });
                    }
                });
                addModal_1.present();
            }
        });
        addModal.present();
    };
    VentaPage.prototype.comprobante = function () {
        var _this = this;
        if (this.total == 0) {
            var alert = this.alertCtrl.create({
                title: 'Alerta!',
                subTitle: JSON.stringify('No se puede imprimir un comprobante sin detalle '),
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            var confirm = this.alertCtrl.create({
                title: 'Desea continuar?',
                message: 'Al cerrar la venta no podrás agregar o quitar productos',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.print();
                            _this.refrescar();
                        }
                    },
                    {
                        text: 'Cancelar',
                        handler: function () {
                        }
                    }
                ]
            });
            confirm.present();
        }
    };
    VentaPage.prototype.sincomprobante = function () {
        var _this = this;
        if (this.total == 0) {
            var alert = this.alertCtrl.create({
                title: 'Alerta!',
                subTitle: JSON.stringify('No se puede imprimir un comprobante sin detalle '),
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            var confirm = this.alertCtrl.create({
                title: 'Desea continuar?',
                message: 'Al cerrar la venta no podrás agregar o quitar productos',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.refrescar();
                        }
                    },
                    {
                        text: 'Cancelar',
                        handler: function () {
                        }
                    }
                ]
            });
            confirm.present();
        }
    };
    VentaPage.prototype.calcular = function () {
        this.vuelto = (this.recibido - this.total).toFixed(2);
    };
    VentaPage.prototype.print = function () {
        var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        mywindow.document.write('</head><body >');
        mywindow.document.write(document.getElementById('boleta2').innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        mywindow.print();
        mywindow.close();
        return true;
    };
    VentaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-venta',template:/*ion-inline-start:"C:\Proyectos\inventariocliente\src\pages\venta\venta.html"*/'<ion-content>\n\n  <div class="w3-container ">\n    <h2>Comprobante # {{factura.id}}</h2>\n    <hr>\n  </div>\n\n  <div class="w3-row">\n    <div class="w3-col l12 w3-border w3-padding" style="text-align: center">\n      <h1>Total: ${{total}}</h1>\n    </div>\n  </div>\n\n  <div class="w3-row w3-border">\n    <div class="w3-col l3 w3-padding">\n\n      <select class="w3-select w3-border w3-round w3-white w3-xlarge" [(ngModel)]="cliente" (change)="cambiarCliente()">\n        <option value="1">Venta</option>\n        <option value="2">Consumo interno</option>\n      </select>\n\n\n    </div>\n\n    <div class="w3-col l3  w3-padding">\n      <button class="w3-large" ion-button icon-left block (click)="buscar()">\n        <ion-icon name="search"></ion-icon>\n        Buscar producto por nombre\n      </button>\n\n\n\n\n    </div>\n\n    <div class="w3-col l3  w3-padding">\n      <button class="w3-large" ion-button icon-left full (click)="comprobante()">\n        <ion-icon name="ios-print-outline"></ion-icon>\n        Cobrar e imprimir\n      </button>\n\n      <button class="w3-large" ion-button icon-left full color="secondary" (click)="sincomprobante()">\n        <ion-icon name="ios-remove-circle-outline"></ion-icon>\n        Cobrar y no imprimir\n      </button>\n\n\n\n\n\n    </div>\n\n    <div class="w3-col l3  w3-padding">\n      <label class="w3-text-blue w3-large">\n        <b>Dinero recibido</b>\n      </label>\n      <input class="w3-input w3-border w3-round w3-xlarge" placeholder="Dinero recibido" type="number" [(ngModel)]="recibido" (input)="calcular()">\n\n      <label class="w3-text-blue w3-large">\n        <b>Vuelto</b>\n      </label>\n      <input class="w3-input w3-border w3-round w3-xlarge" placeholder="Vuelto" type="number" value="0.00" [(ngModel)]="vuelto">\n\n\n\n    </div>\n\n\n\n  </div>\n\n\n  <div class="w3-row w3-border ">\n    <div class="w3-col l3 w3-padding"></div>\n    <div class="w3-col l6  w3-padding " style="text-align: center">\n      <form id="container2" *ngIf="form" [formGroup]="form" (ngSubmit)="buscarCodigo()">\n        <div class="w3-row">\n          <div class="w3-col l11">\n            <input id="focusInput" class="w3-input w3-border w3-round w3-xlarge" autofocus formControlName="name" placeholder="Ingresar código de barras" type="text">\n\n          </div>\n          <div class="w3-col l1">\n              <button class="w3-button w3-blue w3-large">\n                  <ion-icon name="search"></ion-icon>\n              \n                </button>\n          </div>\n        </div>\n\n      </form>\n\n    </div>\n\n    <div class="w3-col l3"></div>\n\n\n  </div>\n  <br>\n\n\n\n\n  <table class="w3-table w3-striped w3-bordered  w3-round w3-large">\n    <tr class="w3-dark-gray">\n      <th>Cantidad</th>\n      <th>Código</th>\n      <th>Producto</th>\n      <th>Unidad</th>\n      <th>Unitario</th>\n      <th>Total</th>\n      <th>Acciones</th>\n      <th class="w3-blue">Stock</th>\n    </tr>\n    <tr *ngFor="let detalle of detalles">\n      <td>{{detalle.cantidad}}</td>\n      <td>{{detalle.codigo}}</td>\n      <td>{{detalle.producto}}</td>\n      <td>{{detalle.unidad}}</td>\n      <td>${{detalle.unitario}}</td>\n      <td>${{detalle.total}}</td>\n      <td>\n\n        <button ion-button small icon-only color="danger" (click)="borrarDetalle(detalle.id)" round>\n          <ion-icon name="md-trash"></ion-icon>\n        </button>\n      </td>\n\n      <td>{{detalle.stock}}</td>\n    </tr>\n  </table>\n\n\n\n\n  <!-- align to the bottom of the page -->\n  <!-- <div style="position: absolute; bottom: 0px; width: 100%">\n          <div style="text-align: center">\n            <p>Bottom</p>\n          </div>\n      </div> -->\n\n\n\n\n</ion-content>\n\n<div style="visibility: hidden" id="boleta2" style=" border: 1; font-size: 8; border-color: black">\n\n\n  <h1>COMERCIAL HERAS</h1>\n  <h2>Ventas al por mayor y menor</h2>\n  <h2>\n    <strong>Comprebante:</strong> # {{factura.id}}</h2>\n  <h2>Fecha: {{fecha}}</h2>\n\n\n  <hr>\n\n\n\n\n  <table style="width: 100%">\n    <tr>\n      <th style="text-align: center; padding: 2px">\n        <h1>Cant.</h1>\n      </th>\n      <th style="text-align: center; padding: 2px">\n        <h1>Producto</h1>\n      </th>\n      <th style="text-align: center; padding: 2px">\n        <h1>Unit.</h1>\n      </th>\n      <th style="text-align: center; padding: 2px">\n        <h1>Total</h1>\n      </th>\n\n    </tr>\n\n    <tr *ngFor="let detalle of detalles">\n      <td style="text-align: center; padding: 2px">\n        <h2>{{detalle.cantidad}}</h2>\n      </td>\n      <td style="text-align: left; padding: 2px;">\n        <h2>{{detalle.producto}}</h2>\n      </td>\n      <td style="text-align: center; padding: 2px">\n        <h2>${{detalle.unitario}}</h2>\n      </td>\n      <td style="text-align: center; padding: 2px">\n        <h2>${{detalle.total}}</h2>\n      </td>\n\n\n    </tr>\n\n\n  </table>\n  <hr>\n\n\n  <div style="text-align: right">\n    <h1>TOTAL: ${{total}}</h1>\n  </div>\n  <hr>\n  <h2 style="text-align: center">***ES UN PLACER SERVIRLE***</h2>\n  <h4 style="text-align: center">Este comprobante no tiene validez tributaria</h4>\n\n\n\n</div>\n\n\n<script>\n\n  alert(\'hola\')\n\n  function saludar() {\n    alert(saludar);\n  }\n  function PrintElem(elem) {\n    var mywindow = window.open(\'\', \'PRINT\', \'height=400,width=600\');\n\n    mywindow.document.write(\'<html><head><title>\' + document.title + \'</title>\');\n    mywindow.document.write(\'</head><body >\');\n    mywindow.document.write(\'<h1>\' + document.title + \'</h1>\');\n    mywindow.document.write(document.getElementById(elem).innerHTML);\n    mywindow.document.write(\'</body></html>\');\n\n    mywindow.document.close(); // necessary for IE >= 10\n    mywindow.focus(); // necessary for IE >= 10*/\n\n    mywindow.print();\n    mywindow.close();\n\n    return true;\n  }\n\n</script>'/*ion-inline-end:"C:\Proyectos\inventariocliente\src\pages\venta\venta.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__["a" /* ServicioProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__["a" /* ServicioProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], VentaPage);
    return VentaPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=venta.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agregarstock/agregarstock.module": [
		287,
		10
	],
	"../pages/buscarproducto/buscarproducto.module": [
		289,
		9
	],
	"../pages/cantidad/cantidad.module": [
		293,
		8
	],
	"../pages/consulta/consulta.module": [
		288,
		7
	],
	"../pages/historial/historial.module": [
		291,
		6
	],
	"../pages/iniciarventa/iniciarventa.module": [
		290,
		5
	],
	"../pages/login/login.module": [
		294,
		4
	],
	"../pages/modificarproducto/modificarproducto.module": [
		292,
		3
	],
	"../pages/nuevoproducto/nuevoproducto.module": [
		296,
		0
	],
	"../pages/preciosproducto/preciosproducto.module": [
		295,
		2
	],
	"../pages/venta/venta.module": [
		297,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_consulta_consulta__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_venta_venta__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historial_historial__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__iniciarventa_iniciarventa__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, usuario, alertCtrl) {
        this.navCtrl = navCtrl;
        this.usuario = usuario;
        this.alertCtrl = alertCtrl;
        this.consulta = __WEBPACK_IMPORTED_MODULE_2__pages_consulta_consulta__["a" /* ConsultaPage */];
        this.venta = __WEBPACK_IMPORTED_MODULE_3__pages_venta_venta__["a" /* VentaPage */];
        this.historial = __WEBPACK_IMPORTED_MODULE_4__historial_historial__["a" /* HistorialPage */];
        this.iniciarventa = __WEBPACK_IMPORTED_MODULE_6__iniciarventa_iniciarventa__["a" /* IniciarventaPage */];
        this.usuarioLogueado = usuario.usuarioLogueado;
    }
    HomePage.prototype.cerrarSesion = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Cerrar sesión',
            message: 'Desea continuar?',
            buttons: [
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Proyectos\inventariocliente\src\pages\home\home.html"*/'<!-- <ion-header>\n\n    <ion-navbar>\n      <ion-title>Inventario Heras - {{usuarioLogueado.id.nombre}}</ion-title>\n    </ion-navbar>\n  \n  </ion-header> -->\n\n  <ion-header>\n      <ion-navbar>\n          <ion-title>Inventario Heras</ion-title>\n        <ion-buttons start>\n          <button ion-button icon-left (click)="cerrarSesion()">\n            <ion-icon name="contact"></ion-icon>\n            {{usuarioLogueado.id.nombre}}\n          </button>\n        </ion-buttons>\n    \n      \n      </ion-navbar>\n    </ion-header>\n\n\n\n<ion-content >\n\n  <ion-tabs color="primary">\n    <ion-tab [root]="consulta" tabTitle="Inicio" tabIcon="ios-home"></ion-tab>\n    <ion-tab [root]="venta" tabTitle="Venta 1" tabIcon="ios-cart"></ion-tab>\n    <ion-tab [root]="venta" tabTitle="Venta 2" tabIcon="ios-cart"></ion-tab>\n\n    <div  >\n    <ion-tab [class.oculto]=" usuarioLogueado.id.rol==\'usuario\' "  [root]="historial" tabTitle="Historial" tabIcon="ios-document-outline"></ion-tab>\n    </div>\n    \n\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventariocliente\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var ServicioProvider = /** @class */ (function () {
    function ServicioProvider(http) {
        this.http = http;
        this.url = 'http://localhost:1337';
    }
    ServicioProvider.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    ServicioProvider.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    ServicioProvider.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    ServicioProvider.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    ServicioProvider.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    ServicioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicioProvider);
    return ServicioProvider;
}());

//# sourceMappingURL=servicio.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_venta_venta__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_agregarstock_agregarstock__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modificarproducto_modificarproducto__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_servicio_servicio__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_preciosproducto_preciosproducto__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cantidad_cantidad__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_buscarproducto_buscarproducto__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_historial_historial__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_usuario_usuario__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_iniciarventa_iniciarventa__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__["a" /* ConsultaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_venta_venta__["a" /* VentaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_agregarstock_agregarstock__["a" /* AgregarstockPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modificarproducto_modificarproducto__["a" /* ModificarproductoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_preciosproducto_preciosproducto__["a" /* PreciosproductoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cantidad_cantidad__["a" /* CantidadPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_buscarproducto_buscarproducto__["a" /* BuscarproductoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_historial_historial__["a" /* HistorialPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_iniciarventa_iniciarventa__["a" /* IniciarventaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agregarstock/agregarstock.module#AgregarstockPageModule', name: 'AgregarstockPage', segment: 'agregarstock', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consulta/consulta.module#ConsultaPageModule', name: 'ConsultaPage', segment: 'consulta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buscarproducto/buscarproducto.module#BuscarproductoPageModule', name: 'BuscarproductoPage', segment: 'buscarproducto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/iniciarventa/iniciarventa.module#IniciarventaPageModule', name: 'IniciarventaPage', segment: 'iniciarventa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historial/historial.module#HistorialPageModule', name: 'HistorialPage', segment: 'historial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modificarproducto/modificarproducto.module#ModificarproductoPageModule', name: 'ModificarproductoPage', segment: 'modificarproducto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cantidad/cantidad.module#CantidadPageModule', name: 'CantidadPage', segment: 'cantidad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preciosproducto/preciosproducto.module#PreciosproductoPageModule', name: 'PreciosproductoPage', segment: 'preciosproducto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevoproducto/nuevoproducto.module#NuevoproductoPageModule', name: 'NuevoproductoPage', segment: 'nuevoproducto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/venta/venta.module#VentaPageModule', name: 'VentaPage', segment: 'venta', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__["a" /* ConsultaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_venta_venta__["a" /* VentaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_agregarstock_agregarstock__["a" /* AgregarstockPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modificarproducto_modificarproducto__["a" /* ModificarproductoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_preciosproducto_preciosproducto__["a" /* PreciosproductoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cantidad_cantidad__["a" /* CantidadPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_buscarproducto_buscarproducto__["a" /* BuscarproductoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_historial_historial__["a" /* HistorialPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_iniciarventa_iniciarventa__["a" /* IniciarventaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_servicio_servicio__["a" /* ServicioProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_usuario_usuario__["a" /* UsuarioProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Proyectos\inventariocliente\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Proyectos\inventariocliente\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuarioProvider = /** @class */ (function () {
    function UsuarioProvider(http) {
        this.http = http;
    }
    UsuarioProvider.prototype.crearUsuario = function (usuario) {
        ;
        this.usuarioLogueado = usuario;
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map