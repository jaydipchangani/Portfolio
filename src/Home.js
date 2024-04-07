import React from "react";

function Home() {
  return (
    <div class="m-8 grid grid-flow-row gap-8 font-sans drop-shadow-md hover:drop-shadow-xl sm:grid-cols-4 ">
      <div class="max-h-[600px] w-auto rounded-lg bg-gray-800 drop-shadow-md hover:bg-orange-500 hover:drop-shadow-xl sm:row-span-2">
        <img
          src="./images/logoside.png"
          alt="logoside"
          class="object-cover  rounded-lg  "
        />
      </div>

      <div class=" h-[320px]  w-auto rounded-lg drop-shadow-md hover:drop-shadow-xl sm:col-span-2 bg-slate-500">
        <img
          src="./images/1.png"
          alt="poster"
          class="object-cover h-[320px] w-[800px] rounded-lg"
        />
      </div>
      <div class="min-h-[300px] rounded-lg bg-red-400 drop-shadow-md hover:drop-shadow-xl text-black justify-center hover:text-white duration-500 overflow-hidden">
        <h1 class="mx-8  mt-14 flex  text-4xl font-semibold ">Hello there👋</h1>

        <h3 class="mx-8  mt-5 flex  text-xl ">
          I am highly motivated B.tech IT student with deep intrest in Web
          Technology and Cybeersecurity.I am highly motivated B.tech IT student
          with deep intrest in Web Technology and Cybeersecurity.
        </h3>
      </div>

      <div class="min-h-[250px] rounded-lg bg-yellow-400 drop-shadow-md hover:drop-shadow-xl"></div>

      <div class="min-h-[250px] rounded-lg bg-gray-400 drop-shadow-md hover:drop-shadow-xl  sm:col-span-2 ">
        <h2 class=" flex text-center mt-16 text-4xl text-white hover:text-black  hover:font-light">
          " Website without visitors is like a ship lost in the horizon. "
        </h2>
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
