/**
 * Created by Téo on 11/04/2016.
 */
'use strict';

controllers.controller('ProfilCtrl',['$scope', '$location','ProfilServ', function($scope, $location,ProfilServ) {
    //var userPseudo = "Teobrisse";


    ProfilServ.getProfil(/*userPseudo,*/
        function success(response) {
            //alert($scope.challenge.question);
            //console.log("Success:" + JSON.stringify(response));

            console.log(response.name);
            /*$scope.nom du champ dans la vue = response.data.name;*/
        },
        function error(errorResponse) {
            console.log("Error:" + JSON.stringify(errorResponse));
            $location.path('/');
        }
    );
}])