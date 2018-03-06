(function() {
  var listComponent = {
    templateUrl: `partials/list.html`,
    controller: function(ListService) {
      var $ctrl = this;
      $ctrl.movies = ListService.displayList();
    }
  }

  angular
    .module("myApp")
    .component("listComponent", listComponent);

})();
