
const express = require('express')
const {saveList,getList,updateList,deleteList} = require('../controllers/listController')


const router = express.Router()


router.post('/addList',saveList)
router.get('/getList',getList)
router.put('/updateList/:id',updateList)
router.delete('/deleteList/:id',deleteList)

module.exports = router;