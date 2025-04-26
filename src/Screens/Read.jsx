import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
// import { routes } from '../../Routes'

const Read = () => {
    return (
        <div>
            <div className='flex items-center flex-col'>
                <h1>Users</h1>

            </div>

            <div>
                <table className="w-3/4 table-auto text-lg  ml-auto mr-auto mt-10">
                    <thead className=''>
                        <button className='bg-green-700 mb-2 block-inline p-2 text-white w-[100px] rounded-lg'>
                            <Link to='/createuser'>Add</Link>
                        </button>
                    </thead>
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="p-3 text-left ml-5">Image</th>
                            <th className="p-3">Name</th>
                            <th className="p-3 ">Email</th>
                            <th className="p-3">Operations</th>
                        </tr>
                    </thead>
                    <tbody className=' p-2 border-b border-gray-300'>
                        <tr className='mt-4'>
                            <td className="text-center ">
                                <div className='w-[70px] h-[70px] rounded-full bg-gray-500 ml-3 mb-1 mt-1'></div>
                            </td>
                            <td className="text-center text-black">Zeeshan</td>
                            <td className="text-center text-black">zeeshan@gmail.com</td>
                            <td className="text-center">
                                <Link to='/updateuser' className='px-5 py-2 w-[100px] border-2 text-yellow-600 rounded-lg '>Update</Link>
                                <a className='px-5 ml-1 py-2 w-[100px] border-2 text-red-500 rounded-lg '>Delete</a>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>






        </div>
    )
}

export default Read
