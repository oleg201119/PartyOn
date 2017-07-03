(function() {
    'use strict';

    angular
        .module('partyon.inbox')
        .controller('InboxCtrl', InboxCtrl);

    InboxCtrl.$inject = ['$scope', '$state'];

    function InboxCtrl($scope, $state) {
      $scope.keyword = {
        text: ''
      };

      $scope.search = function() {

      }

      $scope.doChat = function() {
        $state.go('chat');
      }

      $scope.goMyMessage = function() {

      }

      $scope.messages = [
        /*
        {
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Andreva"
          },
          description: "Eirik Bjork godtok invitasjonen din til festen fanners!",
          date: "10 hours ago"
        },
        {
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Eirik Bjork godtok invitasjonen din til festen fanners!",
          date: "8 hours ago"
        },
        {
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Eirik Bjork godtok invitasjonen ",
          date: "1 week ago"
        }
        */
      ];
    }
})();
