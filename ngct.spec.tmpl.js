describe('Controller: $controllerName$', function() {

  beforeEach(module('$module$'));

  var vm;
  var $scope;

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    vm = $controller('$controllerName$', {$scope: $scope});
    $scope.vm = vm;
  }));

  it('$specName$', function() {
    $END$
  });
});

