import { useNavigate } from "react-router-dom";

export default function TabBar({ color = "black" }) {
    const navigate = useNavigate();

    const handleClickAboutMe = () => navigate("/introduction");
    const handleClickGoals = () => navigate("/goals");
    const handleClickSkills = () => navigate("/technicalskills");
    const handleClickProjects = () => navigate("/projects");
    const handleClickContactMe = () => navigate("/contact");

    return (
        <div
            className="flex flex-row justify-end items-center 
                space-x-4
                sm:space-x-6
                md:space-x-8
                lg:space-x-15
                xl:space-x-20
                2xl:space-x-22
                absolute right-4 top-2 
                text-[10px]
                sm:text-[10px] 
                md:text-[15px] 
                lg:text-[20px]
                xl:text-[20px]
                2xl:text-[30px]"
        >
            <button onClick={handleClickAboutMe}>
                <h1 className="font-custom" style={{ color }}>
                    About Me
                </h1>
            </button>
            <button onClick={handleClickGoals}>
                <h1 className="font-custom" style={{ color }}>
                    Goals
                </h1>
            </button>
            <button onClick={handleClickSkills}>
                <h1 className="font-custom" style={{ color }}>
                    Skills
                </h1>
            </button>
            <button onClick={handleClickProjects}>
                <h1 className="font-custom" style={{ color }}>
                    Projects
                </h1>
            </button>
            <button onClick={handleClickContactMe}>
                <h1 className="font-custom" style={{ color }}>
                    Contact Me
                </h1>
            </button>
        </div>
    );
}
