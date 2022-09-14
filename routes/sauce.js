const express = require('express');
const auth = require('../middleware/auth');
const sauceCtrl = require('../controllers/sauce');
const router = express.Router();
const multer = require('../middleware/multer-config');
// on définit les différentes  routes pour sauce
router.post('/' ,auth,multer,sauceCtrl.createSauce); 
  
  router.put('/:id',auth,multer, sauceCtrl.modifySauce); 
  router.delete('/:id',auth, sauceCtrl.deleteSauce); 
  router.get('/:id',auth, sauceCtrl.oneSauce);
  router.get('/',auth, sauceCtrl.allSauces);
  router.post('/:id/like', auth, sauceCtrl.likeSauce);

module.exports = router;