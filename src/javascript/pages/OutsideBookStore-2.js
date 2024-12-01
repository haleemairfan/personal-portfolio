import { useNavigate } from "react-router-dom";

import OutsideBookStore from "../components/OutsideBookStore"
import Character from "../components/Character";
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
            <Character initialPosition={{x : -280, y : 0}}/>
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute inset-0 left-[-5%] top-[10%] w-[100vw] h-[100vh] object-cover"/>

        <p className="absolute 
                font-custom 
                text-center 
                left-[35%] 
                top-[46%] 
                leading-snug 
                text-[6px]  
                sm:text-[7px]  
                md:text-[10px] 
                lg:text-[13px]  
                xl:text-[15px] 
                2xl:text-[18px] ">

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
                    w-[100vw] 
                    h-[100vh]
                    left-[-22%]
                    top-[32%]
                    object-cover"
            />

            <button onClick={handleClick}
                className="absolute top-[75%] left-[17%] h-[20vh] w-[20vw] opacity-0">
                Invisible button
            </button>


            <TabBar className="absolute"/>
        </div>
    );

}