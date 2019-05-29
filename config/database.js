const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_kiran', {useNewUrlParser:true})


mongoose.Error.messages.general.required = "O Atributo '{PATH}' é OBRIGATÓRIO MIZERAVEL"
mongoose.Error.messages.Number.min = "O '{VALUE}' infomrado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' infomrado é maior que o limite mínimo de '{MAX}'."
mongoose.Error.messages.Number.enum = "O '{VALUE}' não é valido no '{PATH}'."
