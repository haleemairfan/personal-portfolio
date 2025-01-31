import { useNavigate } from "react-router-dom";
import OutsideBookStoreLayout from "../../components/Backgrounds/OutsideBookStoreLayout";
import treasure from "../../../resources/misc/treasure.png";

export default function OutsideBookStore2() {
    const navigate = useNavigate();

    return (
        <OutsideBookStoreLayout
            speechBubbleText={[
                "Whew that was a",
                "whirlwind! Let's keep",
                "in touch. Here's",
                "my contact. Hope",
                "to hear from",
                "you :)"
            ]}
            imageSrc={treasure}
            imageAltText="Treasure chest"
            imagePosition="absolute inset-0 w-[100vw] h-[100vh] left-[-22%] object-cover top-[30%] xl:top-[32%] sm:top-[35%]"
            buttonPosition="absolute top-[75%] left-[17%] h-[20vh] w-[20vw] opacity-0"
            onButtonClick={() => navigate("/contact")}
            characterPosition="h-screen w-screen right-[35%] top-[20%] object-cover sm:landscape:top-[25%]"
        />
    );
}
