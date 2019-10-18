const accountSid = 'AC6b4c066e19243197a0f9c89e8b820948';
const authToken = '46aed9184dfb1b8a050a8ac27057aa2a';

const client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: '', //user phone number currently temp
  from: '+16476948924',
  body: 'this is a text from Carol!'
})
  .then((message) => console.log(message.said))