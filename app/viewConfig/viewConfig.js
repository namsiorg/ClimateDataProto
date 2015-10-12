'use strict';

angular.module('myApp.viewConfig', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewConfig', {
    templateUrl: 'viewConfig/viewConfig.html',
    controller: 'ViewConfigCtrl'
  });
}])

.controller('ViewConfigCtrl', [function() {

}]);