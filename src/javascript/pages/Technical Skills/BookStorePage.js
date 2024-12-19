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
            <SpeechBubble text={[
                "Here’s the book I",
                "learnt my skills",
                "from! I love reading",
                "it! Click on it",
                "to read it."]}
                className="absolute 
                    top-[-80%] h-[1000px] w-[1000px] left-[55%]
                    2xl:top-[-65%] 2xl:left-[75%]
                    xl:w-[1000px] xl:h-[1000px] xl:top-[-77%] xl:left-[55%]
                    lg:h-[1000px] lg:w-[1000px] lg:top-[-70%] lg:left-[55%]
                    md:h-[1000px] md:w-[1000px] md:top-[-70%] md:left-[60%]
                    sm:h-[1000px] sm:w-[1000px] sm:top-[-70%] sm:left-[50%]"/>
            <img src={book}
                alt="book"
                className="absolute object-cover
                    top-[49%] left-[12.5%] h-[85vh] w-[85vw]
                    2xl:top-[42%] 2xl:left-[-1%]
                    xl:top-[40%] xl:left-[6%]
                    lg:top-[41%] lg:left-[7%] lg:h-[100vh] lg:w-[100vw]
                    md:top-[49%] md:left-[12.5%] md:h-[85vh] md:w-[85vw]
                    sm:top-[49%] sm:left-[12.5%] sm:h-[85vh] sm:w-[85vw]"/>
            <button onClick={handleClick}
                className="absolute opacity-0
                    top-[77%] left-[49%] h-[10vh] w-[10vw]
                    2xl:top-[74%] 2xl:left-[37%]
                    xl:top-[70%] xl:left-[45%]
                    lg:top-[70%] lg:left-[45%] lg:h-[20vh] lg:w-[20vw]
                    md:top-[77%] md:left-[49%] md:h-[10vh] md:w-[10vw]
                    sm:top-[77%] sm:left-[49%] sm:h-[10vh] sm:w-[10vw]">
                Invisible button
            </button>
            <TabBar color="white"/>
        </div>
    );
}