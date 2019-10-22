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

// Implementing Twilio - Place order button in the checkout
$(document).ready(function () {
  // const twilio = require('./twilio-sms');
  $('#place-order').click(function () {
    console.log("Someone has placed an order!")
    // return twilio;
  })
});


