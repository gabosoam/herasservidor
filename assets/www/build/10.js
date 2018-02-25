webpackJsonp([10],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_printer__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListMasterPage = (function () {
    function ListMasterPage(navCtrl, formBuilder, items, modalCtrl, alertCtrl, printer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.printer = printer;
        this.factura = { id: 0 };
        this.currentItems = this.items.query();
        this.form = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.refrescar();
        //this.print()
    }
    ListMasterPage.prototype.refrescar = function () {
        var _this = this;
        var data = [];
        this.detalles = data;
        this.items.crearFactura().subscribe(function (res) {
            _this.factura = _this.items.factura;
            _this.items.obtenerDetalles(_this.factura.id).subscribe(function (res) {
                _this.detalles = res;
                _this.calcularTotal();
            });
            var fecha = new Date(_this.factura.createdAt);
            _this.fecha = fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
            console.log(_this.fecha);
        });
    };
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
    };
    ListMasterPage.prototype.iniciar = function () {
        //this.printer.isAvailable().then(this.onSuccess, this.onError);
        console.log(this.printer.isAvailable());
        // let options: PrintOptions = {
        //      name: 'MyDocument',
        //      duplex: true,
        //      landscape: true,
        //      grayscale: true
        //    };
        // this.printer.print('<h1>hello world</h1>', options).then(this.onSuccess, this.onError);
    };
    ListMasterPage.prototype.borrarDetalle = function (detalle) {
        var _this = this;
        this.items.borrarProductoDetalle(detalle).subscribe(function (data) {
            _this.obtenerDetalles();
        });
    };
    ListMasterPage.prototype.onSuccess = function () {
        // console.log('bien');
    };
    ListMasterPage.prototype.openOther = function () {
        //I called Api using service
        var scope = this;
        setTimeout(function () { scope.print(); }, 1000);
    };
    ListMasterPage.prototype.calcular = function () {
        this.vuelto = (this.recibido - this.total).toFixed(2);
    };
    ListMasterPage.prototype.print = function () {
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
    ListMasterPage.prototype.onError = function () {
        // console.log('mal');
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    ListMasterPage.prototype.crearFactura = function (factura) {
        this.factura = factura;
    };
    ListMasterPage.prototype.cambiarCliente = function () {
        //console.log(this.cliente)
        this.items.modificarCliente(this.cliente, this.factura.id);
    };
    ListMasterPage.prototype.obtenerDetalles = function () {
        var _this = this;
        this.items.obtenerDetalles(this.factura.id).subscribe(function (res) {
            _this.detalles = res;
            _this.calcularTotal();
        });
    };
    ListMasterPage.prototype.calcularTotal = function () {
        var detalle = this.detalles;
        var aux = 0.00;
        for (var index = 0; index < detalle.length; index++) {
            aux += parseFloat(detalle[index].rawtotal);
        }
        this.total = 0.00;
        this.total = aux.toFixed(2);
    };
    ListMasterPage.prototype.saludar = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.items.buscarProductoCodigo(this.form.value.name).subscribe(function (resultado) {
            if (resultado.length > 0) {
                //  let addModal = this.modalCtrl.create('ItemCreatePage');
                var addModal = _this.modalCtrl.create('CantidadPage', { producto: { id: resultado[0].id } });
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
                            var confirm_1 = _this.alertCtrl.create({
                                title: 'Atención!',
                                message: 'Tienes menos stock del solicitado. Deseas continuar?',
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
                                            _this.items.generarIngreso(detalle).subscribe(function (res) {
                                                _this.obtenerDetalles();
                                            });
                                        }
                                    }
                                ]
                            });
                            confirm_1.present();
                        }
                        else {
                            _this.items.generarIngreso(detalle).subscribe(function (res) {
                                _this.obtenerDetalles();
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
    /**
     * Delete an item from the list of items.
     */
    ListMasterPage.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    ListMasterPage.prototype.comprobante = function () {
        if (this.total == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Alerta!',
                subTitle: JSON.stringify('No se puede imprimir un comprobante sin detalle '),
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.print();
            this.refrescar();
            // this.navCtrl.push(Tab1Root);
            // this.navCtrl.remove
        }
    };
    ListMasterPage.prototype.sincomprobante = function () {
        if (this.total == 0) {
            var alert_2 = this.alertCtrl.create({
                title: 'Alerta!',
                subTitle: JSON.stringify('No se puede imprimir un comprobante sin detalle '),
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            this.refrescar();
        }
    };
    ListMasterPage.prototype.cancelar = function () { };
    ListMasterPage.prototype.updateList = function (ev) {
        console.log(ev.target.value);
    };
    ListMasterPage.prototype.buscar = function () {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create('BuscarproductoPage');
        addModal.onDidDismiss(function (producto) {
            if (producto) {
                var addModal_1 = _this.modalCtrl.create('CantidadPage', { producto: { id: producto.id } });
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
                        _this.items.generarIngreso(detalle).subscribe(function (res) {
                            _this.obtenerDetalles();
                        });
                    }
                });
                addModal_1.present();
            }
        });
        addModal.present();
    };
    ListMasterPage.prototype.cobrar = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Imprimir comprobante?',
            buttons: [
                {
                    text: 'Imprimir comprobante',
                    handler: function () {
                        _this.comprobante();
                    }
                },
                {
                    text: 'Sin comprobante',
                    handler: function () {
                        _this.sincomprobante();
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
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"C:\Proyectos\HERAS\inventarioclient\src\pages\list-master\list-master.html"*/'\n\n\n\n<ion-content>\n\n\n\n    <div class="w3-container w3-blue">\n\n        <h2>Comprobante # {{factura.id}}</h2>\n\n      </div>\n\n      \n\n    \n\n\n\n  <ion-grid>\n\n\n\n   \n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n\n\n        <ion-grid>\n\n\n\n\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-12>\n\n                <ion-grid>\n\n\n\n\n\n                  <ion-row>\n\n\n\n\n\n                    <ion-col col-12>\n\n                      <table style="width: 100%; padding: 10px; border-radius: 25px" border="1">\n\n\n\n                        <tr>\n\n\n\n\n\n                          <td colspan="6" style="padding: 5px; text-align: center">\n\n                            <h1>Total: ${{total}}</h1>\n\n\n\n                          </td>\n\n\n\n                          <td colspan="1" style="padding: 5px; text-align: center">\n\n                            <button ion-button icon-only round (click)="comprobante()">\n\n                              <ion-icon name="ios-print-outline"></ion-icon>\n\n\n\n                            </button>\n\n\n\n                            <button ion-button icon-only round color="secondary" (click)="sincomprobante()">\n\n                              <ion-icon name="ios-remove-circle-outline"></ion-icon>\n\n\n\n                            </button>\n\n                          </td>\n\n\n\n                        </tr>\n\n                        <tr>\n\n                          <td colspan="2">\n\n                            <ion-item>\n\n\n\n                              <ion-select [(ngModel)]="cliente" (ionChange)="cambiarCliente()">\n\n                                <ion-option selected value="1">Venta</ion-option>\n\n                                <ion-option value="2">Consumo interno</ion-option>\n\n                              </ion-select>\n\n                            </ion-item>\n\n                          </td>\n\n                          <td colspan="4">\n\n                            <ion-grid>\n\n                              <ion-row>\n\n                                <ion-col col-12>\n\n                                  <form id="container2" *ngIf="form" [formGroup]="form" (ngSubmit)="saludar()">\n\n                                    <input class="w3-input w3-border w3-round w3-xlarge" formControlName="name" placeholder="Ingresar código de barras" type="text">\n\n\n\n                                    \n\n                                  </form>\n\n                                  \n\n                                </ion-col>\n\n                                <ion-col col-1>\n\n                                  <button ion-button icon-left  (click)="buscar()">\n\n                                    <ion-icon name="md-search"></ion-icon>\n\n                                    Buscar producto\n\n                                  </button>\n\n\n\n                                </ion-col>\n\n                              </ion-row>\n\n                            </ion-grid>\n\n\n\n                          </td>\n\n                          <td class="w3-padding" colspan="1" style="max-width: 3cm">\n\n\n\n                              <label class="w3-text-blue">\n\n                                  <b>Dinero recibido</b>\n\n                                </label>\n\n                                <input class="w3-input w3-border w3-round w3-xlarge" placeholder="Dinero recibido" type="number" [(ngModel)]="recibido" (change)="calcular()">\n\n                          \n\n                                <label class="w3-text-blue">\n\n                                    <b>Vuelto</b>\n\n                                  </label>\n\n                                  <input class="w3-input w3-border w3-round w3-xlarge" placeholder="Vuelto" type="number" value="0.00" [(ngModel)]="vuelto">\n\n                            \n\n                           \n\n\n\n\n\n\n\n                          </td>\n\n                        </tr>\n\n                     \n\n\n\n\n\n                      </table>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n              </ion-col>\n\n\n\n\n\n\n\n\n\n\n\n            </ion-row>\n\n\n\n\n\n          </ion-grid>\n\n        </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n\n\n      </ion-col>\n\n\n\n\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n  <table class="w3-table w3-striped w3-bordered  w3-round w3-large">\n\n  <tr class="w3-dark-gray">\n\n      <th >Cantidad</th>\n\n      <th >Código</th>\n\n      <th >Producto</th>\n\n      <th >Unidad</th>\n\n      <th >Unitario</th>\n\n      <th >Total</th>\n\n      <th >Acciones</th>\n\n      <th class="w3-blue">Stock</th>\n\n    </tr>\n\n    <tr *ngFor="let detalle of detalles">\n\n      <td >{{detalle.cantidad}}</td>\n\n      <td >{{detalle.codigo}}</td>\n\n      <td >{{detalle.producto}}</td>\n\n      <td >{{detalle.unidad}}</td>\n\n      <td >${{detalle.unitario}}</td>\n\n      <td >${{detalle.total}}</td>\n\n      <td >\n\n\n\n        <button ion-button small icon-only color="danger" (click)="borrarDetalle(detalle.id)" round>\n\n          <ion-icon name="md-trash"></ion-icon>\n\n        </button>\n\n      </td>\n\n\n\n      <td  >{{detalle.stock}}</td>\n\n    </tr>\n\n  </table>\n\n\n\n\n\n\n\n\n\n  <!-- align to the bottom of the page -->\n\n  <!-- <div style="position: absolute; bottom: 0px; width: 100%">\n\n          <div style="text-align: center">\n\n            <p>Bottom</p>\n\n          </div>\n\n      </div> -->\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n<div style="visibility: hidden" id="boleta" style=" border: 1; font-size: 8; border-color: black">\n\n\n\n\n\n  <h1>COMERCIAL HERAS</h1>\n\n  <h2>Ventas al por mayor y menor</h2>\n\n  <h2>\n\n    <strong>Comprebante:</strong> # {{factura.id}}</h2>\n\n  <h2>Fecha: {{fecha}}</h2>\n\n\n\n\n\n  <hr>\n\n\n\n\n\n\n\n\n\n  <table style="width: 100%">\n\n    <tr>\n\n      <th style="text-align: center; padding: 2px">\n\n        <h1>Cant.</h1>\n\n      </th>\n\n      <th style="text-align: center; padding: 2px">\n\n        <h1>Producto</h1>\n\n      </th>\n\n      <th style="text-align: center; padding: 2px">\n\n        <h1>Unit.</h1>\n\n      </th>\n\n      <th style="text-align: center; padding: 2px">\n\n        <h1>Total</h1>\n\n      </th>\n\n\n\n    </tr>\n\n\n\n    <tr *ngFor="let detalle of detalles">\n\n      <td style="text-align: center; padding: 2px">\n\n        <h2>{{detalle.cantidad}}</h2>\n\n      </td>\n\n      <td style="text-align: left; padding: 2px;">\n\n        <h2>{{detalle.producto}}</h2>\n\n      </td>\n\n      <td style="text-align: center; padding: 2px">\n\n        <h2>${{detalle.unitario}}</h2>\n\n      </td>\n\n      <td style="text-align: center; padding: 2px">\n\n        <h2>${{detalle.total}}</h2>\n\n      </td>\n\n\n\n\n\n    </tr>\n\n\n\n\n\n  </table>\n\n  <hr>\n\n\n\n\n\n  <div style="text-align: right">\n\n    <h1>TOTAL: ${{total}}</h1>\n\n  </div>\n\n  <hr>\n\n  <h2 style="text-align: center">***ES UN PLACER SERVIRLE***</h2>\n\n  <h4 style="text-align: center">Este comprobante no tiene validez tributaria</h4>\n\n\n\n\n\n\n\n</div>\n\n\n\n\n\n<script>\n\n\n\n  function saludar() {\n\n    alert(saludar);\n\n  }\n\n  function PrintElem(elem) {\n\n    var mywindow = window.open(\'\', \'PRINT\', \'height=400,width=600\');\n\n\n\n    mywindow.document.write(\'<html><head><title>\' + document.title + \'</title>\');\n\n    mywindow.document.write(\'</head><body >\');\n\n    mywindow.document.write(\'<h1>\' + document.title + \'</h1>\');\n\n    mywindow.document.write(document.getElementById(elem).innerHTML);\n\n    mywindow.document.write(\'</body></html>\');\n\n\n\n    mywindow.document.close(); // necessary for IE >= 10\n\n    mywindow.focus(); // necessary for IE >= 10*/\n\n\n\n    mywindow.print();\n\n    mywindow.close();\n\n\n\n    return true;\n\n  }\n\n\n\n</script>'/*ion-inline-end:"C:\Proyectos\HERAS\inventarioclient\src\pages\list-master\list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_printer__["a" /* Printer */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=10.js.map