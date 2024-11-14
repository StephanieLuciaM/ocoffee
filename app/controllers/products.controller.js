export const productsController = {

  renderCatalogPage: (req, res) => {
    res.render("catalogue-view");
  },
  renderCoffeeDetailsPage: (req,res) =>{
    res.render("product-view");
  }
};