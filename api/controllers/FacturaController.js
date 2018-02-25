/**
 * FacturaController
 *
 * @description :: Server-side logic for managing facturas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  todas(req, res) {

    Producto.query('SELECT * from vistafacturas  ', function (err, data) {
      if (err) {

      } else {
        return res.json(data);
      }

    })
  },

  deldia(req, res) {

    Producto.query('SELECT * from vistafacturashoy  ', function (err, data) {
      if (err) {

      } else {
        return res.json(data);
      }

    })
  },

  delasemana(req, res) {

    Producto.query('SELECT * from vistafacturassemana  ', function (err, data) {
      if (err) {

      } else {
        return res.json(data);
      }

    })
  },

  delmes(req, res) {

    Producto.query('SELECT * from vistafacturasmes  ', function (err, data) {
      if (err) {

      } else {
        return res.json(data);
      }

    })
  }

};

