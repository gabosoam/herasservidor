/**
 * Precio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id : { type: 'integer', primaryKey:true, autoIncrement: true },
    producto : {model: 'producto' },
    unidad : { model: 'unidad' },
    precio : { type: 'float' },
    tamano : { type: 'float' }
  }
};

