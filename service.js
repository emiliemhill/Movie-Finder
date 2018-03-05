(function() {
  function MovieService($http) {

    return {
      getLongMovies : getLongMovies
    }

    function getLongMovies() {

      return $http({
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie?api_key=a420712cee91c2aec196fe700c0ceb35&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_runtime.gte=180"
      }).then(function (response) {
        console.log("service", response.data.results);
        return response.data.results;
      });
    }
  }

  angular
    .module("myApp")
    .factory("MovieService", MovieService);

})();
