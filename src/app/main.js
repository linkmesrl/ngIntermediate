'use strict';

angular.module('handlingNinja', ['ngRoute'])


.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/views/ninja.html',
        controller: 'ninjaCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
