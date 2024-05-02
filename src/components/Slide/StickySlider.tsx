import React, { useState, useEffect, useRef } from "react";
import Swiper from "react-id-swiper";
import "swiper/css";
import { Slide } from "./Slide";
import product from '../../shared/bd/product.json'



export const StickySlider = () => {
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [width, setWidth] = useState(1);


  const container = useRef<HTMLDivElement>(null);
  const swiperRef = useRef(null);

  const params = {
    slidesPerView: 4,
  };



  useEffect(() => {
    if (container.current) {
      const parent = container.current.parentElement;
      if (parent) {
        setOffsetLeft(parent.offsetLeft);
        setWidth(parent.offsetWidth);
      }
    }
  }, [container.current]);


  return (
    <>
      <div ref={container}>
        <Swiper ref={swiperRef} {...params}>
          {product?.map((item, idx) => (
              <div key={idx}>
                <Slide translate={translate} transition={transition}>
                  <div className="card-small">
                    <div className="image">
                        <img
  src="https://example.com/image.jpg"
  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://th.bing.com/th/id/OIP.zA2Hgwtlt6IJOfEGXzfwwwHaHa?rs=1&pid=ImgDetMain';
  }}
  alt="Дефолтное изображение"
/>
                    </div>
                    <p className="name">
                      {item.name}
                    </p>
                  </div>
                </Slide>
              </div>
            ))}
        </Swiper>
      </div>
    </>
  );
};