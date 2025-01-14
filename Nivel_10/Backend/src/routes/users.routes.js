const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload");

const UsersController = require("../controllers/UsersController"); 
const UserAvatarController = require("../controllers/UserAvatarController"); 
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const usersRoutes = Router(); //Inicia o route
const upload = multer(uploadConfig.MULTER); //Upload de foto de perfil

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes; //exporta esse arquivo para ser acessado em qualquer outro arquivp