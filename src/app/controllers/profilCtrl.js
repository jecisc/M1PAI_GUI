/**
 * Created by Téo on 11/04/2016.
 */
'use strict';

controllers.controller('ProfilCtrl',['$scope', '$location','ProfilServ', function($scope, $location,ProfilServ) {



    ProfilServ.getProfil(
        function success(response) {
            $scope.pseudo = response.pseudo;
            $scope.mail = response.mail;
            $scope.name  = response.name;
            $scope.firstName = response.firstName;
        },
        function error(errorResponse) {
            console.log("Error:" + JSON.stringify(errorResponse));
            $location.path('/');
        }
    );
}])