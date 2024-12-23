import { createContext, useState } from "react";

const TabsContext = createContext();

let tabs = [
    { id: "all", label: "All" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "media", label: "Media" },
];


function TabsProvider({ children }) {

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const valueToShare = {
        tabs,
        activeTab,
        setActiveTab,
    };    

    return <TabsContext.Provider value={valueToShare}>
        {children}
    </TabsContext.Provider>
}

export {TabsProvider};
export default TabsContext;