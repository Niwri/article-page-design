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
}

const pageTitleStyle = {
    fontWeight: 'bold',
    color: '#e26fff',
    fontSize: 100,
    margin: 'auto',
    marginBottom: 0,
    paddingBottom: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '0 0 5px 0',
    width: '50%',
    borderRadius: 20,
    boxShadow: '0 3px 0 0'
}

const descStyle = {
    margin: 50,
    fontSize: 20,
    color: 'gray'
}


export default Header
