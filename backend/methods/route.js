import express from 'express';
import { getItems, createItems, deleteAll } from './controller.js';

const router = express.Router();
router.get('/', getItems)
router.post('/', createItems);
router.delete('/', deleteAll);

export default router;