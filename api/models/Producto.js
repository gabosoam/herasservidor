/**
 * Producto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'integer', primaryKey: true, autoIncrement: true },
    codigo: { type: 'string', unique: true },
    nombre: { type: 'string' },
    unidad: { model: 'unidad' },
    precio: { type: 'float', defaultsTo: 0 },
    estado: { type: 'string' },
    categoria: { model: 'categoria' },
    stock: { type: 'float', defaultsTo: 0 },
    minimo: { type: 'float', defaultsTo: 0 },
    marca: { model: 'marca' },
    detalles: { collection: 'detalle', via: 'factura' },
    precios: { collection: 'precio', via: 'producto' }
  },

  beforeCreate(valores, callback) {
    valores.nombre = valores.nombre.toUpperCase().trim();
    callback();
  },

  beforeUpdate(valores, callback) {


    Precio.find({
      producto: valores.id,
      unidad: valores.unidad
    }).exec(function (err, precio) {

      if (precio[0]) {
        Precio.query("UPDATE `precio` SET `precio`='"+valores.precio+"' WHERE (`id`='"+precio[0].id+"')", function(error, resultado) {
          if (error) {
            console.log(resultado);
          } else {
            console.log(resultado)
          }
        })
      } else {
       
      }
      
    });

    if (valores.nombre) {
      valores.nombre = valores.nombre.toUpperCase().trim();
      callback();
    } else {
      callback();
    }

  },

  afterCreate: function (values, cb) {

    Precio.create({
      producto: values.id,
      unidad: values.unidad,
      precio: values.precio,
      tamano: 1
    }).exec(function (err, records) {
      cb();
    });


  },
};

