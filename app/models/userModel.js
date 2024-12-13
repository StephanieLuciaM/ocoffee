
import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class User extends Model {
  // méthode d'instance
  getFullName() {
    return `${this.firstname} ${this.lastname || ''}`; // Si lastname est NULL, il retourne juste le firstname
  }
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true, // Rendre le mot de passe optionnel pour certains cas
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true, // Si tu veux que `firstname` soit optionnel, tu peux définir `allowNull: true`
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true, // Facultatif pour les utilisateurs venant du formulaire de contact
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Si l'utilisateur n'est pas un admin par défaut
    },
    message: {
      type: DataTypes.TEXT,  
      allowNull: true,  // Message de contact est optionnel
    },
    is_contact: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, // Par défaut, les utilisateurs venant du formulaire de contact
    },
  },
  {
    sequelize,
    tableName: "user",
  }
);

/*
User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
    },
    message: {
      type: DataTypes.TEXT,  
      allowNull: true,       
    },
    is_contact: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,    
    },
   
  },
  {
    sequelize,
    tableName: "user",
  }
);

// test
// console.log(await User.findAll());

// création d'un nouveau user
// const newUser = new User({
//     email: "AH.google.com", // invalide !!!
//     password: "123456",
//     firstname: "Alfred",
//     lastname: "H",
// });

// // sauvegarder cet user
// newUser.save();*/