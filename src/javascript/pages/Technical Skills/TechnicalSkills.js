import { useNavigate } from "react-router-dom"

import TabBar from "../../components/TabBar"
import LogoRow from "../../components/LogoRow"
import OpenBookBackground from "../../components/Backgrounds/OpenBookBackground"
import line from "../../../resources/book-store-background/line.png"
import cLanguage from "../../../resources/logos/C.png"
import git from "../../../resources/logos/git.png"
import html from "../../../resources/logos/html.png"
import java from "../../../resources/logos/java.png"
import monogoDB from "../../../resources/logos/mongoDB.png"
import nodeJS from "../../../resources/logos/nodeJS.png"
import postgreSQL from "../../../resources/logos/postgreSQL.png"
import python from "../../../resources/logos/python.png"
import react from "../../../resources/logos/react.png"
import tailwindCSS from "../../../resources/logos/tailwindCSS.png"
import next from "../../../resources/misc/next.png"

export default function TechnicalSkills() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/bookstore-2");
    }


    return(
        <div className="relative overflow-hidden">
            <OpenBookBackground className="absolute"/>
            <div className="absolute inset-0 top-[-275px] left-[-200px]">
                <h1 className="font-custom2 text-black object-contain relative 
                    sm:text-[22px] sm:left-[350px] sm:top-[330px]
                    lg:text-[37px] lg:left-[450px] lg:top-[360px]
                    xl:text-[50px] xl:left-[550px] xl:top-[400px]
                    md:left-[380px] md:text-[27px] md:top-[340px]"> 
                    Technical Skills 
                </h1>
                <img src={line}
                    alt="line"
                    className="object-contain relative
                        sm:bottom-[-100px] sm:left-[20px]
                        md:left-[10px] md:bottom-[-75px]
                        lg:left-[-20px] lg:bottom-[-25px]
                        xl:left-[-60px] xl:bottom-[50px]"/>
            </div>


            <div className="absolute flex flex-col
                xl:left-[350px] xl:top-[225px]
                lg:left-[240px] lg:top-[150px]
                md:left-[190px] md:top-[120px]
                sm:left-[150px] sm:top-[100px]">
                <h1 className="font-custom2 text-black text-[40px] mb-6
                    xl:text-[40px] xl:mb-6
                    lg:text-[27px]
                    sm:text-[20px]">
                    Frontend
                </h1>
                <LogoRow logoOne={react} logoTwo={html} logoThree={tailwindCSS}/>              
            </div>
            <div className="absolute flex flex-col 
                xl:left-[350px] xl:top-[450px]
                lg:left-[240px] lg:top-[300px]
                md:left-[190px] md:top-[240px]
                sm:left-[150px] sm:top-[190px]">
                <h1 className="font-custom2 text-black text-[40px] mb-6
                    xl:text-[40px]
                    lg:text-[27px]
                    sm:text-[20px]">
                    Backend
                </h1>
                <LogoRow logoOne={nodeJS} logoTwo={postgreSQL} logoThree={monogoDB}/>              
            </div>
            <div className="absolute flex flex-col 
                xl:right-[-370px] xl:top-[140px]
                md:top-[70px] md:right-[-170px]
                lg:top-[85px] lg:right-[-220px]
                sm:right-[40px] sm:top-[70px]">
                <h1 className="font-custom2 text-black text-[40px] mb-6
                    xl:text-[40px]
                    lg:text-[27px]
                    sm:text-[20px]">
                    Others
                </h1>
                <LogoRow logoOne={cLanguage} logoTwo={python} logoThree={java}
                    className="xl:bottom-[375px] xl:right-[350px] xl:space-x-[-670px]
                        md:space-x-[-330px] md:right-[175px] md:bottom-[190px]
                        lg:space-x-[-400px] lg:right-[220px] lg:bottom-[240px]
                        sm:space-x-[-320px] sm:bottom-[150px] sm:right-[-10px]"/>              
            </div>

            <img src={git}
                alt="git logo"
                className="absolute inset-0 object-cover
                    xl:w-[800px] xl:h-[800px] xl:left-[400px]
                    md:left-[225px] md:top-[10px] md:w-[400px] md:h-[400px]
                    lg:h-[500px] lg:w-[500px] lg:left-[320px]
                    sm:w-[300px] sm:h-[300px] sm:left-[215px] sm:top-[40px] "
            />    


            <img src={next}
                alt="next button"
                className="absolute left-[43%] bottom-[35%] h-[100vh] w-[100vw] object-cover"/>
            <button onClick={handleClick}
                className="absolute top-[10%] right-[2%] w-[10vw] h-[10vh] opacity-0">
                    Invisible button
            </button>
            <TabBar color="white"/>
        </div>
    );
}