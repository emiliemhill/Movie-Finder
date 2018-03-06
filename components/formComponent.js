(function() {
	var formComponent = {
    	templateUrl: `partials/form.html`,
    	controller: function($element, MovieService) {
      		var $ctrl = this;
      		//this method gathers the form object onto the model//
      		$ctrl.keysearch = function (form) {
        	console.log(form);
        	}
      		$ctrl.genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'War', 'Western'];
		    $ctrl.searchTerm;
		    //clears search field once you click outside of the drop down//
		    $ctrl.clearSearchTerm = function() {
		        	$ctrl.searchTerm = '';
		      };
		  	$element.find('input').on('keydown', function(ev) {
		        ev.stopPropagation();
        	//stopPropagation allows the search field to be used...The default event for md-select cancels keydown events//

		      })


        	}
     	}



  angular
    .module("myApp")
    .component("formComponent", formComponent)

})();
