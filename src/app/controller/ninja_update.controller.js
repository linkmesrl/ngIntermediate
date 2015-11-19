'use strict';

angular.module('handlingNinja')
.controller('ninjaUpdateCtrl', function($scope, $location, $route, Ninja) {
  console.log('ninjaUpdateCtrl');
  Ninja.get({_id: $route.current.params.id}).$promise
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
