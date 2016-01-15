'use strict';

describe('Ninja form input test', function () {

  var element, scope, isolatedScope, tile;

  
  // injecting main module
  beforeEach(module('handlingNinja'));
  beforeEach(module('templates'));

  beforeEach(inject(function($compile, $rootScope, $httpBackend) {

    scope = $rootScope.$new();


  }));

  it('should require form', inject(function ($compile) {

    expect(function(){
       tile = angular.element(
       		'<input class="form-control" type="number"\
               name="age"\
               ng-model="nh.newNinja.age"\
               placeholder="Age"\
               required\
               ng-maxlength="2"\
               form-validation\
               error-msg="Ninja age is required"\
               error-msg-max-length="Ninja age is 2 characters maximum">'
       );
       $compile(tile)(scope);

       scope.$digest();
     }).toThrow();
  }));

  it('should Throw an error', inject(function ($compile) {

  	// isolatedScope = tile.isolateScope();
  	// isolatedScope.nh.newNinja.age = 'sad';
    tile = angular.element(
          '<form>\
          <input class="form-control" type="number"\
            name="age"\
            placeholder="Age"\
            required\
            ng-maxlength="2"\
            form-validation\
            error-msg="Ninja age is required"\
            error-msg-max-length="Ninja age is 2 characters maximum">\
            </form>'
    );

    expect(function(){

       $compile(tile)(scope);

       scope.$digest();
     }).toThrow();
  }));

  it('should not Throw an error', inject(function ($compile) {

    // isolatedScope = tile.isolateScope();
    // isolatedScope.nh.newNinja.age = 'sad';
    tile = angular.element(
          '<form>\
          <input class="form-control" type="number"\
            name="age"\
            ng-model="nh.newNinja.age"\
            placeholder="Age"\
            required\
            ng-maxlength="2"\
            form-validation\
            error-msg="Ninja age is required"\
            error-msg-max-length="Ninja age is 2 characters maximum">\
            </form>'
    );

    expect(function(){
        
       $compile(tile)(scope);

       scope.$digest();
     }).not.toThrow();
  }));

});
