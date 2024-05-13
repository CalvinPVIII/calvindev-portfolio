import "../styles/BottomNavBar.css";

export default function BottomNavBar() {
  return (
    <div id="bottom-navbar">
      <div id="bottom-navbar-content">
        <div className="bottom-content-wrapper">
          <p>about</p>
        </div>
        <div className="bottom-content-wrapper">
          <p>projects</p>
        </div>
        <div className="bottom-content-wrapper">
          <p>resume</p>
        </div>
      </div>
    </div>
  );
}
