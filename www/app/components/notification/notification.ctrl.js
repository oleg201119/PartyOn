(function() {
    'use strict';

    angular
        .module('partyon.notification')
        .controller('NotificationCtrl', NotificationCtrl);

    NotificationCtrl.$inject = ['$scope', '$state'];

    function NotificationCtrl($scope, $state) {

      $scope.notifications = [
        {
          invitation: false,
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Eirik Bjork godtok invitasjonen din til festen fanners!"
        },
        {
          invitation: true,
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Eirik Bjork godtok invitasjonen din til festen fanners!"
        },
        {
          invitation: true,
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Eirik Bjork godtok invitasjonen "
        }
      ];
    }
})();
