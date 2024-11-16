import { useNavigate } from "react-router-dom"

import OutsideBookStore from "../components/OutsideBookStore"
import TabBar from "../components/TabBar"
import next from "../../resources/misc/next.png"
import speechBubble from "../../resources/speech-bubbles/speech-bubble.png"

export default function Goals() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/bookstore");
    }

    return(
        <div className="relative h-screen overflow-hidden">
            <OutsideBookStore className="absolute inset-0"/>
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute inset-0 scale-x-[-1] left-[-100px] top-[100px]"/>

            <p className="absolute font-custom text-center left-[460px] bottom-[260px]">
                Here's my bookstore! <br/>
                Over here, I learn <br/>
                how to create user- <br/> 
                centered products <br/>
                to solve real- <br/> 
                world problems
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