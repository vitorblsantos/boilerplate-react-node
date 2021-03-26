import { Router } from 'express'
import { join } from 'path'

const router = Router()

router.get('/api', function (_, res) {
  res.status(200).json({ message: 'Boilerplate React Node' })
})

router.get('*', function (_, res) {
  res.status(200).sendFile(join(__dirname, '..', '..', '/build/client/index.html'))
})

export default router
