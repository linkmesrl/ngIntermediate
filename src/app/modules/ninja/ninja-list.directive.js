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
  function ctrl($scope, Ninja, _) {
    var vm = this;
    var loadNinja = function(){
      vm.ninjas = Ninja.query();
    };
    loadNinja();
    vm.deleteNinja = function(ninja){
      ninja.$remove()
      .then(function(){
        _.remove(vm.ninjas, {_id: ninja._id});
        loadNinja();
      });
    };
    $scope.$on('createNinja', loadNinja);
  }
  angular.module('ninjaModule')
    .directive('ninjaList', dir);
})();
