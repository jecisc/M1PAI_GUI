services.factory('MyParticipationsServ',['$resource','$rootScope','$cookies',

    function($resource,$rootScope,$cookies){
        return $resource("http://localhost:8080/user/get",{},{
            getProfil:{method:'GET',cache:false, isArray:false}
        });
    }]);
