app.config(function ($routeProvider, $locationProvider) {
    console.log("inside the config file");
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', { templateUrl: '../views/home.html' })
        .when('/worldsNews', { templateUrl: '../views/worldsNews.html' })
        .when('/opinion', { templateUrl: '../views/opinion.html' })
        .when('/home', { templateUrl: '../views/home.html' })
        .when('/cricket', { templateUrl: '../views/cricket.html' })
        .when('/entertaiment', { templateUrl: '../views/entertaiment.html' })
        .when('/crud', { templateUrl: '../views/crud.html' })

        .otherwise({ template: 'Opps you type something wrong' });

});
app.constant('PRODUCTURL', 'http://localhost:8080/news');

// app.config(function ($routeProvider, $locationProvider) {
//     $locationProvider.hashPrefix('');
//     $routeProvider.when('/', { templateUrl: 'views/home.html' }).
//         when('/about/:name/:name1', { templateUrl: 'views/about.html', controller: 'aboutcntl' }).when('/contact', { templateUrl: 'views/contact.html' }).
//         // otherwise({ redirectTo: '/' });
//         when('/home', { templateUrl: 'views/home.html' }).
//         otherwise({ template: '<h3>Opps you type something Wrong</h3>' });
// });