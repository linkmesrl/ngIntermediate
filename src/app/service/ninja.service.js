angular.module('handlingNinja')
.factory('Ninja', function($resource){
  var Ninjaaa = $resource('http://192.168.6.27:3001/api/ninja/:_id', {
    _id: '@_id'
  }, {
    count: {method: 'GET', url: 'http://192.168.6.27:3001/api/ninja/count'}
  });
  return Ninjaaa;
});
