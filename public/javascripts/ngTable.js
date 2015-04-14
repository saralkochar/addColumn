// app = angular.module('app', ['ui.bootstrap.demo']);

var app = angular.module('app',['ngTable', 'ui.bootstrap'])

app.controller('DemoCtrl',  function($scope, $filter, ngTableParams) {
    var data = [{name: "Moroni", age: 50, role: 'Administrator'},
                {name: "Tiancum", age: 43, role: 'Administrator'},
                {name: "Jacob", age: 27, role: 'Administrator'},
                {name: "Nephi", age: 29, role: 'Moderator'},
                {name: "Enos", age: 34, role: 'User'},
                {name: "Tiancum", age: 43, role: 'User'},
                {name: "Jacob", age: 27, role: 'User'},
                {name: "Nephi", age: 29, role: 'Moderator'},
                {name: "Enos", age: 34, role: 'User'},
                {name: "Tiancum", age: 43, role: 'Moderator'},
                {name: "Jacob", age: 27, role: 'User'},
                {name: "Nephi", age: 29, role: 'User'},
                {name: "Enos", age: 34, role: 'Moderator'},
                {name: "Tiancum", age: 43, role: 'User'},
                {name: "Jacob", age: 27, role: 'User'},
                {name: "Nephi", age: 29, role: 'User'},
                {name: "Enos", age: 34, role: 'User'}];
    $scope.columns = [
        { title: 'Item/Code', field: 'name', visible: true, filter: { 'name': 'text' } },
        { title: 'Material/Type', field: 'name', visible: false },
        { title: 'Construction', field: 'age', visible: false },
        { title: 'Weight', field: 'age', visible: false },
        { title: 'Placement', field: 'name', visible: true },
        { title: 'Units', field: 'age', visible: false },
        { title: 'Consumption', field: 'age', visible: false },
        { title: 'Blue-black', field: 'age', visible: true },
        { title: 'Green-yellow', field: 'age', visible: true }
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
});

app.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isCollapsed = true;
});

