import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import OutsideBookStore from "../../components/Backgrounds/OutsideBookStore"
import SpeechBubble from "../../components/SpeechBubble"
import Character from "../../components/Character";
import TabBar from "../../components/TabBar"
import treasure from "../../../resources/misc/treasure.png"


export default function OutsideBookStore2() {

    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/contact");
    }
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); 
    const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768 && window.innerWidth < 1024); 
    const [isExtraLargeScreen, setIsExtraLargeScreen] = useState(window.innerWidth >= 2560); 
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280 && window.innerWidth < 1536); 



    useEffect(() => {
        const updateOrientation = () => {
            setIsSmallScreen(window.innerWidth < 768); 
            setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
            setIsExtraLargeScreen(window.innerWidth >= 2560);
            setIsLargeScreen(window.innerWidth >= 1280 && window.innerWidth < 1536)
        };

        updateOrientation();
        window.addEventListener("resize", updateOrientation);

        return () => window.removeEventListener("resize", updateOrientation);
    }, []);

    const initialPosition = isSmallScreen
        ? { x: -110, y: 0 } 
        : isMediumScreen
        ? {x: -150, y: -40}
        : isExtraLargeScreen
        ? {x: -450, y: 0}
        : isLargeScreen
        ? {x: -280, y: 0}
        : {x: -300, y: 0}

    return (
        <div className="relative overflow-hidden w-screen h-screen">
            <OutsideBookStore className="absolute" />
            <Character
                initialPosition={initialPosition}
                className="h-screen w-screen right-[-50%] top-[25%] object-cover"
            />


            <SpeechBubble text={[
                "Whew that was a",
                "whirlwind! Let's keep",
                "in touch. Here's",
                "my contact. Hope",
                "to hear from",
                "you :)"]}
                className="absolute 
                    top-[-60%] h-[1000px] w-[1000px] left-[20%]
                    2xl:top-[-40%] 2xl:left-[40%]
                    xl:w-[1000px] xl:h-[1000px] xl:top-[-52%] xl:left-[20%]
                    lg:h-[1000px] lg:w-[1000px] lg:top-[-50%] lg:left-[20%]
                    md:h-[1000px] md:w-[1000px] md:top-[-50%] md:left-[25%]
                    sm:h-[1000px] sm:w-[1000px] sm:top-[-50%] sm:left-[17%]"/>
                
            <img src={treasure}
                alt="treasure chest"
                className="absolute inset-0 w-[100vw] h-[100vh] left-[-22%] object-cover
                    top-[30%]
                    xl:top-[32%]
                    sm:top-[35%]"
            />

            <button onClick={handleClick}
                className="absolute top-[75%] left-[17%] h-[20vh] w-[20vw] opacity-0">
                Invisible button
            </button>


            <TabBar className="absolute"/>
        </div>
    );

}