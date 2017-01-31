/**
 * Profile controller
 * @define controller
 * @param{String} EngCtrl- parameter refers to the controller used by HTML element
 * @param{function} selfinvoked dependecies are added in it
 * @description: Displaying the Personal details of the employee
 * 
 */
angular.module('mainApp').controller('ProfileDetailsCtrl', function ($scope, $rootScope, $filter, $q, $http, $timeout, $stateParams, DataService) {

  var key = localStorage.getItem("satellizer_token");
  var query = {
    engineerId: $stateParams.portfolioId
  }
  //get the Profile details of the employee
  $scope.getProfileData = function () {
    DataService.getRecord('readEmployeeProfileData', query)
      .then(function (data) {
        $rootScope.empdetails = data.data.employeeData;
        $rootScope.empdetails.engineerId = $stateParams.portfolioId;
        $scope.user = data.data.profileData;
        $scope.user.engineerId = $stateParams.portfolioId;
        $scope.user.token = key;
      }).catch(function (error) {
        console.log(error);
      });
  };
  //update the Profile details of the employee
  $scope.saveTable = function () {
    DataService.updateRecord('updateEmployeeProfileData', $scope.user);
    console.log("tableform.onaftersave");
    console.log("profileData:::" + $scope.user);
  };
});