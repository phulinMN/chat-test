import { Router } from 'express'

import users from './users'
import message from './message'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(message)

export default router
