import React from 'react'
import { Home, ChevronRight, PackageCheck } from 'lucide-react'
import { Link, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


function SelectDCompany() {
    const secondExample = {
        size: 20,
        value: 2.5,
        edit: false,
        color: "black",
        activeColor: "orange",
    }
    return (
        <div>
            <div className="mx-auto w-full min-h-screen bg-slate-100 py-2">
                <div className="mx-auto my-4 max-w-6xl md:my-6">
                    <nav className="mt-16 sm:flex hidden" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <span
                                    className="ml-1 inline-flex text-sm font-medium text-green-600  md:ml-2"
                                >
                                    <Home size={16} className="mr-2 text-green-600" />
                                    Riceiver's Information
                                </span>
                            </li>

                            <li >
                                <div className="flex items-center">
                                    <ChevronRight size={16} className="mr-2 text-green-600" />
                                    <span
                                        className="ml-1 text-sm font-medium text-green-600  md:ml-2"
                                    >
                                        Sender's Information
                                    </span>
                                </div>
                            </li>
                            <li >
                                <div className="flex items-center">
                                    <ChevronRight size={16} className="mr-2 text-green-600" />
                                    <span
                                        className="ml-1 text-sm font-medium text-green-600 md:ml-2"
                                    >
                                        Parcel Details
                                    </span>
                                </div>
                            </li>
                            <li >
                                <div className="flex items-center">
                                    <ChevronRight size={16} className="mr-2 text-gray-600" />
                                    <span
                                        className="ml-1 text-sm font-medium text-green-600  md:ml-2"
                                    >
                                        Select Delivery Company
                                    </span>
                                </div>
                            </li>
                            <li >
                                <div className="flex items-center">
                                    <ChevronRight size={16} className="mr-2 text-gray-600" />
                                    <span
                                        className="ml-1 text-sm font-medium text-gray-900  md:ml-2"
                                    >
                                        Payment Method
                                    </span>
                                </div>
                            </li>

                        </ol>
                    </nav>

                    <div className="overflow-hidden rounded-sm bg-white p-8 sm:shadow mt-8 sm:mt-3">
                        <div className="mb-4 flex items-center rounded-lg py-2">
                            <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
                                <PackageCheck size={20} />
                            </div>
                            <div className="flex flex-1">
                                <p className="text-xl font-medium">
                                    Choose Delivery Partner
                                </p>
                            </div>
                        </div>
                        <div >

                            <div className="mt-6 space-y-2 ">
                                <div className="w-full py-3 sm:grid sm:grid-cols-2 sm:px-3 gap-4 space-y-2">
                                    <div className='flex flex-row cursor-pointer bg-gray-100 p-2 sm:py-4 rounded-sm items-center justify-center sm:justify-start border-2 border-white hover:border-gray-300'>
                                        <img
                                            className='w-20 h-16 sm:w-28 sm:h-20 mix-blend-multiply'
                                            src="https://guiaimpresion.com/wp-content/uploads/2020/06/Logotipo-Amazon.jpg"
                                            alt="amazon" />
                                        <div className='px-4'>
                                            <h2 className='text-sm sm:text-md font-semibold'>Amazon Courier Service</h2>
                                            <ReactStars {...secondExample} /> <span className='text-sm'>23465  reviews</span>
                                            <p className='font-semibold text-md mt-2 sm:mt-4'>₹455/-</p>
                                        </div>

                                    </div>
                                    <div className='flex flex-row cursor-pointer bg-gray-100 p-2 sm:py-4 rounded-sm items-center justify-center sm:justify-start border-2 border-white hover:border-gray-300'>
                                        <img
                                            className='w-20 h-16 sm:w-28 sm:h-20 mix-blend-multiply'
                                            src="https://tse2.mm.bing.net/th?id=OIP.XfprJbJaTr8-qZh62gSsFQHaHa&pid=Api&P=0&h=180"
                                            alt="amazon" />
                                        <div className='px-4'>
                                            <h2 className='text-sm sm:text-md font-semibold'>Amazon Courier Service</h2>
                                            <ReactStars {...secondExample} /> <span className='text-sm'>23465  reviews</span>
                                            <p className='font-semibold text-md mt-2 sm:mt-4'>₹255/-</p>
                                        </div>

                                    </div>
                                    <div className='flex flex-row cursor-pointer bg-gray-100 p-2 sm:py-4 rounded-sm items-center justify-center sm:justify-start border-2 border-white hover:border-gray-300'>
                                        <img
                                            className='w-20 h-16 sm:w-28 sm:h-20 mix-blend-multiply'
                                            src="https://tse1.mm.bing.net/th?id=OIP.xGR-e8nyveSWHyVbjoqZVwHaEK&pid=Api&P=0&h=180"
                                            alt="amazon" />
                                        <div className='px-4'>
                                            <h2 className='text-sm sm:text-md font-semibold'>Amazon Courier Service</h2>
                                            <ReactStars {...secondExample} /> <span className='text-sm'>23465  reviews</span>
                                            <p className='font-semibold text-md mt-2 sm:mt-4'>₹455/-</p>
                                        </div>

                                    </div>
                                    <div className='flex flex-row cursor-pointer bg-gray-100 p-2 sm:py-4 rounded-sm items-center justify-center sm:justify-start border-2 border-white hover:border-gray-300'>
                                        <img
                                            className='w-20 h-16 sm:w-28 sm:h-20 mix-blend-multiply'
                                            src="https://tse2.mm.bing.net/th?id=OIP.uGNpJXsZ7Wsm364UJJXSBwHaDO&pid=Api&P=0&h=180"
                                            alt="amazon" />
                                        <div className='px-4'>
                                            <h2 className='text-sm sm:text-md font-semibold'>Amazon Courier Service</h2>
                                            <ReactStars {...secondExample} /> <span className='text-sm'>23465  reviews</span>
                                            <p className='font-semibold text-md mt-2 sm:mt-4'>₹455/-</p>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectDCompany
