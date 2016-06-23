/**
 * Created by Téo on 03/04/2016.
 */
'use strict';


controllers.controller('EventCtrl',['ManageFriendsServ','EventServ','$scope', '$compile','$location','dialogs', function(ManageFriendsServ,EventServ,$scope,$compile, $location,dialogs) {

    $scope.ressources = [];
    /* items est ce qu'on renverra lors de l'envoi du formulaire */
    $scope.items = [];
    $scope.isPresent = [];
    $scope.clickOnCategory = function (idx) {
        $scope.resources=$scope.categories[idx].resources;
    };

    /* Cette fonction permet d'ajouter les ressources choisies par l'utilisateur depuis la modal dans le tableau des ressources */
    $scope.addRessourceToTable = function(id,theName,theLogo) {
        //il faut verifier ici que la ressource na pas deja ete inseree dans le tableau
        if( $scope.isPresent.indexOf(id) != -1){
            dialogs.notify("Ressource déjà présente","La ressource que vous souhaitez ajouter existe déjà !");
               
        }
        else {
            $scope.isPresent.push(id);
            $scope.items.push({
                idResource:id,
                needed:1,
                name:theName,
                logo: theLogo
            });
        }
    };

    $scope.addQty = function (item) {
        item.needed += 1;
    };

    $scope.subQty = function (item) {
        if (item.needed > 1)
            item.needed -= 1;
    };

    $scope.remove = function (item) {
        var index = $scope.items.indexOf(item);
        $scope.items.splice(index, 1);
        $scope.isPresent.splice(index,1);
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
        
        for (var i = 0; i < $scope.selection.length; i++) {
            $scope.friendsEvent.push({
                idUser:$scope.friends[$scope.selection[i]].id,
                accepted:false
                
            });
        }

        console.log($scope.dateBeginning);
        var event = {
            name : $scope.nomEvent,
            localisation: $scope.placeEvent,
            dateBeginning: $scope.dateEvent,
            description: $scope.descriptionEvent,
            participants: $scope.friendsEvent,
            neededs: $scope.items
        };
   


        EventServ.createEvent().create(event).$promise.then(
            function success() {
                $location.path('/manageEvents');
            },
            function error() {

            }
        );
    };

    /* Permet de recuperer la liste des ressources de la base */
    ManageFriendsServ.resourcesManager().getResources()
        .$promise
        .then(
            function success(data) {
                $scope.categories={};
                $scope.categories=data;
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
    }    
}]);