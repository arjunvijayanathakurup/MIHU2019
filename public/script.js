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
});
   