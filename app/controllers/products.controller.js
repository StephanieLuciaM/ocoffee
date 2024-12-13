import{ Coffee} from "../models/association.js";

export const productsController = {
  // Fonction pour afficher le catalogue de produits
  async renderCatalogPage(req, res) {
    try {
      const coffees = await Coffee.findAll({
        include:"category",
      }); // Récupère tous les cafés
      res.render('catalogue-view', { coffees });
    } catch (error) {
      console.error(error);
      res.status(500).send("Erreur serveur, veuillez patienter");
    }
  },

  // Fonction pour afficher les détails d'un café spécifique
  async renderCoffeeDetailsPage(req, res) {
    try {
      const { id } = req.params; // Récupère l'id du café à partir des paramètres de l'URL

      if (isNaN(id)) {
        console.error("id fourni invalide");
        return res.status(400).send("ID invalide"); // Renvoie une erreur si l'ID n'est pas un nombre
      }

      const coffee = await Coffee.findByPk(id, {
        include:"category",
      }); // Recherche le café avec l'ID

      if (!coffee) {
        return res.status(404).render("404-view"); // Si le café n'est pas trouvé
      }

      res.render("product-view", { coffee }); // Affiche la vue des détails du café
    } catch (error) {
      console.error(error);
      res.status(500).send("Erreur serveur, veuillez patienter");
    }
  }
};




