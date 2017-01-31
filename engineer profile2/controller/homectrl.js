/**
 * Home controller
 * @description:Dynamically displaying the Date and UserName in the navbar head
 */
angular.module('mainApp').controller('HomeCtrl', function ($scope, $location, $stateParams, $state, $auth) {
  $scope.isAuth = function () {
    return $auth.isAuthenticated();
  };
  $scope.today = new Date();
  $scope.name = "Naveen P.V";
 
});
