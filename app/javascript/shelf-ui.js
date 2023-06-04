$(function() {
  let doorOpen = false;
  let isDragging = false;

  function openDoor() {
    $(".left-door").css("transform", "rotateY(-100deg)");
    doorOpen = true;
  }

  function closeDoor() {
    $(".left-door").css("transform", "rotateY(0)");
    doorOpen = false;
  }

  $(".shelf").on('mousedown', function() {
    isDragging = false;
  });

  $(".shelf").on('mousemove', function() {
    isDragging = true;
  });

  $(".shelf").on('mouseup', function() {
    if (!isDragging && !doorOpen) {
      openDoor();
    } else if (!isDragging && doorOpen) {
      closeDoor();
    }
    isDragging = false;
  });

  $(".left-door").on('click', function(event) {
    event.stopPropagation();
    toggleDoor();
  });

  $(".shelf").on('click', function() {
    if (!isDragging && doorOpen) {
      closeDoor();
    }
  });

  $(function() {
    let maxZIndex = 1; // 最大のz-indexの初期値
  
    $(".drawer").on('click', function() {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open').addClass('closed');
        $(this).css({
          transform: 'scale(1)', // 元のサイズに戻す
          'z-index': 'auto' // z-indexをデフォルト値に戻す
        });
      } else {
        $(this).removeClass('closed').addClass('open');
        $(this).css({
          transform: 'scale(1.1)', // 拡大する
          'z-index': maxZIndex + 1 // 最前面に表示するためのz-index（現在の最大値+1）
        });
        
        maxZIndex++; // 最大のz-indexを更新
      }
    });
  });
});