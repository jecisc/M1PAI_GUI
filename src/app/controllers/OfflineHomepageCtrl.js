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

});