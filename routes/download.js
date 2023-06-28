const express=require('express');

const router=express.Router();

const downloadController=require('../controllers/download');

router.get('/',downloadController.download);
router.get('/csv',downloadController.csv);

module.exports=router;