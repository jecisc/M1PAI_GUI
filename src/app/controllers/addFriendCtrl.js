/**
 * Created by vincent on 06/05/2016.
 */


controllers.controller('AddFriendCtrl',['NgTableParams','$resource','ManageFriendsServ','$scope','$window',
    function(NgTableParams,$resource,ManageFriendsServ,$scope,$window) {

        $scope.tableParams = new NgTableParams({},{
            counts:[],
            getData:function($defer,params) {

                /**
                 * On compte le nombre de résultats afin d'évaluer le nombre de pages
                 */
                ManageFriendsServ.getNumberOfUsersFilterByPseudo(params.filter()).get()
                    .$promise.then(function success(numberOfUsers) {

                    params.total(Math.round(numberOfUsers.result/5));

                });

                var content = ManageFriendsServ.searchUsersByPseudo(params.filter(), params.page(), params.count()).get()
                    .$promise.then(function (data) {

                        return data;
                    });
                

                return content;
            }
        });

        $scope.selectedRow = null;  // initialize our variable to null
        $scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
            $scope.selectedRow = index;

        };

        $scope.addFriendRequest=function(){
            var id=$scope.selectedRow;

            return ManageFriendsServ.addFriendRequest($scope.tableParams.data[id].id).add()
                .$promise.then(function success(response) {
                        $scope.errorMessage="Une demande d'ami a été envoyée"
                    },
                    function error(errorResponse) {
                        if(errorResponse.status=500){
                            $scope.errorMessage = "Une demande d'ami existe déja"
                        }

                    }
                )
        };
}]);

