import React, { useState } from "react";
import Pincode from "react-pincode";
import { Home, ChevronRight, ShoppingCart } from 'lucide-react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const steps = ['Sender\'s Information', 'Parcel Details', 'Select Delivery Company', 'Payment']

export function AddOrder() {
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [country, setcountry] = useState('');
  const [isvalid, setIsvalid] = useState(true);
  const navigate = useNavigate();

  const getadata = async (e) => {
    setPincode(e.target.value);
    if (e.target.value.length == 6) {
      try {
        const { data } = await axios.get(`https://api.postalpincode.in/pincode/${e.target.value}`);
        if (data[0].Status == "Error") throw new Error(data[0].Message);
        if (data && data.length > 0 && data[0].PostOffice && data[0].PostOffice.length > 0) {
          setCity(data[0].PostOffice[0].Block);
          setState(data[0].PostOffice[0].State);
          setDistrict(data[0].PostOffice[0].District);
          setcountry(data[0].PostOffice[0].Country);
          setIsvalid(true);
        }
      } catch (err) {
        console.log(err)
        setIsvalid(false);
        setCity('')
        setState('');
        setDistrict('');
      }
    } else {
      setIsvalid(false);
    }

  }
  return (
    <div className="mx-auto w-full min-h-screen bg-slate-100 py-2">
      <div className="mx-auto my-4 max-w-6xl md:my-6">
        <nav className="mt-16 sm:flex hidden" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <span
                className="ml-1 inline-flex text-sm font-medium text-green-600  md:ml-2"
              >
                <Home size={16} className="mr-2 text-gray-900" />
                Receiver's Information
              </span>
            </li>
            {steps.map((step) => (
              <li key={step}>
                <div className="flex items-center">
                  <ChevronRight size={16} className="mr-2 text-gray-600" />
                  <span
                    className="ml-1 text-sm font-medium text-gray-900  md:ml-2"
                  >
                    {step}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
    
        <div className="overflow-hidden rounded-sm bg-white p-8 sm:shadow mt-8 sm:mt-3">
          <div className="mb-4 flex items-center rounded-lg py-2">
            <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
              <ShoppingCart size={20} />
            </div>
            <div className="flex flex-1">
              <p className="text-xl font-medium">
               Add Receiver's Information
              </p>
            </div>
           
          </div>
          <p className="text-sm font-medium text-gray-900 -mt-4">To whom the order Will be delivered? <span className='text-gray-500 font-medium'>(Reciever's Info.)</span> </p>
          <div className="mt-6 gap-6 space-y-2 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:space-y-0">
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
                placeholder="Enter Reciever's Mobile"
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
                  placeholder="Enter Reciever's email"
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
                  Pincode
                </label>
                <input
                  className={`h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${isvalid ? '' : 'focus:ring-red-500'}`}
                  type="number"
                  placeholder="Enter your pincode"
                  id="pincode"
                  value={pincode}
                  onChange={(e) => getadata(e)}
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
                  value={city}
                  readOnly
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
                  value={district}
                  readOnly
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
                  value={state}
                  readOnly
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
                  value={country}
                  readOnly
                ></input>
              </div>
            </div>

            <div className="col-span-3 flex justify-end">
              <button
                type="button"
                className="w-full sm:w-56 h-10 rounded-md bg-orange-600 px-3 mt-5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => navigate('/addsender')}
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

export default AddOrder
