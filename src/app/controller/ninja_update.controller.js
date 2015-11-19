'use strict';

angular.module('handlingNinja')
.controller('ninjaUpdateCtrl', function($scope, $location) {
  console.log('ninjaUpdateCtrl');
  $scope.updateNinja = function(){
      $scope.ninja.$save().then(function(res){
          $scope.detail = null;
          $scope.loadNinja();
      });
  };
});
