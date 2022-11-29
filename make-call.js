import dotenv from 'dotenv';

dotenv.config()

var accountSid = process.env.TWILIO_ACCOUNT_SID
var authToken = process.env.TWILIO_AUTH_TOKEN

import twilio from 'twilio';

var client = new twilio(accountSid, authToken);



client.calls.create({
    twiml: '<Response><Say>Ahoy World</Say></Response>',
    to: process.env.my_number,
    from: process.env.number
}).then(call => console.log(call.sid));