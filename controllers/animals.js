// Import Animals Model
import Animals from "../models/animal.js";

// Get all animals
export const getAnimals = async (req, res) => {
    try {
        const animals = await Animals.findAll();
        res.send(animals);
    } catch (err) {
        console.log(err);
    }
}

// Get animal by id
export const getAnimalById = async (req, res) => {
    try {
        const animals = await Animals.findByPk(req.params.animalId);
        if (!animals) {
            res.status(404).send({
                message: `No animal found with id ${req.params.animalId}`
            });
        }
        res.send(animals);
    } catch (err) {
        console.log(err);
    }
}

// Create a new animal
export const createAnimal = async (req, res) => {
    try {
        await Animals.create(req.body);
        res.json({
            "message": "Animal Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update animal by id
export const updateAnimal = async (req, res) => {
    try {
        const animals = await Animals.findByPk(req.params.animalId);
        if (!animals) {
            res.status(404).send({
                message: `No animal found with id ${req.params.animalId}`
            });
            return;
        }
        await Animals.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Animal Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete school by id
export const deleteAnimal = async (req, res) => {
    try {
        const animals = await Animals.findByPk(req.params.id);
        if (!animals) {
            res.status(404).send({
                message: `No animal found with id ${req.params.id}`
            });
            return;
        }
        await Animals.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Animal Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}