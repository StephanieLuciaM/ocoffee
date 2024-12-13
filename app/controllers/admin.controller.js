import { Coffee } from "../models/coffeeModel.js";


export const adminController={
  async renderAddCoffeePage(req, res) {
    res.render('admin-coffee-view');
  
  },

  async handleAddCoffee(req, res) {
    try {
      const { name, reference, category } = req.body; // Récupérer le nom, la référence et la catégorie
      const file = req.file;
  
      // Vérification de la présence des informations nécessaires
      if (!file) {
        return res.status(400).send("Aucun fichier téléchargé.");
      }
  
      if (!name || !reference || !category) {
        return res.status(400).send("Le nom, la référence et la catégorie du café sont requis.");
      }
  
      // Enregistrer le café dans la base de données avec la catégorie
      const coffee = await Coffee.create({
        name: name,
        reference: reference,
        category_id: category, // Ajouter la catégorie
        image: file.filename, // Nom du fichier image
      });
  
      res.redirect(`/product/${coffee.id}/new`); // Rediriger vers la page du nouveau café
  
    } catch (error) {
      console.error(error);
      res.status(500).send("Erreur lors de l'upload du fichier.");
    }
  },
  
  
  async renderNewCoffeePage(req, res) {
    const coffeeId = req.params.id;
  
    try {
      const coffee = await Coffee.findByPk(coffeeId);

      if (!coffee) {
        return res.status(404).send("Café non trouvé.");
      }

      res.render('newproduct-view', { coffee });
    } catch (error) {
      console.error(error);
      res.status(500).send("Erreur lors de l'affichage de la page.");
    }
  },
};

