var mongoose= require('mongoose');
var  simo= 'mongodb://localhost/base_datos'
Promise = require('bluebird');
 mongoose.Promise = require('bluebird');
 module.exports.start = function(){
   console.log("1");
 	return new Promise(function(resolve, reject){
 		var p1 = new Promise(function(resolve, reject){

 			conn =  mongoose.connect(simo, function (err){
				if(err){
					console.log("Ocurrio un error en el servidor1");
					reject();
				}else{
					console.log("conectado mongo");
					resolve();
				}
			});
		});

		Promise.settle([p1])
		.then(function(results){
			resolve();
		});
	});
};
