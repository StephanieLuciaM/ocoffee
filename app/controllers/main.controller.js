import {User} from "../models/userModel.js";

export const mainController = {
  async renderHomePage(req,res){
    res.render("home-view");
  },

  async renderContactPage(req, res) {  
    res.render("contact-view");
  },

  async ContactPage(req, res) {
    try {
      const { firstname, email, message } = req.body;
  
      // Vérifier si l'email est déjà utilisé dans la table "user"
      const userAlreadyExist = await User.findOne({
        where: { email: email }
      });
  
      if (userAlreadyExist) {
        console.log("Email déjà utilisé");
        return res.status(400).send("Email déjà utilisé");
      }
  
      // Créer un nouvel utilisateur
      const newUser = new User({
        firstname,
        email,
        message,
        is_contact: true
      });
  
      // Sauvegarder le nouvel utilisateur
      await newUser.save();
  
      res.redirect("/"); 
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur :", error);
      res.status(500).send("Erreur interne du serveur");
    }
  }
  
};