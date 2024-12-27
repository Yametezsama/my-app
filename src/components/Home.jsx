import React from 'react'
import banner from '../assets/banner.png'
import {motion} from 'framer-motion'
import { fadeIn } from './variants'
export const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 ' id="home">
        <div className='bg-indigo-300 rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>

                <div
                 >
                    <img src={banner} className='lg:h-[386px]'/>
                </div>
                
                <div className='md:w-3/5'>
                <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 '>Develop your skills without diligence</h2>
                <p className='text-[#EBEBEB] text-2xl mb-8 '>A good example of a paragraph contains a 
                    topic sentence, details and a conclusion. There are many different kinds of animals
                    that live in China.
                </p>
                <div className='space-x-5 space-y-4'>
                    <button className='py-3 px-8 bg-secondary font-semibold text-white rounded 
                    hover:bg-primary transition-all duraion-300'>Get Started
                    </button>
                    <button className='py-3 px-8 bg-secondary font-semibold text-white rounded 
                    hover:bg-primary transition-all duraion-300'>Discount</button>

                </div>

                </div>

            </div>
        </div>
    </div>
  )
}
