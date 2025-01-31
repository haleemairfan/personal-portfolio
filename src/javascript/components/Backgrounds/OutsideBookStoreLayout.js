import OutsideBookStore from "./OutsideBookStore";
import SpeechBubble from "../SpeechBubble";
import Character from "../Character";
import TabBar from "../TabBar";

export default function OutsideBookStoreLayout({
    speechBubbleText,
    imageSrc,
    imageAltText,
    imagePosition = "absolute inset-0 w-[100vw] h-[100vh] object-cover",
    buttonPosition = "absolute top-[75%] left-[17%] h-[20vh] w-[20vw] opacity-0",
    onButtonClick,
    characterPosition = "h-screen w-screen right-[30%] top-[20%] object-cover sm:landscape:top-[25%]",
}) {
    return (
        <div className="relative overflow-hidden w-screen h-screen">
            {/* Background */}
            <OutsideBookStore className="absolute" />

            {/* Character */}
            <Character
                initialPosition={{ x: 0, y: 0 }}
                className={characterPosition}
            />

            {/* Speech Bubble */}
            <SpeechBubble
                text={speechBubbleText}
                className="absolute 
                    top-[-60%] h-[1000px] w-[1000px] left-[20%]
                    2xl:top-[-40%] 2xl:left-[40%]
                    xl:w-[1000px] xl:h-[1000px] xl:top-[-52%] xl:left-[20%]
                    lg:h-[1000px] lg:w-[1000px] lg:top-[-50%] lg:left-[20%]
                    md:h-[1000px] md:w-[1000px] md:top-[-50%] md:left-[25%]
                    sm:h-[1000px] sm:w-[1000px] sm:top-[-50%] sm:left-[17%]"
            />

            {/* Image */}
            <img
                src={imageSrc}
                alt={imageAltText}
                className={imagePosition}
            />

            {/* Button */}
            <button onClick={onButtonClick} className={buttonPosition}>
                Invisible button
            </button>

            {/* Tab Bar */}
            <TabBar className="absolute" />
        </div>
    );
}
