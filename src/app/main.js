'use strict';

angular.module('handlingNinja', ['ngRoute', 'ngResource', 'lmValidation'])


.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/views/ninja.html',
        controller: 'ninjaCtrl'
      }).
      when('/ninja/:id', {
        templateUrl: 'app/views/update_ninja.html',
        controller: 'ninjaUpdateCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
