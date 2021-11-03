import React from "react";
import { Route, Link } from "react-router-dom";
import AppContext from "./context";
import { Main, Preview } from "./pages";

function App() {
  const [userData, setUserData] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userAge, setUserAge] = React.useState("");
  const [childCount, setChildCount] = React.useState([]);
  const [isSave, setIsSave] = React.useState(false);
  const [childsData, setChildsData] = React.useState([]);

  return (
    <AppContext.Provider
      value={{
        userData,
        userName,
        userAge,
        childCount,
        isSave,
        childsData,
        setUserData,
        setUserName,
        setUserAge,
        setChildCount,
        setIsSave,
        setChildsData,
      }}
    >
      <div className="wrapper">
        <header className="header">
          <Link to="/">
            <img src="./assets/logo.png" className="header__logo" alt="logo" />
          </Link>
          <nav className="header__navigation navigation">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link to="/">Форма</Link>
              </li>
              <li className="navigation__item">
                <Link to="preview">Превью</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" component={Main} exact />
        <Route path="/preview" component={Preview} exact />
        <footer>all rights reserved</footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
