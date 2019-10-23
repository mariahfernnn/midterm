// Using jQuery's document ready function to ensure script loads after the document is ready

// This function will create a list of restaurants
$("document").ready(function() {
const createRestaurantList = function(restaurantObject) {
  const HTMLmarkup = `
  <article class="testingRestObj">
                <div>
                <span class="restaurant">${restaurantObject.name}</span>
                </div>
            </article>`
            return HTMLmarkup;
}

const renderRestaurants = function(restaurants) {
  for (let eachRestaurant of restaurants) {
    console.log('eachRestuarant', eachRestaurant);
    const $restaurant = createRestaurantList(eachRestaurant);
    $('#restaurantsList1').append($restaurant);
  }
}
// Using jQuery's document ready function to ensure script loads after the document is ready

// This function will create a list of menu items
$("document").ready(function() {
  const createMenuList = function(menuObject) {
    const HTMLmarkup = `
    <article class="testingMenuObj">
                  <div class="restaurant">${menuObject.name}</div>
                  <div class="restaurant">${menuObject.price}</div>
                  <div class="restaurant">${menuObject.description}</div>
              </article>`
              return HTMLmarkup;
  }

  const renderMenu1 = function(menus) {
    for (let eachMenu of menus) {
      console.log('eachMenus', eachMenu);
      const $menu = createMenuList(eachMenu);
      $('#menuItems1').append($menu);
    }
  }
  const renderMenu2 = function(menus) {
    for (let eachMenu of menus) {
      console.log('eachMenus', eachMenu);
      const $menu = createMenuList(eachMenu);
      $('#menuItems2').append($menu);
    }
  }
  const renderMenu3 = function(menus) {
    for (let eachMenu of menus) {
      console.log('eachMenus', eachMenu);
      const $menu = createMenuList(eachMenu);
      $('#menuItems3').append($menu);
    }
  }


// GET REQUEST for restaurants
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

  // GET REQUEST for menus
  const loadMenuItems = async () => {
    try{
      const response = await $.ajax({
        url: `/api/menus`,
        type: 'GET',
        dataType: 'JSON'
      })
      console.log('fetching api for menus', response);
      renderMenu1(response);
      renderMenu2(response);
      renderMenu3(response);
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

    console.log("FUNC")
    $('#orderForm').submit(function (e) {
      e.preventDefault();
      console.log("Checkout button CLIKECED");
      $.post(`/api/orders`, {
        restaurantName: $('#restaurantName').val(),
        userName: $('#userName').val(),
        eachItem: $('#itemOrdered').val(),
        eachItemQuantity: $('#eachItemQuantity').val(),
        totalAmount: $('#totalAmount').val()
      })
    })


  $('#Resturants').click(function (e) {
    e.preventDefault();
  });
  loadRestaurants();
  loadMenuItems();

});
});
