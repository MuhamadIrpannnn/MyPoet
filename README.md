# POET — Barcelona Website 🌹

Website perkenalan FC Barcelona yang dibuat khusus buat Poet.

## Struktur Folder

```
POET/
├── index.html              ← File utama, buka ini di browser
├── assets/
│   ├── css/
│   │   └── style.css       ← Semua styling website
│   ├── js/
│   │   └── main.js         ← Animasi scroll & interaksi
│   └── images/
│       └── (taruh foto di sini)
└── README.md
```

## Cara Pakai

1. Buka file `index.html` di browser — website langsung jalan, tidak perlu install apapun.

## Cara Ganti Foto (Section Closing)

1. Taruh foto kamu di folder `assets/images/` — contoh: `foto.jpg`
2. Buka `index.html`
3. Cari bagian `<!-- CARA GANTI FOTO -->`
4. Ganti bagian `<div class="photo-placeholder">` dengan:

```html
<img src="assets/images/foto.jpg" alt="Foto" />
```

## Warna Barcelona

| Nama    | Kode     |
|---------|----------|
| Biru    | #004D98  |
| Merah   | #A50044  |
| Kuning  | #FFED02  |
