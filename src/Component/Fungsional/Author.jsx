import React from "react"; //mengimport library react
import './CSS/Author.css'; //mengimport Author.css utk mengatur styling komponen

//props disusun menggunakan tipe data array of object
const Author = (props) => { //proses penyusunan komponen, import styling, import gambar, membuat props 
    return <div className="author-wrap"> 
        <img src="https://www.millcitypress.net/wp-content/uploads/2018/08/author-bios.jpg" alt=""/> 
        <h2>Kelompok 41</h2> <p>{props.Author1}</p> <p>{props.Author2}</p>
    </div> 
}

export default Author; //menampilkan komponen Author ke laman web     
