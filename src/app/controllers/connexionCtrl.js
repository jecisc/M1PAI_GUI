'use strict';

controllers.controller('ConnexionCtrl', ['$scope', '$location', 'ConnexionServ',
    function ConnexionCtrl($scope, $location, ConnexionServ) {

        $scope.return = function() {
            $location.path('/');
        };

        $scope.submit = function () {

            var user = {
                userNameOrMail: $scope.userNameOrMail,
                password: $scope.password
            };

            ConnexionServ.get(user,
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    $location.path('/homepage');
                    
                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    $scope.errorMessage = "Erreur côté serveur."
                }
            );


        };
    }]);