jQuery(document).ready(function() {
	
	jQuery.ajax({url:"http://localhost:3000/echo",
				 success:function(data) {
				 	jQuery("body").html(data.somestring);
				 },
				 data:{somestring:"This is the sent value"},
				 type:"GET",
				 dataType:'JSONP'});

});
