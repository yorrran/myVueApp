module.exports = {
    port: 8081,
    db: {
      dbconnection
    },

    authentication: {
      jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}