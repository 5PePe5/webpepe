app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templetes/main.htm"
    })
    .when("/proyectos", {
        templateUrl : "templetes/proyectos.htm"
    })
    .when("/contacto", {
        templateUrl : "templetes/contacto.htm"
    })
    .when("/quienessomos", {
        templateUrl : "templetes/quienessomos.htm"
    })
    .when("/comodonar", {
        templateUrl : "templetes/comodonar.htm"
    })
    .when("/sitiosdeinteres", {
        templateUrl : "templetes/sitiosdeinteres.htm"
    })
    .when("/creaunacolecta", {
        templateUrl : "templetes/creaunacolecta.htm"
    })
    .when("/login", {
            templateUrl : "templetes/login.htm"
    
    });
});