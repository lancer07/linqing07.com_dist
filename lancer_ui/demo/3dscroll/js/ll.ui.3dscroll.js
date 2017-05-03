// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// The file is an easy-to-use javascript ui library.
// Version: 1.0.0
// Author: Lancer Lin
// Website: www.linqing07.com/lancer_ui/catalog/index.html
// Email: lancer07@139.com , lancer07@126.com
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
if(typeof ll !== 'object'){ 
	var ll = {};
	ll.ui = {};
}
ll.ui.scroll3d = function(el) {
	var deg=0;
	/* Storing all the images into a variable */
	var images	= $(el).find('img').removeClass('default').addClass('animationReady');
	var dim		= { width:images.width(),height:images.height()};
	
	var cnt = images.length;
	
	/* Finding the centers of the animation container: */
	var centerX = $(el).find('.stage').width()/2;
	var centerY = $(el).find('.stage').height()/2 - dim.height/2;

	function rotate(step,total){
		// This function loops through all the phone images, and rotates them
		// with "step" degrees (10 in this implementation) until total has reached 0
	
		/* Increment the degrees: */
		deg+=step;
		
		var eSin,eCos,newWidth,newHeight,q;
		
		/* Loop through all the images: */
		for(var i=0;i<cnt;i++){
			
			/* Calculate the sine and cosine for the i-th image */
			
			q = ((360/cnt)*i+deg)*Math.PI/180;
			eSin		= Math.sin(q);
			eCos		= Math.cos(q);
			
			/*
			/	With the sine value, we can calculate the vertical movement, and the cosine 
			/	will give us the horizontal movement.
			*/
			
			q = (0.6+eSin*0.4);
			newWidth	= q*dim.width;
			newHeight	= q*dim.height;
			
			/*
			/	We are using the calculated sine value (which is in the range of -1 to 1)
			/	to calculate the opacity and z-index. The front image has a sine value
			/	of 1, while the backmost one has a sine value of -1.
			*/
			
			images.eq(i).css({
				top			: centerY+15*eSin,
				left		: centerX+200*eCos,
				opacity		: 0.8+eSin*0.2,
				marginLeft	: -newWidth/2,
				zIndex		: Math.round(80+eSin*20)
			}).width(newWidth).height(newHeight);
		}

		total-=Math.abs(step);
		if(total<=0) return false;
		
		// Setting the function to be run again in 40 seconds (equals to 25 frames per second):
		setTimeout(function(){rotate(step,total)},40);
	
	}
	
	// Running the animation once at load time (and moving the iPhone into view):
	rotate(10,360/cnt);
	
	$(el).find('.previous').click(function(){
		// 360/cnt lets us distribute the phones evenly in a circle
		rotate(-10,360/cnt);
	});
	
	$(el).find('.next').click(function(){
		rotate(10,360/cnt);
	});
}
