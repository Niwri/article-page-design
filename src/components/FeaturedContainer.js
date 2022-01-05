import FeaturedPost from './FeaturedPost.js'

const FeaturedContainer = ( { featuredPosts }) => {

    return (
        <div style={containerStyle}>
            <div style={categoryStyle}>Featured Section</div>
            <div style={featuredContainerStyle}>
                <FeaturedPost post={featuredPosts[0]}/>
                <button style={leftButtonStyle}>&#60;</button>
                <button style={rightButtonStyle}>&#62;</button>
            </div>
            
        </div>
    )
}

const containerStyle = {
    marginLeft: '10%',
    width: '55%',
    maxWidth: 1500,
},

categoryStyle = {
    position: 'relative',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    top: 35/2+5,
    zIndex: 1,
    backgroundColor: 'white',
    width: 'fit-content',
    padding: '0px 10px 0px 10px',
    color: '#7960AE',
    margin: 'auto',
},

featuredContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '60%',
    zIndex: 0,
    padding: '40px 0px 40px 0px',
    
},

leftButtonStyle = {
    position: 'relative',
    float: 'left',
    marginLeft: '5%',
    transform: 'translateY(-400%)',
    fontSize: '5em',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: 'rgb(0, 0, 0, 0)',
    border: 'none',
    color: 'white',
    textShadow: '5px 5px 0px rgb(0, 0, 0, 0.5)',
    zIndex: 1
},

rightButtonStyle = {
    position: 'relative',
    float: 'right',
    marginRight: '5%',
    transform: 'translateY(-400%)',
    fontSize: '5em',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: 'rgb(0, 0, 0, 0)',
    border: 'none',
    color: 'white',
    textShadow: '5px 5px 0px rgb(0, 0, 0, 0.5)',
    zIndex: 1
}

export default FeaturedContainer