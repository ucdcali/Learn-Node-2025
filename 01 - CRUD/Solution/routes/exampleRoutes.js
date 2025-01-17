import express from 'express';
import { getExamples, createExample, updateExample, deleteExample } from '../controllers/exampleController.js';

const router = express.Router();

// READ: Display all examples
router.get('/', getExamples);

// CREATE: Add a new example
router.post('/', createExample);

// UPDATE: Update an example
router.post('/edit/:id', updateExample);

// DELETE: Delete an example
router.post('/delete/:id', deleteExample);

export default router;
