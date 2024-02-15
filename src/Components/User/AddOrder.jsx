import React from 'react'
import { Home, ChevronRight, ShoppingCart } from 'lucide-react'

const steps = ['Parcel Details', 'Payment Method', 'Confirmation']

export function AddOrder() {
  return (
    <div className="mx-auto w-full max-w-8xl min-h-screen bg-slate-100 py-2">
      <div className="mx-auto my-4 max-w-4xl md:my-6">
        <nav className="mb-8 sm:flex hidden" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="ml-1 inline-flex text-sm font-medium text-gray-900 hover:underline md:ml-2"
              >
                <Home size={16} className="mr-2 text-gray-900" />
                Receiver's Information
              </a>
            </li>
            {steps.map((step) => (
              <li key={step}>
                <div className="flex items-center">
                  <ChevronRight size={16} className="mr-2 text-gray-600" />
                  <a
                    href="/"
                    className="ml-1 text-sm font-medium text-gray-900 hover:underline md:ml-2"
                  >
                    {step}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
    
        <div className="overflow-hidden rounded-xl bg-white p-4 sm:shadow mt-8">
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
          <p className="text-sm font-medium text-gray-900">To whom the order Will be delivered? <span className='text-gray-500 font-medium'>(Reciever's Info.)</span> </p>
          <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
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
                  Email Address (optional)
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                ></input>
              </div>
            </div>

            <div className="col-span-2 grid justify-end">
              <button
                type="button"
                className="w-56 rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
