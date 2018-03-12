(function() {
  function fadeIn() {
    return {
      link: function($scope, $element, $attrs) {
        $element.css("display", "block")
        //   console.log("Hello");
         
        // })
      }
    }
  }
  angular
    .module("myApp")
    .directive("fadeIn", fadeIn);
})();
