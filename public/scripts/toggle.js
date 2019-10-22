
//toggle for cuisine (button 2)
$(document).ready(function () {
  $('#Cuisine').click(function () {
    $('html, body').animate({
      scrollTop: $("#food").offset().top
    }, 2000);
  });
});

//toggle for restaurants (button 3)
$(document).ready(function () {
  $('#Restaurants').click(function () {
    $('html, body').animate({
      scrollTop: $(".restaurants").offset().top
    }, 2000);
  });
});

$(document).ready(function () {
  $('#BackToHome').click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

$(document).ready(function () {
  $('#checkout').click(function () {
    $('#checkoutToggle').toggle(1000)
  })
});
