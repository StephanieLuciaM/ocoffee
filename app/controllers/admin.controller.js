
export async function renderAddCoffeePage(req, res){
  res.render('admin-coffee-view');
};

export async function handleAddCoffee(req, res) {
  
  try {
    const file = req.file;
    
    if (!file) {
      return res.status(400).send("Aucun fichier téléchargé.");
    }
    
    console.log("Fichier téléchargé :", file);
    
    res.send(`Fichier téléchargé avec succès : ${file.filename}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de l'upload du fichier.");
  }
};
