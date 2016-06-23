/**
 * Created by Téo on 19/06/2016.
 */
'use strict';


services.factory('EventServ', ['$resource',

    function ($resource) {
        return {
            createEvent: function() {
                return $resource("http://localhost:8080/event/create", {}, {

                    create: {
                        method: 'POST',
                        isArray: false
                    }
                });
            }
        }}
]);