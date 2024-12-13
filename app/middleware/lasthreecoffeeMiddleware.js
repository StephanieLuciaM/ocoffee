import { Coffee } from "../models/association.js";



// Middleware pour les données globales (dernier café)
export async function getLastThreeCoffees(req, res, next) {
  try {
    const lastThreeCoffees = await Coffee.findAll({
      order:  [['created_at', 'DESC']],
      limit: 3,
      include:  'category', 
    });
    res.locals.lastThreeCoffees = lastThreeCoffees;
    next();
  } catch (error) {
    console.error("Erreur lors de la récupération des derniers cafés :", error);
    next(error);
  }
};