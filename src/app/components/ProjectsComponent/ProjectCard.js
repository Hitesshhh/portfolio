import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const ProjectCard = () => {
  return (
    <div className="w-1/3">
      <div className="flex flex-col projectContainer">
        <div className="projectImageContainer border border-white/25 w-full h-80">
          <Image
            className="w-full h-full object-fill"
            src={
              "https://images.unsplash.com/photo-1708447782261-cdbecd7c97c6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwYW5kJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D"
            }
            width={100}
            height={100}
            alt="projectImage"
          />
        </div>  
        <div>
          <div className="flex py-5 items-start gap-12 justify-items-start">
            <p className="text-brand text-4xl font-oswald font-bold scale-y-[1.5] w-10">
              01
            </p>
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-lg font-medium font-poppins leading-none scale-y-[1.3]">
                VLOCE BIKES
              </span>
              <span className="text-md font-normal font-poppins leading-none text-white/75">
                E-COMMERCE WEBSITE
              </span>
            </div>
            <div className="self-center">
              <MoveRight size={50} strokeWidth={0.75}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
