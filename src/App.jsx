import { useState } from 'react';
import './App.css'
import Bookmarked from './components/Bookmarked/bookmarked'
import Header from './components/Header/header'
import Blogs from './components/blogs/blogs'

function App() {
  const [bookmarks , setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks , blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:mt-3 md:px-5 flex max-w-6xl m-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} ></Blogs>
      <Bookmarked bookmarks={bookmarks}></Bookmarked>
      </div>
    </>
  )
}

export default App
