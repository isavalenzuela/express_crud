import { Sequelize } from "sequelize";

// create connection
const db = new Sequelize(
  'postgres',
  'postgres',
  'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  define: {
    timestamps: false
  }
});

export default db;