import NormalBackground from "./NormalBackground";
import Character from "../Character";
import TabBar from "../TabBar";
import haleema from "../../../resources/characters/haleema-frog.png";

export default function PageLayout({ children, overlay }) {
    return (
        <div className="relative overflow-hidden w-screen h-screen">
            <NormalBackground />
            <img
                src={haleema}
                alt="Haleema avatar"
                className="absolute bottom-[-28%] right-[-30%] w-[100vw] h-[100vh] object-cover"
            />
            <Character initialPosition={{ x: 0, y: 0 }} className="h-screen w-screen top-[25%] object-cover" />
            {overlay} {/* Extra elements like speech bubbles, buttons */}
            <TabBar className="absolute" />
            {children} {/* Unique content */}
        </div>
    );
}
