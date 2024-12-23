import { useState } from "react";
import { useEffect } from "react";


export const useDetectTouch = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);


    return isTouchDevice;
}