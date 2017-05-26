angular.module('partyon.routes', [])
    .config(function($ionicConfigProvider) {
        $ionicConfigProvider.backButton.text('');
        $ionicConfigProvider.backButton.previousTitleText(false);
        $ionicConfigProvider.tabs.position('bottom');
    })
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            // setup an abstract state for the tabs directive
            .state('login', {
              url: '/login',
              templateUrl: 'app/components/auth/login.html',
              controller: 'LoginCtrl'
            })

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'app/base/tabs.html',
                controller: 'TabsCtrl'
            })

            .state('app.feed', {
                url: '/feed',
                views: {
                    'tab-home': {
                        templateUrl: 'app/components/home/feed.html',
                        controller: 'FeedCtrl'
                    }
                }
            })

            // .state('app.feed', {
            //     url: '/feed',
            //     views: {
            //         'tab-home': {
            //             templateUrl: 'app/components/invite/invite.html',
            //             controller: 'InviteCtrl'
            //         }
            //     }
            // })

            .state('app.notification', {
                url: '/notification',
                views: {
                    'tab-profile': {
                        templateUrl: 'app/components/notification/notification.html',
                        controller: 'NotificationCtrl'
                    }
                }
            })

            .state('app.shoutout', {
                url: '/shoutout',
                views: {
                    'tab-shoutout': {
                        templateUrl: 'app/components/shoutout/shoutout.html',
                        controller: 'ShoutoutsCtrl'
                    }
                }
            })

            .state('app.inbox', {
                url: '/inbox',
                views: {
                    'tab-inbox': {
                        templateUrl: 'app/components/inbox/inbox.html',
                        controller: 'InboxCtrl'
                    }
                }
            })

            .state('app.profile', {
                url: '/profile',
                views: {
                    'tab-profile': {
                        templateUrl: 'app/components/profile/profile.html',
                        controller: 'ProfileCtrl'
                    }
                }
            })

            .state('app.myprofile', {
                url: '/myprofile',
                views: {
                    'tab-profile': {
                        templateUrl: 'app/components/profile/myprofile/myprofile.html',
                        controller: 'MyProfileCtrl'
                    }
                }
            })

            .state('app.editprofile', {
                url: '/editprofile',
                views: {
                    'tab-profile': {
                        templateUrl: 'app/components/profile/myprofile/editprofile.html',
                        controller: 'EditProfileCtrl'
                    }
                }
            })

            .state('app.myparty', {
                url: '/myparty',
                views: {
                    'tab-profile': {
                        templateUrl: 'app/components/profile/myparty/myparty.html',
                        controller: 'MyPartyCtrl'
                    }
                }
            })

            .state('app.premier', {
                url: '/premier',
                views: {
                    'tab-profile': {
                        templateUrl: 'app/components/profile/premier.html',
                        controller: 'PremierCtrl'
                    }
                }
            })

            .state('app.participation', {
                url: '/participation',
                views: {
                    'tab-profile': {
                        templateUrl: 'app/components/profile/participation.html',
                        controller: 'ParticipationCtrl'
                    }
                }
            })

            .state('app.votes', {
                url: '/votes',
                views: {
                    'tab-profile': {
                        templateUrl: 'app/components/profile/votes.html',
                        controller: 'VotesCtrl'
                    }
                }
            })

            .state('party', {
                url: '/party/:id',
                templateUrl: 'app/components/party/party.html',
                controller: 'PartyCtrl'
            })

            .state('filter', {
                url: '/filter',
                templateUrl: 'app/components/home/filter.html',
                controller: 'FilterCtrl'
            })

            .state('chat', {
                url: '/chat',
                templateUrl: 'app/components/chat/chat.html',
                controller: 'ChatCtrl'
            })

        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');
    });
