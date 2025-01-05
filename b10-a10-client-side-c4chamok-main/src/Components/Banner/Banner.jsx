import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


const Banner = () => {
    return (
        <div className="relative z-0 w-full">
            <div className="absolute top-1/2 left-12 transform -translate-y-1/2 z-10">
                <button
                    className="swiper-button-prev flex items-center justify-center bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 size-12"
                    aria-label="Previous Slide"
                >
                    <FaArrowLeft />
                </button>
            </div>
            <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10">
                <button
                    className="swiper-button-next flex items-center justify-center bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 size-12"
                    aria-label="Next Slide"
                >
                    <FaArrowRight />
                </button>
            </div>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                spaceBetween={30}
                slidesPerView={1}
                className="rounded-lg shadow-lg overflow-hidden w-[95%]"
            >
                <SwiperSlide className="flex items-center justify-center  text-white h-full">
                    <div className="h-[500px]">
                        <img className="w-full h-full" src={"https://i.ibb.co/rfbpfcx/venom-3-box-office-tracking.webp"} alt="" />
                        <h2 className="text-2xl font-bold">Slide 1</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-white">
                    <div className="h-[500px] ">
                        <img 
                        className="w-full h-full"
                        src="https://media-cdn.socastsrm.com/wordpress/wp-content/blogs.dir/2908/files/2023/06/transformers-rise-beasts-web-1200x630.jpg" alt="" />
                        <h2 className="text-2xl font-bold">Slide 2</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-white">
                    <div className="h-[500px]">
                        <img
                        className="w-full h-full"
                        src="https://images.bauerhosting.com/empire/2023/06/flash-3.jpg" />
                        <h2 className="text-2xl font-bold">Slide 3</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;