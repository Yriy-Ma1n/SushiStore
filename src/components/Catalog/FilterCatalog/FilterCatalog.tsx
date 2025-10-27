import { useState } from "react";
import "./FilterCatalog.css";
import "./DropElement.css";

export function FilterCatalog() {
  //для отоброжения выпадающего окна
  const [displayPrice, setDisplayPrice] = useState("none");
  const [displayCategory, setDisplayCategory] = useState("none");
  const [displayFilling, setDisplayFilling] = useState("none");
  const [displayWeight, setDisplayWeight] = useState("none");
  const [displayNewDeals, setDisplayNewDeals] = useState("none");

  // для кастомного чекбокса
  const [range1, setRange1] = useState("checkBoxItemTrue");
  const [range2, setRange2] = useState("checkBoxItemTrue");
  const [range3, setRange3] = useState("checkBoxItemTrue");
  function setCheckBox(range: string, setRange: Function) {
    if (range === "checkBoxItemFalse") {
      setRange("checkBoxItemTrue");
    } else {
      setRange("checkBoxItemFalse");
    }
  }

  return (
    <div className="filter">
      <ul className="listFilter">
        <li
          onMouseOver={() => setDisplayPrice("flex")}
          onMouseOut={() => setDisplayPrice("none")}
        >
          <span className="filterElement">
            <p>Price</p>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </span>
          <div className="fakeSpace"></div>
          <div style={{ display: displayPrice }} className="drop-downElement">
            <div className="drop-downElementInfo">
              <div className="inputBlock">
                <input placeholder="min" type="text" />
                <input placeholder="max" type="text" />
              </div>

              <div className="CheckBox">
                <div onClick={() => setCheckBox(range1, setRange1)}>
                  <div className={range1} id="range1">
                    <span className="material-symbols-outlined">check</span>
                  </div>
                  <label htmlFor="range1">300-900</label>
                </div>

                <div onClick={() => setCheckBox(range2, setRange2)}>
                  <div className={range2} id="range2">
                    <span className="material-symbols-outlined">check</span>
                  </div>
                  <label htmlFor="range2">900-1500</label>
                </div>

                <div onClick={() => setCheckBox(range3, setRange3)}>
                  <div className={range3} id="range3">
                    <span className="material-symbols-outlined">check</span>
                  </div>
                  <label htmlFor="range3">1500-2000</label>
                </div>
              </div>
            </div>

            <button className="drop-downElementAccept">Accept</button>
          </div>
        </li>

        <li
          onMouseOver={() => setDisplayCategory("flex")}
          onMouseOut={() => setDisplayCategory("none")}
        >
          <span className="filterElement">
            <p>Category</p>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </span>
          <div className="fakeSpace"></div>
          <div style={{ display: displayCategory }} className="drop-downElement">
            <button className="drop-downElementAccept">Accept</button>
          </div>
        </li>

        <li
          onMouseOver={() => setDisplayFilling("flex")}
          onMouseOut={() => setDisplayFilling("none")}
        >
          <span className="filterElement">
            <p>Filling</p>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </span>
          <div className="fakeSpace"></div>
          <div style={{ display: displayFilling }} className="drop-downElement">
            <button className="drop-downElementAccept">Accept</button>
          </div>
        </li>

        <li
          onMouseOver={() => setDisplayWeight("flex")}
          onMouseOut={() => setDisplayWeight("none")}
        >
          <span className="filterElement">
            <p>Weight</p>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </span>
          <div className="fakeSpace"></div>
          <div style={{ display: displayWeight }} className="drop-downElement">
            <button className="drop-downElementAccept">Accept</button>
          </div>
        </li>

        <li
          onMouseOver={() => setDisplayNewDeals("flex")}
          onMouseOut={() => setDisplayNewDeals("none")}
        >
          <span className="OrangeFilterElement">
            <p>New & Deals</p>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </span>
          <div className="fakeSpace"></div>
          <div style={{ display: displayNewDeals }} className="drop-downElementYellow">
            <button className="drop-downElementAccept">Accept</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
