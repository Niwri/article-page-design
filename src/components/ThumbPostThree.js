import './styles/ThumbPostThree.css'

const postWidth = 250, postHeight = postWidth;
const fontSize = 15;



const ThumbPostThree = ( { title, date,author, image, link, authorImage, category } ) => {

    return (
        
            <div style={postContainerStyle}>
                <a className='linkBox' href="https://www.youtube.com/watch?v=jvGnekdMOhI" style={linkStyle}>
                    <div>
                        <img style={imageStyle} src={image} alt=""/>
                        <div>
                            <p style={titleStyle}>{title}</p>
                        </div>
                    </div>
                </a>
                <div style={authorContainerStyle}>
                    <p style={authorStyle}>{author}</p>
                    <p style={dateStyle}>{date}</p>
                    <div style={authorImageContainerStyle}><img style={authorImageStyle} src={authorImage} alt=""/></div>
                    
                    <p style={categoryStyle}>• {category}</p>
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
    zIndex: 1
}

const titleStyle = {
    fontSize: 20,
    fontWeight: 'bold',  
    margin: 'auto',
    width: postWidth-20,
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    borderColor: 'rgb(0, 0, 0, 0.3)',
    marginTop: 30,
    paddingBottom: 5
}

const linkStyle = {
    textDecoration: 'none'
}

const authorStyle = {
    gridArea: 'author',
    fontSize: fontSize,
    marginTop: 10,
    marginBottom: 3,
    marginLeft: 130,
}

const dateStyle = {
    marginTop: 0,
    gridArea: 'date',
    fontSize: fontSize,
}

const categoryStyle = {
    fontSize: fontSize,
    color: 'rgb(0, 0, 0, 0.5)',
    gridArea: 'category',
    position: 'relative',
    margin: 0,
    marginTop: -12,
    marginRight: fontSize*2+4*5+5+15
    
}

const authorImageStyle = {
    width: fontSize*2 + 4*5,
    height: fontSize*2 + 3*5,
    objectFit: 'cover',
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 100,
}

const authorImageContainerStyle = {
    gridArea: 'authorImage',
}

const authorContainerStyle = {
    position: 'relative',
    margin: 'auto',
    display: 'grid',
    maxWidth: postWidth,
    gridTemplateAreas:
        '\'author authorImage\'  \'date authorImage\'  \'category category\'',
    textAlign: 'right'
}

ThumbPostThree.defaultProps = {
    category: 'Neutral'
}

export default ThumbPostThree
