import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import OutsideBookStore from "../../components/Backgrounds/OutsideBookStore";
import SpeechBubble from "../../components/SpeechBubble";
import Character from "../../components/Character";
import TabBar from "../../components/TabBar";
import next from "../../../resources/misc/next.png";

export default function Goals() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/bookstore");
    };


    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); 
    const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768 && window.innerWidth < 1024); 



    useEffect(() => {
        const updateOrientation = () => {
            setIsSmallScreen(window.innerWidth < 768); 
            setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
        };

        updateOrientation();
        window.addEventListener("resize", updateOrientation);

        return () => window.removeEventListener("resize", updateOrientation);
    }, []);

    const initialPosition = isSmallScreen
        ? { x: -100, y: 0 } 
        : isMediumScreen
        ? {x: -100, y: -40}
        : {x: -230, y: 0}

    return (
        <div className="relative overflow-hidden w-screen h-screen">
            <OutsideBookStore className="absolute" />
            <Character
                initialPosition={initialPosition}
                className="h-screen w-screen right-[-50%] top-[20%] object-cover
                sm:landscape:top-[25%]"
            />

            <SpeechBubble
                text={[
                    "Here's my bookstore!",
                    "Here, I learn how",
                    "to create user-",
                    "centered products",
                    "to solve real-",
                    "world problems.",
                ]}
                className="absolute 
                    top-[-60%] h-[1000px] w-[1000px] left-[20%]
                    2xl:top-[-40%] 2xl:left-[40%]
                    xl:w-[1000px] xl:h-[1000px] xl:top-[-52%] xl:left-[20%]
                    lg:h-[1000px] lg:w-[1000px] lg:top-[-50%] lg:left-[20%]
                    md:h-[1000px] md:w-[1000px] md:top-[-50%] md:left-[25%]
                    sm:h-[1000px] sm:w-[1000px] sm:top-[-50%] sm:left-[17%]"/>
            
            <img src={next}
                alt="next button"
                className="absolute h-[100vh] w-[100vw] object-cover bottom-[33%] left-[40%]
                    lg:left-[43%] lg:bottom-[35%]
                    md:left-[43%] md:bottom-[35%]
                    sm:bottom-[33%] sm:left-[40%]"/>
            <button onClick={handleClick}
                className="absolute w-[10vw] h-[10vh] opacity-0
                    top-[10%] right-[5%]
                     lg:top-[10%] lg:right-[2%]
                     md:top-[10%] md:right-[2%]
                     sm:top-[10%] sm:right-[5%]">
                    Invisible button
            </button>
            <TabBar className="absolute" />
        </div>
    );
}
