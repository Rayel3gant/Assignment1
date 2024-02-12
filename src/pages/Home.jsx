import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';

const Home = () => {
  const [quote,setQuote]=useState([])
  const [loading,setLoading]=useState(false)


  const getQuote=async()=>{
    setLoading(true)
    try{
      const res=await fetch('http://api.quotable.io/quotes/random')
      const data=await res.json()
      setQuote(data)
      console.log(quote[0])
    } catch(error){
      console.log(error)
    }
    setLoading(false)

  }
  useEffect(()=>{
    getQuote()
  },[])
  return (
    <div className='w-full h-[calc(100vh-6rem)] overflow-hidden flex justify-center items-center'>
    {
      loading ? <Loader/>  :(
        <div className='w-3/4 max-w-[500px] p-8 bg-gradient-to-r from-[#d3e1e6] to-[#0366e3] border-2 border-black rounded-md'>
          <div className='text-black font-semibold'>
            <span>" </span>
            {quote[0]?.content}
            <span> "</span>
          </div>


          <div className='mt-8'>
              -  {quote[0]?.author}
          </div>
          <button className='px-5 py-3 bg-black rounded-md text-white font-bold text-xl mt-12 hover:scale-110 hover:bg-white hover:text-black transition-all duration-1000' onClick={getQuote}>Generate Quote</button>
      </div>
      )
    }
      
    </div>
  )
}

export default Home