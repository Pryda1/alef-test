import React from "react";
import AppContext from "../context";

function Child({ remove, id, isSave }) {
  const { setChildsData, setIsSave, childsData } = React.useContext(AppContext);
  const [childName, setChildName] = React.useState("");
  const [childAge, setChildAge] = React.useState("");

  const handleChildeChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setChildName(value);
    } else {
      setChildAge((prev) => (/\d+/.test(Number(value)) ? value : prev));
    }
  };

  React.useEffect(() => {
    if (isSave) {
      const childInfo = { id: id, name: childName, age: childAge };
      if (childsData.length > 0) {
        childsData.splice(childInfo.id - 1, 1, childInfo);
        setChildsData(childsData);
      } else {
        setChildsData((prev) => [...prev, childInfo]);
        setChildAge("");
        setChildName("");
        setIsSave(false);
      }
    }
  }, [isSave]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="children__item">
      <label aria-label="Имя">
        <input
          type="text"
          value={childName}
          name="name"
          onChange={handleChildeChange}
          required
        />
      </label>
      <label aria-label="Возраст">
        <input
          type="text"
          value={childAge}
          name="age"
          onChange={handleChildeChange}
          required
        />
      </label>
      <button className="children__btn-remove" onClick={() => remove(id)}>
        Удалить
      </button>
    </div>
  );
}

export default Child;
