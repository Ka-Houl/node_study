const Product = require("../models/product");

exports.getAddProduct = (res, req, next) => {
  res.render("admin/edit-product", {
    pageTitle: "添加产品",
    path: "/admin/add-product",
    editing: false
  });
};

exports.postAddProduct = (res, req, next) => {
  const { title, imageUrl, price, description } = req.body;

  //   req.user.createProduct({
  //     title,
  //     price,
  //     imageUrl,
  //     description
  //   })
  const product = new Product(title, price, description, imageUrl);
  product
    .save()
    .then(result => {
      console.log("产品添加成功");
      res.redirect("/admin/products");
    })
    .catch(err => console.log(err));
};
