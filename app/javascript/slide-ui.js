$(function() {
  $().draggable({
    stop: function(event, ui) {
      // ドラッグ後の要素の位置をローカルストレージに保存
      localStorage.setItem(this.id, ui.position.top + ',' + ui.position.left);
    }
  });

  // ページ読み込み時に要素の位置を復元
  $().each(function() {
    var storedPosition = localStorage.getItem(this.id);
    if (storedPosition) {
      var positions = storedPosition.split(',');
      $(this).css({ top: positions[0] + 'px', left: positions[1] + 'px' });
    }
  });
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
