const express = require('express')
const authMiddelware = require('../middlewares/authMiddelware')
const { createInventoryController, getInventoryController } = require('../controllers/inventoryController')


const router = express.Router()

//routes
//ADD INVENTORY || POST
router.post('/create-inventory', authMiddelware, createInventoryController)

//Get ALL BLOOD RECORD
router.get('/get-inventory', authMiddelware, getInventoryController)
module.exports = router