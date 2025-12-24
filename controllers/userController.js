import db from "../config/db.js";

//1. menampilkan data dari tabel
export const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, result)=> {
        //JIKA ADA ERROR
        if (err) res.status(500),json({message: err });

        //JIKA BERHASIL
        res.json(result);
    });
};

//2. menyimpan data
export const insertUser = (req, res) => {
    const {name, email, password} = req.body;

    db.query("INSERT INTO users (name, email,password) VALUES (?, ?, ?)", 
        [name, email,password], 
        (err, results) => {

        // Jika terjadi error
        if (err) res.status(500).json({ message: err});
        // Jika berhasil
        res.status(201).json({ message: "Data berhasil disimpan!" });

        }
    );
};

//3. menampuilkan data berdasarkan id

export const showUser = (req, res) => {
    const {id} = req.params;

    db.query("SELECT * FROM users WHERE id=?" [id] , (err, results) => {

        // Jika terjadi error
        if (err) res.status(500).json({ message: err});

        // Jika data tidak ditemukan
        if (results.length === 0) {
            return res.status(400).json({message: " user tidak ditemukan"});
        }

        res.json(results[0]);
    });
};

//4. update data berdasarkan id

export const updateUser = (req, res) => {
    const { id }  = req.params;
    const { name, email } = req.body;

    db.query("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?", [name, email,password, id], (err, results) => {
        // Jika terjadi error
        if (err) res.status(500).json({ message: err});
        // Jika berhasil
        res.json({ message: "Data berhasil diupdate!" });
    });
};

//5. delete data  berdasarkan id

// 5. delete data berdasarkan id

export const deleteUser = (req, res) => {
    //jika ada eror
    if (err) res.status(500).json({ message: err });

    //jika berhasil
    res.json({ message: "data berhasil dihapus"});

};