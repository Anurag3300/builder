'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from 'react-icons/fa';

const reviewData = [
    {
        content: "This compact extinguisher is always within arm’s reach in my kitchen, and it’s so easy to use. I feel secure knowing I have reliable fire protection.",
        name: "Priya S.",
       
        stars: 5
    },
   
    {
        content: "What I love most is how lightweight and simple they are to use—even my kids know how to operate one in an emergency. Alfa Fire extinguishers have become a part of our home safety essentials.",
        name: "Rashi T.",
        
        stars: 5
    },
    {
        content: "The quality of Alfa Fire extinguishers is unmatched. It’s reassuring to know that I have a very practical to store, easy-to-use and reliable fire safety solution with me.",
        name: "Arjun R.",
       
        stars: 5
    }
];

const Reviews = () => {
    const sliderSettings = {
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const ReviewCard = ({ review }) => (
        <div className="px-4" id='testimonials'>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Quote Icon - Updated with green accent */}
                <div className="mb-4 flex items-center">
                    <svg className="h-8 w-8 text-logobtbcolor" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                    </svg>
                    {/* Added verified badge */}
                    <span className="ml-2 text-gray-900 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        Verified Review
                    </span>
                </div>
                
                {/* Review Content - Added subtle green highlight */}
                <p className="text-gray-600 mb-6 italic">
                    "{review.content}"
                    <span className="block mt-2 text-logobtbcolor text-sm font-medium">
                        {[...Array(review.stars)].map((_, i) => '★').join('')}
                        {[...Array(5 - review.stars)].map((_, i) => '☆').join('')}
                    </span>
                </p>
                
                {/* Author Info */}
                <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-900 flex items-center justify-center text-logobtbcolor font-bold text-lg">
                        {review.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                        <p className="font-semibold text-logobtbcolor">{review.name}</p>
                        <p className="text-gray-500 text-sm">{review.business}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-16 bg-[#e7f5f5] overflow-hidden" id='testimonials'>
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
                    <FaQuoteLeft className="text-logobtbcolor text-4xl md:text-5xl mb-2 md:mb-0" />
                    <span>Client Testimonials</span>
                </h2>
                <p className="text-gray-600 text-lg">
                    Hear what our clients have to say about{" "}
                    <span className="text-logobtbcolor font-medium">
                       ALFAFIRE
                    </span>
                </p>
            </div>

                <div className="max-w-[100vw] mx-auto">
                    {/* First Row - Moving Right */}
                    <div className="mb-8">
                        <Slider {...sliderSettings}>
                            {reviewData.map((review, index) => (
                                <ReviewCard key={index} review={review} />
                            ))}
                        </Slider>
                    </div>

                    {/* Second Row - Moving Left */}
                    <div>
                        <Slider {...{...sliderSettings, rtl: true}}>
                            {reviewData.map((review, index) => (
                                <ReviewCard key={index} review={review} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;