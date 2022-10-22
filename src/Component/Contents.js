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
        <img
          className="green"
          alt="Green Folder"
          src="./images/green_folder.svg"
        ></img>
        <img
          className="black"
          alt="Black Folder"
          src="./images/black_folder.svg"
        ></img>
        <img
          className="blue"
          alt="Blue Folder"
          src="./images/blue_folder.svg"
        ></img>
      </div>
    </div>
  );
}
