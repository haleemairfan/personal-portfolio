import { useNavigate } from "react-router-dom"

import TabBar from "../components/TabBar"
import OpenBookBackground from "../components/OpenBookBackground"
import line from "../../resources/book-store-background/line.png"
import cLanguage from "../../resources/logos/C.png"
import git from "../../resources/logos/git.png"
import html from "../../resources/logos/html.png"
import java from "../../resources/logos/java.png"
import monogoDB from "../../resources/logos/mongoDB.png"
import nodeJS from "../../resources/logos/nodeJS.png"
import postgreSQL from "../../resources/logos/postgreSQL.png"
import python from "../../resources/logos/python.png"
import react from "../../resources/logos/react.png"
import tailwindCSS from "../../resources/logos/tailwindCSS.png"
import next from "../../resources/misc/next.png"

export default function TechnicalSkills() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/bookstore-2");
    }


    return(
        <div className="relative overflow-hidden">
            <OpenBookBackground className="absolute"/>
            <div className="absolute inset-0 top-[-275px] left-[-200px] ">
                <h1 className="font-custom2  
                    text-black
                    object-contain
                    relative
                    top-[400px]
                    left-[550px]
                    text-[50px]"> 
                    Technical Skills 
                </h1>
                <img src={line}
                    alt="line"
                    className="object-contain relative right-[70px] bottom-[50px]"
                />
            </div>
            <div className="absolute flex flex-col left-[350px] top-[225px]">
                <h1 className="font-custom2 text-black text-[40px] mb-6">
                    Frontend
                </h1>
                <div className="flex flex-row space-x-[-670px] relative bottom-[375px] right-[350px]">
                    <img
                        src={react}
                        alt="React logo"
                        className="h-[800px] w-[800px] object-cover"
                    />
                    <img
                        src={html}
                        alt="HTML logo"
                        className="h-[800px] w-[800px] object-cover"
                    />
                    <img
                        src={tailwindCSS}
                        alt="Tailwind CSS logo"
                        className="h-[800px] w-[800px] object-cover"
                    />
                </div>
                
            </div>
            <div className="absolute flex flex-col left-[350px] top-[450px]">
                <h1 className="font-custom2 text-black text-[40px] mb-6">
                    Backend
                </h1>
                <div className="flex flex-row space-x-[-670px] relative bottom-[375px] right-[350px]">
                    <img
                        src={nodeJS}
                        alt="Node.js logo"
                        className="h-[800px] w-[800px] object-cover"
                    />
                    <img
                        src={postgreSQL}
                        alt="postgreSQL logo"
                        className="h-[800px] w-[800px] object-cover"
                    />
                    <img
                        src={monogoDB}
                        alt="mongoDB logo"
                        className="h-[800px] w-[800px] object-cover"
                    />
                </div>
            </div>
            <div className="absolute flex flex-col right-[-370px] top-[140px]">
                <h1 className="font-custom2 text-black text-[40px] mb-6">
                    Others
                </h1>
                <div className="flex flex-row space-x-[-670px] relative bottom-[375px] right-[350px]">
                    <img
                        src={cLanguage}
                        alt="C language logo"
                        className="h-[800px] w-[800px] object-cover"
                    />
                    <img
                        src={python}
                        alt="python logo"
                        className="h-[800px] w-[800px] object-cover"
                    />
                    <img
                        src={java}
                        alt="java logo"
                        className="h-[800px] w-[800px] object-cover"
                    />
                </div>
            </div>

            <img src={git}
                alt="git logo"
                className="absolute inset-0 left-[90px]"
            />    


            <img src={next}
                alt="next button"
                className="absolute top-[-275px] right-[-600px]"/>
            <button onClick={handleClick}
                className="absolute right-[75px] top-[115px] opacity-0">
                Invisible button
            </button>

            <TabBar color="white"/>
        </div>
    );
}