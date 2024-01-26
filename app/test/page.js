"use client";// components/Banner.js
import Image from 'next/image';

import bannerimg from "../../public/images/bg_header_1.png"
import flowers from "../../public/images/flowers.png"

import React, { useState } from 'react';

const Test = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    return (
        <div
            className="flex lg:items-center lg:flex-row flex-col  relative bg-white"
            onMouseMove={handleMouseMove} >
            <div className="lg:w-1/2 p-8">
       
                <h1 className="text-[#051145] lg:text-[72px] text-[58px] font-[700] leading-[58px] lg:leading-[72px] text-left ">Home of<br />Beauty SPA,<br></br>& Care.</h1>
                <p className="text-[16px] leading-[24px] font-normal text-[#051145] my-4 text-justify "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button className="bg-[#1C7261] text-white hover:bg-[#148A87]    
                px-[30px] py-[15px] lg:my-4 my-1 leading-[16px] text-[16px]
                border-[1px] border-[#1C7261] rounded-[5px]"> Book Now </button>
                
            </div>
            <div className="lg:w-1/2 relative overflow-hidden">
                {/* Add your right side image here */}
                <Image
                    src={bannerimg}
                    alt="Right Side Image"
                    className="w-full h-full object-cover"
                />
                     <Image
                        src={flowers}
                        alt="Floating Flower"
                        className="absolute animate-float lg:block hidden"
                        style={{
                            transform: `translate(${mousePosition.x /20}px, ${mousePosition.y / 10}px)`,
                            transition: 'transform 0.2s ease-in-out', // Adjust the duration for faster animation
                            top: '80%',
                            left: '50%',
                        }}
                    />
                
                {/* Floating flowers (move with mouse) */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none ">
                <Image
                        src={flowers}
                        alt="Floating Flower"
                        className="absolute animate-float "
                        style={{
                            transform: `translate(${mousePosition.x /5}px, ${mousePosition.y / 5}px)`,
                            transition: 'transform 0.2s ease-in-out' // Adjust the duration for faster animation
                            
                        }}
                    />
                    
                </div>
           
            </div>
        </div>
    );
};

export default Test;

