const { Router } = require('express')
const router = Router()

router.use('/perncrud', require('./perncrud'))

module.exports = router