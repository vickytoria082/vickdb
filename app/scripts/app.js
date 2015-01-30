'use strict';

/**
 * @ngdoc overview
 * @name vickdbApp
 * @description
 * # vickdbApp
 *
 * Main module of the application.
 */
angular
  .module('vickdbApp', [
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
      .otherwise({
        redirectTo: '/'
      });
  });
