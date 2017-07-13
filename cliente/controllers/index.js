var angular = require('angular');
var notify=require('notifyjs');
var $ = require('jquery');
require('../services/index')

  angular.module('MyApp')
  .controller('indexCtrl', ['$scope', 'servicioindex', function ($scope, servicioindex) {

    $scope.initindex = function(){
      $scope.get();
      $scope.ocultar_borrado=[];
    }
  $scope.post = function (d) {
    var f = {letras :d }
    $scope.f = f;
    servicioindex.post(f)
    .success(function(result){
      var i = result.result;
      $scope.repeat_get.push(i);
    });
  }
  $scope.get = function (){
    servicioindex.get()
      .success(function(result){
        $scope.repeat_get = result.result;
      })
  }
  $scope.get_modal = function (item){
          $scope.datos_modal = item;
          console.log("$scope.datos_modal",$scope.datos_modal);
    }
    $scope.actualizar = function (datos_modal){
      servicioindex.actualizar(datos_modal)
      .success(function(result){
        $scope.dato_actualizado = result.result;
        console.log("$scope.repeat_get",$scope.repeat_get);

      })
  }
 $scope.eliminar = function (index){
   var obj = $scope.repeat_get[index]
  // $scope.ocultar_borrado[index] = true;
   console.log("obj",index);
   servicioindex.eliminar(obj)
  .success(function(result){
   $scope.dato_eliminado = result.result;
  $scope.repeat_get.splice(index,1)

   console.log("result eliminado",result);
 })
 }

}]);
