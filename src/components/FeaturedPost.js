const FeaturedPost = ( { post }) => {
    return (
        <div style={containerStyle}>
            <img style={imageStyle} src={post.image} alt=""/>
            <div style={textContainerStyle}>
                <p style={titleStyle}>{post.title}</p>
                <p style={textStyle}>{post.text}</p>
            </div>
        </div>
    )
}

const containerStyle = {
    position: 'relative',
    display: 'flex',
},

postLinkStyle = {
    zIndex: 0,
},

imageStyle = {
    width: '50%',   
    height: 605,
    objectFit: 'cover',
    borderRadius: '40px 0px 0px 40px',
    margin: 'auto'
},

textContainerStyle = {
    width: '280%',
    height: 600,
    backgroundColor: '#5D33B5',
    borderRadius: '0 40px 40px 0',
    paddingTop: 5,
    paddingLeft: '3%',
    paddingRight: '8em'
},

titleStyle = {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Comic Sans MS',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '5%'
},

textStyle = {
    fontSize: 20,
    color: 'rgb(255, 255, 255, 0.8)',
    

}

export default FeaturedPost