(function() {
    'use strict';

    angular
        .module('partyon.profile')
        .controller('MyProfileCtrl', MyProfileCtrl);

    MyProfileCtrl.$inject = ['$scope', '$state'];

    function MyProfileCtrl($scope, $state) {

      $scope.account = {
        avatar: "img/sample/selfie4.jpg",
        name: "Nina Lauritsen"
      };

      $scope.account = {};

      $scope.partymode = 0;

      $scope.newParties = [
        /*
        {
          banner: "img/sample/club2.png",
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Beachparty!",
          time: "20.00 - 02.00",
          location: "1.8km unna"
        },
        {
          banner: "img/sample/club.png",
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Beachparty!",
          time: "20.00 - 02.00",
          location: "1.8km unna"
        }
        */
      ];

      $scope.oldParties = [
        /*
        {
          banner: "img/sample/club.png",
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Beachparty!",
          time: "20.00 - 02.00",
          location: "1.8km unna"
        },
        {
          banner: "img/sample/club2.png",
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Beachparty!",
          time: "20.00 - 02.00",
          location: "1.8km unna"
        }
        */
      ];

      $scope.setPartyMode = function(mode) {
        $scope.partymode = mode;
      }

      $scope.editProfile = function() {
        $state.go('app.editprofile');
      }
    }
})();
