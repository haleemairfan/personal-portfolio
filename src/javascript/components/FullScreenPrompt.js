import React from "react";

export default function FullScreenPrompt({ onClose }) {
    const goFullScreen = () => {
        const element = document.documentElement;

        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (window.screen.orientation && window.screen.orientation.lock) {
            // Handle mobile-specific full-screen behavior
            window.screen.orientation.lock("landscape").catch((err) => {
                console.error("Error locking screen orientation:", err);
            });
        }
    };

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex flex-col items-center justify-center z-50">
            <h1 className="text-white text-3xl font-bold mb-6 text-center">
                For the best experience, enter full-screen mode!
            </h1>
            <button
                onClick={() => {
                    goFullScreen();
                    onClose();
                }}
                className="bg-white text-black px-6 py-3 rounded-lg text-xl font-bold hover:bg-gray-300 transition"
            >
                Enter Full-Screen
            </button>
        </div>
    );
}
