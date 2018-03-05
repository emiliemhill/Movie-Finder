(function() {
	var formComponent = {
    	templateUrl: `partials/form.html`,
    	controller: function() {
      		var $ctrl = this;
      		$ctrl.keysearch = function (form) {
        	console.log(form);
        	$ctrl.genreCtrl = function($element){
        		$ctrl.genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'War', 'Western'];
		      	$ctrl.searchTerm;
		      	$ctrl.clearSearchTerm = function() {
		        	$ctrl.searchTerm = '';
		      };
		      // The md-select directive eats keydown events for some quick select
		      // logic. Since we have a search input here, we don't need that logic.
		      $element.find('input').on('keydown', function(ev) {
		          ev.stopPropagation();
		      });
    
        	}
     	}
    }
}

  angular
    .module("myApp")
    .component("formComponent", formComponent)

})();
