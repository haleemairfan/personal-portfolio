import BookStore from "./BookStore";
import SpeechBubble from "../SpeechBubble";
import TabBar from "../TabBar";

export default function BookStoreLayout({ 
    speechBubbleText, 
    bookImage, 
    bookAltText, 
    bookPosition = "top-[49%] left-[12.5%] h-[85vh] w-[85vw]", // Default position
    buttonPosition, 
    onButtonClick 
}) {
    return (
        <div className="relative overflow-hidden h-screen w-screen">
            <BookStore className="absolute" />
            
            <SpeechBubble 
                text={speechBubbleText}
                className="absolute 
                    top-[-80%] h-[1000px] w-[1000px] left-[55%]
                    2xl:top-[-65%] 2xl:left-[75%]
                    xl:w-[1000px] xl:h-[1000px] xl:top-[-77%] xl:left-[55%]
                    lg:h-[1000px] lg:w-[1000px] lg:top-[-70%] lg:left-[55%]
                    md:h-[1000px] md:w-[1000px] md:top-[-70%] md:left-[60%]
                    sm:h-[1000px] sm:w-[1000px] sm:top-[-70%] sm:left-[50%]"
            />
            
            <img 
                src={bookImage}
                alt={bookAltText}
                className={`absolute object-cover ${bookPosition}`}
            />
            
            <button 
                onClick={onButtonClick}
                className={`absolute opacity-0 ${buttonPosition}`}
            >
                Invisible button
            </button>
            
            <TabBar color="white" />
        </div>
    );
}
