import { useNavigate } from "react-router-dom";
import OutsideBookStoreLayout from "../../components/Backgrounds/OutsideBookStoreLayout";
import next from "../../../resources/misc/next.png";

export default function Goals() {
    const navigate = useNavigate();

    return (
        <OutsideBookStoreLayout
            speechBubbleText={[
                "Here's my bookstore!",
                "Here, I learn how",
                "to create user-",
                "centered products",
                "to solve real-",
                "world problems."
            ]}
            imageSrc={next}
            imageAltText="Next button"
            imagePosition="absolute h-[100vh] w-[100vw] object-cover bottom-[33%] left-[40%]
                            lg:left-[43%] lg:bottom-[35%]
                            md:left-[43%] md:bottom-[35%]
                            sm:bottom-[33%] sm:left-[40%]"
            buttonPosition="absolute w-[10vw] h-[10vh] opacity-0 top-[10%] right-[5%]
                             lg:top-[10%] lg:right-[2%]
                             md:top-[10%] md:right-[2%]
                             sm:top-[10%] sm:right-[5%]"
            onButtonClick={() => navigate("/bookstore")}
            characterPosition="h-screen w-screen right-[30%] top-[20%] object-cover sm:landscape:top-[25%]"
        />
    );
}
