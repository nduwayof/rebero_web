/**
 * Created by Fabrice on 1/23/15.
 */
var myApp  = angular.module("myApp",['ui.router']);

myApp.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('photo',{
                url : '/',
                templateUrl : 'views/photo.html'
            })
            .state('video',{
                url : '/video',
                templateUrl: 'views/video.html'
            })
    }]);