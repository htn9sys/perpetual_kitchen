$(function() {
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

  $(".refrigerator").draggable({
    start: function() {
      isDragging = true;
    },
    stop: function() {
      isDragging = false;
      const id = $(this).attr('id');
      const left = $(this).css('left');
      const top = $(this).css('top');
      const zIndex = $(this).css('z-index');
      localStorage.setItem(id + "_left", left);
      localStorage.setItem(id + "_top", top);
      localStorage.setItem(id + "_zIndex", zIndex);
    }
  });

  $('#refrigerator').each(function() {
    const left = localStorage.getItem($(this).attr('id') + "_left");
    const top = localStorage.getItem($(this).attr('id') + "_top");
    const zIndex = localStorage.getItem($(this).attr('id') + "_zIndex");
    if (left && top && zIndex) {
      $(this).css({ left: left + "px", top: top + "px", 'z-index': zIndex });
    }
  });
});
