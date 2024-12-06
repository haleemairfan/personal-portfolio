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


    useEffect(() => {
        const updateOrientation = () => {
            setIsSmallScreen(window.innerWidth < 768); 
        };

        updateOrientation();
        window.addEventListener("resize", updateOrientation);

        return () => window.removeEventListener("resize", updateOrientation);
    }, []);

    const initialPosition = isSmallScreen
        ? { x: -100, y: 0 } 
        : {x:-200, y:0}

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
                className="absolute bottom-[90%] right-[5%] w-screen h-screen"/>
            
            <img src={next}
                alt="next button"
                className="absolute left-[43%] bottom-[35%] h-[100vh] w-[100vw] object-cover"/>
            <button onClick={handleClick}
                className="absolute top-[10%] right-[2%] w-[10vw] h-[10vh] opacity-0">
                    Invisible button
            </button>
            <TabBar className="absolute" />
        </div>
    );
}
