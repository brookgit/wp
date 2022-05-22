const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const publicVapidKey = 'BKZG6Ibf1BWqFp9Hxr7D4K3lZuSzMQ9tPgGnCZVB5wgL-tRZs6VnWJenXF8GYxYJ402QLqofcNQ5wX2W15YN_Qs';
const privateVapidKey = '7LstBTRoslxbXNir1Mp5OVU8uX3VL8xYlOpXNxLZ4dM';

webpush.setVapidDetails('mailto:brookgm2@gmail.com', publicVapidKey,publicVapidKey);


const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"client")));
app.post('/subscribe', (req, res) => {
const subscription = req.body;
res.status(201).json({})
const payload = JSON.stringify({title: 'Section.io Push Notification'});
webpush.send(subscription, payload).catch(err => console.error(err));

})

const port = 3000;
app.listen(port, () => {
    console.log('server started on port:>> ', port);
})

