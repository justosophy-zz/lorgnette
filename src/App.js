// @flow

import React from "react";
import "./App.css";

import SearchInput from './components/SearchInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="App-logo"
        >
          <path
            className="animate-fill"
            fill="hsla(220, 13%, 5%, 0.9)"
            d="M11 5C9.032 5 7.46 6.44 7.125 8.313c-1.89.476-3.53 1.705-4.25 3.656h-.03L.718 17.936C.265 18.863 0 19.904 0 21c0 3.854 3.146 7 7 7 3.472 0 6.365-2.552 6.906-5.875.543.535 1.28.875 2.094.875.814 0 1.55-.34 2.094-.875C18.634 25.448 21.528 28 25 28c3.854 0 7-3.146 7-7 0-.974-.2-1.906-.563-2.75l-2.28-6.375-.032-.03v-.033c-.73-1.77-2.348-3.012-4.25-3.5C24.54 6.442 22.968 5 21 5c-1.857 0-3.362 1.285-3.813 3h-2.375c-.45-1.715-1.955-3-3.812-3zm0 2c1.19 0 2 .81 2 2v1h6V9c0-1.19.81-2 2-2s2 .81 2 2v.906l.906.094c1.486.156 2.766 1.192 3.344 2.53.01.022.022.042.03.064l.75 2.125c-.918-.446-1.944-.72-3.03-.72-2.924 0-5.425 1.817-6.47 4.375C17.996 17.545 17.054 17 16 17c-1.053 0-1.995.544-2.53 1.375C12.424 15.817 9.923 14 7 14c-1.072 0-2.09.253-3 .688l.75-2.032v-.03c.58-1.55 1.808-2.464 3.344-2.626L9 9.906V9c0-1.19.81-2 2-2zm-4 9c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5c0-.708.175-1.36.438-1.97.016-.037.013-.086.03-.124C3.26 17.192 4.98 16 7 16zm18 0c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5zm-9 3c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1z"
          />
          <circle cx="7" cy="21" r="3" strokeWidth="0" fill="#0063DC" />
          <circle cx="25" cy="21" r="3" strokeWidth="0" fill="#FF0084" />
        </svg>
        <SearchInput />
      </header>
    </div>
  );
}

export default App;
