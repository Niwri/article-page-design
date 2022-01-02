import SearchButton from './components/SearchButton.js'
import SearchTextField from './components/SearchTextField.js'
import ThumbPost from './components/ThumbPost.js'
import ThumbPostTwo from './components/ThumbPostTwo.js'
import HorizontalContainer from './components/HorizontalContainer.js'

import { useState } from 'react'
import brain from './components/images/brainImage.jpg'
import authorImage from './components/images/authorImage.png'

import './index.css';

function App() {

  //Boolean variable for toggling search textfield on/off
  const [ searchToggle, setSearchToggle ] = useState(false);

  //Toggles search textfield boolean true/false
  const toggleSearch = () => {
    setSearchToggle(!searchToggle);
    console.log(searchToggle);
  }

  //List of Posts
  const [ posts, setPosts ] = useState([
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science"
    }

  ])

  //Something fun...
  let thumbPostList = [
    <>
      <ThumbPost 
        title="The Brain is a Tumor!" 
        date="01/23/2025" 
        text="TestText" 
        author="Guy D"
        image={brain}
      />
      <br/>
    </>
    ,
    <>
      <ThumbPostTwo
        title="The Brain is a Tumor!" 
        date="01/23/2025" 
        text="TestText" 
        author="Guy D"
        image={brain}
      />
      <br/>
    </>
  ];
  return (
    <>
      {/* Search Container */}
      <div style={searchContainerStyle}>
        <SearchButton isToggle={searchToggle} onToggle={toggleSearch}/>
        {searchToggle ? <SearchTextField/> : <></>}
      </div>

      {/* Thumb Posts */}
      {/*thumbPostList*/}

      <HorizontalContainer posts={posts} category={"Health & Science"}/>
      <HorizontalContainer posts={posts} category={"urdad lmao"}/>
    </>
  );
}

//Style for Search Container
const searchContainerStyle = {
  margin: 'auto', 
  position: 'relative', 
  textAlign: 'center', 
  marginTop: 100,
  marginLeft: 100, 
  paddingBottom: 100,
  display: 'flex',
  width: 1000,
  
}


export default App;