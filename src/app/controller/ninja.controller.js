'use strict';

angular.module('handlingNinja')
.controller('ninjaCtrl', function($scope, $location, Ninja, _) {

  $scope.loadNinja = function(){
    $scope.ninjas = Ninja.query();
  };

  $scope.newNinja = {name: null, age: null};

  $scope.createNinja = function(){
    var ninja = new Ninja($scope.newNinja);
    ninja.$save()
    .then(function(res){
      $scope.newNinja = {name: null, age: null};
      $scope.ninjas.push(new Ninja(res));
    });
  };

  $scope.deleteNinja = function(ninja){
    ninja.$remove()
    .then(function(){
      _.remove($scope.ninjas, {_id: ninja._id});
      $scope.loadNinja();
    });
  };

  $scope.loadNinja();
});
