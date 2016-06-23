/**
 * Created by Téo on 16/06/2016.
 */
services.factory('ViewEventServ',['$resource','$rootScope','$cookies',

    function($resource,$rootScope,$cookies) {

        return {
            getEvent: function (id) {
                return $resource("http://localhost:8080/event/"+id, {}, {

                    get: {
                        method: 'GET',
                        isArray: false
                    }
                });
            }
        };
    }
]);