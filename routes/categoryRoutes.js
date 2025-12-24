import express from 'express';
import{
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from "../controllers/categoryController.js"

const router = express.Router();

router.get('/', getAllCategories);
router.post('/',createCategory);
router.get("/:id", getCategoryById);
router.delete("/:id", deleteCategory);
router.put("/:id", updateCategory);

export default router;