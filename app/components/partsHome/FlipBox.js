// YourComponent.js
import Image from 'next/image';





const FlipBox = ({imageSrc }) => {
  return (
    <div className="relative  overflow-hidden">
      {/* Image */}
      <Image
        src={imageSrc}
        alt="Your Image"
        className="w-full h-full object-cover"
      />

      {/* Overlay with Text and Button */}
      <div className="bg-[#051145] absolute top-0 left-0 w-full h-full flex 
      flex-col items-center justify-center opacity-0
       transition-opacity duration-500 hover:opacity-100">
        <h3 className="text-white text-[31px] font-bold mb-2 ">Your Text</h3>
        <p className="text-white text-[14px] font-bold mb-2 ">Your Text</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded text-[14px]">Your Button</button>
      </div>
    </div>
  );
};

export default FlipBox;

