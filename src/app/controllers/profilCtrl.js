/**
 * Created by Téo on 11/04/2016.
 */
'use strict';

controllers.controller('ProfilCtrl',['$scope', '$location','ProfilServ','ConnexionServ', function($scope, $location,ProfilServ) {

    $scope.return = function() {
        $location.path('/homepage');
    };

    $scope.returnProfil = function() {
        $location.path('/profil');
    };

    $scope.frienship = function() {
        $location.path('/friends');
    };

    ProfilServ.getProfil(
        function success(response) {
            $scope.pseudo = response.pseudo;
            $scope.mail = response.mail;
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
}])