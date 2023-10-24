import React from 'react'

const Sidemenu = ({index,setIndex}) => {
    console.log(index);
    const changeName = (e)=>{
        setIndex(e.target.textContent);
    }
  return (
    <div className='h-[89vh] py-10 w-32 border-r-2 gap-1 flex flex-col items-center'>
        {
            ['Home','Dashboard','Users','Contacts','Reports','About'].map((data,i)=>{
                return <button className={`${index == data ?'bg-gray-200':'bg-transparent'} py-2 font-medium w-full text-lg`} onClick={changeName} key={i}>{data}</button>
            })
        }
    </div>
  )
}

export default Sidemenu;