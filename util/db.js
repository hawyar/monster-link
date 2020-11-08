const Sequelize = require('sequelize');

export const db = new Sequelize(process.env.DB_URI, {
  logging: (...msg) => console.log(msg), // Displays all log function call parameters
});

export async function connect() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
    return db;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
