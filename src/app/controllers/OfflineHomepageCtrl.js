'use strict';


controllers.controller('OfflineHomepageCtrl', function ($scope, $location) {

    $scope.login = function () {
        $location.path('/connexion');
    };

    $scope.subscription = function () {
        $location.path('/subscription');
    };

    $scope.description = function () {
        $location.path('/description');
    };

    //TODO mettre ça dans la partie ONLINE
    $scope.myParticipations = function () {
        $location.path('/myParticipations');
    };
});