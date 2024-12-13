import fs from 'fs';
import path from 'path';
import multer from 'multer';

const uploadDir = path.join(path.dirname(new URL(import.meta.url).pathname), 'uploads');

// Vérifier si le dossier 'public/uploads' existe, sinon le créer
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware de stockage Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Utiliser le chemin vers public/uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Préfixer les noms de fichiers pour éviter les doublons
  }
});

// Configuration Multer
export const upload = multer({ storage });


/*
// Utiliser import.meta.url pour obtenir le répertoire actuel
const uploadDir = path.join(new URL('.', import.meta.url).pathname, 'uploads');

// Vérifier si le dossier 'uploads' existe, sinon le créer
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Middleware de stockage Multer
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Utiliser le chemin complet
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// Configuration Multer
export const upload = multer({ storage });
*/