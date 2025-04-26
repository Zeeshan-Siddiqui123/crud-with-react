import React from 'react'

const CreateUser = () => {
  return (
    <div>
      <div className='flex items-center justify-center flex-col'>
        <h1>Create A User</h1>

        <form action="/create" method='post'>
          <div className='flex items-center justify-center flex-col gap-3'>
            <input type="text" name="name" id="" placeholder='Enter Your Name' className='px-10 py-3 bg-gray-300 w-[400px] text-black outline-none rounded-lg' />
            <input type="email" name="email" id="" placeholder='Enter Your Email' className='px-10 py-3 bg-gray-300 w-[400px] text-black outline-none rounded-lg' />
            <input type="text" name="image" id="" placeholder='Image URL' className='px-10 py-3 bg-gray-300 w-[400px] text-blue-600 outline-none rounded-lg' />
            <input type="submit" value='Create' className='px-10 py-3 w-[400px] bg-green-700 text-white rounded-lg font-bold' />
          </div>
        </form>

      </div>
    </div>
  )
}

export default CreateUser
