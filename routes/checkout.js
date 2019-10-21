// Orders Routes

module.exports = function(router, database) {
  // Get the order of a customer (customer-facing)
  router.get('/orders/:id', (req, res) => {
    database.getAnOrder(req.query)
    .then(order => res.send({order}))
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });

  // Post route

  router.post('/', (req, res) => {

  })
  // Get all the orders for your restaurant (restaurant-facing)
  router.get('/orders', (req, res) => {
    database.getAllOrders(req.query)
    .then(orders => res.send({orders}))
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });

}
