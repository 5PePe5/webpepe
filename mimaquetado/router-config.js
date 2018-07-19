app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/proyectos", {
        templateUrl : "proyectos.htm"
    })
    .when("/contacto", {
        templateUrl : "contacto.htm"
    })
    .when("/quienessomos", {
        templateUrl : "quienessomos.htm"
    })
    .when("/creaunacolecta", {
        templateUrl : "creaunacolecta.htm"
    });
});