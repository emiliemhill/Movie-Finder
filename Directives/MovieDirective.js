<<<<<<< HEAD
// (function() {
//   function fadeIn() {
//     return {
//       link: function($scope, $element, $attrs) {
//         $element.on("click", function() {
//           $element.fadeIn(500);
//
//       //   });
//       //   $element.on("mouseout", function (){
//       //     $element.css("color", "white")
//       //   })
//       // }
//     })
//   }
// }
// }
//   angular
//     .module("myApp")
//     .directive("fadeIn", fadeIn);
// })();
=======
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
>>>>>>> dc3d127b1b03f000227d4f17b9d0fb4210b8f8f8
