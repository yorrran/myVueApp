const {User} = require('../models/mysql')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: ONE_WEEK
    })
  }
  

module.exports = {
    async register(req, res) {
        try {
            console.log("user: ", typeof User);
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                //token: jwtSignUser(userJson)
            })
        } catch (err) {
            console.log("the error: ", err);
            res.status(400).send(err)
        }
    },
    async login (req, res) {
        try {
          const {email, password} = req.body
          const user = await User.findOne({
            where: {
              email: email
            }
          })
    
          if (!user) {
            return res.status(403).send({
              error: 'The login information was incorrect'
            })
          }
    
          const isPasswordValid = password === user.password
          if (!isPasswordValid) {
            return res.status(403).send({
              error: 'The login information was incorrect'
            })
          }
    
          const userJson = user.toJSON()
          res.send({
            user: userJson,
             token: jwtSignUser(userJson)
          })
        } catch (err) {
          res.status(500).send({
            error: 'An error has occured trying to log in'
          })
        }
    }
}
