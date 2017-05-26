(function() {
    'use strict';

    angular
        .module('partyon.profile')
        .controller('EditProfileCtrl', EditProfileCtrl);

    EditProfileCtrl.$inject = ['$scope', '$state'];

    function EditProfileCtrl($scope, $state) {

      $scope.account = {
        avatar: "img/sample/selfie4.jpg",
        name: "Nina Lauritsen"
      };

      $scope.saveProfile = function() {
        // TODO
        // save profile if there is any change.
        console.log('save profile');
      }
    }
})();
