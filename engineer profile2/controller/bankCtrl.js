/**
 * Bank controller
 * @define controller
 * @param{String} EngCtrl- parameter refers to the controller used by HTML element
 * @param{function} selfinvoked dependecies are added in it
 * @description:Displaying the Bank details of the employee
 */

angular.module('mainApp').controller('BankCtrl', function ($scope, $rootScope, $filter, $q, $http, $timeout, $stateParams, DataService) {
  var key = localStorage.getItem("satellizer_token");
  console.log("key:", key);
  var query = {
    engineerId: $stateParams.portfolioId
  };
  //get Bank details of the employee
  $scope.getBankData = function () {
    console.log("calling bankdata");
    DataService.getRecord('readEmployeeBankData', query)
      .then(function (data) {
        $rootScope.empdetails = data.data.employeeData;
        $rootScope.empdetails.engineerId = $stateParams.portfolioId;
        $scope.user = data.data.bankData;
        $scope.user.engineerId = $stateParams.portfolioId;
        console.log("data.data.bankData:::", data.data.bankData);
      }).catch(function (error) {
        console.log(error);
      });
  };
  //update the Bank details of the employee
  $scope.saveTable = function () {
    DataService.updateRecord('updateEmployeeBankData', $scope.user);
    console.log("tableform.onaftersave");
    console.log("bankData:::" + $scope.user);
  };
});