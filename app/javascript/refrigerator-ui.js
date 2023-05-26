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
