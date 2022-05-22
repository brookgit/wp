var push = require('web-push');

let vapidKeys = {
    publicKey: 'BPhuBwBqcIm6L0jWrHed_Uz2ZVbDRR6y6WpnnEVRl9bjF2vyGp-vVbE1QRSz0abfMXblnL_EWefPM_ZFa-EgIWQ',
    privateKey: 'vnHC5hBw_pOmpBwn3LlcN3ysQW2I1S8iYBs5NxRHF20'
  }

  push.setVapidDetails('mailto:brookgm2@gmail.com', vapidKeys.publicKey,vapidKeys.privateKey)
 let sub = {};
  push.sendNotification(sub, 'test message')