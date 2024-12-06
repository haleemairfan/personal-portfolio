import { useNavigate } from "react-router-dom"

import TabBar from "../../components/TabBar"
import SpeechBubble from "../../components/SpeechBubble"
import BookStore from "../../components/Backgrounds/BookStore"
import book from "../../../resources/book-store-background/projects-book.png"


export default function BookStorePage2() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/projects");
    }


    return(
        <div className="relative overflow-hidden h-screen w-screen">
            <BookStore/>
            <img src={book}
                alt="book"
                className="absolute top-[35%] h-[100vh] w-[100vw] object-cover"
            />
            <SpeechBubble text={[
                "With the skills I",
                "have learnt, I",
                "have started",
                "making projects",
                "is a book",
                "detailing them"]}
                className="absolute w-screen h-screen top-[-115%] right-[-32%]"/>

                        
            <button onClick={handleClick}
                className="absolute top-[80%] left-[45%] h-[10vh] w-[10vw] opacity-0">
                Invisible button
            </button>
            <TabBar color="white"/>
        </div>
    );
}