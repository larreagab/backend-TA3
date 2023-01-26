const sql = require("./db.js");

// constructor
const Store = function(store) {
  this.Store_id = store.Store_id;
  this.Store_Area = store.Store_Area;
  this.Items_Avalible = store.Items_Avalible;
  this.Daily_Costumer_Count=store.Daily_Costumer_Count;
  this.Store_Sales=store.Store_Sales;
};

Store.getAll = (limit,tipo_orden, result) => {
    let query = "SELECT *from Stores";
  
    if (limit) {
      query += ` order by ${tipo_orden} desc limit ${limit}`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      //console.log("tutorials: ", res);
      result(null, res);
    });
  };
  module.exports = Store;