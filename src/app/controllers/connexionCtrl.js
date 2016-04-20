'use strict';

controllers.controller('ConnexionCtrl', ['$rootScope','$scope', '$location', 'ConnexionServ',
    function ConnexionCtrl($rootScope,$scope, $location, ConnexionServ) {

        $scope.return = function() {
            $location.path('/');
        };

        $scope.submit = function () {


            var userNameOrMail= $scope.userNameOrMail;
            var password= $scope.password;


            //ConnexionServ.authenticate(userNameOrMail,password,
            ConnexionServ.authenticate(userNameOrMail,password).login({username:userNameOrMail})
                .$promise
                .then(
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    $rootScope.pseudo=response.pseudo;
                    $location.path('/homepage');

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    $scope.errorMessage = "Identification invalide."
                }
            );


        };



    }]);