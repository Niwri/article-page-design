import './styles/ThumbPostOne.css'

const postWidth = 250, postHeight = postWidth*4/3;
const fontSize = 30;
const darkPurple = '#9142ff';
const lightPurple = '#BB8CFF';

const ThumbPost = ( { title, date, text, author, image }) => {
    
    return (
        <div className='thumbPost' style={thumbPostStyle}>
            
            <img src={image} alt="" style={imageStyle}/>
            <div style={purpleBackgroundStyle}></div>
            <div className='sharpCorner' style={sharpCorner}></div>
            <div className='postTitle' style={postTitleStyle}>
                <p>{title}</p>
            </div>
            <div className='postText' style={postTextStyle}>
                <p style={textStyle}>{text}</p>
            </div>
            
        </div>
    )
}

const thumbPostStyle = {
    width: postWidth,
    height: postHeight,
    backgroundColor: darkPurple
}

const purpleBackgroundStyle = {
    position: 'relative',
    width: postWidth,
    height: postHeight-postHeight/4-5,
    backgroundColor: lightPurple,
    zIndex: 1,
    marginTop: -3*postHeight/4,
}

const imageStyle = {
    position: 'relative',
    width: '100%',
    height: postHeight-postHeight/4,
    objectFit: 'cover',
    zIndex: 2,
    borderRadius: '0 0 50px 0'
}

const postTitleStyle = {
    position: 'relative',
    margin: 'auto',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    zIndex: 3,
    width: '100%',
    height: postHeight/4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const sharpCorner = {
    position: 'relative',
    width: postWidth/5,
    height: postHeight/4,
    borderRadius: '0 0 200px 0',
    zIndex: 3,
    marginTop: -postHeight/4,
    backgroundColor: 'rgb(0, 0, 0, 0)'
}

const postTextStyle = {
    position: 'relative',
    width: postWidth,
    height: postHeight,
    top: -postHeight-fontSize,
    backgroundColor: lightPurple,
    zIndex: -1,
    fontSize: fontSize,
}

const textStyle = {
    paddingLeft: 40,
    paddingTop: 40
}

export default ThumbPost
