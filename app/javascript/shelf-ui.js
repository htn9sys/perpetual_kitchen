$(function() {
  let doorOpen = false;
  let isDragging = false;

  $(".shelf, .left-door").on('click', function(event) {
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

  $(".shelf").draggable({
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

  $(".left-door").draggable({
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
});
