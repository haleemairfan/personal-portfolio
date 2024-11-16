
import OutsideBookStore from "../components/OutsideBookStore"
import TabBar from "../components/TabBar"
import scroll from "../../resources/misc/contact.png"
import line from "../../resources/book-store-background/line.png"


export default function Contact() {

    return(
        <div className="relative h-screen overflow-hidden">
            <OutsideBookStore className="absolute inset-0"/>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <img src={scroll}
                alt="scroll"
                className="absolute 
                inset-0 
                h-[1200px]
                w-[500px] 
                top-[-200px]
                left-[500px]
                object-cover"/>
            
            <h1 className="absolute inset-0 font-custom2 text-[50px] text-center top-[150px]">
                Contact Me
            </h1>
            <img src={line}
                alt="line"
                className="absolute 
                inset-0
                top-[-170px]
                left-[30px]"
            />

            <h1 className="absolute inset-0 font-custom2 text-[50px] text-center top-[400px]">
                Resume
            </h1>
            <img src={line}
                alt="line"
                className="absolute 
                inset-0
                top-[80px]
                left-[30px]"
            />
            <p className="font-custom2
                absolute 
                inset-0 
                text-[20px] 
                left-[600px] 
                top-[250px] 
                leading-[50px]
                text-customFontColor
                underline">
                <a href="mailto:haleemairfan04@gmail.com">
                    Send me an email!
                </a> <br/>
                <a href="https://www.linkedin.com/in/haleema-irfan-5b7054268">
                    Reach out to me on Linkedin!
                </a>
            </p>
            <TabBar color="white"/>
        </div>
    );

}