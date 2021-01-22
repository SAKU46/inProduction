$(function () {

  var topHeight = $('.hero-area').height();


  // ハンバーガーボタン
  $(".hamburger-btn").click(function () {
    $('.bar').toggleClass('cross');
    $('.slide-nav').toggleClass('slide');
    $('body').toggleClass('stop');
    $(".bar").toggleClass("black");
    $(".hamburger-btn__text").toggleClass("black");
    $('.header__logo--mark').hide();
    $('.header__logo--text').hide();
    $('.logo__mark--pc').addClass('show');
    $('.logo__text--pc').addClass('show');
    $('.logo__mark--sp').addClass('show');
    $('.logo__text--sp').addClass('show');
    $(".logo__mark--pc").toggleClass("black");
    $(".logo__text--pc").toggleClass("black");
    $(".logo__mark--sp").toggleClass("black");
    $(".logo__text--sp").toggleClass("black");
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > topHeight) {
      $('.logo__mark--pc').addClass('show');
      $('.logo__text--pc').addClass('show');
      $('.logo__mark--sp').addClass('show');
      $('.logo__text--sp').addClass('show');
      $('.hamburger-btn').addClass('show');

      $('.header__nav').addClass('hide');
      $('.header__logo--mark').hide();
      $('.header__logo--text').hide();

    } else {
      $('.header__logo--mark').show('normal');
      $('.header__logo--text').show('normal');
      $('.header__nav').removeClass('hide');
      $('.logo__mark--pc').removeClass('show');
      $('.logo__text--pc').removeClass('show');
      $('.logo__mark--sp').removeClass('show');
      $('.logo__text--sp').removeClass('show');
      $('.hamburger-btn').removeClass('show');
    }
  });

  $('.intro').hide();
  $(".portfolio__intro--btn").click(function () {
    var src = $(this).parents().parents().children('.portfolio__image').attr('src');
    $('.intro__image').css('background-image', 'url(.' + src + ')');
    $('.intro').fadeIn(1000);
    $('.portfolio__wrapper').css('opacity', '0.3');
  });
  $(".intro__btn--back").click(function () {
    $('.intro').fadeOut(1000);
    $('.portfolio__wrapper').css('opacity', '1');
  });

  $('.first-view').fadeIn(500);


  // スムーススクロール
  $(".btn").click(function () {
    var target = $($(this).attr("href")).offset().top;
    target -= 70;
    $("html, body").animate({ scrollTop: target }, 1000);
    $('.bar').removeClass('cross');
    $('.slide-nav').removeClass('slide');
    $('body').removeClass('stop');
    return false;
  });
});



$(function () {
  setTimeout('ani1()', 5000); //1秒後に実行
  setTimeout('ani2()', 2000); //1秒後に実行
  setTimeout('ani3()', 4000); //1秒後に実行
});


function ani1() {
  $('.hero-area__text-area--line').addClass('slide');


}
function ani2() {
  $('.first-view').fadeOut(1000);

}
function ani3() {
  $('.curtain__sp').animate({
    left: 1000
  }, 500);
  $('.curtain__sp--second').animate({
    right: 1000
  }, 500);
}

AOS.init({
  duration: 1500,
  easing: 'ease-out-cubic',
});