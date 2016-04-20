'use strict';

controllers.controller('SubscriptionCtrl', ['$scope', '$location', 'SubscriptionServ',
    function SubscriptionCtrl($scope, $location, SubscriptionServ) {

        $scope.return = function() {
            $location.path('/');
        };
        
        $scope.submit = function () {

            var user = {
                name: $scope.name,
                firstName: $scope.firstName,
                password: $scope.password,
                mail: $scope.mail,
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
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    
                }
            );
            
        };
    }]);