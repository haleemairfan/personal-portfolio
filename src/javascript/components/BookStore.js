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
                className="absolute left-[-400px] bottom-[-100px] overflow-hidden"
            />
            <img src={user}
                alt="user"
                className="absolute top-[-20px] left-[150px] w-[1000px] h-[1200px] object-cover"
            />   
            <img src={smallBookshelf}
                alt="small bookshelf"
                className="absolute top-[-100px] right-[-100px]"
            />       
            <img src={haleema}
                alt="haleema"
                className="absolute left-[400px] top-[20px]"
            />
            <img src={table}
                alt="table"
                className="absolute right-[-400px] bottom-[-250px]"
            />          
            
        </div>
    );
}