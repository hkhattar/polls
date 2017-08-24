var app = angular.module('app', ['ngRoute','ngCookies']);

app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!

$routeProvider
      
        .when('/',{
          templateUrl: 'partials/login.html',
           controller: 'survey_controller'
        })

        .when('/dashboard',{
          templateUrl: 'partials/dashboard.html',
           controller: 'survey_controller'
        })

        .when('/create',{
          templateUrl: 'partials/create.html',
           controller: 'survey_controller'
        })

        .when('/poll/:id',{
          templateUrl: 'partials/poll.html',
           controller: 'survey_controller'
        })

        
});