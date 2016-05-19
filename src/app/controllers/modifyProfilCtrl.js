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

    $scope.submit = function () {

        if ($scope.password == null) {
            var userModification = {
                id: $scope.id,
                name: $scope.name,
                firstName: $scope.firstName,
                avatar: ""
            };
        }
        else {
            var userModification = {
                id: $scope.id,
                name: $scope.name,
                firstName: $scope.firstName,
                avatar: "",
                password : $scope.password
            };
        }

        var pseudo = $scope.pseudo;
        var password = $scope.password;

        ModifyProfilServ.modifyProfil(userModification,
        function success(response) {
            //alert($scope.challenge.question);
            console.log("Success:" + JSON.stringify(response));
            if ($scope.password != null) {
                delete $http.defaults.headers.common['Authorization'];
                $http.defaults.headers.common['Authorization'] = "Basic " + btoa(pseudo + ":" + $scope.password);
            }
            $location.path('/profil');
        },
        function error(errorResponse) {
            console.log(errorResponse);

            if(errorResponse.status==401){
                alert("Session interrompue")
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

}])