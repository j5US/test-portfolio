import { FaSpotify } from "react-icons/fa";
import aSpectrum from "../assets/images/spectrum.svg"
function Misc() {

    const spectrum = (
        <div className="h-[20px] w-[20px] flex gap-[3px] justify-center items-center">
            <div className="bg-green-400 max-h-[12px] h-[12px] w-[3px] rounded-full"
                style={{ animation: "playing 0.85s infinite ease" }} />
            <div className="bg-green-400 max-h-[12px] h-[3px] w-[3px] rounded-full"
                style={{ animation: "playing 1.26s infinite ease" }} />
            <div className="bg-green-400 max-h-[12px] h-[12px] w-[3px] rounded-full"
                style={{ animation: "playing 0.62s infinite ease" }} />
        </div>
    );


    return (
        <div className="bg-shadow rounded-[30px] size-full flex flex-col p-[35px] justify-between gap-2 overflow-hidden max-lg:p-[30px] max-md:p-[40px] ">
            <div className=""> <FaSpotify className="text-[3.5rem] text-green-400 max-lg:text-4xl max-md:text-7xl"/> </div>
            <div>
                <h6 className="flex gap-1 items-center poppins-regular text-green-400"> 
                    {/* <img src={aSpectrum} />  */}
                    {spectrum}
                    Offline. Last played</h6>
                <h2 className=" poppins-semibold text-3xl max-lg:text-[1.8rem] max-md:text-5xl">Numb</h2>
                <small className="poppins-light text-[1rem] max-lg:text-[0.9rem] max-md:text-[1.3rem] tracking-[0.4px] ml-[0px]"> Linkin Park </small>
            </div>
        </div>
    );
}

export default Misc;