/**
 * Login controller
 */
angular.module('mainApp').controller('LoginCtrl', function($scope, $state, $location, $auth, toastr) {
    /**
     *RegEx format for email and password
     */
    $scope.emailFormat = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    $scope.passwordFormat = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    /**
     *POST call for login
     */
    var config = {
        method: 'POST',
        url: 'http://192.168.0.16:3000/login'
    };
    /**
     * function to login
     * */
    $scope.login = function() {
      $scope.loginloading=true;
      $scope.error="";
        $auth.login($scope.user, config) //http config object
            .then(function(data) {
                // Redirect user here after a successful log in.
                console.log("You have successfully signed in!")
                $state.go('home.DashBoard');
            })
            .catch(function(error) {
                // Handle errors here, such as displaying a notification
                console.log(error.data.message, error.status);
                $scope.error = "Incorrect email/password !";

                // toastr.error(error.data.message, error.status);
            });
    };
    //This is a function to authenticate user using social media sites like facebook,twitter,github etc
    $scope.authenticate = function(provider) {
        //check authentication status of a user
        $auth.authenticate(provider)
            .then(function() {
                console.log("You have successfully signed in!" + provider + "!");
                $state.go('home.DashBoard');
            })
            .catch(function(error) {
                if (error.message) {
                    // Satellizer promise reject error.
                    console.log(error.message);
                } else if (error.data) {
                    // HTTP response error from server
                    console.log(error.data.message, error.status);
                } else {
                    console.log(error);
                }
            });
    };

});
