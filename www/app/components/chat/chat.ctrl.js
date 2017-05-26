(function() {
    'use strict';

    angular
        .module('partyon.chat')
        .controller('ChatCtrl', ChatCtrl);

    ChatCtrl.$inject = ['$scope', '$state', '$ionicScrollDelegate', '$timeout'];

    function ChatCtrl($scope, $state, $ionicScrollDelegate, $timeout) {

      $scope.input = {
        text: ''
      };

      $scope.user = {
        id: 1,
        avatar: "img/sample/selfie4.jpg"
      };

      $scope.messages = [];

      var viewScroll = $ionicScrollDelegate.$getByHandle('userMessageScroll');
      var footerBar;
      var scroller;
      var txtInput;
      var keyboardHeight = 0;

      window.addEventListener('native.keyboardshow', keyboardShowHandler);
      window.addEventListener('native.keyboardhide', keyboardHideHandler);

      $scope.$on('$ionicView.leave', function() {
        window.removeEventListener('native.keyboardshow', keyboardShowHandler);
        window.removeEventListener('native.keyboardhide', keyboardHideHandler);
      });

      $scope.$on('$ionicView.enter', function() {

        loadMessages();

        $timeout(function() {
          footerBar = document.body.querySelector('#userMessagesView .bar-footer');
          scroller = document.body.querySelector('#userMessagesView .scroll-content');
          txtInput = angular.element(footerBar.querySelector('textarea'));
        }, 0);

      });

      $scope.$on('elastic:resize', function(e, ta) {
        console.log('elastic:resize');

        if (!ta) return;

        var taHeight = ta[0].offsetHeight;

        if (!footerBar) return;

        var newFooterHeight = taHeight +20;
        newFooterHeight = (newFooterHeight > 44) ? newFooterHeight : 44;

        footerBar.style.height = newFooterHeight + 'px';

        // for iOS you will need to add the keyboardHeight to the scroller.style.bottom
        if (ionic.Platform.isIOS()) {
          scroller.style.bottom = newFooterHeight + keyboardHeight + 'px';
        } else {
          scroller.style.bottom = newFooterHeight + 'px';
        }
      });

      $scope.sendMessage = function(sendForm) {
        var message = {
          createdAt: new Date().toISOString(),
          text: $scope.input.text,
          user: $scope.user
        };

        $scope.messages.push(message);

        $timeout(function() {
          keepKeyboardOpen();
          viewScroll.scrollBottom(true);
        }, 0);

        // Send messave via network


        $scope.input.text = '';
      };

      function loadMessages() {
        $scope.messages = [
          {
            user: {
              id: 1,
              avatar: "img/sample/selfie4.jpg"
            },
            text: "Mauris non tempor",
            createdAt: new Date().toISOString()
          },
          {
            user: {
              id: 2,
              avatar: "img/sample/selfie4.jpg"
            },
            text: "Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae",
            createdAt: new Date().toISOString()
          },
          {
            user: {
              id: 1,
              avatar: "img/sample/selfie4.jpg"
            },
            text: "Mauris non tempor",
            createdAt: new Date().toISOString()
          },
          {
            user: {
              id: 2,
              avatar: "img/sample/selfie4.jpg"
            },
            text: "Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae",
            createdAt: new Date().toISOString()
          }
        ];
      }

      function keepKeyboardOpen() {
        console.log('keepKeyboardOpen');
        txtInput.one('blur', function() {
          console.log('textarea blur, focus back on it');
          txtInput[0].focus();
        });
      }

      function keyboardShowHandler(e) {
        console.log('keyboardShowHandler');
        console.log('Keyboard height is ' + e.keyboardHeight);
        keyboardHeight = e.keyboardHeight;
      }

      function keyboardHideHandler(e) {
        console.log('keyboardHideHandler');
        console.log('Keyboard height is 0');
        keyboardHeight = 0;
        $timeout(function() {
          scroller.style.bottom = footerBar.clientHeight + 'px';
        }, 0);
      }
    }
})();
