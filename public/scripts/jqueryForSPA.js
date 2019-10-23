// Using jQuery's document ready function to ensure script loads after the document is ready

// This function will create a list of restaurants
$("document").ready(function () {
  const createRestaurantList = function (restaurantObject) {
    const HTMLmarkup = `
  <article class="testingRestObj">
                <div>
                <span class="restaurant">${restaurantObject.name}</span>
                </div>
            </article>`
    return HTMLmarkup;
  }

  const renderRestaurants = function (restaurants) {
    for (let eachRestaurant of restaurants) {
      console.log('eachRestuarant', eachRestaurant);
      const $restaurant = createRestaurantList(eachRestaurant);
      $('#restaurantsList1').append($restaurant);
    }
  }
  // Using jQuery's document ready function to ensure script loads after the document is ready

  // This function will create a list of menu items
  const createMenuList = function (menuObject) {
    const HTMLmarkup = `
    <article class="testingMenuObj" data-restaurantId = ${menuObject.id}>
                  <div id="restaurant_${menuObject.id}">${menuObject.name}</div>
                  <div class="restaurant">${menuObject.price}</div>
                  <div class="restaurant">${menuObject.description}</div>
              </article>`
    return HTMLmarkup;
  }

  const renderMenu1 = function (menus) {
    for (let eachMenu of menus) {
      console.log('eachMenus', eachMenu);
      const $menu = createMenuList(eachMenu);
      $('#menuItems1').append($menu);
    }
  }
  const renderMenu2 = function (menus) {
    for (let eachMenu of menus) {
      // console.log('eachMenus', eachMenu);
      const $menu = createMenuList(eachMenu);
      $('#menuItems2').append($menu);
    }
  }
  const renderMenu3 = function (menus) {
    for (let eachMenu of menus) {
      // console.log('eachMenus', eachMenu);
      const $menu = createMenuList(eachMenu);
      $('#menuItems3').append($menu);
    }
  }


  // GET REQUEST for restaurants
  const loadRestaurants = async () => {
    try {
      const response = await $.ajax({
        url: `/api/restaurants`,
        type: 'GET',
        dataType: 'JSON'
      })
      renderRestaurants(response);
    } catch (error) {
      console.error(error);
    }
  }

  // GET REQUEST for menus
  const loadMenuItems = async () => {
    try {
      const response = await $.ajax({
        url: `/api/menus`,
        type: 'GET',
        dataType: 'JSON'
      })
      const menus = JSON.parse(response);
      renderMenu1(menus.menu1);
      renderMenu2(menus.menu2);
      renderMenu3(menus.menu3);
    } catch (error) {
      console.error(error);
    }
  }

  // THE POST REQUEST
  const createOrder = async () => {
    try {
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
      // menuItemsArray: [{
      //   id: quantity
      //   id: qty,
      // }]
    })
  })


  $('#Resturants').click(function (e) {
    e.preventDefault();
  });
  loadRestaurants();
  loadMenuItems();


});
