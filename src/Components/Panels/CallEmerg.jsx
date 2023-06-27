import "../Styles/Panels.css";

export default function CallEmerg() {

  const handleClick = () => {
      //TODO:
      //will need to take location of kiosk
      //call emerg - find package
  };
  return (
    <button
      key={"call-emerg"}
      className="call-emerg"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <h3>Call 911</h3>
    </button>
  );
}
