/**
 * Created by Téo on 03/04/2016.
 */
'use strict';


controllers.controller('EventCtrl',['ManageFriendsServ','$scope','$location', '$compile', function(ManageFriendsServ,$scope,$compile, $location) {

    $scope.ressources = [];
    /* items est ce qu'on renverra lors de l'envoie du formulaire */
    $scope.items = [];

    $scope.clickOnCategory = function (idx) {
        $scope.resources=$scope.categories[idx].resources;
    };

    /* Cette fonction permet d'ajouter les ressources choisies pa l'utilisateur depuis la modal dans le tableau des ressources */
    $scope.addRessourceToTable = function(id,theName) {
        //il faut verifier ici que la ressource na pas deja ete inseree dans le tableau
        if( $scope.items.indexOf($scope.items.id) != -1){
            alert("Ressource deja presente");
        }
        else {
            $scope.items.push({
                name: theName,
                id: id,
                cpt:1
            });
        }
    };

    $scope.addQty = function (item) {
       item.cpt += 1;
    };

    $scope.subQty = function (item) {
        if (item.cpt > 0)
            item.cpt -= 1;
    };

    $scope.remove = function (item) {
        var index = $scope.items.indexOf(item);
        $scope.items.splice(index, 1);
    };




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



    $scope.submit = function () {
        for (var i = 0 ; i < $scope.selection.length ; i++) {
            $scope.friendsEvent.push($scope.friends[$scope.selection[i]]);
        }


        var event = {
            name : $scope.nomEvent,
            localisation: $scope.placeEvent,
            dateBeginning: $scope.dateEvent,
            description: $scope.descriptionEvent,
           /* bedEvent: $scope.bedEvent,
            placeDispoEvent: $scope.placeDispoEvent,*/
            participants : $scope.friendsEvent,
            neededs : $scope.items
        };
    console.log(event);
    }


    /* Permet de recuperer la liste des ressources de la base */
    ManageFriendsServ.resourcesManager().getResources()
        .$promise
        .then(
            function success(data) {
                $scope.categories={};
                $scope.categories=data;
                console.log( $scope.categories);
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
                console.log($scope.friends);

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