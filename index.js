// Charger les variables d'environnement (situées dans le fichier .env)
import "dotenv/config";

// Importer Express
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

// Import des modules locaux
import { router } from "./app/router.js";


// Créer une app
const app = express();


// Obtenez le répertoire actuel (équivalent de __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurer le view engine
app.set("view engine", "ejs"); // Choix du view engine ("ejs")
app.set("views", "./app/views"); // Choix du dossier contenant les vues ("./views")

// Configurer un dossier statique
app.use(express.static("./public"));


// Rendre le répertoire 'uploads' accessible au public
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// configurer le body parser (pour récupérer les données des formulaires)
app.use(express.urlencoded({ extended: true }));


// Configurer l'application
app.use(router);


// Lancer un serveur
const PORT = process.env.PORT || 3000; // Valeur de rattrapage (fallback) si process.env.PORT === undefined, on lancera par défaut sur le port 3000
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
