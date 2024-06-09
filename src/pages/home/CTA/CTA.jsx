import react from "react";
import { ContentWrapper } from "../../../components";
import iphoneGrp from "../../../assets/iPhoneGrp.png"
import apple from "../../../assets/apple.png";
import frame from "../../../assets/Frame.png";

const CTA = ()=>{
    return (
        <div className="mt-4 sm:mt-28 pb-6">
            <ContentWrapper>
                <div className="relative">
                    <img className="" src={frame} alt="" />
                    <div className="hidden sm:block">
                        <img className="absolute top-4 right-[3px] w-80 lg:right-0 lg:top-16 lg:w-96" src={iphoneGrp} alt="" />
                    </div>    
                    <div className="absolute font-clash  top-2 left-8 ssm:top-6   sm:left-16 sm:top-28 lg:top-44 lg:left-28 flex flex-col">
                        <h1 className="text-white font-bold ssm:text-lg sm:text-3xl lg:text-4xl">Ready To Get Started?</h1>
                        <p className="text-white sm:w-[80%] text-xs ssm:text-[14px] lg:text-lg">Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.</p>
                        <span className="flex flex-row items-center  rounded-md gap-2 mt-4 text-white bg-white w-fit px-4 py-2">
                            <button className="text-black text-sm lg:text-lg">Download App </button>
                            <img className="w-4" src={apple} alt="" />
                        </span>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default CTA;