import react, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import './SearchBar.css';

function SearchBar() {

    const [searchValue, setSearchValue] = useState('');

    return (
        <form className="search_bar">
            <input
                type="search"
                placeholder="Buscar produtos"
                className="search_input"
                onChange={({ target }) => setSearchValue(target.value)}
                required
            />
            {searchValue}
            <button type="submit" className="search_button">
                <CiSearch />
            </button>
        </form>
    );
}

export default SearchBar;