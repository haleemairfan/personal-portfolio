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

            <SpeechBubble text={[
                "With the skills I",
                "have learnt, I have",
                "started making",
                "projects is a book",
                "detailing them"]}
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
                    top-[42%] left-[11.5%] h-[85vh] w-[85vw]
                    2xl:top-[40%] 2xl:left-[2.5%]
                    xl:top-[40%] xl:left-[9%]
                    lg:top-[41%] lg:left-[10%] lg:h-[90vh] lg:w-[90vw]
                    md:top-[50%] md:left-[18%] md:h-[70vh] md:w-[70vw]
                    sm:top-[42%] sm:left-[11.5%] sm:h-[85vh] sm:w-[85vw]"/>
                        
            <button onClick={handleClick}
                className="absolute 
                top-[77%] left-[49%] h-[10vh] w-[10vw] opacity-0
                xl:top-[75%] xl:left-[45%]
                lg:top-[75%] lg:left-[45%] lg:h-[20vh] lg:w-[20vw]
                md:top-[77%] md:left-[49%] md:h-[10vh] md:w-[10vw]
                sm:top-[77%] sm:left-[49%] sm:h-[10vh] sm:w-[10vw]">
            Invisible button
            </button>
            <TabBar color="white"/>
        </div>
    );
}