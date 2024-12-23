import { useNavigate } from "react-router-dom"

import TabBar from "../../components/TabBar"
import OpenBookBackground from "../../components/Backgrounds/OpenBookBackground"
import next from "../../../resources/misc/next.png"
import campusConnectVideo from "../../../resources/projects/CampusConnectDemo.mp4"

export default function CampusConnect() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/projects-2");
    }


    return(
        <div className="relative overflow-hidden">
        <OpenBookBackground className="absolute"/>
        <h1 className="font-custom2 text-black object-contain absolute underline
                text-[3.3vw] left-[25vw] top-[15vh]
                2xl:text-[3vw] 
                xl:text-[3.3vw] xl:left-[24vw] xl:top-[16%] 
                lg:text-[3.5vw] lg:left-[22vw] lg:top-[17vh] 
                md:text-[2.3vw] md:left-[32vw] md:top-[18vh] 
                sm:text-[3.3vw] sm:left-[25vw] sm:top-[15vh]"> 
                CampusConnect 
        </h1>

        <div className="absolute inset-0">
            <video src={campusConnectVideo}
                autoPlay
                loop
                muted
                className="relative object-cover
                    left-[155px] top-[90px] w-[100px]
                    2xl:left-[28%] 2xl:top-[30%] 2xl:w-[15%]
                    xl:left-[27%] xl:top-[30%] xl:w-[15%]
                    lg:left-[24%] lg:top-[30%] lg:w-[18%]
                    md:left-[33%] md:top-[30%] md:w-[12%]
                    sm:left-[180px] sm:top-[110px] sm:w-[100px]">
                Your browser does not support the video tag
            </video>
        </div>

        <div className="absolute inset-0
                top-[20%] left-[41%]
                2xl:top-[20%] 2xl:left-[30%]
                xl:top-[20%] xl:left-[32%]
                lg:top-[20%] lg:left-[38%]
                md:top-[20%] md:left-[25%]
                sm:top-[20%] sm:left-[41%]">
            <p className="font-custom2 text-center
                text-[1.1vw] leading-[190%] w-[50vw]
                2xl:leading-[190%] 2xl:text-[1vw] 
                xl:text-[1vw] xl:leading-[190%] xl:w-auto
                lg:text-[1.4vw] lg:leading-[190%] lg:w-auto
                md:text-[0.9vw] md:leading-[190%] md:w-auto
                sm:text-[1.1vw] sm:leading-[190%] sm:w-[50vw]">
                A platform to support Singapore university <br/>
                students by connecting them with peers for academic <br/>
                and personal guidance
                <span className="font-sans">
                    .
                </span> Built with the PERN stack <br/>
                I managed the database via Supabase
                <span className="font-sans">
                    , 
                </span> created API <br/>
                endpoints with Express
                <span className="font-sans">
                    ,
                </span> and implemented real-time <br/>
                chat using WebSockets
                <span className="font-sans">
                    .
                </span> Additionally
                <span className="font-sans">
                    ,
                </span> I developed <br/>
                a memory-based collaborative filtering algorithm <br/>
                for personalized feeds and crafted responsive <br/>
                interfaces with React Native and Tailwind CSS <br/>
                <br/>
                <br/>
                <span className="text-[1.5vw]
                        2xl:text-[1.5vw] 
                        xl:text-[1.5vw]
                        lg:text-[2vw]
                        md:text-[1.3vw]                        
                        sm:text-[1.5vw]">
                    Links
                </span>
            </p>
            <p className="font-custom2 text-customFontColor underline relative 
                left-[31%] text-[1.1vw] top-[2%] z-10
                2xl:text-[1vw] 2xl:left-[42%] 2xl:top-[4%]
                xl:left-[42%] xl:text-[1vw] xl:top-[3%]
                lg:left-[37%] lg:text-[1.4vw] lg:top-[2%]
                md:left-[42%] md:text-[1vw] md:top-[2%]
                sm:left-[31%] sm:text-[1.1vw] sm:top-[2%]">
                <a href="https://drive.google.com/drive/folders/1gLBeV-Q8roZMNjuU7U6xAcg7hkUc45Tg?usp=share_link">
                    Information on the project
                </a> <br/>
                <a href="https://github.com/haleemairfan/CampusConnect">
                    Github repo
                </a> <br/>
                <a href="https://github.com/synchrownicity">
                    Collaborator: Yeo Jaye Lin
                </a> <br/>
            </p>
            <h2 className="font-custom2 absolute inset-0 italic
                top-[75%] left-[150px] text-[1vw]
                2xl:text-[1vw] 2xl:top-[75%] 2xl:left-[52%]
                xl:top-[75%] xl:left-[470px] xl:text-[1vw]
                lg:top-[75%] lg:left-[400px] lg:text-[1.2vw]
                md:top-[75%] md:left-[330px] md:text-[1vw]
                sm:top-[75%] sm:left-[170px] sm:text-[1vw]">
                Continued on the next page
                <span className="font-sans">
                    ...
                </span>
            </h2>

        </div>

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