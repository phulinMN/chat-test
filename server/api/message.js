import { Router } from 'express'

const router = Router()

router.post('/message', function (req, res, next) {
    // console.log();
    // res.json()
    res.json(req.body);
})

export default router