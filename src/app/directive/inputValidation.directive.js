(function() {
  'use strict';

  function dir() {
    return {
      restrict: 'E',
      scope: {},
      controller: ctrlFn,
      controllerAs: 'lmform',
      link: linkFn,
      templateUrl: '',
    };
  }

  function ctrlFn() {
    var vm = this;
    console.log(vm);
  }
  function linkFn(scope, el, attr) {
    console.log(scope, el, attr);
  }
  dir.$inject = [];

  /**
   * @ngdoc directive
   * @name lmValidation.directive:formValidation
   * @restrict E
   * @description
   * Directive to display custom messages
   * @element <form-validation>
   **/

  angular.module('lmValidation', [])
    .directive('formValidation', dir);
})();
