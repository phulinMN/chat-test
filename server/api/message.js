import { Router } from 'express'

const router = Router()

router.post('/message', function (req, res, next) {
    // res.json()
    res.json(req);
})

export default router