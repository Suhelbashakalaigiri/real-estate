import {useSelector} from 'react-redux';
import {useEffect, useRef, useState} from 'react';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase';
 

export default function Profile() {
  const fileRef = useRef(null)
  const {currentUser} = useSelector((state)=> state.user)
  const [file,setFile] = useState(undefined)
  const [filePerc,setFilePerc]= useState(0)
  const [fileUploadError,setFileUploadError] = useState(false)
  const [formData,setFarmData] = useState({})
  console.log(filePerc)
  console.log(fileUploadError)
  console.log(formData)
  useEffect(() =>{
    if(file){
       handleFileUpload();
    }
   
  },[file]);

  const handleFileUpload =() => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() +file.name;
    const storageref = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageref,file);
    uploadTask.on('State changed',
      (snapshot) => {
      const progress=(snapshot.bytesTransferred/snapshot.totalBytes)* 100;
      setFilePerc(Math.round(progress))
      },
    
    (error)=>{
      setFileUploadError(true);
    },
    () =>{
      getDownloadURL(uploadTask.snapshot.ref).then(
        (downloadURL) =>{
          setFarmData({...formData, avatar: downloadURL})
        }
      )
    });
  }




  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="font-semibold my-7 text-3xl text-center">Profile</h1>
    <form className='flex flex-col gap-4'>
      <input onChange={(e) => setFile(e.target.files[0])} type='file' ref={fileRef} hidden accept='image/*'/>
      <img onClick={()=>fileRef.current.click()} src={formData.avatar || currentUser.avatar} alt="Profile" className='rounded-full  h-25 w-25 object-cover cursor-pointer self-center mt-2'/>
      <p className="text-sm self-center">
        {fileUploadError ? (
          <span className='text-red-700'>Error Image Upload(image size must be less than 2MB)</span>
        ) :filePerc > 0 && filePerc < 100 ? (
          <span className = "text-slate-700">{`uploading ${filePerc} %`}</span>
        ): filePerc === 100 ?(
          <span className='text-green-700'>Image Uploaded Successfully </span>
        ) :('')
        }
      </p>
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
