/**
  *@file app.js
 * @author Bhavana.B.K.
 * @define module
 * @param {string} mainApp - parameter refers to the HTML element in which app will run
 * @param {Array} injector - loading modules through injector
 * */
var mainApp = angular.module("mainApp", ['ui.router', 'ngMaterial','LocalStorageModule','satellizer','toastr']);

/** configure existing services
*self invoking functions
*/
mainApp.config( function ($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) {

  /**
   *@method  skipIfLoggedIn -Skips login if already signed in
   *@param {Array} injector - loading modules through injector
   *@param {service} $q -for promise
   *@param {service} $auth- satellizer service
   **/
    var skipIfLoggedIn = ['$q', '$auth', function ($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.reject();
        } else {
            deferred.resolve();
        }
        return deferred.promise;
    }];

    /**
     *@method loginRequired-Login required if not signed in
     *@param {Array} injector - loading modules through injector
     *@param {service} $q -for promise
     *@param {service} $auth - satellizer service
     *@param {service} $location -url path
     **/
    var loginRequired = ['$q', '$location', '$auth', function ($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.resolve();
        } else {
            $location.path('/login');
        }
        return deferred.promise;
    }];
    /**
     * @default dashBoard
     */
    $urlRouterProvider.otherwise('/dash');

    /** @define states */
    $stateProvider
     /** Login state */
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn //skips login
            }
        })
    /** Logout state */
        .state('logout', {
            url: '/logout',
            template: null,
            controller: 'logoutCtrl'
        })
   /** Home state */
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl',
            resolve: {
              loginRequired: loginRequired //loginRequired function will chek for token
              }
        })
    /** homes nested states */
   /**dasBoard~state */
        .state('home.dashBoard',{
            url:'dash',
            templateUrl: 'templates/dash.html',
            controller: 'dashCtrl',
            resolve: {
                      loginRequired: loginRequired
                    }
        })
  /**engineers~state */
        .state('home.engineers',{
            url:'engineers',
            templateUrl: 'templates/engineers.html',
            controller: 'engCtrl',
            resolve: {
                      loginRequired: loginRequired
                    }
        })


});//end of config
