import { useNavigate } from "react-router-dom"

import TabBar from "../../components/TabBar"
import LogoRow from "../../components/LogoRow"
import OpenBookBackground from "../../components/Backgrounds/OpenBookBackground"
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
            <h1 className="font-custom2 text-black object-contain absolute underline
                text-[3.3vw] left-[25vw] top-[17vh]
                2xl:text-[3vw] 
                xl:text-[3.3vw] xl:left-[24vw] xl:top-[14%] 
                lg:text-[3.3vw] lg:left-[24vw] lg:top-[15vh] 
                md:text-[2.7vw] md:left-[29vw] md:top-[18vh] 
                sm:text-[3.3vw] sm:left-[25vw] sm:top-[15vh]"> 
                Technical Skills 
            </h1>


            <div className="absolute flex flex-col 
                left-[25%] top-[28%]
                2xl:left-[25%] 2xl:top-[25%] 
                xl:left-[25.5%] xl:top-[25%] 
                lg:left-[25%] lg:top-[25%] 
                md:left-[29%] md:top-[28%] 
                sm:left-[25%] sm:top-[25%] ">
                <h1 className="font-custom2 text-black
                    text-[2.7vw]
                    2xl:text-[3vw] 
                    lg:text-[2.5vw]
                    md:text-[2vw]
                    sm:text-[2.7vw]">
                    Frontend
                </h1>
                <LogoRow logoOne={react} logoTwo={html} logoThree={tailwindCSS}
                        className="top-[-340%] right-[40%] space-x-4
                                2xl:right-[55%] 2xl:top-[-250%] 2xl:space-x-10
                                xl:top-[-350%] xl:right-[40%] 
                                lg:top-[-400%] lg:right-[40%] 
                                sm:top-[-340%] sm:right-[40%] sm:space-x-4"/>              
            </div>
            <div className="absolute flex flex-col
                left-[25%] top-[52%]
                2xl:left-[24%] 2xl:top-[52%]
                xl:left-[25%] xl:top-[50%] 
                lg:left-[24%] lg:top-[50%] 
                md:left-[29%] md:top-[50%] 
                sm:left-[25%] sm:top-[50%]">
                <h1 className="font-custom2 text-black 
                    text-[2.7vw]
                    2xl:text-[3vw] 
                    lg:text-[2.5vw]
                    md:text-[2vw]
                    sm:text-[2.7vw]">
                    Backend
                </h1>
                <LogoRow logoOne={nodeJS} logoTwo={postgreSQL} logoThree={monogoDB}
                        className="top-[-300%] right-[40%] space-x-[40%]
                            2xl:right-[45%] 2xl:top-[-220%] 2xl:space-x-8
                            xl:top-[-330%] xl:right-[40%] xl:space-x-6
                            lg:top-[-330%] lg:right-[20%] lg:space-x-[-10%]
                            sm:top-[-300%] sm:right-[40%] sm:space-x-[40%]"/>              
                            
            </div>
            <div className="absolute flex flex-col 
                left-[53%] top-[20%]
                2xl:left-[54%] 2xl:top-[17%]
                xl:left-[53%] xl:top-[17%]
                lg:left-[53%] lg:top-[17%]
                md:left-[53%] md:top-[20%]
                sm:left-[53%] sm:top-[20%]">
                <h1 className="font-custom2 text-black
                    text-[2.7vw]
                    2xl:text-[3vw] 
                    lg:text-[2.5vw]
                    md:text-[2vw]
                    sm:text-[2.7vw]">
                    Others
                </h1>
                <LogoRow logoOne={cLanguage} logoTwo={python} logoThree={java}
                        className="top-[-340%] right-[20%] space-x-4
                            2xl:right-[45%] 2xl:top-[-250%] 2xl:space-x-[70%]
                            xl:top-[-350%] xl:right-[20%] 
                            lg:top-[-400%] lg:right-[90%] 
                            md:top-[-320%] md:right-[30%] 
                            sm:top-[-340%] sm:right-[20%] sm:space-x-5"/>
            </div>

            <img src={git}
                alt="git logo"
                className="absolute inset-0 object-cover
                    w-[80%] h-[80%] left-[16%] top-[12%]
                    2xl:w-[70%] 2xl:h-[70%] 2xl:left-[21.5%] 2xl:top-[10%]
                    xl:w-[66%] xl:h-[70%] xl:left-[23%] xl:top-[6%]
                    lg:w-[66%] lg:h-[70%] lg:left-[23%] lg:top-[10%]
                    md:w-[60%] md:h-[70%] md:left-[25%] md:top-[12%]
                    sm:w-[80%] sm:h-[80%] sm:left-[16%] sm:top-[12%]"
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