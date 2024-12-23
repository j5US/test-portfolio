import { useContext } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import TabsContext from '../context/tabs';
import ThemesContext from "../context/themes";

import LocationMe from './LocationMe';
import ThemeToggler from './ThemeToggler';
import Intro from './Intro';
import ContactMe from './ContactMe';
import About from './About';
import Misc from './Misc';
import SocialTile from './SocialTile';

import { gridLayouts, highlightItem } from '../config/layoutConfig';
import useResponsiveRowHeight from '../hooks/useResponsiveRowHeight';
import { useDetectTouch } from "../hooks/useDetectTouch";
import Projects from '../utils/Projects';

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridDisplay = () => {
    const { rowHeight, currentBreakpoint } = useResponsiveRowHeight();
    const isTouchDevice = useDetectTouch();
    const { activeTab } = useContext(TabsContext);
    const { isDarkEnabled } = useContext(ThemesContext);
    const { portrait1, portrait2, landscape } = Projects();

    useGSAP(() => {
        const tl = gsap.timeline();

        tl
            .to(".grid-wrapper", {
                delay: 1,
            })
            .fromTo(".grid-wrapper", {
                y: 15,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power1.out"
            }, ">")

    }, []);

    const highlightActive = (checkItem) => highlightItem[activeTab][checkItem] ? "" : "opacity-[0.3]"
    const itemStyle = `${isDarkEnabled ? " outline-[#30363d]" : "outline-transparent"}
    bg-background rounded-[30px] cursor-grab active:cursor-grabbing select-none outline 
    outline-[2.4px]`;

    const itemMapStyle = "bg-background rounded-[30px] cursor-grab active:cursor-grabbing select-none outline outline-[2.4px] outline-transparent"

    return (
        <div className="grid-wrapper w-[1200px] max-lg:w-[800px] max-md:w-[375px]">
            <ResponsiveGridLayout
                className="layout size-full"
                layouts={{ [currentBreakpoint]: gridLayouts[activeTab][currentBreakpoint] }}
                // layouts={{ lg: layout }}
                breakpoints={{ lg: 1200, md: 800, sm: 375 }}
                cols={{ lg: 4, md: 4, sm: 4 }}
                rowHeight={rowHeight}
                isDraggable={!isTouchDevice}
                isResizable={false}
                margin={[17, 17]}
                onDragStart={(layout, oldItem, newItem, placeholder, e, element) => {
                    element.style.zIndex = 10
                }}
                onDragStop={(layout, oldItem, newItem, placeholder, e, element) => {
                    element.style.zIndex = 0
                }}
            >
                <div key="intro" className={`${highlightActive("intro")} ${itemStyle} `}>
                    <Intro />
                </div>

                <div key="map" className={`${highlightActive("map")} ${itemMapStyle}`}>
                    <LocationMe />
                </div>

                <div key="portrait1" className={`${highlightActive("portrait1")} ${itemStyle}`}>
                    {portrait1}
                </div>

                <div key="misc" className={`${highlightActive("misc")} ${itemStyle}`}>
                    <Misc />
                </div>

                <div key="linkedIn" className={`${highlightActive("linkedIn")} ${itemStyle}`}>
                    <SocialTile />
                </div>

                <div key="portrait2" className={`${highlightActive("portrait2")} ${itemStyle}`}>
                    {portrait2}
                </div>

                <div key="toggleBtn" className={`${highlightActive("toggleBtn")} ${itemStyle} `}>
                    <ThemeToggler />
                </div>

                <div key="about" className={`${highlightActive("about")} ${itemStyle}`}>
                    <About />
                </div>

                <div key="landscape" className={`${highlightActive("landscape")} ${itemStyle}`}>
                    {landscape}
                </div>

                <div key="contact" className={`${highlightActive("contact")} ${itemStyle}`}>
                    <ContactMe />
                </div>
            </ResponsiveGridLayout>
        </div>
    );
};


export default GridDisplay;