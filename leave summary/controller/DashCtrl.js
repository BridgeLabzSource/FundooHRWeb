/**
 *Dashboard controller
 */
angular.module('mainApp').controller('DashCtrl', function($scope, $location, $stateParams, $state, $auth, localStorageService, restService) {
    //client side  key
    localStorageService.set('sample', "data");
    console.log(localStorageService.get('sample'));

    var token = localStorage.getItem('satellizer_token');
    console.log(token);
    $scope.today = new Date();
    var query = {
        timeStamp: Date.now()
    };
    var config={
      "x-token":token
    };
    /**
     *REST call to display leaves on card
     */
    restService.getRequest('readDashboardData', query,config).then(function(data) {
        console.log(data.data);
        $scope.leave = data.data.leaveSummary.leave;

    });
});
