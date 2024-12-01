import { useNavigate } from "react-router-dom"

import Character from "../components/Character"
import NormalBackground from "../components/NormalBackground"
import TabBar from "../components/TabBar"
import haleema from "../../resources/characters/haleema-frog.png"
import next from "../../resources/misc/next.png"
import speechBubble from "../../resources/speech-bubbles/speech-bubble.png"



export default function Introduction() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/goals");
    }

    
    return (
        <div className="relative h-screen overflow-hidden ">
            <NormalBackground className="absolute"/>
            <Character initialPosition={{x : 50, y : 0}} />
            <img src={haleema}
                alt="haleema avatar"
                className="absolute right-[-30%] bottom-[-30%] w-[100vw] h-[100vh] object-cover"/>
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute scale-x-[-1] h-[100vh] w-[100vw] left-[24.5%] top-[11%]"/>
        <p
            className="
                absolute 
                font-custom 
                text-center 
                left-[64.5%] 
                top-[46%] 
                leading-snug 
                text-[6px]  
                sm:text-[7px]  
                md:text-[10px] 
                lg:text-[13px]  
                xl:text-[15px] 
                2xl:text-[18px]  
            "
        >

                Hi! I am Haleema. <br/>
                I am currently a Y2 <br/>
                Computer Science <br/> 
                student at NUS, <br/>
                aspiring to be a <br/> 
                full-stack developer
            </p>
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