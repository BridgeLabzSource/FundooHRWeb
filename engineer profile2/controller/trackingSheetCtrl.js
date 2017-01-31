/**
 * Tracking controller
 * @define controller
 * @param{String} EngCtrl- parameter refers to the controller used by HTML element
 * @param{function} selfinvoked dependecies are added in it
 * @description: Displaying the Tracking details of the employee
 * 
 */
angular.module('mainApp').controller('TrackingSheetCtrl', function ($scope, $rootScope, $filter, $q, $http, $timeout, $stateParams, DataService) {

  var key = localStorage.getItem("satellizer_token");
  var query = {
    engineerId: $stateParams.portfolioId
  }
  //get the tracking details of the employee
  $scope.getTrackingData = function () {
    DataService.getRecord('readEmployeeTrackingData', query)
      .then(function (data) {
        $rootScope.empdetails = data.data.employeeData;
        $rootScope.empdetails.engineerId = $stateParams.portfolioId;
        $scope.user = data.data.trackingData;
        $scope.user.engineerId = $stateParams.portfolioId;
        $scope.user.token = key;
      }).catch(function (error) {
        console.log(error);
      });
  };
  //update the tracking details of the employee
  $scope.saveTable = function () {
    DataService.updateRecord('updateEmployeeTrackingData', $scope.user);
    console.log("tableform.onaftersave");
    console.log("trackingData:::" + $scope.user);
  };
});
