import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import Character from "../../components/Character"
import SpeechBubble from "../../components/SpeechBubble"
import NormalBackground from "../../components/Backgrounds/NormalBackground"
import TabBar from "../../components/TabBar"
import haleema from "../../../resources/characters/haleema-frog.png"
import next from "../../../resources/misc/next.png"



export default function Introduction() {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate("/goals");
    };

    const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768 && window.innerWidth < 1024); 


    useEffect(() => {
        const updateOrientation = () => {
            setIsMediumScreen(window.innerWidth > 768 && window.innerWidth < 1024); 
        };

        updateOrientation();
        window.addEventListener("resize", updateOrientation);

        return () => window.removeEventListener("resize", updateOrientation);
    }, []);

    const initialPosition = isMediumScreen
        ? { x: 50, y: -60 } 
        : {x:50, y:0}



    return (
        <div className="relative h-screen w-screen overflow-hidden ">
            <NormalBackground className="absolute"/>
            <img src={haleema}
                alt="haleema avatar"
                className="absolute bottom-[-28%] right-[-30%] w-[100vw] h-[100vh] object-cover"/>
            <Character
                initialPosition={initialPosition}
                className="h-screen w-screen top-[25%] object-cover"
            />

            <SpeechBubble 
                text={["Hi! I am Haleema.",
                    "I am currently a Y2",
                    "Computer Science",
                    "student at NUS,",
                    "aspiring to be a",
                    "full-stack developer."]}
                className="absolute 
                    top-[-60%] h-[1000px] w-[1000px] left-[55%]
                    2xl:top-[-40%] 2xl:left-[75%]
                    xl:w-[1000px] xl:h-[1000px] xl:top-[-52%] xl:left-[55%]
                    lg:h-[1000px] lg:w-[1000px] lg:top-[-50%] lg:left-[60%]
                    md:h-[1000px] md:w-[1000px] md:top-[-50%] md:left-[60%]
                    sm:h-[1000px] sm:w-[1000px] sm:top-[-50%] sm:left-[50%]"/>
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
            <TabBar className="absolute"/>

        </div>
    );
}