/**
 * Global controller
 * @description:change the body color of the page when navigating from login page
 */
angular.module('mainApp').controller('GlobalCtrl', function($scope) {
    $scope.$on('$stateChangeStart', function(event, toState, toParams) {
        $scope.bodyClass = toState.name+'-page';
    });
});