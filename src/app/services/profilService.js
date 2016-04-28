/**
 * Created by Téo on 12/04/2016.
 */

'use strict';


services.factory('ProfilServ',['$resource','$rootScope','$cookies',
    
    
    
    
    function($resource,$rootScope,$cookies){
        return $resource("http://localhost:8080/user/get",{},{
            getProfil:{method:'GET',cache:false, isArray:false}
        });
    }]);
