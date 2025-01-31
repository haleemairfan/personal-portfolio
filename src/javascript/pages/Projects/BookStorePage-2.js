import { useNavigate } from "react-router-dom";
import BookStoreLayout from "../../components/Backgrounds/BookStoreLayout";
import book from "../../../resources/book-store-background/projects-book.png";

export default function BookStorePage2() {
    const navigate = useNavigate();

    return (
        <BookStoreLayout
            speechBubbleText={[
                "With the skills I",
                "have learnt, I have",
                "started making",
                "projects is a book",
                "detailing them"
            ]}
            bookImage={book}
            bookAltText="Projects book"
            bookPosition="top-[45%] left-[14%] h-[80vh] w-[80vw]" 
            buttonPosition="top-[70%] left-[45%] h-[10vh] w-[10vw] 
                            xl:top-[68%] xl:left-[42%]
                            lg:top-[68%] lg:left-[42%] lg:h-[20vh] lg:w-[20vw]
                            md:top-[72%] md:left-[47%] md:h-[10vh] md:w-[10vw]
                            sm:top-[72%] sm:left-[47%] sm:h-[10vh] sm:w-[10vw]"
            onButtonClick={() => navigate("/projects")}
        />
    );
}
