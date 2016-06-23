'use strict';
var controllers = angular.module('controllers', []);
var services=angular.module('services',['ngResource', 'directive']);
// Declare app level module which depends on views, and components
var app;
app = angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ngCookies',
  'controllers',
    'services',
    'ngTable',
    'dialogs.main',
    'ui.bootstrap',
    'ngSanitize',
    'dialogs.default-translations'


]).config(['$routeProvider','$httpProvider', function ($routeProvider,$httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    $httpProvider.defaults.withCredentials = true;
   

  $routeProvider

      // page d'acueil non connecté
      .when('/', {
          templateUrl: 'views/offlineHomepage.html',
          controller: 'OfflineHomepageCtrl'
      })

      // redirections depuis l'accueil en mode non connecté

      // page de connexion
      .when('/connexion', {
          templateUrl: 'views/offlineHomepage.html',
          controller: 'ConnexionCtrl'
      })
      // page d'inscription
      .when('/subscription', {
        templateUrl: 'views/subscription.html',
        controller: 'SubscriptionCtrl'
      })

      // page Mes Participations
      .when('/myParticipations', {
        templateUrl: 'views/myParticipations.html',
      })

      // page de description (C'est quoi ?)
      .when('/description', {
        templateUrl: 'views/description.html',
        controller: 'DescriptionCtrl'
      })

      // redirections depuis l'accueil en mode connecté

      // mes evenements
      .when('/event', {
          templateUrl: 'views/event.html',
          controller: 'EventCtrl'
      })
      // gestion de mes evenements
      .when('/manageEvents', {
          templateUrl: 'views/manageEvents.html',
          controller: 'MyEventsCtrl'
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
      .when('/friends', {
          templateUrl: 'views/manageFriends.html',
          controller: 'ManageFriendsCtrl'
      })
      .when('/addFriend', {
          templateUrl: 'views/addFriend.html',
          controller: 'AddFriendCtrl'
      })
      // modifier le profil
      .when('/modifyProfil', {
          templateUrl: 'views/modifyProfil.html',
          controller: 'ModifyProfilCtrl'
      })
      .when('/viewEvent/:idEvent', {
          templateUrl: 'views/viewEvent.html',
          controller: 'ViewEventCtrl'
      })
}])
    .factory('authHttpResponseInterceptor',['$q','$location',function($q,$location){
        return {
            response: function(response){
                if (response.status === 401) {
                    console.log("Response 401");
                }
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                if (rejection.status === 401) {
                    console.log("Response Error 401",rejection);
                    $location.path('/connexion')
                }
                return $q.reject(rejection);
            }
        }
    }])
    .config(['$httpProvider','$translateProvider',function($httpProvider,$translateProvider) {
        //Http Intercpetor to check auth failures for xhr requests
        $httpProvider.interceptors.push('authHttpResponseInterceptor');
        $translateProvider.preferredLanguage('fr-FR');
        $translateProvider.useSanitizeValueStrategy('sanitize');
    }]);
