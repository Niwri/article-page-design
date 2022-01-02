import ThumbPost from './ThumbPostThree.js'

const HorizontalContainer = ( { posts, category }) => {
        
        const ele = document.getElementsByClassName('postContainer');
        ele.scrollTop = 0;
        ele.scrollLeft = 0;
        
        let pos = {
            top: 0,
            left: 0,
            x: 0,
            y: 0
        }

        const mouseDownHandler = (e) => {
            if(e.target.className === 'postContainer') {
                e.target.style.cursor = 'grabbing';
                e.target.style.userSelect = 'none';

                pos = {
                    left: e.target.scrollLeft,
                    top: e.target.scrollTop,
                    x: e.clientX,
                    y: e.clientY
                };

                document.addEventListener('mousemove', mouseMoveHandler);
                document.addEventListener('mouseup', mouseUpHandler);
            }
        }

        const mouseMoveHandler = (e) => {
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;

            e.target.scrollTop = pos.top - dy;
            e.target.scrollLeft = pos.left - dx;

        }

        const mouseUpHandler = (e) => {
            e.target.style.cursor = 'grab';
            e.target.style.removeProperty('user-select');
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }
        
        document.addEventListener('mousedown', mouseDownHandler);

        
        return (
            <div style={containerStyle}>

                <div style={categoryStyle}>
                    {category}
                </div>
                
                <div style={horizStyle}>
                    <div className="postContainer" style={postContainerStyle}>
                        {posts.map((post) => {
                            return <ThumbPost 
                                    title={post.title} 
                                    date={post.date} 
                                    author={post.author} 
                                    image={post.image} 
                                    authorImage={post.authorImage}
                                    category={post.category}
                                    />
                        })}
                    </div>
                </div>

            </div>
        )
}

const containerStyle = {
    marginLeft: '10%',
}

const postContainerStyle = {
    display: 'flex',
    flexWrap: 'nowrap',
    gridColumnGap: 20,
    overflowX: 'auto',
    paddingBottom: 10,
    cursor: 'grab',
    zIndex: 3
}

const categoryStyle = {
    position: 'relative',
    fontSize: 35,
    fontWeight: 'bold',
    top: 35/2+5,
    zIndex: 1,
    backgroundColor: 'white',
    width: 'fit-content',
    left: 75,
    padding: '0px 10px 0px 10px',
    color: '#7960AE',
}

const horizStyle = {
    position: 'relative',
    borderStyle: 'solid',
    borderWidth: 10,
    borderRadius: 40,
    borderColor: '#9E81DD',
    width: '80%',
    zIndex: 0,
    padding: '40px 20px 10px 20px',

}

export default HorizontalContainer