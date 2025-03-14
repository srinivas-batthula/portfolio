"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";



const certificates = [
    {
        img: "/certificates/freecodecamp_backend.png",
        link1: 'https://www.freecodecamp.org/certification/fcc3c479363-8e6f-4275-bc53-e8bc24aced39/back-end-development-and-apis'
    },
    {
        img: "/certificates/hackerrank_java.png",
        link1: 'https://www.hackerrank.com/certificates/iframe/ca46ae083285'
    },
    {
        img: "/certificates/hackerrank_python.png",
        link1: 'https://www.hackerrank.com/certificates/0c16e899f397'
    },
]


export default function ImageCarousel() {
    const swiperRef = useRef(null);

    return (
        <div className="w-full max-w-2xl mx-auto overflow-hidden py-1 relative active:opacity-60">
            <Swiper
                ref={swiperRef}
                slidesPerView={1} // Only 1 image at a time
                autoplay={{ delay: 2300, disableOnInteraction: false }}
                loop={true} // Infinite scrolling
                modules={[Autoplay, Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
                className="mySwiper"
            >
                {certificates.map((item, index) => (
                    <SwiperSlide key={index}>
                        <a href={item.link1} target="_blank" className="hover:bg-blue-500">
                            <img
                                src={item.img}
                                alt={`Slide ${index}`}
                                className="w-full h-60 object-cover rounded-lg shadow-md"
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons - Now Working ✅ */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-1/2 left-2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transform -translate-y-1/2"
            >
                ❮
            </button>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute top-1/2 right-2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transform -translate-y-1/2"
            >
                ❯
            </button>
        </div>
    );
}
