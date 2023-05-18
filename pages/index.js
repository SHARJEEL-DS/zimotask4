import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import S from '../components/S'
// import NNN from '../components/NNN'
// import Homee from '../components/Homee'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Link from 'next/link'
export default function Home() {

  const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required'),
    
});
const formOptions = { resolver: yupResolver(validationSchema) };

// get functions to build form with useForm() hook
const { register, handleSubmit, reset, formState } = useForm(formOptions);
const { errors } = formState;

function onSubmit(data) {
    // display form data on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    return false;
}

  
  return (
    <div>
    
   
     <div className="z-10 flex items-center justify-center sm:py-16 ">
         <div className="border border-[#BE9F56] flex flex-col justify-around  items-center relative p-10 3xl:w-[700px] 3xl:h-[430px] space-y-12 rounded-xl  mx-auto w-[999px] h-[700px]">
           <h1 className="title-font text-base my-4 font-medium uppercase tracking-widest text-[20px]">
             start your application
           </h1>
           <Image src="/l.png"  layout="fixed" alt=""  width={290} height={260}/>
         
           {/* <img
             src="assets/ZIMOCAREERSLogo.png"
             alt="zimo career logo"
             className="w-[290px] 3xl:w-[260px]"
           /> */}
           <form className="w-full py-4 text-center" onSubmit={handleSubmit(onSubmit)}>
             <select
              name="title" {...register('title')}
               id="userRole"
               className={`  form-control ${errors.title ? 'is-invalid' : ''} w-[580px] 3xl:w-[400px] md:w-full uppercase p-3 rounded-xl tracking-widest text-center  leading-tight border-2 focus:outline-none focus:border-[#BE9f56]  text-[18px] md:text-[16px] cursor-pointer `}
               required=""
               fdprocessedid="e9vmad"
             >
               <option >
                 CHOOSE YOUR ROLE (FIELD)
               </option>
               <option >Project Coordinator</option>
               <option >Frontend Next Js</option>
               <option >
                 Backend Laravel &amp; Node js
               </option>
               <option value="Devops Engineer">Devops Engineer</option>
                             <option value="Social Media Manager">Social Media Manager</option>
             </select>
             
             <div className="invalid-feedback">{errors.title?.message}</div>
             <Link href="/N"> <button
               className="h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px]  absolute bottom-[100px] 3xl:bottom-[38px] right-[-60px] lg:bottom-[-90px] lg:right-[unset] lg:left-1/2 lg:-translate-x-1/2 rounded-lg flex items-center text-center justify-center"
               fdprocessedid="egj96a"
             >
               APPLY 
              
             </button>
             </Link>
           </form>
         </div>
       </div>
    </div>
  
    
  
  )
}
