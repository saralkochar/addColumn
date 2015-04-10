angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
var app = angular.module('ui.bootstrap.demo',['ngTable']).
  controller('DemoCtrl',  function($scope, $filter, ngTableParams) {
    var data = [{name: "Moroni", age: 50, gender: "male"},
        {name: "Tiancum", age: 43},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Enos", age: 34},
        {name: "Tiancum", age: 43},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Enos", age: 34},
        {name: "Tiancum", age: 43},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Enos", age: 34},
        {name: "Tiancum", age: 43},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Enos", age: 34}];
    $scope.columns = [
        { title: 'Item/Code', field: 'name', visible: true, filter: { 'name': 'text' } },
        { title: 'Material/Type', field: 'name', visible: true },
        { title: 'Construction', field: 'age', visible: true },
        { title: 'Weight', field: 'age', visible: true },
        { title: 'Placement', field: 'name', visible: true },
        { title: 'Units', field: 'age', visible: true },
        { title: 'Consumption', field: 'age', visible: true }  
    ];
    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        filter: {
            name: 'M'       // initial filter
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
    $scope.isCollapsed = false;
  });

