$(document).ready(function() {
  $('td').each(function() {
    const containerHeight = $(this).outerHeight();
    const titleHeight = $(this).find('.event-title').outerHeight();

    if (titleHeight > containerHeight) {
      $(this).addClass('scrollable');
    }
  });
});
