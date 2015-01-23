/**
 * Created by Fabrice on 1/23/15.
 */
var myApp  = angular.module("myApp",['ui.router']);

myApp.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('gallery-1',{
                url : '/',
                templateUrl : 'views/gallery-1.html'
            })
            .state('gallery-2',{
                url : '/1',
                templateUrl: 'views/gallery-2.html'
            })
    }]);