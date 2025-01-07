import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"
import { Autoplay, Navigation, Pagination } from "swiper/modules";


const Banner = () => {
    return (
        <section className="flex justify-center items-center">
            <div className="relative z-0 w-full">
                <div className=" absolute w-full items-center flex justify-between">
                    <div className="h-[450px] w-28 cursor-pointer justify-center flex items-center group z-10 rounded-l-lg hover:bg-gray-800/55">
                        <button
                            className="h-full w-full text-3xl swiper-button-prev flex items-center justify-center  group-hover:text-white rounded-full p-2 "
                            aria-label="Previous Slide"
                        >
                            <TfiAngleLeft />
                        </button>
                    </div>
                    <div className="h-[450px] w-28 cursor-pointer justify-center flex items-center group z-10 rounded-r-lg hover:bg-gray-800/55">
                        <button
                            className="h-full w-full text-3xl swiper-button-next flex items-center justify-center group-hover:text-white rounded-full p-2"
                            aria-label="Next Slide"
                        >
                            <TfiAngleRight />
                        </button>
                    </div>
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
                    className="rounded-lg shadow-lg overflow-hidden "
                >
                    <SwiperSlide className="flex items-center justify-center  text-white h-full">
                        <div className="h-[450px]">
                            <img className="w-full h-full" src={"https://i.ibb.co/rfbpfcx/venom-3-box-office-tracking.webp"} alt="" />
                            <h2 className="text-2xl font-bold">Slide 1</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center text-white">
                        <div className="h-[450px] ">
                            <img
                                className="w-full h-full"
                                src="https://media-cdn.socastsrm.com/wordpress/wp-content/blogs.dir/2908/files/2023/06/transformers-rise-beasts-web-1200x630.jpg" alt="" />
                            <h2 className="text-2xl font-bold">Slide 2</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center text-white">
                        <div className="h-[450px]">
                            <img
                                className="w-full h-full"
                                src="https://images.bauerhosting.com/empire/2023/06/flash-3.jpg" />
                            <h2 className="text-2xl font-bold">Slide 3</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Banner;