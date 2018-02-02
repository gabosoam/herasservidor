/**
 * DetalleController
 *
 * @description :: Server-side logic for managing detalles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    obtenerDetalle(req, res){
        var factura = req.query.factura;
        Detalle.query('SELECT * FROM vistadetalle2 WHERE factura = ?',factura , function(err, rawResult) {
          if (err) {
            console.log(err)
          } else {
            return res.json(rawResult);
          }
          
        });
      },
    
};

