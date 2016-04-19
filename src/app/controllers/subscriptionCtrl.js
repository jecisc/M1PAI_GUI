'use strict';

var myApp = angular.module('myApp');

myApp.controller('SubscriptionCtrl', ['$scope', '$location', 'SubscriptionServ',
    function SubscriptionCtrl($scope, $location, SubscriptionServ) {
        $scope.submit = function () {

            var user = {
                name: $scope.name,
                firstName: $scope.firstName,
                password: $scope.password,
                mail: $scope.email,
                registDate: 1458155215879,
                pseudo: $scope.pseudo,
                avatar: " ",
                active: false
            };

            SubscriptionServ.save(user,
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    $location.path('/');
                },
                function error() {
                    $scope.errorMessage = "Error côté serveur.";
                }
            );
            
        };
    }]);