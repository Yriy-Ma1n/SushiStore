import { memo, useRef, useState } from "react";
import "./FilterCatalog.css";
import "./DropElement.css";
import type { Product } from "../../../Types/Product";

export const FilterCatalog = memo((products:Product[] | []) => {
  //для отоброжения выпадающего окна
  const [displayPrice, setDisplayPrice] = useState("none");
  const [displayCategory, setDisplayCategory] = useState("none");
  const [displayFilling, setDisplayFilling] = useState("none");
  const [displayWeight, setDisplayWeight] = useState("none");
  const [displayNewDeals, setDisplayNewDeals] = useState("none");

  // для кастомного чекбокса
  const [range1, setRange1] = useState("checkBoxItemTrue");
  const objRange1 = {
    min: 300,
    max: 900,
  }
  const [range2, setRange2] = useState("checkBoxItemTrue");
    const objRange2 = {
    min: 900,
    max: 1500,
  }
  const [range3, setRange3] = useState("checkBoxItemTrue");
    const objRange3 = {
    min: 1500,
    max: 2000,
  }
  function setCheckBox(range: string, setRange: Function) {
    if (range === "checkBoxItemFalse") {
      setRange("checkBoxItemTrue");
    } else {
      setRange("checkBoxItemFalse");
    }
  }

  //фильтр цены
  const originalProducts = Object.values(products);
  let productsAfterFilter = originalProducts;

  let inputMin = useRef<HTMLInputElement>(null);
  let inputMax = useRef<HTMLInputElement>(null);
  const inputCheckPrice = () => {
    let min = Number(inputMin.current!.value);
    let max = Number(inputMax.current!.value);
    
    if(!min || !max){
      console.log("inputs empty");
      return
    }else{
      productsAfterFilter = productsAfterFilter.filter((el) => el.price >= min && el.price <= max);
      priceComparison(objRange1, setRange1);
      priceComparison(objRange2, setRange2);
      priceComparison(objRange3, setRange3);
    }
  }

  const priceComparison = (objRange:{min:number, max:number}, setRange:Function) => {
    let min = Number(inputMin.current!.value);
    let max = Number(inputMax.current!.value);

    if(objRange.min >= max || min >= objRange.max){
      setRange("checkBoxItemFalse");
    }
  }

  const acceptPrice = () => {
    inputCheckPrice();
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
                <input ref={inputMin} placeholder="min" type="text" />
                <input ref={inputMax} placeholder="max" type="text" />
              </div>

              <div className="CheckBox">
                <div onClick={() => setCheckBox(range1, setRange1)}>
                  <div className={range1}>
                    <span className="material-symbols-outlined">check</span>
                  </div>
                  <label htmlFor="range1">{objRange1.min}-{objRange1.max}</label>
                </div>

                <div onClick={() => setCheckBox(range2, setRange2)}>
                  <div className={range2}>
                    <span className="material-symbols-outlined">check</span>
                  </div>
                  <label htmlFor="range2">{objRange2.min}-{objRange2.max}</label>
                </div>

                <div onClick={() => setCheckBox(range3, setRange3)}>
                  <div className={range3}>
                    <span className="material-symbols-outlined">check</span>
                  </div>
                  <label htmlFor="range3">{objRange3.min}-{objRange3.max}</label>
                </div>
              </div>
            </div>

            <button onClick={() => acceptPrice()} className="drop-downElementAccept">Accept</button>
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
)