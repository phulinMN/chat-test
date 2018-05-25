import { Router } from 'express'

const router = Router()

const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: 'HrXdvIM9KRt1EL7ZohRMpx8BtMsD0JjJC72SeqU/p1l0JZrIPeYq/GCo550/2NLZUTxStJ3gytcNlixrZGPzENV+KAtxwlD+9cvczqRGMsLzWOp4mDp1K2RukTmgeUrnxxCnFbVqo1HGhPnNtqf+agdB04t89/1O/w1cDnyilFU='
});

const message = {
  type: 'text',
  text: 'Hello World!'
};



router.post('/message', function (req, res, next) {
    var event = req.body.events[0]
    if(event.type == "message") {
        client.replyMessage(event.replyToken, event.message)
        .then(() => {
            //
        })
        .catch((err) => {
            //
        });
    }
    else {
        //
    }
    console.log(req.body);
    res.json(req.body);
})

export default router