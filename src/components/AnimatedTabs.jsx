import { motion } from "framer-motion";
import { useContext } from "react";
import TabsContext from "../context/tabs";
import { useDetectTouch } from "../hooks/useDetectTouch";
let tabs = [
  { id: "all", label: "All" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "media", label: "Media" },
];


// function AnimatedTabs({ setTabSelected, activeTab, setActiveTab }) {
function AnimatedTabs() {

  const isTouchDevice = useDetectTouch();

  const { activeTab, setActiveTab } = useContext(TabsContext);


  const handleClick = (tab) => {
    setActiveTab(tab);
    // setTabSelected(tab);
  }

  return (
    <div className="flex space-x-1 border border-[2.2px] border-nav-border bg-nav-background rounded-full p-1 overflow-hidden">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleClick(tab.id)}
          // onClick={() => setActiveTab(tab.id)}
          className={`${activeTab === tab.id ? "" : ""}
             ${!isTouchDevice && "hover:text-gray-500"}
             relative rounded-full px-4 py-1.5 text-sm font-medium outline-gray-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {/* Motion bubble effect */}
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-active-tab"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
            />
          )}

          {/* Text should appear above the bubble */}
          <p className="relative z-[11]">{tab.label}</p>
        </button>
      ))}
    </div>
  );
}

export default AnimatedTabs;
