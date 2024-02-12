import React from 'react'
import { useForm } from 'react-hook-form'
import dataDB from '../config/FirebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import {isAddress } from 'ethers'
import { toast } from 'react-toastify'

const Transaction = () => {
    const{
        register,
        handleSubmit,
        formState:{errors},
        reset
    }=useForm()


    
    const submitHandler=async(data)=>{
        console.log("data submitted",data)
        const result=isAddress(data.address)
        console.log(result)
        if(result){
            const dataRef=collection(dataDB,'Data')
            await addDoc(dataRef,data)
            toast.success("data added successfully")
            reset()
        }           
        else{
            toast.error("not a valid Ethereum address format")
        }
    }
  return (
    <div className='w-full h-[calc(100vh-6rem)] flex justify-center items-center'>
        <form onSubmit={handleSubmit(submitHandler)} className='p-8 min-w-[500px]  border-2 rounded-md border-blue-950 flex flex-col gap-y-12'>

        
            <div className='flex flex-col gap-y-1'>
                <label htmlFor='address' className='text-left text-xs text-black'>Wallet Address <sup>*</sup></label>
                <input type='text' id='address' name='address' className='p-3 border-b-4 border-orange-300 rounded-md bg-blue-200' {...register('address',{required:true})}/>
                {
                    errors.address && <span>Please Enter Wallet Address</span>
                }
            </div>


            <div className='flex flex-col gap-y-1'>
                <label htmlFor='amount' className='text-left text-xs text-black'>Amount <sup>*</sup></label>
                <input type='number' min='0' max='10000' id='amount' name='amount' className='p-3 border-b-4 border-orange-300 rounded-md bg-blue-200' {...register('amount',{required:true})} />
                {
                    errors.amount && <span>Please Enter Transaction's Amount</span>
                }
            </div>

            <button type='submit' className='button px-5 py-3 font-bold uppercase text-2xl text-white bg-black rounded-md w-fit place-self-end hover:scale-110  transition-all duration-1000'>PAY</button>
        </form>
    </div>
  )
  
}

export default Transaction