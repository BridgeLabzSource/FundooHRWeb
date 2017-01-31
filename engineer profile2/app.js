/**
 * @fileName:fundooHr
 * @author:Naveen P.V
 * @define:module
 * @param{String} ngApp-parameter refers to the HTML elements in which app will run
 * @param{Array} injector-loding modules through injector
 */

var mainApp = angular.module("mainApp", ['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'satellizer', 'toastr', 'xeditable']);
/**
 *  configure existing services 
 *  self invoking function
 * */
mainApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) {
    /**
     * skip login if already signed in
     * @method
     * @param{Array} injector - loading modules through injector
     * @param{service} $q- for promise
     * @params{service} $auth - satellizer service
     */
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
        * login required if not signed in
        * @method
        * @param{Array} injector - loading modules through injector
        * @param{service} $q- for promise
        * @param{service} $auth - satellizer service
        * @param{service} $location-
        */
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
       * @default Login
       */
    $urlRouterProvider.otherwise('/dash');
    /** @define states */
    $stateProvider
        /** Login state */
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn //skips the login
            }
        })
        /** Logout state */
        .state('logout', {
            url: '/logout',
            template: null,
            controller: 'LogoutCtrl'
        })
        /** Home state */
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl',
            resolve: {
                loginRequired: loginRequired // loginRequired function will check for token.
            }
        })
        /** DashBoard state */
        .state('home.DashBoard', {
            url: 'dash',
            templateUrl: 'templates/dash.html',
            controller: 'DashCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        /** Engineers state */
        .state('home.Engineers', {
            url: 'engineers',
            templateUrl: 'templates/engineers.html',
            controller: 'EngCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        /** Engineers Summary state */
        .state('home.Profile', {
            url: 'engineers/summary/:portfolioId',

            templateUrl: 'templates/profile.html',
            controller: 'ProfileCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        /** Engineers Attendence state */
        .state('home.Profile.Attendence', {
            url: '/attendence',
            templateUrl: 'templates/attendence.html',
            controller: 'AttendenceCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        /**Engineers Personal state */
        .state('home.Profile.Personal', {
            url: '/personal',
            templateUrl: 'templates/personal.html',
            controller: 'PersonalCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        /**Engineers Profile state */
        .state('home.Profile.ProfileDetails', {
            url: '/profile',
            templateUrl: 'templates/profileDetails.html',
            controller: 'ProfileDetailsCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        /**Engineers HR state */
        .state('home.Profile.HrData', {
            url: '/hrData',
            templateUrl: 'templates/hrData.html',
            controller: 'HrDataCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        /**Engineers Bank state */
        .state('home.Profile.Bank', {
            url: '/bank',
            templateUrl: 'templates/bank.html',
            controller: 'BankCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        /**Engineers TrackingSheet state */
        .state('home.Profile.TrackingSheet', {
            url: '/trackingSheet',
            templateUrl: 'templates/trackingSheet.html',
            controller: 'TrackingSheetCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        });



});



