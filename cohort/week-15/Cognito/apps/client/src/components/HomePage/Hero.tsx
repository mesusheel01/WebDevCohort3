import React from "react";
import hero from "../../assets/images/hero.png";
const Hero = () => {
  return (
    <div className="grid grid-cols-2">
        {/* left section */}
        <div className="">
            <h1>Hey welcome to Cognito🧠</h1>
            <p>The only place to put your dialy accessable content with individualization and security.</p>
        </div>
    </div>

  );
};

export default Hero;
/*
<div className="flex gap-10 justify-between">
            <div className="flex m-20 translate-y-40 flex-wrap gap-10 w-[50rem] flex-col">
        <h1
          className="text-3xl sm:text-4xl w-[35rem] md:text-5xl
            xl:text-6xl font-overpassMono"
        >
          Hey welcome to{" "}
          <span className="text-myGreen font-mono">Cognito🧠</span>
        </h1>
        <p className="text-lg md:text-xl  font-mono">
          The only place to put your dialy accessable content with
          individualization and security.
        </p>
      </div>

      <div className="absolute top-[9rem] left-[60rem] h-[60vh] w-[30vw] bg-[#F9FDFC] shadow-lg rounded-[20px]">
        <img
          src={hero}
          alt="logo"
          className="h-[55vh] absolute top-7 left-2 lg:w-[30rem]"
        />
        <p className="text-red-600">
          Have faced all these issues? Fix it now, Sign up and get started!
        </p>
      </div>
    </div>
*/
