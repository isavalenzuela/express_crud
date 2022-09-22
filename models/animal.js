// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Animals = db.define('Animals', {
  // Define attributes
  animalId: {
    type: DataTypes.INTEGER,
    field: 'animal_id',
    autoIncrement: true,
    primaryKey: true,
  },
  habitatId: {
    type: DataTypes.INTEGER,
    field: 'habitat_id',
  },
  animalName: {
    type: DataTypes.STRING,
    field: 'animal_name',
  },
  animalType: {
    type: DataTypes.STRING,
    field: 'animal_type',
  },
  animalDiet: {
    type: DataTypes.STRING,
    field: 'animal_diet',
  }
},{
  tableName: 'animals'
});
 
// Export model Animals
export default Animals;