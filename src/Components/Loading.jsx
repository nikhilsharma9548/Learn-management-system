import React from 'react'

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" border-5  aspect-square w-14 rounded-full border-gray-300 border-t-blue-500 duration-700 animate-spin"></div>
    </div>
  );
};

export default Loading;