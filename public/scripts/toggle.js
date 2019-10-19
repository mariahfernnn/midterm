//toggle for cuisine (button 2)
$(document).ready(function () {
  $('#Cuisine').click(function () {
    $('#food').toggle(1000);
  });
});

//toggle for resturants (button 3)
$(document).ready(function () {
  $('#Resturants').click(function () {
    $('.resturants').toggle(1000);
  });
});