import React, {useState} from "react";
import Card from "../components/Card";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-secondary">
          <svg
                  className=" fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512">
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
        </button>
      )}
      {isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-primary">
           <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512">
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
        </button>
      )}

     {isOpen&& <ul className="menu bg-base-200 rounded-box w-56">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>}

      <Card/>



    </div>
  );
};

export default Home;
