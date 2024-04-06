import React from "react";
import ReactDOM from "react-dom";

function Home() {
  return (
    <div class="m-2 grid grid-flow-row gap-4 font-serif drop-shadow-md hover:drop-shadow-xl sm:grid-cols-3">
      <div class="min-h-[250px] rounded-lg bg-orange-400 drop-shadow-md hover:bg-orange-500 hover:drop-shadow-xl">
        <h1 class="m-20 flex justify-center text-5xl text-white">
          Hello there👋
        </h1>
      </div>
      <div class="min-h-[250px] rounded-lg drop-shadow-md hover:drop-shadow-xl sm:col-span-2">
        <img src="./images/1.png" class="object-cover h-64 w-full rounded-lg "/> 

      </div>
      <div class="min-h-[50px] rounded-lg bg-red-400 drop-shadow-md hover:drop-shadow-xl sm:col-start-1 sm:row-span-2 sm:row-start-2"></div>
      <div class="min-h-[250px] rounded-lg bg-yellow-400 drop-shadow-md hover:drop-shadow-xl"></div>
      <div class="min-h-[250px] rounded-lg bg-gray-400 drop-shadow-md hover:drop-shadow-xl ">
        <h2 class=" flex text-center mt-16 text-4xl text-white hover:text-black  hover:font-light">
          " Website without visitors is like a ship lost in the horizon. "
        </h2>
      </div>
      <div class="min-h-[500px] rounded-lg bg-lime-500 drop-shadow-md hover:drop-shadow-xl sm:col-span-2 sm:col-start-2 sm:row-span-2 sm:row-start-3"></div>
      <div class="min-h-[250px] rounded-lg bg-pink-400 drop-shadow-md hover:drop-shadow-xl"></div>
    </div>
  );
}

export default Home;
