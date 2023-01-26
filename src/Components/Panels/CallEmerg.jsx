import "../Styles/Panels.css";

export default function CallEmerg() {
  return (
    <button
      key={"call-emerg"}
      className="call-emerg"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <h3>Call Emergency Department</h3>
    </button>
  );
}
