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
            <img src={grass}
                alt="grass"
                className="absolute w-[100vw] h-[100vh] object-cover"/>
            <Character initialPosition={{x : -800, y : 180}} />
            <img src={haleema}
                alt="haleema avatar"
                className="absolute right-[5%] bottom-[-30%] w-[100vw] h-[100vh] object-cover"/>
        </div>
    );

}