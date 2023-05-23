$(function() {
  let slideContainer = $('.slide-container');
  let slides = $('.slide');
  let slideWidth = $('.kitchen-container').width();
  let totalSlides = slides.length;
  let currentSlide = 0;

  // 初期スライド位置の調整
  slideContainer.css('transform', 'translateX(0)');

  // スライドを切り替える関数
  function switchSlide() {
    let translateX = -slideWidth * currentSlide;
    slideContainer.css('transform', 'translateX(' + translateX + 'px)');
  }

  // 前のスライドを表示するイベントリスナー
  $('.slide-control.left').click(function() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    }
    switchSlide();
  });

  // 次のスライドを表示するイベントリスナー
  $('.slide-control.right').click(function() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }
    switchSlide();
  });

  // レスポンシブ対応
  $(window).on('resize', function() {
    slideWidth = $('.kitchen-container').width();
    let translateX = -slideWidth * currentSlide;
    slideContainer.css('transform', 'translateX(' + translateX + 'px)');
  });
});
