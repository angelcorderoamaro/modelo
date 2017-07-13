var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var reg = new Schema({
  letras: String,
});

var Regis = mongoose.model('letra', reg);
module.exports.post = function(d){//modelo
    return new Promise(function (resolve, reject){
        var tabla = new Regis(d);
        tabla.save(function(err, tabla){
            if (err){
                resolve({err: true, description: err});
                process.exit(1);
            }else{
                resolve({err: false , result: tabla});
            }
        });

    });
}
module.exports.get = function(){//modelo
    return new Promise(function (resolve, reject){
        Regis.find({},function(err, Regis){
            if (err){
                resolve({err: true, description: err});
                process.exit(1);
            }else{
                resolve({err: false , result: Regis});
            }
        });

    });
}
module.exports.get_modal = function(d){//modelo
    return new Promise(function (resolve, reject){
        Regis.find(d,function(err, Regis){
            if (err){
                resolve({err: true, description: err});
                process.exit(1);
            }else{
                resolve({err: false , result: Regis});
            }
        });

    });
}
module.exports.actualizar = function(d){//modelo
    return new Promise(function (resolve, reject){
      console.log("ACTUALIZAR",d);
        Regis.update(d,function(err, Regis){
            if (err){
                resolve({err: true, description: err});
                process.exit(1);
            }else{
                resolve({err: false , result: Regis});
            }
        });

    });
}

module.exports.eliminar = function(d){//modelo
    return new Promise(function (resolve, reject){
      console.log("eliminar",d);
        Regis.remove(d,function(err, Regis){
            if (err){
                resolve({err: true, description: err});
                process.exit(1);
            }else{
                resolve({err: false , result: Regis});
            }
        });

    });
}
