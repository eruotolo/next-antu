'use client';

import { useState, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function FullWidthCarousel({ slides }) {
    return (
        <>
            <Swiper
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={index}>{slideContent}</SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
