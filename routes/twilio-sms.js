const sms = function() {

  const accountSid = process.env.TWILI0_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const customer = process.env.CUSTOMER_PHONE_NUMBER;
  const restaurant = process.env.RESTO_PHONE_NUMBER;

  const client = require('twilio')(accountSid, authToken);

  // Send an SMS to the restaurant when a customer places an order
    client.messages.create({
      to: customer,
      from: restaurant,
      body: 'You have a new order!'
    })
      .then((message) => console.log(message.said))
      .catch(e => {
        console.error(e);
        res.send(e)
      })
}

module.exports = sms;

