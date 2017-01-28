$(document).ready(function () {
  /**
   * This part "highlights the anchor tag " functionality
   * use the jQuery function scroll() to recalculate our variables as the
   * page is scrolled
   */
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    //console.log(cur_pos);
    $('section').each(function () {
      // each section is checked for cursor position
      var top = $(this).offset().top - 180,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        // console.log($(this).attr('id'))
        $('.alphabets li a').removeClass('active'); //removes active class from all anchor tags
        //$(this).addClass('active');
        $('.alphabets li .' + $(this).attr('id')).addClass('active'); //adds active class for particular section anchor tag
      }
    });
  });
  /**
   * This part does the "fixed anchor after scroll" functionality
   * use the jQuery function scroll() to recalculate our variables as the
   * page is scrolled/
   */
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 75;
    var div_top = $('.display').offset().top;
    if (window_top > div_top) {
      $('.anchor').addClass('stick');//scrolls upward and gets position fixed
    } else {
      console.log("removing stick")
      $('.anchor').removeClass('stick');
    }
  });
});
