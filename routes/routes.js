// Import express
import express from "express";
// Import School Controller
import { 
    getAnimals,
    getAnimalById,
    createAnimal,
    updateAnimal,
    deleteAnimal
 } from "../controllers/animals.js";
 
 // Init express router
const router = express.Router();
 
// Route get all schools
router.get('/animals', getAnimals);
// Route get product by id
router.get('/animals/:id', getAnimalById);
// Route create a new product
router.post('/animals', createAnimal);
// Route update product by id
router.put('/animals/:id', updateAnimal);
// Route delete product by id
router.delete('/animals/:id', deleteAnimal);
 
// export router
export default router;