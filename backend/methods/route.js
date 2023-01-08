import express from 'express';
import { getItems, createItems, deleteAll, deleteOne } from './controller.js';

const router = express.Router();
router.get('/', getItems)
router.post('/', createItems);
router.delete('/', deleteAll);
router.delete('/one', deleteOne);

export default router;