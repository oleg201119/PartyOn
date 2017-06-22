(function() {
    'use strict';

    angular
        .module('partyon.profile')
        .controller('ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['$scope', '$state', '$cordovaSocialSharing'];

    function ProfileCtrl($scope, $state, $cordovaSocialSharing) {

      $scope.share = function() {
        $cordovaSocialSharing
        .share('Message', 'Subject', null, null) // Share via native share sheet
        .then(function(result) {
          // Success!
          console.log('Share - success');
        }, function(err) {
          // An error occured. Show a message to the user
          console.log(err);
        });
      }
    }
})();
