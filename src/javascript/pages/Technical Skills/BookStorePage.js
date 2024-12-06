import { useNavigate } from "react-router-dom"

import TabBar from "../../components/TabBar"
import SpeechBubble from "../../components/SpeechBubble"
import BookStore from "../../components/Backgrounds/BookStore"
import book from "../../../resources/book-store-background/book.png"


export default function BookStorePage() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/technicalskills");
    }


    return(
        <div className="relative overflow-hidden w-screen h-screen">
            <BookStore className="absolute"/>
            <img src={book}
                alt="book"
                className="absolute top-[40%] left-[1%] h-[100vh] w-[100vw] object-cover"/>
            <SpeechBubble text={[
                "Here’s the book",
                "I learnt my",
                "skills from! I",
                "love reading",
                "it! Click on it",
                "to read it."]}
                className="absolute w-screen h-screen top-[-115%] right-[-32%]"/>
            <button onClick={handleClick}
                className="absolute top-[75%] left-[45%] h-[20vh] w-[20vw] opacity-0">
                Invisible button
            </button>
            <TabBar color="white"/>
        </div>
    );
}