angular.module('downloadsModule', ['ngMaterial'])

.controller('downloadsCtrl', function($scope, $mdSidenav) {
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle();
  };
});