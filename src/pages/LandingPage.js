import { useNavigate } from "react-router-dom";

import NormalBackground from "../components/NormalBackground";
import TabBar from "../components/TabBar";
import haleema from "../resources/characters/haleema-frog.png"
import user from "../resources/characters/user.png"
import prompt from "../resources/speech-bubbles/prompt-bubble.png"


export default function LandingPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/introduction");
    }
    return (
        <div>
            <NormalBackground className="absolute"/>
            <img src={user}
                alt="user avatar"
                className="absolute right-[-100px] bottom-[-240px]"/>
            <img src={haleema}
                alt="haleema avatar"
                className="absolute right-[-450px] bottom-[-260px]"/>
            <img src={prompt}
                    alt="bubble prompt"
                    className="absolute right-[-400px] bottom-[-100px]"/>
            <button onClick={handleClick}
                className="absolute right-[300px] bottom-[275px] opacity-0">
                Invisible button
            </button>
            <TabBar className="absolute"/>
        </div>
    );
}