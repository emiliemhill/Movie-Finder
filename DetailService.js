(function() {
  function DetailService() {

    return {
      getMovieDetails: getMovieDetails,

    }

    function getMovieDetails(movie) {
      var movieID = movie.id
      var baseUrl = "https://api.themoviedb.org/3/movie/"
      var urlsuffix = "?api_key=a420712cee91c2aec196fe700c0ceb35&append_to_response=credits"
      return $http({
        method: "GET",
        url: baseUrl + movieID + urlsuffix
      }).then(function (response) {
        // console.log("service", response.data.results);
        return response.data.results;
      });
    }


  }

  angular
    .module("myApp")
    .factory("DetailService", DetailService);

})();
