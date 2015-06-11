    // app = angular.module('app', ['ui.bootstrap.demo']);

var app = angular.module('app',['ngTable', 'ui.bootstrap'])

app.controller('DemoCtrl',  function($scope, $filter, ngTableParams) {
    var data = [{name: "First Fit", age: 50, role: 'Arm Length'},
                {name: "Second Fit", age: 43, role: 'Arm Length'},
                {name: "Plus Sizes", age: 27, role: 'Arm Length'},
                {name: "First Fit", age: 29, role: 'CF Length from HPS'},
                {name: "Second Fit", age: 34, role: 'Thread'},
                {name: "First Fit", age: 43, role: 'Chest 1" below armhole'},
                {name: "Second Fit", age: 27, role: 'Chest 1" below armhole'},
                {name: "Plus Sizes", age: 29, role: 'CF Length from HPS'},
                {name: "First Fit", age: 34, role: 'Thread'},
                {name: "First Fit", age: 43, role: 'CF Length from HPS'},
                {name: "First Fit", age: 27, role: 'Chest 1" below armhole'},
                {name: "Front Placket", age: 29, role: 'Thread'},
                {name: "Second Fit", age: 34, role: 'CF Length from HPS'},
                {name: "Second Fit", age: 43, role: 'Chest 1" below armhole'},
                {name: "Bottom Opening", age: 27, role: 'Thread'},
                {name: "Side Seam", age: 29, role: 'Thread'},
                {name: "Production sample", age: 34, role: 'Chest 1" below armhole'}];
    $scope.columns = [
        { title: 'Item/Code', field: 'name', visible: true, filter: { 'name': 'text' } },
        { title: 'Material/Type', field: 'age', visible: false },
        { title: 'Construction', field: 'age', visible: false },
        { title: 'Weight', field: 'age', visible: false },
        { title: 'Placement', field: 'age', visible: true },
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
        groupBy: 'role',
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                    $filter('orderBy')(data, $scope.tableParams.orderBy()) :
                    data;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
});

app.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isCollapsed = true;
});

app.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});