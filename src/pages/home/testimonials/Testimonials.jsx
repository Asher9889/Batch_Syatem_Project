import React from "react";
import { ContentWrapper } from "../../../components";
import group from "../../../assets/Group.png"
import ellipse1 from "../../../assets/Ellipse 1.png"
import ellipse2 from "../../../assets/Ellipse 2.png"
const Testimonials = ()=>{
    return (
        <div className="pt-6 sm:pt-28 md:pt-6">
            <ContentWrapper>
                <div className="flex flex-col font-clash">

                    <p className="text-center text-[18px]">TESTIMONIAL</p>
                    
                    <h3 className="text-center text-2xl font-bold leading-[25px] ">What Our Users <br />Say About Us?</h3>
                    

                    <div className="relative flex flex-col sm:flex-row" >

                        <div className=" z-10 flex-1">
                            <img className="relative left-0 top-8 w-56 top-0 ssm:left-10 ssm:top-20 lg:top-28 lg:left-20 " src={ellipse1} alt="" />
                            <img className="relative left-2 -top-20 w-56  ssm:-top-12 lg:-top-4 lg:left-10" src={ellipse2} alt="" />
                            <img className="absolute top-0 w-[400px] lg:w-[500px]" src={group} alt="" />
                            
                            
                        </div>

                        <div className="flex flex-1 -mt-10 ssm:mt-6 sm:mt-0  sm:pt-40 md:pt-14 lg:pt-24 flex-col font-clash gap-2">
                    
                    
                    
                            <div className="flex flex-row items-center gap-2">
                                
                                <h4 className="font-bold text-md lg:text-xl">Fully Customizable</h4>
                            </div>
                            <p className="text-zinc-400 text-md lg:text-lg">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                            
                            <div className="flex flex-row gap-2 items-center mt-2">
                                <img className="w-8 h-8 object-cover rounded-full " src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <img className="w-6 h-6 object-cover rounded-full opacity-70" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <img className="w-6 h-6 object-cover rounded-full opacity-70" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <img className="w-6 h-6 object-cover rounded-full opacity-70" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <img className="w-6 h-6 object-cover rounded-full opacity-70" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <p className="font-bold text-sm mt-4">Nick Jonas</p>

                    </div>
                        
                        
                    </div>

                </div>
            </ContentWrapper>
        </div>
    )
}

export default Testimonials;