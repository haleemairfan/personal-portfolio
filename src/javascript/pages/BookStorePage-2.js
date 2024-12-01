import { useNavigate } from "react-router-dom"

import TabBar from "../components/TabBar"
import BookStore from "../components/BookStore"
import book from "../../resources/book-store-background/projects-book.png"
import speechBubble from "../../resources/speech-bubbles/speech-bubble.png"


export default function BookStorePage2() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/projects");
    }


    return(
        <div className="relative overflow-hidden">
            <BookStore/>
            <img src={book}
                alt="book"
                className="absolute top-[220px] left-[5px]"
            />
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute left-[480px] bottom-[80px]"/>

            <p className="absolute font-custom text-center left-[1070px] top-[150px]">
                With the skills I <br/>
                have learnt, I <br/>
                have started <br/> 
                making projects <br/>
                of my own! Here <br/> 
                is a book <br/>
                detailing them
            </p>
                        
            <button onClick={handleClick}
                className="absolute top-[75%] left-[45%] h-[20vh] w-[20vw] opacity-0">
                Invisible button
            </button>
            <TabBar color="white"/>
        </div>
    );
}