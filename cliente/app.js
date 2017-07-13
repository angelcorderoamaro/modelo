var angular = require('angular');
require('angular-utils-pagination');

var notify=require('notifyjs');
var $ = require('jquery')
url_base = 'http://localhost:3040';
/*var app = angular.module("MyApp", []);
app.controller("indexCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});*/

var app= angular.module('MyApp',['angularUtils.directives.dirPagination'])
.config(['$interpolateProvider', function($interpolateProvider){
	$interpolateProvider.startSymbol('{[');
	$interpolateProvider.endSymbol(']}');
}]);
 require('./controllers/index')
