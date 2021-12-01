$('.accord li h3').click(function () {
    $(this).next(".accord-content").slideToggle();
    $(this).parent().find('.arrow').toggleClass('arrow-animate');
    
    $(this).closest("li").siblings().find('.accord-content').slideUp();
   
    

});
