import React from 'react'
import ReactDOM from 'react-dom';
import Jd from './Jaydip_CV.pdf';




function Resume(){

     return (
        <div className='text-center mt-16'>
        <h1 className='text-2xl text-black font-bold'>My Skills Are Downloadable (Just Like My CV)</h1>

        <a href={Jd} download="Jaydip_CV" target='_blank' rel='noopener'>
        <button className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-5">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download</span>
        </button>
        </a>
        </div>
     )
}

export default Resume;