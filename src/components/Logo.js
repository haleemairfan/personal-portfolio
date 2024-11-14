import "../stylesheets/design-elements.css"
import "../stylesheets/text.css"

export default function Logo({src, alt, label}) {
    return(
        <div className="flex flex-col items-center relative space-y-[-80px]">
            <img src={src} alt={alt} className="z-10 
                rounded-full 
                h-[300px]
                w-[300px] 
                object-cover
                mt-[-50px]"/>
            <p className="normal 
                w-[200px] 
                text-center
                leading-[45px]">
                {label}
                </p>
        </div>
    );
}

