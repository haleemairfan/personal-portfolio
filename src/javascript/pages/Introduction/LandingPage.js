import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/Backgrounds/PageLayout";
import FullScreenPrompt from "../../components/FullScreenPrompt";
import prompt from "../../../resources/speech-bubbles/prompt-bubble.png";

export default function LandingPage() {
    const [showFullScreenPrompt, setShowFullScreenPrompt] = useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/introduction");
    };

    return (
        <PageLayout
            overlay={
                <>
                    <img
                        src={prompt}
                        alt="Bubble prompt"
                        className="absolute left-[27%] top-[10%] w-[100vw] h-[100vh] object-cover"
                    />
                    <button
                        onClick={handleClick}
                        className="absolute right-[18%] bottom-[32%] w-[10vw] h-[10vh] opacity-0"
                    >
                        Invisible button
                    </button>
                    {showFullScreenPrompt && (
                        <FullScreenPrompt onClose={() => setShowFullScreenPrompt(false)} />
                    )}
                </>
            }
        />
    );
}
