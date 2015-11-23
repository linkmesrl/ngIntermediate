angular.module('handlingNinja')
.service('Ninja', function($resource){
  var Ninja = $resource('/api/ninja/:_id', {
    _id: '@_id'
  }, {
    count: {method: 'GET', isArray: true, params: {count: true}}
  });
  return Ninja;
});
