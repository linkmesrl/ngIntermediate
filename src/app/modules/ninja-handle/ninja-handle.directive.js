(function (){

  function dir() {
    return {
      scope: {
        ninjaId: '='
      },
      controller: ctrl,
      controllerAs: 'nu',
      templateUrl: 'app/modules/ninja-handle/ninja-handle.html',
      bindToController: true
    };
  }
  function ctrl($scope, $routeParams, $location, Ninja) {
    var vm = this;
    if($routeParams.id) {
      Ninja.get({_id: $routeParams.id}).$promise
      .then(function(ninja){
        vm.newNinja = ninja;
      });

      vm.handleNinja = function(form) {
        if(!form.$valid) {
          return;
        }
        var ninja = new Ninja(vm.newNinja);
        ninja.$save()
        .then(function() {
          form.$setPristine();
          $location.url('/');
        });
      };
    } else {
      vm.handleNinja = function(form) {
        if(!form.$valid) {
          return;
        }
        var ninja = new Ninja(vm.newNinja);

        ninja.$save()
        .then(function() {
          vm.newNinja = {name: null, age: null};
          form.$setPristine();
          $scope.$emit('createNinja');
        });
      };
    }
  }
  angular.module('ninjaModule')
    .directive('ninjaHandle', dir);
})();
