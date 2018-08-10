const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const productRoutes = require("./controllers/products");
const optionRoutes = require("./controllers/option");


module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
    app.post('/login',AuthenticationController.login)

    //app.use("/products", productRoutes);
    app.use("/options", optionRoutes);

}