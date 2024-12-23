// import faceImage from "../assets/images/profileImage.png"
import imgFace from "../assets/images/faces/face2.png"
function Intro(){
    return (
        <div className=" size-full bg-shadow rounded-[30px] p-[40px] flex flex-col gap-3 max-lg:gap-5 max-md:gap-4"> 
            <div className="">
                <img src={imgFace} className="h-[100px] max-lg:h-[132px] max-md:h-[95px]" />
            </div>
            <p className="poppins-regular text-pretty leading-[165%] tracking-[0.4px]">I&apos;m 
                <strong className="poppins-bold mx-2 text-3xl tracking-[0.1px]">mriganka</strong>
                , a developer from India. 
                I&apos;m interested in React, Node.js,
                Web Development, APIs, Startups, and Music.</p>
        </div>
    );
}

export default Intro;