/**
 * Created by vincent on 23/04/2016.
 */

'use strict';


services.factory('ManageFriendsServ', ['$resource', '$cookies',

    function ($resource, $cookies) {
        return {
            friendsManager: function () {
                return $resource("http://localhost:8080/user/friends", {}, {

                    getFriends: {
                        method: 'GET',
                        isArray: true
                    }
                });
            },
            resourcesManager: function () {
                return $resource("http://localhost:8080/event/getAllResources", {}, {
                    
                    getResources:{
                        method: 'GET',
                        isArray: true
                    }
                })
            },
            getFriendRequests: function () {
                return $resource("http://localhost:8080/friendRequest/get", {}, {

                    get: {
                        method: 'GET',
                        isArray: true
                    }
                });
            },
            deleteFriend: function (idFriend) {
                return $resource("http://localhost:8080/user/friends/delete/" + idFriend, {}, {
                    delete: {
                        method: 'DELETE',
                        cache: false
                    }
                });
            },
            acceptFriend: function (idAsker) {
                return $resource("http://localhost:8080/friendRequest/accept/" + idAsker, {}, {

                    accept: {
                        method: 'GET',
                        cache: false

                    }
                });
            },
            denyFriend: function (idAsker) {
                return $resource("http://localhost:8080/friendRequest/deny/" + idAsker, {}, {

                    deny: {
                        method: 'GET',
                        cache: false

                    }
                });
            },
            searchUsersByName: function (name, page, size) {
                return $resource("http://localhost:8080/user/search?size=" + size + "&page=" + page + "&name=" + name, {}, {

                    get: {
                        method: 'GET',
                        cache: false

                    }
                });
            }
        }
    }]);