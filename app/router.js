import {Router} from "express";
import {upload} from "../app/multer-config.js"; // Import du middleware Multer

//import * as mainController from "./controllers/main.controller.js";
import * as mainController from "./controllers/main.controller.js";
import * as  productsController from "./controllers/products.controller.js";
import * as adminController from "./controllers/admin.controller.js";

// Création du routeur
export const router = Router();

// -- Route / --
router.get("/", mainController.renderHomePage);

// -- Page catalogue / --
router.get('/catalogue', productsController.renderCatalogPage);

// -- Page produit / --
router.get('/product/:id',productsController.renderCoffeeDetailsPage);

// -- Page contact / --
router.get('/contact', mainController.renderContactPage);

// -- Page admin ajout café /--
router.get("/admin/coffee/add", adminController.renderAddCoffeePage);
router.post("/admin/coffee/add", upload.single("file"), adminController.handleAddCoffee);

//essayer que quand on ajoute ça créé une nouvelle page avec photo,nom,description et donc un req.BODY
//le bodyparser dans le index.js