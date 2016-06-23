/**
 * Created by Téo on 16/06/2016.
 */
services.factory('MyEventsServ',['$resource','$rootScope','$cookies',

    function($resource,$rootScope,$cookies) {

        return {
            getMyEvents: function () {
                return $resource("http://localhost:8080/event/myEventsCreated", {}, {

                    get: {
                        method: 'GET',
                        isArray: true
                    }
                });
            },
            deleteEvent: function (idEvent) {
                return $resource("http://localhost:8080/event/delete/" + idEvent, {}, {

                    delete: {
                        method: 'DELETE',
                        isArray: false
                    }
                });
            }
        };
    }
]);