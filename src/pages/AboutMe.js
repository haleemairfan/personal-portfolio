import "../stylesheets/design-elements.css";
import "../stylesheets/text.css";


export default function AboutMe() {
    return(
        <div class="background">
            <div className="purple-design-circle" 
                style={{ marginTop: `-${window.innerHeight - 50}px` }}>
            </div>
            <p className=" normal absolute mt-[50px] ml-[60px] leading-[70px] z-10">
                I'm a Year 2 Computer Science student at NUS, <br/>
                driven by a passion for developing technology <br/>
                that truly serves people. I’m interested in building <br/>
                tools and solutions that 
                <span className="highlight"> solve real-world problems</span>
                , <br/>
                with a focus on enhancing quality of life. <br/>
                My goal is to create 
                <span className="highlight"> user-centered products</span>
                <br/>
                that are optimized not only from a technical <br/>
                perspective but also from a user standpoint, <br/>
                ensuring they are meaningful in everyday lives. 
            </p>
            <div className="absolute text-right right-[20px] top-[550px]">
                <h1>A little</h1>
                <h2>about me! </h2>
            </div>
        </div>
    );
}