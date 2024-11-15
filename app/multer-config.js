// Import module multer du formulaire de téléchargement de fichier
import multer from "multer";

// Middleware de stockage Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
  
// Configurer Multer
export const upload = multer({ storage });