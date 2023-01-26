const Tutorial = require("../models/store.models.js");

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
    const limit = req.query.limit;
    const tipo_orden=req.query.campo;
    
    console.log(tipo_orden);
    Tutorial.getAll(limit, tipo_orden, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };