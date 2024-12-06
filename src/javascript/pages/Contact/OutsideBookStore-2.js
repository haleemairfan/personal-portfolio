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
    const [isMediumScren, setIsMediumScreen] = useState(window.innerWidth >= 768 && window.innerWidth < 1024); 
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024 && window.innerWidth < 1280); 


    useEffect(() => {
        const updateOrientation = () => {
            setIsSmallScreen(window.innerWidth < 768); 
            setIsMediumScreen(window.innerWidth > 640 && window.innerWidth < 1024);
            setIsLargeScreen(window.innerWidth > 1024 && window.innerWidth < 1280)
        };

        updateOrientation();
        window.addEventListener("resize", updateOrientation);

        return () => window.removeEventListener("resize", updateOrientation);
    }, []);

    const initialPosition = isSmallScreen
        ? { x: -100 , y: 0 } 
        : isMediumScren
        ? { x: -140 , y: 0 }
        : isLargeScreen
        ? { x: -200 , y: 0 }
        : { x:-270, y:0 };


    return(
        <div className="relative h-screen overflow-hidden">
            <OutsideBookStore className="absolute inset-0"/>
            <Character initialPosition={initialPosition} className="absolute h-screen w-screen top-[23%]"/>
            <SpeechBubble text={[
                "Whew that was a",
                "whirlwind! Let's",
                "keep in touch.",
                "Here's my contact",
                "Hope to hear from",
                "you :)"]}
                className="absolute bottom-[90%] right-[5%] w-screen h-screen"/>
                
            <img src={treasure}
                alt="treasure chest"
                className="absolute inset-0 w-[100vw] h-[100vh] left-[-22%]
                    sm:top-[35%]
                    xl:top-[32%]
                    object-cover"
            />

            <button onClick={handleClick}
                className="absolute top-[75%] left-[17%] h-[20vh] w-[20vw] opacity-0">
                Invisible button
            </button>


            <TabBar className="absolute"/>
        </div>
    );

}