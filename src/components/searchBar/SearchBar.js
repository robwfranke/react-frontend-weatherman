import React, {useState} from 'react';
import './SearchBar.css';



function SearchBar({ setLocationHandler }) {
    const [query, setQuery] = useState('');

    function handleClick() {
        setLocationHandler(query);
    };
    // wanneer je op enter klikt, start ook setLocationHandler(query); op
    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            setLocationHandler(query);
        }
    };

    return (
        <span className="searchbar">
      <input
          type="text"
          name="search"
          value={query}
          onKeyDown={keyPressCheck}/*elke keer dat jee een toets indrukt, wordt er gechecked of dit evt de ENTER is*/
          onChange={(e) => setQuery(e.target.value)} /*waarde wordt elke keer toegevoegd aan query*/
          placeholder="Zoek een stad in Nederland"
      />
      <button
          type="button"
          onClick={handleClick}
      >
        Zoek
      </button>
    </span>
    );
};
export default SearchBar;
