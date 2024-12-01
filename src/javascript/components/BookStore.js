import user from "../../resources/characters/user.png"
import haleema from "../../resources/characters/haleema-frog.png"
import bookshelf from "../../resources/book-store-background/bookshelf.png"
import smallBookshelf from "../../resources/book-store-background/bookshelf-deco.png"
import table from "../../resources/book-store-background/table.png"

export default function BookStore() {
    return(
        <div className="bg-customBackground relative h-screen">
            <img src={bookshelf}
                alt="bookshelf"
                className="absolute left-[-27.5%] top-[5%] h-[100vh] w-[100vw] object-cover overflow-hidden"
            />
            <img src={user}
                alt="user"
                className="absolute top-[2%] left-[5%] w-[80vw] h-[80vw] object-cover"
            />   
            <img src={smallBookshelf}
                alt="small bookshelf"
                className="absolute bottom-[15%] left-[5.5%] h-[100vh] w-[100vw] object-cover"
            />       
            <img src={haleema}
                alt="haleema"
                className="absolute left-[30%] top-[5%] h-[100vh] w-[100vw] object-cover"
            />
            <img src={table}
                alt="table"
                className="absolute left-[30%] top-[30%] h-[100vh] w-[100vw] object-cover"
            />          
            
        </div>
    );
}