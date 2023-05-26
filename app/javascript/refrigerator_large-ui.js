$(function() {
  let leftDoorOpen = false;
  let rightDoorOpen = false;
  let isDragging = false;

  $(".refrigerator_large .door-left").on('click', function(event) {
    if (isDragging) {
      event.stopPropagation();
    } else {
      let $leftDoor = $(this);
      if (leftDoorOpen) {
        $leftDoor.css("transform", "rotateY(0)");
        leftDoorOpen = false;
      } else {
        $leftDoor.css("transform", "rotateY(-90deg)");
        leftDoorOpen = true;
      }
    }
  });

  $(".refrigerator_large .door-right").on('click', function(event) {
    if (isDragging) {
      event.stopPropagation();
    } else {
      let $rightDoor = $(this);
      if (rightDoorOpen) {
        $rightDoor.css("transform", "rotateY(0)");
        rightDoorOpen = false;
      } else {
        $rightDoor.css("transform", "rotateY(90deg)");
        rightDoorOpen = true;
      }
    }
  });

  $(".refrigerator_large").on('click', function(event) {
    if ($(event.target).hasClass('door-left') || $(event.target).hasClass('door-right')) {
      event.stopPropagation();
    } else {
      if (leftDoorOpen) {
        $(this).find('.door-left').css("transform", "rotateY(0)");
        leftDoorOpen = false;
      }
      if (rightDoorOpen) {
        $(this).find('.door-right').css("transform", "rotateY(0)");
        rightDoorOpen = false;
      }
    }
  });

  // 要素の拡大・縮小アニメーション
  $(".ice-left, .ice-right, .vegetable-compartment, .freezer-compartment").on("click", function() {
    $(this).toggleClass("enlarge");
  });
});