(function (){

  function dir() {
    return {
      scope: {
        ninja: '='
      },
      controller: ctrl,
      controllerAs: 'nt',
      templateUrl: 'app/modules/ninja-tile/ninja-tile.html',
      bindToController: true
    };
  }
  function ctrl($scope) {
    var vm = this;
    vm.deleteNinja = function(ninja){
      ninja.$remove()
      .then(function(){
        $scope.$emit('ninjaListChanged')
      });
    };
  }
  angular.module('ninjaModule')
    .directive('ninjaTile', dir);
})();
