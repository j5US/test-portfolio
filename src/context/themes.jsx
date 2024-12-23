import { useEffect } from "react";
import { createContext, useState } from "react";

const ThemesContext = createContext();


function ThemesProvider({ children }) {

    const [isDarkEnabled, setIsDarkEnabled] = useState(false);

    useEffect(() => {
        if (isDarkEnabled) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [isDarkEnabled]); 

    const valueToShare = {
        isDarkEnabled,
        setIsDarkEnabled,
    };    

    return <ThemesContext.Provider value={valueToShare}>
        {children}
    </ThemesContext.Provider>
}

export {ThemesProvider};
export default ThemesContext;