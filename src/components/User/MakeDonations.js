import React from 'react'
import { toast } from 'react-toastify'
import { useDataContext } from '../../context/ContextProvider'
import { initiateDonation } from '../../firebase'
import useAuth from '../../hooks/useAuth'
import about1 from '../../images/about1.png'

const MakeDonations = () => {
    const { userData: data, setUserDataUpdated } = useDataContext()
    const { user, email } = useAuth()

    async function submit(event) {
        event.preventDefault()
        const { success } = await initiateDonation(user)
        if (!success) return toast.error('Some error occurred...')
        setUserDataUpdated(true)
        toast.success('Donation initiated')
    }

    return (
        <>
            <div className='flex items-center justify-center w-full'>
                <div className='p-12 bg-gradient-to-r from-gradient1a to-gradient1b flex  justify-center'>
                    <div className='flex mx-auto justify-center items-center'>
                        <div className='p-2 w-1/3'>
                            <img className='rounded-full' src={about1} alt="" />
                        </div>
                        <div className='p-8 items-center w-1/2'>
                            <h1 className='font-bold text-xl m-1'>Please provide the following information for donations:</h1>
                            <div className='flex flex-col'>
                                <form onSubmit={submit}>
                                    <input className='rounded-md w-4.8 px-2 py-1 mt-2 m-1 bg-gray-100 hover:bg-white' type="text" value={data.name} />
                                    <input className='rounded-md w-4.8 px-2 py-1 m-1 bg-gray-100 hover:bg-white' type="email" value={email} />
                                    <input className='rounded-md w-4.8 px-2 py-1 m-1 bg-gray-100 hover:bg-white' type="phone" value={data.mobile} />
                                    <input className='rounded-md w-4.8 px-2 py-1 m-1 bg-gray-100 hover:bg-white' type="number" value={data.pincode} />
                                    <input className='rounded-md w-9.8 px-2 py-1 m-1 bg-gray-100 hover:bg-white' type="text" value={data.address} />
                                    <input className='rounded-md w-9.8 px-2 py-1 m-1 bg-gray-100 hover:bg-white' type="text" placeholder='Description (Regarding type of donation)' required />
                                    <button type='submit' className="font-semibold my-2 mx-auto btn bg-gray-200 rounded-lg px-4 py-2 m-2">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MakeDonations