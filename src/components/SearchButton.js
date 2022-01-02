import searchIcon from './images/searchIcon.png'

const SearchButton = ( { isToggle, onToggle } ) => {
    return (
        <button style={searchButtonStyle} onClick={onToggle}>
            <img src={searchIcon} style={searchIconStyle} alt=""/>
        </button>
    )
}

//CSS Style for Search Button
const searchButtonStyle = {
    position: 'relative',
    borderRadius: 100,
    padding: 2,
    backgroundColor: "#F1F1F1",
    borderColor: "#E5E5E5",
    borderWidth: 2,
    width: 50,
    height: 50,
    zIndex: 1
}

//CSS Style for Search Icon
const searchIconStyle = {
    width: 30,
    height: 30,
    margin: 5
}

export default SearchButton
