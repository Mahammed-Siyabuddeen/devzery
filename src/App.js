import logo from './logo.svg';
import './App.css';
import ReqCard from './components/ReqCard';
import ResView from './components/ResView';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setResBody } from './redux/resBodySlice';

function App() {
  const[method,setMethod]=useState('GET')
  const[url,setUrl]=useState('')
  const {data}=useSelector(state=>state.reqbody)
  const dispatch=useDispatch()
  const handleSubmit=()=>{
      axios({
        method:method,
        url:url,
        data:data
    }).then((response)=>{
      dispatch(setResBody(response))
      console.log(response)
      
    }).catch((error)=>{
      dispatch(setResBody(""))
      console.log(error);
      
    })
   
  }
  return (
    <div className="bg-slate-950  text-white min-h-96 w-full">
      <div className='flex max-md:flex-col-reverse px-14 py-28 max-md:px-8 gap-10'>
        <div className="basis-3/5 relative">
        <ReqCard/>
        <ResView/>
        </div>
        <div className="basis-2/5">
        <div className='flex relative'>
          <input value={url} onChange={(e)=>setUrl(e.target.value)} type="text" className='flex-1 outline-none hover:outline-0 text-black' />
          <button onClick={handleSubmit} className='bg-slate-600 px-6 py-3'>send</button>
        </div>
        <div className='flex gap-5 p-10 max-md:justify-center'>
          <button onClick={()=>setMethod('GET')} className={`bg-slate-600 px-6 py-3 rounded  ${method==='GET'?'':'scale-110'}`} >GET</button>
          <button onClick={()=>setMethod('POST')} className={`bg-slate-600 px-6 py-3 rounded  ${method==='POST'?'':'scale-110'}`}>POST</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
