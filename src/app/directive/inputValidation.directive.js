(function() {
  'use strict';

  function dir() {
    return {
      restrict: 'A',
      scope: {},
      link: linkFn,
      require: ['^form', 'ngModel']
    };
  }
  function linkFn(scope, el, attr, req) {
    console.log(req);
    scope.form = req[0];
    scope.field = req[1];

    scope.$watch('form.$submitted', function(newValue){
      if(newValue && scope.field.$invalid){
        console.log('YP');
        el.addClass('error');
        el.after('<p class="message-error">' + attr.errorMsg + '</p>');
      }
    });

    scope.$watch('field.$invalid', function(newValue){
      if(!newValue){
        el.removeClass('error');
        el.next('.message-error').remove();
      } else if(newValue && scope.form.$submitted){
        el.addClass('error');
        el.after('<p class="message-error">' + attr.errorMsg + '</p>');
      }
    });
    // scope.$watch('field.$error.maxlength', function(newValue){
    //   if(!newValue){
    //     el.removeClass('error');
    //     el.next('.message-error').remove();
    //   } else if(newValue && scope.form.$submitted){
    //     el.addClass('error');
    //     el.after('<p class="message-error">' + attr.errorMsgMaxLength + '</p>');
    //   }
    // });

  }
  

  /**
   * @ngdoc directive
   * @name lmValidation.directive:formValidation
   * @restrict A
   * @description
   * Directive to display custom messages
   * @attribute form-validation, message-error
   **/

  angular.module('lmValidation', [])
    .directive('formValidation', dir);
})();
