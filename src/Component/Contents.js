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
        <img className="green" src="./images/green_folder.png"></img>
        <img className="black" src="./images/black_folder.png"></img>
        <img className="blue" src="./images/blue_folder.png"></img>
      </div>
    </div>
  );
}
