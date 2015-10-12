'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.viewClimateSearch',
  'myApp.viewConfig',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/viewClimateSearch'});
}]);
