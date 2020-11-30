var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  name: String,
  price: String,
  soldout: String,
  brand: String,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
