$(function() {
  $(".refrigerator").draggable({
    containment: ".slide-container", // 行動範囲を .slide-container 内に制限
    stop: function(event, ui) {
      // ドラッグ後の要素の位置をローカルストレージに保存
      localStorage.setItem(this.id, ui.position.top + ',' + ui.position.left);
    }
  });

  // ページ読み込み時に要素の位置を復元
  $(".refrigerator").each(function() {
    let storedPosition = localStorage.getItem(this.id);
    if (storedPosition) {
      let positions = storedPosition.split(',');
      $(this).css({ top: positions[0] + 'px', left: positions[1] + 'px' });
    }
  });
  // 冷蔵庫のレイアウト

  let doorOpen = false;
  let isDragging = false;
  
  $(".refrigerator .door").on('click', function(event) {
    if (isDragging) {
      event.stopPropagation();
    } else {
      if (doorOpen) {
        $(this).css("transform", "rotateY(0)");
        doorOpen = false;
      } else {
        $(this).css("transform", "rotateY(-90deg)");
        doorOpen = true;
      }
    }
  });
  
  $(".refrigerator").on('click', function(event) {
    if ($(event.target).hasClass('door')) {
      event.stopPropagation();
    } else {
      if (doorOpen) {
        $(this).find('.door').css("transform", "rotateY(0)");
        doorOpen = false;
      } else {
        event.stopPropagation();
      }
    }
  });
});
