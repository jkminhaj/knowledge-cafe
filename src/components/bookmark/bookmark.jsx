export default function Bookmark ({bookmark}) {
    return(
        <div className="bg-gray-100 rounded-xl p-3 mt-4">
        <p className="text-lg font-medium">{bookmark.title}</p>
        </div>
    )
}