import { FaLinkedinIn } from "react-icons/fa6";
import ArrowIcon from "./icons/ArrowIcon";
import { useContext } from "react";
import ThemesContext from "../context/themes";

function SocialTile() {
    const { isDarkEnabled } = useContext(ThemesContext);

    return (<>{
        !isDarkEnabled ?
            <div className='size-full relative bg-shadow bg-[#9fd0eb] rounded-[30px] overflow-hidden flex'>
                <FaLinkedinIn className='m-auto text-7xl text-slate-100' />
                <div className=' absolute h-[36px] w-[36px] bg-background rounded-full flex bottom-[14px] left-[14px]
            outline outline-0 hover:outline-[5px] outline-[#ffffff87] transition-[outline] duration-350 cursor-pointer
          '>
                    <span className='m-auto'><ArrowIcon /></span>
                </div>
            </div>
            :

            <div className='size-full relative bg-shadow bg-background rounded-[30px] overflow-hidden flex'>
                <FaLinkedinIn className='m-auto text-7xl text-blue-300' />
                <div className=' absolute h-[36px] w-[36px] bg-background rounded-full flex bottom-[14px] left-[14px]
            outline outline-[2.4px] hover:outline-[5px] outline-project-outline transition-[outline] duration-350 cursor-pointer
          '>
                    <span className='m-auto'><ArrowIcon /></span>
                </div>
            </div>
    }</>
    );
}

export default SocialTile;