import { useNavigate } from "react-router-dom"

import TabBar from "../../components/TabBar"
import OpenBookBackground from "../../components/Backgrounds/OpenBookBackground"
import line from "../../../resources/book-store-background/line.png"
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
        <div className="absolute inset-0 top-[-275px] left-[-200px]">
            <h1 className="font-custom2 text-black object-contain relative
                sm:text-[22px] sm:left-[350px] sm:top-[330px] 
                lg:text-[35px] lg:left-[450px] lg:top-[360px]
                xl:text-[50px] xl:left-[550px] xl:top-[400px]
                md:left-[400px] md:top-[340px] md:text-[25px]"> 
                    CampusConnect 
                </h1>
                <img src={line}
                    alt="line"
                    className="object-contain relative
                    sm:bottom-[-190px] sm:left-[185px] sm:w-[500px]
                    md:left-[10px] md:bottom-[-75px]
                    lg:left-[-20px] lg:bottom-[-25px]
                    xl:left-[-60px] xl:bottom-[50px]"/>
        </div>

        <div className="absolute inset-0">
            <video src={campusConnectVideo}
                autoPlay
                loop
                muted
                className="relative object-cover
                xl:left-[425px] xl:top-[250px] xl:w-[200px]
                lg:left-[280px] lg:top-[180px] lg:w-[170px]
                md:left-[230px] md:top-[140px]
                sm:left-[180px] sm:top-[110px] sm:w-[100px]">
                Your browser does not support the video tag
            </video>
        </div>

        <div className="absolute inset-0
            xl:top-[150px] xl:left-[450px]
            lg:top-[110px] lg:left-[520px]
            md:left-[350px] md:top-[80px]
            sm:top-[60px] sm:left-[270px]">
            <p className="font-custom2 text-center
            xl:leading-[30px] xl:text-[17px] xl:w-auto
            lg:text-[12px] lg:leading-[23px] 
            md:text-[9px] md:leading-[16px]
            sm:text-[8px] sm:leading-[14px] w-[300px]">
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
                <span className="xl:text-[25px] sm:text-[17px]">
                    Links
                </span>
            </p>
            <p className="font-custom2 text-customFontColor underline relative 
                xl:left-[380px] xl:text-[20px] 
                sm:text-[10px] sm:left-[90px]">
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
                xl:top-[480px] xl:left-[470px] xl:text-[20px]
                lg:top-[340px] lg:text-[12px]
                md:text-[9px] md:top-[260px]
                sm:text-[7px] sm:top-[230px] sm:left-[160px]">
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