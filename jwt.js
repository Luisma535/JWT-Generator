const jwt = require('jsonwebtoken');
const {generarJWT} = require('./helpers/generarJWT')
const readline = require('readline').createInterface({
    input:process.stdin,
    output: process.stdout
})

console.log("Generador de JWT")
const token = generarJWT()
readline.question('Diga su nombre: ',(txt)=>{
    console.log(txt,"=>" ,token)
})