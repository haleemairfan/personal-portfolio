import { useNavigate } from "react-router-dom"

import NormalBackground from "../components/NormalBackground"
import TabBar from "../components/TabBar"
import haleema from "../../resources/characters/haleema-frog.png"
import user from "../../resources/characters/user.png"
import next from "../../resources/misc/next.png"
import speechBubble from "../../resources/speech-bubbles/speech-bubble.png"



export default function Introduction() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/goals");
    }
    return (
        <div className="relative h-screen overflow-hidden">
            <NormalBackground className="absolute"/>
            <img src={user}
                alt="user avatar"
                className="absolute right-[-100px] bottom-[-240px]"/>
            <img src={haleema}
                alt="haleema avatar"
                className="absolute right-[-450px] bottom-[-260px]"/>
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute scale-x-[-1] right-[-350px] bottom-[-100px]"/>
            <p className="absolute font-custom text-center right-[210px] bottom-[300px]">
                Hi! I am Haleema. <br/>
                I am currently a Y2 <br/>
                Computer Science <br/> 
                student at NUS, <br/>
                aspiring to be a <br/> 
                full-stack developer
            </p>
            <img src={next}
                alt="next button"
                className="absolute top-[-275px] right-[-600px]"/>
            <button onClick={handleClick}
                className="absolute right-[75px] top-[115px] opacity-0">
                Invisible button
            </button>
            <TabBar className="absolute"/>

        </div>
    );
}