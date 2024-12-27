import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import multer from 'multer';

const uploadDir = path.join(path.dirname(new URL(import.meta.url).pathname), '../uploads');

// Vérifier si le dossier 'uploads' existe, sinon le créer
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configuration Multer
const storage = multer.diskStorage({
  destination: uploadDir,
  
  filename: (_, file, cb) => {
    const extension = path.extname(file.originalname);
    const filename = crypto.randomBytes(18).toString('hex');
    const fileNameWithExtension = `${filename}${extension}`;
    cb(null, fileNameWithExtension);
  }
});

export const upload = multer({ storage });
