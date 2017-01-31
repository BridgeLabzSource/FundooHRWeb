/**
 * HR controller
 * @define controller
 * @param{String} EngCtrl- parameter refers to the controller used by HTML element
 * @param{function} selfinvoked dependecies are added in it
 * @description: Displaying the HR details of the employee
 * 
 */
angular.module('mainApp').controller('HrDataCtrl', function ($scope, $rootScope, $filter, $q, $http, $timeout, $stateParams, DataService) {
  var itemsPendingSave = [];
  var key = localStorage.getItem("satellizer_token");
  var query = {
    engineerId: $stateParams.portfolioId
  }
  //get the HR details of the employee
  $scope.getHrData = function () {
    DataService.getRecord('readEmployeeHRData', query)
      .then(function (data) {
        $rootScope.empdetails = data.data.employeeData;
        $rootScope.empdetails.engineerId = $stateParams.portfolioId;
        $scope.user = data.data.hrData;
        $scope.user.engineerId = $stateParams.portfolioId;
        $scope.user.token = key;
      }).catch(function (error) {
        console.log(error);
      });
  };
  //update the HR details of the employee
  $scope.saveTable = function () {
    DataService.updateRecord('updateEmployeeHRData', $scope.user);
    console.log("tableform.onaftersave");
    console.log("hrData:::" + $scope.user);
  };
});