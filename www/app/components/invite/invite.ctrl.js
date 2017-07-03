(function() {
    'use strict';

    angular
        .module('partyon.invite')
        .controller('InviteCtrl', InviteCtrl);

    InviteCtrl.$inject = ['$scope', '$state'];

    function InviteCtrl($scope, $state) {

      $scope.parties = [
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

      $scope.selectParty = function() {
        console.log('invited');
      }


    }
})();
