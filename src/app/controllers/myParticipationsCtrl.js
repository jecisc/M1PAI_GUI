controllers.controller('MyParticipationsCtrl', ['$scope', '$location', 'MyParticipationsServ', 'ConnexionServ', function ($scope, $location, MyParticipationsServ) {

    $scope.myEvents = function () {
        $location.path('/events');
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

    MyParticipationsServ.getMyParticipations().get().$promise.then(
        function success(response) {
            $scope.participations=response;
            console.log($scope.participations);
        },
        function error(errorResponse) {
            if(errorResponse.status==401){

            }

        }
    );

    MyParticipationsServ.getMyEventsInvitation().get().$promise.then(
        function success(response) {
            $scope.invitations=response;
            console.log($scope.events);
        },
        function error(errorResponse) {
            if(errorResponse.status==401){

            }

        }
    );

    $scope.acceptEvent=function(index){

        var invitation=$scope.invitations[index];
        MyParticipationsServ.acceptEvent(invitation.id).get().$promise.then(
            function success(response) {
                $scope.participations.push($scope.invitations[index]);
                $scope.invitations.splice(index,1);
            },
            function error(errorResponse) {
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