import { useNavigate } from "react-router-dom"

import TabBar from "../../components/TabBar"
import OpenBookBackground from "../../components/Backgrounds/OpenBookBackground"
import next from "../../../resources/misc/next.png"
import DerekUi from "../../../resources/projects/DerekUI.png"

export default function DerekReminderBot() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/outsidebookstore-2");
    }


    return(
        <div className="relative overflow-hidden">
            <OpenBookBackground className="absolute"/>
            <h1 className="font-custom2 text-black object-contain absolute underline
                    text-[3.3vw] left-[32vw] top-[15vh]
                    2xl:text-[3vw] 2xl:left-[33vw]
                    xl:text-[3.3vw] xl:left-[31vw] xl:top-[16%] 
                    lg:text-[3.5vw] lg:left-[30vw] lg:top-[17vh] 
                    md:text-[2.3vw] md:left-[37vw] md:top-[18vh] 
                    sm:text-[3.3vw] sm:left-[32vw] sm:top-[18vh]"> 
                    Derek
            </h1>

            <div className="absolute inset-0">
                <img src={DerekUi}
                    alt="Derek UI"
                    className="relative object-cover 
                        left-[26vw] top-[28vh] w-[20vw]
                        2xl:left-[24vw] 2xl:top-[30vh] 2xl:w-[25vw]
                        xl:left-[25vw] xl:top-[28vh] xl:w-[20vw]
                        lg:left-[20.5vw] lg:top-[28vh] lg:w-[25vw]
                        md:left-[30vw] md:top-[28vh] md:w-[18vw]
                        sm:left-[26vw] sm:top-[28vh] sm:w-[20vw]"/>
            </div>
            <p className="font-custom2 text-center justify-center absolute inset-0
                    text-[1.1vw] leading-[190%] w-[50vw] top-[57vh] left-[10vw]
                    2xl:leading-[190%] 2xl:text-[1vw] 2xl:top-[60vh] 2xl:right-[37vw]
                    xl:text-[1vw] xl:leading-[190%] xl:w-auto xl:top-[58vh] xl:right-[40vw]
                    lg:text-[1.4vw] lg:leading-[190%] lg:w-auto lg:top-[55vh] lg:right-[34vw]
                    md:text-[0.9vw] md:leading-[190%] md:w-auto md:top-[57vh] md:right-[23vw]
                    sm:text-[1.1vw] sm:leading-[190%] sm:w-[50vw] sm:top-[57vh] sm:left-[10vw]">
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

            <p className="font-custom2 font-black absolute inset-0 justify-center text-center
                    text-[1.5vw] top-[15vh] left-[30vw]
                    2xl:text-[1.7vw] 2xl:top-[15vh] 2xl:left-[30vw]
                    xl:text-[1.5vw] xl:top-[14vh] xl:left-[30vw]
                    lg:text-[2vw] lg:top-[14vh] lg:left-[35vw]
                    md:text-[1.3vw] md:top-[15vh] md:left-[25vw]
                    sm:text-[1.5vw] sm:top-[15vh] sm:left-[30vw]">
                Links
            </p>

            <p className="font-custom2 text-customFontColor underline absolute inset-0 z-10
                    left-[60%] text-[1.1vw] top-[22%]
                    2xl:text-[1vw] 2xl:top-[22vh] 2xl:left-[60vw]
                    xl:left-[61%] xl:text-[1vw] xl:top-[20%]
                    lg:left-[61vw] lg:text-[1.4vw] lg:top-[20vh]
                    md:left-[58%] md:text-[1vw] md:top-[22%]
                    sm:left-[60%] sm:text-[1.1vw] sm:top-[22%]">
                <a href="https://github.com/haleemairfan/ip/releases/tag/A-Release">
                    Links to Installation
                </a> <br/>
                <a href="https://github.com/haleemairfan/ip">
                    Github repo
                </a>
            </p>

        <h1 className="font-custom2 text-black object-contain absolute underline
                text-[3.3vw] left-[55vw] top-[32vh]
                2xl:text-[3vw] 2xl:top-[30vh] 2xl:left-[55vw]
                xl:text-[3.3vw] xl:left-[55vw] xl:top-[26%] 
                lg:text-[3.5vw] lg:left-[56vw] lg:top-[27vh] 
                md:text-[2.3vw] md:left-[55vw] md:top-[32vh] 
                sm:text-[3.3vw] sm:left-[55vw] sm:top-[32vh]"> 
                Reminder Bot 
            </h1>

            <p className="font-custom2 justify-center text-center inset-0 absolute
                    text-[1.1vw] leading-[190%] w-auto top-[42vh] left-[31vw]
                    2xl:leading-[190%] 2xl:text-[1vw] 2xl:top-[40vh] 2xl:left-[30vw]
                    xl:text-[1vw] xl:leading-[190%] xl:w-auto xl:top-[37vh] xl:left-[32vw]
                    lg:text-[1.4vw] lg:leading-[190%] lg:w-auto
                    md:text-[0.9vw] md:leading-[190%] md:w-auto md:top-[40vh] md:left-[25vw]
                    sm:text-[1.1vw] sm:leading-[190%] sm:w-auto sm:top-[42vh] sm:left-[31vw]">
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

            <p className="font-custom2 font-black absolute inset-0 justify-center text-center
                    text-[1.5vw] top-[70vh] left-[30vw]
                    2xl:text-[1.7vw] 2xl:top-[65vh] 2xl:left-[30vw]
                    xl:text-[1.5vw] xl:top-[65vh] xl:left-[30vw]
                    lg:text-[2vw] lg:top-[68vh] lg:left-[35vw]
                    md:text-[1.3vw] md:top-[70vh] md:left-[25vw]
                    sm:text-[1.5vw] sm:top-[70vh] sm:left-[30vw]">
                Links
            </p>


            <p className="font-custom2 text-customFontColor underline absolute inset-0
                    text-[1.1vw] left-[59%] top-[75%] z-10
                    2xl:text-[1vw] 2xl:top-[72vh] 2xl:left-[60vw]
                    xl:left-[60%] xl:text-[1vw] xl:top-[71vh]
                    lg:left-[61vw] lg:text-[1.4vw] lg:top-[75vh]
                    md:left-[58%] md:text-[1vw] md:top-[75%]
                    sm:text-[1.1vw] sm:left-[59%] sm:top-[75%]">
                <a href="https://t.me/remindersUsingABot">
                    Links to Telegram Bot
                </a> <br/>
                <a href="https://github.com/haleemairfan/ReminderBot">
                    Github repo
                </a>
            </p>

            <img src={next}
                alt="next button"
                className="absolute left-[43%] bottom-[35%] h-[100vh] w-[100vw] object-cover z-0"/>
            <button onClick={handleClick}
                className="absolute top-[10%] right-[2%] w-[10vw] h-[10vh] opacity-0">
                    Invisible button
            </button>
            <TabBar color="white"/>
        </div>
    );
}