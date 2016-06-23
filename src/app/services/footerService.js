'use strict';

services.factory('FooterServ', ['$resource', '$rootScope', '$cookies',

    function ($resource) {
        return {
            friendsInv: function () {
                return $resource("http://localhost:8080/friendRequest/numberOfInvitations", {}, {
                    getNumberOfFriendsInv: {method: 'GET', cache: false, isArray: false}
                });
            },
            eventsInv: function () {
                return $resource("http://localhost:8080/event/numberOfEventsInvitations", {}, {
                    getNumberOfEventsInv: {method: 'GET', cache: false, isArray: false}
                });
            }
        }
    }]);