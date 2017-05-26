(function() {
    'use strict';

    angular
        .module('partyon.service')
        .factory('Contacts', Contacts);

    Contacts.$inject = ['$q', '$cordovaContacts'];

    function Contacts($q, $cordovaContacts) {

      var service = {};

      service.pickContact = function() {
        var q = $q.defer();

        // Pick Contact
        $cordovaContacts.pickContact().then(function(contactPicked) {
          q.resolve(contactPicked);
        }, function(err) {
          q.reject(err);
        });

        return q.promise;
      }

      return service;
    }
})();
