/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRef } from 'react';

// Import Swiper React components
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { SliderPropsTypes } from 'src/types/sliderTypes';
import 'swiper/css';
import 'swiper/css/pagination';

// Icons
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';

const Slider = ({ data, Card, height, breakpoints, pagination, paginationClassName }: SliderPropsTypes) => {
  const swiperRef = useRef<any>(null);

  const handleLeftNavigation = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleRightNavigation = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="relative flex items-center justify-center h-full">
      <Swiper
        ref={swiperRef}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={
          pagination
            ? {
                clickable: true,
                dynamicBullets: true,
              }
            : false
        }
        breakpoints={breakpoints}
        grabCursor
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={height || 'h-full w-full'}
      >
        {Card &&
          data.map((item: any, i: number) => {
            return (
              <SwiperSlide key={i}>
                <Card data={item} />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <div
        className={`${paginationClassName} w-full max-w-40 absolute z-10 bottom-1 flex items-center justify-between`}
      >
        <div className="cursor-pointer hover:scale-125 duration-200" onClick={handleLeftNavigation}>
          <ArrowLeft2 size="16" className="text-default-foreground" />
        </div>
        <div className="cursor-pointer hover:scale-125 duration-200" onClick={handleRightNavigation}>
          <ArrowRight2 size="16" className="text-default-foreground" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
