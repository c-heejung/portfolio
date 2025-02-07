
// skills 애니메이션
$('#about_me .progress_bar').hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 2700) {
    $('#about_me .progress_bar').fadeIn();
    $('#about_me .bar1 , #about_me .bar2').animate({
      width: '95%'
    }, 1000);
    $('#about_me .bar3').animate({
      width: '80%'
    }, 1000);
    $('#about_me .bar4').animate({
      width: '70%'
    }, 1000);
    $('#about_me .bar5').animate({
      width: '80%'
    }, 1000);
  }
});