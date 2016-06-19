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

    $scope.cancelParticipation=function(index,idEvent){

        var dlg = dialogs.confirm("Annulation participation","Voulez-vous vraiment annuler cette participation ?","");
        dlg.result.then(function(btn){
            MyParticipationsServ.cancelParticipation(idEvent).cancel().$promise.then(
                function success(response) {
                    $scope.participations.splice(index,1);
                    //console.log($scope.participations);

                },
                function error(errorResponse) {

                    console.log("ERROR OCCUR ON CANCELLING EVENT");
                }
            );

        },function(btn){
            $scope.confirmed = 'You confirmed "No."';
        });


    }

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
    }

    $scope.denyEvent=function(index){

        var invitation=$scope.invitations[index];
        MyParticipationsServ.denyEvent(invitation.id).get().$promise.then(
            function success(response) {
                $scope.invitations.splice(index,1);
            },
            function error(errorResponse) {
                console.log("ERROR OCCUR ON DENYING EVENT");
            });
    }
    
}]);