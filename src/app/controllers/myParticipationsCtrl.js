controllers.controller('MyParticipationsCtrl', ['$scope', '$location', 'MyParticipationsServ','dialogs',
    function ($scope, $location, MyParticipationsServ,dialogs,$translate) {

    $scope.myEvents = function () {
        $location.path('/event');
    };

    $scope.manageEvent = function () {
        $location.path('/manageEvents');
    };

    $scope.myParticipations = function () {
        $location.path('/myParticipations');
    };

    $scope.myProfil = function () {
        $location.path('/profil');
    };

    $scope.returnProfil = function () {
        $location.path('/profil');
    };

        $scope.shouldShowInvitations = function () {
            if(!$scope.invitations)
                return false;
            else
                return $scope.invitations.length != 0;
        };

        $scope.haveParticipations = function () {
            if(!$scope.participations)
                return false;
            else
                return $scope.participations.length != 0;
        };

    $scope.cancelParticipation=function(index,idEvent){

        var dlg = dialogs.confirm("Annulation participation","Voulez-vous vraiment annuler cette participation ?","");
        dlg.result.then(function(){
            MyParticipationsServ.cancelParticipation(idEvent).cancel().$promise.then(
                function success() {
                    $scope.participations.splice(index,1);

                },
                function error() {

                    console.log("ERROR OCCUR ON CANCELLING EVENT");
                }
            );

        },function(btn){

        });


    };

    MyParticipationsServ.getMyParticipations().get().$promise.then(
        function success(response) {
            $scope.participations=response;

        },
        function error(errorResponse) {
            if(errorResponse.status==401){

            }

        }
    );

    MyParticipationsServ.getMyEventsInvitation().get().$promise.then(
        function success(response) {
            $scope.invitations=response;

        },
        function error(errorResponse) {
            if(errorResponse.status==401){

            }

        }
    );

    $scope.acceptEvent=function(index){

        var invitation=$scope.invitations[index];
        MyParticipationsServ.acceptEvent(invitation.id).get().$promise.then(
            function success() {
                $scope.participations.push($scope.invitations[index]);
                $scope.invitations.splice(index,1);
            },
            function error() {
                console.log("ERROR OCCUR ON ACCEPTING EVENT");
            });
    };

    $scope.denyEvent=function(index){

        var dlg = dialogs.confirm("Refuser invitation","Voulez-vous vraiment refuser cette invitation ?","");
        dlg.result.then(function(){
            var invitation=$scope.invitations[index];
            MyParticipationsServ.denyEvent(invitation.id).get().$promise.then(
                function success() {
                    $scope.invitations.splice(index,1);
                },
                function error() {
                    console.log("ERROR OCCUR ON DENYING EVENT");
                });
        },function(btn){

        });

    }
}]);