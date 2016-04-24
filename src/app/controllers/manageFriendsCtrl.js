/**
 * Created by vincent on 23/04/2016.
 */


'use strict';

controllers.controller('ManageFriendsCtrl',['ManageFriendsServ','$scope',function(ManageFriendsServ,$scope){

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