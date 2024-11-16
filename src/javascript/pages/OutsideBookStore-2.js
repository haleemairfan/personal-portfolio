import { useNavigate } from "react-router-dom";

import OutsideBookStore from "../components/OutsideBookStore"
import TabBar from "../components/TabBar"
import treasure from "../../resources/misc/treasure.png"
import speechBubble from "../../resources/speech-bubbles/speech-bubble.png"


export default function OutsideBookStore2() {

    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/contact");
    }

    return(
        <div className="relative h-screen overflow-hidden">
            <OutsideBookStore className="absolute inset-0"/>
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute inset-0 scale-x-[-1] left-[-100px] top-[100px]"/>

            <p className="absolute font-custom text-center left-[475px] bottom-[260px]">
                Whew that was a <br/>
                whirlwind! Let's<br/>
                keep in touch. <br/> 
                Here's my contact! <br/>
                Hope to hear from <br/> 
                you :)
            </p>
                
            <img src={treasure}
                alt="treasure chest"
                className="absolute 
                    inset-0 
                    w-[700px] 
                    h-[700px]
                    object-cover
                    top-[320px]
                    left-[100px]"
            />

            <button onClick={handleClick}
                className="absolute right-[925px] top-[650px] opacity-0">
                Invisible button
            </button>


            <TabBar className="absolute"/>
        </div>
    );

}