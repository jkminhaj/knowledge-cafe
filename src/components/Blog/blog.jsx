import { FaBook } from "react-icons/fa";
const Blog = ({blog , handleAddToBookmark , handleReadingTime}) => {
    const {id,reading_time,author_pic,author_name,title,hashtags,posted_date,cover_img} = blog ;
    return(
        <section className="my-5 mr-6 px-5 py-4 bg-gray-100 rounded-xl">
            <img className="rounded-xl w-full" src={cover_img}></img>
            <div className="flex justify-between">
                <div className="flex mt-4 gap-3 items-center mb-3">
                    <div>
                    <img src={author_pic} className="w-14 h-14 rounded-full" alt="" />
                    </div>
                    <div> 
                        <h3 className="font-bold">{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <p>{reading_time} mins read</p>
                    <FaBook onClick={()=>handleAddToBookmark(blog)} className="cursor-pointer"  />
                </div>
            </div>
            <h1 className="text-4xl font-bold mb-3">{title}</h1>
            <p className="mb-3 italic">
                {
                    hashtags.map((i , idx)=><span key={idx}> {i}</span>)
                }
            </p>
            <a onClick={()=>handleReadingTime(reading_time)} className="cursor-pointer text-blue-500 underline">Mark as read</a>
        </section>
    )
}
export default Blog ;