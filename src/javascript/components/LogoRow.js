export default function({logoOne, logoTwo, logoThree, className}) {
    return (
        <div className={`flex flex-row absolute
            ${className}`}>
        <img
            src={logoOne}
            alt=""
            className="object-cover
                h-[80vh] w-[80vw]
                md:h-[70vh] md:w-[100vw]
                sm:h-[80vh] sm:w-[80vw]"/>
        <img
            src={logoTwo}
            alt=""
            className="object-cover
                h-[80vh] w-[80vw]
                2xl::h-[100vh] 2xl::w-[100vw]
                md:h-[70vh] md:w-[100vw]
                sm:h-[80vh] sm:w-[80vw]"/>


        <img
            src={logoThree}
            alt=""
            className="object-cover
                h-[80vh] w-[80vw]
                2xl::h-[100vh] 2xl::w-[100vw]
                md:h-[70vh] md:w-[100vw]
                sm:h-[80vh] sm:w-[80vw]"/>
    </div>
     );  
}