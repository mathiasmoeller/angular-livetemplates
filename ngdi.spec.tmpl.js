describe('Directive: $suiteName$', function() {

  beforeEach(module('$module$'));

  var element;
  var $scope;

  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();
    element = angular.element('$template$');
    element = $compile(element)($scope);
    $scope.$digest();
  }));

  it('should compile the template', function() {
    expect(element).toBeDefined();
    $END$
  });
});

