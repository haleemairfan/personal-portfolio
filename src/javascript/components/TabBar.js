import { useNavigate } from "react-router-dom";
export default function TabBar({ color = "black" }) {

    const navigate = useNavigate();
    const handleClickAboutMe = () => {
        return navigate("/introduction");
    }
    const handleClickGoals = () => {
        return navigate("/goals");
    }

    const handleClickSkills = () => {
        return navigate("/technicalskills");
    }

    const handleClickProjects = () => {
        return navigate("/projects");
    }

    const handleClickContactMe = () => {
        return navigate("/contact");
    }






    return (
        <div className="flex flex-row space-x-[70px] absolute right-10 top-3">
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
