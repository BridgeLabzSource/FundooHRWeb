/**
 * Engineer controller
 * @define controller
 * @param{String} EngCtrl- parameter refers to the controller used by HTML element
 * @param{function} selfinvoked dependecies are added in it
 * @description: Displaying the list of employees
 * 
 */
angular.module('mainApp').controller('EngCtrl', function ($scope, $location, $stateParams, $state, $auth, DataService) {
  var key = localStorage.getItem("satellizer_token");
  $scope.empArr = {};
  //get the list of employees
  DataService.getRecord('searchEmployeeByName', key)
    .then(function (response) {
      $scope.empArr = response.data.employeeList;
      //console.log(response.data.employeeList);
      console.log($scope.empArr);
      
    }, function (error) {
      console.error(error);
    });
});