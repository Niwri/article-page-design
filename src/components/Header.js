import React from 'react'

const Header = () => {
    return (
        <div style={headerStyle}>
            <p style={pageTitleStyle}>Article Page</p>
            <p style={descStyle}>• Insert cool quote here lmao • </p>
        </div>
    )
}

const headerStyle = {
    textAlign: 'center',
    
    marginTop: '3%'
},

pageTitleStyle = {
    fontWeight: 'bold',
    color: '#e26fff',
    fontSize: 100,
    margin: 'auto',
    marginBottom: 0,
    paddingBottom: 10,
    width: '50%',
    textShadow: '4px 4px 0px #C2ADD3',
    fontFamily: 'Comic Sans MS'
},

descStyle = {
    margin: 50,
    fontSize: 20,
    color: 'gray'
}


export default Header
