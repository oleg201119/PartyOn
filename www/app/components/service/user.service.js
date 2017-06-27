(function() {
    'use strict';

    angular
        .module('partyon.service')
        .factory('User', User);

    User.$inject = ['$http', '$q', 'Config'];

    function User($http, $q, Config) {

      var service = {};

      service.setUser = function(facebook_id, facebook_name, facebook_email, facebook_birthday, facebook_gender, facebook_avatar) {

        var deferred = $q.defer();

        var url = Config.BASE_URL + 'login_facebook';
        var config = {
          headers: {
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
          }
        };
        var data = {
          facebook_id: facebook_id,
          facebook_name: facebook_name,
          facebook_email: facebook_email,
          facebook_birthday: facebook_birthday,
          facebook_gender: facebook_gender,
          facebook_avatar: facebook_avatar
        };

        $http.post(url, data, config)
          .success(function(response) {
            console.log(response);
            deferred.resolve(response);
          })
          .error(function(error) {
            console.log(error);
            deferred.reject(error);
          });

        return deferred.promise;
      }

      return service;
    }
})();
