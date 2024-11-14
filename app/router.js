import {Router} from 'express';

//import * as mainController from "./controllers/main.controller.js";
import { mainController } from "./controllers/main.controller.js";
import { productsController} from "./controllers/products.controller.js";

// Création du routeur
export const router = Router();

// -- Route / --
router.get("/", mainController.renderHomePage);

// -- Page catalogue / --
router.get('/catalogue',productsController.renderCatalogPage);

// -- Page produit / --
router.get('/product/:id',productsController.renderCoffeeDetailsPage);