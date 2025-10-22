import { useState } from "react";
import "./FilterCatalog.css";

export function FilterCatalog() {
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
            Andrusha
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
            Andrusha
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
            Andrusha
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
            Andrusha
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
            Andrusha
          </div>
        </li>
      </ul>
    </div>
  );
}
