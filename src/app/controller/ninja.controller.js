'use strict';

angular.module('handlingNinja')
.controller('ninjaCtrl', function($scope, Ninja, _) {

  $scope.ninjas = [];

  $scope.loadNinja = function(){
      $scope.ninjas = Ninja.query();
  };

  $scope.newNinja = {name: null, age: null};

  $scope.createNinja = function(){
      var ninja = new Ninja($scope.newNinja);

      ninja.$save().then(function(res){
          $scope.newNinja = {name: null, age: null};
          $scope.ninjas.push(new Ninja(res));
      });
  };

  $scope.getNinja = function(_id){
      Ninja.get({_id: _id}).$promise
      .then(function(ninja){
          $scope.ninja = ninja;
          $scope.detail = true;
      });
  };

  $scope.deleteNinja = function(ninja){
      ninja.$remove().then(function(res){
          _.remove($scope.ninjas, {_id: ninja._id});
      });
  };

  // $scope.loadNinja();
});
