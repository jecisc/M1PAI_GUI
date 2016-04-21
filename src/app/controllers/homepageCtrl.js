/**
 * Created by Téo on 03/04/2016.
 */
'use strict';


controllers.controller('HomepageCtrl', function($scope, $location) {

    $scope.myEvents = function() {
        $location.path('/events');
    };

    $scope.manageEvent = function() {
        $location.path('/manageEvents');
    };

    $scope.myParticipations = function() {
        $location.path('/participations');
    };

    $scope.myProfil = function() {
        $location.path('/profil');
    };

})