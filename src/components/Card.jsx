import React from 'react';
import house from '../assets/house.jpg'

const Card = ({number1,number2}) => {
  return (
    <div className='pl-4 flex flex-col h-fit gap-5  ml-5 rounded-md py-4 max-w-2xl shadow-xl'>
        <div className='flex justify-between'>
            <div className='flex gap-5'>
                <img src={house} width={150} className='rounded-md' />
                <div>
                    <p className='text-2xl font-bold'>Card Details One</p>
                    <p> 20 Jan 2019  -  30 Dec 2022 </p>
                </div>
            </div>
            <p className='text-green-600 text-lg pr-5'>Jim Wills</p>
        </div>
        <div className='flex flex-wrap gap-6 justify-around md:gap-0 md:justify-start'>
          <div className='max-w-[200px] mx-1'>
            <h2 className='text-lg text-start font-semibold'>Activities</h2>
              <ol className='list-decimal text-start text-sm'>
                <li>
                    TS001 - Team work among the perfects on duty coupled with support of the Master.
                </li>
                <li>
                    <span className='underline'>TA973794</span> - The perfects on duty should work hand in hand with the students <span className='text-green-500 italic cursor-pointer'>....4 more</span>
                </li>
              </ol>
          </div>
          <div className='max-w-[200px] mx-1'>
            <h2 className='text-lg text-start font-semibold'>Reports</h2>
              <ol className='list-decimal text-start text-sm'>
                <li>
                  <span className='underline'>{number1}</span> - study may be limited to the questionaire.
                </li>
                <li>
                    <span className='underline'>{number2}</span> - All returned responses from the sample.
                </li>
                <li>
                    The breakdown consisted of 2.1% under the age 20 <span className='text-green-500 italic cursor-pointer'>....2 more</span>
                </li>
              </ol>
          </div>
          <div className='bg-gray-200 rounded-md px-3'>
            <div className='max-w-[200px] mx-1'>
              <h2 className='text-lg text-start font-semibold'>To DO</h2>
                <ol className='list-disc text-start text-sm'>
                  <li className=''>
                      Contact Develop new feature for the web Application
                  </li>
                  <li>
                      Fix the issue with plumbing by afternoon <span className='text-green-500 italic cursor-pointer'>....</span>
                  </li>
                </ol>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card;