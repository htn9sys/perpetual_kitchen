$(document).ready(function() {
  $(".icon-button button").on("mouseenter", function() {
    $(this).css({
      transform: "translate(-3px, -3px) scale(1.05)",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
    });
  });

  $(".icon-button button").on("mouseleave", function() {
    $(this).css({
      transform: "none",

    });
  });

  $(".icon-button button").on("mousedown", function() {
    $(this).css({
      transform: "translate(3px, 3px) scale(0.95)"
    });
  });

  $(".icon-button button").on("mouseup", function() {
    $(this).css({
      transform: "none"
    });
  });
});