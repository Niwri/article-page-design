import './styles/ThumbPostTwo.css'


const postWidth = 250, postHeight = postWidth*4/3;
const fontSize = 30;
const darkPurple = '#9142ff';
const lightPurple = '#BB8CFF';

const ThumbPostTwo = ( { title, date, text, author, image } ) => {
    return (
        <div style={thumbPostStyle}>
            <div>

            </div>
            <img src={image} alt="" style={imageStyle}/>
        </div>
    )
}

const thumbPostStyle = {
    width: postWidth,
    height: postHeight,
    backgroundColor: darkPurple,
}

const imageStyle = {
    width: '100%',
    height: postHeight-postHeight/4,
    objectFit: 'cover',
    //Test2
}

export default ThumbPostTwo
