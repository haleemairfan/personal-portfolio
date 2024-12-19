import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Character from "../../components/Character";
import NormalBackground from "../../components/Backgrounds/NormalBackground";
import TabBar from "../../components/TabBar";
import haleema from "../../../resources/characters/haleema-frog.png";
import prompt from "../../../resources/speech-bubbles/prompt-bubble.png";

export default function LandingPage() {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate("/introduction");
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
        <div className="relative overflow-hidden w-screen h-screen">
            <NormalBackground />
            <img
                src={haleema}
                alt="haleema avatar"
                className="absolute bottom-[-28%] right-[-30%] w-[100vw] h-[100vh] object-cover"
            />
            <Character
                initialPosition={initialPosition}
                className="h-screen w-screen top-[25%] object-cover"
            />
            <img
                src={prompt}
                alt="bubble prompt"
                className="absolute left-[27%] top-[10%] w-[100vw] h-[100vh] object-cover"
            />
            <button
                onClick={handleClick}
                className="absolute right-[18%] bottom-[32%] w-[10vw] h-[10vh] opacity-0"
            >
                Invisible button
            </button>
            <TabBar className="absolute" />
        </div>
    );
}
