import { Database, SearchCheck, Target } from "lucide-react";
import React from "react";
import FeaturedItem from "../ui/FeaturedItem";
import BlurCircle from "./BlurCircle";

const Featured = () => {
  return (
    <section id="featured" className="py-20">
      <div className=" relative max-w-[1200px] mx-auto ">
        <BlurCircle bottom="50px" left="-50px"/>
        <div className="flex flex-col items-center gap-y-20">
          <h1 className="text-4xl text-[#e0e0e0] font-semibold">
            Why use Filmz?
          </h1>
          <div className="flex max-w-[1200px] w-full flex-col items-center gap-8 text-[#e0e0e0]">
            <FeaturedItem
              title="Filmz is super easy to use"
              paragraph="Even first-time users say they figured everything out in under 30 seconds."
              icon={Database}
            />
            <FeaturedItem
              title="It has way more movies and shows than most apps"
              paragraph="Filmz claims a growing library of 20+ million titles, including stuff other apps don’t even know exists."
              icon={Target}
            />
            <FeaturedItem
              title="It finds what you’re looking for instantly"
              paragraph="Even if you misspell the title or only remember a random detail, it still pulls up the right movie or show."
              icon={SearchCheck}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
