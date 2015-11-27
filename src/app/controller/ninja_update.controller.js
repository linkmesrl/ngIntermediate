'use strict';

angular.module('handlingNinja')
.controller('ninjaUpdateCtrl', function($scope, $location, $routeParams, Ninja) {

  Ninja.get({_id: $routeParams.id}).$promise
  .then(function(ninja){
    $scope.ninja = ninja;
  });

  $scope.updateNinja = function(form) {
    if(!form.$valid) {
      return;
    }
    $scope.ninja.$save()
    .then(function() {
      $scope.updateForm.$setPristine();
      $location.url('/');
    });
  };
});
