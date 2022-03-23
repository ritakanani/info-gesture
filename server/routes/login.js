const router = require("express").Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log('login in backend');
    const {email, password} = req.body;
    
    const command = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;
    db.query(command).then((data) => {
      console.log(data.rows)
      if(data.rows.length > 0) {
        res.json(data.rows);
      } 
      res.json("User not found")
      }).catch(error => {
        res.json(error);
      });
    
  });
  return router;
};
