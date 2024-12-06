

export default function({logoOne, logoTwo, logoThree, className}) {
    return (
        <div className={`flex flex-row relative 
            xl:bottom-[375px] xl:right-[350px] xl:space-x-[-670px]
            md:space-x-[-330px] md:right-[175px] md:bottom-[190px]
            lg:space-x-[-400px] lg:right-[220px] lg:bottom-[240px]
            sm:space-x-[-320px] sm:bottom-[150px] sm:right-[-10px]
            ${className}`}>
        <img
            src={logoOne}
            alt=""
            className="h-[800px] w-[800px] object-cover
                xl:h-[800px] xl:w-[800px]
                lg:h-[500px] lg:w-[500px]
                md:h-[400px] md:w-[400px]
                sm:h-[300px] sm:w-[300px]"
        />
        <img
            src={logoTwo}
            alt=""
            className="h-[800px] w-[800px] object-cover
                xl:h-[800px] xl:w-[800px]
                lg:h-[500px] lg:w-[500px]
                md:h-[400px] md:w-[400px]
                sm:h-[300px] sm:w-[300px]"
        />
        <img
            src={logoThree}
            alt=""
            className="h-[800px] w-[800px] object-cover
                xl:h-[800px] xl:w-[800px]
                lg:h-[500px] lg:w-[500px]
                md:h-[400px] md:w-[400px]
                sm:h-[300px] sm:w-[300px]"
        />
    </div>

    );  
}