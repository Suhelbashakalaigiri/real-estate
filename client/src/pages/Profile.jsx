import {useSelector} from 'react-redux';

export default function Profile() {
  const {currentUser} = useSelector((state)=> state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="font-semibold my-7 text-3xl text-center">Profile</h1>
    <form className='flex flex-col gap-4'>
      <img src={currentUser.avatar} alt="Profile" className='rounded-full  h-25 w-25 object-cover cursor-pointer self-center mt-2'/>
      <input type='text' placeholder='Username' id='username' className='border p-3 rounded-lg'/>
      <input type='text' placeholder='email' id=' email' className='border p-3 rounded-lg'/>
      <input type='text' placeholder='Password' id='password' className='border p-3 rounded-lg'/>
      <button className='bg-slate-700 rounded-lg p-3 uppercase text-white hover:opacity-95 disabled:opacity-80'>Update</button>
    </form>
    <div className='flex justify-between mt-4'> 
      <span className='text-red-700 cursor-pointer'>Delete account</span>
      <span className='text-red-700 cursor-pointer'>Sign out</span>
    </div>
      </div>
  )
}
