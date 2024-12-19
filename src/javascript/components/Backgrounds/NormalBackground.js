import grass from "../../../resources/normal-background/grass.png"
import sky from "../../../resources/normal-background/sky.png"
import tree from "../../../resources/normal-background/tree.png"

export default function NormalBackground() {
    return(
        <div className="relative w-screen h-screen">
            <img
                src={sky}
                alt="sky"
                className="absolute inset-0 object-cover w-full h-full "
            />
            <img
                src={grass}
                alt="grass"
                className="absolute inset-0 object-cover
                w-full h-full
                2xl:w-full 2xl:h-full 2xl:top-0
                xl:w-[100%] xl:h-[100%] xl:top-0
                lg:w-[100%] lg:h-[100%] lg:top-0
                md:w-[100%] md:h-[130%] md:top-[-30%]
                sm:w-[100%] sm:h-[100%]"
            />
            <img
                src={tree}
                alt="tree"
                className="absolute object-cover
                right-[17%]
                2xl:left-[-20%] 2xl:w-[120%] 2xl:h-full 2xl:top-0
                xl:right-[20%] xl:top-[10]
                lg:right-[20%] lg:top-[9%]
                md:right-[30%] md:top-[5%] md:h-[90%]
                sm:right-[17%]"
            />
        </div>
    );
}