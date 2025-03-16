import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form className=" flex flex-col gap-4">
        <input type="text" placeholder="username" className="border p-3 rounded-lg " id='username'/>
        <input type="email" placeholder="Email" className="border p-3 rounded-lg " id='Email'/>
        <input type="password" placeholder="Password" className="border p-3 rounded-lg " id='password'/>
        <button className=" bg-slate-700 text-white p-3 rounded-lg hover:opacity-50 disabled:opacity-90 uppercase" >Sign up</button>
      </form>
      <div className="flex mt-5  gap-2">
        <p>Already Have an Account?</p>
        <Link to={'/sign-in'}>
        <span className="text-blue-800 ">Sign in</span>
        </Link>
      </div>
    </div>
    
  )
}
