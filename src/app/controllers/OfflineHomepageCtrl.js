'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('OfflineHomepageCtrl', ['$scope', '$location',
    function OfflineHomepageCtrl($scope, $location) {
        $scope.submit = function () {
            var user = {
                userNameOrMail: $scope.userNameOrMail,
                password: $scope.password
            };


        };
    }]);