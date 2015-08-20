// Controlador principal de la pagina
var app = angular.module('myApp', ['ngGrid']);



app.controller('MyCtrl', function($scope,$http) {
 $http.get('json/infoTabla.json').success(function (data) {
  $scope.myData = data;
 });
 $scope.gridOptions = { data: 'myData' };
});
