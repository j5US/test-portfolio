// import redirectArrow from "../assets/images/north-east-arrow.svg"
import { Link } from 'react-router-dom';
import ArrowIcon from "./icons/ArrowIcon";

function About() {
    return (
        <div className="bg-shadow size-full rounded-[30px] p-[40px] flex flex-col justify-between" >
            <div className="flex flex-col gap-2 overflow-hidden max-md:gap-1">
                <h2 className=" text-[1.6rem] poppins-semibold">
                    The road from learning to doing.
                </h2>
                <p className="break-words poppins-regular tracking-[0.4px] w-[45ch] leading-[165%] max-lg:w-[100%]">
                    An overview of my journey through development and design, and the insights I&apos;ve gained 
                    in merging both worlds.
                </p>
            </div>

            <div className="flex justify-between items-center ">
                <Link to="/about">
                    <button className="font-medium text-[0.88rem] poppins-regular outline outline-[2.4px] outline-blog-outline hover:outline-[5px] flex items-center gap-1 h-[37px] px-3 rounded-full
                    transition-[outline] duration-400 ease-out
                    ">

                        <ArrowIcon/>
                        <span className="font-medium"> Read more </span>

                    </button>
                </Link>
                <span className="px-2 font-medium text-[0.95rem] text-slate-400">Dec 12, 2024</span>
            </div>

        </div>
    );
}

export default About; 