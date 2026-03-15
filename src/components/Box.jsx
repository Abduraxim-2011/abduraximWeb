import "../Pages/css/App.css"
import "../Pages/css/index.css"
import { useRef } from "react";
function Box({ text, title, icon }) {
  const boxRef = useRef(null);

  const handleMove = (e) => {
    const rect = boxRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    boxRef.current.style.setProperty("--x", x + "px");
    boxRef.current.style.setProperty("--y", y + "px");
  };


  return (
    <>
        <div ref={boxRef}
          onMouseMove={(e) => handleMove(e, boxRef)}
          className="box">
          <img src={icon} alt="" />
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

    </>
  )
}
export default Box