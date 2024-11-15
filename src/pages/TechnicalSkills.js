import { useNavigate } from "react-router-dom"

import TabBar from "../components/TabBar"
import BookStore from "../components/BookStore"
import TechnicalSkillsBook from "../resources/book-store-background/book-of-technical-skills.png"

export default function TechnicalSkills() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/bookstore");
    }


    return(
        <div className="bg-customBackground h-screen relative overflow-hidden">
            <div className="bg-black opacity-20">
                <BookStore/>
            </div>
            <img src={TechnicalSkillsBook}
                alt="technical skills book"
                className="absolute"/>
            <TabBar color="white"/>
        </div>
    );
}