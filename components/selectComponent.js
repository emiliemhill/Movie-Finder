(function() {
  var selectComponent = {
    template: "<p>Here Be Templates</p>",
    controller: function(MovieService) {
      
    }
  }


  angular
    .module("myApp")
    .component("selectComponent", selectComponent);

})();
