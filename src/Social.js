import React from 'react'
import ReactDOM from 'react-dom'
import { FaFacebook,FaInstagram,FaTwitter,FaGithub ,FaLinkedin, FaEnvelope} from 'react-icons/fa';

function Social(){

    return(
        <div className='min-h-4'>
        <div className=''>


        <ul className='flex my-14 mx-8'>
            <li className='px-5'>
                <a href="https://www.linkedin.com/in/jaydip-changani/" target="_blank" rel="noopener noreferrer" >
                <FaLinkedin className='hover:text-orange-600 text-4xl' />
                </a>
            </li>

            <li className='px-5'>
                <a href="mailto:jaydipchangani2@gmail.com" target="_blank" rel="noopener noreferrer" >
                <FaEnvelope className='hover:text-orange-600 text-4xl' />
                </a>
            </li>

            <li className='px-5'>
                <a href="https://github.com/jaydipchangani" target="_blank" rel="noopener noreferrer" >
                <FaGithub className='hover:text-orange-600 text-4xl' />
                </a>
            </li>
        </ul>

        <ul className='flex mx-8'>

            <li className='px-5'>
                <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer" >
                <FaFacebook className='hover:text-orange-600 text-4xl' />
                </a>
            </li>

            <li className='px-5'>
                <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer" >
                <FaInstagram className='hover:text-orange-600 text-4xl' />
                </a>
            </li>

            <li className='px-5'>
                <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer" >
                <FaTwitter className='hover:text-orange-600 text-4xl' />
                </a>
            </li>
        </ul>


        </div>
            
        </div>
    )
}

export default Social;