import { useNavigate } from "react-router-dom"

import TabBar from "../components/TabBar"
import BookStore from "../components/BookStore"
import book from "../../resources/book-store-background/book.png"
import speechBubble from "../../resources/speech-bubbles/speech-bubble.png"


export default function BookStorePage() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/technicalskills");
    }


    return(
        <div className="relative overflow-hidden">
            <BookStore/>
            <img src={book}
                alt="book"
                className="absolute top-[40%] left-[1%] h-[100vh] w-[100vw] object-cover"
            />
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute left-[35%] right-[35%] bottom-[12%] h-[100vh] [100vw] object-cover"/>

            <p
                className="
                    absolute 
                    font-custom 
                    text-center 
                    right-[9%] 
                    top-[23%] 
                    leading-snug 
                    text-[6px]  
                    sm:text-[7px]  
                    md:text-[10px] 
                    lg:text-[13px]  
                    xl:text-[15px] 
                    2xl:text-[18px]  
                "
            >
                    Here’s the book <br/>
                    I learnt my <br/>
                    skills from! I <br/> 
                    love reading <br/>
                    it! Click on it <br/> 
                    to read it
            </p>
                            
            <button onClick={handleClick}
                className="absolute top-[75%] left-[45%] h-[20vh] w-[20vw] opacity-0">
                Invisible button
            </button>
            <TabBar color="white"/>
        </div>
    );
}