import React, { useEffect, useState } from 'react'
import dataDB from '../config/FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Loader from '../components/Loader'


const Data = () => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)

    const getData=async()=>{
      setLoading(true)
        try{
          const dataRef=collection(dataDB,'Data')
          const transactionData=await getDocs(dataRef)
          setData(transactionData.docs.map(val => ({...val.data(),id:val.id })))
          console.log(data)
        } catch(error){
          console.log(error)
        }
        setLoading(false)
    }

    useEffect(()=>{
      getData()
    },[])
  return (
    <div className='w-full h-[calc(100vh-6rem)] overflow-y-hidden flex justify-center items-center '>
        {
          loading? (<Loader/>) : (
            
            <div className='w-full '>
              {
                data.length ===0 ? (
                  <div className='text-3xl'>
                    NO DATA FOUND 
                  </div>
                ) : (
                  <div className='w-full flex justify-center items-center'>

                    <div className='w-3/4 lg:max-w-[600px]  flex flex-col p-8     border-black border-2 rounded-md  '>

                      <div className='py-4 flex items-center justify-between  font-semibold text-xl uppercase'>
                        <div className='w-3/5'>Address</div>
                        <div className='w-1/4 '>Amount</div> 
                      </div>

                      <div className='h-[2px] w-full bg-black'/>

                      <div className='w-full flex flex-col gap-y-4 mt-6'>
                      {
                        data.map((entry,index)=>(
                            <div key={index} className='w-full flex items-center justify-between'>
                              <div className='w-3/5 text-center'>{entry.address}</div>
                              <div className='w-1/4 text-center  '>{entry.amount}</div>
                            </div>
                        ))
                      }
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          )
        }
    </div>
  )
}

export default Data