import React from "react"; //mengimport library react
import './CSS/Blog.css'; //mengimport Blog.css utk mengatur styling komponen


//proses penyusunan komponen, import styling, import gambar, membuat props
const Blog = (props) => {
    return (
    <div className="blog-wrap"> 
        <img src="https://placeimg.com/640/480/tech" alt=""/>
        <p>{props.tanggal}</p> 
        <h2>{props.judul}</h2>
        <p>{props.summary}</p>
    </div>
    );
}
  

export default Blog; //menampilkan komponen Blog ke laman web