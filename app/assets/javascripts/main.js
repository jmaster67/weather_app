
$(document).ready(function(){
	// $(".rain, .pulse, .sun").show();
	// $("#locationText").hide();
	// $("form").hide();
	// $("#buttonsAll").hide();
	// $("#login-button").hide();

	


	$(".frontButton").on("click", function() {

	  $(".rain, .pulse, .sun, .frontButton").hide();
	 
	  window.location.href = '/home/new';
	});	

	$.getJSON("http://ip-api.com/json/?fields=lat,lon", function(data) {
            var table_body = "";
            $.each(data, function(k, v) {
                table_body += "<tr><td>" + k + "</td><td><b>" + v + "</b></td></tr>";
            });
            $("#GeoResults").html(table_body);
    });
});