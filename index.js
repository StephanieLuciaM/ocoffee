// Charger les variables d'environnement (situées dans le fichier .env)
import "dotenv/config";

// Importer Express
import express from "express";

// Import des modules locaux
import { router } from "./app/router.js";


// Créer une app
const app = express();

// Configurer le view engine
app.set("view engine", "ejs"); // Choix du view engine ("ejs")
app.set("views", "./app/views"); // Choix du dossier contenant les vues ("./views")

// Configurer un dossier statique
app.use(express.static("./public"));

// Créer un endpoint /images pour toutes les images, qu'elles soient dans ./public/images ou dans ./uploads
app.use('/images', express.static("./public/images/coffees"), express.static("./uploads"));

// configurer le body parser (pour récupérer les données des formulaires)
app.use(express.urlencoded({ extended: true }));


// Configurer l'application
app.use(router);


// Lancer un serveur
const PORT = process.env.PORT || 3000; // Valeur de rattrapage (fallback) si process.env.PORT === undefined, on lancera par défaut sur le port 3000
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
