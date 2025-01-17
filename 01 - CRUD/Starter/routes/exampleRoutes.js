import express from 'express';
import { loadAbout, getExamples, createExample } from '../controllers/exampleController.js';

const router = express.Router();

router.get('/', getExamples);
router.post('/', createExample);

router.get('/about', loadAbout);

export default router;