import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import OAuth from '../components/OAuth';


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value ,
    }); 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    try {
      setLoading(true);
    const res =await fetch('/api/auth/signup',
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    console.log("responsed data",data);
    if(data.success === false) {
      setLoading(false);
      setError(data.message || "Signup failed");
       
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/sign-in');
    } catch (error){
      setLoading(false);
      setError(error.message || "Something went wrong");
       
    }
    
  };
   
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <input type="text" placeholder="username" className="border p-3 rounded-lg " id='username' onChange={handleChange}/>
        <input type="email" placeholder="email" className="border p-3 rounded-lg " id='email' onChange={handleChange}/>
        <input type="password" placeholder="Password" className="border p-3 rounded-lg " id='password' onChange={handleChange}/>
        <button disabled={loading} className=" bg-slate-700 text-white p-3 rounded-lg hover:opacity-50 disabled:opacity-90 uppercase" >{loading? 'Loading...':'Sign Up'}</button>
        <OAuth />
      </form>
      <div className="flex mt-5  gap-2">
        <p>Already Have an Account?</p>
        <Link to={'/sign-in'}>
        <span className="text-blue-800 ">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p> }
    </div>
    
  )
}
