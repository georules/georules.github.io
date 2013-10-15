$(document).ready(function () {
  $('.scroll').click(function() {
    targetName = $(this).attr('data-href');
    targetLocation = $(targetName).offset().top - $('.navbar').height();
    $('html, body').animate({scrollTop:targetLocation}, 'slow');
    return false;
  });
});
