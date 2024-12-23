import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import "../styles/ThemeToggle.css";

import ps from "../assets/images/tools/adobe-photoshop.svg"
import c from "../assets/images/tools/c-1.svg"
import cplus from "../assets/images/tools/c.svg"
import java from "../assets/images/tools/java-14.svg"
import js from "../assets/images/tools/logo-js.svg"
import mySql from "../assets/images/tools/mysql-logo.svg"
import mongo from "../assets/images/tools/mongo-icon.svg"
import nodeJs from "../assets/images/tools/nodejs-icon.svg"
import figma from "../assets/images/tools/figma-icon.svg"
import git from "../assets/images/tools/git-icon.svg"
import py from "../assets/images/tools/python-5.svg"
import rJs from "../assets/images/tools/react-2.svg"
import tailwd from "../assets/images/tools/tailwind-css.svg"


const tools = [cplus, js, rJs, nodeJs, mongo, tailwd, c, py, java, mySql, git, ps, figma];

const renderedSlides = tools.map((tool, index) => {
    return (
        <SplideSlide key={index + 1}>
            <div className="h-[75px] w-[75px] rounded-[20px] bg-slider-tile flex justify-center items-center">
                <img src={tool} className="h-[42px] w-[42px] m-auto" />
            </div>
        </SplideSlide>)
})

function InfiniteSlider() {
    return (
        <div className="relative size-full rounded-[30px] overflow-hidden p-2 cursor-pointer"
        style={{
            maskImage: "linear-gradient(to right, transparent 3%, #f7f1f1 6%, #f7f1f1 92%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 2%, #f7f1f1 6%, #f7f1f1 90%, transparent 95%)",
        }}>
            {/* <div
                className="absolute top-0 left-0 size-full z-10 px-[28px] py-[40px] text-[1.8rem] poppins-light "
                style={{
                    background: "linear-gradient(to right, #f7f1f1 2%, transparent 6%, transparent 90%, #f7f1f1 95%)",
                }}
            /> */}
            {/* Stack I use</div> */}
            {/* <br /> */}
            <div className=" size-full overflow-hidden flex items-center ">
                <Splide
                    options={{
                        type: "loop", // Loop back to the beginning when reaching the end
                        autoScroll: {
                            pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
                            pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                            rewind: true, // Rewind to start when the end is reached
                            speed: 1.1 // Scrolling speed
                        },
                        arrows: false, // Hide navigation arrows
                        pagination: false, // Hide pagination dots
                        fixedWidth: '75px', // Fixed width for each slide
                        gap: '16px', // Gap between slides
                        swipe: true,
                        // drag: false
                    }}
                    extensions={{ AutoScroll }} // Use the AutoScroll extension
                >
                    {renderedSlides}
                </Splide>
            </div>
        </div>
    );
}

export default InfiniteSlider;
