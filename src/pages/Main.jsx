import React from "react";
import AppContext from "../context";
import { Child } from "../components";

function Main() {
  const {
    userName,
    userAge,
    childCount,
    isSave,
    setUserData,
    setUserName,
    setUserAge,
    setChildCount,
    setIsSave,
  } = React.useContext(AppContext);

  const addChild = () => {
    if (childCount.length < 5) {
      const id = childCount.length + 1;
      setChildCount((prev) => [...prev, id]);
    }
  };

  const removeChild = (id) => {
    setChildCount(childCount.filter((item) => item !== id));
  };

  const handleUserChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setUserName(value);
    } else {
      setUserAge((prev) => (/\d+/.test(Number(value)) ? value : prev));
    }
  };

  const saveData = () => {
    if (userName.trim !== "" && userAge.trim !== "") setIsSave(true);
    setUserData({ name: userName, age: userAge });
    setUserName("");
    setUserAge("");
    setChildCount([]);
    console.log(childCount);
  };

  return (
    <section className="main">
      <div className="main__personal">
        <h2>Персональные данные</h2>
        <label aria-label="Имя">
          <input
            type="text"
            name="name"
            value={userName}
            onChange={handleUserChange}
            required
          />
        </label>
        <label aria-label="Возраст">
          <input
            type="text"
            value={userAge}
            name="age"
            onChange={handleUserChange}
            required
          />
        </label>
      </div>
      <div className="main__children children">
        <div className="children__title">
          <h2>Дети (макс.5)</h2>
          {childCount.length < 5 ? (
            <button className="children__btn" onClick={addChild}>
              <img src="./assets/plus.svg" alt="" />
              Добавить ребенка
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="children__items">
          {childCount &&
            childCount.map((item, index) => (
              <Child
                key={item}
                id={item}
                remove={removeChild}
                isSave={isSave}
              />
            ))}
        </div>
        <button className="children__btn-save" onClick={saveData}>
          Сохранить
        </button>
      </div>
    </section>
  );
}

export default Main;
