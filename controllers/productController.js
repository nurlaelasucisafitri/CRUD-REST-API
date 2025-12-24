import db from "../config/db.js";

// READ - List semua produk & detail produk
export const getAllProducts = (req, res) => {
    const query = `
        SELECT products.*, categories.name as category_name 
        FROM products 
        LEFT JOIN categories ON products.category_id = categories.id
    `;
    db.query(query, (error, rows) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json(rows);
    });
};

export const getProductById = (req, res) => {
    db.query("SELECT * FROM products WHERE id = ?", [req.params.id], (error, rows) => {
        if (error) return res.status(500).json({ error: error.message });
        if (rows.length === 0) return res.status(404).json({ message: "Produk tidak ditemukan" });
        res.json(rows[0]);
    });
};

// CREATE - Tambah produk baru
export const createProduct = (req, res) => {
    const { category_id, name, price } = req.body;
    db.query(
        "INSERT INTO products (category_id, name, price) VALUES (?, ?, ?)", 
        [category_id, name, price],
        (error) => {
            if (error) return res.status(500).json({ error: error.message });
            res.status(201).json({ message: "Produk berhasil ditambahkan" });
        }
    );
};

// UPDATE - Ubah data produk
export const updateProduct = (req, res) => {
    const { category_id, name, price } = req.body;
    db.query(
        "UPDATE products SET category_id = ?, name = ?, price = ? WHERE id = ?", 
        [category_id, name, price, req.params.id],
        (error) => {
            if (error) return res.status(500).json({ error: error.message });
            res.json({ message: "Produk berhasil diperbarui" });
        }
    );
};

// DELETE - Hapus produk
export const deleteProduct = (req, res) => {
    db.query("DELETE FROM products WHERE id = ?", [req.params.id], (error) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json({ message: "Produk berhasil dihapus" });
    });
};