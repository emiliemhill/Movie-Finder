(function () {
  function MovieService($http) {
    var movieList;
    var parameters;

    return {
      getMovies: getMovies,
      setMovies: setMovies,
      getParameters: getParameters,
      returnParams: returnParams
    }

    function getMovies(searchObj) {
      var baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=a420712cee91c2aec196fe700c0ceb35&sort_by=popularity.desc&include_adult=false&include_video=false&vote_count.gte=50";
      var genre = searchObj.genre;
      var minLength = searchObj.minLength;
      var maxLength = searchObj.maxLength;
      var minRating = searchObj.rating;
      console.log("hello");
      console.log(searchObj.rating);


      if (genre) {
        console.log("looping");
        genre.forEach(function(each) {
          console.log(each.id);


          var genreUrl = "&with_genres=" + each.id;
          // console.log(genreUrl);
          baseUrl += genreUrl;
          console.log(baseUrl);
        });

      }


      if (minLength >= 60) {
        var minLengthUrl = "&with_runtime.gte=" + minLength;
        baseUrl += minLengthUrl;
      }

      if (maxLength >= 180) {
        var moreThan180 = "";
        baseUrl += moreThan180;
      } else if (maxLength < 180) {
        var maxLengthUrl = "&with_runtime.lte=" + maxLength;
        baseUrl += maxLengthUrl;
      } else if (maxLength === 60) {
        var lessThan60 = "&with_runtime.lte=60";
        baseUrl += lessThan60;
      }



      if (minRating) {
        var minRatingUrl = "&vote_average.gte=" + minRating;
        baseUrl += minRatingUrl;
        console.log(baseUrl);
      }

      return $http({
        method: "GET",
        url: baseUrl
      }).then(function (response) {
        // console.log("service", response.data.results);
        movieList = response.data.results;
        console.log(movieList);
        //console.log("movie list", movieList);
      });
    }

    function setMovies() {
      return movieList;
    }

    function getParameters(parameterObject) {
    parameters = parameterObject;
    console.log(parameters);

    }

    function returnParams() {
      return parameters;
    }

  }

  angular
    .module("myApp")
    .factory("MovieService", MovieService);

})();
