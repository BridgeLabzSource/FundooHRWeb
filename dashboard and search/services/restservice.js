/**
 * restServices rest call with baseurl
 *@define service
 *@param {string} restService - parameter refers to the service used by controller
 *@param {function} selfInvoked- dependencies are added in it
 */
angular.module('mainApp').service('restService', function ($http, $log, $q, localStorageService) {
    var baseUrl = "http://192.168.0.62:3000/";
    var token = localStorageService.get('token').token;
    //    function for GET
    this.getRequest = function (path, query) {
      /*
      * service that helps run functions asynchronously, and
      *use their return values (or exceptions) when they are done processing.
      *it resolves or rejects asynchronus function according to situation.
      */
        var deferred = $q.defer();
        // console.log(query)
        //ajax call...
        $http({
            method: "GET",
            url: baseUrl + path,
            params: query,
            headers:{ 'x-token': token }
            // "url": "employee.json"
        }).then(function (data) {
            //sending data...
            deferred.resolve(data);
        }), function (msg, code) {
            deferred.reject(msg);

            $log.error(msg, code);
        };
        return deferred.promise;
    };

});
