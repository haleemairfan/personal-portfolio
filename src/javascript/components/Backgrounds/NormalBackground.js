import grass from "../../../resources/normal-background/grass.png"
import sky from "../../../resources/normal-background/sky.png"
import tree from "../../../resources/normal-background/tree.png"

export default function NormalBackground() {
    return(
        <div className="relative">
            <img src={sky}
                alt="sky"
                className="absolute w-[100vw] h-[100vh] object-cover"/>
            <img src={grass}
                alt="grass"
                className="absolute w-[100vw] h-[100vh] object-cover"/>
            <img src={tree}
                alt="tree"
                className="absolute left-[-20%] w-[100vw] h-[100vh] object-cover"/>

        </div>
    );
}