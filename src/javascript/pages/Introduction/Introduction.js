import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/Backgrounds/PageLayout";
import SpeechBubble from "../../components/SpeechBubble";
import next from "../../../resources/misc/next.png";

export default function Introduction() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/goals");
    };

    return (
        <PageLayout
            overlay={
                <>
                    <SpeechBubble 
                        text={[
                            "Hi! I am Haleema.",
                            "I am currently a Y2",
                            "Computer Science",
                            "student at NUS,",
                            "aspiring to be a",
                            "full-stack developer."
                        ]}
                        className="absolute top-[-60%] h-[1000px] w-[1000px] left-[55%]"
                    />
                    <img src={next}
                        alt="next button"
                        className="absolute h-[100vh] w-[100vw] object-cover bottom-[33%] left-[40%]
                            lg:left-[43%] lg:bottom-[35%]
                            md:left-[43%] md:bottom-[35%]
                            sm:bottom-[33%] sm:left-[40%]"/>
                    <button onClick={handleClick}
                        className="absolute w-[10vw] h-[10vh] opacity-0
                            top-[10%] right-[5%]
                            lg:top-[10%] lg:right-[2%]
                            md:top-[10%] md:right-[2%]
                            sm:top-[10%] sm:right-[5%]">
                            Invisible button
                    </button>
                </>
            }
        />
    );
}
