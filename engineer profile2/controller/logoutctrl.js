/**
 * Logout controller
 */

angular.module('mainApp')
  .controller('LogoutCtrl', function ($location, $auth, $state, toastr) {
    //when user clicks on logout then he will go to login page
    $auth.logout()
      .then(function () {
        console.log("logout")
        toastr.info('You have been logged out');
        $state.go('login');
      }).catch(function (error) {
        console.log(error.data.message, error.status);
      });
  });
