import SearchButton from './SearchButton.js'
import SearchTextField from './SearchTextField.js'

const SearchContainer = ( { searchToggle, toggleSearch }) => {
    return (
        <div style={searchContainerStyle}>
            <SearchButton isToggle={searchToggle} onToggle={toggleSearch}/>
            {searchToggle ? <SearchTextField/> : <></>}
        </div>
    )
}

//Style for Search Container
const searchContainerStyle = {
    margin: 'auto', 
    position: 'relative', 
    textAlign: 'center', 
    marginTop: 100,
    marginLeft: 100, 
    paddingBottom: 100,
    display: 'flex',
    width: 1000,
}

export default SearchContainer
