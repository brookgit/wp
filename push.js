var push = require('web-push');

let vapidKeys = {
    publicKey: 'BPhuBwBqcIm6L0jWrHed_Uz2ZVbDRR6y6WpnnEVRl9bjF2vyGp-vVbE1QRSz0abfMXblnL_EWefPM_ZFa-EgIWQ',
    privateKey: 'vnHC5hBw_pOmpBwn3LlcN3ysQW2I1S8iYBs5NxRHF20'
}

push.setVapidDetails('mailto:brookgm2@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)
let sub = 
{"endpoint":"https://fcm.googleapis.com/fcm/send/eM2PrwXqtlc:APA91bGg_H0LE5Yib6aP_RtX0U6vUh9728diTnXcSttRPprPAI6XHqRd0J-sVNdSSCfwtztfWEF5sGPVp27rr-jpH3YXNqElCu7zMZBHs86ZKp9xluoIxYRXxRWwwoBkdPdmiUn-_c0T",
"expirationTime":null,
"keys":{"p256dh":"BKbLWcJ8gQHOzjHCZqSoLyVntOo-JPYgKA6Cmvy6gehPvPKD3538ZRJGlTSE2x-FzE_nDdwdtDQ7rP8SbdDCreY",
"auth":"OH4UOoA1-zHgGy2nLWLNOA"}}
push.sendNotification(sub, 'test message')