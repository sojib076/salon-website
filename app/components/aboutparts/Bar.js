import React from 'react';

const Bar = ({ skill, progress }) => {
  return (
    <div className="">
      <h3 className="text-lg font-semibold mb-[-20px] text-[#051145]">{skill}</h3>
      <div className="relative ">
        <div className="flexitems-center justify-between">
          <div className="text-right">
            <span className="text-2xl font-semibold inline-block text-[#148A87]">
              {progress}%
            </span>
          </div>
        </div>
        <div className="flex h-1 overflow-hidden text-xs bg-gray-200">
          <div
            style={{ '--progress': `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap
             text-[#148A87]  justify-center
              bg-[#148A87]  slow-fill-animation"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
