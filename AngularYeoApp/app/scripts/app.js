'use strict';

/**
 * @ngdoc overview
 * @name angularYeoAppApp
 * @description
 * # angularYeoAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularYeoAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/routee',{
        templateUrl:'views/route.html',
        controller:'Routeectrl'
      }).when('/step',{
        templateUrl:'views/step.html',
        controller:'StepCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
