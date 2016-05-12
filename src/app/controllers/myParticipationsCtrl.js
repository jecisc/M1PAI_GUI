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

    MyParticipationsServ.getProfil(
        function success(response) {
            $scope.pseudo = response.pseudo;
            $scope.mail = response.mail;
            $scope.name  = response.name;
            $scope.firstName = response.firstName;
        },
        function error(errorResponse) {
            if(errorResponse.status==401){
                alert("Session interrompue")
                console.log("Utilisateur non authentifié.");
            }

            console.log("Error:" + JSON.stringify(errorResponse));
            $location.path('/');
        }
    );
    
}]);