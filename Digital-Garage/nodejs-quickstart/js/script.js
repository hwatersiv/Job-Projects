$(function() {
  
  var tabContainers = $('.what-you-pay-tabs-all > .what-you-pay');

    $('.what-you-pay-tabs ul li a').click(function () {
        event.preventDefault();
        tabContainers.hide();
        tabContainers.filter(this.hash).fadeIn(1000);
      
        $('.tabs-item').removeClass('active');
        $(this).addClass('active animated zoomIn');
        return false;
    });

});