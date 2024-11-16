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
                className="absolute top-[280px] left-[20px]"
            />
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute left-[480px] bottom-[80px]"/>

            <p className="absolute font-custom text-center left-[1070px] top-[170px]">
                Here’s the book <br/>
                I learnt my <br/>
                skills from! I <br/> 
                love reading <br/>
                it! Click on it <br/> 
                to read it
            </p>
                        
            <button onClick={handleClick}
                className="absolute top-[580px] left-[660px] h-[100px] w-[100px] opacity-0">
                Invisible button
            </button>
            <TabBar color="white"/>
        </div>
    );
}