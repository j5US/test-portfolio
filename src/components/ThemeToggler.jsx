import { MdWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

import ThemesContext from "../context/themes";
import { useContext } from "react";

import "../styles/ThemeToggle.css";

export default function ThemeToggle() {
    // const [isEnabled, setIsEnabled] = useState(false);
    const {isDarkEnabled, setIsDarkEnabled} = useContext(ThemesContext);

    const toggleState = () => {
        // setIsEnabled((prevState) => !prevState);
        setIsDarkEnabled((prevState) => !prevState);
    };

    return (
        <div className="size-full flex rounded-[30px] bg-shadow">
            <label className="toggle-wrapper" htmlFor="toggle">
                <div className={`toggle ${isDarkEnabled ? "enabled bg-[#21262d] before:bg-white outline-slate-700" : "disabled bg-[#dfe3e9] before:bg-black outline-slate-200"}
                outline outline-1`}>

                    <div className="icons">
                        <MdWbSunny className="text-amber-200" />
                        <IoMdMoon className="text-amber-500" />
                    </div>

                    <input
                        className="opacity-0"
                        id="toggle"
                        name="toggle"
                        type="checkbox"
                        checked={isDarkEnabled}
                        onChange={toggleState}
                    />
                </div>
            </label>
        </div>
    );
}
