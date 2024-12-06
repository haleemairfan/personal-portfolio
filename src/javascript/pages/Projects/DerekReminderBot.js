import { useNavigate } from "react-router-dom"

import TabBar from "../../components/TabBar"
import OpenBookBackground from "../../components/Backgrounds/OpenBookBackground"
import line from "../../../resources/book-store-background/line.png"
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
            <div className="absolute inset-0 top-[-275px] left-[-200px]">
                <h1 className="font-custom2 text-black object-contain relative
                    sm:text-[22px] sm:left-[400px] sm:top-[330px]
                    lg:text-[35px] lg:left-[530px] lg:top-[360px]
                    xl:text-[50px] xl:left-[670px] xl:top-[400px]
                    md:left-[450px] md:top-[340px] md:text-[25px]"> 
                        Derek
                </h1>
                <img src={line}
                    alt="line"
                    className="object-contain relative
                        sm:bottom-[-190px] sm:left-[185px] sm:w-[500px]
                        md:left-[10px] md:bottom-[-75px] md:w-auto
                        lg:left-[-20px] lg:bottom-[-25px] lg:w-auto
                        xl:left-[-60px] xl:bottom-[50px] xl:w-auto"/>
            </div>

            <div className="absolute inset-0">
                <img src={DerekUi}
                    alt="Derek UI"
                    className="relative 
                        xl:left-[370px] xl:top-[225px] xl:w-[300px] 
                        lg:top-[180px] lg:left-[250px] md:w-[250px]
                        md:top-[120px] md:left-[200px]
                        sm:w-[160px] sm:left-[150px] sm:top-[100px]
                        object-cover"/>
            </div>
            <p className="font-custom2 text-center justify-center absolute inset-0
                xl:leading-[30px] xl:top-[450px] xl:right-[400px] xl:text-[16px]
                lg:top-[350px] lg:right-[280px] lg:text-[12px] lg:leading-[20px]
                md:top-[250px] md:right-[210px] md:text-[9px] md:leading-[15px]
                sm:text-[7px] sm:leading-[13px] sm:top-[210px] sm:right-[180px]">
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
                xl:text-[25px] xl:top-[125px] xl:left-[400px]
                lg:text-[20px] lg:top-[72px] lg:left-[300px]
                md:text-[15px] md:top-[55px]
                sm:top-[50px] sm:left-[200px] sm:text-[13px]">
                Links
            </p>

            <p className="font-custom2 text-customFontColor underline absolute inset-0
                xl:left-[825px] xl:top-[170px] xl:text-[17px]
                lg:left-[600px] lg:text-[13px] lg:top-[110px]
                md:left-[440px] md:top-[85px]
                sm:text-[10px] sm:top-[75px] sm:left-[370px]">
                <a href="https://github.com/haleemairfan/ip/releases/tag/A-Release">
                    Links to Installation
                </a> <br/>
                <a href="https://github.com/haleemairfan/ip">
                    Github repo
                </a>
            </p>
            <div className="absolute inset-0 
                xl:top-[-170px] xl:left-[200px]">
                <h1 className="font-custom2 text-black object-contain relative
                    xl:top-[400px] xl:left-[570px] xl:text-[50px]
                    lg:text-[35px] lg:top-[160px] lg:left-[560px]
                    md:text-[25px] md:left-[420px]
                    sm:top-[120px] sm:left-[360px]"> 
                    Reminder Bot 
                </h1>
                <img src={line}
                    alt="line"
                    className="object-contain relative 
                        xl:top-[60px] xl:left-[100px]
                        lg:bottom-[125px] lg:left-[170px]
                        md:bottom-[95px] md:left-[120px]
                        sm:bottom-[56px] sm:left-[100px]"
                />
            </div>

            <p className="font-custom2 justify-center text-center inset-0 absolute
                xl:leading-[30px] xl:top-[325px] xl:left-[420px] xl:text-[16px]
                lg:text-[12px] lg:leading-[20px] lg:top-[220px] lg:left-[320px]
                md:text-[9px] md:leading-[15px] md:left-[240px] md:top-[170px]
                sm:text-[7px] sm:top-[150px] sm:left-[200px] sm:leading-[13px]">
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
                xl:text-[25px] xl:top-[550px] xl:left-[400px]
                lg:text-[20px] lg:top-[365px] lg:left-[320px]
                md:top-[290px] md:left-[240px]
                sm:top-[245px] sm:left-[190px] sm:text-[13px]">
                Links
            </p>


            <p className="font-custom2 text-customFontColor underline absolute inset-0
                xl:left-[825px] xl:top-[600px] xl:text-[17px]
                lg:text-[13px] lg:top-[400px] lg:left-[600px]
                md:top-[320px] md:left-[450px]
                sm:text-[10px] sm:top-[265px] sm:left-[360px]">
                <a href="https://t.me/remindersUsingABot">
                    Links to Telegram Bot
                </a> <br/>
                <a href="https://github.com/haleemairfan/ReminderBot">
                    Github repo
                </a>
            </p>

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