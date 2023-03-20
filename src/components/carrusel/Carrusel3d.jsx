
import React, { useState } from 'react';
import "../carrusel/Carrusel3d.css"
import image1 from "../../assets/img/pinchos.jpeg"
import image2 from "../../assets/img/pinchos.jpeg"
import image3 from "../../assets/img/pinchos.jpeg"
import image4 from "../../assets/img/pinchos.jpeg"
import image5 from "../../assets/img/pinchos.jpeg"

const Carrusel3d = () => {
  const [currentButton, setCurrentButton] = useState(1);

  const selectCurrentButton = (currentIndex)=>{
    setCurrentButton(currentIndex);
  };

  const Buttons = () =>{
      let arrayButtons =[];
      for (let i = 1; i < 6; i++){
        arrayButtons.push(
        <input
          key={i}
          type="button"
          position={i}
          className={`${i === currentButton ? "navinput" : "activeButton"}`}
          onClick = {function onClick(){
            return selectCurrentButton(i);
          }}
        />
        );
      }
      return arrayButtons;
  };

  const ImageItems = () => {
    const images = [image1, image2, image3, image4, image5];
    return images.map((image, index) => (
      <div className={`item pos${index + 1}`} key={index}>
        <div className="head_card">
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
        <div className="body_card"></div>
        <div className="footer_card"></div>
      </div>
    ));
  };

  return (
    <>
    <div className='main-section'>
    <div className='Carrusel3d_content'>
      <div className='cards_content'>
      <main id='Carrusel3d'>
        <ImageItems />
      </main>

        <div className="Buttons_groups">
          <Buttons/>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Carrusel3d
