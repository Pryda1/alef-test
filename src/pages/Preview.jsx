import React from "react";
import AppContext from "../context";

function Preview() {
  const { userData, childsData } = React.useContext(AppContext);
  return (
    <section className="preview">
      <div className="preview__personal">
        <h2>Персональные данные</h2>
        {userData.name && userData.name !== "" ? (
          <b>
            {userData.name}, {userData.age} лет
          </b>
        ) : (
          "Заполните форму"
        )}
      </div>
      <div className="preview__childs">
        <h2>Дети</h2>
        {childsData.length > 0
          ? childsData.map(
              (child) =>
                child.name !== "" &&
                child.age !== "" && (
                  <div className="preview__child" key={child.id}>
                    {child.name}, {child.age} лет
                  </div>
                )
            )
          : "Заполните форму"}
      </div>
    </section>
  );
}

export default Preview;
