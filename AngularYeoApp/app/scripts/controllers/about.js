'use strict';

/**
 * @ngdoc function
 * @name angularYeoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularYeoAppApp
 */
angular.module('angularYeoAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
