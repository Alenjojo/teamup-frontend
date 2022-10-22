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
          src="https://firebasestorage.googleapis.com/v0/b/gggg-55aad.appspot.com/o/website%2Fgreen_folder.webp?alt=media&token=e7fdf43b-2c5a-4a6f-9214-a23cd823fc00"
        ></img>
        <img
          className="black"
          alt="Black Folder"
          src="https://firebasestorage.googleapis.com/v0/b/gggg-55aad.appspot.com/o/website%2Fblack_folder.webp?alt=media&token=2ac22d71-b25a-41cf-b0fa-b144b4b1c2b8"
        ></img>
        <img
          className="blue"
          alt="Blue Folder"
          src="https://firebasestorage.googleapis.com/v0/b/gggg-55aad.appspot.com/o/website%2Fblue_folder.webp?alt=media&token=4b3940d8-7154-4ad0-9a4b-eb8c7451be64"
        ></img>
      </div>
    </div>
  );
}
