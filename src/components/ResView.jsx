import React from 'react'
import { useSelector } from 'react-redux'

const ResView = () => {
    const {data}=useSelector((state)=>state.resbody)
    console.log(data);
    
  return (
    <div className='bg-slate-600 w-full relative'>
    <h1 className='w-full py-4 px-2 text-lg bg-slate-600'>Response</h1>
    <pre className='w-full bg-white h-96 overflow-scroll m-auto text-black'>
    {JSON.stringify(data,null,2)}
    </pre>
  </div>
  )
}

export default ResView