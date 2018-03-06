(function () {
  function MovieService($http) {

    return {
      getLongMovies: getLongMovies
    }

    function getLongMovies() {
      var baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=a420712cee91c2aec196fe700c0ceb35&sort_by=popularity.desc&include_adult=false&include_video=false"
      var genreIds = ["18", "53"]
      var minLength = 180
      var minLengthUrl = "&with_runtime.gte=" + minLength
      var maxLength = 90
      var maxLengthUrl = "&with_runtime.lte=" + maxLength
      var minRating = 5
      var minRatingUrl = "&vote_average.gte=" + minRatingUrl
      var maxRating = 10
      var maxRatingUrl = "&vote_average.lte=" + maxRatingUrl
      genreIds.forEach(function (Id) {
        var genreUrl = "&with_genres=" + Id
        baseUrl += genreUrl
      })
      baseUrl += minLengthUrl
      baseUrl += maxLengthUrl
      baseUrl += minRatingUrl
      baseUrl += maxRatingUrl
      return $http({
        method: "GET",
        url: baseUrl
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
