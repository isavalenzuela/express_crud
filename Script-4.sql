CREATE TABLE animals (
	animal_id serial PRIMARY KEY,
	habitat_id VARCHAR ( 50 ) NOT NULL,
	animal_name VARCHAR ( 50 ) NOT NULL,
	animal_type VARCHAR ( 50 ) NOT NULL,
	animal_diet VARCHAR ( 50 ) NOT NULL
);

INSERT INTO animals (habitat_id, animal_name, animal_type, animal_diet) 
VALUES (1, 'Mufasa', 'Lion', 'Carnivore')
INSERT INTO animals (habitat_id, animal_name, animal_type, animal_diet) 
VALUES (1, 'Loki', 'Hiena', 'Carnivore')
INSERT INTO animals (habitat_id, animal_name, animal_type, animal_diet) 
VALUES (1, 'Pink', 'Panther', 'Carnivore')
INSERT INTO animals (habitat_id, animal_name, animal_type, animal_diet) 
VALUES (1, 'Pumita', 'Cougar', 'Carnivore')
INSERT INTO animals (habitat_id, animal_name, animal_type, animal_diet) 
VALUES (1, 'Nala', 'Lion', 'Carnivore')