import speechBubble from "../../resources/speech-bubbles/speech-bubble.png"


export default function SpeechBubble({ text, className }) {

    return (
        <div className={`relative ${className}`}>
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute w-[100vw] h-[100vh] object-cover
"/>
                <p className="absolute font-custom text-center left-[30%] top-[33%] w-[40vw] h-[40vh] text-[6px] 
                    sm:landscape:top-[35%] sm:text-[7px] 
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