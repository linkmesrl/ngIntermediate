(function () {
  angular.module('ninjaModule', [])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<ninja-list></ninja-list>'
        }).
        when('/ninja/:id', {
          template: '<ninja-handle></ninja-handle>'
        }).
        otherwise({
          redirectTo: '/'
        });
    }]);
})();
