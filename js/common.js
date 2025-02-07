$(document).ready(function () {


    $('.mgnb_bg').hide();
    $('.mgnb_wrap').hide();
  
    $('.menu-trigger').click(function () {
      $('.mgnb_bg').fadeIn();
      $('.mgnb_wrap').slideDown();
    });
  
  
    $('#header .mgnb_wrap .close').click(function () {
      $('.mgnb_bg').fadeOut();
      $('.mgnb_wrap').slideUp();
    });
  
  
    $('#header .mgnb li').click(function () {
      $('.mgnb_bg').fadeOut();
      $('.mgnb_wrap').fadeOut();
    });
  
  
  
  
  
  
    //�ㅽ겕濡� �� fix class濡� 諛붾�뚮뒗 //
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 700) {
        $('#header').addClass('fix');
        $("#header .inner").css({
          "border": "none"
        });
      }
      else {
        $('#header').removeClass('fix');
        $("#header .inner").css({
          "border-bottom": "1px solid #000"
        });
      }
    })
  
  
    $('.button_posi p').hide();
  
    $('.grid_depth li').mouseenter(function () {
      $(this).find('.button_posi p').fadeIn();
    });
    $('.grid_depth li').mouseleave(function () {
      $(this).find('.button_posi p').fadeOut();
    });
  
  
  
    $('#web_project .content_wrap .button_txt').hide();
  
    $('#web_project li').mouseenter(function () {
      $(this).find('.button_txt').fadeIn();
    });
    $('#web_project li').mouseleave(function () {
      $(this).find('.button_txt').fadeOut();
    });
  
  
    $('#about_me .progress_bar').hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1100) {
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
  
  
  
  });
  
  