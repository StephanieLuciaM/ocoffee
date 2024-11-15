import * as coffeeDataMapper from "../data-mapper.js";


export async function renderCatalogPage(req, res) {
  try {
    const coffees = await coffeeDataMapper.getAllCoffeeProducts(); 
    res.render('catalogue-view', { coffees });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur serveur, veuillez patienter");
  }
};

export async function renderCoffeeDetailsPage(req, res) {
  const coffeeId = parseInt(req.params.id,10);
  try {
    const coffee = await coffeeDataMapper.getOneCoffee(coffeeId);
    if (!coffee) { return res.status(404).render("404-view");};
    res.render("product-view",{coffee});
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur serveur, veuillez patienter");
  }
};



