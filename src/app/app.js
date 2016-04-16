'use strict';
var controllers = angular.module('controllers', []);
var services=angular.module('services',['ngResource']);
// Declare app level module which depends on views, and components
var app;
app = angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'controllers',
    'services'
]).config(['$routeProvider', function ($routeProvider) {
  $routeProvider

      // page d'acueil non connecté
      .when('/', {
          templateUrl: 'views/offlineHomepage.html',
          controller: 'OfflineHomepageCtrl'
      })

      // redirections depuis l'accueil en mode non connecté

      // page de connexion
      .when('/connexion', {
          templateUrl: 'views/connexion.html',
          controller: 'ConnexionCtrl'
      })
      // page d'inscription
      .when('/subscription', {
        templateUrl: 'views/subscription.html',
        controller: 'SubscriptionCtrl'
      })

      // page d'accueil connecté
      .when('/homepage', {
          templateUrl: 'views/homepage.html',
          controller: 'HomepageCtrl'
      })

      // redirections depuis l'accueil en mode connecté

      // mes evenements
      .when('/events', {
          templateUrl: 'views/events.html',
          controller: 'EventsCtrl'
      })
      // gestion de mes evenements
      .when('/manageEvents', {
          templateUrl: 'views/manageEvents.html',
          controller: 'ManageEventsCtrl'
      })
      // mes participations
      .when('/participations', {
          templateUrl: 'views/participations.html',
          controller: 'ParticipationsCtrl'
      })
      // mon profil
      .when('/profil', {
          templateUrl: 'views/profil.html',
          controller: 'ProfilCtrl'
      })
}]);
