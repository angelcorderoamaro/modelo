var postModel = require('../models/index');
module.exports.post = function(d){
	return new Promise(function(resolve, reject){
		postModel.post(d)
		.then(function (result) {
			resolve(result);
		});
	});
}
module.exports.get = function(){
	return new Promise(function(resolve, reject){
		postModel.get()
		.then(function (result) {
			resolve(result);

		});
	});
}
module.exports.get_modal = function(d){
	return new Promise(function(resolve, reject){
		postModel.get_modal(d)
		.then(function (result) {
			resolve(result);

		});
	});
}
module.exports.actualizar = function(d){
	return new Promise(function(resolve, reject){
		postModel.actualizar(d)
		.then(function (result) {
			resolve(result);
		});
	});
}
module.exports.eliminar = function(d){
	return new Promise(function(resolve, reject){
		postModel.eliminar(d)
		.then(function (result) {
			resolve(result);
		});
	});
}
