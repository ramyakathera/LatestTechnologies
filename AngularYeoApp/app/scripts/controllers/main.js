'use strict';

/**
 * @ngdoc function
 * @name angularYeoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularYeoAppApp
 */
angular.module('angularYeoAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });