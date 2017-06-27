(function() {
    'use strict';

    angular
        .module('partyon.auth')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state', '$ionicLoading', '$q', 'User'];

    function LoginCtrl($scope, $state, $ionicLoading, $q, User) {

      // This is the fail callback from the login method
      var fbLoginSuccess = function(response) {
        if (!response.authResponse){
          fbLoginError("Cannot find the authResponse");
          return;
        }

        var authResponse = response.authResponse;

        getFacebookProfileInfo(authResponse).then(
          function(profileInfo) {
            console.log("=== FB profile info ===");
            console.log(profileInfo);

            var facebook_id = profileInfo.id ? profileInfo.id:'';
            var facebook_name = profileInfo.name ? profileInfo.name:'';
            var facebook_email = profileInfo.email ? profileInfo.email:'';
            var facebook_birthday = profileInfo.birthday ? profileInfo.birthday:'';
            var facebook_gender = profileInfo.gender ? profileInfo.gender:'';
            var facebook_avatar = "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large";

            User.setUser(facebook_id, facebook_name, facebook_email, facebook_birthday, facebook_gender, facebook_avatar).then(
              function(data) {
                $ionicLoading.hide();
                $state.go('app.feed');
              },
              function(error) {
                $ionicLoading.hide();
              }
            );
          }, function(fail) {
          // Fail get profile info
          console.log('profile info fail', fail);
          }
        );
      };

      var fbLoginError = function(error) {
        console.log('fbLoginError', error);
        $ionicLoading.hide();
      };

      var getFacebookProfileInfo = function (authResponse) {
        var info = $q.defer();

        var userId = authResponse.userID;
        facebookConnectPlugin.api(userId + '/?fields=id,name,email,birthday,gender', ['public_profile', 'email', 'user_birthday'],
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
        console.log("Doing facebook sign in");

        facebookConnectPlugin.getLoginStatus(function(success) {

          if(success.status === 'connected') {
             console.log('FB getLoginStatus', success.status);

             $ionicLoading.show({
               template: 'Logging in...'
             });

             var authResponse = success.authResponse;

             getFacebookProfileInfo(authResponse).then(
               function(profileInfo) {
                 console.log("=== FB profile info ===");
                 console.log(profileInfo);

                 var facebook_id = profileInfo.id ? profileInfo.id:'';
                 var facebook_name = profileInfo.name ? profileInfo.name:'';
                 var facebook_email = profileInfo.email ? profileInfo.email:'';
                 var facebook_birthday = profileInfo.birthday ? profileInfo.birthday:'';
                 var facebook_gender = profileInfo.gender ? profileInfo.gender:'';
                 var facebook_avatar = "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large";

                 User.setUser(facebook_id, facebook_name, facebook_email, facebook_birthday, facebook_gender, facebook_avatar).then(
                   function(data) {
                     $ionicLoading.hide();
                     $state.go('app.feed');
                   },
                   function(error) {
                     $ionicLoading.hide();
                   }
                 );
               }, function(fail) {
                 // Fail get profile info
                 console.log('profile info fail', fail);
               }
             );
          }
          else {
            console.log('FB getLoginStatus', success.status);

            $ionicLoading.show({
              template: 'Logging in...'
            });

            facebookConnectPlugin.login(['email', 'public_profile', 'user_birthday'], fbLoginSuccess, fbLoginError);
          }

        }, function(err) {
          console.log(err);
        });
      }

    }
})();
