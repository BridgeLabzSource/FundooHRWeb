/**
 * FileName:app.js
 * CreatedBy: Shilpa K N
 * purpose : perform routing according to state,display and send message who has taken leaves
 */

/**
 * @define module
 * @param {string} ngApp - parameter refers to the HTML element in which app will run
 * @param {Array} injector - loading modules through injector
 * */
var mainApp = angular.module("mainApp", ['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'satellizer', 'toastr', 'LocalStorageModule']);
/** configure existing services */
mainApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) {
    /**
     * @promise Get user from database.
     * @resolve {object} user information
     * @reject {Error} validation error, connection error
     */
    var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
        var deferred = $q.defer(); //deferred returns promise object
        if ($auth.isAuthenticated()) {
            deferred.reject();
        } else {
            deferred.resolve();
        }
        return deferred.promise;
    }]; //end of function

    var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.resolve();
        } else {
            $location.path('/login');
        }
        return deferred.promise;
    }]; //end of function
    /**
     * @default home
     */
    $urlRouterProvider.otherwise('/dash');
    /** @define states */
    $stateProvider
    /* configure the login state*/
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        })
        /* configure the logout state*/
        .state('logout', {
            url: '/logout',
            template: null,
            controller: 'LogoutCtrl'
        })
        /* configure the navbar state*/
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl',
            resolve: {
                loginRequired: loginRequired // loginRequired function will check for token.
            }
        })
        /* configure the Dashboard state*/
        .state('home.DashBoard', {
            url: 'dash',
            templateUrl: 'templates/cards.html',
            controller: 'DashCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        /* configure the leave Summary state*/
        .state('home.Attendence', {
            url: 'Attnd',
            templateUrl: 'templates/employee.html',
            controller: 'employeeCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })

});
