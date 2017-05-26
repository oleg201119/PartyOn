(function() {
    'use strict';

    angular
        .module('partyon.profile')
        .controller('ParticipationCtrl', ParticipationCtrl);

    ParticipationCtrl.$inject = ['$scope', '$state'];

    function ParticipationCtrl($scope, $state) {

      $scope.parties = [
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
          banner: "img/sample/club.png",
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Beachparty!",
          time: "20.00 - 02.00",
          location: "1.8km unna"
        }
      ];

      $scope.goPartyDetail = function(index) {
        console.log('Party index=' + index);
      }

      $scope.goProfile = function() {

      }
    }
})();
