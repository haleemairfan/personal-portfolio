import speechBubble from "../../resources/speech-bubbles/speech-bubble.png"


export default function SpeechBubble({ text, className }) {

    return (
        <div className={`relative ${className}`}>
            <img src={speechBubble}
                alt="speech bubble"
                className="absolute object-cover top-[-11%] h-[320px] w-[320px]
                        2xl:w-[1000px] 2xl:h-[1000px] 2xl:right-[41%] 2xl:top-[-47%]
                        xl:w-[700px] xl:h-[700px] xl:top-[-23%]
                        lg:w-[600px] lg:h-[600px] lg:top-[-20%]
                        sm:w-[400px] sm:h-[400px] sm:top-[-17%]"/>
                <p className="absolute font-custom text-center text-[6px] left-[10%]
                            2xl:text-[19px] 2xl:left-[-100px] 2xl:top-[-120px]
                            xl:text-[13px] xl:left-[220px] xl:top-[10px]
                            lg:text-[11px] lg:left-[190px] lg:top-[5px]
                            sm:text-[8px] sm:left-[120px] sm:top-[-35px]">
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