import React from "react";
import ring from "../../../assets/ring.png";
import { ContentWrapper, Info } from "../../../components";
import iphone1 from "../../../assets/iphone1.png";
import ellipse1 from "../../../assets/Ellipse 1.png";
import ellipse2 from "../../../assets/Ellipse 2.png";
import star5 from "../../../assets/star5.png";
import cube1 from "../../../assets/cube1.png";
import cube from "../../../assets/cube.png";
import star3 from "../../../assets/Star 3.png";
import ring2 from "../../../assets/ring2.png";
const Features = () => {
  return (
    <>
      <div className="relative mt-[400px] ssm:mt-[450px] sm:mt-0">
        <img className="absolute -top-8 -left-8 xl:-top-10 xl:left-28 " src={ellipse2} />
        <img className="absolute top-8 -left-6 xl:top-14 xl:left-28 " src={ellipse1} />
        <ContentWrapper>
            <div className="relative flex flex-col sm:flex-row">

                <div className="bg-green-300 sm:mt-4 relative flex-1 ">
                    <img className="ssm:w-[700px]" src={ring} alt="" />
                    <img
                        className="absolute top-6  left-8 ssm:top-8 ssm:left-[55px] ssm:w-[280px] sm:w-80  sm:left-[20px] sm:top-6 md:w-96 lg:left-[60px] rotate-[15deg] w-56"
                        src={iphone1}
                        alt=""
                    />
                </div>

                <div className="flex-1 bg-blue-300 -mt-16 sm:mt-0 ">
                <div className="flex pt-20 flex-col font-clash gap-2">
                    <p className="text-[--font-pink] text-md sm:text-sm">FEATURES</p>
                    <h1 className="text-xl font-bold -mt-2">Uifry Premium</h1>
                    
                    <div className="flex flex-row items-center gap-2">
                    <img src={star5} alt="" />
                    <h4 className="font-bold text-md sm:text-sm">Budgeting Intervals</h4>
                    </div>
                    <p className="text-zinc-400 text-md    sm:text-sm sm:leading-[15px]">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque
                    aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                    </p>
                    
                    <div className="flex flex-row items-center gap-2">
                    <img src={cube} alt="" />
                    <h4 className="font-bold sm:text-sm">Budgeting Intervals</h4>
                    </div>
                    <p className="text-zinc-400 text-md sm:text-sm sm:leading-[15px]">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque
                    aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                    </p>
                    
                    <div className="flex flex-row items-center gap-2">
                    <img src={cube1} alt="" />
                    <h4 className="font-bold sm:text-sm">Budgeting Intervals</h4>
                    </div>
                    <p className="text-zinc-400 text-md sm:text-sm sm:leading-[15px]">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque
                    aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                    </p>

                </div>
                </div>
            
            </div>

            <div className="relative flex flex-col -mt-16 sm:-mt-0 sm:flex-row">

                <div className="flex-1 ">
                    <div className="flex pt-20 flex-col pt-32 md:pt-24 font-clash gap-2">
                        <p className="text-[--font-pink] text-md">Advantages</p>
                        <h1 className="text-xl font-bold -mt-2">Why Choose Uifry ?</h1>
                        
                        <div className="flex flex-row items-center gap-2">
                        <img src={star5} alt="" />
                        <h4 className="font-bold text-md">Clever Notification</h4>
                        </div>
                        <p className="text-zinc-400 text-md">
                        Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                        
                        

                    </div>
                </div>

                <div className="relative flex-1 ">
                    <img className="ssm:w-[700px]" src={ring} alt="" />
                    <img
                        className="absolute top-6  left-8 ssm:top-8 ssm:left-[55px] ssm:w-[280px] sm:w-80  sm:left-[20px] sm:top-6 md:w-96 lg:left-[60px] rotate-[15deg] w-56"
                        src={iphone1}
                        alt=""
                    />
                </div>

            </div>

            <div className="relative flex flex-col -mt-16 sm:-mt-0 sm:flex-row">

                <div className="relative flex-1 ">
                <img className="ssm:w-[700px]" src={ring} alt="" />
                <img
                    className="absolute top-6  left-8 ssm:top-8 ssm:left-[55px] ssm:w-[280px] sm:w-80  sm:left-[20px] sm:top-6 md:w-96 lg:left-[60px] rotate-[15deg] w-56"
                    src={iphone1}
                    alt=""
                />
                </div>

                <div className="flex-1 -mt-36 sm:-mt-0 ">
                    <div className="flex pt-40 md:pt-32 flex-col font-clash gap-2">
                    
                    
                    
                        <div className="flex flex-row items-center gap-2">
                            <img src={star5} alt="" />
                            <h4 className="font-bold text-md">Fully Customizable</h4>
                        </div>
                        <p className="text-zinc-400 text-md">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                            
                    

                    </div>
                </div>
            
            </div>


        </ContentWrapper>
        <img className="absolute top-24 left-10" src={star3} alt="" />
      </div>
    </>
  );
};

export default Features;
