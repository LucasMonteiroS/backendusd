const { Router } = require("express");

const routes = Router();

const UserController = require("./controllers/UserController");

const SessionController = require("./controllers/SessionController");

const authMinddleWare = require("./middlewares/auth");

//const CommerceController = require("./controllers/CommerceController");

routes.post("/session", SessionController.store);

routes.get("/user", UserController.list);

routes.get("/user/:email", UserController.index);

routes.use(authMinddleWare);

routes.post("/user", UserController.store);

//routes.post("/commerce", CommerceController.store);

//routes.get("/commerce", CommerceController.list);

//routes.get("/commerce/:name", CommerceController.index);

routes.put("/user/:id", UserController.update);

//routes.put("/commerce/:id", CommerceController.update);

routes.delete("/user/:id", UserController.destroy);

//routes.delete("/commerce/:id", commerceController.destroy);

module.exports = routes;
