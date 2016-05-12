/**
 * Created by vincent on 23/04/2016.
 */


'use strict';

controllers.controller('ManageFriendsCtrl',['ManageFriendsServ','$scope','$location','$rootScope','$interval',function(ManageFriendsServ,$scope,$location,$rootScope,$interval){



    $scope.returnProfil = function() {
        $location.path('/profil');
    };

    $scope.acceptFriend=function(index){
        var friend=$scope.friendsRequest[index];
        ManageFriendsServ.acceptFriend(friend.id).accept()
            .$promise.then(
                function success(response) {

                    ManageFriendsServ.friendsManager().getFriends()
                        .$promise
                        .then(
                            function success(data) {

                                $scope.friends={};
                                $scope.friends=data;
                                $scope.friendsRequest.splice(index,1);

                            },
                            function error(errorResponse) {
                                console.log("Erreur raffraichissement des amis");
                            }
                        );

                },
                function error(errorResponse) {
                    console.log("Erreur dans l'acceptation");
                    ManageFriendsServ.acceptFriend(friend.id).accept()
                        .$promise.then(
                        function success(response) {
                }
            );

    })};

    $scope.denyFriend=function(index){
        var friend=$scope.friendsRequest[index];
        ManageFriendsServ.denyFriend(friend.id).deny()
            .$promise.then(
            function success(response) {
                $scope.friendsRequest.splice(index,1);
            },
            function error(errorResponse) {
                console.log("Erreur refus demande d'ami");
            })
    };


    $scope.removeFriend=function(index){

        var friend=$scope.friends[index];

        ManageFriendsServ.deleteFriend(friend.id).delete()
            .$promise
            .then(
               function success(response) {

                   $scope.friends.splice(index,1);

               },
               function error(errorResponse) {
                   console.log("Erreur dans la suppression");
               }
        );
    };

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

    //var refresh=$interval(getFriendsRequest(),3000);

    $scope.addFriend=function() {

       $location.path('addFriend');
    };
}]);