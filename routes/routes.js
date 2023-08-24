import { Router } from "express"
// import { Cors } from "cors"

const router = Router()

router.get('/test', (req, res) => [
    res.send('teste2')
])

export default router