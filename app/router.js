import {Router} from "express";
import {upload} from "./multer-config.js"; // Import du middleware Multer
import { mainController } from "./controllers/main.controller.js";
import { productsController } from "./controllers/products.controller.js";
import { getLastThreeCoffees } from "./middleware/lasthreecoffeeMiddleware.js";
import { adminController } from "./controllers/admin.controller.js";



// Création du routeur
export const router = Router();

// -- Route / --
router.get("/",getLastThreeCoffees, mainController.renderHomePage);

// -- Page catalogue / --
router.get('/catalogue',getLastThreeCoffees, productsController.renderCatalogPage);

// -- Page produit / --
router.get('/product/:id',productsController.renderCoffeeDetailsPage);

// Route pour afficher la page avec l'image du café
router.get('/product/:id/new', adminController.renderNewCoffeePage);


// -- Page contact / --
router.get('/contact', mainController.renderContactPage);
router.post('/contact', mainController.ContactPage);

// -- Page admin ajout café /--
router.get("/admin/coffee/add", adminController.renderAddCoffeePage);
router.post("/admin/coffee/add", upload.single("file"), adminController.handleAddCoffee);

//essayer que quand on ajoute ça créé une nouvelle page avec photo,nom,description et donc un req.BODY
//le bodyparser dans le index.js
