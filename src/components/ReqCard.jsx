import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeBody } from '../redux/reqBodySlice'

const ReqCard = () => {
  const dispatch=useDispatch()
  const {data}=useSelector(state=>state.reqbody)

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <div className='bg-slate-600 w-full relative'>
      <h1 className='w-full py-4 px-2 text-lg bg-slate-600'>Request</h1>
      <form className='w-full' onSubmit={handleSubmit} >
        <textarea  value={data}  className='w-full text-black'  
        onChange={(e)=>dispatch(changeBody(e.target.value))} rows={6}>

        </textarea>
      </form>
    </div>
  )
}

export default ReqCard