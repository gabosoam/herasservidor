/**
 * Detalle.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id : { type: 'integer', primaryKey:true, autoIncrement: true },

    factura : { model: 'factura' },

    cantidad : { type: 'float' },

    producto : { model: 'producto' },

    precio : { type: 'float' },
    
    unidad: {type: 'string'},

    reducir:{type: 'float'}
  },

  afterCreate: function (values, cb) {
   

    Producto.query('UPDATE producto SET producto.stock=producto.stock-? WHERE producto.id=?',[values.reducir, values.producto] , function(err, rawResult) {
      if (err) {
        cb();
      } else {
        cb();
      }
      
    });
  },

  afterDestroy: function (values, cb) {
  
  console.log(values)

    Producto.query('UPDATE producto SET producto.stock=producto.stock+? WHERE producto.id=?',[values[0].reducir, values[0].producto] , function(err, rawResult) {
      if (err) {
        console.log(err)
        cb();
      } else {
        console.log(rawResult)
        cb();
      }
      
    });
  }
};

