(function() {
    'use strict';

    angular
        .module('partyon.auth')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state'];

    function LoginCtrl($scope, $state) {

      $scope.facebookSignIn = function() {
        console.log("doing facebook sign in");
        $state.go('app.feed');        
      }
    }
})();
