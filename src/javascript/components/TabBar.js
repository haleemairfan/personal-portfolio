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
            className="flex flex-row justify-end items-center absolute right-4 top-2
                text-[8px] space-x-4
                sm:space-x-6 sm:text-[10px] 
                md:space-x-8 md:text-[13px] 
                lg:space-x-15 lg:text-[20px]
                xl:space-x-20 xl:text-[20px]
                2xl:space-x-22 2xl:text-[30px]"
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
