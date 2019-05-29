const KiranCycle = require('./kiranCycle')
const _ = require('lodash')
KiranCycle.methods(['get', 'post', 'put', 'delete'])
KiranCycle.updateOptions({new: true, runValidators: true})

KiranCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)
KiranCycle.before('post', verificacao)//.before('put', buscaId)

function buscaId(req, res, next){
  KiranCycle.findOne({salaAtual: req.body.salaAtual}, function(err, user){
    if(err){
      return res.status(500).send('Falhou')
    }if(!user){
      return next()
      //return res.status(404).send(next())
    }
    return res.status(200).send('Ja existe')
  })
}

function verificacao(req, res, next){
  KiranCycle.findOne({salaAtual: req.body.salaAtual}, function(err, user){
    if(err){
      return res.status(500).send('Falhou')
    }if(!user){
      return next()
      //return res.status(404).send(next())
    }
    return res.status(200).send('Ja existe')
  })
}



function sendErrorsOrNext(req, res, next){
  const bundle = res.locals.bundle

  if(bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  }else{
    next()
  }
}

function parseErrors(nodeRestfulErrors){
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

KiranCycle.route('count', function(req, res, next){
  KiranCycle.count(function(error, value){
    if(error){
      res.status(500).json({erros: [error]})
    } else {
      res.json({value})
    }
  })
})
module.exports = KiranCycle
