// Using jQuery's document ready function to ensure script loads after the document is ready

// This function will create a list of restaurants
$("document").ready(function() {

const createRestaurantList = function(restaurantObject) {
  const HTMLmarkup = `
  <article class="testing">
              <header>
                <div>
                <span id="restaurantsList">${restaurantObject.name}</span>
                </div>
            </article>`
            return HTMLmarkup;
}

const renderRestaurants = function(restaurants) {
  for (let eachRestaurant of restaurants) {
    console.log('eachRestuarant', eachRestaurant);
    const $restaurant = createRestaurantList(eachRestaurant);
    $('#restaurantsList').append($restaurant);
  }
}

const submitAnOrder = function() {

}

// GET REQUEST
  const loadRestaurants = async () => {
    try{
      const response = await $.ajax({
        url: `/api/restaurants`,
        type: 'GET',
        dataType: 'JSON'
      })
      console.log('fetching api for restaurants', response);
      renderRestaurants(response);
    } catch (error) {
      console.error(error);
    }
  }

  // THE POST REQUEST
  const createOrder = async () => {
    try{
      const response = await $.ajax({
        url: `/api/orders`,
        type: 'POST',
        data: 'JSON'
      })
      console.log('POSTING ORDER TO THE DATABASE', response);
    } catch (error) {
      console.error(error);
    }
  }
    $('#orderForm').submit(function (e) {
      e.preventDefault();
      console.log("button CLIKECED");
      console.log($('#totalAmount').val());
      console.log($('#eachItem').val());
      console.log($('#eachItemQuantity').val());
      $.post(`/api/orders`, {
        totalAmount: $('#totalAmount').val(),
        eachItem: $('#eachItem').val(),
        eachItemQuantity: $('#eachItemQuantity').val()
      })
    })


  $('#Resturants').click(function (e) {
    e.preventDefault();
  });
  loadRestaurants();

});
