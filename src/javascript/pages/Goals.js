import { useNavigate } from "react-router-dom"

import OutsideBookStore from "../components/OutsideBookStore"
import Character from "../components/Character"
import TabBar from "../components/TabBar"
import next from "../../resources/misc/next.png"
import speechBubble from "../../resources/speech-bubbles/speech-bubble.png"

export default function Goals() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/bookstore");
    }

    return(
        <div className="relative overflow-hidden">

            <OutsideBookStore className="absolute inset-0"/>
            <Character initialPosition={{x : -200, y : 0}} />
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute h-[100vh] w-[100vw] right-[5%] top-[11%]"/>

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
                Here's my bookstore! <br/>
                Over here, I learn <br/>
                how to create user- <br/> 
                centered products <br/>
                to solve real- <br/> 
                world problems
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