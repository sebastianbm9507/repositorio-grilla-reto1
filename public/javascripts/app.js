// Controlador principal de la pagina
var app = angular.module('myApp', ['ngGrid']);


//app.controller('MyCtrl', function ($scope, $http) {
//
//    
//    // Informacion de la tabla
//    $scope.gridOptions = {
//        data: 'myData',
//        showFooter: true,
//        // filtro de la tabla
//        showFilter: true,
//       
//}); // fin del controlador

var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function ($scope, $http) {


    // Carga la informacion de la tabla de un archivo externo
    $http.get('json/infoTabla.json').success(function (data) {
        $scope.myData = data;
    });

    $scope.gridOptions = {
        data: 'myData',
        enablePaging: true,
        showFooter: true,
        showFilter: true,
        multiSelect: false,
        enableCellEditOnFocus: false,
        enableColumnResize: true,
        pagingOptions: {
            pageSizes: [3, 5, 90],
            pageSize: 5,
            totalServerItems: 5,
            currentPage: 1
        },
        columnDefs: [{
                field: "Team1",
                displayName: "Nombre",
        }, {
                field: "pais1",
                displayName: "Pais",
        }, {
                field: "vs",
                displayName: "Vs"
        },
            {
                field: "Team2",
                displayName: "Nombre"
        },
            {
                field: "pais",
                displayName: "Pais"
        },
            {
                field: "tiempo",
                displayName: "Tiempo"
        }]

    };
});
