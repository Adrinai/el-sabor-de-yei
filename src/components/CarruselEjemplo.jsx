import React, {useState} from 'react';
import "../components/Carrusel.css";
// import bolaschoco from '../assets/img/bolaschoco.jpeg';//estatica


function CarruselEjemplo() {
    const imgs=[
      {id: 0, value: "https://localhost:3000/bolaschoco.jpeg"},
      
      {id: 1, value:"https://github.com/Adrinai/el-sabor-de-yei/blob/main/public/cupkeistrosas.jpeg"},
      {id: 2, value: "https://github.com/Adrinai/el-sabor-de-yei/blob/main/public/pinchos.jpeg"},
      {id: 3, value: "https://github.com/Adrinai/el-sabor-de-yei/blob/main/public/tartachoco.jpeg"},
    ];
    
    const[sliderData, setSliderData]=useState(imgs[0])
    const handleclick=(index)=>{
      console.log(index);
      const slider=imgs[index];
      setSliderData(slider);
    }

  return (
    <div className='carruselEjemplo'>
      <img src={sliderData.value} height="300" width="400"/>
      <div className='flex_row'>
      {
        imgs.map((data, i) =>
          <div className='thumbnail'key={i}>
          <img className={sliderData.id==i?"clicked":""} src={data.value} onclick={()=> handleclick(i)} height="70" width="100"/>
          </div>
        )
      }
      </div>
      </div>
  );
}

export default CarruselEjemplo