/**
 * Created by vincent on 23/04/2016.
 */


'use strict';

controllers.controller('ManageFriendsCtrl',['ManageFriendsServ','$scope','$location',function(ManageFriendsServ,$scope,$location){

    $scope.returnProfil = function() {
        $location.path('/profil');
    };

    $scope.removeFriend=function(index){
        console.log($scope.friends[index]);

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
               $scope.friends=data.friends;

            },
            function error(errorResponse) {

            }
    );




}]);