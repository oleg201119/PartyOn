(function() {
    'use strict';

    angular
        .module('partyon.auth')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state', '$ionicLoading', '$q'];

    function LoginCtrl($scope, $state, $ionicLoading, $q) {

      // This is the fail callback from the login method
      var fbLoginSuccess = function(response) {
        if (!response.authResponse){
          fbLoginError("Cannot find the authResponse");
          return;
        }

        var authResponse = response.authResponse;

        getFacebookProfileInfo(authResponse)
        .then(function(profileInfo) {
          console.log("=== FB profile info ===");
          console.log(profileInfo);
          // For the purpose of this example I will store user data on local storage
          // UserService.setUser({
          //   authResponse: authResponse,
    			// 	userID: profileInfo.id,
    			// 	name: profileInfo.name,
    			// 	email: profileInfo.email,
          //   picture : "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
          // });

          $ionicLoading.hide();
          $state.go('app.feed');
        }, function(fail){
          // Fail get profile info
          console.log('profile info fail', fail);
        });
      };

      var fbLoginError = function(error) {
        console.log('fbLoginError', error);
        $ionicLoading.hide();
      };

      var getFacebookProfileInfo = function (authResponse) {
        var info = $q.defer();

        facebookConnectPlugin.api('/me?fields=id,name,email,birthday,gender&access_token=' + authResponse.accessToken, null,
          function (response) {
    				console.log(response);
            info.resolve(response);
          },
          function (response) {
    				console.log(response);
            info.reject(response);
          }
        );
        return info.promise;
      };

      $scope.facebookSignIn = function() {
        console.log("doing facebook sign in");

        facebookConnectPlugin.getLoginStatus(function(success) {

          if(success.status === 'connected') {
             console.log('getLoginStatus', success.status);
          }
          else {
            console.log('getLoginStatus', success.status);

            $ionicLoading.show({
              template: 'Logging in...'
            });

            facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
          }

        }, function(err) {
          console.log(err);
        });
        //$state.go('app.feed');
      }
    }
})();
