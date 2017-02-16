/**
 * restService - REST call with base URL
 */
 angular.module('mainApp').service('restService', function($http, $log, $q) {
    var baseUrl = "http://192.168.0.16:3000/";
    //    function for GET
    this.getRequest = function(path, query,config) {
      var deferred = $q.defer();

      /**
       * @promise Get user from database.
       * @resolve {object} user information
       * @reject {Error} validation error, connection error
       */
        $http({
                method: "GET",
                url: baseUrl + path,
                headers:config,
                params: query

            }).then(function(data) {
                //sending data...
                deferred.resolve(data);
            }),
            function(msg, code) {
                deferred.reject(msg);
                // preserve default behaviour
                $log.error(msg, code);
            };
        return deferred.promise;
    };//end of function

    //  function for POST
    this.postRequest = function(path, query,config) {
      var deferred = $q.defer();

        $http({
                method: "POST",
                url: baseUrl + path,
                headers:config,
                data: query
            }).then(function(data) {
                deferred.resolve(data);
            }),
            function(msg, code) {
                deferred.reject(msg);
                // preserve default behaviour
                $log.error(msg, code);
            };
        return deferred.promise;
    };//end of function
});
