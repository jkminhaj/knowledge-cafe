import Bookmark from "../bookmark/bookmark";

export default function Bookmarked ({bookmarks , readingTime}) {
    const {title} = bookmarks;
    return(
        <div className="w-1/3">
            <div className="flex gap-5">
            <p className="text-lg font-semibold">Bookmarked Blogs : {bookmarks.length}</p>
            <p className="text-lg font-bold">Reading Time :{readingTime}</p>
            </div>
            {
                bookmarks.map(bookmark=><Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}