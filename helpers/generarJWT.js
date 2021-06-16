const jwt = require('jsonwebtoken')
require('dotenv').config()
const generarJWT = ()=>{
return new Promise((resolve,reject)=>{
const payload = {}

jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{
    expiresIn: '4h'
},(err,token)=>{
if(err) console.log(err)
else resolve(token)
})
    })
}
module.exports = {generarJWT}