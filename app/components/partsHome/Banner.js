import Image from "next/image"
import womenlaying from "../../../public/images/happy-african-woman-in-resort-spa-1536x1024.jpg"
import flyimage from "../../../public/images/pattern_1-p57r4455lvw1r4plky21bs0glqtsk6ezclujqnlc74.png"
import imgicons from "../../../public/images/Rock-1.png"
import landscapeimg from "../../../public/images/beautiful-relaxed-woman-having-clay-mask-applying-to-the-back-in-spa-salon.jpg"
import maskimg from "../../../public/images/diverse-masseuse-and-client.jpg"
import Faq from "./Faq"
import Test from "@/app/test/page"
import Counter from "./Counter"


export default function Banner() {
    return (
        <div className="bg-white">
            <Test></Test>
            <div className="lg:grid grid-cols-2 flex flex-col-reverse  bg-white lg:p-20 lg:py-20 lg:gap-16 womenlaying">
                <div >
                    <Image src={womenlaying} alt="women laying" className="lg:w-[100%]  p-5 relative mt-[-5%] mb-5 lg:mb-0"
                        objectFit="cover" objectPosition="center"
                    />
                    <Image src={flyimage} alt="fly image" className=" lg:block hidden relative left-[80%] bottom-[50%]" />
                </div>
                <div className="p-5">
                    <h1 className="text-[#051115]">
                        About us
                    </h1>
                    <h1 className="text-[#051145] lg:text-[50px] text-[28px] font-[700]  lg:leading-[50px] ">
                        Time spent getting a massage is never wasted.</h1>
                    <p className="text-[16px] leading-[24px] font-normal text-[#051145] my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <button className="bg-[#1C7261] text-white hover:bg-[#148A87]  
                    
                    px-[30px] py-[15px] my-4 leading-[16px] text-[16px]
                    border-[1px] border-[#1C7261] rounded-[5px]
                    "> About Us </button>
                </div>
            </div>

            <div className="bg-white servicesoverlay lg:py-20  ">
                <h1 className="font-bold text-[#051145] lg:text-[50px] text-[28px]  leading-7  lg:leading-[50px] text-center mb-4">
                    Our Services
                </h1>
                <div className="grid lg:grid-cols-3 gap-5 lg:p-10">
                    <div className="w-[353px] h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4">

                        <div className="px-6 py-4">
                            <Image
                                className="object-contain object-center  rounded-full w-auto h-24 mx-auto m-[16px]"
                                src={imgicons} // Replace with your actual image URL
                                alt="Card Image" />
                            <h1 className="text-gray-700 text-base  w-[90%] mx-auto text-center">
                                card title
                            </h1>

                            <p className="text-gray-700 text-base mx-auto w-[90%]">
                                Your card content goes here. Replace this text with your actual content.
                            </p>
                        </div>
                    </div>
                    <div className="w-[353px] h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4">

                        <div className="px-6 py-4">
                            <Image
                                className="object-contain object-center  rounded-full w-auto h-24 mx-auto m-[16px]"
                                src={imgicons}
                                alt="Card Image" />
                            <h1 className="text-gray-700 text-base  w-[90%] mx-auto text-center">
                                card title
                            </h1>

                            <p className="text-gray-700 text-base mx-auto w-[90%]">
                                Your card content goes here. Replace this text with your actual content.
                            </p>
                        </div>
                    </div>
                    <div className="w-[353px] h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4">

                        <div className="px-6 py-4">
                            <Image
                                className="object-contain object-center  rounded-full w-auto h-24 mx-auto m-[16px]"
                                src={imgicons} // Replace with your actual image URL
                                alt="Card Image" />
                            <h1 className="text-gray-700 text-base  w-[90%] mx-auto text-center">
                                card title
                            </h1>

                            <p className="text-gray-700 text-base mx-auto w-[90%]">
                                Your card content goes here. Replace this text with your actual content.
                            </p>
                        </div>
                    </div>
                </div>
                {/* 2nd services  */}
                <div className="grid lg:grid-cols-3 gap-5 womenlaying mt-5 lg:p-8">
                    <div className="w-[353px] h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4">

                        <div className="px-6 py-4">
                            <Image
                                className="object-contain object-center  rounded-full w-auto h-24 mx-auto m-[16px]"
                                src={imgicons} // Replace with your actual image URL
                                alt="Card Image" />
                            <h1 className="text-gray-700 text-base  w-[90%] mx-auto text-center">
                                card title
                            </h1>

                            <p className="text-gray-700 text-base mx-auto w-[90%]">
                                Your card content goes here. Replace this text with your actual content.
                            </p>
                        </div>
                    </div>
                    <div className="w-[353px] h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4">

                        <div className="px-6 py-4">
                            <Image
                                className="object-contain object-center  rounded-full w-auto h-24 mx-auto m-[16px]"
                                src={imgicons}
                                alt="Card Image" />
                            <h1 className="text-gray-700 text-base  w-[90%] mx-auto text-center">
                                card title
                            </h1>

                            <p className="text-gray-700 text-base mx-auto w-[90%]">
                                Your card content goes here. Replace this text with your actual content.
                            </p>
                        </div>
                    </div>
                    <div className="w-[353px] h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4 ">

                        <div className="px-6 py-4">
                            <Image
                                className="object-contain object-center  rounded-full w-auto h-24 mx-auto m-[16px]"
                                src={imgicons} // Replace with your actual image URL
                                alt="Card Image" />
                            <h1 className="text-gray-700 text-base  w-[90%] mx-auto text-center">
                                card title
                            </h1>

                            <p className="text-gray-700 text-base mx-auto w-[90%]">
                                Your card content goes here. Replace this text with your actual content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* This Special Offer for You  */}
            <div className="bg-white specialistoverlay lg:py-20 py-5  ">
                <h1 className="font-bold text-[#051145] lg:text-[50px] text-center  text-[28px] leading-[28px] lg:my-0 my-5">
                    Special Offer for You
                </h1>
                <div className="container mx-auto">
                    <div className="lg:grid grid-cols-2  gap-4 ">

                        <div className="">
                            <Image src={landscapeimg} alt="fly image"
                                className="w-[100%] h-[100%]  lg:p-10"
                            />
                        </div>

                        <div className="grid  grid-rows-2 justify-between">
                            <div className=" col-span-2">
                                <Image src={maskimg} alt="fly image"
                                    className="w-[100%] h-[100%] lg:p-10 " />
                            </div>
                            <div className=" mt-2 col-span-2" >
                                <Image src={maskimg} alt="fly image"
                                    className="w-[100%] h-[100%] lg:p-10"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Counter></Counter>

            {/* Why Choose Us */}

            <div className="bg-white lg:py-20 ">
                <div className="lg:grid grid-cols-2 gap-3 ">
                    <div className=" w-[90%] mx-auto">
                        <h1 className="font-bold text-[#148A87] mt-2 mb-2 text-[14px] ">
                            Why Choose Us
                        </h1>
                        <h1 className="font-bold text-[#051145] lg:text-center   lg:text-[50px] lg:leading-[50px] text-[28px] leading-[28px] ">
                            Why we are different.
                        </h1>
                        <p className="text-[16px] leading-[24px] font-normal text-[#051145] lg:my-5 my-2 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <div className="grid lg:grid-cols-2 lg:gap-5 ">

                            <div className="w-auto h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4 my-3 lg:my-0">

                                <div className="px-6 py-4">
                                    <Image
                                        className="object-contain object-center  rounded-full 
                                        ml-[-5%] w-auto h-24 lg:mx-auto "
                                        src={imgicons} 
                                        alt="Card Image" />
                                    <h1 className="text-[#051145] text-[23px] font-bold my-1 lg:w-[90%] lg:mx-auto lg:text-center">
                                        card title
                                    </h1>

                                    <p className="text-[#051145] text-[16px] mx-auto ">
                                        Your card content goes here. Replace this text with your actual content.
                                    </p>
                                </div>
                            </div>

                            <div className="w-auto h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4 my-3 lg:my-0">

                                <div className="px-6 py-4">
                                    <Image
                                        className="object-contain object-center  rounded-full 
                                        ml-[-5%] w-auto h-24 lg:mx-auto "
                                        src={imgicons} 
                                        alt="Card Image" />
                                    <h1 className="text-[#051145] text-[23px] font-bold my-1 lg:w-[90%] lg:mx-auto lg:text-center">
                                        card title
                                    </h1>

                                    <p className="text-[#051145] text-[16px] mx-auto ">
                                        Your card content goes here. Replace this text with your actual content.
                                    </p>
                                </div>
                            </div>
                            <div className="w-auto h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4 my-3 lg:my-0">

                                <div className="px-6 py-4">
                                    <Image
                                        className="object-contain object-center  rounded-full 
                                        ml-[-5%] w-auto h-24 lg:mx-auto "
                                        src={imgicons} 
                                        alt="Card Image" />
                                    <h1 className="text-[#051145] text-[23px] font-bold my-1 lg:w-[90%] lg:mx-auto lg:text-center">
                                        card title
                                    </h1>

                                    <p className="text-[#051145] text-[16px] mx-auto ">
                                        Your card content goes here. Replace this text with your actual content.
                                    </p>
                                </div>
                            </div>
                            <div className="w-auto h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4 my-3 lg:my-0">

                                <div className="px-6 py-4">
                                    <Image
                                        className="object-contain object-center  rounded-full 
                                        ml-[-5%] w-auto h-24 lg:mx-auto "
                                        src={imgicons} 
                                        alt="Card Image" />
                                    <h1 className="text-[#051145] text-[23px] font-bold my-1 lg:w-[90%] lg:mx-auto lg:text-center">
                                        card title
                                    </h1>

                                    <p className="text-[#051145] text-[16px] mx-auto ">
                                        Your card content goes here. Replace this text with your actual content.
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div>
                        <Image src={landscapeimg} alt="fly image"
                            className="w-[90%] h-[90%]  lg:p-10 lg:block hidden"
                        />
                    </div>
                </div>
            </div>

            {/* Promo code  */}

            <div className=" promobg   py-10">

                <div className="lg:grid  lg:grid-cols-3 flex flex-col  items-center lg:gap-20 lg:py-20 p-5 ">
                    <div className="col-span-2">
                        <h1 className="text-[#051145] lg:text-[72px] text-[48px] font-[700] leading-[48px] lg:leading-[72px] lg:text-left text-center ">Discount up to <br />35% for first <br /> member!</h1>
                        
                        <p className="text-[16px] leading-[24px] font-normal text-[#051145] lg:my-4 p-5 lg:w-[90%]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <button className="bg-[#1C7261] text-white hover:bg-[#148A87]    
                px-[30px] py-[15px] lg:my-4 my-1 leading-[16px] text-[16px]
                border-[1px] border-[#1C7261] rounded-[5px] lg:ml-0 ml-[30%]"> Book Now </button>
                    </div>
                    <div className="lg">

                    </div>
                </div>
            </div>
            

            <Faq></Faq>

        </div>
    )
}