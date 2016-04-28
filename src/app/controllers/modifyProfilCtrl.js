/**
 * Created by Téo on 11/04/2016.
 */
'use strict';

controllers.controller('ModifyProfilCtrl',['$scope', '$location','ProfilServ','ConnexionServ', function($scope, $location,ProfilServ) {

    $scope.return = function() {
        $location.path('/profil');
    };
    ProfilServ.getProfil(
        function success(response) {
            $scope.name  = response.name;
            $scope.firstName = response.firstName;
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

        var userModification = {
            name: $scope.name,
            firstName: $scope.firstName,
            password: $scope.password
        };

        ProfilServ.modifyProfil(userModification,
            function success(response) {
                //alert($scope.challenge.question);
                console.log("Success:" + JSON.stringify(response));
                $location.path('/profil');
            },
            function error() {
                $scope.errorMessage = "Erreur côté serveur.";

            }
        );

    };

}])