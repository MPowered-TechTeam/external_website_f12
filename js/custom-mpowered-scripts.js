// Custom scripts for the MPowered page - by Jeff Sallans, Praful Mathur, and Jen Eisenberg.
	
	
// ------------------------ Flip Tiles ------------------------
	
	$(document).ready(function(){
			/* The following code is executed once the DOM is loaded */
			
			$('.project').bind("click",function(){
				
				// $(this) point to the clicked .sponsorFlip element (caching it in elem for speed):
				
				var elem = $(this);
				
				// data('flipped') is a flag we set when we flip the element:
				
				if(elem.data('flipped'))
				{
					// If the element has already been flipped, use the revertFlip method
					// defined by the plug-in to revert to the default state automatically:
					
					elem.revertFlip();
					
					// Unsetting the flag:
					elem.data('flipped',false)
				}
				else
				{
					// Using the flip method defined by the plugin:
					
					elem.flip({
						direction:'lr',
						speed: 200,
						color: 'black',
						onBefore: function(){
							// Insert the contents of the .sponsorData div (hidden from view with display:none)
							// into the clicked .sponsorFlip div before the flipping animation starts:
							elem.html(elem.siblings('.projectdata').html());
						}
					});
					
					// Setting the flag:
					elem.data('flipped',true);
				}
			});
			
		});
		
// ------------------------ Sticky NavBar ------------------------		
		
		$(function() {
			 
				// grab the initial top offset of the navigation 
				var sticky_navigation_offset_top = $('#sticky_navigation').offset().top;
				 
				// our function that decides weather the navigation bar should have "fixed" css position or not.
				var sticky_navigation = function(){
					var scroll_top = $(window).scrollTop(); // our current vertical position from the top
					 
					// if we've scrolled more than the navigation, change its position to fixed to stick to top,
					// otherwise change it back to relative
					if (scroll_top > sticky_navigation_offset_top) { 
						$('#sticky_navigation').css({ 'position': 'fixed', 'top':0, 'left':0 });

					} else {
						$('#sticky_navigation').css({ 'position': 'relative' }); 
					}


					$('#home').removeClass('selected')
					$('#who').removeClass('selected')
					$('#projects').removeClass('selected')
					$('#people').removeClass('selected')
					$('#involved').removeClass('selected')

					if (scroll_top > $('#scrollto1').offset().top && scroll_top < $('#scrollto2').offset().top) {
						$('#home').addClass('selected')
						//function to change class of scrollto1 to selected
					}

					if (scroll_top > $('#scrollto2').offset().top && scroll_top < $('#scrollto3').offset().top) {
						$('#who').addClass('selected')
						//function to change class of scrollto1 to selected
					}
					if (scroll_top > $('#scrollto3').offset().top && scroll_top < $('#scrollto4').offset().top) {
						$('#projects').addClass('selected')
						//function to change class of scrollto1 to selected
					}
					if (scroll_top > $('#scrollto4').offset().top && scroll_top < $('#scrollto5').offset().top) {
						$('#people').addClass('selected')
						//function to change class of scrollto1 to selected
					}
					if (scroll_top > $('#scrollto5').offset().top) {
						$('#involved').addClass('selected')
						//function to change class of scrollto1 to selected
					}


				};
				 
				// run our function on load
				sticky_navigation();
				 
				// and run it again every time you scroll
				$(window).scroll(function() {
					 sticky_navigation();
				});
			 
		});
		
// ------------------------ Misc Page Load Functions ------------------------			
		
$(document).ready(function()
{
	$('#scrollanimate').localScroll({duration:800});
	$('.person').tooltip();
	$('.instruction-grid').hide();
	$('.show_recruitment').click(function() {
		$('.instruction-grid').show('slide');
	});
});