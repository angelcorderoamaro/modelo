var express = require('express');
var router = express.Router();
var postCtrl= require('../controllers/index');
router.post('/index',function(req, res){
  var d = req.body;
  postCtrl.post(d)
  .then(function(result){
  res.json(result);
  });
});

router.get('/get_datos',function(req, res){
  postCtrl.get()
  .then(function(result){
  res.json(result);
  });
});
router.get('/get_datos_modal:_id',function(req, res){
  var _id = req.params ;
  postCtrl.get_modal(_id)
  .then(function(result){
  res.json(result);
  });
});
router.post('/actualizar',function(req, res){
  var d = req.body ;
  postCtrl.actualizar(d)
  .then(function(result){
  res.json(result);
  });
});
router.post('/eliminar',function(req, res){
  var d = req.body ;
  postCtrl.eliminar(d)
  .then(function(result){
  res.json(result);
  });
});


module.exports = router;
