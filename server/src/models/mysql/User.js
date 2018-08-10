const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
          type: DataTypes.STRING,
          unique: true
        },
        password: DataTypes.STRING
    })

    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
      }

    return User;
}