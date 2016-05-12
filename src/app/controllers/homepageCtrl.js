/**
 * Created by Téo on 03/04/2016.
 */
'use strict';


controllers.controller('HomepageCtrl',['$scope','$location','ConnexionServ', function($scope, $location,ConnexionServ) {

    $scope.myEvents = function() {
        $location.path('/events');
    };

    $scope.manageEvent = function() {
        $location.path('/manageEvents');
    };

    $scope.myProfil = function() {
        $location.path('/profil');
    };

    $scope.logout=function(){
        ConnexionServ.logout();
    };

}]);