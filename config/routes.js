const express = require('express')

module.exports = function(server) {
  // API Routes
  const router = express.Router()
  server.use('/api', router)
  router.route('/magica').get(function(req, res, next){
    res.send('achou mizeravi kkkkkk')
  })
  //rotas da API
  const kiranCycleService = require('../api/kiranCycle/kiranCycleService')
  kiranCycleService.register(router, '/kiranCycle')
  kiranCycleService.register(router, '/login')

}
/*

  router.post('/login', function(req, res){
    var user = req.body.user;
    var senha = req.body.senha;

    kiranCycleService.db.collection('db_kiran').findOne({user: user, senha: senha}, function (err, user){
      if(err){
        return res.status(500).send('Falhou')
      }if(!user){
        return res.status(404).send('nunca nem vi')
      }
      return res.status(200).send('Ja existe')
    })
  })
}
function hash_password(req, res, next) {
  req.body.password = hash(req.body.password);
  next();
}
*/
/*
  const kiranSummaryService = require('../api/kiranSummary/kiranSummaryService')
  router.route('/kiranSummary').get(kiranSummaryService.getSummary)
}
*/
