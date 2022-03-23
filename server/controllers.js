
const Sequelize = require("sequelize");
// require('dotenv').config();
// const { DATABASE_URI } = process.env;


DATABASE_URI = 'postgres://xtropzfrehamvw:26f674393034a57c1cfd18c5e5198ee6796ce300b1e8e9cf47cb22455b883f0d@ec2-44-194-92-192.compute-1.amazonaws.com:5432/d648aj86jug7j1'


// you wouldn't want to rejectUnauthorized in a production app, but it's great for practice
const sequelize = new Sequelize(DATABASE_URI, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
module.exports ={
    

    categories: (req, res) => {
        const categories_id = parseInt(req.params.categories)
        console.log(categories_id)
        sequelize.query(`SELECT * FROM categories`).then((dbRes)=>{
            return res.status(200).send(dbRes[0])
        })
    }

} 

 