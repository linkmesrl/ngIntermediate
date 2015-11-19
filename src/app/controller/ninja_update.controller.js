'use strict';

angular.module('handlingNinja')
.controller('ninjaUpdateCtrl', function($scope, $location, $routeParams, Ninja) {
  console.log('ninjaUpdateCtrl', $routeParams);
  Ninja.get({_id: $routeParams.id}).$promise
  .then(function(ninja){
    $scope.ninja = ninja;
  });

  $scope.updateNinja = function(){
    $scope.ninja.$save()
    .then(function() {
      $location.url('/');
    });
  };
});
