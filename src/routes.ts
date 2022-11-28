import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { DeleteUserController } from "./controllers/User/DeleteUserController";
import { GetAllUsersController } from "./controllers/User/GetAllUsersController";
import { PermissionController } from "./controllers/PermissionController";
import { SessionController } from "./controllers/Session/SessionController";
import { UpdateUserController } from "./controllers/User/UpdateUserController";

const routes = Router()

const path = require('path')

//GET
routes.get("/Usuarios",new GetAllUsersController().handle);

//POST
routes.post("/cadastro",new CreateUserController().handle);
routes.post("/permissao",new PermissionController().handle);
routes.post("/sessions", new SessionController().handle)


//DELETE
routes.delete("/DeletarUsuario/:id", new DeleteUserController().handle)

//UPDATE
routes.put("/usuario/:id", new UpdateUserController().handle)



//Front-End

routes.get("/logado", (req, res) => {

    if(req.cookies.token === undefined){
        res.redirect('/login')
    }
    res.render('logado')

})
routes.get("/login", (rep,res) => {
    res.render('index')
})

routes.get("/logout", (req, res) => {
    res.cookie("token","",{maxAge:0})
    res.end()
})

export {routes}