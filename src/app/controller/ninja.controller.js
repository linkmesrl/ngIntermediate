'use strict';

angular.module('handlingNinja')
.controller('ninjaCtrl', function($scope, $location, Ninja, _) {

  $scope.loadNinja = function(){
    $scope.ninjas = Ninja.query();
  };

  Ninja.count(function(ninjaCount) {
    $scope.ninjaCount = ninjaCount;
  });

  $scope.countNinja = function() {
    Ninja.count(function(ninjaCount) {
      $scope.ninjaCount = ninjaCount;
    });
  }

  $scope.newNinja = {name: null, age: null};

  $scope.createNinja = function(form) {
    if(!form.$valid) {
      return;
    }
    var ninja = new Ninja($scope.newNinja);
    ninja.$save()
    .then(function(res){
      $scope.newNinja = {name: null, age: null};
      $scope.ninjas.push(new Ninja(res));
      $scope.createForm.$setPristine();
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
