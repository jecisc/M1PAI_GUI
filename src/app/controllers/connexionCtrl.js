'use strict';

controllers.controller('ConnexionCtrl', ['$rootScope','$scope', '$location', 'ConnexionServ','$cookies','$http',
    function ConnexionCtrl($rootScope,$scope, $location, ConnexionServ,$cookies,$http) {

        $scope.return = function() {
            $location.path('/');
        };

        $scope.submit = function () {


            var userNameOrMail= $scope.userNameOrMail;
            var password= $scope.password;

            ConnexionServ.authenticate(userNameOrMail,password).login({username:userNameOrMail})
                .$promise
                .then(
                function success(response) {

                    console.log("Success:" + JSON.stringify(response));
                    $cookies.put("username",userNameOrMail);
                    $http.defaults.headers.common['Authorization']="Basic " + btoa(userNameOrMail + ":" + password);
                    $location.path('/homepage');
                    $rootScope.user=response;
                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    $scope.errorMessage = "Identification invalide."
                }
            );


        };



    }]);