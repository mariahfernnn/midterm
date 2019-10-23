const sms = function() {
  console.log("Running sms function")

  const accountSid = 'AC0064f54265c5e13e2392866af57c21ca';
  const authToken = '1c743935a9974cb99fb5b6fee46a405e';

  const client = require('twilio')(accountSid, authToken);

  // Send an SMS to the restaurant
    client.messages.create({
      to: '4169033107', //user phone number currently temp
      from: '++16476973730',
      body: 'You have a new order!'
    })
      .then((message) => console.log(message.said))
      .catch(e => {
        console.error(e);
        res.send(e)
      })
}

module.exports = sms;

