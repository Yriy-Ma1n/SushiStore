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

  return (
    <div className="filter">
      <ul className="listFilter">
        <li
          onMouseOver={() => setDisplayPrice("flex")}
          onMouseOut={() => setDisplayPrice("none")}
        >
          <span className="filterElement">
            <p>Price</p>
            <svg
              enableBackground="new 0 0 50 50"
              height="50px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              width="50px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect fill="none" height="50" width="50" />
              <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
            </svg>
          </span>
          <div className="fakeSpace"></div>
          <div style={{ display: displayPrice }} className="drop-downElement">
            <div className="drop-downElementInfo">
              <div className="inputBlock">
                <input placeholder="min" type="text" />
                <input placeholder="max" type="text" />
              </div>

              <div className="CheckBox">
                <div>
                  <input type="checkbox" id="test1" />
                  <label htmlFor="test1">Test1</label>
                </div>

                <div>
                  <input type="checkbox" id="test2" />
                  <label htmlFor="test2">Test2</label>
                </div>

                <div>
                  <input type="checkbox" id="test3" />
                  <label htmlFor="test3">Test3</label>
                </div>

                <div>
                  <input type="checkbox" id="test4" />
                  <label htmlFor="test4">Test4</label>
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
            <svg
              enableBackground="new 0 0 50 50"
              height="50px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              width="50px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect fill="none" height="50" width="50" />
              <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
            </svg>
          </span>
          <div className="fakeSpace"></div>
          <div
            style={{ display: displayCategory }}
            className="drop-downElement"
          >
            <button className="drop-downElementAccept">Accept</button>
          </div>
        </li>

        <li
          onMouseOver={() => setDisplayFilling("flex")}
          onMouseOut={() => setDisplayFilling("none")}
        >
          <span className="filterElement">
            <p>Filling</p>
            <svg
              enableBackground="new 0 0 50 50"
              height="50px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              width="50px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect fill="none" height="50" width="50" />
              <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
            </svg>
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
            <svg
              enableBackground="new 0 0 50 50"
              height="50px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              width="50px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect fill="none" height="50" width="50" />
              <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
            </svg>
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
            <svg
              enableBackground="new 0 0 50 50"
              height="50px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              width="50px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect fill="none" height="50" width="50" />
              <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
            </svg>
          </span>
          <div className="fakeSpace"></div>
          <div
            style={{ display: displayNewDeals }}
            className="drop-downElementYellow"
          >
            <button className="drop-downElementAccept">Accept</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
