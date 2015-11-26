angular.module('handlingNinja')
.factory('Ninja', function($resource){
  var Ninjaaa = $resource('http://178.62.216.211:3001/api/ninja/:_id', {
    _id: '@_id'
  }, {
    count: {method: 'GET', url: 'http://178.62.216.211:3001/api/ninja/count'}
  });
  return Ninjaaa;
});
