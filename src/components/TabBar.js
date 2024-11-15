export default function TabBar({ color = "black" }) {
    return (
        <div className="flex flex-row space-x-[70px] absolute right-10 top-3">
            <h1 className="font-custom" style={{ color }}>
                About Me
            </h1>
            <h1 className="font-custom" style={{ color }}>
                Goals
            </h1>
            <h1 className="font-custom" style={{ color }}>
                Skills
            </h1>
            <h1 className="font-custom" style={{ color }}>
                Projects
            </h1>
            <h1 className="font-custom" style={{ color }}>
                Contact
            </h1>
        </div>
    );
}
