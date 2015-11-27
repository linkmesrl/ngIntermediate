

var app = angular.module('myapp', []);

app.directive('ngIntermediate', function() {
  return {
    restrict: 'AE',
    scope: {
      cheering: '@',
      name: '='
    },
    link: function(scope, el, attr) {
      scope.$watch('form.$submitted', function(newValue){
        if(newValue && scope.field.$invalid){
          el.addClass('error');
          el.after('<p class="message-error">' + attr.errorMsg + '</p>');
        }
      });
    },
    template: '<h3>{{scope.cheering}} {{scope.name}}!!</h3>'
  };
});

app.controller('ninjaCtrl', function($scope) {
  $scope.hello = 'Hello';
  $scope.name = 'Class';
});
function($scope, $element, $attrs, $transclude, otherInjectables) { ... },



myModule.directive('directiveName', function factory(injectables) {
  var directiveDefinitionObject = {
    priority: 0,
    template: '<div></div>', // or // function(tElement, tAttrs) { ... },
    // or
    // templateUrl: 'directive.html', // or // function(tElement, tAttrs) { ... },
    transclude: false,
    restrict: 'A',
    templateNamespace: 'html',
    scope: false,
    controller: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },
    controllerAs: 'stringIdentifier',
    bindToController: false,
    require: 'siblingDirectiveName',
    // or ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],2
    compile: function compile(tElement, tAttrs, transclude) {
      return {
        pre: function preLink(scope, iElement, iAttrs, controller) { ... },
        post: function postLink(scope, iElement, iAttrs, controller) { ... }
      }
      // or
      // return function postLink( ... ) { ... }
    },
    // or
    // link: {
    //  pre: function preLink(scope, iElement, iAttrs, controller) { ... },
    //  post: function postLink(scope, iElement, iAttrs, controller) { ... }
    // }
    // or
    // link: function postLink( ... ) { ... }
  };
  return directiveDefinitionObject;
});
