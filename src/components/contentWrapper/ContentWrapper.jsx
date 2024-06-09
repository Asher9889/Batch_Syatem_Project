import React from "react";

const ContentWrapper = ({children})=>{
    return (
        <div className="w-[100vw] max-w-[1000px] my-0 mx-auto py-0 px-[20px]">
            {children}
        </div>
    )
}

export default ContentWrapper;