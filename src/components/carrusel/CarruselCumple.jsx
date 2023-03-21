import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
    src: require('../../assets/img/tartacumple.jpeg'),
    altText: 'imagen 1',
    caption: 'cumpleaños'
  },
  {
    src: require('../../assets/img/tartacumple3.jpeg'),
    altText: 'imagen 2',
    caption: 'cumpleaños 2'
  },
  {
    src: require('../../assets/img/tartacumpleaños2.jpeg'),
    altText: 'imagen 3',
    caption: 'cumpleaños 3'
  },
  {
    src: require('../../assets/img/tequeños.jpeg'),
    altText: 'imagen 4',
    caption: 'cumpleaños 4'
  },
  {
    src: require('../../assets/img/tipico.jpg'),
    altText: 'imagen 5',
    caption: 'cumpleaños 5'
  },
  {
    src: require('../../assets/img/torta de vainilla.jpeg'),
    altText: 'imagen 6',
    caption: 'cumpleaños 6'
  }
];

const Carrusel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [numSlides, setNumSlides] = useState(Math.ceil(items.length / itemsPerSlide));

  const slides = [];

  for (let i = 0; i < numSlides; i++) {
    const slideItems = items.slice(i * itemsPerSlide, (i + 1) * itemsPerSlide);
    
    
    slides.push(
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={i}>
        <div className="d-flex justify-content-between">
          {slideItems.map((item) => {
            return (
              <div key={item.src}>
                <img src={item.src} alt={item.altText} width="100%" height="auto" />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
              </div>
            );
          })}
        </div>
      </CarouselItem>
    );
  }

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === numSlides - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? numSlides - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const onResize = () => {
    setItemsPerSlide(Math.floor(window.innerWidth / 300));
    setNumSlides(Math.ceil(items.length / itemsPerSlide));
  };

  window.addEventListener('resize', onResize);

  return (
    
    
    
    
    <Carousel  activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />

    </Carousel>
  );
};

export default Carrusel;


