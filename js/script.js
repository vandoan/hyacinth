
 




// Document ready function
$(document).ready(function(){

	// Cache the Window object
	$window = $(window);

	// Cache the Y offset and the speed of each sprite
	$('[data-type]').each(function() {	
		$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
		$(this).data('Xposition', $(this).attr('data-Xposition'));
		$(this).data('speed', $(this).attr('data-speed'));
	});

	// For each element that has a data-type attribute
	$('section[data-type="background"]').each(function(){


		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;

		// When the window is scrolled...
	    $(window).scroll(function() {

			// If this section is in view
			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
				 ( (topOffset + $self.height()) > $window.scrollTop() ) ) {

				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = -($window.scrollTop() / $self.data('speed')); 

				// If this element has a Y offset then add it on
				if ($self.data('offsetY')) {
					yPos += $self.data('offsetY');
				}

				// Put together our final background position
				var coords = '50% '+ yPos + 'px';

				// Move the background
				$self.css({ backgroundPosition: coords });

				// Check for other sprites in this section	
				$('[data-type="sprite"]', $self).each(function() {

					// Cache the sprite
					var $sprite = $(this);

					// Use the same calculation to work out how far to scroll the sprite
					var yPos = -($window.scrollTop() / $sprite.data('speed'));					
					var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';

					$sprite.css({ backgroundPosition: coords });													

				}); // sprites

				// Check for any Videos that need scrolling
				$('[data-type="video"]', $self).each(function() {

					// Cache the video
					var $video = $(this);

					// There's some repetition going on here, so 
					// feel free to tidy this section up. 
					var yPos = -($window.scrollTop() / $video.data('speed'));					
					var coords = (yPos + $video.data('offsetY')) + 'px';

					$video.css({ top: coords });													

				}); // video	

			}; // in view

		}); // window scroll

	});	// each data-type

}); // document ready


 $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('li').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#whale a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('li').removeClass("active");
             $(this).addClass("active");
        }
        
    });

}

 $(function(){
          //When an <li> element in your myMenu area is clicked
          $('#whale li').click(function() {
                //Removes the active class from any <li> elements
                $('#whale li.active').removeClass('active');
                //Adds it to the current element
                $(this).addClass('active');

         });
     });



function adjustWindow(){
     
    // Get window size
    winH = $window.height();
    winW = $window.width();
     
    // Keep minimum height 550
    if(winH <= 550) {
        winH = 550;
    }
     
    // Init Skrollr for 768 and up
    if( winW >= 768) {
 
        // Init Skrollr
        var s = script.init({
            forceHeight: false
        });
 
        // Resize our slides
        $slide.height(winH);
 
        s.refresh($('.homeSlide'));
 
    } else {
 
        // Init Skrollr
        var s = script.init();
        s.destroy();
    }
 
    // Check for touch
    if(Modernizr.touch) {
 
        // Init Skrollr
        var s = script.init();
        s.destroy();
    }
 
}


