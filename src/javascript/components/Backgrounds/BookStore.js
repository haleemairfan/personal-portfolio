import user from "../../../resources/characters/user.png"
import haleema from "../../../resources/characters/haleema-frog.png"
import bookshelf from "../../../resources/book-store-background/bookshelf.png"
import smallBookshelf from "../../../resources/book-store-background/bookshelf-deco.png"
import table from "../../../resources/book-store-background/table.png"

export default function BookStore() {
    return(
        <div className="bg-customBackground relative h-screen">
            <img src={bookshelf}
                alt="bookshelf"
                className="absolute left-[-27.5%] top-[5%] h-[100vh] w-[100vw] object-cover overflow-hidden"
            />

            <img src={smallBookshelf}
                alt="small bookshelf"
                className="absolute h-[100vh] w-[100vw] object-cover
                    bottom-[13%] left-[7%]
                    2xl:bottom-[15%] 2xl:left-[5.5%]
                    xl:bottom-[15%] xl:left-[10%]
                    lg:bottom-[13%] lg:left-[15%]
                    md:bottom-[13%] md:left-[7%]
                    sm:bottom-[13%] sm:left-[7%]"
            />       
            <img src={haleema}
                alt="haleema"
                className="absolute left-[30%] top-[5%] h-[100vh] w-[100vw] object-cover"
            />
            <img src={table}
                alt="table"
                className="absolute left-[30%] top-[30%] h-[100vh] w-[100vw] object-cover"
            /> 
            <img src={user}
                alt="user"
                className="absolute object-cover
                    right-0 top-[20%] h-[120vh] w-[100vw]
                    2xl:left-[-7%] 2xl:top-[20%] 
                    xl:left-0 xl:top-[19%] xl:h-[120vh] xl:w-[100vw]
                    lg:right-0 lg:top-[20%] lg:h-[120vh] lg:w-[100vw]
                    sm:right-0 sm:top-[20%] sm:h-[120vh] sm:w-[100vw]"
            />            
            
        </div>
    );
}