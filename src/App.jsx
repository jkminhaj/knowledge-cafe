import { useState } from 'react';
import './App.css'
import Bookmarked from './components/bookmarked/bookmarked'
import Header from './components/Header/header'
import Blogs from './components/blogs/blogs'

function App() {
  const [bookmarks , setBookmarks] = useState([]);
  const [readingTime , setReadingTime] = useState(0);

  const handleReadingTime = time =>{
    setReadingTime(readingTime+time);
  }

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks , blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:mt-3 md:px-5 flex max-w-6xl m-auto'>
      <Blogs handleReadingTime={handleReadingTime} handleAddToBookmark={handleAddToBookmark} ></Blogs>
      <Bookmarked readingTime={readingTime} bookmarks={bookmarks}></Bookmarked>
      </div>
    </>
  )
}

export default App
