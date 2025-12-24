import db from "../config/db.js";

export const getAllCategories = (req, res) => {
    db.query("SELECT * FROM categories", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

export const getCategoryById = (req, res) => {
    db.query("SELECT * FROM categories WHERE id = ?", [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Kategori tidak ditemukan" });
        res.json(results[0]);
    });
};

export const createCategory = (req, res) => {
    const { name } = req.body;
    db.query("INSERT INTO categories (name) VALUES (?)", [name], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Kategori berhasil dibuat" });
    });
};

export const updateCategory = (req, res) => {
    const { name } = req.body;
    db.query("UPDATE categories SET name = ? WHERE id = ?", [name, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Kategori berhasil diperbarui" });
    });
};

export const deleteCategory = (req, res) => {
    db.query("DELETE FROM categories WHERE id = ?", [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Kategori berhasil dihapus" });
    });
};