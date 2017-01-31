/**
 * Login controller
 * @define controller
 * @param{String} LoginCtrl- parameter refers to the controller used by HTML element
 * @param{function} selfinvoked dependecies are added in it
 * 
 */

angular.module('mainApp').controller('LoginCtrl', function ($scope, $state, $auth) {
  //client side validation
  $scope.email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  $scope.pass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  var config = { method: 'POST', url: 'http://192.168.0.62:3000/login' };
  //when user clicks on login the he will go to DashBoard page
  $scope.login = function () {
    $scope.dataLoading = true;
    $auth.login($scope.user, config)
      .then(function (data) {
        console.log("You have successfully signed in!")
        $state.go('home.DashBoard');
      })
      .catch(function (error) {
        $scope.dataLoading = false;
        console.log(error.data.message, error.status);
        $scope.error = "Incorrect email/password !";
      });
  };
});
