/**
 * Created by Téo on 15/06/2016.
 */
controllers.controller('MyEventsCtrl', ['$scope', '$location', 'MyEventsServ',  'ConnexionServ' , function ($scope, $location, MyParticipationsServ) {

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

    $scope.deleteEvent = function () {
        ngDialog.open({ template: 'templateId' });
    };

    MyParticipationsServ.getMyEvents().get().$promise.then(
        function success(response) {
            $scope.mesEvenements=response;
        },
        function error(errorResponse) {
            if(errorResponse.status==401){

            }

        }
    );

}]);