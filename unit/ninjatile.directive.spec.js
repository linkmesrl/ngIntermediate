'use strict';

describe('The ninja-tile Directive', function () {

  var element;
  var scope;

  // injecting main module
  beforeEach(module('handlingNinja'));
  beforeEach(module('templates'));

  beforeEach(function() {
    var ninja = {
      'age': 55,
      'name': 'Daniele',
      '_id': '5693fa5af6976c704e00005a',
      '__v': 0
    };
    inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.ninja = ninja;
      element = $compile(angular.element('<ninja-tile ninja="ninja"></ninja-tile>'))(scope);
      scope.$apply();
    });
  });
  it('Ninja on isolated scope should be two-way bound', function(){
    var isolatedScope = element.isolateScope();
    isolatedScope.nt.ninja.age = 25;
    expect(scope.ninja.age).toEqual(25);
    scope.$apply();
    expect(parseInt(element.find('.ninja-age').text().trim())).toEqual(25);
  });
  it('It should contains Daniele', function () {
    expect(element.find('.ninja-name').text().trim()).toEqual('Daniele');
  });
  it('It should have age 55', function () {
    expect(parseInt(element.find('.ninja-age').text().trim())).toEqual(55);
  });
});
