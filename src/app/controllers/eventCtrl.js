/**
 * Created by Téo on 03/04/2016.
 */
'use strict';


controllers.controller('EventCtrl',['ManageFriendsServ','$scope','$location', function(ManageFriendsServ,$scope, $location) {


    /* Permet de choisir des amis a ajouter a l'evenement a partir de la liste
    *  Toutes les personnes ajoutées seont dans $scope.selection (c'est l'index de la liste concernant l'ami qui est ajouté) */
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