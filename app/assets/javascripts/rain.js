$(document).ready(function(){

// number of drops created.
	var numberDrops = 200;

	// function to generate a random number range.
	function randRange( minNum, maxNum) {
	  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
	}

	var w = 0;

	$( window ).load( function(){
	   w = $( window ).width();
	   w=w/2;
	   
	   // Make it rain
	   createRain(w);  	 

	});

	$( window ).resize( function(){
	  if( w != $( window ).width() ){
	    w = $( window ).width();
	    w=w/2;
	    // Make it rain
     	createRain(w);
     	 
	}

	
	});

	// function to generate drops
	function createRain(w) {

		for( i=1;i<numberDrops;i++) {
		var dropLeft = randRange(0,w);
		var dropTop = randRange(-1000,600);

		$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
		$('#drop'+i).css('left',dropLeft);
		$('#drop'+i).css('top',dropTop);
		}
	}
});