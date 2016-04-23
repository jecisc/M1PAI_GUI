/**
 * Created by Téo on 12/04/2016.
 */

'use strict';


services.factory('ProfilServ',['$resource','$rootScope','$cookies',
    
    
    
    
    function($resource,$rootScope,$cookies){
        return $resource("http://localhost:8080/user/"+$cookies.get("username"),{},{
                getProfil:{method:'GET',/*headers:{Authorization: "Basic " + btoa("test" + ":" +"test")},*/cache:false, isArray:false}
        });
    }]);
