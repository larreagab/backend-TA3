module.exports = app => {
    const stores = require("../controllers/store.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Tutorials
    router.get("/", stores.findAll);
    app.use('/api/tiendas', router);
};