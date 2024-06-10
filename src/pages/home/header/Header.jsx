import React from "react";
import logo from "../../../assets/logo.png"
import { ContentWrapper } from "../../../components";
import ring from "../../../assets/ring.png"
import ring2 from "../../../assets/ring2.png"
import iphone1 from "../../../assets/iphone1.png"
import iphone2 from "../../../assets/iphone2.png"
import iphone3 from "../../../assets/iphone3.png"
import strip from "../../../assets/strip.png"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoPlayCircleOutline } from "react-icons/io5";
import ellipse1 from "../../../assets/Ellipse 1.png"
import ellipse2 from "../../../assets/Ellipse 2.png"
import blur from "../../../assets/blur.png"
import star1 from "../../../assets/Star 1.png"
import star3 from "../../../assets/Star 3.png"
import { IoMenu } from "react-icons/io5";

const Header = ()=>{

    const menu = ["Home", "About Us", "Pricing", "Features"]

    return (
        <div className="">
        <div className="relative  z-10 w-full">

            <ContentWrapper>
               
                <div className="flex w-full  flex-row items-center justify-between mt-4 font-clash text-[20px]">
                    <div  className=" flex flex-row items-center gap-16 ">
                        <img className="w-20" src={logo}/>
                        <ul className="flex flex-row gap-10 ">
                        {menu.map((e,i)=>(<li className="hidden sm:block cursor-pointer hover:underline hover:animate-pulse hover:scale-110 hover:decoration-[var(--font-Darkpink)] transition-transform ease-in-out duration-700">{e}</li>))}

                        </ul>  
                    </div>
                    <button className="hidden sm:block bg-black text-white px-6 py-2 rounded-md hover:bg-[var(--font-Darkpink)] transition-all">
                        Download
                    </button>
                    <div className="sm:hidden bg-black text-2xl text-white px-4 py-2 rounded-md">
                    <IoMenu />
                    </div>
                </div>
                

                <div className=" mt-4 flex flex-col  sm:flex-row ">
                    <div className="left flex-1  flex flex-col gap-2 sm:gap-3 sm:pt-14" >
                        
                        <p className="font-clash font-bold text-[28px]  leading-[30px] sm:text-[35px] sm:leading-[35px] lg:text-[3.9rem] lg:leading-[3.5rem]">Make The Best<br />Financial Decisions</p>
                        <p className="font-clash text-20 sm:text-26 font-md text-zinc-500">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        
                       
                        <div className="flex font-clash gap-4">
                            <span className=" bg-black text-white text-sm sm:text-lg px-6 h-12  rounded-md flex flex-row w-fit items-center gap-2 hover:bg-[var(--font-Darkpink)] transition-all">
                                <button >Get Started</button>
                                <HiOutlineArrowLongRight />
                            </span>
                            <span className=" bg-white hover:scale-110 text-black text-3xl h-12 font-clash px-6 py-4 rounded-md flex flex-row w-fit items-center gap-2">
                                <IoPlayCircleOutline />
                                <button className="text-sm" >Watch Video</button>
                            </span>
                        </div>

                        <img className="w-[450px]" src={strip} alt="" />

                        
                    
                    </div>

                    <div className="relative   flex-1 sm:flex-1 lg:flex-[0.6] ">
                        <img className="absolute   left-6 md:-top-2  xl:top-0 xl:right-0" src={ring} />
                        <img className="absolute w-96 sm:top-10 sm:left-16 md:top-20 md:left-24  left-16 top-8  xl:w-96 xl:top-16 xl:left-20 " src={iphone1} alt="" />
                        <img className="absolute w-96 sm:top-6 sm:left-8 md:top-6 md:left-8 xl:top-10 left-8 top-4 xl:w-96 xl:left-4" src={iphone2} alt="" />
                        <img className="absolute w-96 sm:top-0  sm:left-0  md:-top-6 md:-left-4 xl:top-0 left-0 top-0 xl:w-96  xl:-left-10" src={iphone1} alt="" />
                    </div>

                    
                </div>
            </ContentWrapper>

            
        </div>


            <img className="absolute h-40 top-8 left-16 sm:h-60 sm:top-20 sm:left-6 lg-h-[350px] lg:top-28 lg:left-40  xl:left-60  " src={ellipse2} alt="" />
            <img className="absolute h-40 top-2 left-16 sm:h-60 sm:top-8 sm:left-6 lg:h-[400px] lg:-top-12 lg:left-28  xl:left-52" src={ellipse1} alt="" />
            <img className="absolute w-12 top-16 right-2 sm:top-20 sm:right-8  lg:top-10 lg:right-10 xl:right-40 xl:top-20 animate-pulse" src={star1} alt="" />
            <img className="absolute w-12 top-80 left-14 sm:top-96  lg:top-16 lg:left-10 xl:left-28 animate-pulse" src={star3} alt="" />
            <img className="absolute w-[800px] sm:w-[500px] top-[700px] sm:top-[200px] sm:left-80  lg:top-72 lg:left-[60%]" src={ellipse1} alt="" />
            <img className="absolute w-12 -bottom-[380px] left-16 sm:top-[480px] sm:left-[480px]    lg:top-[70%] lg:left-64 animate-pulse duration-1000" src={star3} alt="" />
            
            <img className="w-full absolute h-[5300px] md:h-[4000px] top-0 opacity-[.04] " src={blur} alt="" />
            
    </div>
    )
}

export default Header;