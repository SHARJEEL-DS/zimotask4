import Image from "next/image";
import Link from "next/link";
import React from "react";


function S() {
  return (
    <div>
      <div class="flex items-center justify-center sm:py-16 z-10  ">
        <div class="border border-[#BE9F56] flex flex-col justify-around  items-center relative p-10 3xl:w-[700px] 3xl:h-[430px] space-y-12 rounded-xl  mx-auto w-[999px] h-[700px]">
          <h1 class="title-font text-base my-4 font-medium uppercase tracking-widest text-[20px]">
            start your application
          </h1>
          <Image src="/l.png"  layout="fixed" alt=""  width={290} height={260}/>
         
          {/* <img
            src="assets/ZIMOCAREERSLogo.png"
            alt="zimo career logo"
            class="w-[290px] 3xl:w-[260px]"
          /> */}
          <form class="py-4 w-full text-center">
            <select
              id="userRole"
              class="w-[580px] 3xl:w-[400px] md:w-full uppercase p-3 rounded-xl tracking-widest text-center  leading-tight border-2 focus:outline-none focus:border-[#BE9f56]  text-[18px] md:text-[16px] cursor-pointer "
              required=""
              fdprocessedid="e9vmad"
            >
              <option value="" selected="">
                CHOOSE YOUR ROLE (FIELD)
              </option>
              <option value="Project Coordinator">Project Coordinator</option>
              <option value="Frontend Next Js">Frontend Next Js</option>
              <option value="Backend Laravel &amp; Node js">
                Backend Laravel &amp; Node js
              </option>
              <option value="Devops Engineer">Devops Engineer</option>
              <option value="React Native Developer">
                React Native Developer
              </option>
              <option value="Graphic Designer">Graphic Designer</option>
              <option value="SEO Expert">SEO Expert</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Video Editor &amp; Animation">
                Video Editor &amp; Animation
              </option>
              <option value="Social Media Manager">Social Media Manager</option>
            </select>
            <button
              class="h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px]  absolute bottom-[100px] 3xl:bottom-[38px] right-[-60px] lg:bottom-[-90px] lg:right-[unset] lg:left-1/2 lg:-translate-x-1/2 rounded-lg flex items-center text-center justify-center"
              fdprocessedid="egj96a"
            >
              <Link href="./NN"> APPLY </Link>
              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default S;
