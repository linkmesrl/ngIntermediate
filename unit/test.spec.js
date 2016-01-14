'use strict';

describe('The smallCart Directive', function () {

  var element, scope;

  // injecting main module
  beforeEach(module('handlingNinja'));

  // injecting and bootstrapping the directive
  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    scope.ninja = {
      _id: '5693fa5af6976c704e00005a',
      age: 31,
      name: 'Daniele',
    }
    element = $compile('<ninja-tile ninja="ninja"></ninja-tile>')(scope);
  }));

  it('should work', function() {
    expect(true).toBe(true);
  });


  it('should show at least one ninja', function () {
    // should trigger a $digest cicle to render the directive
    scope.$digest();
    expect(element.html()).toContain('Daniele');
  });

});
