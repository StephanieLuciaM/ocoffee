// Charger les variables d'environnement (situées dans le fichier .env)
import "dotenv/config";

// Importer Express
import express from "express";

// Import des modules locaux
import { router } from "./app/router.js";
import * as coffeeDataMapper from "./app/data-mapper.js";


// Créer une app
const app = express();

// Configurer le view engine
app.set("view engine", "ejs"); // Choix du view engine ("ejs")
app.set("views", "./app/views"); // Choix du dossier contenant les vues ("./views")

// Configurer un dossier statique
app.use(express.static("./public"));

//middleware
app.use(async (req, res, next) => {
  try {
    const lastThreeCoffees = await coffeeDataMapper.getLastThreeCoffee();
    res.locals.lastThreeCoffees = lastThreeCoffees;
    next();
  } catch (error) {
    console.error("Erreur lors de la récupération des derniers cafés :", error);
    next(error);
  }
});

// Configurer l'application
app.use(router);


// Lancer un serveur
const PORT = process.env.PORT || 3000; // Valeur de rattrapage (fallback) si process.env.PORT === undefined, on lancera par défaut sur le port 3000
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
