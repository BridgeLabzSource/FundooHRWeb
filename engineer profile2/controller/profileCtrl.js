/**
 * Profile controller
 * @description:get the details of the employee with respective to EngineerId
*/
angular.module('mainApp').controller('ProfileCtrl',
  ['$state', function ($state) {
    $state.go('home.Profile.Personal');
  }]);
