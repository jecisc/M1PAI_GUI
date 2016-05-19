/**
 * Created by vincent on 06/05/2016.
 */


controllers.controller('AddFriendCtrl',['NgTableParams','$resource','ManageFriendsServ','$scope',function(NgTableParams,$resource,ManageFriendsServ,$scope) {

    $scope.tableParams = new NgTableParams({
        page: 1,            // show first page
        count: 1,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        },
        filter: $scope.filters
    }, {
        getData: function ($defer, params) {
            // ajax request to api
            return ManageFriendsServ.searchUsersByName(params.filter,params.page(),params.count())
                .$promise
                .then(function (data) {

                        $defer.resolve(data);
                    },
                    function error(errorResponse) {
                        console.log("");
                    })
        }
    });
}]);



