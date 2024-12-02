import { useNavigate } from "react-router-dom"

import OutsideBookStore from "../../components/Backgrounds/OutsideBookStore"
import SpeechBubble from "../../components/SpeechBubble"
import Character from "../../components/Character"
import TabBar from "../../components/TabBar"
import next from "../../../resources/misc/next.png"

export default function Goals() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/bookstore");
    }

    return(
        <div className="relative overflow-hidden w-screen h-screen">

            <OutsideBookStore className="absolute"/>
            <Character initialPosition={{x : -200, y : 0}} className="absolute h-screen w-screen top-[22%] bottom-[-100%]"/>
             <SpeechBubble 
                text={["Here's my bookstore!",
                    "Over here, I learn",
                    "how to create user-",
                    "centered products",
                    "to solve real-",
                    "world problems."]}
                    className="absolute bottom-[90%] right-[5%] w-screen h-screen"/>

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