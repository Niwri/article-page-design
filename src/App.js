import SearchButton from './components/SearchButton.js'
import SearchTextField from './components/SearchTextField.js'
import ThumbPost from './components/ThumbPost.js'
import ThumbPostTwo from './components/ThumbPostTwo.js'
import ThumbPostThree from './components/ThumbPostThree.js'
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

  
  //List of Thumbposts
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

  let thumbPostList2 = [
    <>
      <ThumbPostThree
        title="The Brain is a Tumor!" 
        date="01/23/2025" 
        text="TestText" 
        author="Guy D"
        image={brain}
        authorImage={authorImage}
      />
      <br/>
    </>
    ,
    <>
      <ThumbPostThree
        title="The Brain is a Tumor!" 
        date="01/23/2025" 
        text="TestText" 
        author="Guy D"
        image={brain}
        authorImage={authorImage}
      />
      <br/>
    </>
    ,
    <>
      <ThumbPostThree
        title="The Brain is a Tumor!" 
        date="01/23/2025" 
        text="TestText" 
        author="Guy D"
        image={brain}
        authorImage={authorImage}
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
      {thumbPostList}

      <div style={tempHorizStyle}>
        {thumbPostList2}
      </div>
      
    </>
  );
}

//Style for Search Container
const searchContainerStyle = {
  margin: 'auto', 
  position: 'relative', 
  textAlign: 'center', 
  top: 100,
  left: 100, 
  display: 'flex',
  width: 1000,
  
}

const tempHorizStyle = { 
  display: 'flex',
  flexWrap: 'nowrap',
}

export default App;