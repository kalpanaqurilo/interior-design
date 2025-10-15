
// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import axios from "axios";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// interface TestimonialItem {
//     userName: string;
//     userLocation: string;
//     userReview: string;
//     userProfile: string;
//     image: string;
// }

// const Testimonial = () => {
//     const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
//     const [loading, setLoading] = useState(true);
//     const sliderRef = useRef<Slider>(null);

//     useEffect(() => {
//         const fetchTestimonials = async () => {
//             try {
//                 const res = await axios.get(
//                     "https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/testimonials?limit=6"
//                 );
//                 setTestimonials(res.data?.data?.items || []);
//             } catch (err) {
//                 console.error("Error fetching testimonials:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchTestimonials();
//     }, []);

//     const settings = {
//         dots: true,
//         arrows: false,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 3500,
//         speed: 900,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         fade: false, // 👈 disables fade, enables slide motion
//         pauseOnHover: true, // 👈 stops auto-slide when hovered
//         adaptiveHeight: true,
//     };

//     if (loading) {
//         return (
//             <section className="bg-white py-20 text-center">
//                 <p className="text-gray-600">Loading testimonials...</p>
//             </section>
//         );
//     }

//     return (
//         <section className="bg-white py-20 relative overflow-hidden">
//             <div className="max-w-7xl mx-auto px-6">
//                 <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
//                     <span className="border-b-2 border-[#996830] pb-2">
//                         Testimonials
//                     </span>
//                 </h2>

//                 <Slider ref={sliderRef} {...settings}>
//                     {testimonials.map((t, index) => (
//                         <div key={index}>
//                             <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
//                                 {/* LEFT SIDE */}
//                                 <div className="flex flex-col items-center md:items-start text-center md:text-left">
//                                     <div className="flex flex-col items-center md:items-start gap-6 p-6">
//                                         {/* User Profile */}
//                                         <div className=" w-40 h-40 rounded-full overflow-hidden border-4 border-[#996830] shadow-md">
//                                             <Image
//                                                 src={t.userProfile}
//                                                 alt={`${t.userName}'s profile picture`}
//                                                 width={160}
//                                                 height={160}
//                                                 className="object-cover"
//                                             />
//                                         </div>

//                                         {/* Feedback */}
//                                         <p className="text-gray-600 text-base italic leading-relaxed max-w-md ">
//                                             “{t.userReview}”
//                                         </p>

//                                         {/* Name + Location */}
//                                         <div className="">
//                                             <p className="font-semibold text-gray-900">
//                                                 {t.userName}
//                                             </p>
//                                             <p className="text-sm text-gray-500">{t.userLocation}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* RIGHT SIDE */}
//                                 <div className="relative">
//                                     <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
//                                         <Image
//                                             src={t.image || "/Images/default-room.jpg"}
//                                             alt={`Interior project by ${t.userName}`}
//                                             fill
//                                             className="object-cover"
//                                         />
//                                         <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//                                             <p className="text-white text-lg font-medium tracking-wide">
//                                                 Living Room 
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>

//                 {/* Navigation Arrows */}
//                 <div className="flex justify-between absolute top-1/2 left-6 right-6 transform -translate-y-1/2">
//                     <button
//                         onClick={() => sliderRef.current?.slickPrev()}
//                         className="bg-[#996830] hover:bg-[#7d5426] text-white rounded-full p-2 shadow-md"
//                     >
//                         <ChevronLeft size={24} />
//                     </button>

//                     <button
//                         onClick={() => sliderRef.current?.slickNext()}
//                         className="bg-[#996830] hover:bg-[#7d5426] text-white rounded-full p-2 shadow-md"
//                     >
//                         <ChevronRight size={24} />
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Testimonial;

"use client";

import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TestimonialItem {
    userName: string;
    userLocation: string;
    userReview: string;
    userProfile: string;
    image: string;
}

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
    const [loading, setLoading] = useState(true);
    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await axios.get(
                    "https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/testimonials?limit=6"
                );
                setTestimonials(res.data?.data?.items || []);
            } catch (err) {
                console.error("Error fetching testimonials:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        pauseOnHover: true,
        adaptiveHeight: true,
    };

    if (loading) {
        return (
            <section className="bg-white py-16 text-center">
                <p className="text-gray-600 text-base sm:text-lg">Loading testimonials...</p>
            </section>
        );
    }

    return (
        <section className="bg-white py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-center text-gray-900 mb-12">
                    <span className="border-b-2 border-[#996830] pb-2">Testimonials</span>
                </h2>

                <Slider ref={sliderRef} {...settings}>
                    {testimonials.map((t, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                                {/* LEFT SIDE */}
                                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className="flex flex-col items-center md:items-start gap-6 p-4 sm:p-6">
                                        {/* User Profile */}
                                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#996830] shadow-md">
                                            <Image
                                                src={t.userProfile}
                                                alt={`${t.userName}'s profile picture`}
                                                width={160}
                                                height={160}
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Feedback */}
                                        <p className="text-gray-600 text-sm sm:text-base md:text-base italic leading-relaxed max-w-md">
                                            “{t.userReview}”
                                        </p>

                                        {/* Name + Location */}
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm sm:text-base">
                                                {t.userName}
                                            </p>
                                            <p className="text-xs sm:text-sm text-gray-500">
                                                {t.userLocation}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT SIDE */}
                                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                                    <Image
                                        src={t.image || "/Images/default-room.jpg"}
                                        alt={`Interior project by ${t.userName}`}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <p className="text-white text-sm sm:text-lg md:text-lg font-medium tracking-wide">
                                            Living Room
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Navigation Arrows */}
                <div className="flex justify-between absolute top-1/2 left-4 right-4 sm:left-6 sm:right-6 transform -translate-y-1/2">
                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="bg-[#996830] hover:bg-[#7d5426] text-white rounded-full p-2 sm:p-3 shadow-md"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="bg-[#996830] hover:bg-[#7d5426] text-white rounded-full p-2 sm:p-3 shadow-md"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
