import FeaturedPost from './FeaturedPost.js'

const FeaturedContainer = ( { featuredPosts }) => {

    return (
        <div style={containerStyle}>
            <div style={categoryStyle}>Featured Section</div>
            <div style={featuredContainerStyle}>
                <FeaturedPost post={featuredPosts[0]}/>
            </div>
        </div>
    )
}

const containerStyle = {
    marginLeft: '10%'

}

const categoryStyle = {
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
}

const featuredContainerStyle = {
    position: 'relative',
    borderStyle: 'solid',
    borderWidth: 10,
    borderRadius: 40,
    borderColor: '#9E81DD',
    width: '50%',
    zIndex: 0,
    padding: '40px 20px 10px 20px',
}

export default FeaturedContainer