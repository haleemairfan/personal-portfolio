import speechBubble from "../../resources/speech-bubbles/speech-bubble.png"


export default function SpeechBubble({ text, className }) {

    return (
        <div className={`relative ${className}`}>
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute w-[100vw] h-[100vh] object-cover"/>
                <p className="absolute 
                    font-custom 
                    text-center 
                    left-[38%]
                     top-[33%] 
                     w-[25vw] 
                     h-[20vh]
                    text-[6px] 
                    sm:text-[7px] 
                    md:text-[10px]
                    lg:text-[13px] 
                    xl:text-[15px]
                    2xl:text-[18px]">
                    {
                        text.map((line) => (
                            <span>
                                {line}
                                <br />
                            </span>
                        ))
                    }
                </p>

        </div>
    );
}