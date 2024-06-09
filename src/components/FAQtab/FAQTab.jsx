import react from "react";

const FAQTab = ({bg, text, desc})=>{
    return(
        <div className={`bg-[${bg}]  font-clash px-6 py-3 rounded-md`}>
            <p className={`font-bold ${text} text-lg md:text-xl`}>The Best Financial Accounting App Ever!</p>
            <p className={`text-xs ${desc} md:text-base`}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
    )
}

export default FAQTab;