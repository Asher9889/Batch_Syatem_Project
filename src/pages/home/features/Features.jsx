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
const Features = () => {
  return (
    <>
      <div className="relative">
        <img className="absolute -top-10 left-28 " src={ellipse2} />
        <img className="absolute top-14 left-28 " src={ellipse1} />
        <ContentWrapper>
            <div className="flex flex-row">

                <div className="relative flex-1 ">
                <img src={ring} alt="" />
                <img
                    className="absolute top-7 left-16 rotate-[15deg] w-96"
                    src={iphone1}
                    alt=""
                />
                </div>

                <div className="flex-1 ">
                <div className="flex pt-20 flex-col font-clash gap-2">
                    <p className="text-[--font-pink] text-md">FEATURES</p>
                    <h1 className="text-xl font-bold -mt-2">Uifry Premium</h1>
                    
                    <div className="flex flex-row items-center gap-2">
                    <img src={star5} alt="" />
                    <h4 className="font-bold text-md">Budgeting Intervals</h4>
                    </div>
                    <p className="text-zinc-400 text-md">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque
                    aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                    </p>
                    
                    <div className="flex flex-row items-center gap-2">
                    <img src={cube} alt="" />
                    <h4 className="font-bold">Budgeting Intervals</h4>
                    </div>
                    <p className="text-zinc-400 text-md">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque
                    aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                    </p>
                    
                    <div className="flex flex-row items-center gap-2">
                    <img src={cube1} alt="" />
                    <h4 className="font-bold">Budgeting Intervals</h4>
                    </div>
                    <p className="text-zinc-400 text-md">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque
                    aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                    </p>

                </div>
                </div>
            
            </div>

            <div className="flex flex-row">

                <div className="flex-1 ">
                    <div className="flex pt-20 flex-col pt-32 font-clash gap-2">
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
                    <img src={ring} alt="" />
                    <img
                        className="absolute top-7 left-16 rotate-[15deg] w-96"
                        src={iphone1}
                        alt=""
                    />
                </div>

            </div>

            <div className="flex flex-row">

                <div className="relative flex-1 ">
                <img src={ring} alt="" />
                <img
                    className="absolute top-7 left-16 rotate-[15deg] w-96"
                    src={iphone1}
                    alt=""
                />
                </div>

                <div className="flex-1 ">
                <div className="flex pt-40 flex-col font-clash gap-2">
                    
                    
                    
                    <div className="flex flex-row items-center gap-2">
                    <img src={star5} alt="" />
                    <h4 className="font-bold text-md">Fully Customizable</h4>
                    </div>
                    <p className="text-zinc-400 text-md">
                    Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    
                    

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
