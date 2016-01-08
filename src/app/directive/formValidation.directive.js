(function () {
  'use strict';
  function dir() {
    return {
      restrict: 'A',
      scope: {},
      link: linkFn,
      require: ['^form', 'ngModel']
    };
  }
  function linkFn(scope, el, attr, required) {
    console.log(required);
    scope.form = required[0];
    scope.model = required[1];

    scope.$watch('form.$submitted', function(newValue, oldValue) {
      console.log(newValue, oldValue);
      if(newValue && scope.model.$invalid) {
        el.addClass('error');
        el.after('<p>' + attr.errorMsg + '</p>');
      }
    });
  }
  angular.module('directives', [])
    .directive('formValidation', dir);
})();
