angular.module('underscore', [])
.factory('_', function() {
  return window._;
});

angular.module('partyon', [
  'ionic',
  'ngCordova',

  'partyon.routes',
  'partyon.directives',

  'partyon.tabs',
  'partyon.auth',
  'partyon.home',
  'partyon.notification',
  'partyon.inbox',
  'partyon.profile',
  'partyon.chat',
  'partyon.invite',
  'partyon.shoutout',

  'partyon.service',

  'underscore',
  'flexcalendar',
  'rzModule'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
