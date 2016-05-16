/**
 * Created by Téo on 11/04/2016.
 */
'use strict';

controllers.controller('ModifyProfilCtrl',['$rootScope','$scope', '$location','ModifyProfilServ','ProfilServ','$cookies','$http',
    function($rootScope,$scope, $location,ModifyProfilServ,ProfilServ,$cookies,$http) {

    $scope.return = function() {
        $location.path('/profil');
    };

    ProfilServ.getProfil(
        function success(response) {
            $scope.id = response.id;
            $scope.name  = response.name;
            $scope.firstName = response.firstName;
            $scope.pseudo = response.pseudo;
        },
        function error(errorResponse) {
            if(errorResponse.status==401){
                alert("Session interrompue")
                console.log("Utilisateur non authentifié.");
            }

            console.log("Error:" + JSON.stringify(errorResponse));
            $location.path('/');
        }
    );

    $scope.submitInfos = function () {

        var userModification = {
                id: $scope.id,
                name: $scope.name,
                firstName: $scope.firstName
            };

        ModifyProfilServ.modifyProfileInfos(userModification,
        function success(response) {
            console.log("Success:" + JSON.stringify(response));
            $location.path('/profil');
        },
        function error(errorResponse) {
            console.log(errorResponse);

            if(errorResponse.status==401){
                alert("Session interrompue");
                console.log("Utilisateur non authentifié.");
                $location.path('/');
            }
            else {
                $scope.errorMessage = "Erreur côté serveur.";
                console.log("Error:" + JSON.stringify(errorResponse));
                $location.path('/');
            }
        }
    );

    };

        $scope.submitNewPassword = function () {
            
                var userModification = {
                    id: $scope.id,
                    password : $scope.password
                };

            ModifyProfilServ.modifyProfilePassword(userModification,
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    delete $http.defaults.headers.common['Authorization'];
                    $http.defaults.headers.common['Authorization'] = "Basic " + btoa($scope.pseudo + ":" + $scope.password);
                    $location.path('/profil');
                },
                function error(errorResponse) {
                    console.log(errorResponse);

                    if(errorResponse.status==401){
                        alert("Session interrompue");
                        console.log("Utilisateur non authentifié.");
                        $location.path('/');
                    }
                    else {
                        $scope.errorMessage = "Erreur côté serveur.";
                        console.log("Error:" + JSON.stringify(errorResponse));
                        $location.path('/');
                    }
                }
            );

        };

}]);