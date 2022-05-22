var push = require('web-push');

let vapidKeys = {
    publicKey: 'BPhuBwBqcIm6L0jWrHed_Uz2ZVbDRR6y6WpnnEVRl9bjF2vyGp-vVbE1QRSz0abfMXblnL_EWefPM_ZFa-EgIWQ',
    privateKey: 'vnHC5hBw_pOmpBwn3LlcN3ysQW2I1S8iYBs5NxRHF20'
}

push.setVapidDetails('mailto:brookgm2@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)
let sub = 
{"endpoint":"https://fcm.googleapis.com/fcm/send/cEOQlPhbH1c:APA91bEXBdmPt03k7I8wxIy_K04TuRFob_iLkAL8UbScTFd6lSmmOW_4beKryZfeqdQwr9tg7NLPppPc-1WslfhM9Shf3WNb0qm89pzrk3ddol3PurlVla8ulGuDXJSpYtt0hUgdlwRQ","expirationTime":null,"keys":{"p256dh":"BORbdj9HeBp0I0zykmQ9FP4OkONOcnWZVkjI6KiIV3Vp0DBae3AXgQgGTvEEvSn_2RAfdYzp6O0Phbb1V5B3gLs","auth":"K788V35Hbr_J1pe4Cie_pA"}}
push.sendNotification(sub, 'test message')