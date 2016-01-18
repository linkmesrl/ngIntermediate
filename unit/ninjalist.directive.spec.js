'use strict';

describe('The ninja-list Directive', function () {

  var element, scope, isolatedScope;
  var serverMock = [
    {
      'age': 55,
      'name': 'Daniele',
      '_id': '5693fa5af6976c704e00005a',
      '__v': 0
    },
    {
      'age': 10,
      'name': 'Mattia',
      '_id': '5693faf8f6976c704e00005e',
      '__v': 0
    },
    {
      'age': 45,
      'name': 'Gianni',
      '_id': '56976b6ef6976c704e000065',
      '__v': 0
    }
  ];

  // injecting main module
  beforeEach(module('handlingNinja'));
  beforeEach(module('templates'));

  beforeEach(inject(function($compile, $rootScope, $httpBackend) {

    $httpBackend.whenGET('http://178.62.216.211:3001/api/ninja')
    .respond(200, serverMock);
    scope = $rootScope.$new();
    element = angular.element('<ninja-list></ninja-list>');
    $compile(element)(scope);
    scope.$apply();
    $httpBackend.flush();
    isolatedScope = element.isolateScope();
  }));

  it('should have 3 ninjas in scope', function () {
    expect(isolatedScope.nl.ninjas.length).toBe(3);
  });

  it('should render 3 ninjas', function(){
    var htmlTag = element[0].getElementsByTagName('ninja-tile');
    expect(htmlTag.length).toEqual(3);
  });
});
