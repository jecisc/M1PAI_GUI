/**
 * Created by Téo on 03/04/2016.
 */
'use strict';


controllers.controller('FooterCtrl',['$scope','$location','ConnexionServ','FooterServ', function($scope, $location, ConnexionServ, FooterServ) {

    $scope.myEvents = function() {
        $location.path('/event');
    };

    $scope.manageEvent = function() {
        $location.path('/manageEvents');
    };

    $scope.myProfil = function() {
        $location.path('/profil');
    };
    
    $scope.myParticipations = function() {
        $location.path('/myParticipations');
    };

    $scope.logout=function(){
        ConnexionServ.logout().logout().$promise.then(
            function(){
                $location.path('/');
            }
        );
    };

    $scope.pagePath = function(){
        return $location.path();
    };

    $scope.shouldDisplayProfilSelection = function(){
        if( $scope.pagePath() == '/profil'
            || $scope.pagePath() == '/friends'
            || $scope.pagePath() == '/modifyProfil'
            || $scope.pagePath() == "/addFriend")
            return 'selected'
    };

    $scope.shouldDisplayParticipationSelection = function(){
        if( $scope.pagePath() == '/myParticipations')
            return 'selected'
    };

    $scope.shouldDisplayManageEventSelection = function(){

        if( $scope.pagePath() == '/manageEvents'
        || ($location.path().search("/viewEvent") == 0))
            return 'selected'
    };

    $scope.shouldDisplayEventSelection = function(){
        if( $scope.pagePath() == '/event')
            return 'selected'
    };

    FooterServ.friendsInv().getNumberOfFriendsInv(
        function success(data) {
            if(data.number != "0"){
                $scope.numberOfInvitations = data.number;
            }   
        },
        function error(errorResponse) {

        }
    );

    FooterServ.eventsInv().getNumberOfEventsInv(
        function success(data) {
            if(data.number != "0") {
                $scope.numberOfEventsInvitations = data.number;
            }
        },
        function error(errorResponse) {

        }
    );

}]);