import { VscMail } from "react-icons/vsc";
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from "react";
import ThemesContext from "../context/themes";
// import { FaLinkedinIn } from "react-icons/fa6";
function ContactMe() {
    const { isDarkEnabled } = useContext(ThemesContext);
    const iconStyle = `${isDarkEnabled ? "group-hover:text-black" : "group-hover:text-white"} 
    size-full transition-[font] duration-300`;
    const boxStyle = ` transition-[background] duration-300 cursor-pointer border border-link-border 
    rounded-3xl h-[88px] w-[90px] p-6 group hover:border-transparent
    max-lg:h-[88px] max-lg:w-[85px] max-md:h-[75px] max-md:w-[75px] max-md:p-4 `;
    return (
        <div className="size-full bg-shadow p-[40px] rounded-[30px] ">
            <div className="flex max-lg:flex-col max-lg:size-full gap-4 justify-between">
                <div className=" w-[220px] flex flex-col gap-2 ">
                    <h2 className=" text-[1.6rem] poppins-semibold">Have a project in mind?</h2>
                    <p className="poppins-regular tracking-[0.4px]">Let&apos;s connect!</p>
                </div>
                <ul className=" w-[202px] flex flex-wrap gap-4 max-lg:w-[100%]">
                    {/* <li className="cursor-pointer border border-gray-300 rounded-3xl h-[90px] w-[90px] p-6 group hover:bg-[#126bc4] hover:border-0">
                        <FaLinkedinIn className="size-full group-hover:text-white"/>
                    </li>*/}
                    <li className={`hover:bg-[#dd4336] ${boxStyle}`}>
                        <VscMail className={iconStyle} />
                    </li>
                    <li className={`${isDarkEnabled ? "hover:bg-[#fff]" : "hover:bg-[#000]"} ${boxStyle}`}>
                        <SiGithub className={iconStyle} />
                    </li>
                    <li className={`hover:bg-[#239ce7] ${boxStyle}`}>
                        <FaXTwitter className={iconStyle} />
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default ContactMe;