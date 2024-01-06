import "../sass/main.css";
import arrowTop from "../assets/arrow_top.png";
import { useState } from "react";

function Dropdown(props) {
  return (
    <div>
      <DropdownItem title={props.title} key={props.title}>
        <DropdownText content={props.content} key={props.content} />
      </DropdownItem>
    </div>
  );
}

function DropdownItem(props) {
  const [open, setOpen] = useState(false);

  const [rotateChevron, setRotateChevron] = useState(false);

  const handleRotate = () => setRotateChevron(!rotateChevron);

  const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)";

  function dropdownEvent() {
    setOpen(!open);
    handleRotate();
  }

  return (
    <div className="dropdown-item" key={props.title}>
      <div className="dropdown-title">
        <p>{props.title}</p>
        <img
          src={arrowTop}
          alt="flèche vers le haut"
          className="dropdown-title__image"
          style={{ transform: rotate, transition: "all 0.2s linear" }}
          onClick={dropdownEvent}
        />
      </div>

      {open && props.children}
    </div>
  );
}

function DropdownText(props) {
  return (
    <div className="dropdown-txt" key={props.content}>
      <div>{props.content}</div>
    </div>
  );
}

export default Dropdown;
