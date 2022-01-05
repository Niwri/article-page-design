import ThumbPost from './ThumbPostThree.js'


const VerticalContainer = ( { recentPosts, category }) => {
    
  require('./styles/ThumbPostThree.css')

    return (
        
      <div style={containerStyle}>
            
        <div style={categoryStyle}>
          {category}
        </div>
            
        <div style={vertiStyle}>
            <div className="postContainer" style={postContainerStyle}>
                {recentPosts.map((recentPost) => {
                    return <ThumbPost post={recentPost}/>
                })}
            </div> 
        </div>  

      </div>
  )

    
}


const containerStyle = {
    marginLeft: '10%',
    marginBottom: '5%'
},

postContainerStyle = {
    display: 'flex',
    //flexWrap: 'nowrap',
    //gridColumnGap: 20,
    //overflowX: 'auto',
    flexDirection: 'column',
    rowGap: '30px'
    //paddingBottom: 10,
    //cursor: 'grab',
    //zIndex: 3
},

categoryStyle = {
    position: 'relative',
    fontSize: 35,
    fontWeight: 'bold',
    top: 35/2+5,
    zIndex: 1,
    backgroundColor: 'white',
    width: 'fit-content',
    left: '5%',
    padding: '0px 10px 0px 10px',
    color: '#7960AE',
},

vertiStyle = {
    position: 'relative',
    borderStyle: 'solid',
    borderWidth: 10,
    borderRadius: 40,
    borderColor: '#9E81DD',
    width: '25%',
    //zIndex: 0,
    padding: '40px 20px 30px 20px',
  display: 'flex',
  flexDirection: 'column'
}

export default VerticalContainer
