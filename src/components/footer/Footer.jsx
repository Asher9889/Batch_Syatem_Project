import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/logo.png"
import call from "../../assets/call.png"
import msg from "../../assets/msg.png"

const Footer = ()=>{
    return (
        <div>
            <ContentWrapper>
                <div className="flex font-clash pb-10 flex-col lg:flex-row justify-evenly md:gap-8 gap-14">

                    <div className="flex flex-1  justify-between md:justify-around    flex-row  font-clash">

                        <div className="flex flex-col gap-4">
                            
                            <img className="w-24" src={logo} alt="" />

                            <span className="flex gap-2 flex-row items-center">
                                <img src={msg} alt="" />
                                <p className="text-sm">Help@Frybix.com</p>
                            </span>
                            
                            <span className="flex gap-2 flex-row items-center">
                                <img src={call} alt="" />
                                <p className="text-sm">+1234 456 678 89</p>
                            </span>
                            
                        </div>

                        <div className=" flex flex-col items-start gap-4">
                            <p className="text-2xl">Links</p>
                            <button className="text-md">Home</button>
                            <button className="text-md">About Us</button>
                            <button className="text-md">Bookings</button>
                            <button className="text-md">Blog</button>
                        </div>

                    </div>

                    <div className="flex flex-1 justify-between md:justify-around flex-row ">

                        <div className=" flex flex-col items-start gap-4">
                            <p className="text-2xl">Legal</p>
                            <button className="text-md">Terms of Use</button>
                            <button className="text-md">Privacy Policy</button>
                            <button className="text-md">Cookie Policy</button>
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <p  className="text-2xl">Product</p>
                            <button className="text-md">Take Tour</button>
                            <button className="text-md">Live Chat</button>
                            <button className="text-md">Reviews</button>
                        </div>

                    </div>

                    <div className="flex flex-1 gap-4 md:items-center  flex-col">
                        <p className="text-2xl">Newsletter</p>
                        <p className="text-md">stay Up To Date</p>
                        <div className="flex   flex-row mt-6 items-center">
                            
                            <input type="text" placeholder="Your Email" />
                            <button className="text-md rounded-sm text-white bg-black ">Subscribe</button>
                        </div>

                    </div>

                </div>
            </ContentWrapper>
            
        </div>
    )
}

export default Footer;