import { useNavigate } from "react-router-dom"

import TabBar from "../components/TabBar"
import user from "../resources/characters/user.png"
import haleema from "../resources/characters/haleema-frog.png"
import next from "../resources/misc/next.png"
import shop from "../resources/misc/shop.png"
import grass from "../resources/normal-background/grass.png"
import sky from "../resources/normal-background/sky.png"
import speechBubble from "../resources/speech-bubbles/speech-bubble.png"

export default function Goals() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/bookstore");
    }

    return(
        <div className="relative h-screen overflow-hidden">
            <img src={sky}
                alt="sky"
                className="absolute"/>
            <img src={shop}
                alt="bookshop"
                className="absolute right-[-500px]"/>
            <img src={grass}
                alt="grass"
                className="absolute"/>
            <img src={user}
                alt="user avatar"
                className="absolute left-[-450px] bottom-[-240px]"/>
            <img src={haleema}
                alt="haleema avatar"
                className="absolute left-[-100px] bottom-[-260px]"/>
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute scale-x-[-1] left-[-200px] bottom-[-100px]"/>
            <p className="absolute font-custom text-center left-[360px] bottom-[290px]">
                Here's my bookstore! <br/>
                Over here, I learn <br/>
                how to create user- <br/> 
                centered products <br/>
                to solve real- <br/> 
                world problems
            </p>
                

            <TabBar className="absolute"/>
            <img src={next}
                alt="next button"
                className="absolute top-[-275px] right-[-600px]"/>
            <button onClick={handleClick}
                className="absolute right-[75px] top-[115px] opacity-0">
                Invisible button
            </button>



        </div>
    );

}