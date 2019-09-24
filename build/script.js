$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
  $(".zoom").hover(function(){
		
	$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
  });
  
  $(".fa-bell").click(function(){
    $(".notification").toggle(1000);
    });
  
   $("#slideshow > div:gt(0)").hide();

  setInterval(function() { 
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  3000);
});
   