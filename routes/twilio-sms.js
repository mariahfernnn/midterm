module.exports = function(router) {

  const accountSid = 'AC6b4c066e19243197a0f9c89e8b820948';
  const authToken = '46aed9184dfb1b8a050a8ac27057aa2a';

  const client = require('twilio')(accountSid, authToken);

  // Send an SMS to the restaurant
  router.get('/', (req, res) => {
    client.messages.create({
      to: '4169033107', //user phone number currently temp
      from: '+16476948924',
      body: 'You have a new order!'
      .then((message) => console.log(message.said))
      .catch(e => {
        console.error(e);
        res.send(e)
      })
    })
  })
  return router;
}

