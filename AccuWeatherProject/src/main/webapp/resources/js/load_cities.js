/**
 * dynamically populates the cities from cities.properties file
 */
$(function(){
	  jQuery.ajax({
	    url: "resources/cities.properties"
	  }).done(function(data){
	    var options = data.split(/\n/);
	    $('select[name="city"]').html('').append('<option value=1>Select city</option>');	   
	    for (i=0; i<options.length; i++) {	     
	      var optionVal = options[i].split('=').pop().replace(';', "");
	      $('select[name="city"]').append('<option value="'+ optionVal +'">'+ optionVal +'</option>');
	    }
	  })

	});