import React from "react";
import memesData from "../memesData";

const Form = () => {
  const [memeImg, setMemeImg] = React.useState("");

  const getMemeImg = () => {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    setMemeImg(memesArray[randomNum].url);
  };

  return (
    <main>
      <form className="form-div">
        <div className="form-container">
          <label>Top Text</label>
          <input type="text" placeholder="Shut up" className="input-div" />
        </div>
        <div className="form-container">
          <label>Bottom Text</label>
          <input
            type="text"
            placeholder="And take my money"
            className="input-div"
          />
        </div>
      </form>
      <button className="btn-div" onClick={getMemeImg}>
        Get a new meme image 🖼
      </button>
      <img src={memeImg} className="meme-img" />
    </main>
  );
};

export default Form;
