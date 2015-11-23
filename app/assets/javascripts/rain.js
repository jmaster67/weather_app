$(document).ready(function(){

	// number of drops created.
	var numberDrops = 200;

	// function to generate a random number range.
	function randRange( minNum, maxNum) {
	  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
	}

	// Making rain half the screen

	var w = 0;

	$( window ).load( function(){
	   w = $( window ).width();
	   w=w/2;
	   
	   // Make it rain
	   createRain(w);  	 
	});

	// Making rain half the screen after it has been resized

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

			// Drop generation range width-based

			var dropLeft = randRange(0,w);

			// Drop generation range hight-based

			var dropTop = randRange(-1000,600);

			// Drop placement
			
			$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
			$('#drop'+i).css('left',dropLeft);
			$('#drop'+i).css('top',dropTop);
		}
	}
});