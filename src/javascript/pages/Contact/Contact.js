
import OutsideBookStore from "../../components/Backgrounds/OutsideBookStore"
import TabBar from "../../components/TabBar"
import scroll from "../../../resources/misc/contact.png"


export default function Contact() {

    return(
        <div className="relative h-screen overflow-hidden">
            <OutsideBookStore className="absolute inset-0"/>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <img src={scroll}
                alt="scroll"
                className="absolute inset-0 object-cover
                h-[130vh] w-[100vw] top-[-15%]
                sm:h-[130vh] sm:w-[100vw] sm:top-[-15%]"/>
            

            <h1 className="absolute inset-0 font-custom2 text-center underline
                text-[3vw] top-[23%]
                sm:text-[3vw] sm:top-[23%]">
                Resume
            </h1>

            <a
                href="/Haleema Irfan_Resume.pdf"
                download="Haleema Irfan_Resume.pdf"
                className="text-customFontColor inset-0 underline absolute font-custom2 w-[15vw] h-[10vh]
                top-[35%] left-[44%] text-[1.2vw]
                sm:top-[35%] sm:left-[44%] sm:text-[1.2vw]">

                Download My Resume
            </a>

            <h1 className="absolute inset-0 font-custom2 text-center underline
                text-[3vw] top-[45%]
                sm:text-[3vw] sm:top-[45%]">
                Contact Me
            </h1>
            <p className="font-custom2 absolute inset-0 text-customFontColor underline
                top-[58%] left-[43%] text-[1.2vw]
                sm:top-[58%] sm:left-[43%] sm:text-[1.2vw]">
                <a href="mailto:haleemairfan04@gmail.com">
                    Send me an email!
                </a> <br/>
                <a href="https://www.linkedin.com/in/haleema-irfan-5b7054268">
                    Reach out to me on Linkedin!
                </a> <br/>
                <a href="https://github.com/haleemairfan">
                    Explore my github
                </a>

            </p>


            <TabBar color="white"/>
        </div>
    );

}