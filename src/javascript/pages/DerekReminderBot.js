import { useNavigate } from "react-router-dom"

import TabBar from "../components/TabBar"
import OpenBookBackground from "../components/OpenBookBackground"
import line from "../../resources/book-store-background/line.png"
import next from "../../resources/misc/next.png"
import DerekUi from "../../resources/projects/DerekUI.png"

export default function DerekReminderBot() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/outsidebookstore-2");
    }


    return(
        <div className="relative overflow-hidden">
            <OpenBookBackground className="absolute"/>
            <div className="absolute inset-0 top-[-275px] left-[-200px]">
                <h1 className="font-custom2  
                    text-black
                    object-contain
                    relative
                    top-[400px]
                    left-[650px]
                    text-[50px]"> 
                    Derek 
                </h1>
                <img src={line}
                    alt="line"
                    className="object-contain relative right-[70px] bottom-[50px]"
                />
            </div>

            <div className="absolute inset-0">
                <img src={DerekUi}
                    alt="Derek UI"
                    className="relative 
                        left-[370px] 
                        top-[225px] 
                        w-[300px] 
                        object-cover"/>
            </div>
            <p className="font-custom2 
                leading-[30px] 
                text-center 
                justify-center 
                absolute 
                inset-0
                top-[450px]
                right-[400px]">
                    A Java-based chatbot that helps manage to-dos 
                    <span className="font-sans">
                        ,
                    </span><br/>
                    events
                    <span className="font-sans">
                        ,
                    </span> and
                    <span className="font-sans">
                        ,
                    </span> deadlines
                    <span className="font-sans">
                        .
                    </span> Through this project
                    <span className="font-sans">
                        ,
                    </span> I <br/>
                    deepened my understanding of software engineering <br/>
                    principles
                    <span className="font-sans">
                        ,
                    </span> focusing on code quality and applying <br/>
                    OOP principles
                    <span className="font-sans">
                        .
                    </span> Built with JavaFX for the frontend
                    <span className="font-sans">
                        ,
                    </span><br/>
                    Derek was developed iteratively using a breadth first <br/>
                    approach to ensure comprehensive functionality
                    <span className="font-sans">
                        .
                    </span>
                </p>

            <p className="font-custom2
                font-black
                absolute
                inset-0
                text-[25px]
                justify-center
                text-center
                top-[125px]
                left-[400px]">
                Links
            </p>
            <div className="absolute inset-0 top-[-170px] left-[200px]">
                <h1 className="font-custom2  
                    text-black
                    object-contain
                    relative
                    top-[400px]
                    left-[570px]
                    text-[50px]"> 
                    Reminder Bot 
                </h1>
                <img src={line}
                    alt="line"
                    className="object-contain relative top-[60px] left-[100px]"
                />
            </div>

            <p className="font-custom2
                leading-[30px]
                justify-center 
                text-center 
                inset-0 
                absolute
                top-[325px]
                left-[420px]">
                A Telegram bot designed to help users keep track <br/>
                of reminders throughout the week
                <span className="font-sans">
                    .
                </span> Built entirely in <br/>
                Python 
                <span className="font-sans">
                    ,
                </span> I handled both the backend and user <br/>
                interactions
                <span className="font-sans">
                    ,
                </span> integrating a MongoDB database to <br/>
                manage and store reminders effectively
                <span className="font-sans">
                    .
                </span> I deployed <br/>
                the bot on Render
                <span className="font-sans">
                    ,
                </span> ensuring smooth operation and <br/>
                accessibility for users
            </p>

            <p className="font-custom2
                font-black
                absolute
                inset-0
                text-[25px]
                justify-center
                text-center
                top-[550px]
                left-[400px]">
                Links
            </p>


            <img src={next}
                alt="next button"
                className="absolute top-[-275px] right-[-600px]"/>
            <button onClick={handleClick}
                className="absolute right-[75px] top-[115px] opacity-0">
                Invisible button
            </button>
        

            <p className="font-custom2 
                text-customFontColor 
                underline 
                absolute 
                left-[825px]
                top-[170px]
                inset-0">
                <a href="https://github.com/haleemairfan/ip/releases/tag/A-Release">
                    Links to Installation
                </a> <br/>
                <a href="https://github.com/haleemairfan/ip">
                    Github repo
                </a>
            </p>

            <p className="font-custom2 
                text-customFontColor 
                underline 
                absolute 
                left-[825px]
                top-[600px]
                inset-0">
                <a href="https://t.me/remindersUsingABot">
                    Links to Telegram Bot
                </a> <br/>
                <a href="https://github.com/haleemairfan/ReminderBot">
                    Github repo
                </a>
            </p>


            <TabBar color="white"/>
        </div>
    );
}