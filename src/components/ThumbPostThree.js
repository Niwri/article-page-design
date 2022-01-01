const postWidth = 250, postHeight = postWidth;

const ThumbPostThree = ( { title, date, text, author, image } ) => {
    return (
        <div>
            <img style={imageStyle} src={image} alt=""/>

        </div>
    )
}

const imageStyle = {
    width: postWidth,
    height: postHeight*3/4,
}

export default ThumbPostThree
