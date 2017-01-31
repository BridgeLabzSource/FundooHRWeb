/**
 * @description:used for toggling  the sidebar
 */
$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('#wrapper').toggleClass('toggled');
  });
$("#menu-toggle").click(function(e) {
       e.preventDefault();
     $("#wrapper").toggleClass("toggled");
      });

});

    
