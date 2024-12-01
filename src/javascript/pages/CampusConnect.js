import { useNavigate } from "react-router-dom"

import TabBar from "../components/TabBar"
import OpenBookBackground from "../components/OpenBookBackground"
import line from "../../resources/book-store-background/line.png"
import next from "../../resources/misc/next.png"
import campusConnectVideo from "../../resources/projects/CampusConnectDemo.mp4"

export default function CampusConnect() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/projects-2");
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
                    CampusConnect 
                </h1>
                <img src={line}
                    alt="line"
                    className="object-contain relative right-[70px] bottom-[50px]"
                />
            </div>

            <div className="absolute inset-0">
                <video src={campusConnectVideo}
                    autoPlay
                    loop
                    muted
                    className="relative left-[425px] top-[250px] w-[200px] object-cover">
                    Your browser does not support the video tag
                </video>
            </div>

            <div className="absolute inset-0 top-[150px] left-[450px]">
                <p className="font-custom2 leading-[30px] text-center">
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
                    <span className="text-[25px]">
                        Links
                    </span>
                </p>
                <h2 className="font-custom2 absolute inset-0 top-[470px] left-[470px] italic">
                    Continued on the next page
                    <span className="font-sans">
                        ...
                    </span>
                </h2>
                <p className="font-custom2 
                    text-customFontColor 
                    underline relative 
                    left-[400px]">
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