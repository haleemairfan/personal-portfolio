import { useNavigate } from "react-router-dom";
import BookStoreLayout from "../../components/Backgrounds/BookStoreLayout";
import book from "../../../resources/book-store-background/book.png";

export default function BookStorePage() {
    const navigate = useNavigate();

    return (
        <BookStoreLayout
            speechBubbleText={[
                "Here’s the book I",
                "learnt my skills",
                "from! I love reading",
                "it! Click on it",
                "to read it."
            ]}
            bookImage={book}
            bookAltText="Book about skills"
            buttonPosition="top-[77%] left-[49%] h-[10vh] w-[10vw] opacity-0
                            2xl:top-[74%] 2xl:left-[37%]
                            xl:top-[70%] xl:left-[45%]
                            lg:top-[70%] lg:left-[45%] lg:h-[20vh] lg:w-[20vw]
                            md:top-[77%] md:left-[49%] md:h-[10vh] md:w-[10vw]
                            sm:top-[77%] sm:left-[49%] sm:h-[10vh] sm:w-[10vw]"
            onButtonClick={() => navigate("/technicalskills")}
        />
    );
}
