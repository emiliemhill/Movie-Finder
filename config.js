(function() {
  angular
    .module("myApp")
    .config(function($routeProvider) {
      $routeProvider
        .when("/list", {
          template: "<list-component></list-component>"
        })
        .when("/select", {
          template: "<select-component></select-component>"
        })
        .when("/form", {
          template: "<form-component></form-component>"
        })
        .otherwise({
          redirectTo: "/form"
        });
    })
})();
