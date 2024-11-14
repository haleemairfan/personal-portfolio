import "../stylesheets/design-elements.css"
import "../stylesheets/text.css"
import Logo from "../components/Logo";
import htmlLogo from "../resources/images/logos/html.png"
import mongoDBLogo from '../resources/images/logos/mongoDB.png'
import nodeJsLogo from "../resources/images/logos/node-js.png"
import postgreSQLLogo from "../resources/images/logos/postgresql.png"
import pythonLogo from "../resources/images/logos/python.png"
import reactLogo from "../resources/images/logos/react.png"
import tailwindCSSLogo from "../resources/images/logos/tailwind-css.png"


export default function TechnicalSkills() {
    return(
        <div class="background">
            <div class="purple-design-circle"
                style={{ marginTop: `-${window.innerHeight - 50 + window.innerHeight}px` }}>
            </div>
            <h1 className="absolute ml-[110px] mt-[60px]">
                Technical <br/>Skills
            </h1>
            <div className="mt-[25px] absolute right-[500px]">
                <h2 className="absolute">Frontend:</h2>
                <div className="flex flex-row mt-[70px] ml-[-100px] absolute">
                    <Logo src={reactLogo}
                        alt="react logo"
                        label="React"/>
                    <Logo src={tailwindCSSLogo}
                        alt="tailwind CSS logo"
                        label="Tailwind CSS"/>
                    <Logo src={htmlLogo}
                        alt="HTML logo"
                        label="HTML"/>
                </div>        
            </div>
=            <div className="mt-[410px] absolute left-[20px]">
                <h2 className="absolute left-[50px]">Backend:</h2>
                <div className="flex flex-row mt-[70px] absolute space-x-[30px]">
                    <Logo src={nodeJsLogo}
                        alt="Node JS logo"
                        label="Node.js"/>
                    <Logo src={postgreSQLLogo}
                        alt="postgreSQL logo"
                        label="PostgreSQL"/>
                    <Logo src={mongoDBLogo}
                        alt="MongoDB logo"
                        label="MongoDB"/>
                        
                </div>
                        
            </div>

            <div className="mt-[410px] absolute right-[700px]">
                <h2 className="absolute left-[50px]">Languages:</h2>
                <div className="flex flex-row mt-[70px] absolute space-x-[30px]">
                    <Logo src={pythonLogo}
                        alt="Node JS logo"
                        label="Python"/>
                    <Logo src={postgreSQLLogo}
                        alt="postgreSQL logo"
                        label="C"/>
                    <Logo src={mongoDBLogo}
                        alt="MongoDB logo"
                        label="Java"/>
                        
                </div>
                        
            </div>


        </div>

    );
}