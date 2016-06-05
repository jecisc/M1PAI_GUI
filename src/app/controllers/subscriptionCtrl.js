'use strict';

controllers.controller('SubscriptionCtrl', ['$scope', '$location', 'SubscriptionServ', '$http',

    function SubscriptionCtrl($scope, $location, SubscriptionServ, $http) {

        $scope.return = function() {
            $location.path('/');
        };
        
        $scope.submit = function () {

            SubscriptionServ.save({
                    name: $scope.name,
                    firstName: $scope.firstName,
                    password: $scope.password,
                    mail: $scope.email,
                    registDate: Date.now(),
                    pseudo: $scope.pseudo,
                    avatar:''
                },
                function success(response) {
                    $scope.infoMessage = response.message;
                    $scope.errorMessage = null;
                    $location.path('/');
                },
                function error(response) {
                    $scope.errorMessage = response.data.message;
                    $scope.infoMessage = null;
                }
            );
            
        };
    }]);