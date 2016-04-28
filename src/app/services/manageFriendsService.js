/**
 * Created by vincent on 23/04/2016.
 */

'use strict';


services.factory('ManageFriendsServ',['$resource','$cookies',

    function($resource,$cookies){
        return{
            friendsManager:function() {
                return $resource("http://localhost:8080/user/friends", {}, {

                    getFriends: {
                        method: 'GET',
                        cache: false,

                    }

                });
            },
            deleteFriend:function(idFriend){
                console.log(idFriend);
                return $resource("http://localhost:8080/user/friends/delete/"+idFriend, {}, {
                    
                    delete: {
                        method: 'DELETE',
                        cache: false,
                        
                    }
                });
            }
           
}}]);