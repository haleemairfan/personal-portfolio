
import OutsideBookStore from "../../components/Backgrounds/OutsideBookStore"
import TabBar from "../../components/TabBar"
import scroll from "../../../resources/misc/contact.png"
import line from "../../../resources/book-store-background/line.png"


export default function Contact() {

    return(
        <div className="relative h-screen overflow-hidden">
            <OutsideBookStore className="absolute inset-0"/>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <img src={scroll}
                alt="scroll"
                className="absolute inset-0 object-cover
                xl:h-[1200px] xl:w-[500px] xl:top-[-200px] xl:left-[500px] 
                lg:h-[700px] lg:left-[300px] lg:top-[-60px]
                md:top-[-30px] md:left-[150px]
                sm:h-[500px] sm:w-[500px] sm:top-[-70px] sm:left-[100px]"/>
            
            <h1 className="absolute inset-0 font-custom2 text-center
                xl:text-[50px] xl:top-[150px]
                lg:text-[35px] lg:left-[100px] lg:top-[150px]
                md:top-[120px] md:left-[50px]
                sm:text-[20px] sm:top-[90px] sm:left-[60px]">
                Contact Me
            </h1>
            <img src={line}
                alt="line"
                className="absolute inset-0
                xl:top-[-170px] xl:left-[30px]
                lg:top-[-80px] lg:left-[60px]
                md:top-[-55px] md:left-[27px]
                sm:top-[-55px] sm:left-[40px]"/>

            <p className="font-custom2 absolute inset-0 text-customFontColor underline
                xl:text-[20px] xl:left-[600px] xl:top-[250px] xl:leading-[50px]
                lg:top-[220px] lg:left-[450px] lg:text-[15px] lg:leading-[25px]
                md:top-[165px] md:left-[340px]
                sm:text-[10px] sm:top-[130px] sm:left-[280px] sm:leading-[22px]">
                <a href="mailto:haleemairfan04@gmail.com">
                    Send me an email!
                </a> <br/>
                <a href="https://www.linkedin.com/in/haleema-irfan-5b7054268">
                    Reach out to me on Linkedin!
                </a>
            </p>
            <h1 className="absolute inset-0 font-custom2 text-center
                xl:text-[50px] xl:top-[400px]
                lg:text-[35px] lg:left-[100px] lg:top-[280px]
                md:top-[220px] md:left-[30px]
                sm:text-[20px] sm:top-[190px] sm:left-[60px]">
                Resume
            </h1>
            <img src={line}
                alt="line"
                className="absolute inset-0
                xl:top-[80px] xl:left-[30px]
                lg:left-[50px] lg:top-[50px]
                md:left-[20px]
                sm:top-[45px] sm:left-[35px]"/>
            <a
                href="/haleema irfan CV.pdf"
                download="Haleema_Irfan_Resume.pdf"
                className="text-customFontColor inset-0 underline absolute font-custom2 w-[15vw] h-[10vh]
                xl:top-[500px] xl:text-[20px] xl:left-[600px]
                lg:top-[350px] lg:left-[450px]
                md:top-[270px] md:text-[10px] md:left-[340px]
                sm:text-[10px] sm:top-[230px] sm:left-[280px]">

                Download My Resume
            </a>


            <TabBar color="white"/>
        </div>
    );

}