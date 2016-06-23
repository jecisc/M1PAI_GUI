/**
 * Created by Téo on 01/05/2016.
 */
/**
 * Created by Téo on 12/04/2016.
 */

'use strict';

services.factory('ModifyProfilServ',['$resource','$rootScope','$cookies',


    function($resource){
        return $resource("http://localhost:8080/user/update",{}, {
            modifyProfil: {method: 'POST', cache: false, isArray: false}
        });
    }]);
