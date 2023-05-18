import React, { useState } from "react";
import But from "../components/But";
import Image from "next/image";
import Link from "next/link";


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function N() {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid')
    
});
const formOptions = { resolver: yupResolver(validationSchema) };
const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
      // display form data on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
      return false;
  }

  return (
    <div>
      <section className="relative flex flex-col justify-between min-h-screen ">
        <div className="user-details absolute bg-center bg-no-repeat inset-0 blur-lg opacity-20 z-[-5] sm:bg-contain "></div>
        <header className="uppercase px-8 lg:px-2 grid grid-cols-3 lg:grid-cols-1 my-8 lg:my-8 mb-16 tracking-widest text-[20px] lg:text-[16px]">
          <div className="">
            <h2 className="text-[28px] ml-3 font-bold">APPLY</h2>
            <button className="flex flex-1 mt-2 sm:absolute left-0 sm:px-2 cursor-pointer items-center gap-2 uppercase tracking-widest text-[20px] lg:text-[16px]">
              
              <span></span>
            </button>
          </div>
          <section className="flex flex-col text-center items-center   sm:text-[14px] md:text-[14px] sm:text-end  md:text-end ">
            <h1 className="text-[32px]">YOUR APPLICATION</h1>
            <div className="flex items-center justify-end gap-x-2 mt-7">
              <div className="bg-[#BE9f56] h-[2px] w-[60px] lg:w-[20px]"></div>
              <div className="bg-black h-[2px] w-[60px] lg:w-[20px]"></div>
              <div className="bg-black h-[2px] w-[60px] lg:w-[20px]"></div>
            </div>
          </section>
        </header>
        <div className="flex items-center justify-center sm:py-16 z-10 mt-[20px] lg:mt-[10px]">
          
           <div className="flex justify-end lg:w-5/12">
           <form
           onSubmit={handleSubmit(onSubmit)}
          //  onSubmit={loginHandler}
          //  onChange={userHandler}
            autoComplete="off"
            className="flex w-full  flex-col ml-auto items-end space-y-2 text-[18px] lg:text-[16px]"
          >
           {/* {userErr?<span>fill all  </span>:null}  */}
            <input
             
              type="email"
              id="email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required=""
              placeholder="EMAIL ADDRESS"
              value="email"
              {...register('email')}
              className= {` form-control ${errors.email ? 'is-invalid' : ''} tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none`}
              //  className={``}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
            <div className="w-[90%] max-w-[580px] relative">
              <input
                type="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                id="confirmEmail"
                required=""
                placeholder="CONFIRM EMAIL ADDRESS"
                className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-full text-center focus:bg-transparent   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
              />
            </div>
            <div className="py-1"></div>
            <div className="relative flex flex-col w-[90%] max-w-[580px]">
              <input
                type="text"
                id="firstName"
                required=""
                placeholder="FIRST NAME"
                className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px]  focus:bg-transparent w-full text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
              />
              
            </div>
            <input
              type="text"
              id="lastName"
              required=""
              placeholder="LAST NAME (INCLUDING MIDDLE NAME)"
              className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px] text-center   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none focus:bg-transparent"
              // value=""
            />
            <div className="py-1"></div>
            <div className="w-[90%] max-w-[580px]">
              <input
                type="date"
                id="dob"
                title="Date of Birth"
                required=""
                max="2050-12-25"
                step="1"
                className="w-full tracking-[2px] md:tracking-[0px] font-normal placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px]  text-center uppercase   bg-transparent border  placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none focus:bg-transparent"
              />
              <p className="text-center text-[12px] hidden sm:block text-[#737373]">
                Date of Birth
              </p>
            </div>
            <p className="text-black font-normal text-[18px] md:text-[12px]  md:tracking-[0px] tracking-[2px] w-[90%] max-w-[580px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] uppercase">
              Pakistan
            </p>
            <div className="py-1"></div>
            <div className="flex w-[90%] max-w-[580px]  text-center items-center  gap-2 h-10 relative focus:bg-transparent">
              <div className="w-[190px]   text-sm     outline-none bg-transparent text-gray-500 border placeholder:text-center text-center border-gray-500/50 rounded-xl focus:border-[#BE9F56]">
                <div
                  className="w-full py-[2px] css-b62m3t-container"
                  id="countryCode"
                >
                  <span
                    id="react-select-2-live-region"
                    className="css-7pg0cj-a11yText"
                  ></span>
                  <span
                    aria-live="polite"
                    aria-atomic="false"
                    aria-relevant="additions text"
                    className="css-7pg0cj-a11yText"
                  ></span>
                  <div className=" css-zpnzg2-control">
                    <div className=" css-hlgwow">
                      <div className=" css-1dimb5e-singleValue">
                        <div className="flex items-center justify-around">
                          <Image
                            src="data:image/png;base64,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"
                            alt="Pakistan"
                            width={60}
                            height={60}
                            className="w-[60px] lg:w-[60px] object-contain"
                          />
                          <span className="flex text-[18px] lg:text-[16px] items-center ">
                            +92
                          </span>
                        </div>
                      </div>
                      <div className=" css-19bb58m" data-value="">
                        <input
                          className=""
                          // style="label:input;color:inherit;background:0;opacity:1;width:100%;grid-area:1 / 2;font:inherit;min-width:2px;border:0;margin:0;outline:0;padding:0"
                      
                          // value=""
                        />
                      </div>
                    </div>
                    <div className=" css-1wy0on6">
                      <span className=" css-1u9des2-indicatorSeparator"></span>
                      <div
                        className=" css-1xc3v61-indicatorContainer"
                        aria-hidden="true"
                      >
                        <svg
                          height="20"
                          width="20"
                          // viewBox="0 0 20 20"
                          aria-hidden="true"
                          focusable="false"
                          className="css-8mmkcg"
                        >
                          {/* <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path> */}
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="tel"
                id="phone"
                required=""
                placeholder="PHONE NUMBER"
                className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-full text-center  bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none focus:bg-transparent"
                // value
              />


           <button
              type="submit"
              // onClick={() => reset()}
              className=" lg:ml-24 lg:h-[70px]  md:text-center flex items-center justify-center  sm:flex items-left justify-left  h-[120px] m-0 ml-6 w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase "
            >
              <p >CONTINUE</p>
              
            </button>
              
                {/* <div className=" lg:w-1/12 mt-60 sm:mt-4 md:mt-3"><But/></div>   */}
              {/* <button
                type="submit"
                className="lg:hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute bottom-0 right-[-200px] rounded-lg flex items-center text-center justify-center uppercase"
              >
                CONTINUE
              </button> */}
              {/* <div className="">
                <button
                  type="submit"
                  className="lg:flex items-center justify-center hidden h-[120px] m-10 w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase"
                >
                  CONTINUE
                </button>
              </div> */}
            </div>
          </form>
           </div>
          {/* <div className="w-4/12 mt-60 "><But/></div>  */}
        
         {/* <div className="sm:text-[12px] font-bold lg:text-white " >
           <button
              type="submit"
              className=" lg:hidden md:text-center flex items-center justify-center  sm:flex items-left justify-left  h-[120px] m-0 ml-6 w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase "
            >
              <Link href="/NN">CONTINUE</Link>
              
            </button></div> */}
        </div>
        <footer className="flex justify-between items-end px-8  sm:py-16 md:py-16 md:pt-20 pb-8 mt-4 pr-[55px] 2xl:pr-8">
          <div className="flex-1">
          <Image src="/a.png"  layout="responsive" alt=""  width={10} height={10}/>
         
            {/* <img
              src="/assets/zimo-team-black.png"
              alt="zimo-team-logo"
              className="w-[318px] 3xl:w-[300px]"
            /> */}
          </div>
          <div className="flex-1">
          <Image src="/v.png"  layout="fixed" alt=""  width={150} height={150} className="ml-auto"/>
         
          </div>
        </footer>
      </section>
    </div>
  );
}
