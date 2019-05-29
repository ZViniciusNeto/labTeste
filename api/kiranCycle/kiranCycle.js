const restful = require('node-restful')
const mongoose = restful.mongoose


const userSchema = new mongoose.Schema({
  name: { type: String, require: true},
  senha: { type: String, require: true}
})

const kiranCycleSchema = new mongoose.Schema({
  user: [userSchema],
  salaAtual: { type: Number, min: 1, max: 6, required: true},
  permissoes: { type: String, uppercase: true, enum:['VISITA', 'TUTORIAL', 'PROJETO', 'LIDER', 'MASTER']}
})

module.exports = restful.model('KiranCycle', kiranCycleSchema)
