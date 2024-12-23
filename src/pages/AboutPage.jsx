import { useNavigate } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useContext, useRef } from "react";
import { RiCloseLine } from "react-icons/ri";
import InfiniteSlider from "../components/InfiniteSlider"
import ThemesContext from '../context/themes';
// import Timeline from './Timeline';
function AboutPage() {
    const elementRef = useRef(null);
    const navigate = useNavigate();
    const { isDarkEnabled } = useContext(ThemesContext);    
    const bgSecondary = isDarkEnabled ? "#0d1117" : "#ede9e9" ;
    const bgActive = isDarkEnabled ? "#21262d" : "#e3e0e0";
    

    useGSAP(() => {
        const tl = gsap.timeline();

        tl
            .fromTo(".about-content, .close-btn", {
                translateY: 30,
                opacity: 0
            }, {
                translateY: 0,
                opacity: 1,
                duration: 0.7,
                delay: 0.4,
                ease: "power1.out"
            })
    }, [])

    const { contextSafe } = useGSAP();

    const handleMouseEnter = contextSafe(() => {
        const el = elementRef.current;
        if (!el) return;
        gsap.to(el, {
            backgroundColor: bgActive,
            scale: "1.15",
            duration: 0.3,
        });
        gsap
            .to(".about-content", {
                translateY: "20px",
                duration: 0.4,
                ease: "power1.out"
            });
    });

    const handleMouseLeave = contextSafe(() => {
        const el = elementRef.current;
        if (!el) return;
        // gsap.killTweensOf(el);
        gsap.to(el, {
            backgroundColor: bgSecondary,
            scale: "1",
            duration: 0.3,
        });
        gsap.to(".about-content", {
            translateY: "0px",
            duration: 0.4,
            ease: "power1.out"
        });
    });
    const handleClick = contextSafe(() => {
        const el = elementRef.current;
        if (!el) return;

        gsap.to(".close-btn", {
            translateY: "40px",
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
        });

        gsap.to(".about-content", {
            translateY: "60px",
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            onComplete: () => navigate('/'),
        });
    });

    return (
        <>
            <div className="h-[120px] w-full">
                <button
                    ref={elementRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                    className={`close-btn
                bg-close-btn-bg h-[46px] w-[46px] rounded-full border border-2 absolute left-1/2 
                transform -translate-x-1/2 top-[40px] border-close-btn-edge
                ` }>
                    <RiCloseLine className="text-[22px] m-auto text-4xl" />
                </button>
            </div>

            <div className="about-content w-[648px] py-[60px] px-[24px] flex flex-col gap-8
                max-md:w-[375px] max-sm:w-[320px]
            ">
                <h1 className="poppins-bold text-[2.2rem]">The road from learning to doing.</h1>

                <span className="bg-close-btn-bg self-start py-2 px-4 rounded-full font-medium text-[0.97rem]
                outline outline-[2.4px] outline-nav-border">
                    Dec 12, 2024
                </span>

                <h3 className='text-[1.4rem] poppins-semibold'>My story</h3>

                <p className=" text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                    I got my first computer when I was 12. At the time, I didn&apos;t know much about
                    programming, but I was captivated by games like Grand Theft Auto: Vice City
                    and Prince of Persia. While these games were a source of entertainment, I never
                    imagined that they&apos;d lay the foundation for my future in technology. My
                    initial years with a computer were more about playing games and exploring digital
                    worlds than about understanding the inner workings of computers.
                </p>

                <p className="text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                    It wasn&apos;t until I reached college that I started to realize the true potential of
                    computer science. I began experimenting with small projects using simple HTML and
                    JavaScript and quickly discovered how powerful web development could be. To deepen
                    my understanding, I took The Complete JavaScript Course by Jonas Schmedtmann. The
                    course was a game-changer, providing the structure and knowledge I needed to
                    enhance my skills and approach projects with more confidence. From that point on,
                    I was hooked.
                </p>

                <h3 className='text-[1.4rem] poppins-semibold'>What I do now</h3>

                <p className="text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                    Now I&apos;m a sophomore at Chandigarh University, focusing on full-stack
                    web development and working on projects to enhance my skills.
                </p>

                <h3 className='text-[1.4rem] poppins-semibold'>Stack I use</h3>

                <div>
                    <InfiniteSlider />
                </div>

                <h3 className='text-[1.4rem] poppins-semibold'>Education</h3>

                <div className="text-divretty poppins-regular leading-[170%] tracking-[0.4px]">
                    <ul className='space-y-2'>
                        <li>
                            <span className='mr-1 font-medium'>Master of Computer Applications</span>
                            at Chandigarh University (2023 - 2025).
                        </li>
                        <li>
                            <span className='mr-1 font-medium'>Bachelor of Computer Applications</span>
                            at University of Engineering and Management, Kolkata (2019 - 2022).
                        </li>

                    </ul>
                </div>


            </div>
            <br />
        </>
    );
}


export default AboutPage;