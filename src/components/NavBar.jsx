import useWindowWidth from "../hooks/useWindowWidth";
import AnimatedTabs from "./AnimatedTabs"

// function NavBar({ setTabSelected }) {
function NavBar() {

    // const navItems = [ 'Home','About','Projects','Blog',];
    const width = useWindowWidth();
    // let [activeTab, setActiveTab] = useState("all");

    // const tabView = (<AnimatedTabs setTabSelected={setTabSelected} activeTab={activeTab} setActiveTab={setActiveTab} />);

    return <div className="w-[100%] pt-[50px] pb-[37px] px-[60px] flex justify-between items-center
            max-[955px]:justify-center max-[955px]:flex-col max-[955px]:gap-6 max-[955px]:pb-2 max-[1025px]:items-start
            max-[955px]:items-center
    ">
        <h1 className="poppins-extrabold text-3xl rainbow ">

            mriganka <br className="hidden max-[1025px]:block max-[955px]:hidden" /> paul.

        </h1>

        <nav className="absolute left-1/2 transform -translate-x-1/2 translate-y-[0px] z-50 max-[955px]:hidden">
            {width > 955 && <AnimatedTabs />}
        </nav> 
        <nav className="max-[955px]:block hidden">
            {width < 955 && <AnimatedTabs />}
        </nav>

        <p className="text-md poppins-medium max-[955px]:hidden">Contact</p>
    </div>
}

export default NavBar