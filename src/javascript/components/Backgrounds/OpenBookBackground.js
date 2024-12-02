import BookStore from "./BookStore";
import Book from "../../../resources/book-store-background/open-book.png";

export default function OpenBookBackground() {
    return (
        <div className="relative h-screen">
            <BookStore />

            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <img
                src={Book}
                alt="open book"
                className="absolute inset-0"
            />
        </div>
    );
}
