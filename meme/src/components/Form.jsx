import React from "react";
import memesData from "../memesData";

const Form = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImage, setAllMemeImage] = React.useState(memesData);

  const getMemeImg = () => {
    const randomNumber = Math.floor(
      Math.random() * allMemeImage.data.memes.length
    );
    const randomMeme = allMemeImage.data.memes[randomNumber];

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomMeme.url,
    }));
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
      <img src={meme.randomImage} className="meme-img" />
    </main>
  );
};

export default Form;
