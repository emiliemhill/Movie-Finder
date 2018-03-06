(function() {
  var selectComponent = {
    template: `<p> {{ $ctrl.movies[$ctrl.movieShow].title }}
      <img class="border-radius" ng-src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/{{ $ctrl.movies[$ctrl.movieShow].poster_path }}">
      <button ng-click="$ctrl.nextMovie()">Next Movie</button>
      <button ng-click="$ctrl.showMovie()">Show the Movie</button>
      <button ng-click="$ctrl.saveToList($ctrl.movies[$ctrl.movieShow].title)">Add To List</button>
    </p>`,
    controller: function(MovieService) {
      var vm = this;
      vm.movieShow = 0;


      vm.nextMovie = function(){
        vm.movieShow++;
        console.log(vm.movieShow);
      }

      vm.showMovie = function(){
        console.log("show movie click");
        vm.movies = MovieService.setMovies();
      }

   }
};


  angular
    .module("myApp")
    .component("selectComponent", selectComponent)
})();

//
