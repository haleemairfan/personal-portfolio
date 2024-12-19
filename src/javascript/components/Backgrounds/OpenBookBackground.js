import BookStore from "./BookStore";
import Book from "../../../resources/book-store-background/open-book.png";

export default function OpenBookBackground() {
    return (
        <div className="relative h-screen items-center">
            <BookStore />

            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <img
                src={Book}
                alt="open book"
                className="absolute inset-0 object-cover
                    lg:w-[100vw] lg:h-[100vh] lg:top-auto lg:left-auto
                    md:w-[80vw] md:h-[80vh] md:top-[12%] md:left-[10%]"
            />
        </div>
    );
}
