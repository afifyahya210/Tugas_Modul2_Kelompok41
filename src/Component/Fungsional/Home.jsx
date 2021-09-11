import React from 'react'; //mengimport library react
import Author from './Author'; //mengimport komponen Author
import Blog from './Blog'; //mengimport komponen Blog

//proses penyusunan komponen, import styling, import gambar, membuat props
const Home = () =>{
    return (
    <div> 
        <Blog //memanggil komponen Blog untuk ditampilkan ke laman web
        tanggal="07 Juni 2021"
        judul="Teknologi Artificial intelligence (AI)"
        summary="Kecerdasan buatan adalah kecerdasan yang ditambahkan kepada suatu sistem yang bisa diatur dalam konteks ilmiah atau bisa disebut juga intelegensi artifisial (bahasa Inggris: Artificial Intelligence) atau hanya disingkat AI, didefinisikan sebagai kecerdasan entitas ilmiah."
        />
        <Blog //memanggil komponen Blog untuk ditampilkan ke laman web
        tanggal="25 Juni 2021"
        judul="Teknologi Internet of Thinking (IoT)"
        summary="Internet of Things, atau dikenal juga dengan singkatan IoT) merupakan sebuah konsep yang bertujuan untuk memperluas manfaat dari konektivitas internet yang tersambung secara terus-menerus."
        />
        <Blog //memanggil komponen Blog untuk ditampilkan ke laman web
        tanggal="01 September 2021"
        judul="Teknologi Cryptocurrency"
        summary="Mata uang kripto adalah aset digital yang dirancang untuk bekerja sebagai media pertukaran yang menggunakan kriptografi yang kuat untuk mengamankan transaksi keuangan, mengontrol proses pembuatan unit tambahan, dan memverifikasi transfer aset."
        />
        <Author //memanggil komponen Author untuk ditampilkan ke laman web
        Author1="Afif Syarifuddin Yahya (21120116120018)"
        Author2="Atika Fauziyah (21120118120030)"
        />
    </div>
    );    
}

export default Home; //menampilkan komponen Home ke laman web