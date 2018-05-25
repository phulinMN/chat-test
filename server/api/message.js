import { Router } from 'express'

const router = Router()

const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: 'K+plZ7HLBQjB8hIg5iU+wHmn4pAJX+LYzmNw7lPrAEdoD90KyYNXIFNmpnqJORfCUTxStJ3gytcNlixrZGPzENV+KAtxwlD+9cvczqRGMsIY4BSOI8UStT5/6aR8fYzUGCErE0SmeUWBe7/LphykIwdB04t89/1O/w1cDnyilFU='
});

const message = {
  type: 'text',
  text: 'Hello World!'
};

// client.replyMessage('<replyToken>', message)
//   .then(() => {
//     ...
//   })
//   .catch((err) => {
//     // error handling
//   });


router.post('/message', function (req, res, next) {
    console.log(req.body);
    // res.json()
    res.json(req.body);
})

export default router