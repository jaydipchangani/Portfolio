import React from "react";
import Social from "./Social";
import Resume from "./Resume";
import backgroundImage from './image.png';

function Home() {
  return (
    <div class="m-8 grid grid-flow-row gap-8 font-sans drop-shadow-md hover:drop-shadow-xl sm:grid-cols-4 bg-slate-100">
      <div class="max-h-[600px] w-auto rounded-lg bg-gray-700 drop-shadow-md hover:bg-gray-300 hover:drop-shadow-xl sm:row-span-2">
        <img
          src="./images/logoside.png"
          alt="logoside"
          class="object-cover w-max  rounded-lg  "
        />
      </div>

      <div class=" h-[320px]  w-auto rounded-lg drop-shadow-md hover:drop-shadow-xl sm:col-span-2 bg-slate-500">
        <img
          src="./images/1.png"
          alt="poster"
          class="object-cover h-[320px] w-[800px] rounded-lg"
        />
      </div>
      <div class="min-h-[300px] rounded-lg bg-white drop-shadow-md  overflow-hidden ">
        <h1 class="mx-8  mt-10 flex  text-4xl font-bold ">Hello there👋</h1>

        <h3 class="mx-8  mt-3 flex  text-x text-justify">
          I am highly motivated B.tech IT student with deep intrest in Web
          Technology and Cybersecurity.I am highly motivated B.tech IT student
          with deep intrest in Web Technology and Cybeersecurity.
        </h3>
      </div>

      <div class="min-h-[250px] rounded-lg bg-white drop-shadow-md hover:drop-shadow-xl">

        <div>
          <Social/>
        </div>

      </div>

      <div style={{
            backgroundImage: `url(${backgroundImage})`,
            objectFit:'cover',
            overflow:'hidden' 

          }} class="min-h-[250px] rounded-lg bg-white drop-shadow-md hover:drop-shadow-xl  sm:col-span-2 ">
        
        <Resume/>
      </div>

      <div class="min-h-[500px] rounded-lg bg-lime-500 drop-shadow-md hover:drop-shadow-xl sm:col-span-2 sm:col-start-3 sm:row-span-2 sm:row-start-2"></div>

      <div class="min-[h]-[500px] bg-blue-500 drop-shadow-md hover:drop-shadow-xl sm:col-span-4 sm:col-start-1 sm:row-span-1 sm:row-start-4 ">
        <h2 class=" flex text-center mt-16 text-4xl text-white hover:text-black  hover:font-light">
          " Website without visitors is like a ship lost in the horizon. "
        </h2>
      </div>
    </div>
  );
}

export default Home;
