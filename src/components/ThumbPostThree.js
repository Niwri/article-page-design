const postWidth = 250, postHeight = postWidth;

const ThumbPostThree = ( { title, date, text, author, image } ) => {
    return (
        <div style={postContainerStyle}>
            <img style={imageStyle} src={image} alt=""/>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <p>{author}</p>
            </div>
            <div>
                <p>{date}</p>
            </div>

        </div>
    )
}

const imageStyle = {
    position: 'relative',
    width: postWidth,
    height: postHeight*3/4,
}

const postContainerStyle = {
    textAlign: 'center',
}

export default ThumbPostThree
