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
        return navigate("/goals");
    }

    
    return (
        <div className="relative h-screen w-screen overflow-hidden ">
            <NormalBackground className="absolute"/>
            <Character initialPosition={{x : 50, y : 0}} className="h-screen w-screen right-[-50%] top-[20%]" />
            <img src={haleema}
                alt="haleema avatar"
                className="absolute bottom-[-28%] right-[-30%] w-[100vw] h-[100vh] object-cover"/>
            <SpeechBubble 
                text={["Hi! I am Haleema.",
                    "I am currently a Y2",
                    "Computer Science",
                    "student at NUS,",
                    "aspiring to be a",
                    "full-stack developer."]}
                className="absolute left-[30%] top-[10%] w-screen h-screen"/>
            <img src={next}
                alt="next button"
                className="absolute left-[43%] bottom-[35%] h-[100vh] w-[100vw] object-cover"/>
            <button onClick={handleClick}
                className="absolute top-[10%] right-[2%] w-[10vw] h-[10vh] opacity-0">
                Invisible button
            </button>
            <TabBar className="absolute"/>

        </div>
    );
}