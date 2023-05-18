import React from "react";
import But from "../components/But";
import Link from "next/link";
import Image from "next/image";

export default function N() {
  return (
    <div>
      <section className="relative flex flex-col justify-between min-h-screen ">
        <div className="user-details absolute bg-center bg-no-repeat inset-0 blur-lg opacity-20 z-[-5] sm:bg-contain "></div>
        <header className="uppercase px-8 lg:px-2 grid grid-cols-3 lg:grid-cols-1 my-8 lg:my-8 mb-16 tracking-widest text-[20px] lg:text-[16px]">
          <div className="">
            <h2 className="text-[28px] ml-3 font-bold">APPLY</h2>
            <button className="flex flex-1 mt-2 sm:absolute left-0 sm:px-2 cursor-pointer items-center gap-2 uppercase tracking-widest text-[20px] lg:text-[16px]">
             
              <span> <Link href="/N" className=" text-[28px] ml-3">BacK</Link></span>
            </button>
          </div>
          <section className="flex flex-col text-center items-center   sm:text-[14px] md:text-[14px] sm:text-end  md:text-end ">
            <h1 className="text-[32px]">YOUR APPLICATION</h1>
            <div className="flex items-center justify-end gap-x-2 mt-7">
            <div className="bg-black h-[2px] w-[60px] lg:w-[20px]"></div>
              <div className="bg-[#BE9f56] h-[2px] w-[60px] lg:w-[20px]"></div>

              <div className="bg-black h-[2px] w-[60px] lg:w-[20px]"></div>
              
            </div>
          </section>
        </header>
        <div className="flex items-center justify-center sm:py-16 z-10 mt-[20px] lg:mt-[10px]">
          
           <div className="flex justify-end w-8/12">
           <form
            autoComplete="off"
            className="flex w-full  flex-col ml-auto items-end space-y-2 text-[18px] lg:text-[16px]"
          >
            <input
              type="number"
              id="number"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required=""
              placeholder="NATIONAL ID NUMBER(CNIC)"
              className="tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
            />
            <div className="w-[90%] max-w-[580px] relative">
              <input
                type="text"
                // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                id="address"
                required=""
                placeholder="ADDRESS"
                className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-full text-center focus:bg-transparent   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
              />
            </div>
            <div className="py-1"></div>
            <div className="relative flex flex-col w-[90%] max-w-[580px]">
              <input
                type="text"
                id="address2"
                required=""
                placeholder="ADDRESS 2"
                className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px]  focus:bg-transparent w-full text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
              />
              
            </div>
            <div className="relative flex flex-col w-[90%] max-w-[580px]">
              <input
                type="text"
                id="STATE / REGION"
                required=""
                placeholder="STATE / REGION"
                className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px]  focus:bg-transparent w-full text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
              />
              
            </div>
            
            <input
              type="text"
              id="city"
              required=""
              placeholder="CITY"
              className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px] text-center   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none focus:bg-transparent"
              // value=""
            />
            <div className="relative flex flex-col w-[90%] max-w-[580px]">
              <input
                type="text"
                id="ZID CODE / POSTER"
                required=""
                placeholder="ZID CODE / POSTER"
                className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px]  focus:bg-transparent w-full text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
              />
              
            </div>
            <div className="py-1"></div>
            <div className="py-1"></div>
            <div className="flex w-[90%] max-w-[580px] text-center items-center  gap-2 h-14 relative focus:bg-transparent">
              
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
         <div className=" lg:w-4/12 mt-60 sm:mt-4 md:mt-3  "><But/></div>  
         <div className="sm:text-[12px] font-bold lg:text-white " > <button
              type="submit"
              className=" lg:hidden md:text-center flex items-center justify-center  sm:flex items-left justify-left  h-[120px] m-0 ml-6 w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase "
            >
               <Link href="/">CONTINUE</Link>
              
            </button></div>
        </div>
        <footer className="flex justify-between items-end px-8  sm:py-16 md:py-16 md:pt-20 pb-8 mt-4 pr-[55px] 2xl:pr-8">
          <div className="flex-1">
          <Image src="/a.png"  layout="responsive" alt=""  width={10} height={10}/>
          </div>
          <div className="flex-1">
          <Image src="/v.png"  layout="fixed" alt=""  width={150} height={150} className="ml-auto"/>
          </div>
        </footer>
      </section>
    </div>
  );
}
