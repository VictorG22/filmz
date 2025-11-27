import React from "react";

const FeaturedItem = ({title, paragraph, icon: Icon}) => {
  return (
    <>
      <div className="flex flex-col w-full max-w-[800px] gap-2 p-0.5 bg-linear-to-r from-purple-500 to-pink-500 hover:rounded-md hover:shadow-lg hover:scale-109 transition duration-200 rounded ">
        <div className="bg-black p-4">

        <div className="flex items-center gap-4">
          <Icon className="h-10 w-10 border-2 border-[#00ffff]  text-[#00ffff] rounded-full p-2" />
          <h3 className="font-semibold text-2xl text-[#]">
            {title}
          </h3>
        </div>
        <p>
          {paragraph}
        </p>
        </div>
      </div>
    </>
  );
};

export default FeaturedItem;
