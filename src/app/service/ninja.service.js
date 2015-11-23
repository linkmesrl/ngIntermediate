angular.module('handlingNinja')
.service('Ninja', function($resource){
  var Ninja = $resource('http://192.168.6.27:3001/api/ninja/:_id', {
    _id: '@_id'
  }, {
    count: {method: 'GET', isArray: true, params: {count: true}}
  });
  return Ninja;
});
