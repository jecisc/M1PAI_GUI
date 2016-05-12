'use strict';

controllers.controller('ConnexionCtrl', ['$rootScope','$scope', '$location', 'ConnexionServ','$cookies','$http',
    function ConnexionCtrl($rootScope,$scope, $location, ConnexionServ,$cookies,$http) {

        $scope.forgotPassword = function(){

            $http({
                url: "http://localhost:8080/user/forgotPassword",
                method: "GET",
                params: {userName : $scope.userName}
            }).success(function(data) {
                $scope.infoMessage = data.message;
                $scope.errorMessage = null;
            }).error(function(data) {
                $scope.errorMessage = data.message;
                $scope.infoMessage = null;
            });
        };

        $scope.submit = function () {
            
            var userName= $scope.userName;
            var password= $scope.password;

            ConnexionServ.authenticate(userName,password).login({username:userName})
                .$promise
                .then(
                function success(response) {

                    console.log("Success:" + JSON.stringify(response));
                    $cookies.put("username",userName);
                    $http.defaults.headers.common['Authorization']="Basic " + btoa(userName + ":" + password);
                    $location.path('/homepage');

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    $scope.infoMessage = null;
                    $scope.errorMessage = "Identification invalide."
                }
            );


        };




    }]);