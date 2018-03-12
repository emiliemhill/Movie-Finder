(function() {
  function fadeIn() {
    return {
      link: function($scope, $element, $attrs) {
        $element.on("onLoad", function() {
          console.log("Hello");
          // $element.css("display", "none");
          $element.fadeIn(500);

      //   });
      //   $element.on("mouseout", function (){
      //     $element.css("color", "white")
      //   })
      // }
    })
  }
}
}
  angular
    .module("myApp")
    .directive("fadeIn", fadeIn);
})();
