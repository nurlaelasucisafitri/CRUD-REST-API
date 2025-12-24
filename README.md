# Tugas Node.js REST API CRUD

**Identitas Mahasiswa:**
* **Nama**: Nur Laela Suci Safitri
* **NIM**: 24090097
* **Kelas**: 3C

## Tentang Project
Project ini adalah tugas membuat API untuk mengelola data barang (Kategori dan Produk) menggunakan Node.js dan MySQL. 
Saya membuat dua tabel yang saling terhubung agar data produk memiliki kategori yang jelas.

## Struktur Folder
Saya membagi file project ini menjadi beberapa folder supaya lebih rapi:
* **config/db.js**: Isinya settingan buat konek ke database.
* **controllers/**: Isinya logika buat CRUD (Tambah, Lihat, Edit, Hapus data).
* **routes/**: Isinya daftar alamat URL buat akses API.
* **server.js**: File utama buat jalanin server Express.
* **.env**: Tempat buat simpan settingan database yang aman.

## Database yang Digunakan
1. **categories**: Tabel buat simpan nama kategori barang.
2. **products**: Tabel buat simpan nama barang dan harganya, terhubung ke id kategori.

## Cara Menjalankan
1. Download semua bahan (library) dengan ketik `npm install` di terminal.
2. Siapkan database MySQL dan atur settingannya di file `.env`.
3. Jalankan aplikasinya dengan ketik `node server.js`.
4. Buka Postman dan akses ke `http://localhost:3000`.

## Daftar Endpoint (URL API)
Format data yang dipakai adalah **JSON**.

**Kategori:**
* `POST /categories` - Tambah kategori
* `GET /categories` - Lihat semua kategori
* `GET /categories/:id` - Lihat detail satu kategori
* `PUT /categories/:id` - Edit kategori
* `DELETE /categories/:id` - Hapus kategori

**Produk:**
* `POST /products` - Tambah produk baru
* `GET /products` - Lihat semua produk
* `GET /products/:id` - Lihat detail satu produk
* `PUT /products/:id` - Edit data produk
* `DELETE /products/:id` - Hapus produk

## Hasil Uji Coba
Semua fitur sudah saya tes pakai Postman dan berhasil. 
Bukti screenshot hasil tesnya sudah saya lampirkan di dalam repository ini.
