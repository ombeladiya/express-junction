import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
    const path=location.pathname;
  return (
    <div className='w-1/5 min-h-screen bg-gray-950'>
        <br/>
        <div className='w-full flex flex-col -mt-6' >
            <span className={`w-full h-10 ${path==='/admin/dashboard'? 'bg-gray-400':''} font-semibold text-white px-4 flex items-center`}><Link to='/admin/dashboard'>Dashboard(Admin)</Link></span> 
            <span className={`w-full h-10 ${path==='/admin/revenue'? 'bg-gray-400':''} font-semibold text-white px-4 flex items-center`}><Link to='/admin/revenue'>Revenue</Link></span> 
            <span className={`w-full h-10 ${path==='/admin/users'? 'bg-gray-400':''} font-semibold text-white px-4 flex items-center`}><Link to='/admin/users'>Manage User</Link></span>
            <span className={`w-full h-10 ${path==='/admin/users'? 'bg-gray-400':''} font-semibold text-white px-4 flex items-center`}><Link to='/admin/users'>Manage Orders</Link></span>
            <span className={`w-full h-10 ${path==='/admin/users'? 'bg-gray-400':''} font-semibold text-white px-4 flex items-center`}><Link to='/admin/users'>Manage Payment</Link></span>
        </div>
    </div>
  )
}

export default Sidebar
