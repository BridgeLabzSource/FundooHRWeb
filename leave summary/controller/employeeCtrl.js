/**
 * employee controller
 */
'use strict';
// Declare app level module which depends on filters, and services
angular.module('mainApp')
    .controller('employeeCtrl', employeeCtrl);

function employeeCtrl($scope, localStorageService, restService) {
    var token = localStorage.getItem('satellizer_token');
    console.log(token);
    var query = {
        timeStamp: Date.now()
    };
     var config={
       "x-token":token
     }
    /**
     * REST call to get employees who has taken leaves
     * */
    restService.getRequest('readLeaveEmployee', query,config).then(function(data) {
        console.log(data.data);
        // leaveOutEmployee data's into items
        $scope.items = data.data.leaveOutEmployee;
        //  employeeLeave data's into leave
        $scope.leave = data.data.employeeLeave;
        // totalEmployee data's into total
        $scope.total = data.data.totalEmployee;
    });

    //function performing on yes button in modal
    $scope.confirm = function() {
        var token = localStorage.getItem('satellizer_token');
        console.log(token);
        var query = {
              timeStamp: Date.now()
        };
        var config={
          'x-token':token
        }
        /**
         * REST call to post message
         * */
        restService.postRequest('sendEmailToLeaveEmployee', query,config).then(function(data) {
            console.log(data.data);
            if (data.data.status === 200) {
                $scope.message = "Sent Successfully!";
            } else {
                $scope.message = "Cannot sent";
            }

        });
    }
    $scope.cancel = function() {
            console.log("message cant sent");
        }
        //store array of data
    $scope.cardItems = [];
    //inject scope variables
    $scope.employees = function(employeeName, employeeStatus, company, mobile, emailId) {
        var objAdded = {
            employeeName: employeeName,
            employeeStatus: employeeStatus,
            company: company,
            mobile: mobile,
            emailId: emailId,
            imageUrl:imageUrl
        };
        $scope.cardItems.push(objAdded);
    };
}
