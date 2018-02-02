/**
 * ProductoController
 *
 * @description :: Server-side logic for managing productoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    modificarStock(req, res){

        console.log('hola');
        var id = req.query.id;
        var stock = req.query.stock;
        Producto.query('UPDATE producto SET producto.stock=producto.stock+? WHERE producto.id=?',[stock,id ], function(err, rawResult) {
          if (err) {
            console.log(err)
          } else {
    
            console.log(rawResult)
    
    
            return res.json(rawResult);
          }
          
        });
      },
	
};

