/**
 * Personal controller
 * @define controller
 * @param{String} EngCtrl- parameter refers to the controller used by HTML element
 * @param{function} selfinvoked dependecies are added in it
 * @description: Displaying the Personal details of the employee
 * 
 */
angular.module('mainApp').controller('PersonalCtrl', function ($scope, $rootScope, $filter, $q, $http, $timeout, $stateParams, DataService) {
  var key = localStorage.getItem("satellizer_token");
  console.log("key:", key);
  var query = {
    // token:key,
    engineerId: $stateParams.portfolioId
  }
  //get the Personal details of the employee
  $scope.getPersonalData = function () {
    console.log('url called')
    DataService.getRecord('readEmployeePersonalData', query)
      .then(function (data) {
        $rootScope.empdetails = data.data.employeeData;
        $rootScope.empdetails.engineerId = $stateParams.portfolioId;
        $scope.user = data.data.personalData;
        $scope.user.engineerId = $stateParams.portfolioId;
        $scope.user.token = key;
        // console.log("data.data.personalData:::",data.data.personalData);
      }).catch(function (error) {
        console.log(error);
      });
  };
  //update the Personal details of the employee
  $scope.saveTable = function () {
    DataService.updateRecord('updateEmployeePersonalData', $scope.user);
    console.log("tableform.onaftersave");
    console.log("personalData:::" + $scope.user);
  };
});