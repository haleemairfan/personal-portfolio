import Character from "../Character"
import haleema from "../../../resources/characters/haleema-frog.png"
import shop from "../../../resources/misc/shop.png"
import grass from "../../../resources/normal-background/grass.png"
import sky from "../../../resources/normal-background/sky.png"

export default function OutsideBookStore() {
    return(
        <div className="relative h-screen">
            <img src={sky}
                alt="sky"
                className="absolute w-[100vw] h-[100vh] object-cover"/>
            <img src={shop}
                alt="bookshop"
                className="absolute right-[-30%] w-[100vw] h-[100vh] object-cover"/>
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
            <img src={haleema}
                alt="haleema avatar"
                className="absolute right-[5%] bottom-[-30%] w-[100vw] h-[100vh] object-cover"/>
        </div>
    );

}