angular.module('mainApp').controller('homeCtrl', function ($scope, $location, $stateParams, $state, $auth) {
  $scope.isAuth = function () {
    return $auth.isAuthenticated();
  };
  $scope.today = new Date();
  $scope.name = "Bhavana";
  $scope.isActive = function(destination) {
        return destination === $location.path();
    }
  $("#navbar-toggle").click(function() {
  $(".container" ).toggleClass( "open");
});
});
