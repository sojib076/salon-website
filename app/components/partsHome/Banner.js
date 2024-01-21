import Image from "next/image"
import headerimage from "../../../public/images/bg_header_1.png"
import womenlaying from "../../../public/images/happy-african-woman-in-resort-spa-1536x1024.jpg"
import flyimage from "../../../public/images/pattern_1-p57r4455lvw1r4plky21bs0glqtsk6ezclujqnlc74.png"
import imgicons from "../../../public/images/Rock-1.png"


export default function Banner() {
    return (
        <div>
            <div className="lg:grid  lg:grid-cols-3 flex flex-col lg:p-20 p-10 items-center lg:gap-20 bg-[#ECF0F2]">
                <div>
                    <h1 className="text-[#051145] lg:text-[72px] text-[50px] font-[700] leading-[50px] lg:leading-[72px] text-left ">Home of<br />Beauty SPA ,<br /> & Care. </h1>
                    <p className="text-[16px] leading-[24px] font-normal text-[#051145] my-4 text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button className="bg-[#1C7261] text-white hover:bg-[#148A87]  
                    
                px-[30px] py-[15px] lg:my-4 my-1 leading-[16px] text-[16px]
                border-[1px] border-[#1C7261] rounded-[5px]
                "> Book Now </button>
                </div>
                <div className="lg:col-span-2 w-full h-full ">
                    <Image src={headerimage} alt="header image "
                        className="lg:mt-8 mb-[-2.5em]" />
                </div>
            </div>

            <div className="lg:grid grid-cols-2 flex flex-col-reverse  bg-white lg:p-10 lg:py-20 lg:gap-16 womenlaying">
                <div >
                    <Image src={womenlaying} alt="women laying" className="lg:w-[90%]  p-0 relative mt-[-5%] mb-5 lg:mb-0"
                        objectFit="cover" objectPosition="center"
                    />
                    <Image src={flyimage} alt="fly image" className=" lg:block hidden relative left-[80%] bottom-[50%]" />
                </div>
                <div className="p-5">
                    <h1 className="text-[#051115]">
                        About us
                    </h1>
                    <h1 className="text-[#051145] text-[50px] font-[700] leading-[50px] ">
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

            <div className="bg-white servicesoverlay lg:py-20">
                <h1 className="font-bold text-[#051145] text-[50px] leading-[50px] text-center mb-4">
                    Our Services
                </h1>
                <div className="grid lg:grid-cols-3 gap-5">
                    <div className="w-[353px] h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4">

                        <div className="px-6 py-4">
                            <Image
                                className="object-contain object-center  rounded-full w-auto h-24 mx-auto m-[16px]"
                                src={imgicons} // Replace with your actual image URL
                                alt="Card Image" />
                            <h1 className="text-gray-700 text-base mb-[20px] w-[90%] mx-auto text-center">
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
                            <h1 className="text-gray-700 text-base mb-[20px] w-[90%] mx-auto text-center">
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
                            <h1 className="text-gray-700 text-base mb-[20px] w-[90%] mx-auto text-center">
                                card title
                            </h1>

                            <p className="text-gray-700 text-base mx-auto w-[90%]">
                                Your card content goes here. Replace this text with your actual content.
                            </p>
                        </div>
                    </div>
                </div>
                {/* 2nd services  */}
                <div className="grid lg:grid-cols-3 gap-5 womenlaying mt-5">
                    <div className="w-[353px] h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4">

                        <div className="px-6 py-4">
                            <Image
                                className="object-contain object-center  rounded-full w-auto h-24 mx-auto m-[16px]"
                                src={imgicons} // Replace with your actual image URL
                                alt="Card Image" />
                            <h1 className="text-gray-700 text-base mb-[20px] w-[90%] mx-auto text-center">
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
                            <h1 className="text-gray-700 text-base mb-[20px] w-[90%] mx-auto text-center">
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
                            <h1 className="text-gray-700 text-base mb-[20px] w-[90%] mx-auto text-center">
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
            <div className="bg-white specialistoverlay lg:py-20 py-10">
                <h1 className="font-bold text-[#051145] text-[50px] leading-[50px] text-center mb-4">
                    Special Offer for You
                </h1>
                <div className="grid lg:grid-cols-3 gap-5">
                    <div className="w-[353px] h-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 py-4">

                        <div className="px-6 py-4">
                            <Image
                                className="object-contain object-center  rounded-full w-auto h-24 mx-auto m-[16px]"
                                src={imgicons} // Replace with your actual image URL
                                alt="Card Image" />
                            <h1 className="text-gray-700 text-base mb-[20px] w-[90%] mx-auto text-center">
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
                            <h1 className="text-gray-700 text-base mb-[20px] w-[90%] mx-auto text-center">
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
                            <h1 className="text-gray-700 text-base mb-[20px] w-[90%] mx-auto text-center">
                                card title
                            </h1>

                            <p className="text-gray-700 text-base mx-auto w-[90%]">
                                Your card content goes here. Replace this text with your actual content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}