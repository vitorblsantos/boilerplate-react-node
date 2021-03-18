import { Router } from 'express'

const router = Router()

router.get('/api', function (_, res) {
  res.status(200).json({ message: 'Boilerplate React Node' })
})

export default router
