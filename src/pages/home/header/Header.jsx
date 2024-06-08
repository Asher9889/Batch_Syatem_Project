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

const Header = ()=>{

    const menu = ["Home", "About Us", "Pricing", "Features"]

    return (
        <>
        <div className="relative z-10 w-full">

            <ContentWrapper>
                <div className="flex  flex-row items-center justify-between mt-4 font-clash text-[20px]">
                    <div  className="flex flex-row items-center gap-16 ">
                        <img className="w-20" src={logo}/>
                        <ul className="flex flex-row gap-10 ">
                        {menu.map((e,i)=>(<li className="cursor-pointer">{e}</li>))}

                        </ul>
                    </div>
                    <button className=" bg-black text-white px-6 py-2 rounded-md">
                        Download
                    </button>
                </div>

                <div className="mt-4 flex flex-row sm:flex-col">
                    <div className="left   flex-1  flex flex-col gap-3 pt-14" >
                        
                        <p className="font-clash font-bold sm:text-5xl lg:text-[3.9rem] lg:leading-[3.5rem]">Make The Best<br />Financial Decisions</p>
                        <p className="font-clash text-26 font-md text-zinc-500">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        
                       
                        <div className="flex font-clash">
                            <span className=" bg-black text-white text-lg px-6 h-12  rounded-md flex flex-row w-fit items-center gap-2">
                                <button >Get Started</button>
                                <HiOutlineArrowLongRight />
                            </span>
                            <span className=" bg-white text-black text-3xl h-12 font-clash px-6 py-4 rounded-md flex flex-row w-fit items-center gap-2">
                                <IoPlayCircleOutline />
                                <button className="text-lg" >Watch Video</button>
                            </span>
                        </div>

                        <img className="w-[450px]" src={strip} alt="" />

                        
                    
                    </div>

                    <div className=" right bg-green-400 flex-[0.6] ">
                        <img className="absolute sm:w-80 lg:w-[500px] lg:top-6 lg:right-0" src={ring} />
                        <img className="absolute  lg:w-96 lg:top-32 right-[1px]" src={iphone1} alt="" />
                        <img className="absolute lg:w-96 lg:top-20 lg:right-20" src={iphone2} alt="" />
                        <img className="absolute lg:w-96 lg:top-8 lg:right-40 " src={iphone1} alt="" />
                    </div>

                    
                </div>
            </ContentWrapper>

            
        </div>
        <img className="absolute  top-8 left-64" src={ellipse2} alt="" />
        <img className="absolute  -top-6 left-64" src={ellipse1} alt="" />
        <img className="absolute  top-10 right-10" src={star1} alt="" />
        <img className="absolute  top-16 left-10" src={star3} alt="" />
        <img className="absolute  top-[70%] left-64" src={star3} alt="" />
        {/* <img className="absolute  top-0 " src={blur} alt="" /> */}
        <img className="absolute  top-72 left-[60%]" src={ellipse1} alt="" />
        </>
    )
}

export default Header;