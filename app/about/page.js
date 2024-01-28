import Bar from "../components/aboutparts/Bar";
import womenlaying from "../../public/images/happy-african-woman-in-resort-spa-1536x1024.jpg"
import flyimage from "../../public/images/pattern_1-p57r4455lvw1r4plky21bs0glqtsk6ezclujqnlc74.png"
import progressimg from "../../public/images/beautiful-relaxed-woman-having-clay-mask-applying-to-the-back-in-spa-salon.jpg"

import Image from "next/image";
import Counter from "../components/partsHome/Counter";

export default function About() {
  return (
    <div className="bg-white">
      <div className="bg-[#ECF0F2]  h-[200px] ">
        <div className="w-[90%] mx-auto"> 
        <h1 className="text-[#051145] lg:text-[72px] font-[700] lg:leading-[72px] p-10 text-center text-[28px] leading-[28px]  ">
          About us
        </h1>
        <p className="text-center text-[#051145] text-[20px] leading-5"> 
          Home / About us
        </p>
        </div>
      </div>

      {/* About this  */}
      <div>
        <div>
          <div className="lg:grid grid-cols-2 flex flex-col-reverse  bg-white lg:p-10 lg:py-20 lg:gap-16 womenlaying">
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
              <h1 className="text-[#051145] text-[28px] font-[700] leading-[28px] ">
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
        </div>
      </div>

      <div className="w-[90%] mx-auto py-20">
        <div>
          <div className="lg:grid grid-cols-2    bg-white lg:p-10 lg:py-20 lg:gap-16 ">

            <div className="p-2">
              <div className="  ">
                <h1 className="font-bold text-[#148A87]  ">
                  Why Choose Us
                </h1>
                <h1 className="font-bold text-[#051145]   lg:text-[50px] lg:leading-[70px] text-[28px] leading-[28px] ">
                  Professional Therapist ready to help you.
                </h1>
                <p className="text-[16px] leading-[24px] font-normal text-[#051145]  mb-10 mt-5 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
              <Bar skill="Face Treatments" progress="90" />
              <Bar skill="Body Treatments" progress="80" />
              <Bar skill="Massage therapy" progress="70" />
            </div>
            <div className="lg:block hidden">
              <Image src={progressimg} alt="women laying" className="lg:w-[100%]  p-5 relative mt-[-5%] mb-5 lg:mb-0"/>
              <Image src={flyimage} alt="fly image" className=" lg:block hidden relative left-[80%] bottom-[50%]" />
            </div>
          </div>
        </div>
      </div>
      <Counter></Counter>
    </div>

  )
}