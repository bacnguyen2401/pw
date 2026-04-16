var push = require('web-push')

let vapidKeys = {
  publicKey: 'BHCYvhBbkasdPeDcZ-iPdf8Bd69ONTzpjXcpiw_7oSGFt2eP80TwyOtsX62sXAiVP_wx84KVH7RqbxvsXe5wM6M',
  privateKey: 'QFq_6dYKYSFrakeFHGazl1oic8gVBYTfCt8DpyMH4Vo'
}

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub , 'test message')