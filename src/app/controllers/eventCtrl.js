/**
 * Created by Téo on 03/04/2016.
 */
'use strict';


controllers.controller('EventCtrl',['ManageFriendsServ','$scope','$location', function(ManageFriendsServ,$scope, $location) {

    $scope.tabIndex=[];
    $scope.addRessourceToTable = function(id) {


        if( $scope.tabIndex[id] != null){

        }
        else {
            $scope.tabIndex.push(id);
            var table = angular.element( document.querySelector( '#requireRessourcesTable' ) );
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = this.outerHTML;
            cell2.innerHTML = "<input type='number' value='1' min='0'>";
            cell3.innerHTML = '<button ng-click="addQty()" class="addButton" type="button"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>'
                + '<button type="button" class="subButton"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button>'
                + '<button type="button" class="removeButton" ><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>';
           // $('#modalAddRessource').modal('toggle');

           // $compile(table)(scope);
        }
    };
    /*
    $(".ressources-img img").on("click", function(){
        var id = $(this).attr("id");
        if( $("#requireRessourcesTable").find($("#" + id)).length){

        } else {
            var table = document.getElementById("requireRessourcesTable");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = this.outerHTML;
            cell2.innerHTML = "<input type='number' value='1' min='0'>";
            cell3.innerHTML = '<button ng-click="addQty()" class="addButton" type="button"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>'
                + '<button type="button" class="subButton"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button>'
                + '<button type="button" class="removeButton" ><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>';
            $('#modalAddRessource').modal('toggle');

            $compile(cell3)(scope);
        }
    });
*/
    
    
    /* Permet de choisir des amis a ajouter a l'evenement a partir de la liste
    *  Toutes les personnes ajoutées seront dans $scope.selection (c'est l'index de la liste concernant l'ami qui est ajouté) */
    $scope.selection = [];
    $scope.friendsEvent = [];
    $scope.toggle = function (idx) {
        var pos = $scope.selection.indexOf(idx);
        if (pos == -1) {
           // $scope.selection.push($scope.friends[idx]);
            $scope.selection.push(idx);
        } else {
            $scope.selection.splice(pos, 1);
        }
    };

    /* Permet de recuperer les ressources que l'utilisateur a choisi */
    $scope.ressources = [];


    $scope.submit = function () {
        for (var i = 0 ; i < $scope.selection.length ; i++) {
            $scope.friendsEvent.push($scope.friends[$scope.selection[i]]);
        }


        var event = {
            nomEvent: $scope.nomEvent,
            placeEvent: $scope.placeEvent,
            dateEvent: $scope.dateEvent,
            descriptionEvent: $scope.descriptionEvent,
            bedEvent: $scope.bedEvent,
            placeDispoEvent: $scope.placeDispoEvent,
            friendsEvent : $scope.friendsEvent
        };
        console.log(event);

    }


    /* Permet de recuperer la liste des ressources de la base */
    ManageFriendsServ.resourcesManager().getResources()
        .$promise
        .then(
            function success(data) {
                $scope.resources={};
                $scope.resources=data;
            },
            function error(errorResponse) {

            }
        );

    /* Permet de recuperer la liste d'amis associée à la personne qui crée l'evenement */
    ManageFriendsServ.friendsManager().getFriends()
        .$promise
        .then(
            function success(data) {
                $scope.friends={};
                $scope.friends=data;
                getFriendsRequest();

            },
            function error(errorResponse) {

            }
        );
    
    function getFriendsRequest(){
        ManageFriendsServ.getFriendRequests().get()
            .$promise
            .then(
                function success(data) {
                    $scope.friendsRequest=data;

                },
                function error(errorResponse) {

                })
    };

    


}]);