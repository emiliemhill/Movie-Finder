(function() {
  var listComponent = {
    templateUrl: `partials/list.html`,
    controller: function(ListService) {
      var $ctrl = this;
      $ctrl.movies = ListService.displayList();
      $ctrl.deleteFromList = function(index) {
        ListService.deleteFromList(index, 1)
      }
    }
  }

  angular
    .module("myApp")
    .component("listComponent", listComponent);

})();
