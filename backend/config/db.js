require("dotenv").config();

const mysql = require("mysql2");

// Create pool of SQL connection
const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
  })
  .promise();

// Test Database Connection Method
const connect = async () => {
  try {
    // Check connection established or not by running random test query
    const [rows] = await pool.query(`SELECT 1 + 1 AS solution`);

    // If successful, output to console
    if (rows[0].solution)
      console.log(`Connected to MySQL Database successfully!`.cyan.underline);
  } catch (error) {
    // console.log(error);
    console.error(`Error Name: ${error.name}`.bgRed);
    console.error(`Error Code: ${error.code}`.bgRed.underline);
    console.error(`Error Stack: ${error.stack}`.red);
  }
};

// Invoke MySql Connection Method to connect to DB
connect();

module.exports = pool;

// <---- BELOW LOGIC NOT REQUIRED ANYMORE ----->

// connection.connect((error) => {
//   if (error) {
//     console.error("Error connecting to MySQL database:", error);
//   } else {
//     console.log("Connected to MySQL database!");
//   }
// });

// module.exports = pool.promise();

// Remove Sequelize - Below code not required.

/*
const Sequelize = require("sequelize");

// Connection

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);

*/

/*
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 }); */

/*
 try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
*/

/*
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
*/
