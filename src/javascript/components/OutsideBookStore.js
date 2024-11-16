import user from "../../resources/characters/user.png"
import haleema from "../../resources/characters/haleema-frog.png"
import shop from "../../resources/misc/shop.png"
import grass from "../../resources/normal-background/grass.png"
import sky from "../../resources/normal-background/sky.png"

export default function OutsideBookStore() {
    return(
        <div className="relative h-screen">
            <img src={sky}
                alt="sky"
                className="absolute"/>
            <img src={shop}
                alt="bookshop"
                className="absolute right-[-500px]"/>
            <img src={grass}
                alt="grass"
                className="absolute"/>
            <img src={user}
                alt="user avatar"
                className="absolute left-[-450px] bottom-[-240px]"/>
            <img src={haleema}
                alt="haleema avatar"
                className="absolute left-[0px] bottom-[-260px]"/>
        </div>
    );

}