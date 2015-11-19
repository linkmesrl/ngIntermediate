'use strict';

angular.module('handlingNinja', ['ngRoute'])


.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/ninja.html',
        controller: 'ninjaCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
