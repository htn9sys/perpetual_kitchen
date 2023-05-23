$(document).ready(function() {
  $(".appliance").draggable({
    stop: function(event, ui) {
      // ドラッグ後の要素の位置をローカルストレージに保存
      localStorage.setItem(this.id, ui.position.top + ',' + ui.position.left);
    }
  });

  // ページ読み込み時に要素の位置を復元
  $(".appliance").each(function() {
    var storedPosition = localStorage.getItem(this.id);
    if (storedPosition) {
      var positions = storedPosition.split(',');
      $(this).css({ top: positions[0] + 'px', left: positions[1] + 'px' });
    }
  });
});