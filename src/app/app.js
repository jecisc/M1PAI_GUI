'use strict';

// Declare app level module which depends on views, and components
var app;
app = angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'controllers',
    'services'
]).config(['$routeProvider', function ($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'views/offlineHomepage.html',
        controller: 'OfflineHomepageCtrl'
      })
      .when('/connexion', {
          templateUrl: 'views/connexion.html',
          controller: 'ConnexionCtrl'
      })
      .when('/subscription', {
        templateUrl: 'views/subscription.html',
        controller: 'SubscriptionCtrl'
      })

}]);
