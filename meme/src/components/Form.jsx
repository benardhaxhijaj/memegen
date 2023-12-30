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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  const { topText, bottomText } = meme;

  return (
    <main>
      <form className="form-div">
        <div className="form-container">
          <label>Top Text</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Shut up"
            className="input-div"
            name="topText"
            value={topText}
          />
        </div>
        <div className="form-container">
          <label>Bottom Text</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="And take my money"
            className="input-div"
            name="bottomText"
            value={bottomText}
          />
        </div>
      </form>
      <button className="btn-div" onClick={getMemeImg}>
        Get a new meme image 🖼
      </button>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Form;
