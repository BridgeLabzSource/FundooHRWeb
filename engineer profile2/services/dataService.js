
 angular.module("mainApp")
    .factory("DataService", function ($http,$q,$log) {
        var baseURL = "http://192.168.0.62:3000/";
        var key = localStorage.getItem("satellizer_token");

          return {
               getRecord: function(path,query) {
                   var deferred=$q.defer();
                   $http({
                       method:"GET",
                       url:baseURL+path,
                       headers:{
                           'x-token':key
                       },
                       params:query
                   }).then(function(data){
                          deferred.resolve(data);
                   }),function(msg,code){
                       deferred.reject(msg);
                       $log.error(msg,code);
                   
                   };
                   return deferred.promise;
                },

          

                updateRecord: function(path,data) {
                   var deferred=$q.defer();
                   $http({
                       method:"PUT",
                       url:baseURL+path,
                         headers:{
                           'x-token':key
                       },
                       data
                   }).then(function(data){
                          deferred.resolve(data);
                   },function(msg,code){
                       deferred.reject(msg);
                       $log.error(msg,code);
                   
                   });
                   return deferred.promise;
                }

              
            };
    });