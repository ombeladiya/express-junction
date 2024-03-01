import React, { useState } from "react";
import { Home, ChevronRight, CircleUserRound, ArrowLeft } from 'lucide-react'
import { Link, useNavigate } from "react-router-dom";

export function AddSender() {
    const [visible, setvisible] = useState(true);
    const navigate = useNavigate();
    const shownewadd = () => {
        setvisible(false);
    }
    return (
        <div className="mx-auto w-full min-h-screen bg-slate-100 py-2">
            <div className="mx-auto my-4 max-w-6xl md:my-6">
                <nav className="mt-16 sm:flex hidden" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <span
                                className="ml-1 inline-flex text-sm font-medium text-green-600 md:ml-2"
                            >
                                <Home size={16} className="mr-2 text-gray-900" />
                                Receiver's Information
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
                                    className="ml-1 text-sm font-medium text-gray-900 md:ml-2"
                                >
                                    Parcel Details
                                </span>
                            </div>
                        </li>
                        <li >
                            <div className="flex items-center">
                                <ChevronRight size={16} className="mr-2 text-gray-600" />
                                <span
                                    className="ml-1 text-sm font-medium text-gray-900  md:ml-2"
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
                            <CircleUserRound size={20} />
                        </div>
                        <div className="flex flex-1">
                            <p className="text-xl font-medium">
                                Add Sender's Information
                            </p>
                        </div>
                    </div>
                    <div className={`${visible ? 'block' : 'hidden'}`}>

                        <div className="mt-6 space-y-2">
                            <div className="w-full py-3 flex flex-row px-3 border-[1px] rounded-sm border-gray-500">
                                <input type="radio" checked />
                                <div className="px-3 capitalize">Om beladiya , Mo.7990845663, B403 B-block, Birla vishwakarma mahavidyalaya, v.v.nagar, anand, gujarat, India - 388120 </div>
                            </div>
                        </div>

                        <div className="sm:flex justify-end">
                            <button
                                type="button"
                                onClick={shownewadd}
                                className="w-full sm:mx-5 sm:w-56 h-10 rounded-md bg-transparent px-3 mt-5 text-sm font-semibold text-black shadow-sm border-[1.5px] border-orange-500 hover:bg-orange-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add New Address
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/addparcel')}
                                className="w-full sm:w-56 h-10 rounded-md bg-orange-600 px-3 mt-5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Next Step
                            </button>
                        </div>
                    </div>
                    <div className={`font-semibold cursor-pointer ${visible ? 'hidden' : 'flex'}`} onClick={() => setvisible(!visible)}> <ArrowLeft size={18} /><span className="px-2 -mt-1">Back</span></div>
                    <div className={`mt-6 gap-6 space-y-2 ${visible ? 'hidden sm:hidden' : 'sm:grid'} sm:grid-cols-2 md:grid-cols-3 sm:space-y-0`}>
                        <div className="w-full">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="firstName"
                            >
                                Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Enter your name"
                                id="Name"
                                required></input>
                        </div>
                        <div className="w-full">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="Mobile"
                            >
                                Mobile Number
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="tel"
                                placeholder="Enter your Mobile"
                                id="mobile"
                                required ></input>
                        </div>
                        <div className="col-span-1 grid">
                            <div className="w-full">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="email"
                                    placeholder="Enter your email"
                                    id="email"
                                ></input>
                            </div>
                        </div>
                        <div className="col-span-1 grid">
                            <div className="w-full">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="email"
                                >
                                    Apartment/Area/Flat No.
                                </label>
                                <input
                                    className="h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Enter your area"
                                ></input>
                            </div>
                        </div>

                        <div className="col-span-1 grid">
                            <div className="w-full">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="email"
                                >
                                    City
                                </label>
                                <input
                                    className="h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Enter your city"
                                    id="city"
                                ></input>
                            </div>
                        </div>
                        <div className="col-span-1 grid">
                            <div className="w-full">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="email"
                                >
                                    District
                                </label>
                                <input
                                    className="h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Enter your District"
                                    id="district"

                                ></input>
                            </div>
                        </div>
                        <div className="col-span-1 grid">
                            <div className="w-full">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="email"
                                >
                                    State
                                </label>
                                <input
                                    className="h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Enter your city"
                                    id="state"
                                ></input>
                            </div>
                        </div>
                        <div className="col-span-1 grid">
                            <div className="w-full">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="country"
                                >
                                    Country
                                </label>
                                <input
                                    className="h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Enter your Country"
                                ></input>
                            </div>
                        </div>

                        <div className="col-span-3 flex justify-end">
                            <button
                                type="button"
                                onClick={() => navigate('/addparcel')}
                                className="w-full sm:w-56 h-10 rounded-md bg-orange-600 px-3 mt-5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Next Step
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSender
