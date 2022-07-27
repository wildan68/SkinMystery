# SkinMystery
Sebuah Aplikasi Web e-Commerce yang menggunakan Framework NuxtJs, dengan fitur PWA, Responsive Mobile View, dan lain lain ✨🛒

## 🔷 Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

Jika Terjadi error saat installasi `npm install`, intall Python 3 terlebih dahulu

## 🔷 Folder

Beberapa deskripsi folder dari project ini.

### `assets`

`./assets/` untuk menyimpan file file static yang digunakan bukan secara metode dinamis contoh (icons, png), karna file akan di compile oleh webpack.

### `components`

`./components/` direktori komponen-komponen file yang akan digunakan kembali, reusability.


### `layouts`

`./layouts/` direktori untuk menyimpan tampilan per section yang akan di panggil dari Pages.


### `pages`

`./pages/` direktori awal / index dari project yang memanggil tiap Layout di direktori `./layouts/`.

### `plugins`

`./plugins/` direktori yang diisi oleh beberapa plugin yang membantu dalam pengembangan aplikasi ini. contoh seperti Swiper (Carousel Library), Observable untuk menyimpan variable dan function secara global seperti Vuex, dan beberapa Library pendukung yang digunakan untuk membantu project ini.

### `static`

`./static/` untuk menyimpan file file yang biasa diakses langsung dari domain root `https://etc.com/files.jpg`, biasa untuk menyimpan file file gambar untuk keperluan CSS dan juga untuk `robots.txt`, `sitemap.xml` untuk keperluan SEO Google


### `store`

`./store/` digunakan untuk menyimpan state dari Vuex, saya juga menggunakan Vuex di aplikasi ini dalam pemanggilan Rest API


## 🔷 Live Demo

Untuk Live Demo https://sm.wildan.host
