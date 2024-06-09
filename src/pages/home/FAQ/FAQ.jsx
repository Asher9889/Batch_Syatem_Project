import React from "react";
import { ContentWrapper, FAQTab } from "../../../components";

const FAQ = ()=>{
    return (
        <div className="mt-6 sm:mt-20">
            <ContentWrapper>
                <div className="flex flex-col font-clash">
                    <p className="text-sm text-[var(--font-pink)] ">FAQ</p>
                    <h3 className="text-2xl md:text-3xl font-bold leading-[25px] ">Frequently Asked<br />Questions</h3>
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">

                        <div className="flex  flex-1 flex-col gap-3 ">
                            <FAQTab text="text-white" bg='#FF5555' desc="text-white" />
                            <FAQTab text="text-black" bg="bg-white" desc="text-zinc-500" />
                            <FAQTab text="text-white" bg="#FF5555" desc="text-white" />
                            
                        </div>

                        <div className="flex flex-1 flex-col gap-3 ">
                            <FAQTab text="text-black" bg="bg-white" desc="text-zinc-500" />
                            <FAQTab text="text-white" bg="#FF5555" desc="text-white" />
                            <FAQTab text="text-black" bg="bg-white" desc="text-zinc-500" />
                            
                        </div>
                    
                    </div>
                </div>
            </ContentWrapper>
           
        </div>
    )
}

export default FAQ;