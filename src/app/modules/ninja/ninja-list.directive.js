(function (){

  function dir() {
    return {
      scope: {},
      controller: ctrl,
      controllerAs: 'nl',
      templateUrl: 'app/modules/ninja/ninja-list.html',
      bindToController: true
    };
  }
  function ctrl($scope, Ninja) {
    var vm = this;
    var loadNinja = function(){
      vm.ninjas = Ninja.query();
    };
    loadNinja();
    $scope.$on('ninjaListChanged', loadNinja);
  }
  angular.module('ninjaModule')
    .directive('ninjaList', dir);
})();
