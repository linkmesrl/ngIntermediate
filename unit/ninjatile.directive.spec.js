'use strict';

describe('The ninja-tile Directive', function () {

  var mockUserResource, $httpBackend, element, scope, isolatedScope, compile;
  var ninja = {
      "age": 55,
      "name": "Daniele",
      "_id": "5693fa5af6976c704e00005a",
      "__v": 0
    };
  
  // injecting main module
  beforeEach(module('handlingNinja'));
  beforeEach(module('templates'));

  beforeEach(function() {
    inject(function ($compile, $rootScope) {
       
      compile = $compile;
       
      scope = $rootScope.$new();
       
      scope.ninja = ninja;
    });
    element = getCompiledElement();
  });

   function getCompiledElement(){
     var compiledDirective = compile(angular.element('<ninja-tile ninja="ninja"></ninja-tile>'))(scope);
     scope.$digest();
     return compiledDirective;
   }

  it('Ninja on isolated scope should have age equal to 55', function () {
      expect(scope.ninja.age).toEqual(55);
  });

  it('It should contains Daniele', function () {
      expect( element.find('.ninja-name').text().trim() ).toEqual('Daniele');
  });

  it('It should have age 55', function () {
      expect( parseInt( element.find('.ninja-age').text().trim() ) ).toEqual(55);
  });

});
