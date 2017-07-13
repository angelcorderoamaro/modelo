var angular = require('angular');
  angular.module('MyApp')
.service('servicioindex', ['$http', function ($http){
	var urlBase = url_base + '/ruta';
	console.log("urlBase",urlBase);


	this.post = function (d) {
		console.log("servicioPOst",d);
	    return $http.post('http://localhost:3040/ruta/index', d);
	}


  this.get = function (){
    return $http.get('http://localhost:3040/ruta/get_datos')
  }

  this.get_modal = function (d){
    var id = d._id;
    console.log("get_modal",d._id);
    return $http.get('http://localhost:3040/ruta/get_datos_modal'+id)
  }
  this.actualizar = function (d){
    console.log("actualziar",d);
    return $http.post('http://localhost:3040/ruta/actualizar',d)
  }
  this.eliminar = function (d){
    console.log("eliminar",d);
    return $http.post('http://localhost:3040/ruta/eliminar',d)
  }
}]);
