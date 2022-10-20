import "./Contents.css";

export default function Content() {
  return (
    <div className="contents">
      <div className="quote">
        <h1>Work Smarter,</h1>
        <h1>build better</h1>
        <p>All your work easier than ever in one place</p>
        <button className="start-btn">Get Starded</button>
      </div>

      <div className="folders">
        <i className="green fa-solid fa-square"></i>
        <i className="black fa-solid fa-folder"></i>
        <i className="blue fa-solid fa-folder"></i>
      </div>
    </div>
  );
}
