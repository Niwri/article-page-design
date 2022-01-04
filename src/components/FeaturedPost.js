const FeaturedPost = ( { post }) => {
    return (
        <div style={containerStyle}>
            <a style={postLinkStyle} href={post.link}>
                <img style={imageStyle} src={post.image} alt=""/>
            </a>
            <button style={leftButtonStyle}>(--</button>
            <button style={rightButtonStyle}>--)</button>
        </div>
    )
}

const containerStyle = {
}

const postLinkStyle = {
    zIndex: 0,
}

const imageStyle = {
    width: '100%',
    borderRadius: 40,
    margin: 'auto'
}

const leftButtonStyle = {
    textAlign: 'left'
}

const rightButtonStyle = {
    textAlign: 'right'
}

export default FeaturedPost