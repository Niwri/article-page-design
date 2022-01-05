
import SearchContainer from './components/SearchContainer.js'
import ThumbPost from './components/ThumbPost.js'
import ThumbPostTwo from './components/ThumbPostTwo.js'
import HorizontalContainer from './components/HorizontalContainer.js'
import FeaturedContainer from './components/FeaturedContainer.js'
import Header from './components/Header.js'
import VerticalContainer from './components/VerticalContainer.js'

import { useState } from 'react'
import brain from './components/images/brainImage.jpg'
import sleep from './components/images/sleep.png'
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
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }

  ])

  const featuredPosts = [{
    title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Purus non enim praesent elementum facilisis leo vel. Libero enim sed faucibus turpis. Aenean vel elit scelerisque mauris. Volutpat sed cras ornare arcu dui vivamus. Vitae ultricies leo integer malesuada nunc. Gravida in fermentum et sollicitudin ac orci phasellus. Porttitor eget dolor morbi non arcu risus. Nunc non blandit massa enim nec dui nunc mattis. Turpis egestas integer eget aliquet nibh. Urna nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing. Viverra tellus in hac habitasse platea dictumst."
    }
    ,
    {
    title: "The Brain is NOT a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Purus non enim praesent elementum facilisis leo vel. Libero enim sed faucibus turpis. Aenean vel elit scelerisque mauris. Volutpat sed cras ornare arcu dui vivamus. Vitae ultricies leo integer malesuada nunc. Gravida in fermentum et sollicitudin ac orci phasellus. Porttitor eget dolor morbi non arcu risus. Nunc non blandit massa enim nec dui nunc mattis. Turpis egestas integer eget aliquet nibh. Urna nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing. Viverra tellus in hac habitasse platea dictumst."
    }
    ,
    {
    title: "The Brain is DEF a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Purus non enim praesent elementum facilisis leo vel. Libero enim sed faucibus turpis. Aenean vel elit scelerisque mauris. Volutpat sed cras ornare arcu dui vivamus. Vitae ultricies leo integer malesuada nunc. Gravida in fermentum et sollicitudin ac orci phasellus. Porttitor eget dolor morbi non arcu risus. Nunc non blandit massa enim nec dui nunc mattis. Turpis egestas integer eget aliquet nibh. Urna nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing. Viverra tellus in hac habitasse platea dictumst."
    }
  ]
  
  const [ featuredNum , setFeaturedNum] = useState(0);

  const nextFeaturedNum = (next) => {
    if(next) { 
      if(featuredNum < featuredPosts.length-1)
        setFeaturedNum(featuredNum+1);
      else
        setFeaturedNum(0);
    } else {
      if(featuredNum > 0)
        setFeaturedNum(featuredNum-1);
      else
        setFeaturedNum(featuredPosts.length-1);
    }
  }

 //List of Recent Posts
  const [ recentPosts, setRecentPosts ] = useState([
    {
      title: "Test Test 1",
      date: "03/14/1592",
      author: "Author",
      image: sleep,
      authorImage: authorImage,
      category: "Sleepy Time",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    ,
    {
      title: "Test Test 2",
      date: "03/14/1592",
      author: "Author",
      image: brain,
      authorImage: authorImage,
      category: "Sleepy Time",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    ,
    {
      title: "Test Test 3",
      date: "03/14/1592",
      author: "Author",
      image: sleep,
      authorImage: authorImage,
      category: "Sleepy Time",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    ,
    {
      title: "Test Test 4",
      date: "03/14/1592",
      author: "Author",
      image: brain,
      authorImage: authorImage,
      category: "Sleepy Time",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
      {/* Header */}
      <Header/>

      {/* Featured & Recent Container */}
      <FeaturedContainer featuredPosts={featuredPosts} featuredNum={featuredNum} nextFeaturedNum={nextFeaturedNum}/>

      {/* Search Container */}
      <SearchContainer searchToggle={searchToggle} toggleSearch={toggleSearch}/>

      {/* Thumb Posts */} 
      <HorizontalContainer posts={posts} category={"Health & Science"}/>
      <HorizontalContainer posts={posts} category={"urdad lmao"}/>

      {/* Recent Posts */} 
      <VerticalContainer recentPosts={recentPosts} category={"Recent Posts"}/>

      {/* Some extra stuff I made */}
      <div style={{marginTop: 500}}></div>
      {thumbPostList}
    </>
  );
}




export default App;