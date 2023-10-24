import React from 'react';
import {FaRegBell} from 'react-icons/fa';

const Navbar = ({index}) => {
  return (
    <div className='flex items-center justify-between bg-blue-600 text-white px-10 py-3'>
        <div className='flex gap-3 items-center'>
            <p className='text-2xl'>Company</p>
            <p className='text-2xl'> | </p>
            <p className='text-xl'>{index} Page</p>
        </div>
        <div className='flex items-center gap-14'>
            <FaRegBell className='text-xl cursor-pointer font-black' />
            <div className='flex gap-5'>
                <div>
                    <p>John Wick</p>
                    <p>Admin</p>
                </div>
                <div className='bg-white cursor-pointer opacity-90 rounded-full p-4 font-bold text-black'>
                    JW
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;  